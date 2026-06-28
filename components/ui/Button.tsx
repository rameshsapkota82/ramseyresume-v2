import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp" | "phone";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-teal text-white hover:bg-teal-dark shadow-soft",
  secondary: "border border-navy bg-white text-navy hover:border-brand hover:bg-soft",
  ghost: "border border-white/70 bg-transparent text-white hover:bg-white/10",
  whatsapp: "bg-whatsapp text-[#073B22] hover:bg-[#1FB855]",
  phone: "bg-brand text-white hover:bg-[#125487]",
};

export function Button({ href, children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 text-center text-sm font-bold transition-colors md:text-base",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
