import { ArrowRight, Clock, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { SitePage } from "@/content/page-registry";
import { siteConfig } from "@/lib/site";

type ArchitecturePageProps = {
  page: SitePage;
};

export function ArchitecturePage({ page }: ArchitecturePageProps) {
  return (
    <>
      <Section className="bg-soft">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-teal shadow-card">
                <Clock aria-hidden="true" size={17} />
                {page.status === "coming-soon" ? "Coming Soon" : "Now Available"}
              </p>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">{page.eyebrow}</p>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-navy md:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{page.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/get-a-quote/">Get a Free Resume Review</Button>
                <Button href={siteConfig.whatsappHref} variant="whatsapp">
                  <MessageCircle aria-hidden="true" className="mr-2" size={18} />
                  WhatsApp Us
                </Button>
              </div>
            </div>

            <Card>
              <h2 className="font-display text-2xl font-extrabold text-navy">
                This page is in the content roadmap
              </h2>
              <p className="mt-4 leading-7 text-muted">
                The route is live so navigation, SEO architecture and internal links are stable.
                Full production content will be added in the relevant build phase.
              </p>
              <div className="mt-6 rounded-lg bg-soft p-4 text-sm leading-6 text-muted">
                No fake testimonials, statistics or service claims are used on incomplete pages.
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-navy md:text-4xl">
              What to do next
            </h2>
            <p className="mt-4 leading-8 text-muted">
              While this page is being expanded, you can still request a free review, compare
              related services or contact Ramsey Resume for guidance.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card>
              <h3 className="font-display text-xl font-bold text-navy">Request a review</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Send your current resume and target role to get a recommended next step.
              </p>
              <TextLink href="/get-a-quote/" label="Get a Free Resume Review" />
            </Card>
            <Card>
              <h3 className="font-display text-xl font-bold text-navy">Ask a question</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Contact Ramsey Resume if you are unsure which service fits your application.
              </p>
              <TextLink href="/contact/" label="Contact Ramsey Resume" />
            </Card>
            <Card>
              <h3 className="font-display text-xl font-bold text-navy">View pricing</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Review package guidance before requesting a tailored quote.
              </p>
              <TextLink href="/pricing/" label="View Pricing" />
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-navy md:text-4xl">
              Related pages
            </h2>
            <p className="mt-4 leading-8 text-muted">
              These internal links keep the website architecture connected while full content is
              rolled out one phase at a time.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {page.links.map((link) => (
              <Link
                className="flex items-center justify-between rounded-card border border-line bg-white p-5 font-bold text-navy shadow-card transition hover:-translate-y-1 hover:border-brand"
                href={link.href}
                key={`${page.slug}-${link.href}`}
              >
                {link.label}
                <ArrowRight aria-hidden="true" className="text-teal" size={18} />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-navy text-white">
        <Container className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-gold">Need help now?</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-extrabold text-white md:text-5xl">
            Start with a free resume review.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
            You do not need to wait for this page to be expanded. Send your resume, share your
            target role and Ramsey Resume will recommend the most suitable support.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/get-a-quote/">Get a Free Resume Review</Button>
            <Button href={siteConfig.whatsappHref} variant="whatsapp">
              <MessageCircle aria-hidden="true" className="mr-2" size={18} />
              WhatsApp Us
            </Button>
            <Button href={siteConfig.phoneHref} variant="ghost">
              <Phone aria-hidden="true" className="mr-2" size={18} />
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

function TextLink({ href, label }: { href: string; label: string }) {
  return (
    <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-teal-dark" href={href}>
      {label}
      <ArrowRight aria-hidden="true" size={16} />
    </Link>
  );
}
