"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const faqs = [
  {
    q: "Cum funcționează perioada de trial de 14 zile?",
    a: "Înregistrezi un cont (cu sau fără card, în funcție de opțiunea aleasă) și ai acces complet la funcționalitățile planului ales pentru 14 zile. Nu se percepe nicio sumă până la finele trialului, când alegi dacă dorești să continui.",
  },
  {
    q: "Pot schimba planul după ce m-am abonat?",
    a: "Da, poți face upgrade sau downgrade oricând. La upgrade, diferența de preț se calculează pro-rata. La downgrade, creditul se aplică la perioada următoare.",
  },
  {
    q: "Cum funcționează facturarea anuală?",
    a: "La planul anual, plătești suma totală la început și beneficiezi de o reducere față de facturarea lunară. Suma se debitează o dată pe an, la data înregistrării.",
  },
  {
    q: "Există un contract minim sau penalități de ieșire?",
    a: "Nu există contract minim sau penalități. Poți anula oricând. La anulare, abonamentul rămâne activ până la finele perioadei plătite, după care site-ul este înghețat (nu șters).",
  },
  {
    q: "Ce se întâmplă dacă depășesc numărul de prompturi lunare?",
    a: "Poți cumpăra prompturi extra la tariful planului tău: Core 1.5 RON/prompt, Growth 1 RON/prompt, Pro 0.75 RON/prompt. Sau poți face upgrade la planul superior.",
  },
  {
    q: "Add-on-urile se pot adăuga și anula independent?",
    a: "Da. Fiecare add-on se poate adăuga sau anula separat, independent de planul principal. Sunt facturate lunar împreună cu planul.",
  },
];

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ Prețuri"
          title="Întrebări despre planuri și facturare"
        />
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#EEF2FF] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-4"
              >
                <span
                  className="text-[#0D1F5C] font-semibold text-sm"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-[#6B7A9A] flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-4">
                  <p className="text-[#6B7A9A] text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
