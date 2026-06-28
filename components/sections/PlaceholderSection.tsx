import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type PlaceholderSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PlaceholderSection({
  eyebrow,
  title,
  description,
  children,
}: PlaceholderSectionProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-teal">{eyebrow}</p>
          ) : null}
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-muted md:text-lg">{description}</p>
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </Section>
  );
}
