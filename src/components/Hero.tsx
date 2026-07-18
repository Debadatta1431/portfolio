import { useState } from "react";
import { GraduationCap, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarSrc from "../avatar.jpg";

export function Hero() {
  const [imgError, setImgError] = useState(false);
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-800 text-white">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-50 ring-1 ring-inset ring-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              B.Tech · Computer Science & Engineering
            </span>

            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Debadatta
            </h1>

            <p className="mt-4 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              A passionate learner shaping a future in technology — currently
              pursuing a Bachelor's degree in Computer Science & Engineering
              from Biju Patnaik University of Technology, Odisha.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact">
                <Button className="bg-white text-emerald-800 hover:bg-emerald-50">
                  Get in touch
                </Button>
              </a>
              <a href="#education">
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  View education
                </Button>
              </a>
            </div>
          </div>

          {/* avatar / monogram card */}
          <div className="flex shrink-0 items-center gap-5 rounded-2xl bg-white/10 p-5 ring-1 ring-inset ring-white/20 backdrop-blur-sm">
            {!imgError ? (
              <img
                src={avatarSrc}
                alt="Debadatta"
                onError={() => setImgError(true)}
                className="h-20 w-20 rounded-2xl object-cover shadow-lg"
              />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-3xl font-bold text-emerald-700 shadow-lg">
                D
              </div>
            )}
            <div className="space-y-1 text-sm">
              <p className="flex items-center gap-2 text-emerald-50/90">
                <GraduationCap className="h-4 w-4" /> B.Tech CSE
              </p>
              <p className="flex items-center gap-2 text-emerald-50/90">
                <Mail className="h-4 w-4" /> debadatta703@gmail.com
              </p>
              <p className="flex items-center gap-2 text-emerald-50/90">
                <Phone className="h-4 w-4" /> 8339931722
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}