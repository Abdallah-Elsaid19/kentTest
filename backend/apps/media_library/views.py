from hashlib import sha256
from pathlib import Path

from PIL import Image, UnidentifiedImageError
from rest_framework.exceptions import ValidationError
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.audit.models import AuditLog
from apps.cms.permissions import IsCMSAdmin

from .models import MediaAsset
from .serializers import MediaAssetSerializer


IMAGE_FORMATS = {
    "JPEG": ("image/jpeg", ".jpg"),
    "PNG": ("image/png", ".png"),
    "WEBP": ("image/webp", ".webp"),
    "GIF": ("image/gif", ".gif"),
}
MAX_IMAGE_BYTES = 10 * 1024 * 1024
MAX_VIDEO_BYTES = 75 * 1024 * 1024
MAX_IMAGE_PIXELS = 40_000_000


def _inspect_image(upload):
    try:
        with Image.open(upload) as image:
            image_format = image.format
            width, height = image.size
            image.verify()
    except (Image.DecompressionBombError, UnidentifiedImageError, OSError, SyntaxError, ValueError) as exc:
        raise ValidationError({"file": "Upload a valid JPEG, PNG, WebP or GIF image."}) from exc
    finally:
        upload.seek(0)
    if image_format not in IMAGE_FORMATS:
        raise ValidationError({"file": "Upload a JPEG, PNG, WebP or GIF image."})
    if width * height > MAX_IMAGE_PIXELS:
        raise ValidationError({"file": "The image dimensions are too large."})
    mime_type, extension = IMAGE_FORMATS[image_format]
    return mime_type, extension, width, height


def _inspect_video(upload):
    header = upload.read(16)
    upload.seek(0)
    if len(header) >= 12 and header[4:8] == b"ftyp":
        return "video/mp4", ".mp4"
    if header.startswith(b"\x1a\x45\xdf\xa3"):
        return "video/webm", ".webm"
    raise ValidationError({"file": "Upload a valid MP4 or WebM video."})


class MediaUploadView(APIView):
    permission_classes = [IsCMSAdmin]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        upload = request.FILES.get("file")
        if upload is None:
            raise ValidationError({"file": "Choose a file to upload."})
        if upload.size <= 0:
            raise ValidationError({"file": "The selected file is empty."})

        requested_kind = request.data.get("kind")
        if requested_kind == MediaAsset.Kind.IMAGE:
            if upload.size > MAX_IMAGE_BYTES:
                raise ValidationError({"file": "Images must be 10 MB or smaller."})
            mime_type, extension, width, height = _inspect_image(upload)
        elif requested_kind == MediaAsset.Kind.VIDEO:
            if upload.size > MAX_VIDEO_BYTES:
                raise ValidationError({"file": "Videos must be 75 MB or smaller."})
            mime_type, extension = _inspect_video(upload)
            width = height = None
        else:
            raise ValidationError({"kind": "Choose image or video."})

        original_stem = Path(upload.name).stem.strip() or requested_kind
        upload.name = f"{original_stem[:180]}{extension}"
        title = str(request.data.get("title") or original_stem).strip()[:200]
        if not title:
            title = requested_kind.title()
        alt_text = str(request.data.get("alt_text") or title).strip()[:250] if requested_kind == MediaAsset.Kind.IMAGE else ""

        digest = sha256()
        for chunk in upload.chunks():
            digest.update(chunk)
        upload.seek(0)

        asset = MediaAsset(
            title=title,
            file=upload,
            kind=requested_kind,
            alt_text=alt_text,
            mime_type=mime_type,
            file_size=upload.size,
            width=width,
            height=height,
            checksum=digest.hexdigest(),
        )
        asset.full_clean()
        asset.save()
        AuditLog.objects.create(
            action="upload",
            model_label=asset._meta.label,
            object_id=str(asset.pk),
            object_repr=asset.title,
            actor=request.user,
            request_id=getattr(request, "request_id", ""),
            changes={"kind": asset.kind, "mime_type": asset.mime_type, "file_size": asset.file_size},
        )
        return Response(MediaAssetSerializer(asset, context={"request": request}).data, status=201)
