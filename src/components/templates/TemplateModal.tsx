"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import type { Template } from "@/lib/templates";

/* ─── Full website preview ───────────────────────────────────────── */
export function WebsitePreview({ t }: { t: Template }) {
  const heroBtnTextColor = t.colors[0];

  return (
    <div className="overflow-hidden" style={{ fontFamily: "var(--font-body)" }}>
      {/* ── Navbar ── */}
      <div
        className="flex items-center justify-between px-8 py-3 bg-white sticky top-0 z-10"
        style={{ borderBottom: `1px solid ${t.colors[0]}25` }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ backgroundColor: t.colors[0] }} />
          <span className="font-bold text-base" style={{ color: t.colors[0], fontFamily: "var(--font-display)" }}>
            {t.name}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          {t.navLinks.map((link) => (
            <span key={link} className="text-sm font-medium text-gray-600 cursor-default">
              {link}
            </span>
          ))}
        </div>
        <div
          className="text-sm font-semibold px-4 py-2 rounded-lg text-white cursor-default"
          style={{ backgroundColor: t.colors[0] }}
        >
          {t.heroBtn}
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="px-8 py-14" style={{ backgroundColor: t.colors[0] }}>
        <div className="max-w-lg">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}
          >
            {t.category}
          </div>
          <h1
            className="text-3xl font-extrabold text-white mb-3 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.heroTitle}
          </h1>
          <p className="text-white/75 text-sm leading-relaxed mb-6">{t.heroSubtitle}</p>
          <div
            className="inline-block text-sm font-bold px-6 py-3 rounded-xl cursor-default"
            style={{ backgroundColor: t.colors[1], color: heroBtnTextColor }}
          >
            {t.heroBtn} →
          </div>
        </div>
      </div>

      {/* ── Features ── */}
      <div className="px-8 py-10 bg-white">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: t.colors[0] }}
        >
          Serviciile noastre
        </p>
        <div className="grid grid-cols-3 gap-4">
          {t.features.map((f) => (
            <div key={f.title} className="rounded-2xl p-5" style={{ backgroundColor: t.colors[1] }}>
              <div className="text-2xl mb-3">{f.icon}</div>
              <div
                className="font-bold text-sm mb-1.5"
                style={{ color: t.colors[0], fontFamily: "var(--font-display)" }}
              >
                {f.title}
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Testimonial ── */}
      <div className="px-8 py-10" style={{ backgroundColor: t.colors[1] }}>
        <div className="max-w-xl mx-auto text-center">
          <div className="text-3xl mb-4" style={{ color: t.colors[0] }}>❝</div>
          <p className="text-sm text-gray-700 leading-relaxed italic mb-5">
            {t.testimonial.text}
          </p>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: t.colors[0] }}
            >
              {t.testimonial.author[0]}
            </div>
            <span className="text-xs font-semibold text-gray-600">{t.testimonial.author}</span>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="px-8 py-6" style={{ backgroundColor: t.colors[0] }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white/20" />
            <span className="text-white/80 text-sm font-medium">{t.name}</span>
          </div>
          <span className="text-white/40 text-xs">© 2025 {t.url}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Modal wrapper ──────────────────────────────────────────────── */
export function TemplateModal({ t, onClose }: { t: Template; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(6,13,26,0.75)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl flex flex-col"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200 flex-shrink-0">
          <div className="flex gap-1.5">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#FF605C] hover:opacity-80 transition-opacity"
            />
            <div className="w-3 h-3 rounded-full bg-[#FFBD44]" />
            <div className="w-3 h-3 rounded-full bg-[#00CA4E]" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-gray-200 rounded-md px-4 py-1 text-xs text-gray-500 font-medium flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.colors[0] }} />
              www.{t.url}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable website preview */}
        <div className="overflow-y-auto flex-1">
          <WebsitePreview t={t} />
        </div>

        {/* Footer bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-white border-t border-gray-100 flex-shrink-0">
          <div>
            <span className="font-bold text-sm text-[#0D1F5C]" style={{ fontFamily: "var(--font-display)" }}>
              {t.name}
            </span>
            <span
              className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ color: t.tagColor, backgroundColor: t.tagBg }}
            >
              {t.category}
            </span>
            <span className="ml-2 text-xs text-gray-400">{t.pages} pagini generate</span>
          </div>
          <Link
            href="/start"
            className="text-xs font-bold px-4 py-2 rounded-xl text-white transition-all hover:opacity-90"
            style={{ backgroundColor: t.colors[0] }}
          >
            Generează similar →
          </Link>
        </div>
      </div>
    </div>
  );
}
