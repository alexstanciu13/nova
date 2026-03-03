import type { Metadata } from "next";
import Link from "next/link";
import { Check, Users, TrendingUp, BarChart3, Layout, FileText, Headphones } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Parteneri & Agenții — Câștigă venituri recurente cu nova",
  description:
    "Oferă clienților tăi un website WordPress profesional în minute și câștigă comisioane recurente. Află despre programul de afiliere și de revânzare nova.",
};

const models = [
  {
    id: "affiliate",
    title: "Afiliat",
    subtitle: "Recomanzi, noi facem restul",
    color: "#0051CC",
    bg: "#EEF2FF",
    benefits: [
      "Comision recurent 12 luni per client adus",
      "Dashboard de tracking în timp real",
      "Materiale de marketing în română",
      "Link personalizat de afiliere",
      "Plăți lunare automate",
    ],
    bestFor: "Freelanceri, consultanți, creatori de conținut",
  },
  {
    id: "reseller",
    title: "Reseller / Wholesale",
    subtitle: "Tu vinzi și gestionezi, noi asigurăm platforma",
    color: "#0D1F5C",
    bg: "#F0F4FF",
    benefits: [
      "Prețuri wholesale — marjă garantată",
      "Tu ești responsabil pentru suportul L1 (clientul tău)",
      "Nova asigură uptime platformă + suport L2",
      "Dashboard centralizat pentru toți clienții",
      "White-label disponibil (la cerere)",
      "Rapoarte automate per client",
    ],
    bestFor: "Agenții web, firme de marketing, freelanceri cu portofoliu",
  },
];

const agencyFeatures = [
  {
    icon: Layout,
    title: "Client Handoff",
    desc: "Predai controlul clientului tău în mod controlat. El poate edita conținut în siguranță fără să strice designul.",
  },
  {
    icon: FileText,
    title: "Raportare Automată PDF",
    desc: "Trimite automat rapoarte cu trafic, conversii și recomandări SEO. Dovedește valoarea fiecărei luni.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Centralizat",
    desc: "Gestionează toate site-urile clienților dintr-un singur loc. Status, backup-uri, intervenții — totul vizibil.",
  },
  {
    icon: Users,
    title: "Roluri și Permisiuni",
    desc: "Fiecare client vede doar ce e al lui. Tu ai vizibilitate completă și control total.",
  },
  {
    icon: TrendingUp,
    title: "Șabloane Exclusive Reseller",
    desc: "Acces la o librărie de șabloane premium disponibile doar pentru partenerii noștri.",
  },
  {
    icon: Headphones,
    title: "Manager de Cont Dedicat",
    desc: "Partenerii Reseller primesc un manager de cont dedicat pentru onboarding rapid și suport prioritar.",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#060D1A] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#0051CC]/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-[#00C2FF]/10 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C2FF] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Program Parteneri
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Oferă clienților tăi un website profesional
            <br />
            <span className="text-[#00C2FF]">în minute</span>
            {" "}— câștigă venituri recurente.
          </h1>
          <p
            className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Indiferent dacă ești freelancer, agenție sau consultant, programul nova îți oferă instrumentele și comisioanele pentru a construi un business sustenabil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 bg-[#00C2FF] hover:bg-white text-[#060D1A] font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
            >
              Aplică ca partener →
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 text-white/80 border border-white/20 hover:border-white/50 font-medium text-base px-8 py-4 rounded-xl transition-all"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Calculează câștigurile
            </a>
          </div>
        </div>
      </section>

      {/* Two Models */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Modele de parteneriat"
            title="Alege modelul potrivit pentru tine"
            subtitle="Două căi clare pentru a câștiga cu nova — simplu sau cu control total."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {models.map((model) => (
              <div
                key={model.id}
                className="rounded-2xl border-2 border-[#EEF2FF] p-8 hover:border-[#0051CC]/40 hover:shadow-md transition-all"
                style={{ backgroundColor: model.bg }}
              >
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ color: model.color, fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {model.title}
                </h3>
                <p className="text-[#6B7A9A] text-sm mb-6" style={{ fontFamily: "var(--font-body)" }}>
                  {model.subtitle}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {model.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: model.color }} />
                      <span className="text-sm text-[#0D1F5C]" style={{ fontFamily: "var(--font-body)" }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white/70 rounded-xl p-3 text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                  <span className="font-semibold text-[#0D1F5C]">Potrivit pentru: </span>
                  {model.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Margin Calculator */}
      <section id="calculator" className="py-20 bg-[#EEF2FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Calculator câștiguri"
            title="Estimează venitul tău lunar"
            subtitle="Calculează cât poți câștiga în funcție de numărul de clienți gestionați."
          />
          <div className="mt-12 bg-white rounded-2xl p-8 border border-[#EEF2FF] shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {[
                { clients: 5, label: "Start (5 clienți)", monthly: "~590 RON", annually: "~7.080 RON" },
                { clients: 15, label: "Mediu (15 clienți)", monthly: "~1.770 RON", annually: "~21.240 RON" },
                { clients: 30, label: "Agenție (30 clienți)", monthly: "~3.540 RON", annually: "~42.480 RON" },
              ].map((tier) => (
                <div
                  key={tier.clients}
                  className="text-center rounded-xl bg-[#EEF2FF] p-5 border border-[#EEF2FF] hover:border-[#0051CC]/30 transition-colors"
                >
                  <p
                    className="text-sm font-semibold text-[#6B7A9A] mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {tier.label}
                  </p>
                  <p
                    className="text-2xl font-bold text-[#0D1F5C] mb-1"
                    style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
                  >
                    {tier.monthly}
                  </p>
                  <p className="text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                    lunar • {tier.annually}/an
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-center text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
              * Estimare bazată pe comisionul standard de afiliere. Detalii exacte la aplicare.
            </p>
          </div>
        </div>
      </section>

      {/* Agency Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Funcționalități pentru agenții"
            title="Instrumentele de care ai nevoie pentru a scala"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencyFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-[#EEF2FF] p-6 hover:border-[#0051CC]/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-[#EEF2FF] rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#0051CC]" />
                  </div>
                  <h3
                    className="text-base font-bold text-[#0D1F5C] mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#6B7A9A] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-[#EEF2FF]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Aplică"
            title="Vrei să devii partener nova?"
            subtitle="Completează formularul și te contactăm în 24h cu detalii despre program și comisioane."
          />
          <form className="mt-10 space-y-4 bg-white rounded-2xl p-8 border border-[#EEF2FF] shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-[#0D1F5C] mb-1.5"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  Prenume și Nume *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ion Popescu"
                  className="w-full border border-[#EEF2FF] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder:text-[#6B7A9A]/50 focus:outline-none focus:border-[#0051CC] focus:ring-2 focus:ring-[#0051CC]/10 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-[#0D1F5C] mb-1.5"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  Agenție / Companie
                </label>
                <input
                  type="text"
                  placeholder="Agenția Ta SRL"
                  className="w-full border border-[#EEF2FF] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder:text-[#6B7A9A]/50 focus:outline-none focus:border-[#0051CC] focus:ring-2 focus:ring-[#0051CC]/10 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-[#0D1F5C] mb-1.5"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="ion@agentia-ta.ro"
                className="w-full border border-[#EEF2FF] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder:text-[#6B7A9A]/50 focus:outline-none focus:border-[#0051CC] focus:ring-2 focus:ring-[#0051CC]/10 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-[#0D1F5C] mb-1.5"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Telefon *
              </label>
              <input
                type="tel"
                required
                placeholder="+40 7XX XXX XXX"
                className="w-full border border-[#EEF2FF] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder:text-[#6B7A9A]/50 focus:outline-none focus:border-[#0051CC] focus:ring-2 focus:ring-[#0051CC]/10 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-[#0D1F5C] mb-1.5"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Câți clienți gestionezi în prezent? *
              </label>
              <select
                required
                className="w-full border border-[#EEF2FF] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] focus:outline-none focus:border-[#0051CC] focus:ring-2 focus:ring-[#0051CC]/10 transition-colors bg-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <option value="">Selectează</option>
                <option>1–5 clienți</option>
                <option>6–15 clienți</option>
                <option>16–30 clienți</option>
                <option>30+ clienți</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-[#0D1F5C] mb-1.5"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Tip parteneriat preferat
              </label>
              <div className="flex gap-4">
                {["Afiliat", "Reseller", "Ambele"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="partnership" value={opt} className="accent-[#0051CC]" />
                    <span className="text-sm text-[#0D1F5C]" style={{ fontFamily: "var(--font-body)" }}>
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-semibold text-sm py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg mt-2"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Trimite aplicația →
            </button>
            <p className="text-center text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
              Te contactăm în maximum 24h cu detalii despre program.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
