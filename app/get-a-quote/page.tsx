import type { Metadata } from "next";
import { CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Get a Free Resume Review | Ramsey Resume, Perth WA",
  description:
    "Request a free resume review or quote for resume writing, ATS resumes, cover letters, LinkedIn profiles and selection criteria support. Perth-based, Australia-wide.",
  path: "/get-a-quote/",
});

const quoteSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Get a Free Resume Review",
  url: `${siteConfig.url}/get-a-quote/`,
  description:
    "Free resume review and quote request page for Australian resume writing services.",
};

export default function GetAQuotePage() {
  return (
    <>
      <JsonLd data={quoteSchema} />
      <Section className="bg-soft">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">
                Free Resume Review
              </p>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-navy md:text-5xl">
                Get a Free Resume Review
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted">
                Send your current resume and target role. Ramsey Resume will review the main
                issues and recommend the best next step for your application, whether that is a
                resume rewrite, ATS optimisation, cover letter, LinkedIn update or selection
                criteria support.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  "Perth-based and Australia-wide support",
                  "No fake guarantees or inflated claims",
                  "Resume, cover letter, LinkedIn and selection criteria guidance",
                  "WhatsApp available for quick enquiries",
                ].map((item) => (
                  <div className="flex gap-3 text-sm font-semibold text-ink" key={item}>
                    <CheckCircle aria-hidden="true" className="mt-0.5 shrink-0 text-teal" size={18} />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-teal"
                href={siteConfig.whatsappHref}
              >
                <MessageCircle aria-hidden="true" size={18} />
                Prefer WhatsApp? Message Ramsey Resume
              </Link>
            </div>
            <LeadForm type="quote" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["1. Send your details", "Share your resume, target role and application deadline."],
              ["2. Get guidance", "Receive a practical recommendation for the right level of support."],
              ["3. Decide next step", "Choose a resume, application package or targeted service if it fits."],
            ].map(([title, text]) => (
              <Card key={title}>
                <h2 className="font-display text-xl font-bold text-navy">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
