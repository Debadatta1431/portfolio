import { BookOpen, FlaskConical, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

const items = [
  {
    icon: GraduationCap,
    title: "B.Tech — Computer Science & Engineering",
    org: "Biju Patnaik University of Technology, Odisha",
    period: "Pursuing",
    status: "Current",
    description:
      "Building strong foundations in programming, data structures, algorithms, and modern software engineering practices.",
  },
  {
    icon: FlaskConical,
    title: "12th — Science Stream",
    org: "Higher Secondary Education",
    period: "Completed",
    status: "Completed",
    description:
      "Studied Physics, Chemistry, Mathematics and Computer Science — the stepping stone into engineering.",
  },
  {
    icon: BookOpen,
    title: "10th — Secondary Education",
    org: "Board of Secondary Education",
    period: "Completed",
    status: "Completed",
    description:
      "Built core academic fundamentals across languages, mathematics and sciences.",
  },
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-8 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Academic Journey"
        title="Education"
        description="A steady path from secondary school into computer science engineering — each step adding new skills and perspective."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          const isCurrent = item.status === "Current";
          return (
            <Card
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border-emerald-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span
                className={
                  isCurrent
                    ? "absolute right-4 top-4 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700"
                    : "absolute right-4 top-4 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-500"
                }
              >
                {item.status}
              </span>

              <CardHeader className="pb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 pr-16 text-lg font-semibold leading-snug text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-emerald-700">
                  {item.org}
                </p>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-400">
                  {item.period}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}