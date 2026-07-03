import type { Metadata } from "next";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle,
  ChevronRight,
  FileCheck,
  FileText,
  Gauge,
  Layers,
  MapPin,
  MessageCircle,
  ScanSearch,
  Search,
  SearchCheck,
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
  title: "ATS Resume Writing Service Australia | Ramsey Resume",
  description:
    "ATS resume writing for Australian job seekers. Perth-based professional resume writer creating ATS-friendly resumes with keyword optimisation and clean structure.",
  path: "/ats-resume-writing/",
});

const commonMistakes = [
  {
    title: "Complex visual layouts",
    text: "Heavy columns, text boxes, icons, graphics and unusual templates can make a resume harder to read, especially when it is uploaded into an online application system.",
    icon: Layers,
  },
  {
    title: "Missing role keywords",
    text: "If your resume does not reflect the language used in the job advertisement, your relevant experience may be harder for recruiters and screening systems to identify.",
    icon: Search,
  },
  {
    title: "Generic duties instead of evidence",
    text: "ATS resume writing is not just keyword stuffing. Your resume still needs clear examples, achievements and context that show how you have used your skills.",
    icon: FileText,
  },
  {
    title: "Unclear headings",
    text: "Non-standard headings can make important sections harder to interpret. Simple headings such as Work Experience, Education and Key Skills are usually more practical.",
    icon: FileCheck,
  },
  {
    title: "Overloaded formatting",
    text: "Tables, decorative lines, unusual fonts and hidden text can create problems. A clean document is often stronger than a resume that looks impressive but reads poorly.",
    icon: AlertTriangle,
  },
  {
    title: "One resume for every role",
    text: "Submitting the same resume for unrelated applications weakens relevance. Strong ATS-friendly resumes are adjusted around the role, industry and employer priorities.",
    icon: Target,
  },
];

const benefits = [
  "A cleaner structure that is easier for employers, recruiters and online systems to scan",
  "Keyword alignment based on the role, industry and Australian job advertisement language",
  "A professional profile that quickly explains your fit for the target position",
  "Skills sections that support both human readability and digital screening",
  "Achievement-focused employment history, not just copied duty statements",
  "Practical formatting for job boards, employer portals and recruitment platforms",
  "Australian spelling, terminology and resume expectations",
  "A resume you can adapt more confidently for future applications",
];

const audiences = [
  "Job seekers applying online but receiving few responses",
  "Professionals using an old or highly designed resume template",
  "Applicants targeting corporate, government, healthcare, mining, IT or professional roles",
  "Career changers who need transferable skills positioned clearly",
  "Skilled migrants adapting overseas experience for Australian employers",
  "Graduates applying through high-volume recruitment portals",
  "FIFO, trades and technical applicants applying through employer systems",
  "Managers and senior professionals who need clearer keyword and achievement alignment",
];

const processSteps = [
  {
    title: "Resume and target role review",
    text: "Send your current resume, LinkedIn profile or career notes, plus the type of role you want. If you have a job advertisement, include it so the resume can be aligned to the right language.",
    icon: Upload,
  },
  {
    title: "ATS and content audit",
    text: "We review structure, headings, formatting, keyword relevance, role alignment, career summary, skills, achievements and any areas that may weaken readability.",
    icon: ScanSearch,
  },
  {
    title: "Keyword mapping",
    text: "Relevant terms are mapped from the job advertisement, industry expectations and your actual experience. The goal is natural keyword optimisation, not artificial repetition.",
    icon: SearchCheck,
  },
  {
    title: "ATS-friendly rewrite",
    text: "Your resume is rewritten with clear headings, practical formatting, targeted skills, improved achievement statements and stronger alignment to Australian employer expectations.",
    icon: FileCheck,
  },
  {
    title: "Human readability check",
    text: "An ATS-friendly resume still needs to persuade a person. We check flow, clarity, tone, relevance and whether the document makes your value easy to understand.",
    icon: UserCheck,
  },
  {
    title: "Final files and guidance",
    text: "You receive practical final documents for online applications, plus guidance on tailoring your resume for future roles where appropriate.",
    icon: BriefcaseBusiness,
  },
];

const inclusions = [
  "Review of your current resume for ATS readability risks",
  "ATS-friendly resume structure with clear section headings",
  "Professional summary tailored to your target role",
  "Keyword optimisation based on role and industry language",
  "Key skills section written for both screening systems and recruiters",
  "Employment history rewritten with achievements and relevant responsibilities",
  "Education, licences, certifications and technical skills formatting",
  "Australian spelling, terminology and recruiter-friendly phrasing",
  "Editable Word document and PDF version",
  "Practical guidance on tailoring keywords for future applications",
];

const keywordPrinciples = [
  {
    title: "Use the job advertisement as evidence",
    text: "The best keyword strategy starts with the actual role. Position titles, required skills, systems, licences, responsibilities and selection criteria all provide clues.",
  },
  {
    title: "Match keywords to real experience",
    text: "Keyword optimisation should never make claims you cannot support. Terms are included where they accurately reflect your background, achievements and capability.",
  },
  {
    title: "Balance exact terms with natural writing",
    text: "A resume can include relevant phrases while still sounding human. Recruiters should not feel like they are reading a list of disconnected keywords.",
  },
  {
    title: "Prioritise the most important sections",
    text: "Professional summaries, key skills and recent roles usually carry the strongest relevance signals. These sections need to be clear, targeted and easy to scan.",
  },
];

const faqs = [
  {
    question: "What is ATS resume writing?",
    answer:
      "ATS resume writing is the process of creating a resume that is easy for applicant tracking systems, job portals, recruiters and employers to read. It focuses on clean formatting, clear headings, relevant keywords and role-aligned content while still keeping the resume persuasive for humans.",
  },
  {
    question: "What does ATS mean?",
    answer:
      "ATS stands for Applicant Tracking System. It is software used by many employers and recruiters to receive, organise and manage job applications. Some systems help sort applications by information such as job title, skills, experience, qualifications and keywords.",
  },
  {
    question: "Can an ATS-friendly resume guarantee an interview?",
    answer:
      "No resume can guarantee an interview. An ATS-friendly resume helps reduce avoidable formatting and relevance issues, but shortlisting still depends on your experience, the role requirements, competition, timing and employer decision-making.",
  },
  {
    question: "Is ATS resume writing just adding keywords?",
    answer:
      "No. Keyword optimisation is important, but an effective ATS-friendly resume also needs clear structure, relevant achievements, practical formatting and a logical story about your experience. Keyword stuffing can make a resume weaker.",
  },
  {
    question: "Do Australian employers use ATS software?",
    answer:
      "Many Australian employers, recruiters and job boards use online application systems or recruitment platforms. The level of automation varies, but a clean, readable and keyword-aligned resume is a practical choice for most online applications.",
  },
  {
    question: "Should I use a graphic resume template?",
    answer:
      "Graphic templates can look polished, but they are not always suitable for online applications. If a resume relies heavily on columns, icons, text boxes or unusual layouts, it may be harder to scan. A clean professional format is usually safer.",
  },
  {
    question: "Can you help with ATS resumes for government jobs?",
    answer:
      "Yes. Government applications often require careful alignment with role requirements, capabilities and selection criteria. An ATS-friendly government resume should be clear, targeted and supported by relevant evidence.",
  },
  {
    question: "Can you optimise my existing resume instead of rewriting it?",
    answer:
      "In some cases, yes. If your current resume already has strong content, it may need restructuring, keyword alignment and editing. If the content is outdated or too generic, a full rewrite is usually stronger.",
  },
  {
    question: "Do you provide ATS resume writing from Perth?",
    answer:
      "Yes. Ramsey Resume is based in Perth, Western Australia and supports job seekers across Australia through online communication, email and WhatsApp.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start with a free resume review. Send your current resume and target role, and Ramsey Resume will identify the main improvements needed for ATS readability, keyword alignment and overall application strength.",
  },
];

const relatedServices = [
  {
    title: "Resume Writing",
    text: "A complete professional resume writing service for Australian job seekers who need stronger career positioning.",
    href: "/resume-writing/",
  },
  {
    title: "Cover Letter Writing",
    text: "A tailored cover letter to support your resume and connect your experience to the employer’s priorities.",
    href: "/cover-letter-writing/",
  },
  {
    title: "Selection Criteria Writing",
    text: "Structured responses for government and public sector applications requiring evidence-based examples.",
    href: "/selection-criteria-writing/",
  },
  {
    title: "LinkedIn Profile Optimisation",
    text: "Align your LinkedIn profile with your ATS-friendly resume, target roles and professional positioning.",
    href: "/linkedin-profile-optimisation/",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ATS Resume Writing",
  serviceType: "ATS Resume Writing Service",
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
    "ATS resume writing service for Australian job seekers, including ATS-friendly formatting, resume keyword optimisation and professional resume writing support.",
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteConfig.url}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Resume Services",
      item: `${siteConfig.url}/resume-writing/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ATS Resume Writing",
      item: `${siteConfig.url}/ats-resume-writing/`,
    },
  ],
};

export default function AtsResumeWritingPage() {
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
            <Link className="hover:text-brand" href="/resume-writing/">
              Resume Services
            </Link>
            <span className="mx-2">/</span>
            <span>ATS Resume Writing</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-teal shadow-card">
                <MapPin aria-hidden="true" size={17} />
                ATS resume service Australia. Perth-based support.
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-navy md:text-5xl lg:text-6xl">
                ATS Resume Writing
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                A strong resume needs to work in two places: inside online application systems and
                in front of the person making the shortlist decision. Ramsey Resume creates
                ATS-friendly resumes for Australian job seekers who want clean structure, relevant
                keywords and professional writing that still sounds human.
              </p>
              <p className="mt-4 max-w-2xl leading-8 text-muted">
                Based in Perth, Western Australia and supporting clients Australia-wide, we help
                professionals, graduates, skilled migrants, government applicants, FIFO workers and
                career changers improve resumes that may be too generic, too visually complex or
                poorly aligned with the roles they want.
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
                  "ATS-friendly resume formatting",
                  "Resume keyword optimisation",
                  "Written for humans and systems",
                  "Perth, WA and Australia-wide service",
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
                  ATS Resume Check
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-white">
                  Make your resume easier to read before your next online application.
                </h2>
              </div>
              <div className="space-y-4 p-6">
                {[
                  ["Role keywords", "w-5/6"],
                  ["Clear headings", "w-full"],
                  ["Skills alignment", "w-4/5"],
                  ["Readable formatting", "w-11/12"],
                ].map(([item, width]) => (
                  <div className="rounded-lg border border-line bg-soft p-4" key={item}>
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <span className="text-sm font-bold text-navy">{item}</span>
                      <BadgeCheck aria-hidden="true" className="text-teal" size={18} />
                    </div>
                    <div className="h-2 rounded-full bg-line">
                      <div className={`h-2 rounded-full bg-brand ${width}`} />
                    </div>
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
            eyebrow="What ATS means"
            title="What is an ATS-friendly resume?"
            body={[
              "ATS stands for Applicant Tracking System. It is software used by many employers, recruiters and job boards to receive, organise and manage job applications. When you apply online, your resume may pass through a recruitment platform before a recruiter or hiring manager reviews it. The system may store your information, help recruiters search for relevant skills, or support shortlisting workflows.",
              "This does not mean a robot makes every hiring decision. It also does not mean your resume should be filled with repeated keywords until it becomes unreadable. A practical ATS-friendly resume is simply a resume that is clean, well structured, relevant to the role and easy for both software and people to understand.",
              "Good ATS resume writing balances three things: simple formatting, role-specific keyword alignment and strong human-readable content. Your resume should use clear headings, straightforward layouts, Australian spelling and terminology, and language that reflects your real experience. It should also show evidence of what you have done, not just list the words from a job advertisement.",
            ]}
          />
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <SectionHeader
            eyebrow="Common issues"
            title="Common ATS resume mistakes that can weaken applications"
            text="Many capable candidates lose impact because their resume is hard to scan, poorly targeted or built around design choices that do not suit online applications."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {commonMistakes.map((mistake) => {
              const Icon = mistake.icon;
              return (
                <Card className="shadow-none" key={mistake.title}>
                  <Icon aria-hidden="true" className="mb-5 text-brand" size={30} />
                  <h3 className="font-display text-xl font-bold text-navy">{mistake.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{mistake.text}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Benefits</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                How ATS resume writing improves your application
              </h2>
              <p className="mt-5 leading-8 text-muted">
                The purpose of ATS resume writing is not to trick a system. The purpose is to remove
                avoidable barriers and make your value easier to find. A professional resume writer
                helps translate your experience into clear, targeted content that fits Australian
                application standards.
              </p>
              <Button className="mt-7" href="/get-a-quote/">
                Request a Free ATS Resume Review
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <Card className="shadow-none" key={benefit}>
                  <CheckCircle aria-hidden="true" className="mb-4 text-teal" size={24} />
                  <p className="text-sm font-semibold leading-6 text-ink">{benefit}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <SectionHeader
            eyebrow="Who it is for"
            title="Who needs an ATS-friendly resume?"
            text="This service is useful for job seekers who apply online and need a resume that is clean, targeted and easy to interpret."
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
            eyebrow="Process"
            title="Our ATS resume writing process"
            text="The process is structured around your target role, the way Australian employers read applications and the practical realities of online recruitment systems."
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Inclusions</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                What’s included in the ATS resume service
              </h2>
              <p className="mt-5 leading-8 text-muted">
                An ATS-friendly resume should be practical, readable and grounded in your actual
                career history. Ramsey Resume focuses on the document structure and the substance of
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
            eyebrow="Keyword optimisation"
            title="Resume keyword optimisation without keyword stuffing"
            text="Strong ATS resume writing uses keywords naturally. The goal is relevance, clarity and evidence, not repeating words for the sake of it."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {keywordPrinciples.map((principle) => (
              <Card key={principle.title}>
                <SearchCheck aria-hidden="true" className="mb-5 text-brand" size={30} />
                <h3 className="font-display text-lg font-bold text-navy">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{principle.text}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-line bg-white p-6 shadow-card md:p-8">
            <h3 className="font-display text-2xl font-extrabold text-navy">
              Example of practical keyword alignment
            </h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl bg-soft p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-muted">
                  Weak approach
                </p>
                <p className="mt-3 leading-7 text-muted">
                  “Hardworking team member with good communication skills and a range of experience
                  in different duties.”
                </p>
              </div>
              <div className="rounded-xl bg-brand/10 p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-brand">
                  Stronger ATS-aware approach
                </p>
                <p className="mt-3 leading-7 text-ink">
                  “Customer service professional with experience in stakeholder communication,
                  complaint resolution, CRM data entry, scheduling and high-volume enquiry
                  management.”
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-muted">
              The stronger version is still readable, but it gives both recruiters and application
              systems more specific information about relevant skills and responsibilities.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Pricing preview</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                Choose the right level of resume help
              </h2>
              <p className="mt-5 leading-8 text-muted">
                Pricing depends on your career level, current document quality, target role and
                whether you need a full rewrite or ATS optimisation of an existing resume. The best
                starting point is a free review so we can recommend the right option.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["ATS Review", "For applicants who need clarity on formatting, keywords and structure."],
                ["ATS Resume Rewrite", "For job seekers who need a complete ATS-friendly resume rebuild."],
                ["Application Package", "For candidates who also need a cover letter or selection criteria."],
              ].map(([title, text]) => (
                <Card className="flex h-full flex-col" key={title}>
                  <Gauge aria-hidden="true" className="mb-5 text-brand" size={30} />
                  <h3 className="font-display text-xl font-bold text-navy">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">{text}</p>
                  <Link
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-teal"
                    href="/pricing/"
                  >
                    View pricing guidance <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="ATS resume writing FAQs"
            text="Straight answers for Australian job seekers who want a practical, ATS-friendly resume without relying on myths."
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

      <Section className="bg-soft">
        <Container>
          <SectionHeader
            eyebrow="Related services"
            title="Build a stronger complete application"
            text="ATS resume writing works best when the rest of your application is aligned with the same target role."
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
                Free ATS resume review
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white md:text-5xl">
                Not sure if your resume is ATS-friendly?
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-white/75">
                Send your current resume and target role. Ramsey Resume will review the main
                structure, keyword and readability issues so you can decide the next step before
                applying for more roles.
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
