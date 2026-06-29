import type { Metadata } from "next";
import {
  BadgeCheck,
  BriefcaseBusiness,
  FileCheck,
  HardHat,
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
  title: "Resume Writer Western Australia | Professional Resume Writing WA",
  description:
    "Resume writer for Western Australia job seekers. Perth-based support for WA resumes, FIFO applications, government resumes and ATS-friendly documents.",
  path: "/resume-writer-western-australia/",
});

const faqs: ServiceFaq[] = [
  {
    question: "Do you provide resume writing across Western Australia?",
    answer:
      "Yes. Ramsey Resume is based in Perth and supports job seekers across Western Australia, including Perth, regional WA, FIFO workers and remote applicants.",
  },
  {
    question: "Can you help regional WA and FIFO applicants remotely?",
    answer:
      "Yes. The process can be completed online using email, phone and WhatsApp, making it practical for regional, FIFO and remote job seekers.",
  },
  {
    question: "Which WA industries do you support?",
    answer:
      "Ramsey Resume supports WA job seekers across government, FIFO, mining, resources, healthcare, engineering, IT, accounting, education, trades, administration and professional services.",
  },
  {
    question: "Can you help with WA Government applications?",
    answer:
      "Yes. Ramsey Resume supports WA Government and local government applications, including resumes, cover letters and selection criteria responses.",
  },
  {
    question: "Can you make my WA resume ATS-friendly?",
    answer:
      "Yes. Resumes can be structured with clear headings, practical formatting and relevant keywords for online applications and recruitment platforms.",
  },
  {
    question: "Do you guarantee interviews?",
    answer:
      "No. Interview outcomes depend on role requirements, competition, experience and employer decisions. Professional writing can improve clarity and presentation, but cannot guarantee outcomes.",
  },
  {
    question: "Can you help if I am moving to WA?",
    answer:
      "Yes. Ramsey Resume can help position your interstate or overseas experience for Western Australian employers and industries.",
  },
  {
    question: "How do I start?",
    answer:
      "Send your current resume and target role through the free resume review or quote form. Ramsey Resume will recommend the most suitable next step.",
  },
];

const content: ServicePageContent = {
  breadcrumb: "Resume Writer Western Australia",
  badge: "WA resume writer. Perth-based, regional and FIFO support.",
  h1: "Resume Writer Western Australia",
  intro: [
    "Western Australia has a unique employment market shaped by Perth professional roles, WA Government opportunities, regional work, FIFO rosters, mining, resources, healthcare, trades and specialist industries. Ramsey Resume helps WA job seekers create clear, targeted and ATS-friendly resumes for local and Australia-wide applications.",
    "Based in Perth and supporting clients throughout WA, we help professionals, graduates, skilled migrants, FIFO workers, public sector applicants and career changers present their experience with stronger structure, clearer achievements and practical application documents.",
  ],
  heroHighlights: [
    "Perth and regional WA resume support",
    "FIFO, mining and resources application focus",
    "WA Government and local government documents",
    "ATS-friendly resumes and cover letters",
  ],
  heroCard: {
    eyebrow: "WA Resume Review",
    title: "Get Western Australia-focused resume support from a Perth-based service.",
    items: ["Perth", "Regional WA", "FIFO", "Government"],
  },
  overview: {
    eyebrow: "Local service",
    title: "Resume writing for Western Australian job seekers",
    body: [
      "A strong WA resume needs to do more than look polished. It should reflect your target industry, the type of employer you are approaching and the practical requirements of the role. A FIFO resume needs different emphasis from a government resume. A healthcare resume needs different language from an engineering or IT resume.",
      "Many Western Australian job seekers have strong experience but use generic documents that do not communicate role fit quickly. Recruiters may need to see tickets, licences, site exposure, stakeholder experience, government capabilities, technical skills or achievements without searching through dense paragraphs.",
      "Ramsey Resume helps create professional resumes that are clear, targeted and suitable for online applications. The focus is on practical structure, accurate content and human-first writing that supports Perth, WA and Australia-wide career opportunities.",
    ],
  },
  audiences: {
    eyebrow: "Who it is for",
    title: "Who this Western Australia resume service is for",
    text: "This service supports WA job seekers across metro, regional, remote and FIFO work contexts.",
    items: [
      "Perth professionals applying for local or national roles",
      "Regional WA job seekers needing remote resume support",
      "FIFO, mining, shutdown and resources applicants",
      "WA Government and local government candidates",
      "Healthcare, education and community services workers",
      "Engineers, IT professionals and project managers",
      "Trades, construction, logistics and operations workers",
      "Skilled migrants and interstate movers targeting WA roles",
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "How a WA resume writer can improve your application",
    text: "A targeted resume helps employers and recruiters understand your relevance faster.",
    items: [
      {
        title: "WA market relevance",
        text: "Your resume can reflect Perth, regional WA, FIFO or public sector expectations where relevant.",
        icon: MapPin,
      },
      {
        title: "Clear role targeting",
        text: "The document is shaped around your target role, industry and employer priorities.",
        icon: Target,
      },
      {
        title: "ATS-aware formatting",
        text: "Clean headings and practical formatting support online applications and recruiter systems.",
        icon: SearchCheck,
      },
      {
        title: "Industry-specific details",
        text: "Tickets, licences, technical skills, capabilities or achievements are structured where they matter most.",
        icon: HardHat,
      },
      {
        title: "Professional writing",
        text: "Your experience is rewritten in clear Australian English without exaggeration or generic filler.",
        icon: PenLine,
      },
      {
        title: "Complete application support",
        text: "Resume, cover letter, LinkedIn and selection criteria support can be aligned where needed.",
        icon: FileCheck,
      },
    ],
  },
  inclusions: {
    eyebrow: "Inclusions",
    title: "What is included in WA resume writing support",
    text: "The service focuses on practical documents for Western Australian and national job applications.",
    items: [
      "Review of current resume and target roles",
      "Professional resume writing or rewriting",
      "ATS-aware structure and formatting",
      "Career summary and key skills development",
      "Employment history rewriting with achievements",
      "WA industry and role alignment",
      "Tickets, licences or certifications formatting where relevant",
      "Australian spelling and terminology",
      "Editable Word document and PDF version",
      "Optional cover letter, LinkedIn or selection criteria support",
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How the WA resume writing process works",
    text: "The process can be completed remotely and is designed around your target role.",
    steps: [
      {
        title: "Send your current resume",
        text: "Share your current resume, career notes, LinkedIn profile or work history, plus the type of role you want.",
        icon: Upload,
      },
      {
        title: "Review target roles",
        text: "We review the role, industry, keywords, location needs and application instructions.",
        icon: SearchCheck,
      },
      {
        title: "Plan positioning",
        text: "The resume is planned around role fit, achievements, skills and employer expectations.",
        icon: Target,
      },
      {
        title: "Write the resume",
        text: "Your resume is rewritten with clear structure, practical formatting and targeted content.",
        icon: PenLine,
      },
      {
        title: "Review and refine",
        text: "You check the draft for accuracy before final documents are prepared.",
        icon: FileCheck,
      },
      {
        title: "Final delivery",
        text: "Receive final Word and PDF files ready for online applications and recruiters.",
        icon: BriefcaseBusiness,
      },
    ],
  },
  extraSection: {
    eyebrow: "WA focus areas",
    title: "Western Australian application contexts supported",
    text: "Different WA roles require different emphasis. The resume can be shaped around the market you are targeting.",
    items: [
      {
        title: "FIFO and resources",
        text: "Site experience, rosters, tickets, safety awareness, trade skills and shutdown exposure.",
        icon: BadgeCheck,
      },
      {
        title: "Government",
        text: "WA Government, local government, selection criteria and public sector capability alignment.",
        icon: ShieldCheck,
      },
      {
        title: "Professional roles",
        text: "IT, engineering, accounting, project management, administration and business services.",
        icon: BadgeCheck,
      },
      {
        title: "Healthcare and education",
        text: "Nursing, aged care, allied health, teaching, community services and support roles.",
        icon: BadgeCheck,
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing preview",
    title: "WA resume pricing depends on your goals and documents",
    text: "Pricing depends on career level, document quality, target role and whether you need a resume only or a complete application package.",
    cardTitle: "Start with a free WA resume review",
    cardText:
      "Send your current resume and target role. Ramsey Resume can recommend the right option for your WA, FIFO, government or national application.",
  },
  faqs,
  relatedServices: [
    {
      title: "Resume Writer Perth",
      text: "Local Perth resume writing support for WA job seekers.",
      href: "/resume-writer-perth/",
    },
    {
      title: "FIFO Resume Writing",
      text: "Resume support for WA mining, resources, shutdown and site-based applications.",
      href: "/fifo-resume-writing/",
    },
    {
      title: "Government Resume Writing",
      text: "Targeted resume support for WA Government and public sector roles.",
      href: "/government-resume-writing/",
    },
    {
      title: "Resume Writing Australia",
      text: "National resume writing support for Australian job seekers.",
      href: "/resume-writing-australia/",
    },
  ],
  finalCta: {
    eyebrow: "Free resume review",
    title: "Need a resume writer for Western Australia applications?",
    text: "Send your current resume and target role. Ramsey Resume can review your documents and recommend the strongest next step.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Resume Writer Western Australia",
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
    { "@type": "State", name: "Western Australia" },
    { "@type": "City", name: "Perth" },
    { "@type": "Country", name: "Australia" },
  ],
  description:
    "Resume writing service for Western Australian job seekers, including Perth, regional WA, FIFO, government and professional applications.",
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
      name: "Resume Writer Western Australia",
      item: `${siteConfig.url}/resume-writer-western-australia/`,
    },
  ],
};

export default function ResumeWriterWesternAustraliaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CommercialServicePage content={content} />
    </>
  );
}
