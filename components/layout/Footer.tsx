import Link from "next/link";
import { primaryNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const footerColumns = [
  {
    title: "Resume Services",
    links:
      primaryNavigation.find((item) => item.label === "Resume Services")?.children ?? [],
  },
  {
    title: "Career Services",
    links:
      primaryNavigation.find((item) => item.label === "Career Services")?.children ?? [],
  },
  {
    title: "Industries",
    links: primaryNavigation.find((item) => item.label === "Industries")?.children ?? [],
  },
  {
    title: "Resources",
    links: primaryNavigation.find((item) => item.label === "Resources")?.children ?? [],
  },
];

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white">Ramsey Resume</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
              Professional resume writing, cover letter, LinkedIn profile and selection criteria
              support for job seekers in Perth, Western Australia and across Australia.
            </p>
            <div className="mt-6">
              <Button href="/get-a-quote/">Get a Free Resume Review</Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link className="text-sm text-white/75 hover:text-white" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-sm text-white/75">
          <div className="grid gap-4 md:grid-cols-2">
            <p>
              Phone:{" "}
              <Link className="hover:text-white" href={siteConfig.phoneHref}>
                {siteConfig.phoneDisplay}
              </Link>{" "}
              · Email:{" "}
              <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
            <p className="md:text-right">
              © 2026 Ramsey Resume ·{" "}
              <Link className="hover:text-white" href="/privacy-policy/">
                Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link className="hover:text-white" href="/terms-of-service/">
                Terms
              </Link>{" "}
              ·{" "}
              <Link className="hover:text-white" href="/sitemap.xml">
                Sitemap
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
