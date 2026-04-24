import { FormEvent, useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { contactPathways, siteAssets } from "@/content/site";
import { submitContactInquiry } from "@/lib/api";

const initialForm = {
  inquiryType: "Partnership",
  fullName: "",
  email: "",
  organization: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await submitContactInquiry(form);
      setSubmitted(true);
      setForm(initialForm);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to submit your inquiry right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="section-shell section-tight-mobile">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[0.95fr,1.05fr]">
          <AnimatedSection direction="left">
            <span className="eyebrow mb-6">Contact UGENESIS</span>
            <h1 className="text-5xl font-semibold leading-none text-foreground md:text-7xl">
              Start a global strategic conversation with clarity from the first message.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Use this channel for division-level partnerships, investor dialogue, market expansion, and institutional collaboration. Submissions are captured directly in the backend for structured follow-up.
            </p>
            <div className="mt-8 premium-card overflow-hidden">
              <img
                src={siteAssets.capitalStrategy}
                alt="Warm capital strategy visual"
                className="h-[18rem] w-full object-cover sm:h-[22rem]"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            {submitted ? (
              <div className="premium-card p-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                  OK
                </div>
                <h3 className="mt-6 text-3xl font-semibold text-foreground">Inquiry received</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Your message has been saved in the backend and is ready for follow-up.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="premium-card space-y-5 p-6 sm:space-y-6 sm:p-8 md:p-10">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    Inquiry type
                  </label>
                  <select
                    value={form.inquiryType}
                    onChange={(event) => setForm({ ...form, inquiryType: event.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                  >
                    <option>Partnership</option>
                    <option>Investment</option>
                    <option>Project Delivery</option>
                    <option>General</option>
                  </select>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      Full name
                    </label>
                    <input
                      required
                      value={form.fullName}
                      onChange={(event) => setForm({ ...form, fullName: event.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    Organization
                  </label>
                  <input
                    value={form.organization}
                    onChange={(event) => setForm({ ...form, organization: event.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                  />
                </div>
                {error ? <p className="text-sm text-red-300">{error}</p> : null}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      <section className="section-shell">
        <div className="container mx-auto">
          <div className="grid gap-6 md:grid-cols-3">
            {contactPathways.map((pathway, index) => (
              <AnimatedSection key={pathway.step} delay={index * 0.08}>
                <div className="premium-card h-full p-8">
                  <p className="text-sm uppercase tracking-[0.28em] text-primary">{pathway.step}</p>
                  <h3 className="mt-5 text-2xl font-semibold leading-none text-foreground">{pathway.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pathway.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
