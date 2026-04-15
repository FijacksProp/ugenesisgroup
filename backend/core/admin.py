from django.contrib import admin

from .models import ContactSubmission


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "organization", "inquiry_type", "created_at")
    search_fields = ("full_name", "email", "organization", "message")
    list_filter = ("inquiry_type", "created_at")

# Register your models here.
