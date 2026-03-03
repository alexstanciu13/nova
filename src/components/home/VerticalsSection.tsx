"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const verticals = [
  {
    id: "restaurant",
    label: "Restaurant",
    icon: "🍽️",
    headline: "Meniu online, rezervări și comenzi — toate într-un singur site",
    description:
      "Nova creează automat un site cu meniu fotografiat, galerie interioară, program de funcționare, hartă și formular de rezervare. Clienții te găsesc pe Google și fac rezervări direct.",
    benefits: [
      "Meniu digital cu poze și prețuri",
      "Sistem de rezervări online",
      "Galerie interior și preparate",
      "Integrat cu Google Maps",
    ],
    bg: "#FFF8F0",
    accent: "#FF8C42",
  },
  {
    id: "clinic",
    label: "Clinică / Cabinet",
    icon: "🏥",
    headline: "Prezentare profesională care inspiră încredere pacienților",
    description:
      "Site-ul tău medical include pagina de servicii, echipa de medici, galerie cabinet, formular de programare online și informații despre asigurări. Pacienții se programează direct.",
    benefits: [
      "Programare online automată",
      "Profil medici și servicii",
      "Galerie cabinet și echipamente",
      "Complet GDPR conform",
    ],
    bg: "#F0F8FF",
    accent: "#0051CC",
  },
  {
    id: "salon",
    label: "Salon / Beauty",
    icon: "💅",
    headline: "Portofoliu vizual care atrage clienți noi în fiecare zi",
    description:
      "Nova generează un site de salon cu galerie de lucrări, lista de servicii și prețuri, rezervare online și prezentarea echipei. Exact ce caută clientele tale.",
    benefits: [
      "Galerie lucrări impresionantă",
      "Prețuri și servicii detaliate",
      "Rezervare online simplă",
      "Integrare Instagram/Facebook",
    ],
    bg: "#FFF0F8",
    accent: "#CC0051",
  },
  {
    id: "trades",
    label: "Meseriași",
    icon: "🔧",
    headline: "Câștigă credibilitate și clienți serioși prin internet",
    description:
      "Dacă ești electrician, instalator, zugrav sau constructor, un site profesional îți aduce clienți fără reclame. Nova creează site-ul cu portofoliu, servicii și formular de ofertă.",
    benefits: [
      "Portofoliu de lucrări realizate",
      "Formular de cerere ofertă",
      "Lista de servicii și zone",
      "Autorizații și certificări vizibile",
    ],
    bg: "#F0FFF8",
    accent: "#008C4A",
  },
  {
    id: "services",
    label: "Servicii",
    icon: "💼",
    headline: "Prezentare clară care transformă vizitatorii în clienți",
    description:
      "Consultanță, contabilitate, IT, logistică — orice firmă de servicii are nevoie de un site clar, credibil și rapid. Nova îl generează adaptat serviciilor tale specifice.",
    benefits: [
      "Pagini dedicate per serviciu",
      "Testimoniale și studii de caz",
      "Blog pentru autoritate SEO",
      "Formular de contact optimizat",
    ],
    bg: "#FFFFF0",
    accent: "#8C6A00",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: "🛒",
    headline: "Magazin online WooCommerce lansat în câteva ore",
    description:
      "Vrei să vinzi online? Nova generează un magazin WooCommerce complet cu produse, categorii, coș de cumpărături și integrare cu procesatori de plată din România.",
    benefits: [
      "WooCommerce configurat complet",
      "Plăți online (card, ramburs)",
      "Catalog produse și variante",
      "Gestionare comenzi și stoc",
    ],
    bg: "#F8F0FF",
    accent: "#6A00CC",
  },
];

export default function VerticalsSection() {
  const [active, setActive] = useState("restaurant");
  const current = verticals.find((v) => v.id === active)!;

  return (
    <section className="py-20 lg:py-28 bg-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Soluții pe industrie"
          title="Nova funcționează pentru orice afacere locală"
          subtitle="Selectează industria ta și vezi cum nova generează exact site-ul de care ai nevoie."
        />

        {/* Tab selector */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {verticals.map((v) => (
            <button
              key={v.id}
              onClick={() => setActive(v.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                active === v.id
                  ? "bg-[#0D1F5C] text-white border-[#0D1F5C] shadow-md"
                  : "bg-white text-[#6B7A9A] border-[#EEF2FF] hover:border-[#0D1F5C]/30 hover:text-[#0D1F5C]"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              <span>{v.icon}</span>
              {v.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          key={active}
          className="mt-8 rounded-2xl overflow-hidden border border-[#EEF2FF] shadow-sm bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Text */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-3xl mb-4 block">{current.icon}</span>
              <h3
                className="text-2xl lg:text-3xl font-bold text-[#0D1F5C] mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                {current.headline}
              </h3>
              <p
                className="text-[#6B7A9A] text-base leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {current.description}
              </p>
              <ul className="space-y-2.5 mb-8">
                {current.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: current.accent + "20" }}
                    >
                      <Check size={11} style={{ color: current.accent }} />
                    </div>
                    <span className="text-sm text-[#0D1F5C]" style={{ fontFamily: "var(--font-body)" }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="/start"
                className="inline-flex items-center gap-2 self-start bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
              >
                Generează site pentru {current.label} →
              </a>
            </div>

            {/* Right: Visual mockup */}
            <div
              className="flex items-center justify-center p-8 lg:p-12 min-h-64"
              style={{ backgroundColor: current.bg }}
            >
              <div className="w-full max-w-sm">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-white/50">
                  {/* Fake browser bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border-b border-gray-100">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                    <div className="flex-1 bg-gray-200 rounded-full h-4 mx-2 flex items-center px-2">
                      <span className="text-gray-400 text-[9px]" style={{ fontFamily: "var(--font-mono)" }}>
                        {current.label.toLowerCase().replace(/\s/g, "")}.ro
                      </span>
                    </div>
                  </div>
                  {/* Fake page */}
                  <div className="p-4 space-y-3">
                    <div className="h-3 rounded" style={{ backgroundColor: current.accent + "30", width: "60%" }} />
                    <div className="h-2 bg-gray-100 rounded w-full" />
                    <div className="h-2 bg-gray-100 rounded w-4/5" />
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="h-12 rounded-lg" style={{ backgroundColor: current.accent + "15" }} />
                      <div className="h-12 rounded-lg" style={{ backgroundColor: current.accent + "15" }} />
                    </div>
                    <div className="h-8 rounded-lg" style={{ backgroundColor: current.accent, opacity: 0.8 }} />
                  </div>
                </div>
                <p
                  className="text-center text-xs text-[#6B7A9A] mt-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Previzualizare generată cu nova AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
