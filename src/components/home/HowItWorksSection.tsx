"use client";

import { MessageSquare, Wand2, Globe } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Descrie-ți afacerea",
    description:
      "Spune-i lui nova ce faci — restaurant, cabinet medical, salon, servicii. Alegi o categorie sau scrii cu propriile cuvinte. Fără formulare complicate.",
    visual: (
      <div className="bg-[#EEF2FF] rounded-xl p-4">
        <div className="bg-white rounded-lg p-3 shadow-sm border border-[#EEF2FF]">
          <p className="text-xs text-[#6B7A9A] mb-2" style={{ fontFamily: "var(--font-body)" }}>
            Descrie afacerea ta:
          </p>
          <div className="bg-[#EEF2FF] rounded-lg p-2.5 text-xs text-[#0D1F5C]" style={{ fontFamily: "var(--font-body)" }}>
            &ldquo;Restaurant italian în Cluj-Napoca, specialitate pizza și paste. Livrăm și acasă.&rdquo;
          </div>
          <div className="flex gap-2 mt-2">
            {["Restaurant", "Delivery", "Cluj"].map((tag) => (
              <span key={tag} className="bg-[#0D1F5C]/10 text-[#0D1F5C] text-xs px-2 py-0.5 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    step: "02",
    icon: Wand2,
    title: "nova generează site-ul complet",
    description:
      "AI-ul nostru creează automat un website WordPress complet: design, pagini, texte, meniu, galerie, formulare de contact — personalizat pentru afacerea ta.",
    visual: (
      <div className="bg-[#0D1F5C]/5 rounded-xl p-4 space-y-2">
        {["✓ Design personalizat", "✓ 5+ pagini generate", "✓ Texte SEO-ready", "✓ Galerie foto", "✓ Formular contact"].map(
          (item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-[#0D1F5C] font-medium" style={{ fontFamily: "var(--font-body)" }}>
              <div className="w-4 h-4 bg-[#00C2FF] rounded-full flex items-center justify-center text-[8px] text-[#0D1F5C] font-bold">✓</div>
              {item.slice(2)}
            </div>
          )
        )}
        <div className="pt-1">
          <div className="flex items-center gap-2">
            <div className="h-1.5 bg-[#00C2FF] rounded-full flex-1 overflow-hidden">
              <div className="h-full bg-[#0051CC] rounded-full animate-pulse" style={{ width: "90%" }} />
            </div>
            <span className="text-[#00C2FF] text-xs font-mono font-semibold" style={{ fontFamily: "var(--font-mono)" }}>
              90%
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    step: "03",
    icon: Globe,
    title: "Publică și conectează domeniul",
    description:
      "Un click și site-ul e live. Conectezi propriul domeniu sau cumperi unul nou direct din nova. Site-ul tău e online în câteva minute.",
    visual: (
      <div className="bg-[#EEF2FF] rounded-xl p-4">
        <div className="bg-white rounded-lg p-3 shadow-sm border border-[#EEF2FF] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
              Domeniu
            </span>
            <span className="text-xs text-[#00C2FF] font-semibold" style={{ fontFamily: "var(--font-mono)" }}>
              ● LIVE
            </span>
          </div>
          <div className="bg-[#EEF2FF] rounded-md px-3 py-2 flex items-center gap-2">
            <div className="w-4 h-4 bg-[#0051CC] rounded-full flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                <path d="M1 5.5L4 8.5L9 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xs text-[#0D1F5C] font-mono" style={{ fontFamily: "var(--font-mono)" }}>
              restaurantulmeu.ro
            </span>
          </div>
          <p className="text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
            SSL activat • Hosting inclus • CDN activ
          </p>
        </div>
      </div>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cum funcționează"
          title="De la idee la site live în 3 pași"
          subtitle="Fără cunoștințe tehnice. Fără programatori. Nova face totul pentru tine."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(100%+0px)] w-full h-0.5 bg-gradient-to-r from-[#00C2FF]/40 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-[#0D1F5C] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#00C2FF]" />
                    </div>
                    <span
                      className="text-4xl font-extrabold text-[#EEF2FF]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Visual */}
                  <div className="mb-5">{step.visual}</div>

                  {/* Text */}
                  <h3
                    className="text-lg font-bold text-[#0D1F5C] mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#6B7A9A] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/start"
            className="inline-flex items-center gap-2 bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            Creează primul meu site →
          </a>
          <p className="text-[#6B7A9A] text-sm mt-3" style={{ fontFamily: "var(--font-body)" }}>
            Gratuit 14 zile • Fără card obligatoriu
          </p>
        </div>
      </div>
    </section>
  );
}
