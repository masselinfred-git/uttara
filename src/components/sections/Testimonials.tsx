import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { PublicTestimonial } from "@/services/cms/types";

export function Testimonials({
  testimonials,
}: {
  testimonials: PublicTestimonial[];
}) {
  if (testimonials.length === 0) return null;

  return (
    <Section>
      <Container>
        <div className="space-y-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mx-auto max-w-4xl text-center"
            >
              <p className="font-script text-3xl text-[var(--earth)] sm:text-4xl">
                Elles en parlent
              </p>

              <blockquote className="font-display mt-6 text-2xl leading-relaxed sm:mt-7 sm:text-3xl md:text-5xl">
                « {testimonial.text} »
              </blockquote>

              <p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:mt-7 sm:text-sm sm:tracking-[0.2em]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
