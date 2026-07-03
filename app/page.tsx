import type { Metadata } from "next";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Calculator,
  CheckCircle,
  ChevronRight,
  FileCheck,
  FileText,
  GraduationCap,
  HardHat,
  HeartPulse,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MonitorCog,
  PenLine,
  Phone,
  Quote,
  ScanSearch,
  School,
  SearchCheck,
  ShieldCheck,
  Target,
  Upload,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ResumePreview } from "@/components/sections/ResumePreview";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Professional Resume Writing Services Perth & Australia | Ramsey Resume",
  description:
    "Get an ATS-friendly resume, cover letter, LinkedIn profile or selection criteria written for Australian job seekers. Perth-based resume writing support available Australia-wide.",
  path: "/",
});

const trustBadges = [
  {
    title: "ATS-friendly documents",
    text: "Clean structure, relevant keywords and readable formatting for modern recruitment systems.",
    icon: ScanSearch,
  },
  {
    title: "Perth-based support",
    text: "Local Western Australian understanding with remote support available across Australia.",
    icon: MapPin,
  },
  {
    title: "Role-tailored writing",
    text: "Documents written around your target role, industry and career direction.",
    icon: Target,
  },
  {
    title: "Word and PDF delivery",
    text: "Practical final files suitable for online applications, recruiters and future updates.",
    icon: FileCheck,
  },
];

const services = [
  {
    title: "Resume Writing",
    text: "Professional resume writing for Australian job seekers who need a clear, polished and targeted resume.",
    href: "/resume-writing/",
    icon: FileText,
  },
  {
    title: "ATS Resume Writing",
    text: "Clean, keyword-aligned resumes designed to support applicant tracking system readability.",
    href: "/ats-resume-writing/",
    icon: ScanSearch,
  },
  {
    title: "Cover Letter Writing",
    text: "Tailored cover letters that connect your experience to the role and strengthen your first impression.",
    href: "/cover-letter-writing/",
    icon: Mail,
  },
  {
    title: "Selection Criteria",
    text: "Evidence-based responses for government and structured applications requiring clear examples.",
    href: "/selection-criteria-writing/",
    icon: Landmark,
  },
  {
    title: "LinkedIn Optimisation",
    text: "A stronger LinkedIn profile that aligns with your resume and supports recruiter discovery.",
    href: "/linkedin-profile-optimisation/",
    icon: Linkedin,
  },
  {
    title: "Government Applications",
    text: "Targeted resumes and supporting documents for public sector, council, state and federal roles.",
    href: "/government-resume-writing/",
    icon: BriefcaseBusiness,
  },
];

const industries = [
  { title: "Nursing", href: "/nursing-resume-writing/", icon: HeartPulse },
  { title: "Teaching", href: "/teacher-resume-writing/", icon: School },
  { title: "IT", href: "/it-resume-writing/", icon: MonitorCog },
  { title: "Accounting", href: "/accountant-resume-writing/", icon: Calculator },
  { title: "Engineering", href: "/engineer-resume-writing/", icon: Wrench },
  { title: "FIFO and Mining", href: "/fifo-resume-writing/", icon: HardHat },
  { title: "Graduates", href: "/graduate-resume-writing/", icon: GraduationCap },
  { title: "Government", href: "/government-resume-writing/", icon: Landmark },
];

const processSteps = [
  {
    title: "Send your resume",
    text: "Upload your current resume, old documents or career notes. If you are starting from scratch, share what you have.",
    icon: Upload,
  },
  {
    title: "Share your target role",
    text: "Tell us the job title, industry, level or advertisement you are applying for.",
    icon: Target,
  },
  {
    title: "Review and strategy",
    text: "We identify gaps in structure, wording, ATS readability, achievements and role alignment.",
    icon: SearchCheck,
  },
  {
    title: "Professional writing",
    text: "Your documents are written around your background, target role and Australian hiring expectations.",
    icon: PenLine,
  },
];

const faqs = [
  {
    question: "Do you provide resume writing services in Perth only?",
    answer:
      "Ramsey Resume is Perth-based and supports job seekers across Western Australia and Australia-wide. The process can be completed remotely by phone, email, online form or WhatsApp.",
  },
  {
    question: "What is a free resume review?",
    answer:
      "A free resume review is a starting point where you send your current resume and share your target role. Ramsey Resume reviews the document and recommends what needs improvement, such as structure, wording, ATS formatting, role targeting or missing achievements.",
  },
  {
    question: "Can you make my resume ATS-friendly?",
    answer:
      "Yes. ATS-friendly resume writing focuses on clean formatting, clear headings, relevant role keywords and readable content. No resume can guarantee an interview, but a clean structure helps your document remain practical for online applications.",
  },
  {
    question: "Do you write cover letters and selection criteria?",
    answer:
      "Yes. Ramsey Resume can help with tailored cover letters and evidence-based selection criteria responses for government and structured applications.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start by requesting a free resume review. Upload your current resume, share your target role and Ramsey Resume will recommend the most suitable next step.",
  },
];

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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: "+61438782206",
  email: siteConfig.email,
  areaServed: siteConfig.areaServed.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Perth",
    addressRegion: "WA",
    addressCountry: "AU",
  },
  description:
    "Professional resume writing, cover letter, LinkedIn profile and selection criteria support based in Perth, WA — servicing clients Australia-wide and in New Zealand.",
};

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <Section className="overflow-hidden bg-soft">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-teal shadow-card">
                <CheckCircle aria-hidden="true" size={17} />
                Perth-based resume support. Australia-wide and New Zealand service.
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-navy md:text-5xl lg:text-6xl">
                Professional Resume Writing Services in Perth & Australia-Wide
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Get an ATS-friendly resume, cover letter, LinkedIn profile or selection criteria
                response written for Australian job seekers who want stronger applications, more
                confidence and better interview opportunities.
              </p>
              <p className="mt-4 max-w-2xl leading-8 text-muted">
                Ramsey Resume helps clients across Perth, Western Australia and Australia present
                their experience with clarity, strategy and professionalism. Your application should
                do more than list duties. It should show your value, match the role and make it easy
                for employers to understand why you are the right fit.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                Based in Perth, WA and servicing clients Australia-wide, with remote support also
                available for job seekers in New Zealand.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/get-a-quote/">Get a Free Resume Review</Button>
                <Button href={siteConfig.whatsappHref} variant="whatsapp">
                  <MessageCircle aria-hidden="true" className="mr-2" size={18} />
                  WhatsApp Us
                </Button>
              </div>
              <ul className="mt-8 grid gap-3 text-sm font-semibold text-ink sm:grid-cols-2">
                {[
                  "ATS-friendly resume writing",
                  "Government, FIFO and professional applications",
                  "Word and PDF delivery",
                  "Fast turnaround options available",
                ].map((item) => (
                  <li className="flex items-center gap-2" key={item}>
                    <CheckCircle aria-hidden="true" className="text-teal" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ResumePreview />
          </div>
        </Container>
      </Section>

      {/* TEMP: template comparison for review — remove before deploy */}
      <Section className="bg-white">
        <Container>
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-teal">
              Internal review — not final
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
              Resume Template Comparison
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted">
              Three template directions using the same sample content, shown here temporarily for
              side-by-side review before one is selected.
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <div className="mb-5 text-center">
                <h3 className="font-display text-xl font-bold text-navy">1. Classic</h3>
                <p className="mt-1 text-sm text-muted">
                  Straight-on, centered, traditional serif headings, single column, conservative and
                  formal.
                </p>
              </div>
              <div id="preview-classic">
                <ResumePreview variant="classic" />
              </div>
            </div>

            <div>
              <div className="mb-5 text-center">
                <h3 className="font-display text-xl font-bold text-navy">2. Modern</h3>
                <p className="mt-1 text-sm text-muted">
                  Very slight tilt, subtle shadow and depth, sans-serif headings, two-column layout
                  with a sidebar for contact and skills.
                </p>
              </div>
              <div id="preview-modern">
                <ResumePreview variant="modern" />
              </div>
            </div>

            <div>
              <div className="mb-5 text-center">
                <h3 className="font-display text-xl font-bold text-navy">3. Minimal</h3>
                <p className="mt-1 text-sm text-muted">
                  Straight-on, ultra-clean, generous whitespace, single accent color, understated and
                  premium.
                </p>
              </div>
              <div id="preview-minimal">
                <ResumePreview variant="minimal" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <Card className="shadow-none" key={badge.title}>
                  <Icon aria-hidden="true" className="mb-4 text-teal" size={30} />
                  <h2 className="font-display text-xl font-bold text-navy">{badge.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{badge.text}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Trust proof</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                Trusted support for Australian job seekers
              </h2>
              <p className="mt-4 leading-8 text-muted">
                Choosing a resume writer requires trust. Use this section for verified Google
                reviews, approved client comments and real outcome stories only.
              </p>
              <p className="mt-4 rounded-lg border border-gold/30 bg-white p-4 text-sm leading-6 text-muted">
                Verified Google reviews can be connected here once the review source is available.
                No fake review counts, ratings or success rates are displayed.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {["Verified review source", "Approved client comments", "Real case examples"].map(
                (item) => (
                  <Card key={item}>
                    <Quote aria-hidden="true" className="mt-5 text-brand" size={26} />
                    <h3 className="mt-4 font-display text-lg font-bold text-navy">{item}</h3>
                    <p className="mt-4 text-sm leading-6 text-muted">
                      Reserved for verified proof only. Connect genuine reviews or approved client
                      feedback before public testimonial claims are shown.
                    </p>
                  </Card>
                ),
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Resume services"
            title="Professional resume and career writing services"
            text="Choose the support you need, or start with a free review if you are unsure which service is right for your next application."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card className="transition hover:-translate-y-1 hover:border-brand" key={service.title}>
                  <Icon aria-hidden="true" className="mb-5 text-brand" size={32} />
                  <h3 className="font-display text-xl font-bold text-navy">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.text}</p>
                  <Link
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-teal-dark"
                    href={service.href}
                  >
                    Learn more
                    <ChevronRight aria-hidden="true" size={16} />
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <SectionHeader
            eyebrow="Industries"
            title="Resume support for your industry"
            text="Different industries look for different evidence. Ramsey Resume adapts your documents to the industry, employer and role you are targeting."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  className="rounded-card border border-line bg-white p-5 text-center shadow-card transition hover:-translate-y-1 hover:border-brand"
                  href={industry.href}
                  key={industry.title}
                >
                  <Icon aria-hidden="true" className="mx-auto text-teal" size={30} />
                  <h3 className="mt-4 font-display text-base font-bold text-navy">
                    {industry.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">ATS expertise</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                ATS resume writing that still sounds human
              </h2>
              <p className="mt-5 leading-8 text-muted">
                Many Australian employers use applicant tracking systems to receive, sort and search
                job applications. An ATS-friendly resume is not about forcing keywords into every
                sentence. It is about building a clear, structured document that reflects your
                experience, aligns with the role and remains easy for recruiters to read.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/ats-resume-writing/">Improve My ATS Resume</Button>
                <Button href="/get-a-quote/" variant="secondary">
                  Get a Free Resume Review
                </Button>
              </div>
            </div>
            <Card>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Clear resume sections",
                  "Role-specific keywords",
                  "Readable formatting",
                  "Achievement-focused bullets",
                  "Australian spelling",
                  "Word and PDF delivery",
                ].map((item) => (
                  <div className="flex items-start gap-3 rounded-lg bg-soft p-4" key={item}>
                    <ShieldCheck aria-hidden="true" className="mt-0.5 text-teal" size={20} />
                    <span className="text-sm font-semibold text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <SectionHeader
            eyebrow="Process"
            title="A clear process from first review to final documents"
            text="You do not need to have everything prepared before getting started. Send what you have, share your target role and we will guide the next step."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Pricing preview</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                Resume writing packages and pricing
              </h2>
              <p className="mt-5 leading-8 text-muted">
                Your package depends on your career level, current documents, target role,
                application requirements and turnaround time. Start with a free review if you are
                unsure what you need.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/pricing/" variant="secondary">
                  View Pricing
                </Button>
                <Button href="/get-a-quote/">Request My Quote</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {["Resume Essentials", "Resume + Cover Letter", "Complete Support"].map((item) => (
                <Card className={item === "Resume + Cover Letter" ? "border-teal" : ""} key={item}>
                  <BadgeCheck aria-hidden="true" className="mb-4 text-teal" size={28} />
                  <h3 className="font-display text-xl font-bold text-navy">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Package details and exact pricing should stay aligned with the pricing page.
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Resume samples</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                Before-and-after improvements
              </h2>
              <p className="mt-5 leading-8 text-muted">
                A strong resume is easy to scan, clearly structured and focused on the role you
                want. For privacy, all public samples should use fictional or anonymised details.
              </p>
              <Button className="mt-7" href="/resume-examples/" variant="secondary">
                View Resume Examples
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <ComparisonCard
                title="Before"
                text="Long duty-based bullet points, unclear achievements, weak summary, inconsistent formatting and limited role targeting."
              />
              <ComparisonCard
                title="After"
                text="Clear professional profile, targeted keywords, achievement-led bullet points, improved structure and stronger role relevance."
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            text="Answers to common questions about resume writing, ATS resumes, cover letters, selection criteria and getting started."
          />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-line rounded-card border border-line bg-white">
            {faqs.map((faq) => (
              <details className="group p-5" key={faq.question}>
                <summary className="cursor-pointer list-none font-display text-lg font-bold text-navy">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <ChevronRight
                      aria-hidden="true"
                      className="shrink-0 text-teal transition group-open:rotate-90"
                      size={20}
                    />
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-navy text-white">
        <Container className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-gold">Ready to apply?</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-extrabold text-white md:text-5xl">
            Start with a free resume review before your next application.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
            If your current resume feels outdated, generic or difficult to tailor, Ramsey Resume
            can help you take the next step with clearer, stronger career documents.
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
      <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-muted md:text-lg">{text}</p>
    </div>
  );
}

function ComparisonCard({ title, text }: { title: string; text: string }) {
  return (
    <Card>
      <h3 className="font-display text-2xl font-bold text-navy">{title}</h3>
      <div className="mt-5 space-y-3 rounded-lg bg-soft p-4" aria-hidden="true">
        <div className="h-3 w-1/2 rounded-full bg-brand/25" />
        <div className="h-2 w-full rounded-full bg-line" />
        <div className="h-2 w-11/12 rounded-full bg-line" />
        <div className="h-2 w-4/5 rounded-full bg-line" />
      </div>
      <p className="mt-5 text-sm leading-6 text-muted">{text}</p>
    </Card>
  );
}
