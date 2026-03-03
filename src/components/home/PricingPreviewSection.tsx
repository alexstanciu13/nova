"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const plans = [
  {
    id: "core",
    name: "Core",
    monthly: 149,
    annual: 1290,
    annualPerMonth: Math.round(1290 / 12),
    color: "#6B7A9A",
    highlight: false,
    cta: "Încearcă gratuit",
    ctaHref: "/start",
    features: [
      "1 generare site/lună",
      "20 prompturi AI/lună",
      "Până la 5 pagini",
      "Backup săptămânal",
      "Suport email 48h",
      "Hosting inclus",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 239,
    annual: 2150,
    annualPerMonth: Math.round(2150 / 12),
    color: "#0051CC",
    highlight: true,
    badge: "Recomandat",
    cta: "Încearcă gratuit",
    ctaHref: "/start",
    features: [
      "2 generări site/lună",
      "60 prompturi AI/lună",
      "Până la 15 pagini",
      "Backup zilnic",
      "SEO de bază + GA4",
      "1 intervenție/lună",
      "Suport 24h",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 399,
    annual: 3590,
    annualPerMonth: Math.round(3590 / 12),
    color: "#0D1F5C",
    highlight: false,
    cta: "Contactează-ne",
    ctaHref: "/contact",
    features: [
      "4 generări site/lună",
      "150 prompturi AI/lună",
      "Pagini nelimitate",
      "CDN prioritar",
      "SEO avansat + Meta Pixel",
      "3 intervenții/lună",
      "Suport WhatsApp 4h",
    ],
  },
];

export default function PricingPreviewSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Prețuri"
          title="Alege planul care crește cu afacerea ta"
          subtitle="Fără surprize. Toate planurile includ WordPress gestionat, hosting și suport în română."
        />

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mt-8 mb-12">
          <span
            className={`text-sm font-medium transition-colors ${!annual ? "text-[#0D1F5C]" : "text-[#6B7A9A]"}`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            Lunar
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-[#0051CC]" : "bg-[#6B7A9A]/30"}`}
            aria-label="Comută între facturare lunară și anuală"
          >
            <div
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                annual ? "translate-x-6" : "translate-x-0.5"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors flex items-center gap-2 ${annual ? "text-[#0D1F5C]" : "text-[#6B7A9A]"}`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            Anual
            {annual && (
              <span className="bg-[#00C2FF]/20 text-[#0051CC] text-xs font-semibold px-2 py-0.5 rounded-full">
                Economisești 2 luni
              </span>
            )}
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-7 border-2 transition-all ${
                plan.highlight
                  ? "border-[#0051CC] shadow-xl shadow-[#0051CC]/10 scale-[1.02]"
                  : "border-[#EEF2FF] hover:border-[#0051CC]/30 hover:shadow-md"
              }`}
              style={{ backgroundColor: plan.highlight ? "#F5F8FF" : "white" }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#0051CC] text-white text-xs font-bold px-4 py-1 rounded-full" style={{ fontFamily: "var(--font-body)" }}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-lg font-bold text-[#0D1F5C] mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-4xl font-extrabold text-[#0D1F5C]"
                    style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
                  >
                    {annual ? plan.annualPerMonth : plan.monthly}
                  </span>
                  <span className="text-[#6B7A9A] text-sm">RON/lună</span>
                </div>
                {annual && (
                  <p className="text-xs text-[#6B7A9A] mt-1" style={{ fontFamily: "var(--font-body)" }}>
                    {plan.annual} RON/an (facturat anual)
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: plan.highlight ? "#0051CC" : "#00C2FF" }}
                    />
                    <span className="text-sm text-[#0D1F5C]" style={{ fontFamily: "var(--font-body)" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`block w-full text-center font-semibold text-sm py-3 px-6 rounded-xl transition-all ${
                  plan.highlight
                    ? "bg-[#0051CC] hover:bg-[#0D1F5C] text-white shadow-md hover:shadow-lg"
                    : "bg-[#EEF2FF] hover:bg-[#0D1F5C] text-[#0D1F5C] hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/pricing"
            className="text-[#0051CC] hover:text-[#0D1F5C] text-sm font-medium underline underline-offset-2 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Vezi prețuri complete și comparație detaliată →
          </Link>
        </div>

        {/* Trust strip */}
        <div className="mt-10 pt-8 border-t border-[#EEF2FF] flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {["14 zile gratuit", "Anulezi oricând", "Plăți securizate", "Suport în română", "Site-ul tău nu se șterge la anulare"].map(
            (item) => (
              <div key={item} className="flex items-center gap-1.5 text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                <Check size={12} className="text-[#00C2FF]" />
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
