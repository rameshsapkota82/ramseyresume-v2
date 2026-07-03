import { ArrowRight, CheckCircle, MessageCircle, Phone, SearchCheck } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { SitePage } from "@/content/page-registry";
import { siteConfig } from "@/lib/site";

type ArchitecturePageProps = {
  page: SitePage;
};

const defaultBenefits = [
  "Clear Australian English written for real job seekers and employers",
  "Practical structure that is easy to scan on desktop and mobile",
  "Natural internal links to related resume, application and career resources",
  "Strong calls to action for free review, WhatsApp, quote and contact enquiries",
];

const defaultFaqs = [
  {
    question: "Can Ramsey Resume help clients outside Perth?",
    answer:
      "Yes. Ramsey Resume is based in Perth, Western Australia and supports job seekers Australia-wide, and in New Zealand, through email, phone and WhatsApp.",
  },
  {
    question: "Can I start if I do not know which service I need?",
    answer:
      "Yes. Start with a free resume review or quote request and Ramsey Resume will recommend the most practical next step based on your documents and target role.",
  },
  {
    question: "Do you guarantee interviews?",
    answer:
      "No. Interview outcomes depend on the role, competition, eligibility and employer decisions. Ramsey Resume focuses on improving clarity, structure, targeting and application quality.",
  },
];

export function ArchitecturePage({ page }: ArchitecturePageProps) {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    url: `${siteConfig.url}/${page.slug}/`,
    description: page.description,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: defaultFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: `${siteConfig.url}/${page.slug}/`,
      },
    ],
  };
  const serviceSchema =
    page.eyebrow === "Industries"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: page.h1,
          name: page.h1,
          description: page.description,
          url: `${siteConfig.url}/${page.slug}/`,
          areaServed: siteConfig.areaServed.map((area) => ({
            "@type": "AdministrativeArea",
            name: area,
          })),
          provider: {
            "@type": "ProfessionalService",
            name: siteConfig.name,
            url: siteConfig.url,
          },
        }
      : null;

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {serviceSchema ? <JsonLd data={serviceSchema} /> : null}
      <Section className="bg-soft">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-teal shadow-card">
                <SearchCheck aria-hidden="true" size={17} />
                {page.eyebrow}
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-navy md:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{page.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/get-a-quote/">Get a Free Resume Review</Button>
                <Button href={siteConfig.whatsappHref} variant="whatsapp">
                  <MessageCircle aria-hidden="true" className="mr-2" size={18} />
                  WhatsApp Us
                </Button>
                <Button href="/contact/" variant="secondary">
                  Contact
                </Button>
              </div>
            </div>

            <Card>
              <h2 className="font-display text-2xl font-extrabold text-navy">
                Practical support for Australian job seekers
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Ramsey Resume provides professional resume writing, ATS resume writing, cover
                letters, LinkedIn profile optimisation, selection criteria and application support
                for clients in Perth, Western Australia and across Australia.
              </p>
              <div className="mt-6 grid gap-3 text-sm font-semibold text-ink">
                {[
                  "Editable Word and PDF delivery where applicable",
                  "ATS-aware structure for online applications",
                  "Standard turnaround guidance of 1-3 business days",
                  "Revision support for up to 4 weeks after delivery",
                ].map((item) => (
                  <div className="flex gap-2" key={item}>
                    <CheckCircle aria-hidden="true" className="mt-0.5 text-teal" size={17} />
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-teal">Overview</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
              Practical guidance for stronger applications
            </h2>
            <p className="mt-5 leading-8 text-muted">
              This page gives job seekers a clear place to learn about the topic, compare related
              Ramsey Resume services and move toward the right next step. The content is written
              for humans first and supported by SEO structure, internal links and clear
              conversion pathways.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {defaultBenefits.map((benefit) => (
              <Card className="shadow-none" key={benefit}>
                <CheckCircle aria-hidden="true" className="mb-4 text-brand" size={24} />
                <p className="text-sm font-semibold leading-6 text-ink">{benefit}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Process</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                How Ramsey Resume support works
              </h2>
              <p className="mt-5 leading-8 text-muted">
                The process is designed to be simple and practical. Share your current documents,
                explain the role or outcome you want, then receive guidance on the best service or
                resource for your situation.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["1", "Send your details", "Share your resume, profile, target role or question."],
                ["2", "Get direction", "Ramsey Resume reviews the context and recommends a path."],
                ["3", "Move forward", "Choose the service, package or resource that best fits."],
              ].map(([step, title, text]) => (
                <Card key={step}>
                  <span className="font-display text-3xl font-extrabold text-line">{step}</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-teal">Related pages</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
              Continue exploring Ramsey Resume
            </h2>
            <p className="mt-5 leading-8 text-muted">
              These internal links connect this page with the most relevant services and resources.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
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

      <Section className="bg-soft">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-teal">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
              Common questions
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 lg:grid-cols-3">
            {defaultFaqs.map((faq) => (
              <Card key={faq.question}>
                <h3 className="font-display text-lg font-bold text-navy">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-navy text-white">
        <Container className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-teal">Next step</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-extrabold text-white md:text-5xl">
            Start with a free resume review.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
            Send your resume, share your target role and Ramsey Resume will recommend the most
            suitable support.
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
