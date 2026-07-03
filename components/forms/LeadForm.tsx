"use client";

import { Upload } from "lucide-react";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

type LeadFormProps = {
  type: "contact" | "quote";
};

const serviceOptions = [
  "Resume Writing",
  "ATS Resume Writing",
  "Cover Letter Writing",
  "Selection Criteria Writing",
  "LinkedIn Profile Optimisation",
  "Government Resume",
  "Executive Resume",
  "Graduate Resume",
  "FIFO Resume",
  "Not sure yet",
];

export function LeadForm({ type }: LeadFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const isQuote = type === "quote";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = (await response.json()) as { success?: boolean; message?: string; error?: string; fields?: string[] };

      if (!response.ok || !data.success) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Thanks. Your message has been sent.");
      formRef.current?.reset();
    } catch {
      setStatus("error");
      setMessage("We could not send your message just now. Please try again.");
    }
  }

  return (
    <form
      action="/api/contact"
      className="rounded-2xl border border-line bg-white p-5 shadow-card md:p-8"
      encType="multipart/form-data"
      method="post"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <input name="source" type="hidden" value={type} />

      <div className="grid gap-5 md:grid-cols-2">
        <FormField id={`${type}-name`} label="Full name" required>
          <input
            className="form-input"
            id={`${type}-name`}
            name="name"
            placeholder="Your name"
            required
            type="text"
            autoComplete="name"
          />
        </FormField>
        <FormField id={`${type}-email`} label="Email address" required>
          <input
            className="form-input"
            id={`${type}-email`}
            name="email"
            placeholder="you@example.com"
            required
            type="email"
            autoComplete="email"
          />
        </FormField>
        <FormField id={`${type}-phone`} label="Phone number">
          <input
            className="form-input"
            id={`${type}-phone`}
            name="phone"
            placeholder="04xx xxx xxx"
            type="tel"
            autoComplete="tel"
          />
        </FormField>
        <FormField id={`${type}-service`} label="Service needed">
          <select className="form-input" id={`${type}-service`} name="service" defaultValue="Not sure yet">
            {serviceOptions.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </FormField>
        {isQuote ? (
          <>
            <FormField id={`${type}-career-level`} label="Career level">
              <select className="form-input" id={`${type}-career-level`} name="careerLevel" defaultValue="Professional">
                <option>Graduate or entry level</option>
                <option>Professional</option>
                <option>Manager</option>
                <option>Executive</option>
                <option>Government applicant</option>
                <option>FIFO, trades or technical</option>
              </select>
            </FormField>
            <FormField id={`${type}-target-role`} label="Target role or industry">
              <input
                className="form-input"
                id={`${type}-target-role`}
                name="targetRole"
                placeholder="e.g. Project Manager, APS5, FIFO Operator"
                type="text"
              />
            </FormField>
          </>
        ) : null}
      </div>

      <FormField
        className="mt-5"
        id={`${type}-message`}
        label={isQuote ? "What would you like reviewed?" : "How can we help?"}
        required
      >
        <textarea
          className="form-input min-h-36 resize-y"
          id={`${type}-message`}
          name="message"
          placeholder={
            isQuote
              ? "Tell us about your current resume, target role, deadline and any application documents you need."
              : "Tell us your question, deadline or the service you are considering."
          }
          required
        />
      </FormField>

      {isQuote ? (
        <div className="mt-5 rounded-xl border border-dashed border-line bg-soft p-4">
          <div className="flex gap-3">
            <Upload aria-hidden="true" className="mt-1 shrink-0 text-brand" size={20} />
            <div>
              <p className="text-sm font-bold text-navy">Resume upload note</p>
              <p className="mt-1 text-sm leading-6 text-muted">
                Secure file upload will be connected when an email/form provider is selected.
                Until then, submit the form and email your resume to{" "}
                <a className="font-bold text-brand" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          aria-busy={status === "loading"}
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-teal px-5 py-3 text-center text-sm font-bold text-white shadow-soft transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70 md:text-base"
          disabled={status === "loading"}
          type="submit"
        >
          {status === "loading"
            ? "Sending..."
            : isQuote
              ? "Request My Free Review"
              : "Send Enquiry"}
        </button>
        <Button href={siteConfig.whatsappHref} variant="whatsapp">
          WhatsApp Us
        </Button>
      </div>

      <div aria-live="polite" className="mt-4 min-h-6">
        {message ? (
          <p
            className={
              status === "success"
                ? "text-sm font-semibold text-success"
                : "text-sm font-semibold text-error"
            }
          >
            {message}
          </p>
        ) : null}
      </div>

      <p className="mt-4 text-xs leading-5 text-muted">
        Production email delivery is handled by Resend through a verified sender address. This
        form posts to the local Next.js API route and uses the `RESEND_API_KEY` environment
        variable.
      </p>
    </form>
  );
}

function FormField({
  children,
  className,
  id,
  label,
  required,
}: {
  children: ReactNode;
  className?: string;
  id: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-bold text-navy" htmlFor={id}>
        {label}
        {required ? <span className="text-error"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
