import type { Metadata } from "next";
import {
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck,
  Landmark,
  ListChecks,
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
  title: "Government Resume Writing Australia | Ramsey Resume",
  description:
    "Government resume writing for Australian public sector applications. Perth-based support for APS, WA Government, selection criteria and capability alignment.",
  path: "/government-resume-writing/",
});

const faqs: ServiceFaq[] = [
  {
    question: "What is different about a government resume?",
    answer:
      "A government resume usually needs clearer alignment with the position description, capability framework, role requirements and evidence expected by an assessment panel. It often works alongside a cover letter or selection criteria responses.",
  },
  {
    question: "Can you help with APS and state government applications?",
    answer:
      "Yes. Ramsey Resume supports applications for Australian public sector roles, including APS, state government, local government and related agency positions.",
  },
  {
    question: "Do government resumes need to be ATS-friendly?",
    answer:
      "Many government applications are submitted through online systems, so clear formatting, standard headings and relevant role language are useful. The resume also needs to be readable for human panel members.",
  },
  {
    question: "Can you write selection criteria as well?",
    answer:
      "Yes. Ramsey Resume can support selection criteria writing, government cover letters and resume alignment so the full application tells a consistent story.",
  },
  {
    question: "Can you guarantee a government interview?",
    answer:
      "No. Shortlisting depends on eligibility, evidence, competition, role requirements and panel decisions. Professional writing can improve clarity and alignment, but cannot guarantee an interview.",
  },
  {
    question: "Can private sector experience be used for government applications?",
    answer:
      "Yes. Private sector experience can often be positioned around transferable capabilities such as stakeholder engagement, governance, compliance, service delivery, leadership, communication and problem solving.",
  },
  {
    question: "Do you help with WA Government applications?",
    answer:
      "Yes. Ramsey Resume is based in Perth and supports WA Government, local government and broader Australian public sector applications.",
  },
  {
    question: "What should I send to get started?",
    answer:
      "Send your current resume, the job advertisement, position description and any selection criteria or application instructions. This allows the resume to be targeted properly.",
  },
];

const content: ServicePageContent = {
  breadcrumb: "Government Resume Writing",
  badge: "Government resume writer Perth. Australia-wide public sector support.",
  h1: "Government Resume Writing Australia",
  intro: [
    "Government applications need clear evidence, targeted language and a resume that speaks to the role requirements. Ramsey Resume writes government resumes for Australian job seekers applying for public sector, APS, WA Government, local government and agency roles.",
    "Based in Perth, Western Australia and supporting applicants Australia-wide, we help translate your experience into a structured, panel-friendly resume that can align with cover letters, selection criteria and capability frameworks.",
  ],
  heroHighlights: [
    "APS, WA Government and local government support",
    "Capability and role requirement alignment",
    "ATS-aware public sector resume structure",
    "Selection criteria and cover letter consistency",
  ],
  heroCard: {
    eyebrow: "Government Application Support",
    title: "Build a resume that supports the full public sector application.",
    items: ["Role fit", "Evidence", "Capabilities", "Panel readability"],
  },
  overview: {
    eyebrow: "Service overview",
    title: "Why government resume writing needs a different approach",
    body: [
      "A government resume is not only a career history document. It often forms part of a structured assessment process where panel members compare your evidence against the position description, capabilities, duties and selection criteria. A generic private sector resume can miss important signals that government recruiters expect to see.",
      "Strong government resume writing focuses on relevance, clarity and evidence. It should show the level of responsibility you have held, the stakeholders you have worked with, the outcomes you contributed to and the capabilities that match the role. It should also use clear formatting so reviewers can find information quickly.",
      "Ramsey Resume helps applicants position their experience for Australian public sector roles without inventing achievements or overstating capability. The goal is to make your existing experience easier to assess and more aligned with the role you want.",
    ],
  },
  audiences: {
    eyebrow: "Who it is for",
    title: "Who this government resume service is for",
    text: "This service is designed for applicants targeting public sector roles where evidence, alignment and application instructions matter.",
    items: [
      "Applicants for APS, state government, WA Government and local government roles",
      "Private sector professionals moving into government",
      "Existing public servants applying for promotion or transfer",
      "Healthcare, education, administration and community services applicants",
      "Policy, project, compliance, regulatory and program professionals",
      "Graduates applying for public sector graduate programs",
      "Managers applying for leadership roles in government agencies",
      "Applicants who also need cover letters or selection criteria responses",
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "How a government resume improves your application",
    text: "A targeted government resume helps assessment panels understand your relevance faster.",
    items: [
      {
        title: "Clear role alignment",
        text: "Your resume is shaped around the job advertisement, position description and capability requirements.",
        icon: Target,
      },
      {
        title: "Evidence-led content",
        text: "Achievements and responsibilities are written to show scope, contribution, complexity and outcomes.",
        icon: ClipboardCheck,
      },
      {
        title: "Public sector language",
        text: "The writing reflects government application expectations without becoming dense or overly bureaucratic.",
        icon: Landmark,
      },
      {
        title: "Panel-friendly structure",
        text: "Clear headings, logical sections and concise content make it easier for reviewers to assess your background.",
        icon: ListChecks,
      },
      {
        title: "Application consistency",
        text: "Your resume can be aligned with selection criteria responses and government cover letters.",
        icon: FileCheck,
      },
      {
        title: "Transferable skills positioning",
        text: "Private sector experience can be translated into relevant public sector capabilities where appropriate.",
        icon: UserCheck,
      },
    ],
  },
  inclusions: {
    eyebrow: "Inclusions",
    title: "What is included in government resume writing",
    text: "The service focuses on a targeted resume that supports public sector application requirements.",
    items: [
      "Review of current resume and target government role",
      "Position description and capability alignment",
      "Professional profile tailored to public sector applications",
      "Key skills section mapped to role requirements",
      "Employment history rewritten with evidence and outcomes",
      "Government-friendly structure and formatting",
      "ATS-aware headings and readable layout",
      "Australian spelling and public sector terminology",
      "Editable Word document and PDF version",
      "Optional alignment with cover letter and selection criteria",
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How the government resume writing process works",
    text: "The process starts with the job pack, because the resume needs to respond to the actual role requirements.",
    steps: [
      {
        title: "Send your job documents",
        text: "Provide your current resume, job advertisement, position description and application instructions.",
        icon: Upload,
      },
      {
        title: "Review requirements",
        text: "We identify the key duties, capabilities, keywords, criteria and evidence expectations.",
        icon: SearchCheck,
      },
      {
        title: "Map your experience",
        text: "Your background is mapped to the strongest role-relevant examples, achievements and transferable skills.",
        icon: Target,
      },
      {
        title: "Write the resume",
        text: "Your resume is rewritten with clear government alignment, evidence-led content and practical formatting.",
        icon: PenLine,
      },
      {
        title: "Review for accuracy",
        text: "You review the draft to confirm details, examples, dates, responsibilities and achievements are accurate.",
        icon: FileCheck,
      },
      {
        title: "Finalise application files",
        text: "Receive final documents suitable for online submission and future tailoring.",
        icon: BriefcaseBusiness,
      },
    ],
  },
  extraSection: {
    eyebrow: "Government application fit",
    title: "Common government resume focus areas",
    text: "Different roles need different emphasis, but many public sector resumes need to make these themes clear.",
    items: [
      {
        title: "Stakeholder engagement",
        text: "Communication with internal teams, external partners, community members, clients or senior stakeholders.",
        icon: BadgeCheck,
      },
      {
        title: "Governance and compliance",
        text: "Policy, procedure, risk, regulatory, reporting or quality requirements relevant to the role.",
        icon: ShieldCheck,
      },
      {
        title: "Service delivery",
        text: "Client outcomes, operational priorities, customer service, case management or frontline support.",
        icon: BadgeCheck,
      },
      {
        title: "Leadership and judgement",
        text: "Decision-making, team guidance, project ownership, problem solving and accountability.",
        icon: BadgeCheck,
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing preview",
    title: "Government resume pricing depends on application complexity",
    text: "Pricing depends on your career level, current resume quality, the position description and whether you also need a cover letter or selection criteria responses.",
    cardTitle: "Send the job pack for accurate guidance",
    cardText:
      "A government role can require multiple documents. Send the position description and current resume so Ramsey Resume can recommend the right application package.",
  },
  faqs,
  relatedServices: [
    {
      title: "Selection Criteria Writing",
      text: "Structured evidence-based responses for public sector and government applications.",
      href: "/selection-criteria-writing/",
    },
    {
      title: "Cover Letter Writing",
      text: "A targeted government cover letter that introduces your fit for the role.",
      href: "/cover-letter-writing/",
    },
    {
      title: "ATS Resume Writing",
      text: "A clean, ATS-friendly resume structure for online government application systems.",
      href: "/ats-resume-writing/",
    },
    {
      title: "Resume Writing",
      text: "Professional resume writing for broader Australian job applications.",
      href: "/resume-writing/",
    },
  ],
  finalCta: {
    eyebrow: "Government application review",
    title: "Applying for a government role and need stronger documents?",
    text: "Send your current resume and position description. Ramsey Resume can recommend the right support for your government resume, cover letter or selection criteria.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Government Resume Writing Australia",
  serviceType: "Government Resume Writing",
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
    "Government resume writing service for Australian public sector applications, including APS, WA Government, local government and selection criteria alignment.",
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
      name: "Government Resume Writing",
      item: `${siteConfig.url}/government-resume-writing/`,
    },
  ],
};

export default function GovernmentResumeWritingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CommercialServicePage content={content} />
    </>
  );
}
