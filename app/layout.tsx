import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Professional Resume Writing Services Perth & Australia | Ramsey Resume",
    template: "%s | Ramsey Resume",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <body className="min-h-screen pb-14 antialiased md:pb-0">
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <WhatsAppButton />
      </body>
    </html>
  );
}
