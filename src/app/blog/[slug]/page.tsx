import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Articol Blog",
  description: "Articol de pe blogul nova.",
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <section className="bg-[#060D1A] pt-32 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft size={14} />
            Înapoi la Blog
          </Link>
          <span className="text-xs font-semibold text-[#00C2FF] bg-[#00C2FF]/10 px-2.5 py-1 rounded-full">
            Ghiduri Business
          </span>
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-5 leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Cum apari pe Google cu afacerea ta locală: ghid complet 2026
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              8 min de lectură
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              28 Februarie 2026
            </div>
            <div className="flex items-center gap-1.5 text-white/40">
              Echipa nova
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10">
            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <style>{`
                .prose h2 { font-family: var(--font-display); font-weight: 700; color: #0D1F5C; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; }
                .prose h3 { font-family: var(--font-display); font-weight: 600; color: #0D1F5C; font-size: 1.2rem; margin-top: 1.5rem; margin-bottom: 0.75rem; }
                .prose p { font-family: var(--font-body); color: #0D1F5C; line-height: 1.8; margin-bottom: 1.25rem; }
                .prose ul { margin-bottom: 1.25rem; }
                .prose li { font-family: var(--font-body); color: #0D1F5C; margin-bottom: 0.5rem; }
                .prose strong { font-weight: 600; color: #0D1F5C; }
              `}</style>

              <p>
                Dacă ai o afacere locală în România și vrei să fii găsit de clienți pe Google, ai nevoie de o strategie clară de SEO local. Vestea bună: nu e atât de complicat pe cât pare.
              </p>

              <h2>1. Google Business Profile — fundația oricărei strategii locale</h2>
              <p>
                Primul pas este să creezi sau să revendici profilul tău Google Business Profile (GBP). Acesta e listing-ul care apare pe Google Maps și în căutările locale cu date de contact, program și recenzii.
              </p>
              <p>
                Asigură-te că incluzi:
              </p>
              <ul>
                <li>Categoria corectă a afacerii (ex: &ldquo;Restaurant&rdquo;, &ldquo;Cabinet stomatologic&rdquo;)</li>
                <li>Adresa completă și numărul de telefon corect</li>
                <li>Programul de funcționare actualizat</li>
                <li>Cel puțin 10 fotografii de calitate</li>
                <li>Descriere detaliată cu cuvinte cheie relevante</li>
              </ul>

              <h2>2. Site-ul tău — cartea de vizită digitală</h2>
              <p>
                Un site WordPress bine optimizat este esențial. Google preferă site-urile rapide, mobile-friendly și cu conținut relevant. Cu nova, generezi automat un site optimizat SEO, cu structura corectă de headings și meta-taguri.
              </p>

              <h2>3. Cuvinte cheie locale — cum le găsești</h2>
              <p>
                Gândește-te cum caută clienții tăi: &ldquo;stomatolog Cluj&rdquo;, &ldquo;restaurant italian București centru&rdquo;, &ldquo;instalator autorizat Timișoara&rdquo;. Integrează aceste fraze natural în textul site-ului, titlurile paginilor și descrierile meta.
              </p>

              <h2>4. Recenzii Google — cea mai puternică armă</h2>
              <p>
                Recenziile sunt factorul #1 în decizia unui client local. 5 recenzii autentice și pozitive îți pot dubla rata de click din Google Maps. Solicită activ recenzii clienților mulțumiți.
              </p>

              <h2>Concluzie</h2>
              <p>
                SEO local nu este un sprint, ci un maraton. Dar dacă urmezi acești pași și ai un site bine construit, vei vedea rezultate în 2-3 luni. Nova îți oferă fundația tehnică — tu te ocupi de conținut și relații cu clienții.
              </p>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* TOC */}
              <div className="bg-[#EEF2FF] rounded-xl p-5">
                <h4
                  className="text-sm font-bold text-[#0D1F5C] mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  Cuprins
                </h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "1. Google Business Profile",
                    "2. Site-ul tău",
                    "3. Cuvinte cheie locale",
                    "4. Recenzii Google",
                    "Concluzie",
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[#0051CC] hover:text-[#0D1F5C] transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share */}
              <div className="bg-white border border-[#EEF2FF] rounded-xl p-5">
                <h4
                  className="text-sm font-bold text-[#0D1F5C] mb-3 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  <Share2 size={14} />
                  Distribuie
                </h4>
                <div className="flex gap-2">
                  {["Facebook", "LinkedIn", "WhatsApp"].map((net) => (
                    <button
                      key={net}
                      className="flex-1 text-xs py-2 px-2 bg-[#EEF2FF] hover:bg-[#0D1F5C] hover:text-white text-[#0D1F5C] rounded-lg transition-all font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {net}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#0D1F5C] rounded-xl p-5 text-center">
                <p
                  className="text-white font-bold text-sm mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  Gata să lansezi site-ul?
                </p>
                <p className="text-white/60 text-xs mb-4" style={{ fontFamily: "var(--font-body)" }}>
                  14 zile gratuit. Fără card.
                </p>
                <Link
                  href="/start"
                  className="block w-full text-center bg-[#00C2FF] hover:bg-white text-[#0D1F5C] font-semibold text-sm py-2.5 rounded-lg transition-all"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                >
                  Încearcă nova →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
