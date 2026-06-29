import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { primaryNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex min-h-[72px] max-w-[1180px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link aria-label="Ramsey Resume home" className="font-display text-xl font-extrabold text-navy" href="/">
          Ramsey Resume
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {primaryNavigation.map((item) => (
            <div className="group relative" key={item.label}>
              <Link className="text-sm font-semibold text-ink hover:text-brand" href={item.href}>
                {item.label}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full max-h-[70vh] min-w-72 translate-y-2 overflow-y-auto rounded-card border border-line bg-white p-3 opacity-0 shadow-soft transition group-focus-within:visible group-focus-within:translate-y-3 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-3 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-soft hover:text-brand"
                      href={child.href}
                      key={child.label}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            aria-label={`Call Ramsey Resume on ${siteConfig.phoneDisplay}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-brand"
            href={siteConfig.phoneHref}
          >
            <Phone aria-hidden="true" size={17} />
            {siteConfig.phoneDisplay}
          </Link>
          <Link
            aria-label="WhatsApp Ramsey Resume"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-whatsapp px-4 text-sm font-bold text-[#073B22] hover:bg-[#1FB855]"
            href={siteConfig.whatsappHref}
          >
            <MessageCircle aria-hidden="true" size={17} />
            WhatsApp
          </Link>
          <Button href="/get-a-quote/" className="min-h-11 px-4 text-sm">
            Free Review
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
