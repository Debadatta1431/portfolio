import { useState } from "react";
import { Check, Copy, Mail, Phone, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (value: string, label: string) => {
    navigator.clipboard?.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1800);
  };

  const rows = [
    {
      icon: Mail,
      label: "Email",
      value: "debadatta703@gmail.com",
      href: "mailto:debadatta703@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "8339931722",
      href: "tel:8339931722",
    },      

    {
      icon: MapPin,
      label: "Location",
      value: "At-Kanheibank,Po-Khirkona , Blo-Simulia, Dist-Odisha, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-8 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Let's Connect"
        title="Contact"
        description="Have a question, an opportunity, or just want to say hello? Reach out through any of the channels below."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {rows.map((row) => {
          const Icon = row.icon;
          const isCopied = copied === row.label;
          return (
            <Card
              key={row.label}
              className="group rounded-2xl border-emerald-100 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <CardHeader className="pb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-3 text-base font-semibold text-slate-900">
                  {row.label}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-slate-600">
                  {row.value}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-2">
                {row.href && (
                  <a href={row.href} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      Open
                    </Button>
                  </a>
                )}
                <Button
                  variant="ghost"
                  onClick={() => copy(row.value, row.label)}
                  className={
                    row.href
                      ? "flex-1 text-slate-600 hover:bg-slate-100"
                      : "w-full text-slate-600 hover:bg-slate-100"
                  }
                >
                  {isCopied ? (
                    <>
                      <Check className="mr-2 h-4 w-4 text-emerald-600" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" /> Copy
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}