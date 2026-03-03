"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const faqs = [
  {
    q: "Este greu de folosit? Am nevoie de cunoștințe tehnice?",
    a: "Deloc. Nova este proiectat special pentru proprietarii de afaceri fără experiență tehnică. Descrii afacerea ta în câteva cuvinte, iar AI-ul nostru generează site-ul complet. Dacă știi să scrii un mesaj WhatsApp, știi să folosești nova.",
  },
  {
    q: "Este un WordPress real? Pot edita după generare?",
    a: "Da, absolut. Nova generează un WordPress 100% real, complet funcțional. Poți edita orice: texte, imagini, pagini noi, plugin-uri. Ai acces complet la panoul de administrare WordPress. AI-ul accelerează crearea; tu păstrezi controlul total.",
  },
  {
    q: "Pot folosi propriul meu domeniu (.ro sau .com)?",
    a: "Da. Poți conecta orice domeniu ai deja sau poți cumpăra unul nou direct din platforma nova. Configurarea DNS este automată — nu trebuie să știi ce e un nameserver sau o înregistrare A.",
  },
  {
    q: "Ce se întâmplă cu site-ul meu dacă anulez abonamentul?",
    a: "Site-ul nu se șterge. La anulare, site-ul este înghețat — rămâne intact pe serverele noastre. Dacă reactivezi oricând în viitor, totul e exact cum l-ai lăsat. Nu pierzi nimic.",
  },
  {
    q: "Ce suport este inclus? Cât de rapid răspundeți?",
    a: "Planul Core include suport email în 48h. Growth include suport în 24h. Pro include suport WhatsApp cu răspuns în 4h (luni–vineri, 9–18). Toată echipa de suport este în România și răspunde în română.",
  },
  {
    q: "Cât de repede pot lansa site-ul?",
    a: "Generarea AI durează 1–3 minute. Adăugarea domeniului și publicarea, încă câteva minute. Practic, poți avea site-ul live în mai puțin de 15 minute de la înregistrare. Mulți clienți ai noștri publică în prima zi.",
  },
  {
    q: "Este hosting-ul inclus? Cât de rapid este?",
    a: "Da, hosting-ul este complet inclus în toate planurile — nu plătești separat. Serverele sunt în Europa cu CDN inclus în planurile Growth și Pro. Timpii de încărcare sunt sub 2 secunde pentru vizitatori din România.",
  },
  {
    q: "Pot transfera site-ul în altă parte dacă vreau?",
    a: "Da. Site-ul tău WordPress este al tău. Poți face export și migrare oricând. Nova nu te ține ostatic — dar suntem convinși că nu vei vrea să pleci odată ce experimentezi serviciul.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Întrebări frecvente"
          title="Răspunsuri la cele mai comune întrebări"
          subtitle="Tot ce trebuie să știi înainte să începi."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#EEF2FF] rounded-xl overflow-hidden hover:border-[#0051CC]/30 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              >
                <span
                  className="text-[#0D1F5C] font-semibold text-base"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#6B7A9A] flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p
                    className="text-[#6B7A9A] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#6B7A9A] text-sm" style={{ fontFamily: "var(--font-body)" }}>
            Mai ai întrebări?{" "}
            <a href="/contact" className="text-[#0051CC] hover:underline font-medium">
              Contactează-ne
            </a>{" "}
            sau scrie-ne pe{" "}
            <a href="mailto:support@nova.ro" className="text-[#0051CC] hover:underline font-medium">
              support@nova.ro
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
