"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { templates, type Template } from "@/lib/templates";
import { TemplateModal } from "@/components/templates/TemplateModal";

/* Map showcase display names to template data */
const showcaseItems = [
  { displayName: "La Bunica",  displayCategory: "Restaurant",    templateName: "La Bunica" },
  { displayName: "MedCenter",  displayCategory: "Clinică",        templateName: "MedCenter" },
  { displayName: "Beauty Star",displayCategory: "Salon",          templateName: "Beauty Star" },
  { displayName: "M&S Build",  displayCategory: "Construcții",    templateName: "ConstructMax" },
  { displayName: "AgroFresh",  displayCategory: "Produse Bio",    templateName: "AgroFresh" },
  { displayName: "ElectroPro", displayCategory: "Electrician",    templateName: "ElectroPro" },
];

function MiniMockup({ t }: { t: Template }) {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1 px-2 py-1.5 bg-gray-50 border-b border-gray-100">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FF605C]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD44]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#00CA4E]" />
        <div className="ml-1.5 flex-1 bg-gray-200 rounded-full h-1" />
      </div>
      {/* Website content */}
      <div className="p-2 space-y-1.5">
        {/* Nav */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: t.colors[0] }} />
            <div className="w-6 h-1 rounded-full" style={{ backgroundColor: t.colors[0] + "60" }} />
          </div>
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => <div key={i} className="w-4 h-0.5 bg-gray-200 rounded-full" />)}
          </div>
          <div className="w-5 h-1.5 rounded" style={{ backgroundColor: t.colors[0] }} />
        </div>
        {/* Hero */}
        <div className="h-7 rounded" style={{ backgroundColor: t.colors[0] }}>
          <div className="pt-1 pl-1.5 space-y-0.5">
            <div className="h-1 w-10 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.7)" }} />
            <div className="h-0.5 w-7 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
          </div>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-3 gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-4 rounded" style={{ backgroundColor: t.colors[1] }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShowcaseGrid() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  return (
    <>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {showcaseItems.map((item) => {
          const t = templates.find((tmpl) => tmpl.name === item.templateName);
          if (!t) return null;

          return (
            <button
              key={item.displayName}
              onClick={() => setSelectedTemplate(t)}
              className="rounded-xl overflow-hidden border border-[#EEF2FF] hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group text-left"
              style={{ backgroundColor: t.colors[1] }}
            >
              <div className="aspect-[4/3] flex flex-col items-center justify-center p-5 relative overflow-hidden">
                <MiniMockup t={t} />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0D1F5C]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div
                    className="flex items-center gap-1.5 bg-white text-[#0D1F5C] text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <ExternalLink size={11} />
                    Previzualizare
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-white border-t border-[#EEF2FF]">
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: t.tagColor, backgroundColor: t.tagBg }}
                >
                  {item.displayCategory}
                </span>
                <p
                  className="text-[#0D1F5C] text-sm font-semibold mt-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  {item.displayName}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {selectedTemplate && (
        <TemplateModal t={selectedTemplate} onClose={() => setSelectedTemplate(null)} />
      )}
    </>
  );
}
