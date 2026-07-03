import type { Metadata } from "next";
import {
  BadgeCheck,
  BriefcaseBusiness,
  FileCheck,
  MapPin,
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
  title: "Resume Writer Perth, WA | Ramsey Resume",
  description:
    "Perth resume writer helping WA job seekers with professional resumes, ATS resumes, cover letters, LinkedIn profiles and government applications.",
  path: "/resume-writer-perth/",
});

const faqs: ServiceFaq[] = [
  {
    question: "Do you provide resume writing in Perth?",
    answer:
      "Yes. Ramsey Resume is based in Perth, Western Australia and supports Perth job seekers with resumes, cover letters, LinkedIn profiles, selection criteria and application documents.",
  },
  {
    question: "Can you help Perth job seekers apply interstate or nationally?",
    answer:
      "Yes. Many Perth clients apply for roles across WA and Australia. Resume content can be tailored for Perth, remote, interstate, FIFO, government and national opportunities.",
  },
  {
    question: "Do I need to meet in person?",
    answer:
      "No. The process can be completed online using email, phone and WhatsApp. This keeps the service practical for busy professionals and FIFO applicants.",
  },
  {
    question: "Can you help with WA Government applications?",
    answer:
      "Yes. Ramsey Resume supports WA Government, local government and broader public sector resumes, cover letters and selection criteria responses.",
  },
  {
    question: "Can you make my Perth resume ATS-friendly?",
    answer:
      "Yes. Resumes can be structured with clear headings, practical formatting and relevant keywords for online job applications and recruitment systems.",
  },
  {
    question: "Which industries do you help in Perth?",
    answer:
      "Ramsey Resume supports Perth and WA job seekers across government, healthcare, FIFO, mining, resources, engineering, IT, accounting, education, trades, administration and professional services.",
  },
  {
    question: "Can you guarantee interviews?",
    answer:
      "No. Interviews depend on experience, role requirements, competition and employer decisions. Professional resume writing can improve clarity and presentation, but cannot guarantee interviews.",
  },
  {
    question: "How do I start with a Perth resume writer?",
    answer:
      "Start by sending your current resume and target role through the free resume review or quote form. Ramsey Resume will recommend the most suitable next step.",
  },
];

const content: ServicePageContent = {
  breadcrumb: "Resume Writer Perth",
  badge: "Perth resume writer. WA-based and Australia-wide support.",
  h1: "Resume Writer Perth",
  intro: [
    "Looking for a professional resume writer in Perth who understands Australian job applications, WA industries and the practical realities of online recruitment? Ramsey Resume helps Perth job seekers build clearer, stronger and more targeted resumes for local, interstate and Australia-wide opportunities.",
    "Based in Perth, Western Australia, we support professionals, graduates, government applicants, FIFO workers, skilled migrants and career changers with resume writing, ATS resume writing, cover letters, LinkedIn profiles and selection criteria.",
  ],
  heroHighlights: [
    "Perth-based resume writing support",
    "ATS-friendly resumes for online applications",
    "Government, FIFO and professional applications",
    "Free resume review available",
  ],
  heroCard: {
    eyebrow: "Perth Resume Review",
    title: "Get local WA-focused resume support without needing an in-person meeting.",
    items: ["Resume", "ATS", "Cover letter", "LinkedIn"],
  },
  overview: {
    eyebrow: "Local resume support",
    title: "Professional resume writing for Perth job seekers",
    body: [
      "Perth has a diverse job market across government, healthcare, resources, engineering, construction, education, IT, accounting, trades, administration and professional services. A strong resume needs to reflect the role you want and the language employers are likely to expect.",
      "Many job seekers have useful experience but present it in a way that is too generic, too task-focused or too difficult to scan. Others use outdated formatting or visual templates that do not work well for online applications. A professional resume writer can help turn your background into a clearer and more targeted document.",
      "Ramsey Resume provides Perth resume writing support with a focus on clear positioning, achievement-led content, ATS-aware structure and practical application documents that can be used for local, WA and national opportunities.",
    ],
  },
  audiences: {
    eyebrow: "Who it is for",
    title: "Who this Perth resume writing service is for",
    text: "This service supports Perth and WA job seekers across career levels, industries and application types.",
    items: [
      "Perth professionals applying for new roles",
      "FIFO and mining applicants based in WA",
      "WA Government and local government applicants",
      "Healthcare, nursing and aged care workers",
      "Engineers, IT professionals and project managers",
      "Accountants, administrators and professional services applicants",
      "Graduates and early-career job seekers",
      "Skilled migrants adapting resumes for Australian employers",
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "How a Perth resume writer can help",
    text: "Local resume support can help you present your experience more clearly for WA and Australian employers.",
    items: [
      {
        title: "Local job market relevance",
        text: "Your resume can be aligned with Perth, WA and Australia-wide job application expectations.",
        icon: MapPin,
      },
      {
        title: "Clearer career positioning",
        text: "The resume is structured around your target role, industry and value to employers.",
        icon: Target,
      },
      {
        title: "ATS-friendly structure",
        text: "Clean formatting, clear headings and relevant keywords support online applications.",
        icon: SearchCheck,
      },
      {
        title: "Achievement-focused content",
        text: "Your work history is written to show contribution and outcomes, not just duties.",
        icon: BadgeCheck,
      },
      {
        title: "Application consistency",
        text: "Resume, cover letter and LinkedIn profile content can support the same career message.",
        icon: FileCheck,
      },
      {
        title: "Practical remote process",
        text: "The process can be completed by email, phone and WhatsApp for convenience.",
        icon: ShieldCheck,
      },
    ],
  },
  inclusions: {
    eyebrow: "Inclusions",
    title: "What is included in Perth resume writing support",
    text: "The service focuses on practical, polished and targeted documents for real job applications.",
    items: [
      "Review of current resume and target roles",
      "Professional resume writing or rewriting",
      "ATS-aware structure and formatting",
      "Career summary and key skills development",
      "Employment history rewriting",
      "Achievement and role alignment",
      "Australian spelling and terminology",
      "Editable Word document and PDF version",
      "Optional cover letter and LinkedIn support",
      "Support for Perth, WA and Australia-wide applications",
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How the Perth resume writing process works",
    text: "The process is simple, remote-friendly and focused on your target role.",
    steps: [
      {
        title: "Send your resume",
        text: "Send your current resume, career notes or LinkedIn profile with your target role or industry.",
        icon: Upload,
      },
      {
        title: "Review the target",
        text: "We review your goals, current document, job advertisements and application priorities.",
        icon: SearchCheck,
      },
      {
        title: "Plan the resume",
        text: "Your resume is planned around career positioning, keywords, achievements and structure.",
        icon: Target,
      },
      {
        title: "Write the document",
        text: "The resume is rewritten in a professional Australian tone with practical formatting.",
        icon: PenLine,
      },
      {
        title: "Review and refine",
        text: "You review the draft and confirm accuracy before final files are prepared.",
        icon: FileCheck,
      },
      {
        title: "Final delivery",
        text: "Receive final resume files suitable for online applications, recruiters and direct submissions.",
        icon: BriefcaseBusiness,
      },
    ],
  },
  extraSection: {
    eyebrow: "Perth industries",
    title: "Perth and WA industries supported",
    text: "Ramsey Resume supports job seekers across Perth’s major employment sectors.",
    items: [
      {
        title: "Government",
        text: "WA Government, local government, public sector and structured applications.",
        icon: BadgeCheck,
      },
      {
        title: "Resources",
        text: "FIFO, mining, trades, shutdown, civil, construction and site-based roles.",
        icon: BadgeCheck,
      },
      {
        title: "Professional",
        text: "Accounting, administration, IT, engineering, project management and business services.",
        icon: BadgeCheck,
      },
      {
        title: "Healthcare",
        text: "Nursing, aged care, allied health, community services and healthcare administration.",
        icon: BadgeCheck,
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing preview",
    title: "Resume writing pricing depends on your career level and needs",
    text: "Pricing depends on your current resume, target role, career level and whether you need additional documents such as a cover letter, selection criteria or LinkedIn profile.",
    cardTitle: "Start with a free resume review",
    cardText:
      "Send your current resume and target role. Ramsey Resume can recommend the most suitable resume writing package for your Perth or WA application.",
  },
  faqs,
  relatedServices: [
    {
      title: "Resume Writing",
      text: "Professional resume writing for Australian job seekers across industries.",
      href: "/resume-writing/",
    },
    {
      title: "FIFO Resume Writing",
      text: "Resume support for WA mining, resources and site-based roles.",
      href: "/fifo-resume-writing/",
    },
    {
      title: "Government Resume Writing",
      text: "Targeted resume support for WA Government and public sector applications.",
      href: "/government-resume-writing/",
    },
    {
      title: "ATS Resume Writing",
      text: "ATS-friendly resume structure for online applications and recruitment systems.",
      href: "/ats-resume-writing/",
    },
  ],
  finalCta: {
    eyebrow: "Free resume review",
    title: "Need a Perth resume writer for your next application?",
    text: "Send your current resume and target role. Ramsey Resume can review your document and recommend the strongest next step.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Resume Writer Perth",
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
  areaServed: [
    { "@type": "City", name: "Perth" },
    { "@type": "State", name: "Western Australia" },
    { "@type": "Country", name: "Australia" },
  ],
  description:
    "Perth resume writing service for Western Australian job seekers, including ATS resumes, cover letters, LinkedIn profiles and government applications.",
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
      name: "Locations",
      item: `${siteConfig.url}/resume-writer-perth/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Resume Writer Perth",
      item: `${siteConfig.url}/resume-writer-perth/`,
    },
  ],
};

export default function ResumeWriterPerthPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CommercialServicePage content={content} />
    </>
  );
}
