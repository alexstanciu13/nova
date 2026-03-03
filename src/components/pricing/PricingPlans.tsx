"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    id: "pro",
    name: "Pro",
    desc: "Pentru afaceri ambițioase care vor mai mult.",
    monthly: 399,
    annual: 3590,
    twoYear: 6700,
    monthlyAnnual: Math.round(3590 / 12),
    monthlyTwoYear: Math.round(6700 / 24),
    highlight: false,
    cta: "Contactează-ne",
    ctaHref: "/contact",
    color: "#0D1F5C",
    promptPrice: "0.75 RON/prompt",
    features: [
      "4 generări site/lună",
      "150 prompturi AI/lună",
      "Pagini nelimitate",
      "CDN prioritar",
      "SEO avansat + schema markup",
      "GA4 + Meta Pixel configurat",
      "3 intervenții tehnice/lună",
      "Raport PDF lunar",
      "Suport WhatsApp 4h (L-V 9-18)",
      "Backup zilnic automatizat",
      "SSL inclus",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    desc: "Cel mai ales plan pentru afaceri în creștere.",
    monthly: 239,
    annual: 2150,
    twoYear: 3980,
    monthlyAnnual: Math.round(2150 / 12),
    monthlyTwoYear: Math.round(3980 / 24),
    highlight: true,
    badge: "Recomandat",
    cta: "Încearcă gratuit 14 zile",
    ctaHref: "/start",
    color: "#0051CC",
    promptPrice: "1 RON/prompt",
    features: [
      "2 generări site/lună",
      "60 prompturi AI/lună",
      "Până la 15 pagini",
      "Backup zilnic",
      "SEO de bază configurat",
      "GA4 integrat",
      "1 intervenție tehnică/lună",
      "Suport email 24h",
      "SSL inclus",
      "Hosting inclus",
    ],
  },
  {
    id: "core",
    name: "Core",
    desc: "Tot ce ai nevoie pentru a începe.",
    monthly: 149,
    annual: 1290,
    twoYear: 2380,
    monthlyAnnual: Math.round(1290 / 12),
    monthlyTwoYear: Math.round(2380 / 24),
    highlight: false,
    cta: "Încearcă gratuit 14 zile",
    ctaHref: "/start",
    color: "#6B7A9A",
    promptPrice: "1.5 RON/prompt",
    features: [
      "1 generare site/lună",
      "20 prompturi AI/lună",
      "Până la 5 pagini",
      "Backup săptămânal",
      "Suport email 48h",
      "SSL inclus",
      "Hosting inclus",
    ],
  },
];

type BillingPeriod = "monthly" | "annual" | "twoYear";

const billingLabels: Record<BillingPeriod, string> = {
  monthly: "Lunar",
  annual: "Anual",
  twoYear: "2 Ani",
};

export default function PricingPlans() {
  const [billing, setBilling] = useState<BillingPeriod>("annual");

  const getPrice = (plan: typeof plans[0]) => {
    if (billing === "monthly") return plan.monthly;
    if (billing === "annual") return plan.monthlyAnnual;
    return plan.monthlyTwoYear;
  };

  const getTotal = (plan: typeof plans[0]) => {
    if (billing === "monthly") return null;
    if (billing === "annual") return plan.annual;
    return plan.twoYear;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (billing === "annual") return Math.round((plan.monthly * 12 - plan.annual) / (plan.monthly * 12) * 100);
    if (billing === "twoYear") return Math.round((plan.monthly * 24 - plan.twoYear) / (plan.monthly * 24) * 100);
    return 0;
  };

  return (
    <section className="py-16 bg-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(["monthly", "annual", "twoYear"] as BillingPeriod[]).map((period) => (
            <button
              key={period}
              onClick={() => setBilling(period)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                billing === period
                  ? "bg-[#0D1F5C] text-white border-[#0D1F5C] shadow-md"
                  : "bg-white text-[#6B7A9A] border-[#EEF2FF] hover:border-[#0D1F5C]/30"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {billingLabels[period]}
              {period === "annual" && (
                <span
                  className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                    billing === period ? "bg-[#00C2FF] text-[#0D1F5C]" : "bg-[#00C2FF]/20 text-[#0051CC]"
                  }`}
                >
                  -17%
                </span>
              )}
              {period === "twoYear" && (
                <span
                  className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                    billing === period ? "bg-[#00C2FF] text-[#0D1F5C]" : "bg-[#00C2FF]/20 text-[#0051CC]"
                  }`}
                >
                  -21%
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Founders Banner */}
        <div className="mb-8 bg-gradient-to-r from-[#0D1F5C] to-[#0051CC] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Zap size={24} className="text-[#00C2FF] flex-shrink-0" />
            <div>
              <p
                className="text-white font-bold text-base"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Ofertă Fondatori — prețuri blocate 24 de luni
              </p>
              <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Primii 50 de clienți anuale primesc prețul actual garantat 2 ani + beneficii exclusive. Locuri limitate.
              </p>
            </div>
          </div>
          <Link
            href="/start?founders=true"
            className="flex-shrink-0 bg-[#00C2FF] hover:bg-white text-[#0D1F5C] font-semibold text-sm px-6 py-2.5 rounded-xl transition-all whitespace-nowrap"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            Vreau oferta fondatori →
          </Link>
        </div>

        {/* Plans — anchored Pro | Growth | Core */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => {
            const savings = getSavings(plan);
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 border-2 transition-all ${
                  plan.highlight
                    ? "border-[#0051CC] shadow-2xl shadow-[#0051CC]/10 bg-white scale-[1.02]"
                    : "border-[#EEF2FF] bg-white hover:border-[#0051CC]/30 hover:shadow-md"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#0051CC] text-white text-xs font-bold px-4 py-1 rounded-full" style={{ fontFamily: "var(--font-body)" }}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3
                  className="text-xl font-bold text-[#0D1F5C] mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-[#6B7A9A] mb-5" style={{ fontFamily: "var(--font-body)" }}>
                  {plan.desc}
                </p>

                <div className="mb-1">
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-4xl font-bold text-[#0D1F5C]"
                      style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
                    >
                      {getPrice(plan)}
                    </span>
                    <span className="text-[#6B7A9A] text-sm">RON/lună</span>
                  </div>
                  {getTotal(plan) && (
                    <p className="text-xs text-[#6B7A9A] mt-1" style={{ fontFamily: "var(--font-body)" }}>
                      {getTotal(plan)} RON/{billing === "annual" ? "an" : "2 ani"} • facturat
                      {billing === "annual" ? " anual" : " la 2 ani"}
                    </p>
                  )}
                </div>

                {savings > 0 && (
                  <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-5">
                    Economisești {savings}% față de lunar
                  </div>
                )}
                {savings === 0 && <div className="h-5 mb-5" />}

                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: plan.highlight ? "#0051CC" : "#00C2FF" }}
                      />
                      <span className="text-sm text-[#0D1F5C]" style={{ fontFamily: "var(--font-body)" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="text-xs text-[#6B7A9A] mb-5 py-3 border-y border-[#EEF2FF]" style={{ fontFamily: "var(--font-mono)" }}>
                  Prompturi extra: {plan.promptPrice}
                </div>

                <Link
                  href={plan.ctaHref}
                  className={`block w-full text-center font-semibold text-sm py-3.5 px-6 rounded-xl transition-all ${
                    plan.highlight
                      ? "bg-[#0051CC] hover:bg-[#0D1F5C] text-white shadow-md hover:shadow-lg"
                      : "bg-[#EEF2FF] hover:bg-[#0D1F5C] text-[#0D1F5C] hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                >
                  {plan.cta}
                </Link>

                {plan.id !== "pro" && (
                  <p className="text-center text-xs text-[#6B7A9A] mt-2" style={{ fontFamily: "var(--font-body)" }}>
                    Fără card • Anulezi oricând
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
