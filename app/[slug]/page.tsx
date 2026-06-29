import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchitecturePage } from "@/components/sections/ArchitecturePage";
import { getPageBySlug, pageSlugs } from "@/content/page-registry";
import { createMetadata } from "@/lib/seo";

type RouteParams = {
  slug: string;
};

type PageProps = {
  params: Promise<RouteParams>;
};

export function generateStaticParams() {
  const productionRoutes = new Set([
    "resume-writing",
    "ats-resume-writing",
    "cover-letter-writing",
    "selection-criteria-writing",
    "linkedin-profile-optimisation",
    "government-resume-writing",
    "executive-resume-writing",
    "graduate-resume-writing",
    "fifo-resume-writing",
    "resume-writer-perth",
    "resume-writer-western-australia",
    "resume-writing-australia",
  ]);

  return pageSlugs.filter((slug) => !productionRoutes.has(slug)).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return {};
  }

  return createMetadata({
    title: page.seoTitle,
    description: page.description,
    path: `/${page.slug}/`,
  });
}

export default async function RegistryPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <ArchitecturePage page={page} />;
}
