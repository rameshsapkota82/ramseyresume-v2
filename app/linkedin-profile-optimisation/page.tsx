import type { Metadata } from "next";
import {
  BadgeCheck,
  BriefcaseBusiness,
  FileCheck,
  Linkedin,
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
  title: "LinkedIn Profile Optimisation Australia | Ramsey Resume",
  description:
    "LinkedIn profile optimisation for Australian professionals. Perth-based support for stronger recruiter visibility, positioning and profile content.",
  path: "/linkedin-profile-optimisation/",
});

const faqs: ServiceFaq[] = [
  {
    question: "What is LinkedIn profile optimisation?",
    answer:
      "LinkedIn profile optimisation is the process of improving your headline, about section, experience, skills and profile structure so your online presence better reflects your target role, career direction and professional value.",
  },
  {
    question: "Can LinkedIn optimisation help recruiters find me?",
    answer:
      "A stronger LinkedIn profile can improve clarity and relevance for recruiter searches, but it cannot guarantee recruiter contact. The goal is to make your profile easier to understand and better aligned with your target roles.",
  },
  {
    question: "Do you rewrite the whole LinkedIn profile?",
    answer:
      "Yes. Ramsey Resume can rewrite key profile sections including headline, about summary, experience entries, skills guidance and role positioning, depending on what your profile needs.",
  },
  {
    question: "Should my LinkedIn profile match my resume?",
    answer:
      "Your LinkedIn profile should be consistent with your resume, but it does not need to copy it word for word. LinkedIn can use a more conversational professional tone while reinforcing the same career direction.",
  },
  {
    question: "Can you help if I am changing careers?",
    answer:
      "Yes. LinkedIn optimisation can help explain transferable skills, future direction and the kind of opportunities you want to be considered for.",
  },
  {
    question: "Do you log in to my LinkedIn account?",
    answer:
      "No. For security, you should keep control of your own account. Ramsey Resume can provide written profile content and guidance for you to add inside LinkedIn.",
  },
  {
    question: "Can you optimise LinkedIn for Perth and Australian roles?",
    answer:
      "Yes. Ramsey Resume is based in Perth and writes LinkedIn content for Australian professionals targeting local, interstate, remote and national opportunities.",
  },
  {
    question: "Can LinkedIn optimisation be packaged with resume writing?",
    answer:
      "Yes. LinkedIn optimisation works well with professional resume writing because both documents can share consistent positioning, achievements and target-role language.",
  },
];

const content: ServicePageContent = {
  breadcrumb: "LinkedIn Profile Optimisation",
  badge: "LinkedIn profile writer Perth. Australia-wide support.",
  h1: "LinkedIn Profile Optimisation Australia",
  intro: [
    "Your LinkedIn profile is often checked before or after your resume. Recruiters, hiring managers, industry contacts and potential employers may use it to understand your background, credibility and career direction. Ramsey Resume provides LinkedIn profile optimisation for Australian professionals who want a clearer, stronger and more strategic online presence.",
    "Based in Perth, Western Australia and supporting clients Australia-wide, we help job seekers and professionals align their LinkedIn profile with their resume, target roles and long-term career goals without using exaggerated claims or generic profile templates.",
  ],
  heroHighlights: [
    "Headline and About section rewriting",
    "Recruiter-aware keyword alignment",
    "Consistent resume and LinkedIn positioning",
    "Professional Australian tone",
  ],
  heroCard: {
    eyebrow: "LinkedIn Profile Upgrade",
    title: "Turn your profile into a clearer professional positioning tool.",
    items: ["Headline", "About", "Experience", "Skills"],
  },
  overview: {
    eyebrow: "Service overview",
    title: "Why LinkedIn profile optimisation matters",
    body: [
      "LinkedIn is not just an online resume. It is a professional search and credibility platform. A weak profile can make your experience look unclear, outdated or disconnected from the roles you want. A strong profile helps people understand what you do, where you add value and what kind of opportunities are relevant to you.",
      "Many professionals have a LinkedIn profile that is incomplete, copied directly from their resume or written around old responsibilities rather than future goals. Others have a strong resume but a LinkedIn profile that does not support the same message. This inconsistency can reduce trust and make your career story harder to understand.",
      "Ramsey Resume helps improve your LinkedIn content so it reads naturally, includes relevant keywords and supports your target direction. The focus is on clarity, credibility and role alignment for Australian professionals, not inflated marketing language.",
    ],
  },
  audiences: {
    eyebrow: "Who it is for",
    title: "Who this LinkedIn optimisation service is for",
    text: "This service is designed for professionals who want their online profile to support job search, networking and recruiter visibility.",
    items: [
      "Professionals actively applying for new roles",
      "Managers and executives who need stronger positioning",
      "Career changers who need to explain transferable skills",
      "Graduates building early professional credibility",
      "Skilled migrants adapting their profile for the Australian market",
      "IT, engineering, healthcare, accounting and project professionals",
      "FIFO and technical workers wanting clearer career presentation",
      "Job seekers whose resume is stronger than their LinkedIn profile",
    ],
  },
  benefits: {
    eyebrow: "Benefits",
    title: "How LinkedIn profile optimisation supports your career",
    text: "A stronger LinkedIn profile helps reinforce your resume and gives employers a clearer picture of your professional value.",
    items: [
      {
        title: "Stronger first impression",
        text: "Your headline, summary and experience sections are improved so visitors can quickly understand your professional identity.",
        icon: BadgeCheck,
      },
      {
        title: "Better keyword relevance",
        text: "Profile language is aligned with target roles, industries and recruiter search behaviour without turning the content into keyword stuffing.",
        icon: SearchCheck,
      },
      {
        title: "Clearer career direction",
        text: "Your profile can explain what you do now, what you have achieved and what types of opportunities are relevant next.",
        icon: Target,
      },
      {
        title: "Resume alignment",
        text: "Your LinkedIn profile and resume can support the same message while using the right tone for each platform.",
        icon: FileCheck,
      },
      {
        title: "More professional confidence",
        text: "A polished profile makes it easier to network, apply, respond to recruiters and share your background with confidence.",
        icon: ShieldCheck,
      },
      {
        title: "Practical profile guidance",
        text: "You receive written content and recommendations you can add to your profile while keeping full control of your account.",
        icon: UserCheck,
      },
    ],
  },
  inclusions: {
    eyebrow: "Inclusions",
    title: "What is included in LinkedIn profile optimisation",
    text: "LinkedIn optimisation focuses on the sections that influence clarity, search relevance and professional credibility.",
    items: [
      "Review of current LinkedIn profile and resume",
      "Target role and career direction alignment",
      "Professional LinkedIn headline rewrite",
      "About section writing or rewriting",
      "Experience section content guidance",
      "Keyword and skills recommendations",
      "Profile tone and positioning improvements",
      "Australian spelling and professional language",
      "Guidance for adding the content to your LinkedIn profile",
      "Optional alignment with resume and cover letter packages",
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How the LinkedIn profile optimisation process works",
    text: "The process is designed to improve your profile content while keeping your account secure and under your control.",
    steps: [
      {
        title: "Share your profile and goals",
        text: "Send your LinkedIn profile URL, resume and the type of roles or opportunities you want to target.",
        icon: Upload,
      },
      {
        title: "Profile review",
        text: "We assess your headline, about section, experience content, skills, keywords and alignment with your resume.",
        icon: SearchCheck,
      },
      {
        title: "Positioning strategy",
        text: "Your profile message is planned around your current strengths, future direction and Australian market expectations.",
        icon: Target,
      },
      {
        title: "Content writing",
        text: "Key sections are rewritten in a professional tone that is clear, credible and suited to LinkedIn.",
        icon: PenLine,
      },
      {
        title: "Review and refine",
        text: "You review the content for accuracy and provide any corrections before using it on your profile.",
        icon: FileCheck,
      },
      {
        title: "Implementation guidance",
        text: "You receive profile content and practical instructions for updating LinkedIn securely yourself.",
        icon: BriefcaseBusiness,
      },
    ],
  },
  extraSection: {
    eyebrow: "Profile sections",
    title: "LinkedIn sections that usually need the most work",
    text: "Small improvements across key sections can make the profile feel much more complete and aligned.",
    items: [
      {
        title: "Headline",
        text: "A clear headline should explain your role, expertise or target direction more effectively than a default job title.",
        icon: Linkedin,
      },
      {
        title: "About",
        text: "The About section should give a concise professional overview, not a dense resume copy-and-paste.",
        icon: Linkedin,
      },
      {
        title: "Experience",
        text: "Experience entries should show responsibilities, achievements and relevance without becoming too long.",
        icon: Linkedin,
      },
      {
        title: "Skills",
        text: "Skills should reflect the work you want to be found for, not just a broad list of unrelated capabilities.",
        icon: Linkedin,
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing preview",
    title: "LinkedIn pricing depends on profile depth and package needs",
    text: "Pricing depends on whether you need a standalone LinkedIn rewrite, resume and LinkedIn alignment, or a full application package. A review helps identify the right level of support.",
    cardTitle: "Start with a profile and resume review",
    cardText:
      "Send your current resume and LinkedIn profile URL. Ramsey Resume can recommend whether LinkedIn optimisation alone is enough or whether your resume also needs improvement.",
  },
  faqs,
  relatedServices: [
    {
      title: "Resume Writing",
      text: "Create a stronger resume that aligns with your LinkedIn profile and target roles.",
      href: "/resume-writing/",
    },
    {
      title: "ATS Resume Writing",
      text: "Build a clean, keyword-aligned resume for online applications and recruiter systems.",
      href: "/ats-resume-writing/",
    },
    {
      title: "Cover Letter Writing",
      text: "Support specific applications with a tailored cover letter that matches your positioning.",
      href: "/cover-letter-writing/",
    },
    {
      title: "Executive Resume Writing",
      text: "Develop stronger senior positioning across resume and LinkedIn for leadership roles.",
      href: "/executive-resume-writing/",
    },
  ],
  finalCta: {
    eyebrow: "LinkedIn profile review",
    title: "Need your LinkedIn profile to match your next career move?",
    text: "Send your resume, LinkedIn URL and target role. Ramsey Resume can review your profile and recommend the strongest next step.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LinkedIn Profile Optimisation Australia",
  serviceType: "LinkedIn Profile Optimisation",
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
    "LinkedIn profile optimisation for Australian professionals, including headline writing, About section rewriting, keyword alignment and resume consistency.",
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
      name: "LinkedIn Profile Optimisation",
      item: `${siteConfig.url}/linkedin-profile-optimisation/`,
    },
  ],
};

export default function LinkedinProfileOptimisationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CommercialServicePage content={content} />
    </>
  );
}
