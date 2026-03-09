"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Zap, ShoppingCart, Globe, FileBarChart, PlusCircle, ArrowRight } from "lucide-react";

// ─── Add-ons definition ───────────────────────────────────────────────────────
// Each plan references these by id and carries its own href (set when the
// white-label dashboard generates the package link).
const ADDONS = [
  {
    id: "store-basic",
    name: "Store Basic",
    icon: ShoppingCart,
    price: "+79 RON/lună",
    priceMonthly: 79,
    tags: ["WooCommerce", "Până la 50 produse", "Gateway plată"],
  },
  {
    id: "store-growth",
    name: "Store Growth",
    icon: ShoppingCart,
    price: "+129 RON/lună",
    priceMonthly: 129,
    tags: ["Produse nelimitate", "Import CSV", "1 mentenanță/lună"],
  },
  {
    id: "domain",
    name: "Gestionare Domeniu & DNS",
    icon: Globe,
    price: "+29 RON/lună",
    priceMonthly: 29,
    tags: ["Transfer domeniu", "DNS + SSL", "Reînnoire automată"],
  },
  {
    id: "reporting",
    name: "Raportare Automată",
    icon: FileBarChart,
    price: "+39 RON/lună",
    priceMonthly: 39,
    tags: ["Raport PDF lunar", "Date GA4", "Recomandări SEO"],
  },
];

// ─── Plans ────────────────────────────────────────────────────────────────────
const plans = [
  {
    id: "pro",
    name: "Pro",
    desc: "Pentru afaceri ambițioase care vor mai mult.",
    monthly: 399,
    annual: 3590,
    twoYear: 6700,
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
    // href for each addon-only package — fill these in from your dashboard
    addonHrefs: {
      "store-basic": "#",
      "store-growth": "#",
      "domain": "#",
      "reporting": "#",
    },
  },
  {
    id: "growth",
    name: "Growth",
    desc: "Cel mai ales plan pentru afaceri în creștere.",
    monthly: 239,
    annual: 2150,
    twoYear: 3980,
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
    addonHrefs: {
      "store-basic": "#",
      "store-growth": "#",
      "domain": "#",
      "reporting": "#",
    },
  },
  {
    id: "core",
    name: "Core",
    desc: "Tot ce ai nevoie pentru a începe.",
    monthly: 149,
    annual: 1290,
    twoYear: 2380,
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
    addonHrefs: {
      "store-basic": "#",
      "store-growth": "#",
      "domain": "#",
      "reporting": "#",
    },
  },
];

type BillingPeriod = "monthly" | "annual" | "twoYear";

function getMonthlyPrice(plan: typeof plans[0], billing: BillingPeriod) {
  if (billing === "monthly") return plan.monthly;
  if (billing === "annual") return Math.round(plan.annual / 12);
  return Math.round(plan.twoYear / 24);
}

function getSavingsRON(plan: typeof plans[0], billing: BillingPeriod) {
  if (billing === "annual") return plan.monthly * 12 - plan.annual;
  if (billing === "twoYear") return plan.monthly * 24 - plan.twoYear;
  return 0;
}

function getSavingsPct(plan: typeof plans[0], billing: BillingPeriod) {
  if (billing === "annual")
    return Math.round(((plan.monthly * 12 - plan.annual) / (plan.monthly * 12)) * 100);
  if (billing === "twoYear")
    return Math.round(((plan.monthly * 24 - plan.twoYear) / (plan.monthly * 24)) * 100);
  return 0;
}

export default function PricingPlans() {
  const [billing, setBilling] = useState<BillingPeriod>("annual");

  return (
    <section className="py-16 bg-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Billing toggle ─────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {(["monthly", "annual", "twoYear"] as BillingPeriod[]).map((period) => {
            const labels: Record<BillingPeriod, string> = {
              monthly: "Lunar",
              annual: "Anual",
              twoYear: "2 Ani",
            };
            const badges: Partial<Record<BillingPeriod, string>> = {
              annual: "−17%",
              twoYear: "−21%",
            };
            const active = billing === period;
            return (
              <button
                key={period}
                onClick={() => setBilling(period)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  active
                    ? "bg-[#0D1F5C] text-white border-[#0D1F5C] shadow-md"
                    : "bg-white text-[#6B7A9A] border-[#EEF2FF] hover:border-[#0D1F5C]/30 hover:text-[#0D1F5C]"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {labels[period]}
                {badges[period] && (
                  <span
                    className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                      active
                        ? "bg-[#00C2FF] text-[#0D1F5C]"
                        : "bg-[#00C2FF]/20 text-[#0051CC]"
                    }`}
                  >
                    {badges[period]}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ── Founders banner ────────────────────────────────────── */}
        <div className="mb-10 bg-gradient-to-r from-[#0D1F5C] to-[#0051CC] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Zap size={22} className="text-[#00C2FF] flex-shrink-0 mt-0.5" />
            <div>
              <p
                className="text-white font-bold text-base leading-snug"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Ofertă Fondatori — prețuri blocate 24 de luni
              </p>
              <p className="text-white/70 text-sm mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                Primii 50 de clienți anuale primesc prețul actual garantat 2 ani + beneficii exclusive.
              </p>
            </div>
          </div>
          <Link
            href="/start?founders=true"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#00C2FF] hover:bg-white text-[#0D1F5C] font-semibold text-sm px-6 py-2.5 rounded-xl transition-all whitespace-nowrap shadow-lg shadow-black/20"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            Vreau oferta fondatori
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* ── Plan cards ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => {
            const price = getMonthlyPrice(plan, billing);
            const savingsRON = getSavingsRON(plan, billing);
            const savingsPct = getSavingsPct(plan, billing);
            const billedTotal =
              billing === "annual"
                ? plan.annual
                : billing === "twoYear"
                ? plan.twoYear
                : null;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border-2 transition-all flex flex-col ${
                  plan.highlight
                    ? "border-[#0051CC] shadow-2xl shadow-[#0051CC]/10 bg-white md:scale-[1.02]"
                    : "border-[#EEF2FF] bg-white hover:border-[#0051CC]/30 hover:shadow-lg"
                }`}
              >
                {/* Recommended badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="inline-flex items-center bg-[#0051CC] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Card header */}
                <div className="p-7 pb-5">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: plan.color, fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[#6B7A9A] mb-5" style={{ fontFamily: "var(--font-body)" }}>
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span
                      className="text-4xl font-bold text-[#0D1F5C] tabular-nums"
                      style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
                    >
                      {price}
                    </span>
                    <span className="text-[#6B7A9A] text-sm">RON/lună</span>
                  </div>

                  {billedTotal && (
                    <p className="text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                      {billedTotal.toLocaleString("ro-RO")} RON /{" "}
                      {billing === "annual" ? "an" : "2 ani"}, facturat{" "}
                      {billing === "annual" ? "anual" : "la 2 ani"}
                    </p>
                  )}

                  {/* Savings pill */}
                  {savingsRON > 0 ? (
                    <div className="inline-flex items-center gap-1.5 mt-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                      <span>Economisești</span>
                      <span className="font-bold">{savingsRON.toLocaleString("ro-RO")} RON</span>
                      <span className="text-emerald-500 font-normal">({savingsPct}%)</span>
                    </div>
                  ) : (
                    <div className="h-7 mt-3" />
                  )}
                </div>

                {/* Features */}
                <div className="px-7 pb-5">
                  <ul className="space-y-2.5">
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

                  {/* Prompt price */}
                  <div
                    className="mt-5 py-3 border-y border-[#EEF2FF] text-xs text-[#6B7A9A]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Prompturi extra: {plan.promptPrice}
                  </div>
                </div>

                {/* Main CTA */}
                <div className="px-7 pb-5">
                  <Link
                    href={plan.ctaHref}
                    className={`flex w-full items-center justify-center gap-2 font-semibold text-sm py-3.5 px-6 rounded-xl transition-all ${
                      plan.highlight
                        ? "bg-[#0051CC] hover:bg-[#0D1F5C] text-white shadow-lg shadow-[#0051CC]/25 hover:shadow-[#0D1F5C]/25"
                        : plan.id === "pro"
                        ? "bg-[#0D1F5C] hover:bg-[#0051CC] text-white shadow-md hover:shadow-lg"
                        : "bg-[#EEF2FF] hover:bg-[#0D1F5C] text-[#0D1F5C] hover:text-white border border-[#0D1F5C]/10 hover:border-transparent"
                    }`}
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                  >
                    {plan.cta}
                    <ArrowRight size={15} />
                  </Link>
                  {plan.id !== "pro" && (
                    <p
                      className="text-center text-xs text-[#6B7A9A] mt-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Fără card • Anulezi oricând
                    </p>
                  )}
                </div>

                {/* ── Add-ons ──────────────────────────────────────── */}
                <div className="px-7 pb-7 mt-auto">
                  <div className="border-t border-[#EEF2FF] pt-5">
                    <div className="flex items-center gap-2 mb-4">
                      <PlusCircle size={14} className="text-[#0051CC]" />
                      <span
                        className="text-xs font-semibold uppercase tracking-widest text-[#6B7A9A]"
                        style={{ fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
                      >
                        Add-on-uri disponibile
                      </span>
                    </div>

                    <div className="space-y-3">
                      {ADDONS.map((addon) => {
                        const AddonIcon = addon.icon;
                        const href = plan.addonHrefs[addon.id as keyof typeof plan.addonHrefs];
                        return (
                          <div
                            key={addon.id}
                            className="rounded-xl border border-[#EEF2FF] bg-[#EEF2FF]/50 p-3.5"
                          >
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div className="flex items-start gap-2">
                                <AddonIcon size={14} className="text-[#0051CC] mt-0.5 flex-shrink-0" />
                                <div>
                                  <p
                                    className="text-xs font-semibold text-[#0D1F5C] leading-tight"
                                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                                  >
                                    {addon.name}
                                  </p>
                                  <p
                                    className="text-xs text-[#0051CC] font-medium mt-0.5"
                                    style={{ fontFamily: "var(--font-mono)" }}
                                  >
                                    {addon.price}
                                  </p>
                                </div>
                              </div>
                              {/* Activează button */}
                              <a
                                href={href}
                                className="flex-shrink-0 inline-flex items-center gap-1 bg-white hover:bg-[#0051CC] text-[#0051CC] hover:text-white border border-[#0051CC]/30 hover:border-[#0051CC] text-xs font-semibold px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shadow-sm"
                                style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                                aria-label={`Activează ${addon.name} pentru planul ${plan.name}`}
                              >
                                Activează
                                <ArrowRight size={10} />
                              </a>
                            </div>
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1">
                              {addon.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] bg-white text-[#6B7A9A] px-2 py-0.5 rounded-full border border-[#EEF2FF]"
                                  style={{ fontFamily: "var(--font-body)" }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
