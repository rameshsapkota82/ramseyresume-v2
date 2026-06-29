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
} from "lucide-react";
import { CommercialServicePage } from "@/components/sections/CommercialServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { ServiceFaq, ServicePageContent } from "@/types/service-page";

export const metadata: Metadata = createMetadata({
  title: "Selection Criteria Writing Service Australia | Government Applications",
  description:
    "Selection criteria writing for Australian government job applications. Perth-based support for STAR examples, capability responses and public sector applications.",
  path: "/selection-criteria-writing/",
});

const faqs: ServiceFaq[] = [
  {
    question: "What is selection criteria writing?",
    answer:
      "Selection criteria writing is the process of preparing structured responses that show how your experience meets the requirements of a role. It is common in Australian government, public sector, university, healthcare and structured recruitment applications.",
  },
  {
    question: "What is the STAR method?",
    answer:
      "STAR stands for Situation, Task, Action and Result. It is a common way to structure examples so the reader can understand the context, what you needed to do, what action you took and what outcome you achieved.",
  },
  {
    question: "Can you write selection criteria for government jobs?",
    answer:
      "Yes. Ramsey Resume supports Australian government and public sector applicants with selection criteria responses, capability statements, cover letters and resume alignment.",
  },
  {
    question: "Can you guarantee I will get shortlisted?",
    answer:
      "No. Shortlisting depends on role requirements, competition, evidence, eligibility and panel decisions. Selection criteria writing can improve clarity, structure and relevance, but it cannot guarantee an outcome.",
  },
  {
    question: "Do I need to provide examples?",
    answer:
      "Yes. The strongest responses are based on your real experience. If you are unsure which examples to use, Ramsey Resume can help identify suitable examples from your career history.",
  },
  {
    question: "Can you help if I am moving from private sector to government?",
    answer:
      "Yes. Private sector experience can often be translated into public sector language by focusing on transferable skills, stakeholder outcomes, compliance, service delivery, leadership and evidence.",
  },
  {
    question: "How long should selection criteria responses be?",
    answer:
      "Length depends on the application instructions. Some responses are short statements, while others require detailed examples. Always follow word limits and formatting requirements in the job pack.",
  },
  {
    question: "Do you provide selection criteria writing from Perth?",
    answer:
      "Yes. Ramsey Resume is based in Perth, Western Australia and supports selection criteria writing clients across Australia.",
  },
];

const content: ServicePageContent = {
  breadcrumb: "Selection Criteria Writing",
  badge: "Selection criteria writer Perth. Australia-wide support.",
  h1: "Selection Criteria Writing Service Australia",
  intro: [
    "Government and public sector applications often need more than a resume. Selection criteria responses must show clear evidence that you meet the role requirements. Ramsey Resume helps Australian job seekers write structured, relevant and truthful responses that are easier for assessment panels to follow.",
    "Based in Perth, Western Australia and supporting clients Australia-wide, we help applicants prepare STAR examples, capability responses, government cover letters and aligned resumes for competitive public sector applications.",
  ],
  heroHighlights: [
    "STAR and evidence-based responses",
    "Government and public sector focus",
    "Capability and role alignment",
    "Resume and cover letter consistency",
  ],
  heroCard: {
    eyebrow: "Evidence-Based Application Writing",
    title: "Turn your experience into clear selection criteria examples.",
    items: ["Situation", "Task", "Action", "Result"],
  },
  overview: {
    eyebrow: "Service overview",
    title: "What is selection criteria writing?",
    body: [
      "Selection criteria writing is the process of preparing responses that show how your skills, experience and achievements meet the specific requirements of a role. In Australia, this is especially common for government jobs, public sector roles, universities, healthcare organisations and structured recruitment processes.",
      "A strong response does more than say you have a skill. It gives evidence. It explains the situation, what was required, what you personally did and what changed because of your actions. This helps an assessment panel understand the level, relevance and credibility of your experience.",
      "Ramsey Resume helps turn your career examples into clear, targeted responses while keeping the writing accurate and grounded in your real background. The goal is to make your application easier to assess and more aligned with the role requirements.",
    ],
  },
  audiences: {
    eyebrow: "Who it is for",
    title: "Who this selection criteria service is for",
    text: "This service is designed for applicants who need structured, evidence-based responses for Australian government and formal application processes.",
    items: [
      "Applicants for Australian government, public sector and council roles",
      "Professionals applying for APS, state government, local government or agency positions",
      "Healthcare, education, administration, compliance and community services applicants",
      "Candidates who need to address capability statements or key selection criteria",
      "Job seekers with strong experience but difficulty choosing examples",
      "Applicants moving from private sector into government roles",
      "Graduates applying for public sector programs or entry-level government roles",
      "Managers and senior professionals applying for leadership or policy positions",
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "How professional selection criteria writing helps",
    text: "The right structure helps reviewers find the evidence they need without guessing how your experience fits the role.",
    items: [
      {
        title: "Clear evidence-based responses",
        text: "Your answers are built around real examples, actions and outcomes rather than broad claims that are difficult for panels to assess.",
        icon: ClipboardCheck,
      },
      {
        title: "Better alignment with role requirements",
        text: "Responses are shaped around the job advertisement, capability framework, duties and selection criteria wording.",
        icon: Target,
      },
      {
        title: "Stronger STAR structure",
        text: "Examples are organised so the situation, task, action and result are easier to follow and more useful for assessment panels.",
        icon: ListChecks,
      },
      {
        title: "Professional public sector tone",
        text: "The writing is clear, direct and credible, avoiding exaggerated language while still showing contribution and capability.",
        icon: Landmark,
      },
      {
        title: "Improved application consistency",
        text: "Your resume, cover letter and selection criteria can be aligned around the same strengths and role requirements.",
        icon: FileCheck,
      },
      {
        title: "More confidence submitting",
        text: "A structured application helps you present your experience in a way that is easier to review and easier to defend at interview.",
        icon: ShieldCheck,
      },
    ],
  },
  inclusions: {
    eyebrow: "Inclusions",
    title: "What is included in the selection criteria service",
    text: "Every application is different. The work begins with the job pack and the evidence available from your career history, then the responses are shaped around the required criteria.",
    items: [
      "Review of job advertisement, position description and application instructions",
      "Selection of relevant examples from your work history",
      "STAR, SAO or evidence-based response structure where appropriate",
      "Writing and editing of key selection criteria responses",
      "Capability and role requirement alignment",
      "Professional Australian public sector tone",
      "Support for APS, WA Government, local government and related applications",
      "Consistency with your resume and cover letter",
      "Editable Word document and submission-ready PDF where appropriate",
      "Revision support for accuracy and application fit",
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How the selection criteria writing process works",
    text: "The process is practical, evidence-led and designed around the exact application instructions.",
    steps: [
      {
        title: "Send the job pack",
        text: "Provide the job advertisement, position description, selection criteria, capability framework and any application instructions.",
        icon: Upload,
      },
      {
        title: "Review your experience",
        text: "We review your resume, previous examples, project notes and career history to identify evidence that matches the criteria.",
        icon: SearchCheck,
      },
      {
        title: "Map criteria to examples",
        text: "Each criterion is matched to the strongest available example, with attention to level, relevance, complexity and outcome.",
        icon: Target,
      },
      {
        title: "Write structured responses",
        text: "Responses are drafted using clear evidence, practical detail and a professional tone suited to Australian government applications.",
        icon: PenLine,
      },
      {
        title: "Review for accuracy",
        text: "You review the draft to confirm the examples are accurate, truthful and aligned with your actual experience.",
        icon: FileCheck,
      },
      {
        title: "Final application support",
        text: "Receive final documents ready for submission, with resume or cover letter alignment available where required.",
        icon: BriefcaseBusiness,
      },
    ],
  },
  extraSection: {
    eyebrow: "Response themes",
    title: "Common selection criteria themes",
    text: "Selection criteria vary by role, but many applications assess similar capabilities through different wording.",
    items: [
      {
        title: "Communication",
        text: "Examples may cover stakeholder communication, written advice, conflict resolution, presentations or customer service.",
        icon: BadgeCheck,
      },
      {
        title: "Leadership",
        text: "Responses may show team guidance, decision-making, coaching, accountability, change support or project ownership.",
        icon: BadgeCheck,
      },
      {
        title: "Problem solving",
        text: "Evidence can include analysis, judgement, risk management, process improvement, policy interpretation or technical solutions.",
        icon: BadgeCheck,
      },
      {
        title: "Service delivery",
        text: "Examples may focus on client outcomes, operational priorities, compliance, case management or high-volume environments.",
        icon: BadgeCheck,
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing preview",
    title: "Pricing depends on the number and complexity of responses",
    text: "Selection criteria pricing depends on the role level, word limits, number of criteria, available examples and whether you also need a resume or cover letter. The fastest way to get accurate guidance is to send the job pack for review.",
    cardTitle: "Send the position description first",
    cardText:
      "We can review the instructions and recommend whether you need selection criteria, a government cover letter, a resume update or a full application package.",
  },
  faqs,
  relatedServices: [
    {
      title: "Government Resume Writing",
      text: "A targeted resume for public sector roles, capability frameworks and government application expectations.",
      href: "/government-resume-writing/",
    },
    {
      title: "Cover Letter Writing",
      text: "A role-specific cover letter to introduce your government or structured application.",
      href: "/cover-letter-writing/",
    },
    {
      title: "Resume Writing",
      text: "A professional resume that supports your examples and presents your background clearly.",
      href: "/resume-writing/",
    },
    {
      title: "Selection Criteria Examples",
      text: "Review guidance and examples for structuring evidence-based selection criteria responses.",
      href: "/selection-criteria-examples/",
    },
  ],
  finalCta: {
    eyebrow: "Application review",
    title: "Need help turning your experience into selection criteria responses?",
    text: "Send your position description, current resume and any draft examples. Ramsey Resume can recommend the best next step for your government or structured application.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Selection Criteria Writing Service Australia",
  serviceType: "Selection Criteria Writing",
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
    "Selection criteria writing service for Australian government and public sector job applications, including STAR examples and capability responses.",
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
      name: "Selection Criteria Writing",
      item: `${siteConfig.url}/selection-criteria-writing/`,
    },
  ],
};

export default function SelectionCriteriaWritingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CommercialServicePage content={content} />
    </>
  );
}
