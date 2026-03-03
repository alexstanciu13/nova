"use client";

import { useState } from "react";
import { Check, X, ChevronDown } from "lucide-react";

const features = [
  {
    category: "Generare & AI",
    items: [
      { name: "Generări site/lună", core: "1", growth: "2", pro: "4" },
      { name: "Prompturi AI/lună", core: "20", growth: "60", pro: "150" },
      { name: "Prompturi extra", core: "1.5 RON", growth: "1 RON", pro: "0.75 RON" },
      { name: "Pagini generate", core: "5", growth: "15", pro: "Nelimitat" },
    ],
  },
  {
    category: "Hosting & Performanță",
    items: [
      { name: "Hosting inclus", core: true, growth: true, pro: true },
      { name: "SSL/HTTPS gratuit", core: true, growth: true, pro: true },
      { name: "CDN prioritar", core: false, growth: false, pro: true },
      { name: "Backup automat", core: "Săptămânal", growth: "Zilnic", pro: "Zilnic" },
    ],
  },
  {
    category: "SEO & Tracking",
    items: [
      { name: "SEO de bază", core: false, growth: true, pro: true },
      { name: "SEO avansat + schema", core: false, growth: false, pro: true },
      { name: "Google Analytics 4", core: false, growth: true, pro: true },
      { name: "Meta Pixel", core: false, growth: false, pro: true },
      { name: "Raport PDF lunar", core: false, growth: false, pro: true },
    ],
  },
  {
    category: "Suport",
    items: [
      { name: "Suport email", core: "48h", growth: "24h", pro: "24h" },
      { name: "Suport WhatsApp", core: false, growth: false, pro: "4h (L-V)" },
      { name: "Intervenții tehnice/lună", core: "0", growth: "1", pro: "3" },
      { name: "Suport în română", core: true, growth: true, pro: true },
    ],
  },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={16} className="text-[#0051CC] mx-auto" />
    ) : (
      <X size={16} className="text-[#6B7A9A]/40 mx-auto" />
    );
  }
  return (
    <span className="text-sm text-[#0D1F5C] font-medium" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
      {value}
    </span>
  );
}

export default function ComparisonTable() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 bg-[#EEF2FF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-2 text-[#0051CC] hover:text-[#0D1F5C] font-semibold text-sm transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            {open ? "Ascunde" : "Arată"} comparație completă funcționalități
            <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </div>

        {open && (
          <div className="bg-white rounded-2xl overflow-hidden border border-[#EEF2FF] shadow-sm">
            {/* Header row */}
            <div className="grid grid-cols-4 bg-[#0D1F5C] text-white">
              <div className="p-4 col-span-1" />
              {["Core", "Growth", "Pro"].map((plan, i) => (
                <div key={plan} className={`p-4 text-center ${i === 1 ? "bg-[#0051CC]" : ""}`}>
                  <span
                    className="font-bold text-sm"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {plan}
                  </span>
                  {i === 1 && (
                    <div>
                      <span className="text-[#00C2FF] text-xs">Recomandat</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {features.map((group) => (
              <div key={group.category}>
                <div className="bg-[#EEF2FF] px-4 py-2.5">
                  <span
                    className="text-xs font-semibold text-[#6B7A9A] uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.08em" }}
                  >
                    {group.category}
                  </span>
                </div>
                {group.items.map((item, i) => (
                  <div
                    key={item.name}
                    className={`grid grid-cols-4 border-b border-[#EEF2FF] ${i % 2 === 1 ? "bg-[#FAFBFF]" : ""}`}
                  >
                    <div className="p-4 col-span-1">
                      <span className="text-sm text-[#0D1F5C]" style={{ fontFamily: "var(--font-body)" }}>
                        {item.name}
                      </span>
                    </div>
                    <div className="p-4 text-center">
                      <FeatureValue value={item.core} />
                    </div>
                    <div className="p-4 text-center bg-[#EEF2FF]/50">
                      <FeatureValue value={item.growth} />
                    </div>
                    <div className="p-4 text-center">
                      <FeatureValue value={item.pro} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
