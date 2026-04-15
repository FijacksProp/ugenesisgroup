from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ContactSubmissionSerializer


@api_view(["GET"])
def health_check(_request):
    return Response(
        {
            "status": "ok",
            "service": "ugenesis-backend",
        }
    )


@api_view(["POST"])
def contact_submission(request):
    serializer = ContactSubmissionSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    instance = serializer.save()
    return Response(
        {
            "message": "Inquiry received successfully.",
            "submission": ContactSubmissionSerializer(instance).data,
        },
        status=status.HTTP_201_CREATED,
    )
