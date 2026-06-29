import type { Metadata } from "next";
import {
  BadgeCheck,
  BriefcaseBusiness,
  FileCheck,
  GraduationCap,
  PenLine,
  SearchCheck,
  ShieldCheck,
  Target,
  Upload,
} from "lucide-react";
import { CommercialServicePage } from "@/components/sections/CommercialServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { ServiceFaq, ServicePageContent } from "@/types/service-page";

export const metadata: Metadata = createMetadata({
  title: "Graduate Resume Writing Australia | Entry Level Resume Writer",
  description:
    "Graduate resume writing for Australian students, graduates and early-career job seekers. Perth-based support for entry-level applications.",
  path: "/graduate-resume-writing/",
});

const faqs: ServiceFaq[] = [
  {
    question: "What should a graduate resume include?",
    answer:
      "A graduate resume can include education, placements, internships, projects, part-time work, volunteer experience, technical skills, achievements, licences, extracurricular involvement and transferable skills.",
  },
  {
    question: "Can you help if I have limited work experience?",
    answer:
      "Yes. Graduate resume writing focuses on transferable skills, study achievements, projects, placements and any experience that shows reliability, communication, problem solving or technical ability.",
  },
  {
    question: "Do graduate resumes need to be ATS-friendly?",
    answer:
      "Yes. Many graduate and entry-level applications are submitted online, so clean formatting, role keywords and clear headings are important.",
  },
  {
    question: "Can you write resumes for internships and graduate programs?",
    answer:
      "Yes. Ramsey Resume can support internship, vacation program, graduate program and entry-level job applications across Australian industries.",
  },
  {
    question: "Should I include part-time jobs?",
    answer:
      "Often yes. Part-time jobs can show customer service, teamwork, reliability, leadership, cash handling, time management and other transferable skills.",
  },
  {
    question: "Can you help with cover letters too?",
    answer:
      "Yes. Graduate resume writing can be paired with a tailored cover letter for a specific role, employer or graduate program.",
  },
  {
    question: "Do you help graduates in Perth?",
    answer:
      "Yes. Ramsey Resume is based in Perth, Western Australia and supports graduates across Australia.",
  },
  {
    question: "Can you guarantee I will get a graduate job?",
    answer:
      "No. Outcomes depend on role requirements, competition, eligibility and employer decisions. Professional writing can improve clarity and presentation, but cannot guarantee employment.",
  },
];

const content: ServicePageContent = {
  breadcrumb: "Graduate Resume Writing",
  badge: "Graduate resume writer Perth. Australia-wide support.",
  h1: "Graduate Resume Writing Australia",
  intro: [
    "Starting your career can be difficult when your experience is still developing. A graduate resume needs to show more than formal employment history. It should present your education, placements, projects, part-time work, skills and potential in a clear and employer-ready way.",
    "Ramsey Resume writes graduate resumes for Australian students, graduates and early-career job seekers applying for internships, graduate programs, entry-level roles and first professional opportunities. Based in Perth and supporting clients Australia-wide, we help turn limited experience into a clearer career story.",
  ],
  heroHighlights: [
    "Graduate and entry-level resume writing",
    "Projects, placements and part-time work positioned clearly",
    "ATS-friendly structure for online applications",
    "Optional cover letter support",
  ],
  heroCard: {
    eyebrow: "Graduate Application Support",
    title: "Show your potential clearly, even with limited experience.",
    items: ["Education", "Projects", "Skills", "Experience"],
  },
  overview: {
    eyebrow: "Service overview",
    title: "Graduate resumes need to make early experience count",
    body: [
      "Many graduates underestimate the value of their early experience. Study projects, placements, internships, volunteer work, customer service jobs and extracurricular activities can all show useful capabilities when written properly.",
      "The challenge is deciding what to include, how to describe it and how to connect it to the role. A graduate resume should not look empty, but it also should not be padded with irrelevant content. It needs to be focused, credible and easy for employers to scan.",
      "Ramsey Resume helps graduate job seekers present education, skills and early achievements in a professional Australian resume format. The result is a clearer document that supports entry-level applications and can be adapted as your career grows.",
    ],
  },
  audiences: {
    eyebrow: "Who it is for",
    title: "Who this graduate resume service is for",
    text: "This service is designed for early-career applicants who need to present limited or developing experience more effectively.",
    items: [
      "University students applying for internships or vacation programs",
      "Recent graduates applying for graduate programs",
      "TAFE and vocational graduates entering the workforce",
      "International graduates adapting resumes for Australia",
      "Career starters applying for entry-level roles",
      "Graduates with part-time or casual work experience",
      "Students with projects, placements or volunteer experience",
      "Early-career professionals needing a more polished resume",
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "How graduate resume writing helps early-career applicants",
    text: "A professional graduate resume helps employers understand your potential and relevance faster.",
    items: [
      {
        title: "Clearer career direction",
        text: "Your resume is shaped around the type of role, industry or graduate program you want to target.",
        icon: Target,
      },
      {
        title: "Better use of limited experience",
        text: "Placements, projects, part-time work and study achievements are written in a way that shows transferable value.",
        icon: GraduationCap,
      },
      {
        title: "ATS-friendly formatting",
        text: "Clean headings, role keywords and practical formatting support online applications.",
        icon: SearchCheck,
      },
      {
        title: "Professional confidence",
        text: "A polished resume can help you apply with a stronger sense of clarity and readiness.",
        icon: ShieldCheck,
      },
      {
        title: "Employer-ready language",
        text: "The content is written in a professional tone while staying realistic for early-career experience.",
        icon: PenLine,
      },
      {
        title: "Future-ready structure",
        text: "The resume is structured so it can grow as you gain more professional experience.",
        icon: FileCheck,
      },
    ],
  },
  inclusions: {
    eyebrow: "Inclusions",
    title: "What is included in graduate resume writing",
    text: "The service focuses on building a practical resume from education, early experience and transferable skills.",
    items: [
      "Review of education, work experience and target roles",
      "Graduate profile or career summary",
      "Education and academic achievement formatting",
      "Projects, placements and internships positioning",
      "Part-time, casual and volunteer work rewriting",
      "Transferable skills and technical skills section",
      "ATS-friendly structure and headings",
      "Australian spelling and graduate application tone",
      "Editable Word document and PDF version",
      "Optional cover letter alignment",
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How the graduate resume writing process works",
    text: "The process is designed to uncover useful experience and shape it around the opportunities you want.",
    steps: [
      {
        title: "Share your background",
        text: "Send your current resume, study details, work history, projects, placements and target roles.",
        icon: Upload,
      },
      {
        title: "Identify useful evidence",
        text: "We review your experience to find examples that show skills, reliability, learning and contribution.",
        icon: SearchCheck,
      },
      {
        title: "Clarify target direction",
        text: "The resume is planned around your preferred industry, role type or graduate program.",
        icon: Target,
      },
      {
        title: "Write the resume",
        text: "Your resume is written with clear sections, professional wording and early-career positioning.",
        icon: PenLine,
      },
      {
        title: "Review and refine",
        text: "You review the draft for accuracy and provide corrections or extra details where needed.",
        icon: FileCheck,
      },
      {
        title: "Final delivery",
        text: "Receive final files ready for online applications, email submissions and future updates.",
        icon: BriefcaseBusiness,
      },
    ],
  },
  extraSection: {
    eyebrow: "Graduate content",
    title: "Experience we can help you position",
    text: "Graduate resumes often become stronger when overlooked experience is written clearly.",
    items: [
      {
        title: "Study projects",
        text: "Relevant coursework, capstone projects, research, reports, presentations or technical assignments.",
        icon: BadgeCheck,
      },
      {
        title: "Placements",
        text: "Clinical, teaching, engineering, business, IT or community placements with practical outcomes.",
        icon: BadgeCheck,
      },
      {
        title: "Part-time work",
        text: "Customer service, hospitality, retail, administration, tutoring or casual roles that show transferable skills.",
        icon: BadgeCheck,
      },
      {
        title: "Volunteering",
        text: "Community involvement, clubs, societies, leadership roles or unpaid experience relevant to employability.",
        icon: BadgeCheck,
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing preview",
    title: "Graduate resume pricing depends on your starting point",
    text: "Pricing depends on whether you have an existing resume, the amount of information available and whether you need a cover letter for a specific role or graduate program.",
    cardTitle: "Start with a free resume review",
    cardText:
      "Send your current resume or study and work details. Ramsey Resume can recommend whether you need a full graduate resume or a lighter refresh.",
  },
  faqs,
  relatedServices: [
    {
      title: "Cover Letter Writing",
      text: "Create a targeted cover letter for internships, graduate programs and entry-level roles.",
      href: "/cover-letter-writing/",
    },
    {
      title: "ATS Resume Writing",
      text: "Build a clean resume for graduate portals and online application systems.",
      href: "/ats-resume-writing/",
    },
    {
      title: "Resume Writing",
      text: "Professional resume writing for Australian job seekers at all career levels.",
      href: "/resume-writing/",
    },
    {
      title: "LinkedIn Profile Optimisation",
      text: "Build an early professional LinkedIn profile that supports your resume.",
      href: "/linkedin-profile-optimisation/",
    },
  ],
  finalCta: {
    eyebrow: "Graduate resume review",
    title: "Need a graduate resume that shows your potential clearly?",
    text: "Send your current resume, study details and target role. Ramsey Resume can recommend the best next step for your graduate application.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Graduate Resume Writing Australia",
  serviceType: "Graduate Resume Writing",
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
    "Graduate resume writing for Australian students, graduates and early-career job seekers, including internships, graduate programs and entry-level applications.",
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
      name: "Resume Services",
      item: `${siteConfig.url}/resume-writing/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Graduate Resume Writing",
      item: `${siteConfig.url}/graduate-resume-writing/`,
    },
  ],
};

export default function GraduateResumeWritingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CommercialServicePage content={content} />
    </>
  );
}
