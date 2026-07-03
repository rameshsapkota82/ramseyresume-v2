import type { Metadata } from "next";
import {
  BadgeCheck,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  FileCheck,
  PenLine,
  SearchCheck,
  ShieldCheck,
  Target,
  TrendingUp,
  Upload,
  UserCheck,
} from "lucide-react";
import { CommercialServicePage } from "@/components/sections/CommercialServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { ServiceFaq, ServicePageContent } from "@/types/service-page";

export const metadata: Metadata = createMetadata({
  title: "Executive Resume Writing Australia | Ramsey Resume",
  description:
    "Executive resume writing for Australian managers, leaders and senior professionals. Perth-based support for leadership positioning and career documents.",
  path: "/executive-resume-writing/",
});

const faqs: ServiceFaq[] = [
  {
    question: "What is executive resume writing?",
    answer:
      "Executive resume writing focuses on senior leadership positioning, commercial impact, strategic contribution, people leadership, governance and career narrative for managers, executives and senior professionals.",
  },
  {
    question: "How is an executive resume different from a standard resume?",
    answer:
      "An executive resume usually needs stronger positioning, clearer leadership achievements, broader business context and more emphasis on outcomes, scale, influence and strategic value.",
  },
  {
    question: "Can you help with board or C-suite applications?",
    answer:
      "Ramsey Resume can support senior leadership and executive applications. Board-specific documents may need additional governance and board profile positioning depending on the opportunity.",
  },
  {
    question: "Should an executive resume be ATS-friendly?",
    answer:
      "Yes. Senior resumes still need clear structure and readable formatting, especially when submitted through online systems or executive recruitment platforms.",
  },
  {
    question: "Can you update my LinkedIn profile as well?",
    answer:
      "Yes. Executive resume writing can be paired with LinkedIn profile optimisation so your public profile supports the same senior positioning.",
  },
  {
    question: "Do you guarantee executive interviews?",
    answer:
      "No. Interviews depend on market conditions, role requirements, competition, networks and decision-makers. Professional writing can improve clarity and positioning, but cannot guarantee outcomes.",
  },
  {
    question: "Do you work with executives outside Perth?",
    answer:
      "Yes. Ramsey Resume is based in Perth, Western Australia and supports senior professionals across Australia through online communication.",
  },
  {
    question: "What should I send to begin?",
    answer:
      "Send your current resume, LinkedIn profile, target roles and any position descriptions or executive briefs you are considering.",
  },
];

const content: ServicePageContent = {
  breadcrumb: "Executive Resume Writing",
  badge: "Executive resume writer Perth. Australia-wide senior career support.",
  h1: "Executive Resume Writing Australia",
  intro: [
    "Senior professionals need more than a list of responsibilities. Executive resumes must communicate leadership scope, strategic contribution, commercial outcomes and the value you bring to complex organisations. Ramsey Resume writes executive resumes for Australian managers, leaders and senior professionals who need stronger positioning.",
    "Based in Perth and supporting clients Australia-wide, we help transform dense career histories into focused executive documents that are clear, credible and aligned with the roles you want next.",
  ],
  heroHighlights: [
    "Leadership and commercial impact focus",
    "Executive summary and value proposition",
    "ATS-aware senior resume structure",
    "Optional LinkedIn profile alignment",
  ],
  heroCard: {
    eyebrow: "Senior Career Positioning",
    title: "Communicate leadership value with clarity and evidence.",
    items: ["Strategy", "Leadership", "Impact", "Growth"],
  },
  overview: {
    eyebrow: "Service overview",
    title: "Why executive resumes need sharper positioning",
    body: [
      "At senior level, employers and recruiters look for more than technical competence. They want evidence of leadership judgement, organisational impact, stakeholder influence, commercial awareness, operational improvement and the ability to deliver results through people and systems.",
      "Many executive resumes become too long, too task-focused or too historical. They describe positions held but do not clearly explain the scale of responsibility, complexity of challenges, value delivered or leadership brand. This makes it harder for decision-makers to quickly understand why the candidate fits a senior opportunity.",
      "Ramsey Resume helps senior professionals clarify their leadership story. The resume is written to highlight strategic contribution, measurable outcomes where available, people leadership, transformation, governance, growth, service improvement and other role-relevant executive themes.",
    ],
  },
  audiences: {
    eyebrow: "Who it is for",
    title: "Who this executive resume service is for",
    text: "This service is built for senior professionals who need a polished, credible and strategically positioned career document.",
    items: [
      "Executives, general managers and senior managers",
      "Operational, commercial, finance, HR, IT and project leaders",
      "Professionals applying for promotion into senior leadership",
      "Leaders changing industries or repositioning after a career shift",
      "Public sector executives and senior government applicants",
      "Business owners moving into employed leadership roles",
      "Senior technical experts moving into management",
      "Professionals who need resume and LinkedIn alignment",
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "How executive resume writing strengthens senior applications",
    text: "A senior resume needs to show scope, evidence and leadership value quickly.",
    items: [
      {
        title: "Stronger value proposition",
        text: "Your executive summary is shaped around the leadership value, strengths and direction most relevant to your target roles.",
        icon: Target,
      },
      {
        title: "Achievement-led career story",
        text: "Responsibilities are reframed around outcomes, contribution, scale, transformation and organisational impact.",
        icon: TrendingUp,
      },
      {
        title: "Clear leadership positioning",
        text: "The resume communicates how you lead, influence, solve problems and deliver through teams or stakeholders.",
        icon: UserCheck,
      },
      {
        title: "Commercial and strategic focus",
        text: "Where relevant, content highlights revenue, cost, growth, service, risk, governance, productivity or performance outcomes.",
        icon: ChartNoAxesCombined,
      },
      {
        title: "Professional senior presentation",
        text: "The document is polished and executive-level without relying on over-designed formatting that can reduce usability.",
        icon: FileCheck,
      },
      {
        title: "Consistent career assets",
        text: "Your resume can be aligned with LinkedIn, cover letters and executive applications.",
        icon: ShieldCheck,
      },
    ],
  },
  inclusions: {
    eyebrow: "Inclusions",
    title: "What is included in executive resume writing",
    text: "The service focuses on clear senior positioning, evidence and practical application documents.",
    items: [
      "Review of current resume, LinkedIn profile and target roles",
      "Executive summary and leadership value proposition",
      "Career achievements rewritten for senior impact",
      "Leadership, stakeholder and commercial themes",
      "Role-specific keyword and industry alignment",
      "ATS-aware senior resume structure",
      "Board, governance or public sector emphasis where relevant",
      "Australian spelling and professional tone",
      "Editable Word document and PDF version",
      "Optional LinkedIn and cover letter alignment",
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How the executive resume process works",
    text: "The process is designed to clarify leadership value before writing the final document.",
    steps: [
      {
        title: "Share your career documents",
        text: "Send your current resume, LinkedIn profile, target roles and any executive briefs or position descriptions.",
        icon: Upload,
      },
      {
        title: "Review senior positioning",
        text: "We assess leadership scope, achievements, career direction, gaps and the strongest themes for your target market.",
        icon: SearchCheck,
      },
      {
        title: "Shape the leadership narrative",
        text: "Your resume strategy is built around value proposition, role fit, impact and senior-level evidence.",
        icon: Target,
      },
      {
        title: "Write the executive resume",
        text: "The resume is rewritten with a clear executive summary, achievement-led content and polished senior presentation.",
        icon: PenLine,
      },
      {
        title: "Review and refine",
        text: "You review the draft for accuracy, tone and relevance before the final documents are prepared.",
        icon: FileCheck,
      },
      {
        title: "Final delivery",
        text: "Receive final files ready for recruiters, direct applications and online submissions.",
        icon: BriefcaseBusiness,
      },
    ],
  },
  extraSection: {
    eyebrow: "Executive themes",
    title: "Senior resume themes we may strengthen",
    text: "The best themes depend on your background and target role, but executive resumes often need to clarify these areas.",
    items: [
      {
        title: "Strategy",
        text: "Business planning, transformation, growth, operating models, governance or long-term direction.",
        icon: BadgeCheck,
      },
      {
        title: "Leadership",
        text: "Team performance, culture, coaching, workforce planning, change leadership and executive influence.",
        icon: BadgeCheck,
      },
      {
        title: "Performance",
        text: "Revenue, cost, productivity, customer, service, delivery, operational or risk outcomes where available.",
        icon: BadgeCheck,
      },
      {
        title: "Stakeholders",
        text: "Board, executive, client, government, vendor, union, community or cross-functional engagement.",
        icon: BadgeCheck,
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing preview",
    title: "Executive resume pricing depends on seniority and scope",
    text: "Pricing depends on the complexity of your career history, target roles, current document quality and whether you need LinkedIn or cover letter support.",
    cardTitle: "Start with a senior career document review",
    cardText:
      "Send your current resume and target role. Ramsey Resume can recommend whether you need a resume rewrite, LinkedIn alignment or a broader executive application package.",
  },
  faqs,
  relatedServices: [
    {
      title: "LinkedIn Profile Optimisation",
      text: "Align your LinkedIn profile with your senior resume and executive positioning.",
      href: "/linkedin-profile-optimisation/",
    },
    {
      title: "Resume Writing",
      text: "Professional resume writing for Australian job seekers across career levels.",
      href: "/resume-writing/",
    },
    {
      title: "Government Resume Writing",
      text: "Senior public sector resume support for government and agency applications.",
      href: "/government-resume-writing/",
    },
    {
      title: "Cover Letter Writing",
      text: "Targeted executive cover letters for specific senior opportunities.",
      href: "/cover-letter-writing/",
    },
  ],
  finalCta: {
    eyebrow: "Executive resume review",
    title: "Ready to position your leadership experience more clearly?",
    text: "Send your current resume and target role. Ramsey Resume can review your senior career documents and recommend the best next step.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Executive Resume Writing Australia",
  serviceType: "Executive Resume Writing",
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
    "Executive resume writing for Australian managers, leaders and senior professionals, including leadership positioning and LinkedIn alignment.",
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
      name: "Executive Resume Writing",
      item: `${siteConfig.url}/executive-resume-writing/`,
    },
  ],
};

export default function ExecutiveResumeWritingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CommercialServicePage content={content} />
    </>
  );
}
