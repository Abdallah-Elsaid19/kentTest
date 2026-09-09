import { useId, useRef, useState } from "react";
import { ArrowDown, ArrowUp, FileImage, FileVideo, Plus, Trash2, Upload } from "lucide-react";
import { uploadMedia, type MediaKind } from "./api";
import type { FieldSchema } from "./schema";

function fieldLabel(key: string) {
  return key.replace(/([a-z])([A-Z0-9])/g, "$1 $2").replace(/^./, c => c.toUpperCase()).replace(/^Copy$/, "Headings, copy and links");
}
function blankValue(schema: FieldSchema): unknown {
  if (schema.type === "object") return Object.fromEntries(Object.entries(schema.properties!).filter(([key]) => schema.required?.includes(key)).map(([key, child]) => [key, blankValue(child)]));
  if (schema.type === "array") return Array.from({ length: schema.minItems ?? 1 }, () => blankValue(schema.items!));
  if (schema.type === "boolean") return false;
  if (schema.type === "number") return schema.minimum ?? 0;
  return schema.enum?.[0] ?? "";
}

type Props = { schema: FieldSchema; value: unknown; onChange: (value: unknown) => void; label: string; path?: string; errors: Record<string, string>; disabled?: boolean };

type MediaFieldProps = {
  id: string;
  kind: MediaKind;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  maxLength?: number;
};

function MediaField({ id, kind, label, value, onChange, error, disabled, maxLength }: MediaFieldProps) {
  const input = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const Icon = kind === "image" ? FileImage : FileVideo;
  const accept = kind === "image" ? "image/jpeg,image/png,image/webp,image/gif" : "video/mp4,video/webm";

  const selectFile = async (file?: File) => {
    if (!file) return;
    setUploadError("");
    setUploading(true);
    try {
      const asset = await uploadMedia(file, kind, label);
      onChange(asset.url);
    } catch (uploadFailure) {
      setUploadError(uploadFailure instanceof Error ? uploadFailure.message : "The file could not be uploaded.");
    } finally {
      setUploading(false);
      if (input.current) input.current.value = "";
    }
  };

  return <div className="cms-field cms-media-field">
    <label htmlFor={id}>{label}<span> · {kind === "image" ? "Image" : "Video"}</span></label>
    <div className={`cms-media-preview cms-media-preview--${kind}`}>
      {value ? kind === "image"
        ? <img src={value} alt="" />
        : <video src={value} controls preload="metadata" />
        : <span><Icon size={28} />No {kind} selected</span>}
    </div>
    <div className="cms-media-controls">
      <input id={id} type="text" value={value} maxLength={maxLength} disabled={disabled || uploading} aria-invalid={Boolean(error || uploadError)} aria-describedby={error || uploadError ? `${id}-error` : undefined} onChange={event => onChange(event.target.value)} spellCheck={false} placeholder="Paste a URL or upload a file" />
      <button type="button" className="cms-button cms-media-upload" disabled={disabled || uploading} onClick={() => input.current?.click()}><Upload size={16} />{uploading ? "Uploading…" : `Upload ${kind}`}</button>
      <input ref={input} className="cms-visually-hidden" type="file" accept={accept} disabled={disabled || uploading} onChange={event => void selectFile(event.target.files?.[0])} />
    </div>
    {(error || uploadError) && <p id={`${id}-error`} role="alert" className="cms-field-error">{error || uploadError}</p>}
    {uploading && <p className="cms-media-status" role="status">Uploading securely…</p>}
  </div>;
}

export function ContentFields({ schema, value, onChange, label, path = "content", errors, disabled }: Props) {
  const id = useId();
  const error = errors[path];
  if (schema.type === "object") {
    const object = (value ?? {}) as Record<string, unknown>;
    return <fieldset className="cms-fields" disabled={disabled}><legend>{label}</legend>{Object.entries(schema.properties!).map(([key, child]) => {
      const optional = !schema.required?.includes(key);
      const update = (next: unknown) => { const updated = { ...object }; if (next === undefined) delete updated[key]; else updated[key] = next; onChange(updated); };
      return <div key={key}>
        {optional && <label className="cms-optional"><input type="checkbox" checked={object[key] !== undefined} onChange={event => update(event.target.checked ? blankValue(child) : undefined)} />Include {fieldLabel(key).toLowerCase()}</label>}
        {(!optional || object[key] !== undefined) && <ContentFields schema={child} value={object[key]} label={child.title || fieldLabel(key)} path={`${path}.${key}`} onChange={update} errors={errors} disabled={disabled} />}
      </div>;
    })}</fieldset>;
  }
  if (schema.type === "array") {
    const items = (value ?? []) as unknown[];
    const move = (index: number, direction: number) => { const next = [...items]; [next[index], next[index + direction]] = [next[index + direction], next[index]]; onChange(next); };
    return <fieldset className="cms-fields cms-array" disabled={disabled}><legend>{label} <span>({items.length})</span></legend>
      {items.map((item, index) => {
        const record = item && typeof item === "object" ? item as Record<string, unknown> : {};
        const title = String(record.title || record.name || record.category || record.tab || `Item ${index + 1}`);
        return <details key={index} className="cms-array-item" open={schema.items?.type !== "object" || undefined}>
          <summary>{index + 1}. {title}</summary>
          <div className="cms-array-body"><div className="cms-array-tools">
            <button type="button" className="cms-icon-button" aria-label={`Move ${title} up`} disabled={disabled || index === 0} onClick={() => move(index, -1)}><ArrowUp size={16} /></button>
            <button type="button" className="cms-icon-button" aria-label={`Move ${title} down`} disabled={disabled || index === items.length - 1} onClick={() => move(index, 1)}><ArrowDown size={16} /></button>
            <button type="button" className="cms-icon-button" aria-label={`Remove ${title}`} disabled={disabled || items.length <= schema.minItems!} onClick={() => onChange(items.filter((_, i) => i !== index))}><Trash2 size={16} /></button>
          </div><ContentFields schema={schema.items!} value={item} label={schema.items?.type === "string" ? "Value" : "Item details"} path={`${path}.${index}`} onChange={next => onChange(items.map((v, i) => i === index ? next : v))} errors={errors} disabled={disabled} /></div>
        </details>;
      })}
      {error && <p role="alert" className="cms-field-error">{error}</p>}
      {!disabled && <button type="button" className="cms-button cms-button--quiet" disabled={items.length >= schema.maxItems!} onClick={() => onChange([...items, blankValue(schema.items!)])}><Plus size={16} />Add item</button>}
    </fieldset>;
  }
  const props = { id, disabled, "aria-invalid": Boolean(error), "aria-describedby": error ? `${id}-error` : undefined };
  if (schema.type === "string" && schema.mediaKind) return <MediaField id={id} kind={schema.mediaKind} label={label} value={String(value ?? "")} onChange={onChange} error={error} disabled={disabled} maxLength={schema.maxLength} />;
  return <div className="cms-field">
    <label htmlFor={id}>{label}{schema.format === "url" && <span> · URL or path</span>}</label>
    {schema.type === "boolean" ? <input {...props} type="checkbox" checked={Boolean(value)} onChange={event => onChange(event.target.checked)} />
      : schema.type === "number" ? <input {...props} type="number" min={schema.minimum} max={schema.maximum} value={Number(value ?? 0)} onChange={event => onChange(event.target.valueAsNumber)} />
      : schema.enum ? <select {...props} value={String(value ?? "")} onChange={event => onChange(event.target.value)}>{schema.enum.map(option => <option key={option}>{option}</option>)}</select>
      : schema.format === "url" ? <input {...props} type="text" maxLength={schema.maxLength} value={String(value ?? "")} onChange={event => onChange(event.target.value)} spellCheck={false} />
      : <textarea {...props} rows={String(value ?? "").length > 100 ? 4 : 2} maxLength={schema.maxLength} value={String(value ?? "")} onChange={event => onChange(event.target.value)} />}
    {error && <p id={`${id}-error`} role="alert" className="cms-field-error">{error}</p>}
  </div>;
}
