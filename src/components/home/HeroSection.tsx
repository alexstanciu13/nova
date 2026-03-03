"use client";

import Link from "next/link";
import { ArrowDown, Play, Star } from "lucide-react";
import NovaIcon from "@/components/NovaIcon";

const logos = ["RestaCafe", "MedCenter", "SalonElegance", "FixMate", "CuratImpec", "BioFresh"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060D1A] pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0051CC]/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#00C2FF]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-[#0D1F5C]/30 rounded-full blur-[80px]" />
        {/* Star dots */}
        <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-white/40 rounded-full" />
        <div className="absolute top-[25%] right-[15%] w-1 h-1 bg-[#00C2FF]/60 rounded-full" />
        <div className="absolute top-[60%] left-[20%] w-0.5 h-0.5 bg-white/30 rounded-full" />
        <div className="absolute top-[40%] right-[8%] w-0.5 h-0.5 bg-white/50 rounded-full" />
        <div className="absolute bottom-[30%] right-[30%] w-1 h-1 bg-[#00C2FF]/40 rounded-full" />
        <div className="absolute top-[70%] right-[20%] w-0.5 h-0.5 bg-white/20 rounded-full" />
        <div className="absolute top-[10%] right-[40%] w-0.5 h-0.5 bg-white/30 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <NovaIcon size={16} variant="cyan" />
              <span
                className="text-xs text-white/80 font-medium"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                AI + WordPress + Hosting — totul într-unul
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-display font-extrabold text-white leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              Un website profesional
              <br />
              <span className="text-[#00C2FF]">pentru afacerea ta</span>
              <br />
              — gata în câteva minute, cu AI.
            </h1>

            {/* Sub-headline */}
            <p
              className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl lg:max-w-xl"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              WordPress gestionat + hosting inclus + suport în română.
              Fără cunoștințe tehnice.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-6">
              <Link
                href="/start"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00C2FF] hover:bg-[#0051CC] text-[#060D1A] hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-[#0051CC]/20"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
              >
                Încearcă gratuit 14 zile
              </Link>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white/80 hover:text-white border border-white/20 hover:border-white/40 font-medium text-base px-8 py-4 rounded-xl transition-all"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                <ArrowDown size={16} />
                Vezi cum funcționează
              </a>
            </div>

            {/* Microcopy */}
            <p
              className="text-white/40 text-sm text-center lg:text-left"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Anulezi oricând • Setup în câteva minute • Suport în română
            </p>

            {/* Social proof */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p
                className="text-white/50 text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, letterSpacing: "0.1em" }}
              >
                Folosit de 100+ afaceri din România
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2">
                {logos.map((logo) => (
                  <span
                    key={logo}
                    className="text-white/30 text-sm font-semibold tracking-tight"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Video/Demo mockup */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              {/* Browser chrome mockup */}
              <div className="bg-[#0D1F5C]/60 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1 bg-white/10 rounded-md px-3 py-1 mx-2">
                    <span className="text-white/40 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                      nova.ro/dashboard → generează site...
                    </span>
                  </div>
                </div>

                {/* Demo content placeholder */}
                <div className="relative aspect-[16/10] bg-[#060D1A] overflow-hidden">
                  {/* Simulated AI generation UI */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-6">
                    <div className="w-full bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <NovaIcon size={20} variant="cyan" />
                        <span className="text-white/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                          nova AI generează site-ul tău...
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
                          <div className="h-2 bg-[#00C2FF]/20 rounded-full flex-1 overflow-hidden">
                            <div className="h-full bg-[#00C2FF] rounded-full" style={{ width: "78%" }} />
                          </div>
                          <span className="text-white/40 text-xs font-mono">78%</span>
                        </div>
                        <p className="text-white/40 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                          Creez pagina de servicii...
                        </p>
                      </div>
                    </div>

                    {/* Site preview cards */}
                    <div className="grid grid-cols-2 gap-3 w-full">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="shimmer h-3 rounded mb-2 w-3/4" />
                        <div className="shimmer h-2 rounded mb-1 w-full" />
                        <div className="shimmer h-2 rounded w-2/3" />
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="shimmer h-3 rounded mb-2 w-1/2" />
                        <div className="shimmer h-2 rounded mb-1 w-full" />
                        <div className="shimmer h-2 rounded w-3/4" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[#00C2FF]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-pulse" />
                      <span className="text-xs" style={{ fontFamily: "var(--font-body)" }}>
                        Site-ul va fi gata în ~2 minute
                      </span>
                    </div>
                  </div>

                  {/* Play button overlay */}
                  <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group">
                    <div className="w-16 h-16 bg-[#00C2FF] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-[#0D1F5C] ml-1" fill="#0D1F5C" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2.5 border border-[#EEF2FF]">
                <div className="w-8 h-8 bg-[#EEF2FF] rounded-lg flex items-center justify-center">
                  <Star size={14} className="text-[#0051CC]" fill="#0051CC" />
                </div>
                <div>
                  <p className="text-[#0D1F5C] font-bold text-sm leading-none" style={{ fontFamily: "var(--font-display)" }}>
                    4.9/5
                  </p>
                  <p className="text-[#6B7A9A] text-xs" style={{ fontFamily: "var(--font-body)" }}>
                    Rating mediu
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-[#0D1F5C] text-white rounded-xl shadow-xl p-3 border border-white/10">
                <p
                  className="font-mono text-xs text-[#00C2FF] font-semibold"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  2 min
                </p>
                <p className="text-white/70 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                  Timp mediu lansare
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
