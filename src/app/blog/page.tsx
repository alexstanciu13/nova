import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Ghiduri, tutoriale și noutăți nova",
  description:
    "Articole despre crearea site-urilor WordPress, SEO local, ghiduri pentru afaceri mici din România și noutăți de la nova.",
};

const categories = ["Toate", "Ghiduri Business", "Tutoriale Nova", "Studii de Caz", "Actualizări Produs", "SEO"];

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
          <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
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
                  <div className="relative aspect-[16/9] lg:aspect-auto min-h-[240px]">
                    <Image
                      src={featured.image}
                      alt={featured.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
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
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
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
