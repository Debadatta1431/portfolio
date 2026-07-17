import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-50 text-slate-800">
      <Hero />
      <main className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-emerald-100 bg-white/60 py-8 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Debadatta · Built with care
        </p>
      </footer>
    </div>
  );
}