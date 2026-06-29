import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Calculator,
  CheckCircle,
  ChevronRight,
  FileCheck,
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
  Star,
  Target,
  Upload,
  Wrench,
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
  title: "Resume Writing Services Australia | Professional Resume Writer",
  description:
    "Professional resume writing services for Australian job seekers. Perth-based resume writer helping clients Australia-wide with ATS-friendly resumes.",
  path: "/resume-writing/",
});

const benefits = [
  {
    title: "Clearer career positioning",
    text: "Your resume is shaped around the role you want, so employers can quickly understand your strengths, direction and relevance.",
    icon: Target,
  },
  {
    title: "Stronger achievement writing",
    text: "We move beyond duty lists and highlight outcomes, contribution, problem solving, leadership, service and measurable value.",
    icon: BadgeCheck,
  },
  {
    title: "Better role alignment",
    text: "Your content is tailored to the industry, job advertisement and language Australian employers are likely to expect.",
    icon: SearchCheck,
  },
  {
    title: "ATS-aware structure",
    text: "Clean headings, practical formatting and relevant keywords support readability across online application systems.",
    icon: ScanSearch,
  },
  {
    title: "Professional presentation",
    text: "Your final resume is polished and practical, without relying on complex design that can make applications harder to use.",
    icon: FileCheck,
  },
  {
    title: "More confidence applying",
    text: "You can apply with a document that presents your background clearly and is easier to tailor for future opportunities.",
    icon: ShieldCheck,
  },
];

const audiences = [
  "Job seekers applying for new roles but not getting enough interviews",
  "Professionals with an outdated resume that no longer reflects their value",
  "Career changers who need to explain transferable skills clearly",
  "Graduates and early-career applicants with limited formal experience",
  "Skilled migrants adapting overseas experience for Australian employers",
  "FIFO, mining, trades and technical applicants who need site-ready documents",
  "Government and public sector applicants needing targeted application support",
  "Managers, executives and senior professionals who need stronger positioning",
];

const processSteps = [
  {
    title: "Send your current resume or career details",
    text: "Upload your current resume, old application documents, LinkedIn profile or career notes. If you are starting from scratch, share what you have and we will guide the next step.",
    icon: Upload,
  },
  {
    title: "Share your target role",
    text: "Tell us the role, industry, job advertisement or type of opportunity you want. This context helps shape the structure, keywords and level of detail.",
    icon: Target,
  },
  {
    title: "Review and strategy",
    text: "We assess your current document, identify gaps and plan how to improve positioning, achievements, formatting, ATS readability and role alignment.",
    icon: SearchCheck,
  },
  {
    title: "Professional resume writing",
    text: "Your resume is written around your target role, using clear language, practical formatting and content that makes your experience easier to understand.",
    icon: PenLine,
  },
  {
    title: "Review and revisions",
    text: "You review the draft and request edits where needed so the final resume remains accurate, polished and aligned with your experience.",
    icon: FileCheck,
  },
  {
    title: "Final delivery",
    text: "Receive your final resume in practical formats suitable for online applications, job boards, email submissions and future updates.",
    icon: BriefcaseBusiness,
  },
];

const inclusions = [
  "Review of your current resume or career details",
  "Role and industry targeting",
  "Professional resume writing and editing",
  "Achievement-focused content",
  "ATS-aware structure where relevant",
  "Australian spelling and terminology",
  "Clear professional profile or career summary",
  "Key skills aligned with your target role",
  "Employment history rewriting",
  "Education, licences and certifications formatting",
  "Editable Word document and PDF version",
  "Revision support and optional express turnaround where available",
];

const industries = [
  { title: "Government and Public Sector", href: "/government-resume-writing/", icon: Landmark },
  { title: "FIFO, Mining and Resources", href: "/fifo-resume-writing/", icon: HardHat },
  { title: "Healthcare and Nursing", href: "/nursing-resume-writing/", icon: HeartPulse },
  { title: "IT and Technology", href: "/it-resume-writing/", icon: MonitorCog },
  { title: "Engineering", href: "/engineer-resume-writing/", icon: Wrench },
  { title: "Accounting and Finance", href: "/accountant-resume-writing/", icon: Calculator },
  { title: "Teaching and Education", href: "/teacher-resume-writing/", icon: School },
  { title: "Graduates and Entry-Level", href: "/graduate-resume-writing/", icon: GraduationCap },
];

const faqs = [
  {
    question: "What is included in a professional resume writing service?",
    answer:
      "A professional resume writing service usually includes review of your current resume or career details, rewriting of your professional summary, key skills, employment history, achievements, education and relevant qualifications. Ramsey Resume also considers role targeting, Australian employer expectations and ATS-aware structure where relevant.",
  },
  {
    question: "Do you provide resume writing services across Australia?",
    answer:
      "Yes. Ramsey Resume is based in Perth, Western Australia and supports clients Australia-wide. The process can be completed remotely using email, phone, online forms and WhatsApp.",
  },
  {
    question: "Can you make my resume ATS-friendly?",
    answer:
      "Yes. ATS resume writing focuses on clean formatting, clear headings, relevant keywords and readable structure. No resume can guarantee an interview, but an ATS-aware approach helps your document remain practical for online applications.",
  },
  {
    question: "What is the difference between a resume and a CV in Australia?",
    answer:
      "In Australia, the terms resume and CV are sometimes used interchangeably, although resume is more common for most job applications. Academic, medical or research roles may require a more detailed CV.",
  },
  {
    question: "Can you help if I am changing careers?",
    answer:
      "Yes. Career change resumes focus on transferable skills, relevant achievements and a clear career direction, helping employers understand how your previous experience supports the role you want next.",
  },
  {
    question: "Do you help graduates with limited experience?",
    answer:
      "Yes. Graduate resumes can include education, placements, internships, volunteer work, part-time roles, projects, technical skills and transferable strengths.",
  },
  {
    question: "Can you help skilled migrants adapt their resume for Australia?",
    answer:
      "Yes. Skilled migrants often need help translating overseas experience into a format Australian employers understand, including structure, terminology, length and local relevance.",
  },
  {
    question: "How long should my resume be?",
    answer:
      "Most Australian resumes are commonly two to four pages, depending on career level, industry and application requirements. The priority is relevance, clarity and readability.",
  },
  {
    question: "Do you write cover letters as well?",
    answer:
      "Yes. Ramsey Resume can write tailored cover letters that support your resume by explaining your interest in the role and connecting your background to the employer’s needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start by requesting a free resume review. Upload your current resume, share your target role and Ramsey Resume will recommend the most suitable next step.",
  },
];

const relatedServices = [
  {
    title: "ATS Resume Writing",
    text: "For job seekers who want a clean, keyword-aligned resume structure suitable for online applications.",
    href: "/ats-resume-writing/",
    icon: ScanSearch,
  },
  {
    title: "Cover Letter Writing",
    text: "For applicants who need a tailored cover letter to support a specific role or career move.",
    href: "/cover-letter-writing/",
    icon: Mail,
  },
  {
    title: "LinkedIn Profile Optimisation",
    text: "For professionals who want their LinkedIn profile to align with their resume and career goals.",
    href: "/linkedin-profile-optimisation/",
    icon: Linkedin,
  },
  {
    title: "Government Resume Writing",
    text: "For public sector applicants who need targeted application support and role alignment.",
    href: "/government-resume-writing/",
    icon: Landmark,
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Resume Writing Services Australia",
  serviceType: "Professional Resume Writing",
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
    "Professional resume writing services for Australian job seekers, including ATS-aware resumes, career documents and application support.",
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
      name: "Resume Writing",
      item: `${siteConfig.url}/resume-writing/`,
    },
  ],
};

export default function ResumeWritingPage() {
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
            <span>Resume Writing</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-teal shadow-card">
                <MapPin aria-hidden="true" size={17} />
                Resume writer Perth. Australia-wide service.
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-navy md:text-5xl lg:text-6xl">
                Resume Writing Services Australia
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Your resume is often the first impression an employer has of you. Before an
                interview, before a phone call and before you have the chance to explain your
                experience in person, your resume needs to show who you are, what you can do and why
                you are worth shortlisting.
              </p>
              <p className="mt-4 max-w-2xl leading-8 text-muted">
                Ramsey Resume provides professional resume writing services for Australian job
                seekers who want a clearer, stronger and more competitive application. Based in
                Perth, Western Australia and supporting clients Australia-wide, we help transform
                outdated, generic or confusing resumes into polished career documents written for
                real employers, recruiters and modern applicant tracking systems.
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
                  "ATS-aware resume structure",
                  "Perth-based, Australia-wide support",
                  "Word and PDF delivery",
                  "Government, FIFO, graduate and professional applications",
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
                  Free Resume Review
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-white">
                  Find out what your resume needs before your next application.
                </h2>
              </div>
              <div className="space-y-4 p-6">
                {["Professional profile", "Key skills", "Career achievements", "ATS structure"].map(
                  (item) => (
                    <div className="rounded-lg border border-line bg-soft p-4" key={item}>
                      <div className="mb-2 h-3 w-1/2 rounded-full bg-brand/25" />
                      <div className="h-2 w-full rounded-full bg-line" />
                      <div className="mt-2 h-2 w-4/5 rounded-full bg-line" />
                      <span className="sr-only">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <TextSection
            eyebrow="Service overview"
            title="What is professional resume writing?"
            body={[
              "Professional resume writing is the process of turning your career history, skills, achievements and goals into a clear, targeted and employer-ready document. It is not simply formatting your old resume or replacing a few words with stronger verbs. A high-quality resume writing service looks at the role you want, the industry you are applying in, the expectations of Australian employers and the way recruiters scan applications.",
              "Many job seekers have valuable experience but struggle to communicate it. Their resume may be too long, too brief, too generic, too task-focused or too hard to scan. Some resumes use outdated layouts. Others look visually impressive but are not practical for online applications or applicant tracking systems. In a competitive Australian job market, this can mean strong candidates are overlooked before they reach the interview stage.",
              "Ramsey Resume helps job seekers build resumes that are structured, relevant and easy to understand. We focus on your target role, transferable skills, achievements, industry language and career direction. The aim is to create a resume that feels professional, reads naturally and gives employers a clear reason to contact you.",
            ]}
          />
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <SectionHeader
            eyebrow="Who it is for"
            title="Who this resume writing service is for"
            text="This service is designed for Australian job seekers who need a stronger, clearer and more strategic resume before applying for their next role."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <Card className="shadow-none" key={audience}>
                <CheckCircle aria-hidden="true" className="mb-4 text-teal" size={24} />
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
            title="How professional resume writing helps your application"
            text="A professional resume writer helps translate your background into clear, relevant and employer-ready content."
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">
                Why Ramsey Resume
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                Professional writing with Australian job market understanding
              </h2>
              <p className="mt-5 leading-8 text-muted">
                Choosing a professional resume writer requires trust. Your resume contains personal
                details, employment history, achievements, qualifications and future goals. Ramsey
                Resume treats that information carefully and turns it into a document you can use
                with confidence.
              </p>
              <p className="mt-4 leading-8 text-muted">
                The goal is not to create a generic CV writing Australia template that simply looks
                attractive. The goal is to create a resume that is clear, targeted, readable and
                useful for real job applications across Perth, WA and Australia.
              </p>
              <Button className="mt-7" href="/get-a-quote/">
                Start With a Free Review
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Personalised writing, not generic templates",
                "Australian employer and recruiter focus",
                "ATS-aware formatting where relevant",
                "Achievement-led content",
                "Confidential handling of career details",
                "Clear communication and revision support",
              ].map((item) => (
                <Card className="shadow-none" key={item}>
                  <ShieldCheck aria-hidden="true" className="mb-4 text-teal" size={26} />
                  <h3 className="font-display text-lg font-bold text-navy">{item}</h3>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Process"
            title="How the resume writing process works"
            text="The process is designed to be simple, guided and focused on your target role."
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
                What’s included in the resume writing service
              </h2>
              <p className="mt-5 leading-8 text-muted">
                Professional resume writing should provide more than formatting. Ramsey Resume
                focuses on structure, content, strategy and practical final files that are ready for
                job applications.
              </p>
              <p className="mt-4 leading-8 text-muted">
                Final documents should be easy to use and update. Word and PDF versions provide
                flexibility for online applications, recruiter requests and future tailoring.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {inclusions.map((item) => (
                <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-card" key={item}>
                  <CheckCircle aria-hidden="true" className="mt-0.5 shrink-0 text-teal" size={20} />
                  <span className="text-sm font-semibold leading-6 text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Industries"
            title="Resume help Australia-wide, across industries"
            text="Resume writing is adapted to the role, industry and employer expectations, whether you are applying locally in Perth or remotely across Australia."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

      <Section className="bg-soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Pricing preview</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                Resume writing pricing and package options
              </h2>
              <p className="mt-5 leading-8 text-muted">
                Resume writing pricing depends on your career level, current documents, target role,
                application requirements and turnaround time. Some clients need a focused resume
                update. Others need a complete rewrite or a full application package including a
                cover letter, LinkedIn profile or selection criteria.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/get-a-quote/">Request My Quote</Button>
                <Button href="/pricing/" variant="secondary">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Resume Essentials",
                  text: "For job seekers needing a professionally written or updated resume for general applications.",
                },
                {
                  title: "Professional Application Package",
                  text: "For applicants who need a resume and cover letter tailored to a specific role or industry.",
                },
                {
                  title: "Complete Career Document Support",
                  text: "For complex applications requiring multiple documents, specialist support or urgent deadlines.",
                },
              ].map((item) => (
                <Card className={item.title.includes("Professional") ? "border-teal" : ""} key={item.title}>
                  <BadgeCheck aria-hidden="true" className="mb-4 text-teal" size={28} />
                  <h3 className="font-display text-xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Before and after</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                How professional resume writing improves your application
              </h2>
              <p className="mt-5 leading-8 text-muted">
                A before-and-after example helps show the difference between a resume that lists
                experience and a resume that positions experience strategically. For privacy, all
                public samples should use fictional or anonymised details.
              </p>
              <Button className="mt-7" href="/get-a-quote/" variant="secondary">
                Review My Current Resume
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <ComparisonCard
                title="Before"
                lead="Responsible for customer service, administration, data entry, phone calls, emails and general office duties."
                text="This wording is too generic, does not show measurable value and gives employers little context about level of responsibility."
              />
              <ComparisonCard
                title="After"
                lead="Delivered high-volume administrative and customer support across a busy office environment, managing enquiries, maintaining accurate records and improving response consistency."
                text="This version gives clearer context, stronger professional language, better role relevance and easier scanning."
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-soft">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Trust proof</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
                What clients say
              </h2>
              <p className="mt-5 leading-8 text-muted">
                This section is reserved for genuine testimonials only. Do not publish fake reviews,
                fake star ratings, unsupported success rates or unverifiable statistics.
              </p>
              <Button className="mt-7" href="/reviews/" variant="secondary">
                Read Reviews
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Professional resume client",
                "Career change client",
                "Australian job seeker",
              ].map((label) => (
                <Card key={label}>
                  <div className="flex gap-1 text-gold" aria-label="Review placeholder">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star aria-hidden="true" fill="currentColor" key={index} size={16} />
                    ))}
                  </div>
                  <Quote aria-hidden="true" className="mt-5 text-brand" size={26} />
                  <p className="mt-4 text-sm leading-6 text-muted">
                    Placeholder for a verified testimonial. Replace only with genuine approved
                    client feedback before publishing as proof.
                  </p>
                  <p className="mt-4 text-sm font-bold text-navy">{label}</p>
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
            title="Frequently asked questions"
            text="Answers to common questions about professional resume writing, ATS resumes, CV writing Australia and getting started."
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

      <Section className="bg-soft">
        <Container>
          <SectionHeader
            eyebrow="Related services"
            title="Build a stronger complete application"
            text="Many job seekers combine resume writing with supporting documents for a clearer, more consistent application."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card className="transition hover:-translate-y-1 hover:border-brand" key={service.title}>
                  <Icon aria-hidden="true" className="mb-5 text-brand" size={30} />
                  <h3 className="font-display text-xl font-bold text-navy">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.text}</p>
                  <Link
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-teal-dark"
                    href={service.href}
                  >
                    Learn more
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-navy text-white">
        <Container className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-gold">Ready to improve your resume?</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-extrabold text-white md:text-5xl">
            Start with a free resume review before your next application.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
            If your current resume does not clearly show your value, now is the right time to
            improve it. A stronger resume can help you apply with more confidence and present
            yourself in a way that better matches Australian employer expectations.
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

function TextSection({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string[];
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-wide text-teal">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold text-navy md:text-4xl">
        {title}
      </h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-muted">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function ComparisonCard({
  title,
  lead,
  text,
}: {
  title: string;
  lead: string;
  text: string;
}) {
  return (
    <Card>
      <h3 className="font-display text-2xl font-bold text-navy">{title}</h3>
      <p className="mt-5 rounded-lg bg-soft p-4 text-sm font-semibold leading-6 text-ink">
        {lead}
      </p>
      <p className="mt-5 text-sm leading-6 text-muted">{text}</p>
    </Card>
  );
}
