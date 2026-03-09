"use client";

import { useState } from "react";
import { Check, Zap, ShoppingCart, Globe, FileBarChart, ArrowRight, Plus, X } from "lucide-react";

// ─── Add-ons ─────────────────────────────────────────────────────────────────
const ADDONS = [
  { id: "store-basic",  name: "Store Basic",        icon: ShoppingCart, price: 79,  label: "+79 RON/lună",  desc: "Magazin online cu până la 50 produse, coș de cumpărături și plăți online." },
  { id: "store-growth", name: "Store Growth",       icon: ShoppingCart, price: 129, label: "+129 RON/lună", desc: "Produse nelimitate, reduceri, coduri promo și rapoarte de vânzări." },
  { id: "domain",       name: "Domeniu & DNS",      icon: Globe,        price: 29,  label: "+29 RON/lună",  desc: "Înregistrare domeniu .ro/.com și configurare DNS gestionată de noi." },
  { id: "reporting",    name: "Raportare Automată", icon: FileBarChart, price: 39,  label: "+39 RON/lună",  desc: "Raport PDF lunar cu trafic, conversii și recomandări SEO." },
] as const;

type AddonId = typeof ADDONS[number]["id"];

// Helper: sorted active ids → map key
function comboKey(active: AddonId[]): string {
  return [...active].sort().join("+");
}

// ─── Plans ────────────────────────────────────────────────────────────────────
// hrefs: every key is a sorted "+"-joined combination of active add-on IDs.
// "" = base plan only. Fill these in from your white-label dashboard.
const plans = [
  {
    id: "core",
    name: "Core",
    desc: "Tot ce ai nevoie pentru a începe.",
    monthly: 149,
    annual: 1290,
    twoYear: 2380,
    highlight: false,
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
    hrefs: {
      "":                                        "#",
      "store-basic":                             "#",
      "store-growth":                            "#",
      "domain":                                  "#",
      "reporting":                               "#",
      "store-basic+store-growth":                "#",
      "domain+store-basic":                      "#",
      "reporting+store-basic":                   "#",
      "domain+store-growth":                     "#",
      "reporting+store-growth":                  "#",
      "domain+reporting":                        "#",
      "domain+store-basic+store-growth":         "#",
      "reporting+store-basic+store-growth":      "#",
      "domain+reporting+store-basic":            "#",
      "domain+reporting+store-growth":           "#",
      "domain+reporting+store-basic+store-growth": "#",
    } as Record<string, string>,
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
    hrefs: {
      "":                                        "#",
      "store-basic":                             "#",
      "store-growth":                            "#",
      "domain":                                  "#",
      "reporting":                               "#",
      "store-basic+store-growth":                "#",
      "domain+store-basic":                      "#",
      "reporting+store-basic":                   "#",
      "domain+store-growth":                     "#",
      "reporting+store-growth":                  "#",
      "domain+reporting":                        "#",
      "domain+store-basic+store-growth":         "#",
      "reporting+store-basic+store-growth":      "#",
      "domain+reporting+store-basic":            "#",
      "domain+reporting+store-growth":           "#",
      "domain+reporting+store-basic+store-growth": "#",
    } as Record<string, string>,
  },
  {
    id: "pro",
    name: "Pro",
    desc: "Pentru afaceri ambițioase care vor mai mult.",
    monthly: 399,
    annual: 3590,
    twoYear: 6700,
    highlight: false,
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
    hrefs: {
      "":                                        "#",
      "store-basic":                             "#",
      "store-growth":                            "#",
      "domain":                                  "#",
      "reporting":                               "#",
      "store-basic+store-growth":                "#",
      "domain+store-basic":                      "#",
      "reporting+store-basic":                   "#",
      "domain+store-growth":                     "#",
      "reporting+store-growth":                  "#",
      "domain+reporting":                        "#",
      "domain+store-basic+store-growth":         "#",
      "reporting+store-basic+store-growth":      "#",
      "domain+reporting+store-basic":            "#",
      "domain+reporting+store-growth":           "#",
      "domain+reporting+store-basic+store-growth": "#",
    } as Record<string, string>,
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

// ─── Individual plan card ─────────────────────────────────────────────────────
function PlanCard({ plan, billing }: { plan: typeof plans[0]; billing: BillingPeriod }) {
  const [activeAddons, setActiveAddons] = useState<AddonId[]>([]);

  const toggle = (id: AddonId) =>
    setActiveAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );

  const key = comboKey(activeAddons);
  const href = plan.hrefs[key] ?? "#";

  const basePrice = getMonthlyPrice(plan, billing);
  const addonTotal = activeAddons.reduce((sum, id) => {
    const addon = ADDONS.find((a) => a.id === id);
    return sum + (addon?.price ?? 0);
  }, 0);
  const totalPrice = basePrice + addonTotal;

  const savingsRON = getSavingsRON(plan, billing);
  const savingsPct = getSavingsPct(plan, billing);
  const billedTotal =
    billing === "annual" ? plan.annual : billing === "twoYear" ? plan.twoYear : null;

  return (
    <div
      className={`relative rounded-2xl border-2 transition-all flex flex-col ${
        plan.highlight
          ? "border-[#0051CC] shadow-2xl shadow-[#0051CC]/10 bg-white md:scale-[1.02]"
          : "border-[#EEF2FF] bg-white hover:border-[#0051CC]/30 hover:shadow-lg"
      }`}
    >
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

      {/* Header */}
      <div className="p-5 pb-4">
        <h3
          className="text-lg font-bold mb-0.5"
          style={{ color: plan.color, fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          {plan.name}
        </h3>
        <p className="text-xs text-[#6B7A9A] mb-3" style={{ fontFamily: "var(--font-body)" }}>
          {plan.desc}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-0.5">
          <span
            className="text-3xl font-bold text-[#0D1F5C] tabular-nums transition-all"
            style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
          >
            {totalPrice}
          </span>
          <span className="text-[#6B7A9A] text-sm">RON/lună</span>
        </div>

        {addonTotal > 0 && (
          <p className="text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
            {basePrice} plan + {addonTotal} add-on-uri
          </p>
        )}

        {billedTotal && (
          <p className="text-xs text-[#6B7A9A] mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
            {billedTotal.toLocaleString("ro-RO")} RON /{" "}
            {billing === "annual" ? "an" : "2 ani"}, facturat{" "}
            {billing === "annual" ? "anual" : "la 2 ani"}
          </p>
        )}

        {savingsRON > 0 ? (
          <div className="inline-flex items-center gap-1.5 mt-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
            Economisești{" "}
            <span className="font-bold">{savingsRON.toLocaleString("ro-RO")} RON</span>
            <span className="text-emerald-500 font-normal">({savingsPct}%)</span>
          </div>
        ) : (
          <div className="h-6 mt-2" />
        )}
      </div>

      {/* Features */}
      <div className="px-5 pb-4">
        <ul className="space-y-1.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check
                size={13}
                className="flex-shrink-0 mt-0.5"
                style={{ color: plan.highlight ? "#0051CC" : "#00C2FF" }}
              />
              <span className="text-xs text-[#0D1F5C]" style={{ fontFamily: "var(--font-body)" }}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <div
          className="mt-3 py-2 border-y border-[#EEF2FF] text-xs text-[#6B7A9A]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Prompturi extra: {plan.promptPrice}
        </div>
      </div>

      {/* Add-ons toggle section */}
      <div className="px-5 pb-4">
        <p
          className="text-xs font-semibold uppercase tracking-widest text-[#6B7A9A] mb-2"
          style={{ fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
        >
          Add-on-uri
        </p>
        <div className="space-y-1.5">
          {ADDONS.map((addon) => {
            const AddonIcon = addon.icon;
            const active = activeAddons.includes(addon.id);
            return (
              <button
                key={addon.id}
                onClick={() => toggle(addon.id)}
                className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg border text-left transition-all ${
                  active
                    ? "bg-[#0051CC] border-[#0051CC] text-white shadow-md shadow-[#0051CC]/20"
                    : "bg-white border-[#EEF2FF] text-[#0D1F5C] hover:border-[#0051CC]/40 hover:bg-[#EEF2FF]/50"
                }`}
              >
                <div className="flex items-start gap-2 min-w-0">
                  <AddonIcon
                    size={12}
                    className={`flex-shrink-0 mt-0.5 ${active ? "text-white" : "text-[#0051CC]"}`}
                  />
                  <div className="min-w-0">
                    <span
                      className={`text-xs font-medium block ${active ? "text-white" : "text-[#0D1F5C]"}`}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      {addon.name}
                    </span>
                    <span
                      className={`text-xs leading-tight block ${active ? "text-white/70" : "text-[#6B7A9A]"}`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {addon.desc}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span
                    className={`text-xs font-semibold ${active ? "text-white/80" : "text-[#0051CC]"}`}
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {addon.label}
                  </span>
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      active ? "bg-white/20" : "bg-[#EEF2FF]"
                    }`}
                  >
                    {active ? (
                      <X size={9} className="text-white" />
                    ) : (
                      <Plus size={9} className="text-[#0051CC]" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5 mt-auto">
        <a
          href={href}
          className={`flex w-full items-center justify-center gap-2 font-semibold text-sm py-3 px-5 rounded-xl transition-all ${
            plan.highlight
              ? "bg-[#0051CC] hover:bg-[#0D1F5C] text-white shadow-lg shadow-[#0051CC]/25 hover:shadow-[#0D1F5C]/25"
              : plan.id === "pro"
              ? "bg-[#0D1F5C] hover:bg-[#0051CC] text-white shadow-md hover:shadow-lg"
              : "bg-[#EEF2FF] hover:bg-[#0D1F5C] text-[#0D1F5C] hover:text-white border border-[#0D1F5C]/10 hover:border-transparent"
          }`}
          style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
        >
          Alege planul {plan.name}
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function PricingPlans() {
  const [billing, setBilling] = useState<BillingPeriod>("annual");

  return (
    <section className="py-16 bg-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {(["monthly", "annual", "twoYear"] as BillingPeriod[]).map((period) => {
            const labels: Record<BillingPeriod, string> = { monthly: "Lunar", annual: "Anual", twoYear: "2 Ani" };
            const badges: Partial<Record<BillingPeriod, string>> = { annual: "−17%", twoYear: "−21%" };
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
                      active ? "bg-[#00C2FF] text-[#0D1F5C]" : "bg-[#00C2FF]/20 text-[#0051CC]"
                    }`}
                  >
                    {badges[period]}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Founders banner */}
        <div className="mb-10 bg-gradient-to-r from-[#0D1F5C] to-[#0051CC] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Zap size={22} className="text-[#00C2FF] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-bold text-base" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                Ofertă Fondatori — prețuri blocate 24 de luni
              </p>
              <p className="text-white/70 text-sm mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                Primii 50 de clienți anuale primesc prețul actual garantat 2 ani + beneficii exclusive.
              </p>
            </div>
          </div>
          <a
            href="/start?founders=true"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#00C2FF] hover:bg-white text-[#0D1F5C] font-semibold text-sm px-6 py-2.5 rounded-xl transition-all whitespace-nowrap shadow-lg shadow-black/20"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            Vreau oferta fondatori <ArrowRight size={15} />
          </a>
        </div>

        {/* Cards — Core | Growth | Pro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} />
          ))}
        </div>
      </div>
    </section>
  );
}
