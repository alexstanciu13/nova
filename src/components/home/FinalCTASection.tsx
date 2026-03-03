import Link from "next/link";
import NovaIcon from "@/components/NovaIcon";
import { Check } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#060D1A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0051CC]/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00C2FF]/10 rounded-full blur-[80px]" />
        {/* Star dots */}
        <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-white/30 rounded-full" />
        <div className="absolute top-[60%] right-[10%] w-0.5 h-0.5 bg-[#00C2FF]/50 rounded-full" />
        <div className="absolute bottom-[20%] left-[40%] w-1 h-1 bg-white/20 rounded-full" />
        <div className="absolute top-[30%] right-[30%] w-0.5 h-0.5 bg-white/40 rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <NovaIcon size={40} variant="cyan" />
          <span
            className="text-white font-display text-2xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            nova
          </span>
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
        >
          Afacerea ta merită
          <br />
          <span className="text-[#00C2FF]">un website profesional.</span>
          <br />
          Creează-l acum — gratuit 14 zile.
        </h2>

        <p
          className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Nu ai nevoie de experiență tehnică. Nu ai nevoie de un programator. Nu ai nevoie de luni de așteptare. Ai nevoie de nova.
        </p>

        {/* Feature list */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10">
          {[
            "WordPress gestionat",
            "Hosting inclus",
            "Suport în română",
            "Generat cu AI",
            "Domeniu inclus (anual)",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <Check size={14} className="text-[#00C2FF]" />
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/start"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00C2FF] hover:bg-white text-[#060D1A] font-bold text-lg px-10 py-4 rounded-xl transition-all shadow-lg hover:shadow-2xl hover:shadow-[#00C2FF]/30"
            style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
          >
            Creează primul meu site →
          </Link>
          <Link
            href="/pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white/80 hover:text-white border border-white/20 hover:border-white/50 font-medium text-base px-8 py-4 rounded-xl transition-all"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Vezi prețurile
          </Link>
        </div>

        <p
          className="text-white/40 text-sm mt-5"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Anulezi oricând • Setup în câteva minute • Suport în română • Site-ul nu se șterge la anulare
        </p>
      </div>
    </section>
  );
}
