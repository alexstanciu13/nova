import type { Metadata } from "next";
import Link from "next/link";
import { Check, Shield, Clock, Headphones, Zap, Globe, BarChart3, Star } from "lucide-react";
import NovaIcon from "@/components/NovaIcon";

export const metadata: Metadata = {
  title: "Încearcă nova gratuit 14 zile — Creează-ți site-ul WordPress cu AI",
  description:
    "Înregistrează-te gratuit. 14 zile trial complet. Generare AI inclusă. Fără card obligatoriu.",
};

const included = [
  { icon: Zap, text: "Site generat de AI în sub 60 secunde" },
  { icon: Globe, text: "Domeniu .ro gratuit în primul an" },
  { icon: BarChart3, text: "SEO, analytics și tracking incluse" },
  { icon: Headphones, text: "Suport în română 7 zile din 7" },
];

const steps = [
  "Creează site-ul cu AI",
  "Adaugă domeniul",
  "Configurează SEO",
  "Activează tracking",
  "Publică site-ul",
];

export default function StartPage() {
  return (
    <div className="min-h-screen bg-[#EEF2FF]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* Left: Dark funnel side */}
        <div className="bg-[#060D1A] px-8 py-20 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#0051CC]/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#00C2FF]/10 rounded-full blur-[60px]" />
          </div>
          <div className="relative max-w-md mx-auto lg:mx-0 lg:pl-8">
            <Link href="/" className="flex items-center gap-2 mb-12">
              <NovaIcon size={32} variant="light" />
              <span
                className="text-white text-xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
              >
                nova
              </span>
            </Link>

            <h1
              className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Site-ul tău profesional
              <br />
              <span className="text-[#00C2FF]">gata în câteva minute.</span>
            </h1>

            <p className="text-white/70 text-base mb-10" style={{ fontFamily: "var(--font-body)" }}>
              14 zile gratuit. Nicio surpriză, nicio angajare.
            </p>

            {/* Onboarding steps preview */}
            <div className="space-y-3">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      i === 0 ? "bg-[#00C2FF] text-[#060D1A]" : "bg-white/10 text-white/60"
                    }`}
                    style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
                  >
                    {i === 0 ? "→" : i + 1}
                  </div>
                  <span
                    className={`text-sm ${i === 0 ? "text-white font-semibold" : "text-white/50"}`}
                    style={{ fontFamily: "var(--font-body)", fontWeight: i === 0 ? 600 : 400 }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
              {[
                { icon: Shield, text: "Plăți securizate SSL" },
                { icon: Clock, text: "Setup în 15 minute" },
                { icon: Headphones, text: "Suport în română" },
                { icon: Check, text: "Anulezi oricând" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={14} className="text-[#00C2FF]" />
                  <span className="text-white/60 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Value panel */}
        <div className="flex items-center justify-center px-8 py-20">
          <div className="w-full max-w-md">

            {/* Social proof pill */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white border border-[#EEF2FF] rounded-full px-4 py-2 shadow-sm">
                <div className="flex -space-x-1.5">
                  {["#0051CC", "#00C2FF", "#0D1F5C"].map((c, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <span className="text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                  <span className="font-semibold text-[#0D1F5C]">+1.200 afaceri</span> și-au lansat site-ul cu nova
                </span>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2
                className="text-2xl font-bold text-[#0D1F5C] mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Tot ce ai nevoie,<br />inclus în trial-ul gratuit
              </h2>
              <p className="text-[#6B7A9A] text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Fără card. Fără angajare. 14 zile gratuit, complet.
              </p>
            </div>

            {/* What's included */}
            <div className="bg-white rounded-2xl border border-[#EEF2FF] shadow-sm p-6 mb-5">
              <p
                className="text-xs font-semibold uppercase tracking-widest text-[#6B7A9A] mb-4"
                style={{ fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
              >
                Inclus în cele 14 zile gratuite
              </p>
              <ul className="space-y-3">
                {included.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#EEF2FF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-[#0051CC]" />
                    </div>
                    <span className="text-sm text-[#0D1F5C]" style={{ fontFamily: "var(--font-body)" }}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Value comparison */}
              <div className="mt-5 pt-5 border-t border-[#EEF2FF] flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#6B7A9A] mb-0.5" style={{ fontFamily: "var(--font-body)" }}>
                    Valoare normală
                  </p>
                  <p
                    className="text-sm text-[#6B7A9A] line-through"
                    style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}
                  >
                    79 RON/lună
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#6B7A9A] mb-0.5" style={{ fontFamily: "var(--font-body)" }}>
                    Primele 14 zile
                  </p>
                  <p
                    className="text-2xl font-bold text-[#0051CC]"
                    style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
                  >
                    GRATUIT
                  </p>
                </div>
              </div>
            </div>

            {/* Star rating */}
            <div className="flex items-center justify-center gap-1.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
              ))}
              <span className="text-xs text-[#6B7A9A] ml-1" style={{ fontFamily: "var(--font-body)" }}>
                4.9/5 din 300+ recenzii
              </span>
            </div>

            {/* Primary CTA */}
            <a
              href="https://my.trynova.ro/sign-up"
              className="block w-full text-center bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-bold text-base py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              Creează contul gratuit →
            </a>

            <p className="text-center text-xs text-[#6B7A9A] mt-3" style={{ fontFamily: "var(--font-body)" }}>
              Anulezi oricând • Site-ul nu se șterge la anulare • Fără surprize
            </p>

            <p className="text-center text-sm text-[#6B7A9A] mt-5" style={{ fontFamily: "var(--font-body)" }}>
              Ai deja cont?{" "}
              <a
                href="https://my.trynova.ro/login"
                className="text-[#0051CC] hover:text-[#0D1F5C] font-semibold transition-colors"
              >
                Autentifică-te
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
