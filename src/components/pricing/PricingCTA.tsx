import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingCTA() {
  return (
    <section className="py-16 bg-[#EEF2FF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl font-bold text-[#0D1F5C] mb-4"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          Gata să începi?
        </h2>
        <p className="text-[#6B7A9A] text-base mb-8" style={{ fontFamily: "var(--font-body)" }}>
          14 zile gratuit pe orice plan. Nicio surpriză.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Link
            href="/start"
            className="inline-flex items-center justify-center gap-2 bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            Încearcă gratuit 14 zile
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 text-[#0D1F5C] border border-[#0D1F5C] hover:bg-[#0D1F5C] hover:text-white font-medium text-base px-8 py-4 rounded-xl transition-all"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Vorbește cu echipa noastră
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {["14 zile gratuit", "Anulezi oricând", "Site-ul nu se șterge", "Suport în română"].map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
              <Check size={12} className="text-[#00C2FF]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
