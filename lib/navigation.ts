export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Resume Services",
    href: "/resume-writing/",
    children: [
      { label: "Resume Writing", href: "/resume-writing/" },
      { label: "ATS Resume Writing", href: "/ats-resume-writing/" },
      { label: "Executive Resume", href: "/executive-resume-writing/" },
      { label: "Government Resume", href: "/government-resume-writing/" },
      { label: "Graduate Resume", href: "/graduate-resume-writing/" },
      { label: "FIFO Resume", href: "/fifo-resume-writing/" },
      { label: "Resume Writer Perth", href: "/resume-writer-perth/" },
      { label: "Resume Writer WA", href: "/resume-writer-western-australia/" },
      { label: "Resume Writing Australia", href: "/resume-writing-australia/" },
    ],
  },
  {
    label: "Career Services",
    href: "/cover-letter-writing/",
    children: [
      { label: "Cover Letter Writing", href: "/cover-letter-writing/" },
      { label: "Selection Criteria", href: "/selection-criteria-writing/" },
      { label: "LinkedIn Optimisation", href: "/linkedin-profile-optimisation/" },
      { label: "Interview Preparation", href: "/interview-preparation/" },
    ],
  },
  {
    label: "Industries",
    href: "/resume-writing/",
    children: [
      { label: "Nursing", href: "/nursing-resume-writing/" },
      { label: "Teacher", href: "/teacher-resume-writing/" },
      { label: "IT", href: "/it-resume-writing/" },
      { label: "Accountant", href: "/accountant-resume-writing/" },
      { label: "Engineering", href: "/engineer-resume-writing/" },
      { label: "Project Manager", href: "/project-manager-resume-writing/" },
      { label: "Electrician", href: "/electrician-resume-writing/" },
      { label: "Skilled Migrant", href: "/skilled-migrant-resume-writing/" },
      { label: "FIFO", href: "/fifo-resume-writing/" },
    ],
  },
  {
    label: "Resources",
    href: "/blog/",
    children: [
      { label: "Resume Examples", href: "/resume-examples/" },
      { label: "Career Advice", href: "/career-advice/" },
      { label: "ATS Resume Checker", href: "/ats-resume-checker/" },
      { label: "Resume Templates", href: "/resume-templates/" },
      { label: "Salary Guides", href: "/salary-guides/" },
      { label: "Blog", href: "/blog/" },
      { label: "FAQ", href: "/faq/" },
    ],
  },
  { label: "Pricing", href: "/pricing/" },
  { label: "Contact", href: "/contact/" },
];
