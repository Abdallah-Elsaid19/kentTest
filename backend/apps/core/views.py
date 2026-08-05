from django.db import connection
from rest_framework import serializers
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response


class HealthSerializer(serializers.Serializer):
    status = serializers.CharField()
    database = serializers.CharField()


class HealthView(GenericAPIView):
    serializer_class = HealthSerializer
    authentication_classes = []
    permission_classes = []
    throttle_classes = []

    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            cursor.fetchone()
        return Response({"status": "ok", "database": "ok"})
