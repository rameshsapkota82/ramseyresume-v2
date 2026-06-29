import type { InternalLink } from "@/types/content";

export type SitePage = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  status: "production" | "coming-soon";
  links: InternalLink[];
};

const defaultLinks: InternalLink[] = [
  { label: "Get a Free Resume Review", href: "/get-a-quote/" },
  { label: "Resume Writing", href: "/resume-writing/" },
  { label: "ATS Resume Writing", href: "/ats-resume-writing/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Contact", href: "/contact/" },
];

function page(input: Omit<SitePage, "status" | "links"> & Partial<Pick<SitePage, "status" | "links">>): SitePage {
  return {
    status: "coming-soon",
    links: defaultLinks,
    ...input,
  };
}

export const sitePages: SitePage[] = [
  page({
    slug: "resume-writing",
    title: "Resume Writing",
    seoTitle: "Resume Writing Services Australia | Ramsey Resume",
    description:
      "Professional resume writing services for Australian job seekers. Perth-based support available Australia-wide.",
    eyebrow: "Resume Services",
    h1: "Resume Writing Services Australia",
    status: "production",
    intro:
      "Professional resume writing services for Australian job seekers who need clearer positioning, stronger achievements, ATS-aware structure and practical application documents.",
    links: [
      { label: "ATS Resume Writing", href: "/ats-resume-writing/" },
      { label: "Cover Letter Writing", href: "/cover-letter-writing/" },
      { label: "LinkedIn Profile Optimisation", href: "/linkedin-profile-optimisation/" },
      { label: "Resume Writer Perth", href: "/resume-writer-perth/" },
    ],
  }),
  page({
    slug: "ats-resume-writing",
    title: "ATS Resume Writing",
    seoTitle: "ATS Resume Writing Service Australia | Ramsey Resume",
    description:
      "ATS-friendly resume writing for Australian job applications, with clean formatting and role-aligned keywords.",
    status: "production",
    eyebrow: "Resume Services",
    h1: "ATS Resume Writing Service",
    intro:
      "ATS resume writing for Australian job seekers who need clean formatting, keyword alignment and recruiter-friendly structure for online applications.",
  }),
  page({
    slug: "cover-letter-writing",
    title: "Cover Letter Writing",
    seoTitle: "Cover Letter Writing Service Australia | Ramsey Resume",
    description:
      "Tailored cover letter writing support for Australian job seekers applying for professional, government and industry roles.",
    status: "production",
    eyebrow: "Career Services",
    h1: "Cover Letter Writing Service",
    intro:
      "Professional cover letter writing for Australian job seekers who need a tailored, role-specific application letter that supports their resume.",
  }),
  page({
    slug: "selection-criteria-writing",
    title: "Selection Criteria Writing",
    seoTitle: "Selection Criteria Writing Service Australia | Ramsey Resume",
    description:
      "Selection criteria writing support for Australian government and structured job applications.",
    status: "production",
    eyebrow: "Career Services",
    h1: "Selection Criteria Writing Service",
    intro:
      "Selection criteria writing for Australian government and structured applications requiring clear, evidence-based responses.",
    links: [
      { label: "Government Resume Writing", href: "/government-resume-writing/" },
      { label: "Cover Letter Writing", href: "/cover-letter-writing/" },
      { label: "Selection Criteria Examples", href: "/selection-criteria-examples/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
  page({
    slug: "linkedin-profile-optimisation",
    title: "LinkedIn Profile Optimisation",
    seoTitle: "LinkedIn Profile Optimisation Australia | Ramsey Resume",
    description:
      "LinkedIn profile optimisation for Australian professionals who want stronger recruiter visibility and career positioning.",
    status: "production",
    eyebrow: "Career Services",
    h1: "LinkedIn Profile Optimisation",
    intro:
      "LinkedIn profile optimisation for Australian professionals who want clearer positioning, stronger recruiter relevance and better alignment with their resume.",
  }),
  page({
    slug: "career-coaching",
    title: "Career Coaching",
    seoTitle: "Career Coaching for Australian Job Seekers | Ramsey Resume",
    description:
      "Career coaching support for Australian job seekers planning applications, transitions and interview preparation.",
    eyebrow: "Career Services",
    h1: "Career Coaching",
    intro:
      "This coming-soon page will outline practical career coaching support for job seekers who need clarity, confidence and application strategy.",
  }),
  page({
    slug: "interview-preparation",
    title: "Interview Preparation",
    seoTitle: "Interview Preparation Australia | Ramsey Resume",
    description:
      "Interview preparation resources and coaching for Australian job seekers preparing for stronger interviews.",
    eyebrow: "Career Services",
    h1: "Interview Preparation",
    intro:
      "This page will support job seekers preparing for interviews, behavioural questions and role-specific conversations.",
  }),
  page({
    slug: "pricing",
    title: "Pricing",
    seoTitle: "Resume Writing Pricing Australia | Ramsey Resume",
    description:
      "View resume writing package information and request a quote for Australian resume, cover letter and LinkedIn support.",
    eyebrow: "Pricing",
    h1: "Resume Writing Pricing",
    intro:
      "This page will present package options for resumes, cover letters, LinkedIn profiles, selection criteria and application support.",
    links: [
      { label: "Request My Quote", href: "/get-a-quote/" },
      { label: "Resume Writing", href: "/resume-writing/" },
      { label: "Cover Letter Writing", href: "/cover-letter-writing/" },
      { label: "Contact", href: "/contact/" },
    ],
  }),
  page({
    slug: "resume-examples",
    title: "Resume Examples",
    seoTitle: "Resume Examples Australia | Ramsey Resume",
    description:
      "Australian resume examples and before-and-after resume writing samples for job seekers.",
    eyebrow: "Resources",
    h1: "Resume Examples",
    intro:
      "This resource page will show anonymised and fictional resume examples that demonstrate stronger structure, wording and role targeting.",
  }),
  page({
    slug: "cover-letter-examples",
    title: "Cover Letter Examples",
    seoTitle: "Cover Letter Examples Australia | Ramsey Resume",
    description: "Australian cover letter examples for job seekers applying across industries.",
    eyebrow: "Resources",
    h1: "Cover Letter Examples",
    intro:
      "This page will provide Australian cover letter examples and guidance for tailoring applications to specific roles.",
  }),
  page({
    slug: "selection-criteria-examples",
    title: "Selection Criteria Examples",
    seoTitle: "Selection Criteria Examples Australia | Ramsey Resume",
    description:
      "Selection criteria examples for Australian government job applications and structured responses.",
    eyebrow: "Resources",
    h1: "Selection Criteria Examples",
    intro:
      "This page will provide selection criteria examples and explain how evidence-based responses can be structured for government roles.",
  }),
  page({
    slug: "resume-templates",
    title: "Resume Templates",
    seoTitle: "Resume Templates Australia | Ramsey Resume",
    description:
      "Australian resume templates and guidance for job seekers who want clean, practical application documents.",
    eyebrow: "Resources",
    h1: "Resume Templates",
    intro:
      "This page will offer practical resume template guidance for Australian job seekers while explaining when professional writing may be more suitable.",
  }),
  page({
    slug: "ats-resume-checker",
    title: "ATS Resume Checker",
    seoTitle: "ATS Resume Checker Australia | Ramsey Resume",
    description:
      "Future ATS resume checker for Australian job seekers wanting to assess resume structure and role alignment.",
    eyebrow: "Future Tool",
    h1: "ATS Resume Checker",
    intro:
      "This future tool page will capture interest for an ATS resume checker that helps job seekers review structure, keywords and formatting.",
    links: [
      { label: "ATS Resume Writing", href: "/ats-resume-writing/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
      { label: "Resume Writing", href: "/resume-writing/" },
      { label: "Career Advice", href: "/career-advice/" },
    ],
  }),
  page({
    slug: "salary-guides",
    title: "Salary Guides",
    seoTitle: "Salary Guides Australia | Ramsey Resume",
    description: "Future salary guide resources for Australian job seekers and career planning.",
    eyebrow: "Resources",
    h1: "Salary Guides",
    intro:
      "This resource hub will provide future salary guide content for Australian job seekers researching career options.",
  }),
  page({
    slug: "career-advice",
    title: "Career Advice",
    seoTitle: "Career Advice for Australian Job Seekers | Ramsey Resume",
    description:
      "Career advice for Australian job seekers, including resume, cover letter, ATS and job application guidance.",
    eyebrow: "Resources",
    h1: "Career Advice",
    intro:
      "This hub will organise resume, cover letter, ATS, interview and job application guidance for Australian job seekers.",
  }),
  page({
    slug: "case-studies",
    title: "Case Studies",
    seoTitle: "Resume Writing Case Studies | Ramsey Resume",
    description:
      "Future anonymised resume writing case studies showing application challenges, improvements and outcomes.",
    eyebrow: "Trust",
    h1: "Case Studies",
    intro:
      "This trust page will feature genuine or anonymised case studies only when outcomes and permissions can be verified.",
  }),
  page({
    slug: "reviews",
    title: "Reviews",
    seoTitle: "Ramsey Resume Reviews | Resume Writing Australia",
    description:
      "Read genuine Ramsey Resume reviews and client feedback from Australian job seekers.",
    eyebrow: "Trust",
    h1: "Reviews",
    intro:
      "This page will display genuine client reviews and Google review content once verified. Placeholder review claims should not be published as real proof.",
  }),
  page({
    slug: "our-process",
    title: "Our Process",
    seoTitle: "Our Resume Writing Process | Ramsey Resume",
    description:
      "Learn how Ramsey Resume reviews, writes and delivers professional career documents for Australian job seekers.",
    eyebrow: "Trust",
    h1: "Our Resume Writing Process",
    intro:
      "This page will explain the step-by-step process from free resume review through strategy, writing, revisions and final delivery.",
  }),
  page({
    slug: "about",
    title: "About",
    seoTitle: "About Ramsey Resume | Professional Resume Writer Australia",
    description:
      "Learn about Ramsey Resume and professional resume writing support for Perth, Western Australia and Australia-wide clients.",
    eyebrow: "About",
    h1: "About Ramsey Resume",
    intro:
      "This page will introduce the Ramsey Resume brand, values, methodology and experience supporting Australian job seekers.",
  }),
  page({
    slug: "faq",
    title: "FAQ",
    seoTitle: "Resume Writing FAQ Australia | Ramsey Resume",
    description:
      "Answers to common questions about resume writing, ATS resumes, cover letters, selection criteria and pricing.",
    eyebrow: "FAQ",
    h1: "Frequently Asked Questions",
    intro:
      "This page will answer common questions about Ramsey Resume services, turnaround, pricing, revisions and application support.",
  }),
  page({
    slug: "blog",
    title: "Blog",
    seoTitle: "Resume Writing Blog Australia | Ramsey Resume",
    description:
      "Resume writing, ATS, cover letter and job application advice for Australian job seekers.",
    eyebrow: "Blog",
    h1: "Resume Writing Blog",
    intro:
      "This blog index will publish useful career advice for Australian job seekers and link naturally to related service pages.",
  }),
  page({
    slug: "contact",
    title: "Contact",
    seoTitle: "Contact Ramsey Resume | Resume Writer Perth",
    description:
      "Contact Ramsey Resume for professional resume writing support in Perth and Australia-wide.",
    eyebrow: "Contact",
    h1: "Contact Ramsey Resume",
    intro:
      "Use this page to contact Ramsey Resume, ask a question, request support or choose the right application service.",
    links: [
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
      { label: "WhatsApp Ramsey Resume", href: "https://wa.me/61438782206" },
      { label: "Pricing", href: "/pricing/" },
      { label: "FAQ", href: "/faq/" },
    ],
  }),
  page({
    slug: "get-a-quote",
    title: "Get a Quote",
    seoTitle: "Get a Resume Writing Quote | Ramsey Resume",
    description:
      "Request a free resume review or quote for resume writing, cover letters, LinkedIn profiles and selection criteria.",
    eyebrow: "Free Resume Review",
    h1: "Get a Free Resume Review",
    intro:
      "This page will become the primary lead form for free resume reviews, quote requests and application support enquiries.",
    links: [
      { label: "Resume Writing", href: "/resume-writing/" },
      { label: "ATS Resume Writing", href: "/ats-resume-writing/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "Contact", href: "/contact/" },
    ],
  }),
  page({
    slug: "resume-writer-perth",
    title: "Resume Writer Perth",
    seoTitle: "Resume Writer Perth | Professional Resume Writing Services",
    description:
      "Perth resume writer supporting Western Australian job seekers with professional resumes and career documents.",
    eyebrow: "Local SEO",
    h1: "Resume Writer Perth",
    intro:
      "This local page will target Perth job seekers looking for professional resume writing support from a Western Australia-based service.",
  }),
  page({
    slug: "resume-writer-western-australia",
    title: "Resume Writer Western Australia",
    seoTitle: "Resume Writer Western Australia | Ramsey Resume",
    description:
      "Professional resume writing support for job seekers across Western Australia.",
    eyebrow: "Local SEO",
    h1: "Resume Writer Western Australia",
    intro:
      "This local page will support job seekers across Western Australia, including Perth, regional WA, FIFO and remote applicants.",
  }),
  page({
    slug: "resume-writing-australia",
    title: "Resume Writing Australia",
    seoTitle: "Resume Writing Australia | Professional Resume Service",
    description:
      "Professional resume writing services for Australian job seekers across industries and career levels.",
    eyebrow: "National SEO",
    h1: "Resume Writing Australia",
    intro:
      "This national page will target job seekers across Australia who need professional resume writing and application support.",
  }),
  page({
    slug: "executive-resume-writing",
    title: "Executive Resume Writing",
    seoTitle: "Executive Resume Writing Australia | Ramsey Resume",
    description:
      "Executive resume writing support for Australian managers, leaders and senior professionals.",
    eyebrow: "Specialist Resume Services",
    h1: "Executive Resume Writing",
    intro:
      "This specialist page will focus on leadership positioning, executive achievements, commercial impact and senior career narratives.",
  }),
  page({
    slug: "government-resume-writing",
    title: "Government Resume Writing",
    seoTitle: "Government Resume Writing Australia | Ramsey Resume",
    description:
      "Government resume and application writing support for Australian public sector roles.",
    status: "production",
    eyebrow: "Specialist Resume Services",
    h1: "Government Resume Writing",
    intro:
      "Government resume writing for Australian public sector applicants who need targeted resumes, cover letters and selection criteria alignment.",
  }),
  page({
    slug: "graduate-resume-writing",
    title: "Graduate Resume Writing",
    seoTitle: "Graduate Resume Writing Australia | Ramsey Resume",
    description:
      "Graduate resume writing support for Australian students, graduates and early-career job seekers.",
    eyebrow: "Specialist Resume Services",
    h1: "Graduate Resume Writing",
    intro:
      "This specialist page will help graduates present study, placements, part-time work, projects and early experience with confidence.",
  }),
  page({
    slug: "fifo-resume-writing",
    title: "FIFO Resume Writing",
    seoTitle: "FIFO Resume Writing Australia | Ramsey Resume",
    description:
      "FIFO and mining resume writing support for Western Australian and Australian resources job seekers.",
    eyebrow: "Specialist Resume Services",
    h1: "FIFO Resume Writing",
    intro:
      "This specialist page will focus on FIFO, mining, resources, shutdown, trades and site-based applications.",
  }),
  page({
    slug: "nursing-resume-writing",
    title: "Nursing Resume Writing",
    seoTitle: "Nursing Resume Writing Australia | Ramsey Resume",
    description:
      "Nursing and healthcare resume writing support for Australian job seekers.",
    eyebrow: "Industries",
    h1: "Nursing Resume Writing",
    intro:
      "This industry page will support nurses and healthcare applicants who need resumes showing care, compliance, capability and experience.",
  }),
  page({
    slug: "teacher-resume-writing",
    title: "Teacher Resume Writing",
    seoTitle: "Teacher Resume Writing Australia | Ramsey Resume",
    description:
      "Teacher resume writing support for Australian education and school applications.",
    eyebrow: "Industries",
    h1: "Teacher Resume Writing",
    intro:
      "This industry page will support teachers, education assistants, trainers and school leaders applying for Australian education roles.",
  }),
  page({
    slug: "it-resume-writing",
    title: "IT Resume Writing",
    seoTitle: "IT Resume Writing Australia | Ramsey Resume",
    description:
      "IT resume writing support for Australian technology professionals and job seekers.",
    eyebrow: "Industries",
    h1: "IT Resume Writing",
    intro:
      "This industry page will support IT applicants across software, cybersecurity, data, systems, support and technology project roles.",
  }),
  page({
    slug: "accountant-resume-writing",
    title: "Accountant Resume Writing",
    seoTitle: "Accountant Resume Writing Australia | Ramsey Resume",
    description:
      "Accountant and finance resume writing support for Australian job seekers.",
    eyebrow: "Industries",
    h1: "Accountant Resume Writing",
    intro:
      "This industry page will support accountants, bookkeepers, payroll officers and finance professionals.",
  }),
  page({
    slug: "engineer-resume-writing",
    title: "Engineer Resume Writing",
    seoTitle: "Engineer Resume Writing Australia | Ramsey Resume",
    description:
      "Engineer resume writing support for Australian civil, mechanical, electrical and project engineers.",
    eyebrow: "Industries",
    h1: "Engineer Resume Writing",
    intro:
      "This industry page will support engineering applicants who need to show technical capability, project impact and site experience.",
  }),
  page({
    slug: "project-manager-resume-writing",
    title: "Project Manager Resume Writing",
    seoTitle: "Project Manager Resume Writing Australia | Ramsey Resume",
    description:
      "Project manager resume writing support for Australian delivery, governance and leadership roles.",
    eyebrow: "Industries",
    h1: "Project Manager Resume Writing",
    intro:
      "This industry page will support project managers who need to show delivery outcomes, stakeholder management, risk, budgets and governance.",
  }),
  page({
    slug: "electrician-resume-writing",
    title: "Electrician Resume Writing",
    seoTitle: "Electrician Resume Writing Australia | Ramsey Resume",
    description:
      "Electrician and trades resume writing support for Australian job seekers.",
    eyebrow: "Industries",
    h1: "Electrician Resume Writing",
    intro:
      "This industry page will support electricians and tradespeople who need to show licences, safety, technical skills and site experience.",
  }),
  page({
    slug: "skilled-migrant-resume-writing",
    title: "Skilled Migrant Resume Writing",
    seoTitle: "Skilled Migrant Resume Writing Australia | Ramsey Resume",
    description:
      "Australian-format resume writing support for skilled migrants entering the Australian job market.",
    eyebrow: "Industries",
    h1: "Skilled Migrant Resume Writing",
    intro:
      "This industry page will help skilled migrants translate overseas experience into an Australian resume format employers understand.",
  }),
  page({
    slug: "privacy-policy",
    title: "Privacy Policy",
    seoTitle: "Privacy Policy | Ramsey Resume",
    description: "Privacy policy for Ramsey Resume website visitors and service enquiries.",
    eyebrow: "Legal",
    h1: "Privacy Policy",
    intro:
      "This legal page will outline how Ramsey Resume handles enquiry details, resume uploads and personal information.",
    links: [
      { label: "Contact", href: "/contact/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
      { label: "Terms of Service", href: "/terms-of-service/" },
    ],
  }),
  page({
    slug: "terms-of-service",
    title: "Terms of Service",
    seoTitle: "Terms of Service | Ramsey Resume",
    description: "Terms of service for Ramsey Resume website visitors and clients.",
    eyebrow: "Legal",
    h1: "Terms of Service",
    intro:
      "This legal page will outline service terms, quote conditions, revision expectations and website use terms.",
    links: [
      { label: "Contact", href: "/contact/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
];

export const pageSlugs = sitePages.map((item) => item.slug);

export function getPageBySlug(slug: string) {
  return sitePages.find((pageItem) => pageItem.slug === slug);
}
