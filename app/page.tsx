import type { Metadata } from "next";
import { CheckCircle, FileText, MessageCircle, ScanSearch, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PlaceholderSection } from "@/components/sections/PlaceholderSection";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Professional Resume Writing Services Perth & Australia | Ramsey Resume",
  description:
    "Get an ATS-friendly resume, cover letter, LinkedIn profile or selection criteria written for Australian job seekers. Perth-based resume writing support available Australia-wide.",
  path: "/",
});

const servicePlaceholders = [
  "Resume Writing",
  "ATS Resume Writing",
  "Cover Letter Writing",
  "Selection Criteria",
  "LinkedIn Optimisation",
  "Government Applications",
];

export default function Home() {
  return (
    <>
      <Section className="bg-soft">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-teal shadow-card">
                <CheckCircle aria-hidden="true" size={17} />
                Perth-based. Australia-wide.
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-navy md:text-5xl lg:text-6xl">
                Professional Resume Writing Services in Perth & Australia-Wide
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                A fast, SEO-first foundation for Ramsey Resume. The full homepage content will be
                built in the next phase using premium sections, strong CTAs, trust proof and
                mobile-first layouts.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/get-a-quote/">Get a Free Resume Review</Button>
                <Button href={siteConfig.whatsappHref} variant="whatsapp">
                  <MessageCircle aria-hidden="true" className="mr-2" size={18} />
                  WhatsApp Us
                </Button>
              </div>
            </div>
            <Card className="min-h-[320px] bg-white">
              <div className="flex h-full min-h-[280px] flex-col justify-between rounded-lg bg-gradient-to-br from-white to-soft p-6">
                <FileText className="text-brand" size={48} />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-teal">
                    Resume Review Preview
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-extrabold text-navy">
                    Placeholder for premium resume mockup
                  </h2>
                  <p className="mt-3 text-muted">
                    Image assets will be added after the visual direction is approved.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {["ATS-friendly", "Australian job market", "Fast enquiry paths"].map((badge) => (
              <Card key={badge}>
                <ScanSearch aria-hidden="true" className="mb-4 text-teal" size={28} />
                <h2 className="font-display text-xl font-bold text-navy">{badge}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Placeholder trust badge for the approved homepage design.
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <PlaceholderSection
        eyebrow="Services"
        title="Homepage service sections are ready for content"
        description="This foundation includes placeholder service cards so the layout can be expanded without changing the architecture."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {servicePlaceholders.map((service) => (
            <Card key={service}>
              <h3 className="font-display text-xl font-bold text-navy">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Placeholder copy. Full implementation-ready content will be added in Phase 2.
              </p>
            </Card>
          ))}
        </div>
      </PlaceholderSection>

      <PlaceholderSection
        eyebrow="Proof"
        title="Reviews, process, FAQ and lead form placeholders"
        description="Future homepage sections will use the same reusable card, section and CTA components created in this foundation."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {["Google Reviews", "Our Process", "Free Resume Review Form"].map((item) => (
            <Card key={item}>
              <Star aria-hidden="true" className="mb-4 text-gold" size={28} />
              <h3 className="font-display text-xl font-bold text-navy">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Placeholder section reserved for the next build phase.
              </p>
            </Card>
          ))}
        </div>
      </PlaceholderSection>
    </>
  );
}
