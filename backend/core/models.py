from django.db import models


class ContactSubmission(models.Model):
    inquiry_type = models.CharField(max_length=100, default="General")
    full_name = models.CharField(max_length=120)
    email = models.EmailField()
    organization = models.CharField(max_length=160, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self) -> str:
        return f"{self.full_name} ({self.inquiry_type})"

# Create your models here.
