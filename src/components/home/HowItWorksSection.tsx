"use client";

import { motion } from "framer-motion";
import { Wand2, Layout, Rocket } from "lucide-react";

const steps = [
  {
    icon: Layout,
    title: "Descrie afacerea",
    description:
      "Răspunde la câteva întrebări simple despre afacerea ta. Nu ai nevoie de texte pregătite.",
  },
  {
    icon: Wand2,
    title: "AI Generează",
    description:
      "Nova construiește structura, scrie textele și alege imaginile potrivite în mai puțin de 60 de secunde.",
  },
  {
    icon: Rocket,
    title: "Publică instant",
    description:
      "Conectează domeniul tău sau folosește unul gratuit. Site-ul tău e live și gata de clienți.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-white relative border-t border-[#EEF2FF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 text-[#0D1F5C]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            E complicat de folosit? <br />
            <span className="text-[#0051CC]">Deloc.</span>
          </h2>
          <p
            className="text-xl text-[#6B7A9A] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Am eliminat tot jargonul tehnic. Dacă știi să trimiți un email, știi
            să folosești Nova.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t border-dashed border-[#0051CC]/20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-2xl bg-[#EEF2FF] border border-[#0D1F5C]/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#00C2FF]/60 transition-colors shadow-sm">
                <step.icon
                  className="w-10 h-10 text-[#0D1F5C] group-hover:text-[#0051CC] transition-colors"
                />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0051CC] flex items-center justify-center font-mono font-bold text-sm text-white border-2 border-white shadow-sm">
                  {index + 1}
                </div>
              </div>

              <h3
                className="text-xl font-bold text-[#0D1F5C] mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                {step.title}
              </h3>
              <p
                className="text-[#6B7A9A] leading-relaxed max-w-xs"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
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
          <p
            className="text-[#6B7A9A] text-sm mt-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Gratuit 14 zile • Fără card obligatoriu
          </p>
        </div>
      </div>
    </section>
  );
}
