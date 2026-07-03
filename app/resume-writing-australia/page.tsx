import type { Metadata } from "next";
import {
  BadgeCheck,
  BriefcaseBusiness,
  FileCheck,
  Globe2,
  PenLine,
  SearchCheck,
  ShieldCheck,
  Target,
  Upload,
  UserCheck,
} from "lucide-react";
import { CommercialServicePage } from "@/components/sections/CommercialServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { ServiceFaq, ServicePageContent } from "@/types/service-page";

export const metadata: Metadata = createMetadata({
  title: "Resume Writing Australia | Ramsey Resume",
  description:
    "Professional resume writing services for Australian job seekers. ATS-friendly resumes, cover letters, LinkedIn profiles and application support Australia-wide.",
  path: "/resume-writing-australia/",
});

const faqs: ServiceFaq[] = [
  {
    question: "Do you provide resume writing services Australia-wide?",
    answer:
      "Yes. Ramsey Resume supports Australian job seekers across all states and territories through an online process using email, phone and WhatsApp.",
  },
  {
    question: "What industries do you support?",
    answer:
      "Ramsey Resume supports government, healthcare, FIFO, mining, engineering, IT, accounting, education, trades, project management, administration, graduate and executive applications.",
  },
  {
    question: "Are the resumes ATS-friendly?",
    answer:
      "Yes. Resumes can be structured with clean headings, practical formatting and relevant keywords for online applications and recruiter systems.",
  },
  {
    question: "Can you help with cover letters and LinkedIn profiles?",
    answer:
      "Yes. Resume writing can be paired with cover letter writing, LinkedIn profile optimisation and selection criteria writing where required.",
  },
  {
    question: "Do you write CVs for Australia?",
    answer:
      "Yes. In Australia, resume and CV are often used interchangeably for many job applications, although academic or research CVs may require a different level of detail.",
  },
  {
    question: "Can you help skilled migrants?",
    answer:
      "Yes. Ramsey Resume can help skilled migrants adapt overseas experience for Australian employer expectations, terminology and resume structure.",
  },
  {
    question: "Can you guarantee interviews?",
    answer:
      "No. Interviews depend on role requirements, market competition, experience and employer decisions. Professional writing can improve clarity and positioning, but cannot guarantee interviews.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start with a free resume review by sending your current resume and target role through the quote or review form.",
  },
];

const content: ServicePageContent = {
  breadcrumb: "Resume Writing Australia",
  badge: "Resume writing service Australia. Perth-based, national support.",
  h1: "Resume Writing Australia",
  intro: [
    "Ramsey Resume provides professional resume writing services for Australian job seekers who need clearer positioning, stronger achievements, ATS-friendly structure and practical application documents. Whether you are applying locally, interstate, remotely or nationally, your resume needs to communicate relevance quickly.",
    "Based in Perth, Western Australia and supporting clients Australia-wide, we help professionals, graduates, skilled migrants, FIFO workers, government applicants, executives and career changers build resumes that are clear, targeted and suitable for modern Australian applications.",
  ],
  heroHighlights: [
    "Australia-wide resume writing service",
    "ATS-friendly structure and keywords",
    "Cover letter and LinkedIn support",
    "Government, FIFO, graduate and executive applications",
  ],
  heroCard: {
    eyebrow: "National Resume Support",
    title: "Build a stronger application for Australian employers.",
    items: ["Resume", "ATS", "Cover letter", "LinkedIn"],
  },
  overview: {
    eyebrow: "National service",
    title: "Professional resume writing for Australian job seekers",
    body: [
      "Australian job applications are competitive, and many employers expect resumes to be clear, targeted and easy to scan. A resume should explain what you do, where you add value and why your experience is relevant to the role. It should also work practically for online applications and recruiter systems.",
      "Many resumes fail because they are too generic, too focused on duties, too visually complex or not aligned with the role. Others include useful experience but do not show achievements, transferable skills or industry language clearly enough.",
      "Ramsey Resume helps Australian job seekers turn career history into stronger application documents. The writing is human-first, professional and practical, with attention to ATS-aware structure, Australian terminology and role-specific positioning.",
    ],
  },
  audiences: {
    eyebrow: "Who it is for",
    title: "Who this Australia resume writing service is for",
    text: "This service supports Australian job seekers across industries, locations and career stages.",
    items: [
      "Professionals applying for new roles across Australia",
      "Government and public sector applicants",
      "Healthcare, nursing and community services workers",
      "Engineers, IT professionals, accountants and project managers",
      "FIFO, mining, trades and technical applicants",
      "Graduates and early-career job seekers",
      "Skilled migrants adapting experience for Australia",
      "Executives, managers and senior professionals",
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "How professional resume writing helps Australian applicants",
    text: "A stronger resume helps employers understand your relevance, achievements and career direction faster.",
    items: [
      {
        title: "Clear national positioning",
        text: "Your resume is shaped for Australian employer expectations and the roles you want to target.",
        icon: Globe2,
      },
      {
        title: "Stronger achievements",
        text: "Work history is rewritten to show contribution, outcomes and value rather than only duties.",
        icon: BadgeCheck,
      },
      {
        title: "ATS-friendly structure",
        text: "Clean formatting, headings and relevant keywords support online applications.",
        icon: SearchCheck,
      },
      {
        title: "Industry alignment",
        text: "Content can be tailored around government, healthcare, FIFO, IT, engineering, accounting and other sectors.",
        icon: Target,
      },
      {
        title: "Professional confidence",
        text: "A polished resume helps you apply with a clearer message and stronger application foundation.",
        icon: ShieldCheck,
      },
      {
        title: "Complete application support",
        text: "Resume writing can be aligned with cover letters, LinkedIn profiles and selection criteria.",
        icon: FileCheck,
      },
    ],
  },
  inclusions: {
    eyebrow: "Inclusions",
    title: "What is included in resume writing Australia-wide",
    text: "The service focuses on practical, polished and targeted documents for Australian job applications.",
    items: [
      "Review of current resume and target roles",
      "Professional resume writing or rewriting",
      "ATS-aware structure and formatting",
      "Professional profile and key skills section",
      "Employment history rewriting with achievements",
      "Education, licences and certifications formatting",
      "Australian spelling and terminology",
      "Industry and role keyword alignment",
      "Editable Word document and PDF version",
      "Optional cover letter, LinkedIn or selection criteria support",
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How the Australia-wide resume writing process works",
    text: "The process is remote-friendly, structured and focused on your target role.",
    steps: [
      {
        title: "Send your current resume",
        text: "Share your resume, LinkedIn profile, career notes or target job advertisement.",
        icon: Upload,
      },
      {
        title: "Review role alignment",
        text: "We assess your current document, goals, industry language, keywords and gaps.",
        icon: SearchCheck,
      },
      {
        title: "Plan the resume strategy",
        text: "Your resume is planned around target roles, strengths, achievements and application requirements.",
        icon: Target,
      },
      {
        title: "Write the resume",
        text: "The resume is rewritten with clear structure, professional wording and role-relevant detail.",
        icon: PenLine,
      },
      {
        title: "Review and refine",
        text: "You review the draft for accuracy before final documents are prepared.",
        icon: FileCheck,
      },
      {
        title: "Final delivery",
        text: "Receive final Word and PDF files ready for online applications and future updates.",
        icon: BriefcaseBusiness,
      },
    ],
  },
  extraSection: {
    eyebrow: "Application types",
    title: "Australian application needs supported",
    text: "Resume strategy changes depending on your career stage, industry and application type.",
    items: [
      {
        title: "ATS applications",
        text: "Clean resumes for online portals, job boards and recruitment systems.",
        icon: BadgeCheck,
      },
      {
        title: "Government applications",
        text: "Public sector resumes aligned with role requirements, cover letters and selection criteria.",
        icon: ShieldCheck,
      },
      {
        title: "Career changes",
        text: "Transferable skills and positioning for applicants moving into a new industry or role.",
        icon: UserCheck,
      },
      {
        title: "Senior roles",
        text: "Executive and management resumes with stronger leadership and impact positioning.",
        icon: BadgeCheck,
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing preview",
    title: "Resume writing pricing depends on your career level",
    text: "Pricing depends on your current resume, career level, target role and whether you need additional documents such as a cover letter, LinkedIn profile or selection criteria.",
    cardTitle: "Start with a free resume review",
    cardText:
      "Send your current resume and target role. Ramsey Resume can recommend the best option for your Australian application needs.",
  },
  faqs,
  relatedServices: [
    {
      title: "Resume Writing",
      text: "Core professional resume writing service for Australian job seekers.",
      href: "/resume-writing/",
    },
    {
      title: "ATS Resume Writing",
      text: "Clean, keyword-aligned resumes for online application systems.",
      href: "/ats-resume-writing/",
    },
    {
      title: "Resume Writer Perth",
      text: "Local Perth resume writing support from a WA-based service.",
      href: "/resume-writer-perth/",
    },
    {
      title: "Resume Writer Western Australia",
      text: "Resume support for Perth, regional WA, FIFO and remote applicants.",
      href: "/resume-writer-western-australia/",
    },
  ],
  finalCta: {
    eyebrow: "Free resume review",
    title: "Need a stronger resume for Australian job applications?",
    text: "Send your current resume and target role. Ramsey Resume can review your document and recommend the strongest next step.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Resume Writing Australia",
  serviceType: "Resume Writing",
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
  areaServed: [{ "@type": "Country", name: "Australia" }],
  description:
    "Professional resume writing service for Australian job seekers, including ATS resumes, cover letters, LinkedIn profiles and application support.",
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
      name: "Resume Writing Australia",
      item: `${siteConfig.url}/resume-writing-australia/`,
    },
  ],
};

export default function ResumeWritingAustraliaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CommercialServicePage content={content} />
    </>
  );
}
