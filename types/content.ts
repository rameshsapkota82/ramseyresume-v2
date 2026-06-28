export type FaqItem = {
  question: string;
  answer: string;
};

export type InternalLink = {
  label: string;
  href: string;
};

export type ServiceContent = {
  slug: string;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  faqs: FaqItem[];
  relatedLinks: InternalLink[];
};
