import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { PublicHomeContent } from "@/services/cms/types";

const dates = [
  {
    date: "12 — 14 OCT.",
    year: "2026",
    title: "Formation massage Ayurvédique",
  },
  {
    date: "06 — 07 NOV.",
    year: "2026",
    title: "Formation Bol Kansu",
  },
  {
    date: "04 — 06 DÉC.",
    year: "2026",
    title: "Formation massage Ayurvédique",
  },
];

export function SchedulePreview({
  content,
}: {
  content: PublicHomeContent["schedule"];
}) {
  return (
    <Section className="bg-[var(--background-light)]">
      <Container>
        <div className="mb-12 md:flex md:items-end md:justify-between">
          <div>
            <p className="font-script text-4xl text-[var(--earth)]">
              {content.eyebrow}
            </p>

            <h2 className="mt-3 text-4xl md:text-6xl">
              {content.title}
            </h2>
          </div>

          <p className="mt-6 max-w-md text-[var(--muted)] md:mt-0">
            {content.text}
          </p>
        </div>

        <div className="border-t border-[var(--border)]">
          {dates.map((item) => (
            <div
              key={`${item.date}-${item.title}`}
              className="grid gap-4 border-b border-[var(--border)] py-7 md:grid-cols-[220px_1fr_auto] md:items-center"
            >
              <div>
                <p className="text-lg font-medium">
                  {item.date}
                </p>

                <p className="text-sm text-[var(--muted)]">
                  {item.year}
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl">
                {item.title}
              </h3>

              <span className="text-sm">
                Découvrir →
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
