import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Blog — Ghiduri, tutoriale și noutăți nova",
  description:
    "Articole despre crearea site-urilor WordPress, SEO local, ghiduri pentru afaceri mici din România și noutăți de la nova.",
};

const categories = ["Toate", "Ghiduri Business", "Tutoriale Nova", "Studii de Caz", "Actualizări Produs", "SEO"];

const posts = [
  {
    slug: "cum-sa-apari-pe-google-local",
    category: "SEO",
    title: "Cum apari pe Google cu afacerea ta locală: ghid complet 2026",
    excerpt: "Google Business Profile, cuvinte cheie locale, pagini de servicii optimizate. Tot ce trebuie să știi pentru a fi găsit de clienții din orașul tău.",
    readTime: "8 min",
    date: "28 Feb 2026",
    featured: true,
    author: "Echipa nova",
  },
  {
    slug: "5-greseli-site-afaceri-mici",
    category: "Ghiduri Business",
    title: "5 greșeli comune pe care le fac afacerile mici pe site-ul lor",
    excerpt: "De la text prea lung pe homepage la absența unui CTA clar — greșelile care te costă clienți în fiecare zi.",
    readTime: "5 min",
    date: "21 Feb 2026",
    featured: false,
    author: "Echipa nova",
  },
  {
    slug: "de-ce-ai-nevoie-de-site-nu-facebook",
    category: "Ghiduri Business",
    title: "De ce ai nevoie de un website și nu doar de o pagină Facebook",
    excerpt: "Facebook poate dispărea, poate suspenda contul sau poate schimba algoritmul. Site-ul tău e singurul activ digital pe care îl deții.",
    readTime: "4 min",
    date: "14 Feb 2026",
    featured: false,
    author: "Echipa nova",
  },
  {
    slug: "nova-v2-update",
    category: "Actualizări Produs",
    title: "nova 2.0: Generare mai rapidă, noi șabloane și suport WooCommerce",
    excerpt: "Am lansat nova 2.0 cu o nouă generare AI de 3x mai rapidă, 12 șabloane noi și integrare nativă WooCommerce.",
    readTime: "3 min",
    date: "5 Feb 2026",
    featured: false,
    author: "Echipa nova",
  },
  {
    slug: "fotografie-produs-telefon",
    category: "Ghiduri Business",
    title: "Fotografii de produs cu telefonul: 7 trucuri simple",
    excerpt: "Nu ai nevoie de echipament scump. Cu telefonul și acești 7 pași, poți face fotografii care vând.",
    readTime: "6 min",
    date: "29 Ian 2026",
    featured: false,
    author: "Echipa nova",
  },
  {
    slug: "seo-local-restaurante",
    category: "SEO",
    title: "SEO local pentru restaurante: cum umpli mesele prin Google",
    excerpt: "Strategia pas-cu-pas pe care restaurantele din România o folosesc pentru a apărea în top 3 pe Google Maps.",
    readTime: "7 min",
    date: "22 Ian 2026",
    featured: false,
    author: "Echipa nova",
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#060D1A] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C2FF] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Blog
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Ghiduri & Resurse
          </h1>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Articole practice pentru antreprenori și afaceri mici din România.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
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

          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="block mb-10 group">
              <div className="bg-white rounded-2xl overflow-hidden border border-[#EEF2FF] hover:shadow-lg transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-[#0D1F5C] to-[#0051CC] flex items-center justify-center p-10">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#00C2FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <path d="M16 5C16 5 17 11 22 16C17 21 16 27 16 27C16 27 15 21 10 16C15 11 16 5 16 5Z" fill="#00C2FF" />
                          <path d="M5 16C5 16 11 15 16 10C21 15 27 16 27 16C27 16 21 17 16 22C11 17 5 16 5 16Z" fill="#00C2FF" />
                        </svg>
                      </div>
                      <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                        Articol recomandat
                      </p>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-[#0051CC] bg-[#EEF2FF] px-2.5 py-1 rounded-full self-start mb-3">
                      {featured.category}
                    </span>
                    <h2
                      className="text-2xl font-bold text-[#0D1F5C] mb-3 group-hover:text-[#0051CC] transition-colors leading-snug"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-[#6B7A9A] text-sm leading-relaxed mb-5" style={{ fontFamily: "var(--font-body)" }}>
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {featured.readTime} de lectură
                      </div>
                      <span>{featured.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Posts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="bg-white rounded-2xl overflow-hidden border border-[#EEF2FF] hover:shadow-md transition-all h-full flex flex-col">
                  <div className="aspect-[16/9] bg-gradient-to-br from-[#EEF2FF] to-[#d4deff] flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/60 rounded-xl flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                        <path d="M16 5C16 5 17 11 22 16C17 21 16 27 16 27C16 27 15 21 10 16C15 11 16 5 16 5Z" fill="#0051CC" />
                        <path d="M5 16C5 16 11 15 16 10C21 15 27 16 27 16C27 16 21 17 16 22C11 17 5 16 5 16Z" fill="#0051CC" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-[#0051CC] bg-[#EEF2FF] px-2 py-0.5 rounded-full self-start mb-3">
                      {post.category}
                    </span>
                    <h3
                      className="text-base font-bold text-[#0D1F5C] mb-2 group-hover:text-[#0051CC] transition-colors leading-snug flex-1"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#6B7A9A] leading-relaxed mb-4 line-clamp-2" style={{ fontFamily: "var(--font-body)" }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                      <div className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              className="inline-flex items-center gap-2 border border-[#0D1F5C] text-[#0D1F5C] hover:bg-[#0D1F5C] hover:text-white font-medium text-sm px-8 py-3 rounded-xl transition-all"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Încarcă mai multe articole <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
