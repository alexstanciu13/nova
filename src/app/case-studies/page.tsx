import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, TrendingUp, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Studii de caz — Afaceri reale care au crescut cu nova",
  description:
    "Descoperă cum restaurante, cabinete medicale, saloane și firme de servicii din România și-au lansat site-ul cu nova și au obținut rezultate reale.",
};

const caseStudies = [
  {
    slug: "restaurant-la-bunica",
    client: "Restaurant La Bunica",
    category: "Restaurant",
    location: "București",
    tagColor: "#FF8C42",
    tagBg: "#FFF3EB",
    context: "Restaurant tradițional cu 8 ani vechime, fără prezență online. Proprietara pierdea clienți față de concurența cu site-uri.",
    result: "+40% rezervări online în prima lună",
    timeToLaunch: "22 minute",
    rating: 5,
    quote: "Nova a rezolvat în 22 de minute ce agenția nu a putut face în 3 luni.",
    person: "Maria Ionescu, Proprietar",
    metrics: [
      { label: "Rezervări online/lună", before: "0", after: "+85" },
      { label: "Trafic Google organic", before: "0", after: "+340 vizite" },
    ],
  },
  {
    slug: "cabinet-dr-popescu",
    client: "Cabinet Stomatologic Dr. Popescu",
    category: "Clinică",
    location: "Cluj-Napoca",
    tagColor: "#0051CC",
    tagBg: "#EEF2FF",
    context: "Cabinet cu 200 de pacienți activi, fără site. Programările se făceau exclusiv telefonic, generând blocaje.",
    result: "+65% programări online, -3h/săptămână la telefon",
    timeToLaunch: "35 minute",
    rating: 5,
    quote: "Pacienții se programează online acum. Am recuperat 3 ore pe săptămână.",
    person: "Dr. Andrei Popescu",
    metrics: [
      { label: "Programări online/lună", before: "0", after: "+55" },
      { label: "Ore la telefon economisit/săpt.", before: "4h", after: "1h" },
    ],
  },
  {
    slug: "salon-beauty-star",
    client: "Salon Beauty Star",
    category: "Salon",
    location: "Timișoara",
    tagColor: "#CC0051",
    tagBg: "#FFF0F8",
    context: "Salon de înfrumusețare cu 4 ani experiență, prezență doar pe Instagram. Clientele noi greu de atras.",
    result: "+30 clienți noi în prima lună via Google",
    timeToLaunch: "18 minute",
    rating: 5,
    quote: "Galeriastă cu lucrările mele a convins mai mult decât orice reclamă.",
    person: "Elena Dumitrescu, Fondatoare",
    metrics: [
      { label: "Clienți noi via Google", before: "2-3/lună", after: "30+/lună" },
      { label: "Venituri lunare", before: "baseline", after: "+22%" },
    ],
  },
  {
    slug: "electroPro",
    client: "ElectroPro — Servicii Electrice",
    category: "Meseriași",
    location: "Ploiești",
    tagColor: "#008C4A",
    tagBg: "#F0FFF8",
    context: "Electrician autorizat cu 10 ani experiență, 0 prezență online. Toată activitatea prin recomandări personale.",
    result: "8 lucrări noi în prima lună de la site",
    timeToLaunch: "15 minute",
    rating: 5,
    quote: "Acum clienții mă caută pe Google. Nu mai depind de recomandări.",
    person: "Cristian Marin, Fondator",
    metrics: [
      { label: "Cereri de ofertă/lună", before: "0", after: "+8" },
      { label: "Proiecte noi via online", before: "0", after: "+8" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#060D1A] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C2FF] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Studii de caz
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Rezultate reale, afaceri reale
          </h1>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Descoperă cum proprietarii de afaceri din România și-au construit prezența online cu nova.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.slug}
                className="bg-white rounded-2xl overflow-hidden border border-[#EEF2FF] hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {/* Card header */}
                <div className="p-7 pb-5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
                        style={{ color: cs.tagColor, backgroundColor: cs.tagBg }}
                      >
                        {cs.category}
                      </span>
                      <h3
                        className="text-xl font-bold text-[#0D1F5C]"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                      >
                        {cs.client}
                      </h3>
                      <p className="text-sm text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                        {cs.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: cs.rating }).map((_, i) => (
                        <Star key={i} size={12} className="text-yellow-400" fill="#facc15" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-[#6B7A9A] leading-relaxed mb-5" style={{ fontFamily: "var(--font-body)" }}>
                    {cs.context}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="bg-[#EEF2FF] rounded-xl p-3">
                        <p className="text-xs text-[#6B7A9A] mb-1" style={{ fontFamily: "var(--font-body)" }}>
                          {m.label}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-[#6B7A9A] line-through font-mono" style={{ fontFamily: "var(--font-mono)" }}>
                            {m.before}
                          </span>
                          <ArrowRight size={10} className="text-[#00C2FF]" />
                          <span
                            className="text-sm font-bold text-[#0051CC]"
                            style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
                          >
                            {m.after}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Result highlight */}
                  <div className="flex items-center gap-2 bg-[#0D1F5C]/5 rounded-xl p-3 mb-5">
                    <TrendingUp size={16} className="text-[#0051CC] flex-shrink-0" />
                    <span
                      className="text-sm font-semibold text-[#0D1F5C]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                    >
                      {cs.result}
                    </span>
                  </div>

                  {/* Launch time */}
                  <div className="flex items-center gap-2 text-[#6B7A9A] text-xs mb-5" style={{ fontFamily: "var(--font-body)" }}>
                    <Clock size={12} className="text-[#00C2FF]" />
                    Site lansat în {cs.timeToLaunch}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-2 border-[#00C2FF] pl-4">
                    <p className="text-sm text-[#0D1F5C] italic mb-1" style={{ fontFamily: "var(--font-body)" }}>
                      &ldquo;{cs.quote}&rdquo;
                    </p>
                    <cite className="text-xs text-[#6B7A9A] not-italic" style={{ fontFamily: "var(--font-body)" }}>
                      — {cs.person}
                    </cite>
                  </blockquote>
                </div>

                {/* Card footer */}
                <div className="px-7 py-4 bg-[#EEF2FF] border-t border-[#EEF2FF] flex items-center justify-between">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="text-sm font-semibold text-[#0051CC] hover:text-[#0D1F5C] transition-colors flex items-center gap-1"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                  >
                    Citește studiul complet <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/start"
                    className="text-sm font-semibold bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white px-4 py-2 rounded-lg transition-all"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                  >
                    Încearcă gratuit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-[#0D1F5C] mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Povestea ta urmează
          </h2>
          <p className="text-[#6B7A9A] mb-8" style={{ fontFamily: "var(--font-body)" }}>
            Alătură-te celor 100+ afaceri din România care și-au lansat site-ul cu nova.
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-md"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            Creează primul meu site →
          </Link>
        </div>
      </section>
    </>
  );
}
