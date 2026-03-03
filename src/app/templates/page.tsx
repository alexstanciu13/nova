import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Exemple & Șabloane — Site-uri generate cu nova",
  description:
    "Explorează exemple reale de site-uri WordPress generate cu nova pentru restaurante, clinici, saloane, firme de servicii și e-commerce.",
};

const categories = ["Toate", "Restaurant", "Clinică", "Salon", "Servicii", "Meseriași", "E-commerce"];

const templates = [
  {
    name: "La Bunica",
    category: "Restaurant",
    desc: "Restaurant tradițional cu meniu digital, galerie și rezervări online.",
    colors: ["#8B4513", "#F5DEB3", "#FFFFFF"],
    pages: 6,
    tagColor: "#FF8C42",
    tagBg: "#FFF3EB",
  },
  {
    name: "MedCenter",
    category: "Clinică",
    desc: "Cabinet medical cu servicii, echipă, programări și galerie.",
    colors: ["#0051CC", "#EEF2FF", "#FFFFFF"],
    pages: 7,
    tagColor: "#0051CC",
    tagBg: "#EEF2FF",
  },
  {
    name: "Beauty Star",
    category: "Salon",
    desc: "Salon beauty cu galerie lucrări, prețuri și rezervare online.",
    colors: ["#CC0051", "#FFF0F8", "#FFFFFF"],
    pages: 5,
    tagColor: "#CC0051",
    tagBg: "#FFF0F8",
  },
  {
    name: "ElectroPro",
    category: "Meseriași",
    desc: "Electrician autorizat cu servicii, portofoliu și cerere ofertă.",
    colors: ["#F5A623", "#0D1F5C", "#FFFFFF"],
    pages: 4,
    tagColor: "#008C4A",
    tagBg: "#F0FFF8",
  },
  {
    name: "AgroFresh",
    category: "E-commerce",
    desc: "Magazin produse bio cu catalog, coș și plată online.",
    colors: ["#4CAF50", "#F0FFF0", "#FFFFFF"],
    pages: 8,
    tagColor: "#6A00CC",
    tagBg: "#F8F0FF",
  },
  {
    name: "ContaExpert",
    category: "Servicii",
    desc: "Cabinet contabilitate cu servicii, echipă și formular contact.",
    colors: ["#0D1F5C", "#EEF2FF", "#FFFFFF"],
    pages: 5,
    tagColor: "#0D1F5C",
    tagBg: "#EEF2FF",
  },
  {
    name: "DrSmile",
    category: "Clinică",
    desc: "Cabinet stomatologic modern cu programare online și galerie.",
    colors: ["#00C2FF", "#F0F8FF", "#FFFFFF"],
    pages: 6,
    tagColor: "#0051CC",
    tagBg: "#EEF2FF",
  },
  {
    name: "PizzeriaRoma",
    category: "Restaurant",
    desc: "Pizzerie cu meniu, delivery și comandă online.",
    colors: ["#C0392B", "#FFF8F0", "#FFFFFF"],
    pages: 5,
    tagColor: "#FF8C42",
    tagBg: "#FFF3EB",
  },
  {
    name: "ConstructMax",
    category: "Servicii",
    desc: "Firmă construcții cu portofoliu, servicii și cerere ofertă.",
    colors: ["#E67E22", "#0D1F5C", "#FFFFFF"],
    pages: 5,
    tagColor: "#0D1F5C",
    tagBg: "#EEF2FF",
  },
  {
    name: "KinetoPro",
    category: "Clinică",
    desc: "Cabinet kinetoterapie cu servicii, programare și blog.",
    colors: ["#16A085", "#E8F8F5", "#FFFFFF"],
    pages: 6,
    tagColor: "#0051CC",
    tagBg: "#EEF2FF",
  },
  {
    name: "CoaforaElegance",
    category: "Salon",
    desc: "Salon coafură cu galerie, lista servicii și program.",
    colors: ["#8E44AD", "#F9F0FF", "#FFFFFF"],
    pages: 4,
    tagColor: "#CC0051",
    tagBg: "#FFF0F8",
  },
  {
    name: "FitLife",
    category: "Servicii",
    desc: "Sala fitness cu abonamente, antrenori și orar clase.",
    colors: ["#2C3E50", "#E74C3C", "#FFFFFF"],
    pages: 7,
    tagColor: "#0D1F5C",
    tagBg: "#EEF2FF",
  },
];

export default function TemplatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#060D1A] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C2FF] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Exemple & Șabloane
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Site-uri generate cu nova
          </h1>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Inspiră-te din exemple reale. Fiecare site este unic, generat cu AI și personalizat pentru afacerea clientului.
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 bg-[#00C2FF] hover:bg-white text-[#060D1A] font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg"
            style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
          >
            Generează site-ul meu →
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  cat === "Toate"
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
            {templates.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl overflow-hidden border border-[#EEF2FF] hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
              >
                {/* Site preview */}
                <div
                  className="aspect-[4/3] flex flex-col p-4 gap-2 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${t.colors[0]}20, ${t.colors[1]})`,
                  }}
                >
                  {/* Fake browser */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden flex-1">
                    <div className="flex gap-1 px-2 py-1.5 bg-gray-50 border-b border-gray-100">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: i === 1 ? "#FF605C" : i === 2 ? "#FFBD44" : "#00CA4E" }}
                        />
                      ))}
                    </div>
                    <div className="p-2 space-y-1.5">
                      {/* Nav */}
                      <div className="flex gap-1 items-center mb-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: t.colors[0] }} />
                        <div className="flex gap-2 ml-1">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="w-6 h-1 bg-gray-200 rounded-full" />
                          ))}
                        </div>
                      </div>
                      {/* Hero */}
                      <div className="h-8 rounded" style={{ backgroundColor: t.colors[0] + "40" }} />
                      {/* Content */}
                      <div className="grid grid-cols-3 gap-1">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-5 bg-gray-100 rounded" />
                        ))}
                      </div>
                      <div className="h-3 bg-gray-100 rounded w-3/4" />
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0D1F5C]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-white text-[#0D1F5C] text-xs font-semibold px-4 py-2 rounded-full" style={{ fontFamily: "var(--font-body)" }}>
                      <ExternalLink size={12} />
                      Previzualizare
                    </div>
                  </div>
                </div>

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
                  <p className="text-xs text-[#6B7A9A] mb-2 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {t.desc}
                  </p>
                  <p
                    className="text-xs text-[#6B7A9A]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t.pages} pagini generate
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Gata să-ți creezi propriul site?"
            subtitle="Nova generează un site unic pentru afacerea ta — nu un șablon copiat."
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start"
              className="inline-flex items-center justify-center gap-2 bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Generează site-ul meu →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 text-[#0D1F5C] border border-[#0D1F5C] hover:bg-[#0D1F5C] hover:text-white font-medium text-base px-8 py-4 rounded-xl transition-all"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Vezi prețurile
            </Link>
          </div>
          <p className="mt-4 text-sm text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
            Gratuit 14 zile • Fără card • Anulezi oricând
          </p>
        </div>
      </section>
    </>
  );
}
