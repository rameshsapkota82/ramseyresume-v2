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
  primaryKeyword?: string;
  secondaryKeywords?: string[];
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
    status: "production",
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
      "One-to-one career coaching for Australian job seekers planning applications, career transitions and interview preparation. Perth-based, Australia-wide.",
    eyebrow: "Career Services",
    h1: "Career Coaching",
    primaryKeyword: "career coaching Australia",
    secondaryKeywords: ["career coach Perth", "job search coaching Australia", "career transition support"],
    intro:
      "Practical career coaching support for job seekers who need clarity, confidence and application strategy. This page helps you understand how one-to-one career support can fit alongside a stronger resume, cover letter and LinkedIn profile.",
    links: [
      { label: "Interview Preparation", href: "/interview-preparation/" },
      { label: "Resume Writing", href: "/resume-writing/" },
      { label: "LinkedIn Profile Optimisation", href: "/linkedin-profile-optimisation/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
  page({
    slug: "interview-preparation",
    title: "Interview Preparation",
    seoTitle: "Interview Preparation Australia | Ramsey Resume",
    description:
      "Interview preparation resources and coaching for Australian job seekers preparing for behavioural and role-specific interviews. Perth-based, Australia-wide.",
    eyebrow: "Career Services",
    h1: "Interview Preparation",
    primaryKeyword: "interview preparation Australia",
    secondaryKeywords: ["interview coaching Perth", "job interview tips Australia", "behavioural interview preparation"],
    intro:
      "Interview preparation support for job seekers preparing for behavioural questions, role-specific conversations and stronger employer communication. The page covers how to prepare for common interview formats and present your experience with confidence.",
    links: [
      { label: "Career Coaching", href: "/career-coaching/" },
      { label: "Resume Writing", href: "/resume-writing/" },
      { label: "Cover Letter Writing", href: "/cover-letter-writing/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
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
      "Package options for resumes, cover letters, LinkedIn profiles, selection criteria and application support. The pricing page should give visitors a simple way to compare services and request the right support.",
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
    seoTitle: "Resume Examples Australia | Ramsey Resume Samples",
    description:
      "Australian resume examples and before-and-after resume writing samples for job seekers across industries and career levels. Perth-based, Australia-wide.",
    eyebrow: "Resources",
    h1: "Resume Examples",
    primaryKeyword: "resume examples Australia",
    secondaryKeywords: ["Australian resume format", "before and after resume", "resume sample Perth"],
    intro:
      "Australian resume examples and before-and-after writing samples for job seekers who want to see the difference stronger structure, wording and role targeting can make. The page is designed as a practical reference point rather than a design showcase.",
    links: [
      { label: "Resume Writing", href: "/resume-writing/" },
      { label: "ATS Resume Writing", href: "/ats-resume-writing/" },
      { label: "Cover Letter Examples", href: "/cover-letter-examples/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
  page({
    slug: "cover-letter-examples",
    title: "Cover Letter Examples",
    seoTitle: "Cover Letter Examples Australia | Ramsey Resume",
    description:
      "Australian cover letter examples and structure guidance for job seekers applying across industries and career levels. Perth-based, Australia-wide.",
    eyebrow: "Resources",
    h1: "Cover Letter Examples",
    primaryKeyword: "cover letter examples Australia",
    secondaryKeywords: ["Australian cover letter format", "cover letter sample Perth"],
    intro:
      "Australian cover letter examples and practical guidance for tailoring applications to specific roles. The page is built to help job seekers understand structure, tone and how to connect their experience to an employer’s needs.",
    links: [
      { label: "Cover Letter Writing", href: "/cover-letter-writing/" },
      { label: "Resume Examples", href: "/resume-examples/" },
      { label: "Selection Criteria Examples", href: "/selection-criteria-examples/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
  page({
    slug: "selection-criteria-examples",
    title: "Selection Criteria Examples",
    seoTitle: "Selection Criteria Examples Australia | Ramsey Resume",
    description:
      "Selection criteria examples for Australian government job applications, including STAR-format structured responses. Perth-based, Australia-wide.",
    eyebrow: "Resources",
    h1: "Selection Criteria Examples",
    primaryKeyword: "selection criteria examples Australia",
    secondaryKeywords: ["STAR method examples", "WA government selection criteria", "APS selection criteria examples"],
    intro:
      "Selection criteria examples and evidence-based guidance for Australian government job applications. The page helps applicants understand how to structure answers with clear examples, outcomes and role relevance.",
    links: [
      { label: "Selection Criteria Writing", href: "/selection-criteria-writing/" },
      { label: "Government Resume Writing", href: "/government-resume-writing/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
  page({
    slug: "resume-templates",
    title: "Resume Templates",
    seoTitle: "Resume Templates Australia | Ramsey Resume Guide",
    description:
      "Australian resume templates and formatting guidance for job seekers who want clean, ATS-friendly application documents. Perth-based, Australia-wide.",
    eyebrow: "Resources",
    h1: "Resume Templates",
    primaryKeyword: "resume templates Australia",
    secondaryKeywords: ["ATS-friendly resume template", "professional resume format Australia"],
    intro:
      "Practical resume template guidance for Australian job seekers who want a clean starting point. The page also explains when a template is enough and when a professionally written resume is the better choice.",
    links: [
      { label: "Resume Writing", href: "/resume-writing/" },
      { label: "ATS Resume Writing", href: "/ats-resume-writing/" },
      { label: "Resume Examples", href: "/resume-examples/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
  page({
    slug: "ats-resume-checker",
    title: "ATS Resume Checker",
    seoTitle: "ATS Resume Checker Australia | Ramsey Resume Review",
    description:
      "ATS resume checker for Australian job seekers wanting to assess resume structure, keywords and role alignment before applying. Perth-based, Australia-wide.",
    eyebrow: "Resources",
    h1: "ATS Resume Checker",
    primaryKeyword: "ATS resume checker Australia",
    secondaryKeywords: ["ATS resume scan", "resume keyword checker", "applicant tracking system resume"],
    intro:
      "An ATS resume checker landing page for job seekers who want to review structure, keywords and formatting before applying. The page can route people toward a manual review or an ATS checker tool.",
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
    seoTitle: "Salary Guides Australia | Ramsey Resume Career",
    description:
      "Salary guide resources for Australian job seekers researching pay expectations, negotiation and career planning. Perth-based, Australia-wide.",
    eyebrow: "Resources",
    h1: "Salary Guides",
    primaryKeyword: "salary guide Australia",
    secondaryKeywords: ["salary negotiation Australia", "Perth salary guide", "average salary by industry Australia"],
    intro:
      "Salary guide resources for Australian job seekers researching career options, pay expectations and market positioning. The page can expand into sector-specific salary advice when you are ready to publish it.",
    links: [
      { label: "Career Advice", href: "/career-advice/" },
      { label: "Resume Writing", href: "/resume-writing/" },
      { label: "Interview Preparation", href: "/interview-preparation/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
  page({
    slug: "career-advice",
    title: "Career Advice",
    seoTitle: "Career Advice for Australian Job Seekers | Ramsey Resume",
    description:
      "Career advice for Australian job seekers, including resume, cover letter, ATS, interview and job application guidance. Perth-based, Australia-wide.",
    eyebrow: "Resources",
    h1: "Career Advice",
    primaryKeyword: "career advice Australia",
    secondaryKeywords: ["job search advice Australia", "job application tips Perth"],
    intro:
      "Career advice for Australian job seekers covering resumes, cover letters, ATS, interview preparation and job application strategy. The page acts as a central hub for practical guidance and related service links.",
    links: [
      { label: "Resume Writing", href: "/resume-writing/" },
      { label: "ATS Resume Writing", href: "/ats-resume-writing/" },
      { label: "Interview Preparation", href: "/interview-preparation/" },
      { label: "FAQ", href: "/faq/" },
    ],
  }),
  page({
    slug: "case-studies",
    title: "Case Studies",
    seoTitle: "Resume Writing Case Studies | Ramsey Resume Australia",
    description:
      "See how Ramsey Resume approaches real application challenges, from unclear positioning to ATS formatting and career changes. Perth-based, Australia-wide.",
    eyebrow: "Trust",
    h1: "Case Studies",
    primaryKeyword: "resume writing case studies",
    secondaryKeywords: ["resume writing results Australia", "career change resume examples"],
    intro:
      "A look at the kinds of application challenges Ramsey Resume helps job seekers work through, from unclear positioning and thin achievements to ATS formatting and career changes. Verified, client-approved case studies are added here as they become available.",
    links: [
      { label: "Reviews", href: "/reviews/" },
      { label: "Our Process", href: "/our-process/" },
      { label: "About", href: "/about/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
  page({
    slug: "reviews",
    title: "Reviews",
    seoTitle: "Ramsey Resume Reviews | Resume Writing Australia",
    description:
      "Read genuine Ramsey Resume reviews and client feedback from Australian job seekers across Perth and Australia-wide. Perth-based, Australia-wide.",
    eyebrow: "Trust",
    h1: "Reviews",
    primaryKeyword: "Ramsey Resume reviews",
    secondaryKeywords: ["resume writer Perth reviews", "resume writing testimonials Australia"],
    intro:
      "Genuine client reviews and feedback from Australian job seekers who have used Ramsey Resume's resume, cover letter and LinkedIn writing services. Verified Google reviews are linked here as they come in — if you're a client, we'd welcome your feedback.",
    links: [
      { label: "Case Studies", href: "/case-studies/" },
      { label: "About", href: "/about/" },
      { label: "Our Process", href: "/our-process/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
  page({
    slug: "our-process",
    title: "Our Process",
    seoTitle: "Our Resume Writing Process | Ramsey Resume Australia",
    description:
      "See how Ramsey Resume reviews, writes and delivers professional resumes, cover letters and career documents step by step. Perth-based, Australia-wide.",
    eyebrow: "Trust",
    h1: "Our Resume Writing Process",
    primaryKeyword: "resume writing process",
    secondaryKeywords: ["how resume writing works Australia", "resume writer Perth process"],
    intro:
      "A clear step-by-step process from free resume review through strategy, writing, revisions and final delivery, so you know exactly what happens after you make an enquiry.",
    links: [
      { label: "Pricing", href: "/pricing/" },
      { label: "About", href: "/about/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
  page({
    slug: "about",
    title: "About",
    seoTitle: "About Ramsey Resume | Professional Resume Writer Australia",
    description:
      "Learn about Ramsey Resume and professional resume writing support for Perth, Western Australia and Australia-wide clients. Perth-based, Australia-wide.",
    eyebrow: "About",
    h1: "About Ramsey Resume",
    primaryKeyword: "Ramsey Resume Perth",
    secondaryKeywords: ["professional resume writer Australia", "about Ramsey Resume"],
    intro:
      "Ramsey Resume is a Perth-based resume writing service supporting job seekers across Western Australia, Australia-wide and in New Zealand, with a practical, client-first approach to resumes, cover letters, LinkedIn profiles and selection criteria.",
    links: [
      { label: "Our Process", href: "/our-process/" },
      { label: "Reviews", href: "/reviews/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "Contact", href: "/contact/" },
    ],
  }),
  page({
    slug: "faq",
    title: "FAQ",
    seoTitle: "Resume Writing FAQ Australia | Ramsey Resume Help",
    description:
      "Answers to common questions about resume writing, ATS resumes, cover letters, selection criteria, pricing and turnaround. Perth-based, Australia-wide.",
    eyebrow: "FAQ",
    h1: "Frequently Asked Questions",
    primaryKeyword: "resume writing FAQ",
    secondaryKeywords: ["resume writer Perth questions", "resume writing pricing Australia"],
    intro:
      "Answers to common questions about Ramsey Resume services, turnaround, pricing, revisions and application support. The page is intended to reduce friction before people request a review or quote.",
    links: [
      { label: "Pricing", href: "/pricing/" },
      { label: "Our Process", href: "/our-process/" },
      { label: "Contact", href: "/contact/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
  page({
    slug: "blog",
    title: "Blog",
    seoTitle: "Resume Writing Blog Australia | Ramsey Resume",
    description:
      "Resume writing, ATS, cover letter and job application advice for Australian job seekers, updated regularly. Perth-based, Australia-wide.",
    eyebrow: "Blog",
    h1: "Resume Writing Blog",
    primaryKeyword: "resume writing blog Australia",
    secondaryKeywords: ["job application tips", "resume advice Australia"],
    intro:
      "Career advice for Australian job seekers, including resume writing, ATS, cover letter and job application guidance. Use this page as the home base for practical, SEO-focused articles and downloadable resources.",
    links: [
      { label: "Career Advice", href: "/career-advice/" },
      { label: "Resume Examples", href: "/resume-examples/" },
      { label: "Interview Preparation", href: "/interview-preparation/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
    ],
  }),
  page({
    slug: "contact",
    title: "Contact",
    seoTitle: "Contact Ramsey Resume | Resume Writer Perth",
    description:
      "Contact Ramsey Resume for professional resume writing support in Perth and Australia-wide.",
    status: "production",
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
    status: "production",
    eyebrow: "Free Resume Review",
    h1: "Get a Free Resume Review",
    intro:
      "Request a free resume review or quote for resume writing, cover letters, LinkedIn profiles and selection criteria.",
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
    status: "production",
    eyebrow: "Local SEO",
    h1: "Resume Writer Perth",
    intro:
      "Perth resume writer helping WA job seekers with professional resumes, ATS resumes, cover letters, LinkedIn profiles and government applications.",
  }),
  page({
    slug: "resume-writer-western-australia",
    title: "Resume Writer Western Australia",
    seoTitle: "Resume Writer Western Australia | Ramsey Resume",
    description:
      "Professional resume writing support for job seekers across Western Australia.",
    status: "production",
    eyebrow: "Local SEO",
    h1: "Resume Writer Western Australia",
    intro:
      "Resume writing support for Western Australian job seekers, including Perth, regional WA, FIFO and remote applicants.",
  }),
  page({
    slug: "resume-writing-australia",
    title: "Resume Writing Australia",
    seoTitle: "Resume Writing Australia | Professional Resume Service",
    description:
      "Professional resume writing services for Australian job seekers across industries and career levels.",
    status: "production",
    eyebrow: "National SEO",
    h1: "Resume Writing Australia",
    intro:
      "Professional resume writing services for Australian job seekers across industries, locations and career levels.",
  }),
  page({
    slug: "executive-resume-writing",
    title: "Executive Resume Writing",
    seoTitle: "Executive Resume Writing Australia | Ramsey Resume",
    description:
      "Executive resume writing support for Australian managers, leaders and senior professionals.",
    status: "production",
    eyebrow: "Specialist Resume Services",
    h1: "Executive Resume Writing",
    intro:
      "Executive resume writing for Australian managers, leaders and senior professionals who need stronger leadership positioning and senior career narratives.",
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
    status: "production",
    eyebrow: "Specialist Resume Services",
    h1: "Graduate Resume Writing",
    intro:
      "Graduate resume writing for Australian students, graduates and early-career job seekers who need to present study, projects, placements and early experience clearly.",
  }),
  page({
    slug: "fifo-resume-writing",
    title: "FIFO Resume Writing",
    seoTitle: "FIFO Resume Writing Australia | Ramsey Resume",
    description:
      "FIFO and mining resume writing support for Western Australian and Australian resources job seekers.",
    status: "production",
    eyebrow: "Specialist Resume Services",
    h1: "FIFO Resume Writing",
    intro:
      "FIFO resume writing for Western Australian and Australian mining, resources, shutdown, trades and site-based applications.",
  }),
  page({
    slug: "nursing-resume-writing",
    title: "Nursing Resume Writing",
    seoTitle: "Nursing Resume Writing Australia | Ramsey Resume",
    description:
      "Nursing and healthcare resume writing support for Australian job seekers, including AHPRA registration and clinical experience. Perth-based, Australia-wide.",
    eyebrow: "Industries",
    h1: "Nursing Resume Writing",
    primaryKeyword: "nursing resume writing Australia",
    secondaryKeywords: ["nurse resume writer Perth", "healthcare resume Australia", "AHPRA resume"],
    intro:
      "Nursing resume writing support for healthcare applicants who need resumes showing care, compliance, capability and experience.",
  }),
  page({
    slug: "teacher-resume-writing",
    title: "Teacher Resume Writing",
    seoTitle: "Teacher Resume Writing Australia | Ramsey Resume",
    description:
      "Teacher resume writing support for Australian education and school applications, including WA and independent schools. Perth-based, Australia-wide.",
    eyebrow: "Industries",
    h1: "Teacher Resume Writing",
    primaryKeyword: "teacher resume writing Australia",
    secondaryKeywords: ["teacher resume writer Perth", "education resume Australia", "school leader resume"],
    intro:
      "Teacher resume writing support for teachers, education assistants, trainers and school leaders applying for Australian education roles.",
  }),
  page({
    slug: "it-resume-writing",
    title: "IT Resume Writing",
    seoTitle: "IT Resume Writing Australia | Ramsey Resume Tech",
    description:
      "IT resume writing support for Australian technology professionals across software, data, cybersecurity and support roles. Perth-based, Australia-wide.",
    eyebrow: "Industries",
    h1: "IT Resume Writing",
    primaryKeyword: "IT resume writing Australia",
    secondaryKeywords: ["technology resume writer Perth", "software engineer resume Australia"],
    intro:
      "IT resume writing support for applicants across software, cybersecurity, data, systems, support and technology project roles.",
  }),
  page({
    slug: "accountant-resume-writing",
    title: "Accountant Resume Writing",
    seoTitle: "Accountant Resume Writing Australia | Ramsey Resume",
    description:
      "Accountant and finance resume writing support for Australian job seekers, including CA, CPA and bookkeeping roles. Perth-based, Australia-wide.",
    eyebrow: "Industries",
    h1: "Accountant Resume Writing",
    primaryKeyword: "accountant resume writing Australia",
    secondaryKeywords: ["finance resume writer Perth", "CPA resume Australia", "bookkeeper resume"],
    intro:
      "Accountant resume writing support for accountants, bookkeepers, payroll officers and finance professionals.",
  }),
  page({
    slug: "engineer-resume-writing",
    title: "Engineer Resume Writing",
    seoTitle: "Engineer Resume Writing Australia | Ramsey Resume",
    description:
      "Engineer resume writing support for Australian civil, mechanical, electrical and project engineers across mining and construction. Perth-based, Australia-wide.",
    eyebrow: "Industries",
    h1: "Engineer Resume Writing",
    primaryKeyword: "engineer resume writing Australia",
    secondaryKeywords: ["engineering resume writer Perth", "mining engineer resume WA", "civil engineer resume"],
    intro:
      "Engineering resume writing support for applicants who need to show technical capability, project impact and site experience.",
  }),
  page({
    slug: "project-manager-resume-writing",
    title: "Project Manager Resume Writing",
    seoTitle: "Project Manager Resume Writing Australia | Ramsey Resume",
    description:
      "Project manager resume writing support for Australian delivery, governance and leadership roles across industries. Perth-based, Australia-wide.",
    eyebrow: "Industries",
    h1: "Project Manager Resume Writing",
    primaryKeyword: "project manager resume writing Australia",
    secondaryKeywords: ["project manager resume writer Perth", "PMO resume Australia"],
    intro:
      "Project manager resume writing support for applicants who need to show delivery outcomes, stakeholder management, risk, budgets and governance.",
  }),
  page({
    slug: "electrician-resume-writing",
    title: "Electrician Resume Writing",
    seoTitle: "Electrician Resume Writing Australia | Ramsey Resume",
    description:
      "Electrician and trades resume writing support for Australian job seekers, including licences, tickets and site experience. Perth-based, Australia-wide.",
    eyebrow: "Industries",
    h1: "Electrician Resume Writing",
    primaryKeyword: "electrician resume writing Australia",
    secondaryKeywords: ["trades resume writer Perth", "electrician resume WA"],
    intro:
      "Electrician resume writing support for tradespeople who need to show licences, safety, technical skills and site experience.",
  }),
  page({
    slug: "skilled-migrant-resume-writing",
    title: "Skilled Migrant Resume Writing",
    seoTitle: "Skilled Migrant Resume Writing Australia | Ramsey Resume",
    description:
      "Australian-format resume writing support for skilled migrants translating overseas experience for the Australian job market. Perth-based, Australia-wide.",
    eyebrow: "Industries",
    h1: "Skilled Migrant Resume Writing",
    primaryKeyword: "skilled migrant resume writing Australia",
    secondaryKeywords: ["migrant resume writer Perth", "overseas experience resume Australia", "visa holder resume"],
    intro:
      "Resume writing support for skilled migrants and visa holders translating overseas qualifications and experience into a resume format Australian employers and ATS systems recognise.",
  }),
  page({
    slug: "privacy-policy",
    title: "Privacy Policy",
    seoTitle: "Privacy Policy | Ramsey Resume Perth, Australia",
    primaryKeyword: "Ramsey Resume privacy policy",
    description:
      "Privacy policy for Ramsey Resume website visitors, covering enquiry details, resume uploads and personal information. Perth-based, Australia-wide.",
    eyebrow: "Legal",
    h1: "Privacy Policy",
    intro:
      "How Ramsey Resume collects, uses and protects the personal information you share through enquiries, resume uploads and website use.",
    links: [
      { label: "Contact", href: "/contact/" },
      { label: "Get a Free Resume Review", href: "/get-a-quote/" },
      { label: "Terms of Service", href: "/terms-of-service/" },
    ],
  }),
  page({
    slug: "terms-of-service",
    title: "Terms of Service",
    seoTitle: "Terms of Service | Ramsey Resume Perth, Australia",
    primaryKeyword: "Ramsey Resume terms of service",
    description:
      "Terms of service for Ramsey Resume website visitors and clients, covering quotes, revisions and website use. Perth-based, Australia-wide.",
    eyebrow: "Legal",
    h1: "Terms of Service",
    intro:
      "The service terms, quote conditions, revision policy and website use terms that apply when you engage Ramsey Resume or use this website.",
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
