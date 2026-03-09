import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from "lucide-react";
import { posts, getPostBySlug, getAdjacentPosts, type Section } from "@/lib/posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Articol negăsit" };
  return {
    title: `${post.title} — Blog nova`,
    description: post.excerpt,
  };
}

function renderSection(section: Section, idx: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={idx} style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0D1F5C", fontSize: "1.375rem", marginTop: "2rem", marginBottom: "0.75rem" }}>
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#0D1F5C", fontSize: "1.125rem", marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p key={idx} style={{ fontFamily: "var(--font-body)", color: "#0D1F5C", lineHeight: "1.8", marginBottom: "1.25rem" }}>
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={idx} style={{ marginBottom: "1.25rem", paddingLeft: "1.25rem" }}>
          {section.items.map((item, i) => (
            <li key={i} style={{ fontFamily: "var(--font-body)", color: "#0D1F5C", marginBottom: "0.4rem", lineHeight: "1.7", listStyleType: "disc" }}>
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} style={{ marginBottom: "1.25rem", paddingLeft: "1.25rem" }}>
          {section.items.map((item, i) => (
            <li key={i} style={{ fontFamily: "var(--font-body)", color: "#0D1F5C", marginBottom: "0.4rem", lineHeight: "1.7", listStyleType: "decimal" }}>
              {item}
            </li>
          ))}
        </ol>
      );
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);
  const headings = post.content.filter((s) => s.type === "h2").map((s) => (s as { type: "h2"; text: string }).text);

  return (
    <>
      {/* Hero */}
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
            {post.category}
          </span>
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-5 leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            <div className="flex items-center gap-1.5"><Clock size={14} />{post.readTime} de lectură</div>
            <div className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</div>
            <span className="text-white/40">{post.author}</span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="relative w-full aspect-[21/9] max-h-[420px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060D1A]/30 to-transparent" />
      </div>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10">
            {/* Article */}
            <article>
              {post.content.map((section, idx) => renderSection(section, idx))}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* TOC */}
              <div className="bg-[#EEF2FF] rounded-xl p-5 sticky top-24">
                <h4 className="text-sm font-bold text-[#0D1F5C] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                  Cuprins
                </h4>
                <ul className="space-y-2 text-sm">
                  {headings.map((heading) => (
                    <li key={heading}>
                      <span className="text-[#0051CC] text-xs" style={{ fontFamily: "var(--font-body)" }}>
                        {heading}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share */}
              <div className="bg-white border border-[#EEF2FF] rounded-xl p-5">
                <h4 className="text-sm font-bold text-[#0D1F5C] mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
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
                <p className="text-white font-bold text-sm mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
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

          {/* Prev / Next */}
          {(prev || next) && (
            <div className="mt-14 pt-8 border-t border-[#EEF2FF] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prev && (
                <Link href={`/blog/${prev.slug}`} className="group flex items-center gap-3 bg-[#EEF2FF] hover:bg-[#0D1F5C] rounded-xl p-4 transition-all">
                  <ArrowLeft size={16} className="text-[#0051CC] group-hover:text-white flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[#6B7A9A] group-hover:text-white/60 mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Articolul anterior</p>
                    <p className="text-sm font-semibold text-[#0D1F5C] group-hover:text-white leading-snug line-clamp-2" style={{ fontFamily: "var(--font-body)" }}>{prev.title}</p>
                  </div>
                </Link>
              )}
              {next && (
                <Link href={`/blog/${next.slug}`} className="group flex items-center gap-3 bg-[#EEF2FF] hover:bg-[#0D1F5C] rounded-xl p-4 transition-all sm:ml-auto text-right">
                  <div>
                    <p className="text-xs text-[#6B7A9A] group-hover:text-white/60 mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Articolul următor</p>
                    <p className="text-sm font-semibold text-[#0D1F5C] group-hover:text-white leading-snug line-clamp-2" style={{ fontFamily: "var(--font-body)" }}>{next.title}</p>
                  </div>
                  <ArrowRight size={16} className="text-[#0051CC] group-hover:text-white flex-shrink-0" />
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
