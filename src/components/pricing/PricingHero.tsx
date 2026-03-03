import { Check } from "lucide-react";

export default function PricingHero() {
  return (
    <section className="bg-[#060D1A] pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-[#0051CC]/15 rounded-full blur-[100px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C2FF] mb-4"
          style={{ fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.12em" }}
        >
          Prețuri
        </span>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
        >
          Alege planul care crește
          <br />
          cu afacerea ta
        </h1>
        <p
          className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Fără surprize. Fără costuri ascunse. Toate planurile includ WordPress gestionat, hosting și suport în română.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {["14 zile gratuit", "Anulezi oricând", "Site-ul nu se șterge", "Plăți securizate"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2 text-white/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <Check size={14} className="text-[#00C2FF]" />
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
