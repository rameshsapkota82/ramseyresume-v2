import type { Metadata } from "next";
import {
  BadgeCheck,
  BriefcaseBusiness,
  FileCheck,
  HardHat,
  PenLine,
  SearchCheck,
  ShieldCheck,
  Target,
  Truck,
  Upload,
  Wrench,
} from "lucide-react";
import { CommercialServicePage } from "@/components/sections/CommercialServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { ServiceFaq, ServicePageContent } from "@/types/service-page";

export const metadata: Metadata = createMetadata({
  title: "FIFO Resume Writing Australia | Ramsey Resume",
  description:
    "FIFO resume writing for WA mining, resources, shutdown, trades and site-based roles. Perth-based support for Australian FIFO and mining applicants nationwide.",
  path: "/fifo-resume-writing/",
});

const faqs: ServiceFaq[] = [
  {
    question: "What should a FIFO resume include?",
    answer:
      "A FIFO resume should clearly show site experience, tickets, licences, machinery, safety awareness, rosters, shutdown exposure, trade qualifications, inductions and role-relevant achievements.",
  },
  {
    question: "Can you help if I am trying to get my first FIFO role?",
    answer:
      "Yes. If you do not have FIFO experience yet, the resume can focus on transferable skills such as safety, reliability, physical work, shift work, equipment, trades, labouring, logistics or remote work readiness.",
  },
  {
    question: "Do FIFO resumes need to be ATS-friendly?",
    answer:
      "Yes. Many mining and resources employers use online application systems, so clean formatting, clear headings, licences and relevant keywords are important.",
  },
  {
    question: "Can you write mining and shutdown resumes?",
    answer:
      "Yes. Ramsey Resume supports FIFO, mining, resources, shutdown, trades, civil, construction, logistics and site-based applications.",
  },
  {
    question: "Should I list all tickets and licences?",
    answer:
      "Relevant tickets, licences, inductions and certifications should usually be easy to find. The final structure depends on the role and how current each item is.",
  },
  {
    question: "Do you write FIFO resumes from Perth?",
    answer:
      "Yes. Ramsey Resume is based in Perth, Western Australia and supports FIFO applicants across WA and Australia.",
  },
  {
    question: "Can you guarantee a FIFO job?",
    answer:
      "No. Hiring depends on experience, tickets, medicals, availability, employer needs and competition. A professional resume can improve clarity and presentation, but cannot guarantee employment.",
  },
  {
    question: "Can you help with cover letters too?",
    answer:
      "Yes. A FIFO resume can be paired with a targeted cover letter for a specific mining, shutdown or site-based role.",
  },
];

const content: ServicePageContent = {
  breadcrumb: "FIFO Resume Writing",
  badge: "FIFO resume writer Perth. WA mining and Australia-wide support.",
  h1: "FIFO Resume Writing Australia",
  intro: [
    "FIFO, mining and resources applications need a resume that is practical, direct and easy for recruiters to scan. Employers want to quickly see your site experience, tickets, licences, safety awareness, rosters, machinery, trade background and reliability.",
    "Ramsey Resume writes FIFO resumes for Western Australian and Australian job seekers applying for mining, shutdown, trades, civil, construction, logistics and site-based roles. Based in Perth, we understand the importance of clear, role-specific application documents for competitive resources opportunities.",
  ],
  heroHighlights: [
    "FIFO, mining and shutdown resume support",
    "Tickets, licences and site experience structured clearly",
    "ATS-friendly format for employer portals",
    "Perth-based, Australia-wide service",
  ],
  heroCard: {
    eyebrow: "Site-Ready Resume Support",
    title: "Make your FIFO experience, tickets and reliability easy to find.",
    items: ["Tickets", "Safety", "Rosters", "Site experience"],
  },
  overview: {
    eyebrow: "Service overview",
    title: "FIFO resumes need clear evidence of site readiness",
    body: [
      "A FIFO resume is different from a general resume because recruiters often need to assess practical suitability quickly. They may be looking for specific tickets, trade qualifications, machinery, site exposure, roster availability, shutdown experience, safety systems, inductions or remote work readiness.",
      "Many applicants have useful experience but bury the important details too deep in the resume. Others use generic templates that do not show site-based capability clearly. This can weaken applications, especially when recruiters are reviewing large numbers of candidates.",
      "Ramsey Resume helps structure your FIFO resume so the most relevant information is easier to find. The writing focuses on practical skills, safety awareness, work history, licences, tickets and achievements that support your target role.",
    ],
  },
  audiences: {
    eyebrow: "Who it is for",
    title: "Who this FIFO resume service is for",
    text: "This service is designed for applicants targeting mining, resources, shutdown and site-based work.",
    items: [
      "FIFO workers applying for new mining or resources roles",
      "Tradespeople targeting site-based opportunities",
      "Shutdown and maintenance workers",
      "Civil, construction and infrastructure applicants",
      "Logistics, transport and warehouse workers moving into FIFO",
      "Entry-level applicants trying to secure their first FIFO role",
      "Operators, labourers, supervisors and technical workers",
      "WA applicants applying across Perth, Pilbara, Goldfields and regional sites",
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "How FIFO resume writing improves your application",
    text: "A strong FIFO resume helps recruiters see practical suitability faster.",
    items: [
      {
        title: "Clear tickets and licences",
        text: "Relevant tickets, licences, inductions and certifications are structured so they are easy to find.",
        icon: BadgeCheck,
      },
      {
        title: "Site experience focus",
        text: "FIFO, shutdown, roster, remote work and site-based details are highlighted where relevant.",
        icon: HardHat,
      },
      {
        title: "Role-specific keywords",
        text: "The resume uses practical mining, trades, safety and resources language aligned with the target role.",
        icon: SearchCheck,
      },
      {
        title: "Safety and reliability",
        text: "Content can reflect safety awareness, compliance, punctuality, teamwork and ability to work in demanding environments.",
        icon: ShieldCheck,
      },
      {
        title: "Transferable experience",
        text: "If you are new to FIFO, relevant experience from trades, labouring, logistics, construction or shift work can be positioned clearly.",
        icon: Wrench,
      },
      {
        title: "ATS-aware structure",
        text: "Clean formatting supports employer portals, job boards and recruitment systems.",
        icon: FileCheck,
      },
    ],
  },
  inclusions: {
    eyebrow: "Inclusions",
    title: "What is included in FIFO resume writing",
    text: "The service focuses on practical resume content for mining, resources and site-based applications.",
    items: [
      "Review of current resume and target FIFO roles",
      "Professional summary tailored to mining or site-based work",
      "Tickets, licences and certifications formatting",
      "FIFO, roster, shutdown and site experience positioning",
      "Employment history rewritten with practical achievements",
      "Safety, compliance and teamwork language where relevant",
      "ATS-friendly structure and headings",
      "Australian spelling and industry terminology",
      "Editable Word document and PDF version",
      "Optional cover letter alignment",
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How the FIFO resume writing process works",
    text: "The process is designed to identify practical site-ready details and make them easier for recruiters to assess.",
    steps: [
      {
        title: "Send your current resume",
        text: "Provide your current resume, tickets, licences, target role and any job advertisements you are applying for.",
        icon: Upload,
      },
      {
        title: "Review requirements",
        text: "We assess role requirements, industry keywords, tickets, roster expectations and relevant site experience.",
        icon: SearchCheck,
      },
      {
        title: "Plan resume structure",
        text: "The resume is structured so tickets, site experience, skills and work history are easy to scan.",
        icon: Target,
      },
      {
        title: "Write the resume",
        text: "Your resume is rewritten with practical language, clear formatting and role-relevant detail.",
        icon: PenLine,
      },
      {
        title: "Review and refine",
        text: "You review the draft for accuracy, including tickets, dates, employers, sites and role details.",
        icon: FileCheck,
      },
      {
        title: "Final delivery",
        text: "Receive final files suitable for online applications, recruiters and employer portals.",
        icon: BriefcaseBusiness,
      },
    ],
  },
  extraSection: {
    eyebrow: "FIFO focus areas",
    title: "Details FIFO recruiters often look for",
    text: "The right details depend on the role, but these areas often matter in mining and resources applications.",
    items: [
      {
        title: "Tickets and licences",
        text: "White Card, forklift, working at heights, confined spaces, HR licence, trade licences or role-specific tickets.",
        icon: BadgeCheck,
      },
      {
        title: "Site and roster exposure",
        text: "FIFO rosters, shutdowns, remote sites, camp environments, long shifts or physically demanding work.",
        icon: HardHat,
      },
      {
        title: "Equipment and tools",
        text: "Machinery, vehicles, systems, tools, plant, maintenance or technical equipment relevant to the role.",
        icon: Truck,
      },
      {
        title: "Safety culture",
        text: "JSA, SWMS, PPE, hazard reporting, compliance, incident prevention and safe work practices.",
        icon: ShieldCheck,
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing preview",
    title: "FIFO resume pricing depends on experience and target roles",
    text: "Pricing depends on your current resume, tickets, work history and whether you are targeting entry-level FIFO, trades, shutdown, supervisor or technical roles.",
    cardTitle: "Start with a free FIFO resume review",
    cardText:
      "Send your current resume, tickets and target role. Ramsey Resume can recommend whether you need a full rewrite, targeted update or cover letter package.",
  },
  faqs,
  relatedServices: [
    {
      title: "Resume Writing",
      text: "Professional resume writing for Australian job seekers across industries.",
      href: "/resume-writing/",
    },
    {
      title: "ATS Resume Writing",
      text: "Clean resume formatting for online employer portals and recruitment systems.",
      href: "/ats-resume-writing/",
    },
    {
      title: "Cover Letter Writing",
      text: "Targeted cover letters for mining, shutdown and site-based applications.",
      href: "/cover-letter-writing/",
    },
    {
      title: "Resume Writer Perth",
      text: "Local Perth resume writing support for WA job seekers and FIFO applicants.",
      href: "/resume-writer-perth/",
    },
    {
      title: "Resume Writer Western Australia",
      text: "Resume writing support across WA, including regional and remote FIFO applicants.",
      href: "/resume-writer-western-australia/",
    },
  ],
  finalCta: {
    eyebrow: "FIFO resume review",
    title: "Need a FIFO resume that shows your site readiness clearly?",
    text: "Send your current resume, tickets and target role. Ramsey Resume can review your documents and recommend the strongest next step.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "FIFO Resume Writing Australia",
  serviceType: "FIFO Resume Writing",
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
    "FIFO resume writing service for Western Australian and Australian mining, resources, shutdown, trades and site-based job seekers.",
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
      name: "FIFO Resume Writing",
      item: `${siteConfig.url}/fifo-resume-writing/`,
    },
  ],
};

export default function FifoResumeWritingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CommercialServicePage content={content} />
    </>
  );
}
