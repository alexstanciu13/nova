"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { templates, categories, type Template } from "@/lib/templates";
import { TemplateModal } from "@/components/templates/TemplateModal";

/* ─── Small card browser mockup ─────────────────────────────────── */
function CardMockup({ t }: { t: Template }) {
  return (
    <div
      className="aspect-[4/3] flex flex-col p-3 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${t.colors[0]}15, ${t.colors[1]}80)` }}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 flex flex-col">
        {/* Browser chrome */}
        <div className="flex items-center gap-1 px-2 py-1.5 bg-gray-50 border-b border-gray-100 flex-shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF605C]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD44]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#00CA4E]" />
          <div className="ml-1.5 flex-1 bg-gray-200 rounded-full h-1.5" />
        </div>

        {/* Website content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Navbar */}
          <div
            className="flex items-center justify-between px-2 py-1 flex-shrink-0"
            style={{ borderBottom: `1px solid ${t.colors[0]}20` }}
          >
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: t.colors[0] }} />
              <div className="w-8 h-1.5 rounded-full" style={{ backgroundColor: t.colors[0] + "70" }} />
            </div>
            <div className="flex gap-1.5">
              {[28, 22, 26, 20].map((w, i) => (
                <div key={i} className="h-1 rounded-full bg-gray-200" style={{ width: w }} />
              ))}
            </div>
            <div className="h-2.5 w-8 rounded" style={{ backgroundColor: t.colors[0] }} />
          </div>

          {/* Hero section */}
          <div className="px-2 py-2 flex-shrink-0" style={{ backgroundColor: t.colors[0] }}>
            <div className="h-1 w-12 rounded-full mb-1" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
            <div className="h-2 w-20 rounded-full mb-1" style={{ backgroundColor: "rgba(255,255,255,0.9)" }} />
            <div className="h-1 w-16 rounded-full mb-2" style={{ backgroundColor: "rgba(255,255,255,0.5)" }} />
            <div className="h-2.5 w-10 rounded" style={{ backgroundColor: t.colors[1], opacity: 0.95 }} />
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-3 gap-1 px-2 pt-1.5 flex-shrink-0">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded p-1 space-y-0.5" style={{ backgroundColor: t.colors[1] }}>
                <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: t.colors[0] + "50" }} />
                <div className="h-1 rounded-full" style={{ backgroundColor: t.colors[0] + "40" }} />
                <div className="h-1 rounded-full w-4/5 bg-gray-200" />
              </div>
            ))}
          </div>

          {/* Content row */}
          <div className="flex gap-1.5 px-2 pt-1.5">
            <div className="w-[45%] h-7 rounded-sm flex-shrink-0" style={{ backgroundColor: t.colors[1] }} />
            <div className="flex-1 space-y-1 pt-0.5">
              <div className="h-1 rounded-full" style={{ backgroundColor: t.colors[0] + "50" }} />
              <div className="h-1 rounded-full w-4/5 bg-gray-100" />
              <div className="h-1 rounded-full w-3/5 bg-gray-100" />
              <div className="h-2 w-8 rounded mt-0.5" style={{ backgroundColor: t.colors[0] + "60" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#0D1F5C]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div
          className="flex items-center gap-2 bg-white text-[#0D1F5C] text-xs font-semibold px-4 py-2 rounded-full"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <ExternalLink size={12} />
          Previzualizare
        </div>
      </div>
    </div>
  );
}

/* ─── Main exported component ────────────────────────────────────── */
export default function TemplatesGrid() {
  const [activeCategory, setActiveCategory] = useState("Toate");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const filtered =
    activeCategory === "Toate"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 bg-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                cat === activeCategory
                  ? "bg-[#0D1F5C] text-white border-[#0D1F5C]"
                  : "bg-white text-[#6B7A9A] border-[#EEF2FF] hover:border-[#0D1F5C]/30"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((t) => (
            <button
              key={t.name}
              onClick={() => setSelectedTemplate(t)}
              className="bg-white rounded-2xl overflow-hidden border border-[#EEF2FF] hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group text-left"
            >
              <CardMockup t={t} />

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3
                    className="text-sm font-bold text-[#0D1F5C]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {t.name}
                  </h3>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ color: t.tagColor, backgroundColor: t.tagBg }}
                  >
                    {t.category}
                  </span>
                </div>
                <p
                  className="text-xs text-[#6B7A9A] mb-2 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.desc}
                </p>
                <p className="text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-mono)" }}>
                  {t.pages} pagini generate
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTemplate && (
        <TemplateModal t={selectedTemplate} onClose={() => setSelectedTemplate(null)} />
      )}
    </section>
  );
}
