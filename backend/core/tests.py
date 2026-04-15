from django.test import TestCase
from rest_framework.test import APIClient

from .models import ContactSubmission


class CoreApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_health_check(self):
        response = self.client.get("/api/health/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["status"], "ok")

    def test_contact_submission(self):
        payload = {
            "inquiry_type": "Partnership",
            "full_name": "Victor Okere",
            "email": "victor@example.com",
            "organization": "UGENESIS",
            "message": "We would like to discuss a strategic infrastructure partnership.",
        }

        response = self.client.post("/api/contact/", payload, format="json")

        self.assertEqual(response.status_code, 201)
        self.assertEqual(ContactSubmission.objects.count(), 1)
