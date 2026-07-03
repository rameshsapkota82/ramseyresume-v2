import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact Ramsey Resume | Perth Resume Writer, WA",
  description:
    "Contact Ramsey Resume for professional resume writing, ATS resumes, cover letters, LinkedIn profiles and selection criteria support in Perth and Australia-wide.",
  path: "/contact/",
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Ramsey Resume",
  url: `${siteConfig.url}/contact/`,
  mainEntity: {
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: "Ramsey Resume",
    telephone: "+61438782206",
    email: siteConfig.email,
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "WA",
      addressCountry: "AU",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <Section className="bg-soft">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal">Contact</p>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-navy md:text-5xl">
                Contact Ramsey Resume
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted">
                Need help choosing the right resume writing service? Contact Ramsey Resume for
                professional resume writing, ATS resumes, cover letters, LinkedIn profiles and
                selection criteria support across Perth, WA and Australia.
              </p>
              <p className="mt-3 text-sm font-semibold text-teal">
                Based in Perth, WA — servicing clients Australia-wide and in New Zealand.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  { label: siteConfig.phoneDisplay, href: siteConfig.phoneHref, icon: Phone },
                  { label: "WhatsApp Ramsey Resume", href: siteConfig.whatsappHref, icon: MessageCircle },
                  { label: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
                  { label: siteConfig.location, href: "/resume-writer-perth/", icon: MapPin },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 font-bold text-navy shadow-card hover:border-brand"
                      href={item.href}
                      key={item.label}
                    >
                      <Icon aria-hidden="true" className="text-brand" size={20} />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
            <LeadForm type="contact" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Free Resume Review", "Send your resume and target role for practical next-step guidance."],
              ["Quote Request", "Request package guidance for resumes, cover letters and application support."],
              ["Service Advice", "Ask which service fits your application, career level or deadline."],
            ].map(([title, text]) => (
              <Card key={title}>
                <h2 className="font-display text-xl font-bold text-navy">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
