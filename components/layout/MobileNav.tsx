"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { primaryNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-line text-navy"
        type="button"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
      </button>

      {open ? (
        <div className="absolute left-0 right-0 top-full z-50 border-t border-line bg-white p-4 shadow-soft">
          <nav aria-label="Mobile navigation" className="space-y-4">
            {primaryNavigation.map((item) => (
              <div key={item.label}>
                <Link
                  className="block rounded-lg px-2 py-2 text-base font-bold text-navy"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="ml-3 border-l border-line pl-3">
                    {item.children.map((child) => (
                      <Link
                        className="block rounded-lg px-2 py-2 text-sm text-muted hover:text-brand"
                        href={child.href}
                        key={child.label}
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="mt-5 grid gap-3">
            <Button href="/get-a-quote/" className="w-full">
              Free Resume Review
            </Button>
            <Button href={siteConfig.whatsappHref} variant="whatsapp" className="w-full">
              WhatsApp Us
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
