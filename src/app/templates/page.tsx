import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import TemplatesGrid from "@/components/templates/TemplatesGrid";

export const metadata: Metadata = {
  title: "Exemple & Șabloane — Site-uri generate cu nova",
  description:
    "Explorează exemple reale de site-uri WordPress generate cu nova pentru restaurante, clinici, saloane, firme de servicii și e-commerce.",
};

export default function TemplatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#060D1A] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C2FF] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Exemple & Șabloane
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Site-uri generate cu nova
          </h1>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Inspiră-te din exemple reale. Fiecare site este unic, generat cu AI și personalizat pentru afacerea clientului.
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 bg-[#00C2FF] hover:bg-white text-[#060D1A] font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg"
            style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
          >
            Generează site-ul meu →
          </Link>
        </div>
      </section>

      {/* Gallery — client component handles filter, grid, and modal */}
      <TemplatesGrid />

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Gata să-ți creezi propriul site?"
            subtitle="Nova generează un site unic pentru afacerea ta — nu un șablon copiat."
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start"
              className="inline-flex items-center justify-center gap-2 bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Generează site-ul meu →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 text-[#0D1F5C] border border-[#0D1F5C] hover:bg-[#0D1F5C] hover:text-white font-medium text-base px-8 py-4 rounded-xl transition-all"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Vezi prețurile
            </Link>
          </div>
          <p className="mt-4 text-sm text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
            Gratuit 14 zile • Fără card • Anulezi oricând
          </p>
        </div>
      </section>
    </>
  );
}
