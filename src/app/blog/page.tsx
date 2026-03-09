import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog — Ghiduri, tutoriale și noutăți nova",
  description:
    "Articole despre crearea site-urilor WordPress, SEO local, ghiduri pentru afaceri mici din România și noutăți de la nova.",
};

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

      <BlogContent featured={featured} rest={rest} />
    </>
  );
}
