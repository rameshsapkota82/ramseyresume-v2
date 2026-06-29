import type { LucideIcon } from "lucide-react";

export type ServiceFeature = {
  title: string;
  text: string;
  icon?: LucideIcon;
};

export type ServiceStep = ServiceFeature;

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type RelatedService = {
  title: string;
  text: string;
  href: string;
};

export type ServicePageContent = {
  breadcrumb: string;
  badge: string;
  h1: string;
  intro: string[];
  heroHighlights: string[];
  heroCard: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  overview: {
    eyebrow: string;
    title: string;
    body: string[];
  };
  audiences: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    text: string;
    items: ServiceFeature[];
  };
  inclusions: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };
  process: {
    eyebrow: string;
    title: string;
    text: string;
    steps: ServiceStep[];
  };
  extraSection?: {
    eyebrow: string;
    title: string;
    text: string;
    items: ServiceFeature[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    text: string;
    cardTitle: string;
    cardText: string;
  };
  faqs: ServiceFaq[];
  relatedServices: RelatedService[];
  finalCta: {
    eyebrow: string;
    title: string;
    text: string;
  };
};
