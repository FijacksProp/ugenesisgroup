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
      <section className="section-shell">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:gap-10">
          <AnimatedSection direction="left">
            <span className="eyebrow mb-5 md:mb-6">Contact UGENESIS</span>
            <h1 className="text-[2.55rem] font-semibold leading-[1] text-foreground sm:text-5xl md:text-7xl">
              Start a venture, partnership, or investment conversation with UGENESIS.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-7 md:text-lg">
              Use this channel for new ventures, strategic partnerships, project opportunities,
              investor conversations, and institutional discussions connected to the UGENESIS
              enterprise platform.
            </p>
            <div className="media-frame mt-8">
              <img
                src={siteAssets.capitalStrategy}
                alt="Warm capital strategy visual"
                className="h-[18rem] w-full object-cover sm:h-[22rem]"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            {submitted ? (
              <div className="premium-card p-6 text-center md:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-primary/15 text-sm font-semibold uppercase text-primary">
                  OK
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-foreground md:text-3xl">Inquiry received</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Your message has been saved in the backend and is ready for follow-up.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="premium-card space-y-5 p-5 sm:p-6 md:space-y-6 md:p-10">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase text-muted-foreground" style={{ letterSpacing: "0.08em" }}>
                    Inquiry type
                  </label>
                  <select
                    value={form.inquiryType}
                    onChange={(event) => setForm({ ...form, inquiryType: event.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                  >
                    <option>Partnership</option>
                    <option>Investment</option>
                    <option>New Venture</option>
                    <option>Project Opportunity</option>
                    <option>General</option>
                  </select>
                </div>
                <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase text-muted-foreground" style={{ letterSpacing: "0.08em" }}>
                      Full name
                    </label>
                    <input
                      required
                      value={form.fullName}
                      onChange={(event) => setForm({ ...form, fullName: event.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase text-muted-foreground" style={{ letterSpacing: "0.08em" }}>
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase text-muted-foreground" style={{ letterSpacing: "0.08em" }}>
                    Organization
                  </label>
                  <input
                    value={form.organization}
                    onChange={(event) => setForm({ ...form, organization: event.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase text-muted-foreground" style={{ letterSpacing: "0.08em" }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                  />
                </div>
                {error ? <p className="text-sm text-red-300">{error}</p> : null}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
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
                <div className="premium-card hover-lift h-full p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase text-primary" style={{ letterSpacing: "0.08em" }}>{pathway.step}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-foreground md:mt-5 md:text-2xl">{pathway.title}</h3>
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
