import type { Metadata } from "next";
import Link from "next/link";
import { Check, Shield, Clock, Headphones } from "lucide-react";
import NovaIcon from "@/components/NovaIcon";

export const metadata: Metadata = {
  title: "Încearcă nova gratuit 14 zile — Creează-ți site-ul WordPress cu AI",
  description:
    "Înregistrează-te gratuit. 14 zile trial complet. Generare AI inclusă. Fără card obligatoriu.",
};

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
        {/* Left: Dark side */}
        <div className="bg-[#060D1A] px-8 py-20 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#0051CC]/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#00C2FF]/10 rounded-full blur-[60px]" />
          </div>
          <div className="relative max-w-md mx-auto lg:mx-0 lg:pl-8">
            <Link href="/" className="flex items-center gap-2 mb-12">
              <NovaIcon size={32} variant="light" />
              <span
                className="text-white font-display text-xl"
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

        {/* Right: Form */}
        <div className="flex items-center justify-center px-8 py-20">
          <div className="w-full max-w-md">
            <h2
              className="text-2xl font-bold text-[#0D1F5C] mb-1"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Creează-ți contul gratuit
            </h2>
            <p className="text-[#6B7A9A] text-sm mb-8" style={{ fontFamily: "var(--font-body)" }}>
              Fără card obligatoriu. 14 zile trial complet.
            </p>

            <div className="bg-white rounded-2xl border border-[#EEF2FF] shadow-sm p-7">
              <form className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium text-[#0D1F5C] mb-1.5"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Adresă email *
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="tu@afacerea-ta.ro"
                    className="w-full border border-[#EEF2FF] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder:text-[#6B7A9A]/50 focus:outline-none focus:border-[#0051CC] focus:ring-2 focus:ring-[#0051CC]/10 transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-[#0D1F5C] mb-1.5"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Parolă *
                  </label>
                  <input
                    type="password"
                    autoComplete="new-password"
                    required
                    placeholder="Minimum 8 caractere"
                    className="w-full border border-[#EEF2FF] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder:text-[#6B7A9A]/50 focus:outline-none focus:border-[#0051CC] focus:ring-2 focus:ring-[#0051CC]/10 transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-0.5 accent-[#0051CC]"
                  />
                  <label htmlFor="terms" className="text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                    Sunt de acord cu{" "}
                    <Link href="/terms" className="text-[#0051CC] hover:underline">
                      Termenii și condițiile
                    </Link>{" "}
                    și{" "}
                    <Link href="/privacy" className="text-[#0051CC] hover:underline">
                      Politica de confidențialitate
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-bold text-base py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg mt-1"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
                >
                  Creează contul gratuit →
                </button>
              </form>

              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#EEF2FF]" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                    sau
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 border border-[#EEF2FF] hover:border-[#0D1F5C]/30 rounded-xl py-3 text-sm text-[#0D1F5C] font-medium transition-all"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continuă cu Google
              </button>
            </div>

            <p className="text-center text-sm text-[#6B7A9A] mt-5" style={{ fontFamily: "var(--font-body)" }}>
              Ai deja cont?{" "}
              <Link href="/login" className="text-[#0051CC] hover:text-[#0D1F5C] font-semibold transition-colors">
                Autentifică-te
              </Link>
            </p>

            <p className="text-center text-xs text-[#6B7A9A]/60 mt-3" style={{ fontFamily: "var(--font-body)" }}>
              Anulezi oricând • Site-ul nu se șterge la anulare • Fără surprize
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
