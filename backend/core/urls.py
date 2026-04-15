from django.urls import path

from .views import contact_submission, health_check

urlpatterns = [
    path("health/", health_check, name="health-check"),
    path("contact/", contact_submission, name="contact-submission"),
]
