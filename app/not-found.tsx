import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section>
      <Container className="text-center">
        <h1 className="font-display text-4xl font-extrabold text-navy">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          The page you are looking for may have moved. Return home or request a free resume review.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Return Home</Button>
          <Button href="/get-a-quote/" variant="secondary">
            Free Resume Review
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted">
          Need help now? <Link className="font-bold text-brand" href="/contact/">Contact Ramsey Resume</Link>.
        </p>
      </Container>
    </Section>
  );
}
