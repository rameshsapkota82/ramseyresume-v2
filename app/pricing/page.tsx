import type { Metadata } from "next";
import { CheckCircle, Clock3, MessageCircle, Timer } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Resume Writing Pricing Australia | Ramsey Resume Packages",
  description:
    "Clear resume writing pricing for Australian job seekers, covering resumes, cover letters, LinkedIn and FIFO packages. Perth-based, Australia-wide.",
  path: "/pricing/",
});

type PricingItem = {
  name: string;
  now: string;
  note: string;
  was?: string;
};

const pricingGroups: Array<{
  title: string;
  items: PricingItem[];
}> = [
  {
    title: "Resumes",
    items: [
      { name: "High School Resume", was: "$150", now: "$75", note: "50% off live pricing." },
      { name: "Professional Resume", was: "$200", now: "$100", note: "50% off live pricing." },
      { name: "Senior Resume", was: "$250", now: "$125", note: "50% off live pricing." },
    ],
  },
  {
    title: "FIFO Resumes",
    items: [
      { name: "FIFO Entry Level Resume", now: "$180", note: "FIFO and mining applications." },
      { name: "FIFO Trades & Professional", now: "$200", note: "Trades, technical and professional site roles." },
      { name: "FIFO Supervisor & Leader", now: "$220", note: "Supervisor and leadership applications." },
    ],
  },
  {
    title: "Cover Letters",
    items: [{ name: "Cover Letter", now: "$100", note: "Tailored for a specific role or application." }],
  },
  {
    title: "Packages",
    items: [
      { name: "Bronze Package", now: "$250", note: "Resume + Cover Letter." },
      { name: "Silver Package", now: "$310", note: "Resume + Cover Letter + LinkedIn." },
      { name: "Gold Package", now: "$310", note: "Resume + Cover Letter + SEEK." },
    ],
  },
  {
    title: "FIFO Packages",
    items: [
      { name: "FIFO Bronze", now: "$320", note: "Entry Resume + Cover Letter." },
      { name: "FIFO Silver", now: "$330", note: "Trades Resume + Cover Letter." },
      { name: "FIFO Gold", now: "$360", note: "Supervisor Resume + Cover Letter." },
    ],
  },
  {
    title: "Selection Criteria",
    items: [
      { name: "Up to 6 Selection Criteria", now: "$220", note: "Structured application support." },
      { name: "Additional Criteria", now: "$45 per unit", note: "For extra criteria beyond the package." },
    ],
  },
  {
    title: "LinkedIn & SEEK",
    items: [
      { name: "LinkedIn Profile Optimisation", now: "$120", note: "Headline, summary and profile alignment." },
      { name: "SEEK Profile Optimisation", now: "$120", note: "Profile optimisation for SEEK." },
    ],
  },
  {
    title: "Coaching",
    items: [{ name: "Job Interview Coaching", now: "$150", note: "Interview preparation support." }],
  },
  {
    title: "Updates",
    items: [
      { name: "Update Your Resume", now: "$150", note: "Refresh an existing resume." },
      { name: "Unlimited Updates (6 Months)", now: "$180", note: "Ongoing update support." },
    ],
  },
  {
    title: "Express",
    items: [{ name: "Express Turnaround", now: "$50", note: "24-hour and 12-hour delivery options." }],
  },
  {
    title: "Digital Products",
    items: [{ name: "Resume Template Pack", now: "$80", note: "Digital template pack." }],
  },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Resume Writing Pricing Australia",
  url: `${siteConfig.url}/pricing/`,
  description:
    "Pricing for Ramsey Resume writing services, FIFO resumes, cover letters, packages, selection criteria, LinkedIn, SEEK, coaching, updates and digital products.",
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingSchema} />
      <Section className="bg-soft">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-teal">Pricing</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-navy md:text-5xl">
              Resume Writing Pricing Australia
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Ramsey Resume pricing is clear and package-based. All resumes are ATS/scanner
              compliant, custom written by degree-qualified professionals, delivered in editable
              Word and PDF formats, and include unlimited revisions for 4 weeks after delivery.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/get-a-quote/">Get a Free Resume Review</Button>
              <Button href={siteConfig.whatsappHref} variant="whatsapp">
                <MessageCircle aria-hidden="true" className="mr-2" size={18} />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Standard turnaround is 1-2 days on the live pricing structure, with broader service guidance of 1-3 business days depending on scope.",
              "Express service offers 24-hour and 12-hour delivery options.",
              "All documents include editable Word and PDF delivery with 4 weeks of unlimited revisions.",
            ].map((item) => (
              <Card className="shadow-none" key={item}>
                <CheckCircle aria-hidden="true" className="mb-4 text-teal" size={24} />
                <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <div className="grid gap-6">
            {pricingGroups.map((group) => (
              <div key={group.title}>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-teal">
                      Category
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-extrabold text-navy">
                      {group.title}
                    </h2>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <Card className="flex h-full flex-col" key={item.name}>
                      <div className="flex flex-1 flex-col">
                        <h3 className="font-display text-xl font-bold text-navy">{item.name}</h3>
                        <div className="mt-4 flex flex-wrap items-end gap-3">
                          {item.was ? (
                            <p className="text-sm font-semibold text-muted line-through">
                              Was {item.was}
                            </p>
                          ) : null}
                          <p className="font-display text-4xl font-extrabold text-brand">
                            {item.now}
                          </p>
                        </div>
                        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{item.note}</p>
                      </div>
                      <Button className="mt-6" href="/get-a-quote/" variant="secondary">
                        Request This Service
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Pricing note</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                Silver and Gold are both listed at $310 on the live site
              </h2>
              <p className="mt-5 leading-8 text-muted">
                The current live pricing lists both Silver and Gold packages at $310. That may be
                intentional or it may be a data issue that needs confirmation before launch. I have
                kept the numbers exactly as they appear and flagged this clearly so you can confirm
                which price should remain.
              </p>
            </div>
            <Card>
              <Timer aria-hidden="true" className="mb-5 text-brand" size={32} />
              <h3 className="font-display text-2xl font-extrabold text-navy">Need urgent delivery?</h3>
              <p className="mt-4 leading-7 text-muted">
                Express turnaround is listed at $50 and supports 24-hour and 12-hour delivery
                options. Availability depends on document scope and current workload, so the safest
                next step is to request a quote before committing to a deadline.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/get-a-quote/">Request a Quote</Button>
                <Button href={siteConfig.phoneHref} variant="secondary">
                  Call {siteConfig.phoneDisplay}
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "ATS/scanner compliant resume formatting",
              "Custom written by degree-qualified professionals",
              "Editable Word and PDF delivery with 4 weeks of unlimited revisions",
            ].map((item) => (
              <Card className="shadow-none" key={item}>
                <Clock3 aria-hidden="true" className="mb-4 text-teal" size={24} />
                <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
