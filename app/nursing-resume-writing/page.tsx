import type { Metadata } from "next";
import {
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck,
  HeartPulse,
  PenLine,
  SearchCheck,
  ShieldCheck,
  Target,
  Upload,
  Users,
} from "lucide-react";
import { CommercialServicePage } from "@/components/sections/CommercialServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { ServiceFaq, ServicePageContent } from "@/types/service-page";

export const metadata: Metadata = createMetadata({
  title: "Nursing Resume Writing Australia | Ramsey Resume",
  description:
    "Nursing and healthcare resume writing for Australian AHPRA-registered nurses, carers and allied health job seekers. Perth-based, Australia-wide.",
  path: "/nursing-resume-writing/",
});

const faqs: ServiceFaq[] = [
  {
    question: "What should a nursing resume include?",
    answer:
      "A nursing resume should clearly show AHPRA registration, clinical experience, specialty areas, competencies, compliance items and patient-care achievements that match your target role.",
  },
  {
    question: "Can you help new graduate nurses?",
    answer:
      "Yes. Graduate and early-career nursing resumes can focus on clinical placements, transferable healthcare experience, competencies and readiness for a graduate program.",
  },
  {
    question: "Do you write resumes for enrolled nurses and aged care workers?",
    answer:
      "Yes. Ramsey Resume supports registered nurses, enrolled nurses, assistants in nursing, aged care and disability support workers, and allied health applicants.",
  },
  {
    question: "Should I include my AHPRA registration number?",
    answer:
      "Yes, AHPRA registration is usually included along with your registration type and any endorsements. The exact placement depends on the role and employer requirements.",
  },
  {
    question: "Are nursing resumes ATS-friendly?",
    answer:
      "Yes. Many health services and hospitals use online application systems, so clean formatting, clear headings and relevant clinical keywords are important.",
  },
  {
    question: "Do you write nursing resumes from Perth?",
    answer:
      "Yes. Ramsey Resume is based in Perth, Western Australia and supports nursing and healthcare applicants across WA and Australia.",
  },
  {
    question: "Can you guarantee a nursing job?",
    answer:
      "No. Hiring depends on registration, experience, competition and employer needs. A professional resume can improve clarity and presentation, but cannot guarantee employment.",
  },
  {
    question: "Can you help with cover letters for healthcare roles?",
    answer:
      "Yes. A nursing resume can be paired with a targeted cover letter for a specific hospital, aged care or community health role.",
  },
];

const content: ServicePageContent = {
  breadcrumb: "Nursing Resume Writing",
  badge: "Nursing resume writer Perth. Healthcare and Australia-wide support.",
  h1: "Nursing Resume Writing Australia",
  intro: [
    "Nursing and healthcare applications need a resume that shows clinical capability, compliance and patient-care experience clearly. Employers and recruiters want to quickly see your registration, specialty areas, competencies and relevant achievements.",
    "Ramsey Resume writes nursing resumes for Australian job seekers applying for hospital, aged care, community health and allied health roles. Based in Perth, we understand how to present clinical experience clearly for competitive healthcare applications.",
  ],
  heroHighlights: [
    "Nursing, aged care and allied health resume support",
    "AHPRA registration and clinical competencies structured clearly",
    "ATS-friendly format for health service employer portals",
    "Perth-based, Australia-wide service",
  ],
  heroCard: {
    eyebrow: "Clinical-Ready Resume Support",
    title: "Make your clinical experience and compliance easy to find.",
    items: ["Registration", "Competencies", "Specialty areas", "Compliance"],
  },
  overview: {
    eyebrow: "Service overview",
    title: "Nursing resumes need clear evidence of clinical readiness",
    body: [
      "A nursing resume is different from a general resume because recruiters and nurse unit managers often need to assess clinical suitability and compliance quickly. They may be looking for AHPRA registration, specialty experience, competencies, immunisation compliance or specific ward exposure.",
      "Many applicants have strong clinical experience but bury the important details too deep in the resume, or use generic templates that don't show patient-care capability clearly. This can weaken applications, especially in competitive graduate programs and hospital roles.",
      "Ramsey Resume helps structure your nursing resume so registration, specialty experience and achievements are easier to find. The writing focuses on clinical skills, compliance, patient outcomes and achievements that support your target role.",
    ],
  },
  audiences: {
    eyebrow: "Who it is for",
    title: "Who this nursing resume service is for",
    text: "This service is designed for applicants targeting nursing, aged care and allied health roles.",
    items: [
      "Registered nurses applying for hospital or specialty roles",
      "Enrolled nurses and assistants in nursing",
      "Graduate nurses applying for graduate programs",
      "Aged care and disability support workers",
      "Community and mental health nurses",
      "Allied health assistants and support workers",
      "Nurses returning to practice after a break",
      "WA and interstate applicants relocating for healthcare roles",
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "How nursing resume writing improves your application",
    text: "A strong nursing resume helps recruiters see clinical suitability and compliance faster.",
    items: [
      {
        title: "Clear registration and compliance",
        text: "AHPRA registration, immunisation compliance and required checks are structured so they are easy to find.",
        icon: BadgeCheck,
      },
      {
        title: "Clinical experience focus",
        text: "Ward, specialty, aged care and community health experience is highlighted where relevant to your target role.",
        icon: HeartPulse,
      },
      {
        title: "Role-specific keywords",
        text: "The resume uses clinical and healthcare language aligned with the target role and health service.",
        icon: SearchCheck,
      },
      {
        title: "Patient-care and safety focus",
        text: "Content can reflect patient outcomes, safety, documentation, teamwork and multidisciplinary collaboration.",
        icon: ShieldCheck,
      },
      {
        title: "Graduate and early-career support",
        text: "If you are early in your nursing career, placements and transferable healthcare experience can be positioned clearly.",
        icon: Users,
      },
      {
        title: "ATS-aware structure",
        text: "Clean formatting supports hospital and health service employer portals and recruitment systems.",
        icon: FileCheck,
      },
    ],
  },
  inclusions: {
    eyebrow: "Inclusions",
    title: "What is included in nursing resume writing",
    text: "The service focuses on practical resume content for nursing and healthcare applications.",
    items: [
      "Review of current resume and target nursing or healthcare roles",
      "Professional summary tailored to clinical or aged care work",
      "AHPRA registration and compliance formatting",
      "Specialty area and clinical competency positioning",
      "Employment history rewritten with patient-care achievements",
      "Safety, documentation and multidisciplinary teamwork language",
      "ATS-friendly structure and headings",
      "Australian spelling and clinical terminology",
      "Editable Word document and PDF version",
      "Optional cover letter alignment",
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How the nursing resume writing process works",
    text: "The process is designed to identify clinically relevant details and make them easier for recruiters to assess.",
    steps: [
      {
        title: "Send your current resume",
        text: "Provide your current resume, registration details, target role and any job advertisements you are applying for.",
        icon: Upload,
      },
      {
        title: "Review requirements",
        text: "We assess role requirements, clinical keywords, compliance items and relevant specialty experience.",
        icon: SearchCheck,
      },
      {
        title: "Plan resume structure",
        text: "The resume is structured so registration, clinical experience, skills and work history are easy to scan.",
        icon: Target,
      },
      {
        title: "Write the resume",
        text: "Your resume is rewritten with clinical language, clear formatting and role-relevant detail.",
        icon: PenLine,
      },
      {
        title: "Review and refine",
        text: "You review the draft for accuracy, including registration details, dates, employers and ward details.",
        icon: ClipboardCheck,
      },
      {
        title: "Final delivery",
        text: "Receive final files suitable for online applications, recruiters and health service employer portals.",
        icon: BriefcaseBusiness,
      },
    ],
  },
  extraSection: {
    eyebrow: "Nursing focus areas",
    title: "Details nursing recruiters often look for",
    text: "The right details depend on the role, but these areas often matter in nursing and healthcare applications.",
    items: [
      {
        title: "Registration and checks",
        text: "AHPRA registration, National Police Check, Working with Children Check and immunisation compliance.",
        icon: BadgeCheck,
      },
      {
        title: "Clinical competencies",
        text: "Specialty skills, procedures, equipment and clinical systems relevant to the target ward or service.",
        icon: HeartPulse,
      },
      {
        title: "Compliance and safety",
        text: "Infection control, medication management, documentation standards and patient safety practices.",
        icon: ShieldCheck,
      },
      {
        title: "Team and communication",
        text: "Multidisciplinary teamwork, handover, family communication and supervision of junior staff.",
        icon: Users,
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing preview",
    title: "Nursing resume pricing depends on experience and target roles",
    text: "Pricing depends on your current resume, registration, work history and whether you are targeting graduate, ward-based, specialty or aged care roles.",
    cardTitle: "Start with a free nursing resume review",
    cardText:
      "Send your current resume, registration details and target role. Ramsey Resume can recommend whether you need a full rewrite, targeted update or cover letter package.",
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
      text: "Targeted cover letters for hospital, aged care and community health roles.",
      href: "/cover-letter-writing/",
    },
    {
      title: "Resume Writer Perth",
      text: "Local Perth resume writing support for WA nursing and healthcare job seekers.",
      href: "/resume-writer-perth/",
    },
    {
      title: "Resume Writer Western Australia",
      text: "Resume writing support across WA, including regional and remote healthcare applicants.",
      href: "/resume-writer-western-australia/",
    },
  ],
  finalCta: {
    eyebrow: "Nursing resume review",
    title: "Need a nursing resume that shows your clinical experience clearly?",
    text: "Send your current resume, registration details and target role. Ramsey Resume can review your documents and recommend the strongest next step.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nursing Resume Writing Australia",
  serviceType: "Nursing Resume Writing",
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
    "Nursing and healthcare resume writing service for Australian AHPRA-registered nurses, aged care workers and allied health job seekers.",
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
      name: "Nursing Resume Writing",
      item: `${siteConfig.url}/nursing-resume-writing/`,
    },
  ],
};

export default function NursingResumeWritingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CommercialServicePage content={content} />
    </>
  );
}
