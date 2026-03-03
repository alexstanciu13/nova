import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Video, Download, Calendar, ArrowRight, CheckSquare } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Resurse — Ghiduri, tutoriale și webinare pentru a-ți face site-ul să performeze",
  description:
    "Ghiduri pas-cu-pas, tutoriale video, webinare lunare și kit-ul de lansare nova. Totul în română, pentru afacerea ta.",
};

const guides = [
  {
    category: "Restaurant",
    title: "Cum adaugi meniul restaurantului în 5 minute",
    duration: "5 min",
    type: "Video + Pași",
    desc: "Adaugă și actualizează meniul cu fotografii, prețuri și alergeni.",
  },
  {
    category: "SEO",
    title: "Cum apari pe Google cu afacerea ta locală",
    duration: "8 min",
    type: "Articol",
    desc: "Ghid complet SEO local: Google Business Profile, cuvinte cheie, structura paginilor.",
  },
  {
    category: "General",
    title: "Cum conectezi domeniul tău la nova",
    duration: "3 min",
    type: "Video + Pași",
    desc: "Pas cu pas: transfer DNS, conectare domeniu .ro sau .com, verificare SSL.",
  },
  {
    category: "Galerie",
    title: "Cum adaugi o galerie foto profesională",
    duration: "4 min",
    type: "Video + Pași",
    desc: "Organizează fotografiile pe categorii, adaugă descrieri și optimizează pentru web.",
  },
  {
    category: "Formulare",
    title: "Cum creezi un formular de programări online",
    duration: "6 min",
    type: "Video + Pași",
    desc: "Configurează formularul de contact/programare și setează notificările pe email.",
  },
  {
    category: "E-mail",
    title: "Cum configurezi emailul profesional @domeniultau.ro",
    duration: "4 min",
    type: "Video + Pași",
    desc: "Setează căsuța de email cu G Suite sau Zoho Mail conectată la domeniul tău.",
  },
];

const articles = [
  {
    title: "5 greșeli comune pe care le fac afacerile mici pe site-ul lor",
    category: "Business Guides",
    readTime: "5 min",
  },
  {
    title: "De ce ai nevoie de un website și nu doar de o pagină Facebook",
    category: "Business Guides",
    readTime: "4 min",
  },
  {
    title: "Cum să obții primele 100 de vizite organice pe Google",
    category: "SEO",
    readTime: "7 min",
  },
  {
    title: "Fotografia de produs: sfaturi simple cu telefonul",
    category: "Business Guides",
    readTime: "6 min",
  },
];

const webinars = [
  {
    title: "Lansează-ți site-ul în 30 de minute cu nova",
    date: "20 Martie 2026",
    time: "18:00",
    type: "Live",
    status: "upcoming",
  },
  {
    title: "SEO local pentru afaceri mici: ghid practic",
    date: "15 Februarie 2026",
    time: "18:00",
    type: "Înregistrat",
    status: "recorded",
  },
  {
    title: "Cum să crești rezervările online cu 30%",
    date: "25 Ianuarie 2026",
    time: "18:00",
    type: "Înregistrat",
    status: "recorded",
  },
];

const launchChecklist = [
  "Generează site-ul cu AI nova",
  "Verifică textele generate și personalizează-le",
  "Adaugă fotografiile afacerii tale",
  "Conectează domeniul tău (sau cumpără unul nou)",
  "Configurează formularul de contact",
  "Setează Google Analytics 4",
  "Creează-ți profilul Google Business",
  "Distribuie site-ul pe rețelele sociale",
  "Trimite URL-ul clienților existenți",
  "Solicită primele 5 recenzii Google",
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#060D1A] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C2FF] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Resurse
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Tot ce ai nevoie să reușești
          </h1>
          <p
            className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ghiduri practice, tutoriale video și webinare. Nu despre nova — despre cum îți crești afacerea.
          </p>
        </div>
      </section>

      {/* How-to Guides */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ghiduri practice"
            title="Sarcini organizate, nu funcționalități"
            subtitle="Fiecare ghid rezolvă un task specific al afacerii tale, pas cu pas."
            centered={false}
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div
                key={guide.title}
                className="rounded-2xl border border-[#EEF2FF] p-6 hover:border-[#0051CC]/30 hover:shadow-md transition-all bg-white cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#0051CC] bg-[#EEF2FF] px-2 py-0.5 rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                    {guide.duration}
                  </span>
                </div>
                <h3
                  className="text-base font-bold text-[#0D1F5C] mb-2 group-hover:text-[#0051CC] transition-colors"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {guide.title}
                </h3>
                <p className="text-sm text-[#6B7A9A] mb-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {guide.desc}
                </p>
                <div className="flex items-center gap-2">
                  {guide.type.includes("Video") ? (
                    <Video size={14} className="text-[#0051CC]" />
                  ) : (
                    <BookOpen size={14} className="text-[#0051CC]" />
                  )}
                  <span className="text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                    {guide.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/resources/guides"
              className="inline-flex items-center gap-2 text-[#0051CC] hover:text-[#0D1F5C] font-medium text-sm transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Vezi toate ghidurile <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Launch Kit */}
      <section id="launch-kit" className="py-20 bg-[#EEF2FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0D1F5C] rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C2FF]/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Download size={28} className="text-[#00C2FF]" />
                <div>
                  <h2
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    Kit de lansare: Primele 7 zile
                  </h2>
                  <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    Checklist complet pentru a lansa cu succes
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {launchChecklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckSquare size={16} className="text-[#00C2FF] flex-shrink-0" />
                    <span className="text-white/80 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/resources/launch-kit.pdf"
                  className="inline-flex items-center gap-2 bg-[#00C2FF] hover:bg-white text-[#0D1F5C] font-semibold text-sm px-6 py-3 rounded-xl transition-all"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                >
                  <Download size={16} />
                  Descarcă Kit PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Articole pentru afacerea ta"
            title="Crește afacerea, nu doar site-ul"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {articles.map((article) => (
              <div
                key={article.title}
                className="rounded-2xl border border-[#EEF2FF] p-5 hover:border-[#0051CC]/30 hover:shadow-md transition-all cursor-pointer group"
              >
                <span className="text-xs font-semibold text-[#0051CC] bg-[#EEF2FF] px-2 py-0.5 rounded-full">
                  {article.category}
                </span>
                <h3
                  className="text-sm font-bold text-[#0D1F5C] mt-3 mb-1 group-hover:text-[#0051CC] transition-colors leading-snug"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {article.title}
                </h3>
                <p className="text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                  {article.readTime} de lectură
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#0051CC] hover:text-[#0D1F5C] font-medium text-sm transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Citește blogul <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section id="webinars" className="py-20 bg-[#EEF2FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Webinare"
            title="Sesiuni live și înregistrate"
            subtitle="Alătură-te comunității nova și învață de la experți și alți antreprenori români."
          />
          <div className="mt-10 space-y-4">
            {webinars.map((w) => (
              <div
                key={w.title}
                className="bg-white rounded-xl border border-[#EEF2FF] p-5 flex items-center justify-between gap-4 hover:border-[#0051CC]/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#EEF2FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar size={18} className="text-[#0051CC]" />
                  </div>
                  <div>
                    <h3
                      className="text-sm font-bold text-[#0D1F5C]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    >
                      {w.title}
                    </h3>
                    <p className="text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                      {w.date} • {w.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      w.status === "upcoming"
                        ? "bg-green-100 text-green-700"
                        : "bg-[#EEF2FF] text-[#6B7A9A]"
                    }`}
                  >
                    {w.type}
                  </span>
                  <button className="text-xs font-medium text-[#0051CC] hover:text-[#0D1F5C] transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                    {w.status === "upcoming" ? "Înregistrează-te" : "Vizionează"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
