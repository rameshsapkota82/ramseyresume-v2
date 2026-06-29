import type { Metadata } from "next";
import { CheckCircle, MessageCircle, Timer } from "lucide-react";
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
    "View Ramsey Resume pricing for resumes, FIFO resumes, cover letters, packages, selection criteria, LinkedIn, SEEK, interview coaching and express service.",
  path: "/pricing/",
});

const pricingGroups = [
  {
    title: "Resumes",
    items: [
      { name: "High School Resume", price: "$75", note: "50% off live pricing; normally $150." },
      { name: "Professional Resume", price: "$100", note: "50% off live pricing; normally $200." },
      { name: "Senior Resume", price: "$125", note: "50% off live pricing; normally $250." },
    ],
  },
  {
    title: "FIFO Resumes",
    items: [
      { name: "FIFO Entry Level Resume", price: "$180", note: "For entry-level mining, FIFO and site applications." },
      { name: "FIFO Trades & Professional", price: "$200", note: "For trades, technical and professional site roles." },
      { name: "FIFO Supervisor & Leader", price: "$220", note: "For supervisors, leaders and senior site applicants." },
    ],
  },
  {
    title: "Cover Letters & Packages",
    items: [
      { name: "Cover Letter", price: "$100", note: "Tailored support for a specific role or application." },
      { name: "Bronze Package", price: "$250", note: "Resume + Cover Letter." },
      { name: "Silver Package", price: "$310", note: "Resume + Cover Letter + LinkedIn." },
      { name: "Gold Package", price: "$310", note: "Resume + Cover Letter + SEEK." },
    ],
  },
  {
    title: "FIFO Packages",
    items: [
      { name: "FIFO Bronze", price: "$320", note: "Entry Resume + Cover Letter." },
      { name: "FIFO Silver", price: "$330", note: "Trades Resume + Cover Letter." },
      { name: "FIFO Gold", price: "$360", note: "Supervisor Resume + Cover Letter." },
    ],
  },
  {
    title: "Profiles, Criteria & Coaching",
    items: [
      { name: "Up to 6 Selection Criteria", price: "$220", note: "Structured selection criteria support." },
      { name: "Additional Criteria", price: "$45 per unit", note: "For extra criteria beyond the package." },
      { name: "LinkedIn Profile Optimisation", price: "$120", note: "Headline, summary and profile positioning." },
      { name: "SEEK Profile Optimisation", price: "$120", note: "SEEK profile improvement and alignment." },
      { name: "Job Interview Coaching", price: "$150", note: "Interview preparation support." },
    ],
  },
  {
    title: "Updates, Express & Digital Products",
    items: [
      { name: "Update Your Resume", price: "$150", note: "Modernise and refresh an existing resume." },
      { name: "Unlimited Updates", price: "$180", note: "6 months of update support." },
      { name: "Express Turnaround", price: "$50", note: "For urgent 24-hour or 12-hour delivery options." },
      { name: "Resume Template Pack", price: "$80", note: "Digital resume template pack." },
    ],
  },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Resume Writing Pricing Australia",
  url: `${siteConfig.url}/pricing/`,
  description:
    "Pricing for Ramsey Resume writing services, FIFO resumes, cover letters, packages, selection criteria and profile optimisation.",
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
              Ramsey Resume pricing is transparent and package-based. All resumes are ATS/scanner
              compliant, custom written by degree-qualified professionals, delivered in editable Word
              and PDF formats, and include revision support for 4 weeks after delivery.
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
              "Standard delivery guidance: 1-2 days on the live pricing page, with broader service guidance of 1-3 business days depending on scope.",
              "Express services are available for urgent 24-hour and 12-hour delivery needs.",
              "Unlimited revisions are available for 4 weeks after delivery.",
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
                <h2 className="font-display text-2xl font-extrabold text-navy">{group.title}</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <Card className="flex h-full flex-col" key={item.name}>
                      <div className="flex flex-1 flex-col">
                        <h3 className="font-display text-xl font-bold text-navy">{item.name}</h3>
                        <p className="mt-4 font-display text-4xl font-extrabold text-brand">
                          {item.price}
                        </p>
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
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Express service</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                Need documents urgently?
              </h2>
              <p className="mt-5 leading-8 text-muted">
                The live Ramsey Resume pricing includes express turnaround for urgent 24-hour and
                12-hour delivery options. Availability depends on document scope, timing and current
                workload, so the safest next step is to request a quote before relying on a deadline.
              </p>
            </div>
            <Card>
              <Timer aria-hidden="true" className="mb-5 text-brand" size={32} />
              <h3 className="font-display text-2xl font-extrabold text-navy">
                Express Turnaround: $50
              </h3>
              <p className="mt-4 leading-7 text-muted">
                Add-on for urgent delivery where available. Contact Ramsey Resume with your deadline
                and application requirements.
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
    </>
  );
}
