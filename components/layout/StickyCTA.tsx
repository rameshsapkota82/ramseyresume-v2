import { MessageCircle, Phone, Send } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-white shadow-soft md:hidden">
      <div className="grid grid-cols-3 text-xs font-bold">
        <Link className="flex min-h-14 flex-col items-center justify-center gap-1 text-brand" href={siteConfig.phoneHref}>
          <Phone aria-hidden="true" size={18} />
          Call
        </Link>
        <Link className="flex min-h-14 flex-col items-center justify-center gap-1 text-[#073B22]" href={siteConfig.whatsappHref}>
          <MessageCircle aria-hidden="true" size={18} />
          WhatsApp
        </Link>
        <Link className="flex min-h-14 flex-col items-center justify-center gap-1 bg-teal text-white" href="/get-a-quote/">
          <Send aria-hidden="true" size={18} />
          Get Quote
        </Link>
      </div>
    </div>
  );
}
