import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle,
  ChevronRight,
  MessageCircle,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";
import type { ServicePageContent } from "@/types/service-page";

type CommercialServicePageProps = {
  content: ServicePageContent;
};

export function CommercialServicePage({ content }: CommercialServicePageProps) {
  return (
    <>
      <Section className="overflow-hidden bg-soft">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <Link className="hover:text-brand" href="/">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>{content.breadcrumb}</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-teal shadow-card">
                {content.badge}
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-navy md:text-5xl lg:text-6xl">
                {content.h1}
              </h1>
              {content.intro.map((paragraph, index) => (
                <p
                  className={
                    index === 0
                      ? "mt-6 max-w-2xl text-lg leading-8 text-muted"
                      : "mt-4 max-w-2xl leading-8 text-muted"
                  }
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/get-a-quote/">Get a Free Resume Review</Button>
                <Button href={siteConfig.whatsappHref} variant="whatsapp">
                  <MessageCircle aria-hidden="true" className="mr-2" size={18} />
                  WhatsApp Us
                </Button>
                <Button href="/pricing/" variant="secondary">
                  Get Quote
                </Button>
              </div>
              <ul className="mt-8 grid gap-3 text-sm font-semibold text-ink sm:grid-cols-2">
                {content.heroHighlights.map((item) => (
                  <li className="flex items-center gap-2" key={item}>
                    <CheckCircle aria-hidden="true" className="text-teal" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Card className="relative overflow-hidden p-0">
              <div className="bg-navy px-6 py-5 text-white">
                <p className="text-sm font-bold uppercase tracking-wide text-white/70">
                  {content.heroCard.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-white">
                  {content.heroCard.title}
                </h2>
              </div>
              <div className="space-y-4 p-6">
                {content.heroCard.items.map((item) => (
                  <div className="rounded-lg border border-line bg-soft p-4" key={item}>
                    <div className="mb-2 flex items-center gap-2">
                      <BookOpenCheck aria-hidden="true" className="text-brand" size={18} />
                      <span className="text-sm font-bold text-navy">{item}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-line" />
                    <div className="mt-2 h-2 w-4/5 rounded-full bg-line" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <TextBlock {...content.overview} />
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <SectionHeader {...content.audiences} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.audiences.items.map((audience) => (
              <Card className="shadow-none" key={audience}>
                <UserCheck aria-hidden="true" className="mb-4 text-brand" size={25} />
                <p className="text-sm font-semibold leading-6 text-ink">{audience}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow={content.benefits.eyebrow}
            text={content.benefits.text}
            title={content.benefits.title}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.benefits.items.map((benefit) => {
              const Icon = benefit.icon ?? CheckCircle;
              return (
                <Card className="transition hover:-translate-y-1 hover:border-brand" key={benefit.title}>
                  <Icon aria-hidden="true" className="mb-5 text-brand" size={32} />
                  <h3 className="font-display text-xl font-bold text-navy">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{benefit.text}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">
                {content.inclusions.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                {content.inclusions.title}
              </h2>
              <p className="mt-5 leading-8 text-muted">{content.inclusions.text}</p>
            </div>
            <Card>
              <div className="grid gap-4 md:grid-cols-2">
                {content.inclusions.items.map((item) => (
                  <div className="flex gap-3" key={item}>
                    <CheckCircle aria-hidden="true" className="mt-1 shrink-0 text-teal" size={18} />
                    <p className="text-sm leading-6 text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader {...content.process} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.process.steps.map((step, index) => {
              const Icon = step.icon ?? CheckCircle;
              return (
                <Card key={step.title}>
                  <div className="mb-5 flex items-center justify-between">
                    <Icon aria-hidden="true" className="text-brand" size={30} />
                    <span className="font-display text-3xl font-extrabold text-line">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {content.extraSection ? (
        <Section className="bg-soft">
          <Container>
            <SectionHeader
              eyebrow={content.extraSection.eyebrow}
              text={content.extraSection.text}
              title={content.extraSection.title}
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {content.extraSection.items.map((item) => {
                const Icon = item.icon ?? CheckCircle;
                return (
                  <Card key={item.title}>
                    <Icon aria-hidden="true" className="mb-5 text-brand" size={30} />
                    <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                  </Card>
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">
                {content.pricing.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                {content.pricing.title}
              </h2>
              <p className="mt-5 leading-8 text-muted">{content.pricing.text}</p>
            </div>
            <Card>
              <h3 className="font-display text-2xl font-extrabold text-navy">
                {content.pricing.cardTitle}
              </h3>
              <p className="mt-4 leading-7 text-muted">{content.pricing.cardText}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/get-a-quote/">Request a Quote</Button>
                <Button href={siteConfig.whatsappHref} variant="whatsapp">
                  <MessageCircle aria-hidden="true" className="mr-2" size={18} />
                  WhatsApp Us
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            text="Practical answers for Australian job seekers comparing professional application support."
            title={`${content.breadcrumb} FAQs`}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {content.faqs.map((faq) => (
              <details
                className="group rounded-2xl border border-line bg-white p-6 shadow-card"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-lg font-bold text-navy">
                  {faq.question}
                  <ChevronRight
                    aria-hidden="true"
                    className="mt-1 shrink-0 transition group-open:rotate-90"
                    size={20}
                  />
                </summary>
                <p className="mt-4 text-sm leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Related services"
            text="Build a stronger complete application with aligned documents and consistent positioning."
            title="Related services"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.relatedServices.map((service) => (
              <Link
                className="rounded-2xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand"
                href={service.href}
                key={service.title}
              >
                <h3 className="font-display text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand">
                  Learn more <ArrowRight aria-hidden="true" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-navy text-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">
                {content.finalCta.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white md:text-5xl">
                {content.finalCta.title}
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-white/75">{content.finalCta.text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/get-a-quote/">Get a Free Resume Review</Button>
              <Button href={siteConfig.whatsappHref} variant="whatsapp">
                <MessageCircle aria-hidden="true" className="mr-2" size={18} />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-wide text-teal">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">{title}</h2>
      <p className="mt-5 leading-8 text-muted">{text}</p>
    </div>
  );
}

function TextBlock({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string[];
}) {
  return (
    <div className="mx-auto max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-wide text-teal">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">{title}</h2>
      <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
