const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

export type ContactPayload = {
  inquiryType: string;
  fullName: string;
  email: string;
  organization: string;
  message: string;
};

export async function submitContactInquiry(payload: ContactPayload) {
  const response = await fetch(`${API_BASE}/api/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inquiry_type: payload.inquiryType,
      full_name: payload.fullName,
      email: payload.email,
      organization: payload.organization,
      message: payload.message,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.detail || "Unable to submit your inquiry right now.");
  }

  return data;
}
