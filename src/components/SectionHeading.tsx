import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}