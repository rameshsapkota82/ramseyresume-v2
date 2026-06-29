import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle,
  ChevronRight,
  FileCheck,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  PenLine,
  SearchCheck,
  ShieldCheck,
  Target,
  Upload,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Cover Letter Writing Service Australia | Professional Cover Letter Writer",
  description:
    "Professional cover letter writing for Australian job seekers. Perth-based support for tailored cover letters, government applications and career changes.",
  path: "/cover-letter-writing/",
});

const benefits = [
  {
    title: "Clearer role alignment",
    text: "A tailored cover letter connects your background to the role, employer and industry instead of repeating your resume in paragraph form.",
    icon: Target,
  },
  {
    title: "Stronger first impression",
    text: "Your opening message is written to sound professional, specific and relevant, helping employers understand why you are applying.",
    icon: BadgeCheck,
  },
  {
    title: "Better explanation of career moves",
    text: "Cover letters are useful when you are changing careers, returning to work, relocating, applying interstate or moving into a new industry.",
    icon: UserCheck,
  },
  {
    title: "Support for government roles",
    text: "For public sector applications, the cover letter can help address role requirements, motivation and fit in a concise, evidence-aware way.",
    icon: Landmark,
  },
  {
    title: "Professional tone",
    text: "The writing is polished without sounding exaggerated, generic or artificial, so your application remains credible.",
    icon: PenLine,
  },
  {
    title: "Application consistency",
    text: "Your cover letter, resume and LinkedIn profile can work together with consistent language, positioning and career direction.",
    icon: FileCheck,
  },
];

const audiences = [
  "Job seekers applying for roles that request a cover letter",
  "Professionals who need to explain why they are the right fit for a specific employer",
  "Career changers who want to position transferable skills clearly",
  "Government and public sector applicants responding to role requirements",
  "Graduates who need a stronger introduction despite limited formal experience",
  "Skilled migrants adapting their application style for Australian employers",
  "FIFO, healthcare, IT, engineering, accounting and education applicants",
  "Senior professionals who need a concise executive application letter",
];

const processSteps = [
  {
    title: "Share your target role",
    text: "Send the job advertisement, employer name, target industry or type of role you want. A strong cover letter starts with the position, not a generic template.",
    icon: Upload,
  },
  {
    title: "Review your background",
    text: "We review your resume, career details, achievements, qualifications and reasons for applying so the letter reflects your real experience.",
    icon: SearchCheck,
  },
  {
    title: "Plan the message",
    text: "The letter is structured around your fit for the role, the employer's needs and the most relevant evidence from your background.",
    icon: Target,
  },
  {
    title: "Write the cover letter",
    text: "Your draft is written in a professional Australian tone with a clear opening, role-specific body and confident closing call to action.",
    icon: PenLine,
  },
  {
    title: "Review and refine",
    text: "You review the draft for accuracy and provide feedback so the final letter remains truthful, natural and aligned with your goals.",
    icon: FileCheck,
  },
  {
    title: "Final delivery",
    text: "Receive an editable Word version and a polished PDF suitable for online applications, direct email submissions and future tailoring.",
    icon: BriefcaseBusiness,
  },
];

const inclusions = [
  "Review of your resume, target role and application context",
  "Tailored opening paragraph written for the role or employer",
  "Clear explanation of relevant skills, experience and motivation",
  "Achievement-led body content that supports your resume",
  "Professional closing statement and interview-focused call to action",
  "Australian spelling, tone and application style",
  "Editable Word document and PDF version",
  "Optional alignment with resume, LinkedIn profile or selection criteria",
  "Guidance on tailoring the letter for future applications",
  "Revision support where required for accuracy and fit",
];

const letterTypes = [
  {
    title: "Targeted cover letter",
    text: "Best for a specific advertised role where the employer expects a tailored application.",
  },
  {
    title: "Government cover letter",
    text: "Useful for public sector applications where you need to address role requirements, motivation and capability.",
  },
  {
    title: "Career change letter",
    text: "Helps explain transferable skills and why your previous experience is relevant to a new direction.",
  },
  {
    title: "Graduate cover letter",
    text: "Positions education, placements, projects, part-time work and motivation when experience is still developing.",
  },
];

const faqs = [
  {
    question: "Do I still need a cover letter in Australia?",
    answer:
      "A cover letter is still useful when an employer requests one, when you need to explain your fit for a role, or when your resume alone does not fully communicate your motivation, career change, relocation or industry alignment.",
  },
  {
    question: "What makes a strong cover letter?",
    answer:
      "A strong cover letter is specific, concise and relevant. It explains why you are applying, connects your experience to the role, includes credible evidence and uses a professional tone without simply repeating your resume.",
  },
  {
    question: "Can you write a cover letter for a specific job advertisement?",
    answer:
      "Yes. A targeted cover letter is usually strongest when it is based on a specific job advertisement, employer and role requirements. You can send the advertisement with your resume for review.",
  },
  {
    question: "Can you help with government cover letters?",
    answer:
      "Yes. Ramsey Resume can help with government cover letters that support public sector applications, including letters that need to address role requirements, motivation and relevant capabilities.",
  },
  {
    question: "How long should a cover letter be?",
    answer:
      "Most Australian cover letters are commonly around one page unless the application instructions request something different. The priority is relevance, clarity and a structure that is easy to read.",
  },
  {
    question: "Is a cover letter the same as selection criteria?",
    answer:
      "No. A cover letter introduces your application and explains fit for the role. Selection criteria responses usually require structured evidence against specific capabilities, often using examples from your work history.",
  },
  {
    question: "Can you write a general cover letter template?",
    answer:
      "Yes, but a targeted cover letter is usually stronger. If you need a reusable version, Ramsey Resume can create a flexible base letter and explain which parts should be adapted for each role.",
  },
  {
    question: "Do you provide cover letter writing from Perth?",
    answer:
      "Yes. Ramsey Resume is based in Perth, Western Australia and provides cover letter writing support for job seekers across Australia.",
  },
];

const relatedServices = [
  {
    title: "Resume Writing",
    text: "Build a stronger resume to support the cover letter and present your experience clearly.",
    href: "/resume-writing/",
  },
  {
    title: "ATS Resume Writing",
    text: "Create an ATS-friendly resume structure for online applications and recruitment systems.",
    href: "/ats-resume-writing/",
  },
  {
    title: "Selection Criteria Writing",
    text: "Get structured evidence-based responses for government and public sector applications.",
    href: "/selection-criteria-writing/",
  },
  {
    title: "LinkedIn Profile Optimisation",
    text: "Align your online professional profile with your resume and target applications.",
    href: "/linkedin-profile-optimisation/",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cover Letter Writing Service Australia",
  serviceType: "Cover Letter Writing",
  provider: {
    "@type": "ProfessionalService",
    name: "Ramsey Resume",
    url: siteConfig.url,
    telephone: "+61438782206",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "WA",
      addressCountry: "AU",
    },
  },
  areaServed: [
    { "@type": "Country", name: "Australia" },
    { "@type": "State", name: "Western Australia" },
    { "@type": "City", name: "Perth" },
  ],
  description:
    "Professional cover letter writing service for Australian job seekers, including targeted cover letters, government cover letters and career change applications.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
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
      name: "Career Services",
      item: `${siteConfig.url}/cover-letter-writing/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cover Letter Writing",
      item: `${siteConfig.url}/cover-letter-writing/`,
    },
  ],
};

export default function CoverLetterWritingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Section className="overflow-hidden bg-soft">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <Link className="hover:text-brand" href="/">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Cover Letter Writing</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-teal shadow-card">
                <MapPin aria-hidden="true" size={17} />
                Cover letter writer Perth. Australia-wide service.
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-navy md:text-5xl lg:text-6xl">
                Cover Letter Writing Service Australia
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                A strong cover letter gives your application context. It explains why you are
                applying, how your experience connects to the role and why an employer should keep
                reading your resume. Ramsey Resume writes tailored cover letters for Australian job
                seekers who want a professional, specific and persuasive application.
              </p>
              <p className="mt-4 max-w-2xl leading-8 text-muted">
                Based in Perth, Western Australia and supporting clients Australia-wide, we help
                professionals, graduates, skilled migrants, government applicants and career
                changers communicate their fit without sounding generic or overstated.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/get-a-quote/">Get a Free Resume Review</Button>
                <Button href={siteConfig.whatsappHref} variant="whatsapp">
                  <MessageCircle aria-hidden="true" className="mr-2" size={18} />
                  WhatsApp Us
                </Button>
                <Button href="/pricing/" variant="secondary">
                  Get Quote
                </Button>
                <Button href="/contact/" variant="secondary">
                  Contact
                </Button>
              </div>
              <ul className="mt-8 grid gap-3 text-sm font-semibold text-ink sm:grid-cols-2">
                {[
                  "Tailored to the role and employer",
                  "Professional Australian tone",
                  "Government and private sector support",
                  "Aligned with your resume and LinkedIn profile",
                ].map((item) => (
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
                  Targeted Application Letter
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-white">
                  Make the reason for your application clear before the resume is reviewed.
                </h2>
              </div>
              <div className="space-y-4 p-6">
                {["Opening", "Role fit", "Evidence", "Closing"].map((item) => (
                  <div className="rounded-lg border border-line bg-soft p-4" key={item}>
                    <div className="mb-2 flex items-center gap-2">
                      <Mail aria-hidden="true" className="text-brand" size={18} />
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
          <TextBlock
            eyebrow="Service overview"
            title="What professional cover letter writing does"
            body={[
              "Professional cover letter writing turns your motivation, role fit and most relevant experience into a focused application message. It is not a longer version of your resume. It is a short, strategic document that explains why your background matters for the specific opportunity.",
              "Many job seekers either skip the cover letter, send a generic template or repeat the same information that already appears in their resume. This can weaken the application because it misses the chance to speak directly to the employer's needs. A better cover letter shows that you understand the role, have relevant experience and can communicate professionally.",
              "Ramsey Resume writes cover letters that are specific, practical and aligned with Australian recruitment expectations. The aim is to help the reader quickly understand your fit and move into your resume with a stronger impression of your application.",
            ]}
          />
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <SectionHeader
            eyebrow="Who it is for"
            title="Who this cover letter writing service is for"
            text="This service is designed for job seekers who need a clear, professional letter that supports a specific application or career move."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
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
            eyebrow="Benefits"
            title="How a tailored cover letter strengthens your application"
            text="A professional cover letter helps bridge the gap between your resume and the role requirements."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
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
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Inclusions</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                What is included in the cover letter service
              </h2>
              <p className="mt-5 leading-8 text-muted">
                A cover letter needs structure, relevance and a confident tone. Ramsey Resume
                focuses on role alignment, evidence and practical final files you can submit with
                your application.
              </p>
            </div>
            <Card>
              <div className="grid gap-4 md:grid-cols-2">
                {inclusions.map((item) => (
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
          <SectionHeader
            eyebrow="Process"
            title="How the cover letter writing process works"
            text="The process is simple and guided, with the letter built around the role and your real experience."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
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

      <Section className="bg-soft">
        <Container>
          <SectionHeader
            eyebrow="Cover letter types"
            title="Cover letters for different application situations"
            text="Different applications need different emphasis. The structure should match the employer, role and reason for writing."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {letterTypes.map((type) => (
              <Card key={type.title}>
                <ShieldCheck aria-hidden="true" className="mb-5 text-brand" size={30} />
                <h3 className="font-display text-lg font-bold text-navy">{type.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{type.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Pricing preview</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                Cover letter pricing depends on the application
              </h2>
              <p className="mt-5 leading-8 text-muted">
                Pricing depends on whether you need one targeted letter, a reusable cover letter
                template, a government application letter or a complete resume and cover letter
                package. The best starting point is to send your current resume and target role for
                review.
              </p>
            </div>
            <Card>
              <h3 className="font-display text-2xl font-extrabold text-navy">
                Start with a free application review
              </h3>
              <p className="mt-4 leading-7 text-muted">
                If your resume also needs work, we can recommend whether a standalone cover letter
                is enough or whether a full application package will be stronger.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/get-a-quote/">Get a Free Resume Review</Button>
                <Button href="/pricing/" variant="secondary">
                  View Pricing
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
            title="Cover letter writing FAQs"
            text="Straight answers for Australian job seekers deciding whether a cover letter will improve their application."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
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
            title="Create a complete application package"
            text="A cover letter is most effective when it supports a strong resume and consistent professional positioning."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service) => (
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
                Free resume review
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white md:text-5xl">
                Need a cover letter that actually supports your application?
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-white/75">
                Send your current resume and target role. Ramsey Resume can recommend whether you
                need a targeted cover letter, a resume refresh or a complete application package.
              </p>
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
