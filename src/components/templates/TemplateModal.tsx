"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Star, ShoppingCart, ChevronRight, MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import type { Template } from "@/lib/templates";

/* ─── Helpers ────────────────────────────────────────────────────── */
function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}
function heroTextColor(bg: string) {
  return isLight(bg) ? "#0D1F5C" : "#FFFFFF";
}
function heroBtnStyle(t: Template) {
  const bg = isLight(t.colors[0]) ? t.colors[1] : t.colors[1];
  return { backgroundColor: bg, color: t.colors[0] };
}

/* ─── Shared navbar ──────────────────────────────────────────────── */
function Navbar({ t }: { t: Template }) {
  return (
    <div
      className="flex items-center justify-between px-5 sm:px-8 py-3 bg-white sticky top-0 z-10 shadow-sm"
      style={{ borderBottom: `2px solid ${t.colors[0]}20` }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: t.colors[0] }}
        >
          {t.name[0]}
        </div>
        <span
          className="font-extrabold text-sm"
          style={{ color: t.colors[0], fontFamily: "var(--font-display)" }}
        >
          {t.name}
        </span>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        {t.navLinks.slice(0, 3).map((link) => (
          <span key={link} className="text-xs font-medium text-gray-500 cursor-default hover:text-gray-800 transition-colors">
            {link}
          </span>
        ))}
      </div>
      <button
        className="text-xs font-bold px-3.5 py-2 rounded-lg text-white cursor-default shadow-sm"
        style={{ backgroundColor: t.colors[0] }}
      >
        {t.heroBtn}
      </button>
    </div>
  );
}

/* ─── Shared testimonial ─────────────────────────────────────────── */
function Testimonial({ t }: { t: Template }) {
  return (
    <div className="px-6 sm:px-10 py-10" style={{ backgroundColor: t.colors[1] }}>
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-0.5 mb-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={13} fill="#FACC15" className="text-yellow-400" />
          ))}
        </div>
        <p className="text-sm text-gray-700 leading-relaxed italic mb-5">
          &ldquo;{t.testimonial.text}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
            style={{ backgroundColor: t.colors[0] }}
          >
            {t.testimonial.author[0]}
          </div>
          <span className="text-xs font-semibold text-gray-700">{t.testimonial.author}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Shared footer ──────────────────────────────────────────────── */
function Footer({ t }: { t: Template }) {
  return (
    <div className="px-6 sm:px-8 py-5" style={{ backgroundColor: t.colors[0] }}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-white/20 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
            {t.name[0]}
          </div>
          <span className="text-white/80 text-sm font-medium">{t.name}</span>
        </div>
        <div className="flex items-center gap-4 text-white/50 text-xs">
          <span className="flex items-center gap-1">
            <Phone size={10} /> +40 700 000 000
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={10} /> România
          </span>
        </div>
        <span className="text-white/30 text-xs">© 2025 {t.url}</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   RESTAURANT LAYOUT
   ═══════════════════════════════════════════════════════════════════ */
function RestaurantLayout({ t }: { t: Template }) {
  const isLaChef = t.name === "PizzeriaRoma";
  const menuItems = isLaChef
    ? [
        { name: "Pizza Margherita", price: "32 lei", tag: "Classic", emoji: "🍕" },
        { name: "Pizza Prosciutto", price: "38 lei", tag: "Popular", emoji: "🍖" },
        { name: "Pizza 4 Brânzeturi", price: "40 lei", tag: "Chef's pick", emoji: "🧀" },
        { name: "Tiramisu", price: "18 lei", tag: "Desert", emoji: "🍰" },
      ]
    : [
        { name: "Ciorbă de burtă", price: "28 lei", tag: "Popular", emoji: "🍲" },
        { name: "Sarmale cu mămăligă", price: "35 lei", tag: "Chef's pick", emoji: "🥘" },
        { name: "Papricaș de pui", price: "32 lei", tag: null, emoji: "🍗" },
        { name: "Plăcinte cu brânză", price: "18 lei", tag: "Nou", emoji: "🥧" },
      ];

  return (
    <>
      {/* ── Hero with food imagery ── */}
      <div className="relative overflow-hidden" style={{ backgroundColor: t.colors[0] }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 50%, white 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative flex flex-col sm:flex-row items-center px-7 sm:px-10 py-10 gap-6">
          <div className="flex-1">
            <div
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: "rgba(255,255,255,0.18)", color: heroTextColor(t.colors[0]) }}
            >
              ⭐ {t.category} · {t.url}
            </div>
            <h1
              className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight"
              style={{ color: heroTextColor(t.colors[0]), fontFamily: "var(--font-display)" }}
            >
              {t.heroTitle}
            </h1>
            <p
              className="text-sm leading-relaxed mb-6 max-w-sm"
              style={{ color: heroTextColor(t.colors[0]) + "BB" }}
            >
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="text-sm font-bold px-5 py-2.5 rounded-xl cursor-default shadow-md"
                style={heroBtnStyle(t)}
              >
                {t.heroBtn} →
              </button>
              <button
                className="text-sm font-medium px-5 py-2.5 rounded-xl cursor-default border text-white/80 border-white/25"
              >
                Meniu complet
              </button>
            </div>
          </div>
          {/* Decorative food badge */}
          <div
            className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center text-6xl shadow-xl border-4 border-white/20"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            {isLaChef ? "🍕" : "🍽️"}
          </div>
        </div>
        {/* Opening hours strip */}
        <div
          className="flex items-center justify-between px-7 sm:px-10 py-3 text-xs"
          style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
        >
          <span className="flex items-center gap-1.5 text-white/70">
            <Clock size={11} /> Luni–Duminică: 12:00 – 23:00
          </span>
          <span className="flex items-center gap-1.5 text-white/70">
            <Phone size={11} /> Rezervări: +40 700 000 000
          </span>
        </div>
      </div>

      {/* ── Menu highlights ── */}
      <div className="px-6 sm:px-8 py-8 bg-white">
        <div className="flex items-center justify-between mb-5">
          <h2
            className="text-base font-bold text-gray-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Preparate recomandate
          </h2>
          <span
            className="text-xs font-semibold flex items-center gap-1 cursor-default"
            style={{ color: t.colors[0] }}
          >
            Meniu complet <ChevronRight size={13} />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:shadow-sm transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl"
                style={{ backgroundColor: t.colors[1] }}
              >
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-1">
                  <p className="text-xs font-semibold text-gray-800 leading-snug">{item.name}</p>
                  {item.tag && (
                    <span
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: t.colors[0] + "18", color: t.colors[0] }}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>
                <p
                  className="text-sm font-bold mt-0.5"
                  style={{ color: t.colors[0] }}
                >
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Photo gallery strip ── */}
      <div className="px-6 sm:px-8 pb-8">
        <h2
          className="text-sm font-bold text-gray-700 mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Galerie foto
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {["🥩", "🍷", "🏡", "👨‍🍳"].map((emoji, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: t.colors[1] }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>

      {/* ── Reservation banner ── */}
      <div
        className="mx-5 mb-6 px-6 py-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ backgroundColor: t.colors[0] + "12", border: `1.5px dashed ${t.colors[0]}40` }}
      >
        <div>
          <p
            className="font-bold text-gray-900 text-sm"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Rezervă o masă pentru seara aceasta
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            Locuri disponibile pentru 2–8 persoane
          </p>
        </div>
        <button
          className="text-xs font-bold px-5 py-2.5 rounded-xl text-white cursor-default flex-shrink-0 shadow-md"
          style={{ backgroundColor: t.colors[0] }}
        >
          Rezervă acum
        </button>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CLINIC LAYOUT
   ═══════════════════════════════════════════════════════════════════ */
function ClinicLayout({ t }: { t: Template }) {
  const doctors = [
    { initials: "AI", name: "Dr. Ana Ionescu", specialty: t.features[0].title, exp: "12 ani" },
    { initials: "MP", name: "Dr. Mihai Pop", specialty: t.features[1].title, exp: "8 ani" },
    { initials: "ES", name: "Dr. Elena Stan", specialty: t.features[2].title, exp: "15 ani" },
  ];

  return (
    <>
      {/* ── Hero: split ── */}
      <div
        className="flex flex-col sm:flex-row overflow-hidden"
        style={{ backgroundColor: t.colors[0] }}
      >
        <div className="flex-1 px-7 sm:px-10 py-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={11} fill="#FCD34D" className="text-yellow-300" />
              ))}
            </div>
            <span
              className="text-xs font-medium"
              style={{ color: heroTextColor(t.colors[0]) + "99" }}
            >
              4.9/5 · 200+ pacienți
            </span>
          </div>
          <h1
            className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight"
            style={{ color: heroTextColor(t.colors[0]), fontFamily: "var(--font-display)" }}
          >
            {t.heroTitle}
          </h1>
          <p
            className="text-sm leading-relaxed mb-7 max-w-sm"
            style={{ color: heroTextColor(t.colors[0]) + "AA" }}
          >
            {t.heroSubtitle}
          </p>
          <button
            className="text-sm font-bold px-6 py-3 rounded-xl cursor-default shadow-md"
            style={heroBtnStyle(t)}
          >
            {t.heroBtn} →
          </button>
        </div>
        {/* Right panel */}
        <div
          className="hidden sm:flex sm:w-48 flex-shrink-0 items-center justify-center"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="text-center p-6">
            <div className="text-6xl mb-3">🏥</div>
            <div
              className="text-xs font-semibold rounded-full px-3 py-1"
              style={{ backgroundColor: "rgba(255,255,255,0.2)", color: heroTextColor(t.colors[0]) }}
            >
              Acreditat MS
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust badges ── */}
      <div className="flex items-center justify-center gap-6 px-6 py-3.5 bg-white border-b border-gray-100 overflow-x-auto">
        {["🏅 Acreditat", "✅ Autorizat", "💊 Laborator", "📋 Programări online"].map((b) => (
          <span key={b} className="text-xs font-medium text-gray-500 whitespace-nowrap">
            {b}
          </span>
        ))}
      </div>

      {/* ── Services cards ── */}
      <div className="px-6 sm:px-8 py-8 bg-white">
        <h2
          className="text-base font-bold text-gray-900 mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Serviciile noastre
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {t.features.map((f, i) => (
            <div
              key={f.title}
              className="p-4 rounded-2xl transition-all border-2"
              style={{
                backgroundColor: i === 0 ? t.colors[0] : t.colors[1],
                borderColor: i === 0 ? t.colors[0] : "transparent",
              }}
            >
              <span className="text-2xl">{f.icon}</span>
              <p
                className="font-bold text-sm mt-2 mb-1"
                style={{
                  color: i === 0 ? heroTextColor(t.colors[0]) : t.colors[0],
                  fontFamily: "var(--font-display)",
                }}
              >
                {f.title}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: i === 0 ? heroTextColor(t.colors[0]) + "99" : "#6B7A9A" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Doctors ── */}
      <div className="px-6 sm:px-8 py-8" style={{ backgroundColor: t.colors[1] }}>
        <h2
          className="text-base font-bold text-gray-900 mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Echipa medicală
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-full mx-auto mb-2.5 flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: t.colors[0] }}
              >
                {doc.initials}
              </div>
              <p className="text-xs font-bold text-gray-800 leading-tight">{doc.name}</p>
              <p className="text-[11px] text-gray-400 mt-0.5">{doc.specialty}</p>
              <p
                className="text-[11px] font-semibold mt-1"
                style={{ color: t.colors[0] }}
              >
                {doc.exp} experiență
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Appointment CTA ── */}
      <div className="px-6 sm:px-8 py-7" style={{ backgroundColor: t.colors[0] }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p
              className="font-extrabold text-base"
              style={{ color: heroTextColor(t.colors[0]), fontFamily: "var(--font-display)" }}
            >
              Programare online — rapid și simplu
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: heroTextColor(t.colors[0]) + "90" }}
            >
              Fără cozi, fără telefon, disponibil 24/7
            </p>
          </div>
          <button
            className="text-sm font-bold px-6 py-3 rounded-xl cursor-default flex-shrink-0 shadow-md"
            style={heroBtnStyle(t)}
          >
            Programează-te acum →
          </button>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SALON LAYOUT
   ═══════════════════════════════════════════════════════════════════ */
function SalonLayout({ t }: { t: Template }) {
  const services = [
    { name: t.features[0].title, price: "80–150 lei", duration: "60 min", emoji: t.features[0].icon },
    { name: t.features[1].title, price: "50–120 lei", duration: "45 min", emoji: t.features[1].icon },
    { name: t.features[2].title, price: "100–200 lei", duration: "90 min", emoji: t.features[2].icon },
  ];
  const gallery = ["💄", "✂️", "💅", "✨", "💆", "🌸"];

  return (
    <>
      {/* ── Hero: full-width elegant ── */}
      <div
        className="relative px-8 py-14 text-center overflow-hidden"
        style={{ backgroundColor: t.colors[0] }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-3 font-semibold"
            style={{ color: heroTextColor(t.colors[0]) + "70" }}
          >
            {t.category} · {t.url}
          </p>
          <h1
            className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
            style={{ color: heroTextColor(t.colors[0]), fontFamily: "var(--font-display)" }}
          >
            {t.heroTitle}
          </h1>
          <p
            className="text-sm max-w-md mx-auto leading-relaxed mb-8"
            style={{ color: heroTextColor(t.colors[0]) + "80" }}
          >
            {t.heroSubtitle}
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              className="text-sm font-bold px-7 py-3 rounded-full cursor-default shadow-lg"
              style={heroBtnStyle(t)}
            >
              {t.heroBtn}
            </button>
            <button
              className="text-sm font-medium px-7 py-3 rounded-full cursor-default border border-white/25"
              style={{ color: heroTextColor(t.colors[0]) + "CC" }}
            >
              Galerie
            </button>
          </div>
        </div>
      </div>

      {/* ── Gallery grid (masonry-style) ── */}
      <div className="px-6 sm:px-8 py-8 bg-white">
        <div className="flex items-center justify-between mb-5">
          <h2
            className="text-base font-bold text-gray-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Portofoliu lucrări
          </h2>
          <span
            className="text-xs font-semibold cursor-default"
            style={{ color: t.colors[0] }}
          >
            120+ lucrări →
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {gallery.map((emoji, i) => (
            <div
              key={i}
              className={`rounded-xl flex items-center justify-center ${
                i === 0 ? "row-span-2 text-5xl" : "text-3xl"
              }`}
              style={{
                aspectRatio: i === 0 ? undefined : "1",
                minHeight: i === 0 ? 130 : undefined,
                backgroundColor: t.colors[1],
              }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>

      {/* ── Price list ── */}
      <div className="px-6 sm:px-8 py-7" style={{ backgroundColor: t.colors[1] }}>
        <h2
          className="text-base font-bold text-gray-900 mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Servicii &amp; Prețuri
        </h2>
        <div className="space-y-1">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="flex items-center justify-between py-3.5 px-4 rounded-xl bg-white"
              style={{ boxShadow: i === 0 ? `0 0 0 2px ${t.colors[0]}` : undefined }}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{s.emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{s.name}</p>
                  <p className="text-xs text-gray-400">{s.duration}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold" style={{ color: t.colors[0] }}>
                  {s.price}
                </p>
                <button
                  className="text-[11px] font-bold px-2.5 py-0.5 rounded-full cursor-default text-white mt-0.5"
                  style={{ backgroundColor: t.colors[0] }}
                >
                  Rezervă
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   E-COMMERCE LAYOUT
   ═══════════════════════════════════════════════════════════════════ */
function EcommerceLayout({ t }: { t: Template }) {
  const products = [
    { name: "Legume BIO asortate", price: "45 lei", original: "55 lei", emoji: "🥦", badge: "−18%" },
    { name: "Fructe de sezon", price: "38 lei", original: null, emoji: "🍓", badge: "Nou" },
    { name: "Coșul săptămânii", price: "89 lei", original: "110 lei", emoji: "🧺", badge: "−19%" },
    { name: "Miere ecologică", price: "32 lei", original: null, emoji: "🍯", badge: "Top" },
  ];

  return (
    <>
      {/* ── Hero: split ── */}
      <div
        className="flex flex-col sm:flex-row items-center overflow-hidden"
        style={{ backgroundColor: t.colors[0] }}
      >
        <div className="flex-1 px-8 py-10">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-4"
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: heroTextColor(t.colors[0]),
            }}
          >
            🌱 100% Certificat BIO
          </div>
          <h1
            className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight"
            style={{ color: heroTextColor(t.colors[0]), fontFamily: "var(--font-display)" }}
          >
            {t.heroTitle}
          </h1>
          <p
            className="text-sm leading-relaxed mb-6 max-w-sm"
            style={{ color: heroTextColor(t.colors[0]) + "AA" }}
          >
            {t.heroSubtitle}
          </p>
          <div className="flex gap-3">
            <button
              className="text-sm font-bold px-5 py-2.5 rounded-xl cursor-default shadow-md"
              style={heroBtnStyle(t)}
            >
              {t.heroBtn} →
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 px-8 py-6 text-8xl hidden sm:flex">🌿</div>
      </div>

      {/* ── Promo bar ── */}
      <div
        className="flex items-center justify-center gap-6 px-4 py-3 overflow-x-auto"
        style={{ backgroundColor: t.colors[0] + "18" }}
      >
        {["🚚 Livrare gratuită > 100 lei", "✅ Produse certificate", "🔄 Retur 14 zile"].map(
          (item) => (
            <span key={item} className="text-xs font-semibold text-gray-700 whitespace-nowrap">
              {item}
            </span>
          )
        )}
      </div>

      {/* ── Product grid ── */}
      <div className="px-6 sm:px-8 py-8 bg-white">
        <div className="flex items-center justify-between mb-5">
          <h2
            className="text-base font-bold text-gray-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Produse recomandate
          </h2>
          <span
            className="text-xs font-semibold cursor-default flex items-center gap-1"
            style={{ color: t.colors[0] }}
          >
            Toate produsele <ChevronRight size={12} />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {products.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all"
            >
              <div
                className="aspect-square flex flex-col items-end justify-start p-2 text-5xl"
                style={{ backgroundColor: t.colors[1] }}
              >
                <span
                  className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: t.colors[0] }}
                >
                  {p.badge}
                </span>
                <div className="flex-1 flex items-center justify-center w-full text-5xl">
                  {p.emoji}
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold text-gray-800 leading-snug mb-1.5">
                  {p.name}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className="text-sm font-bold"
                      style={{ color: t.colors[0] }}
                    >
                      {p.price}
                    </span>
                    {p.original && (
                      <span className="text-xs text-gray-400 line-through ml-1">
                        {p.original}
                      </span>
                    )}
                  </div>
                  <button
                    className="p-1.5 rounded-lg cursor-default"
                    style={{ backgroundColor: t.colors[0] }}
                  >
                    <ShoppingCart size={13} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Trust strip ── */}
      <div
        className="px-6 sm:px-8 py-6"
        style={{ backgroundColor: t.colors[1] }}
      >
        <div className="grid grid-cols-3 gap-3">
          {t.features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-3 text-center shadow-sm">
              <span className="text-xl">{f.icon}</span>
              <p
                className="text-xs font-bold mt-1.5"
                style={{ color: t.colors[0], fontFamily: "var(--font-display)" }}
              >
                {f.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SERVICES LAYOUT
   ═══════════════════════════════════════════════════════════════════ */
function ServicesLayout({ t }: { t: Template }) {
  const stats = [
    { value: "12+", label: "Ani exp." },
    { value: "500+", label: "Clienți" },
    { value: "99%", label: "Satisfacție" },
  ];
  const steps = [
    { num: "01", title: "Consultație", desc: "Discutăm nevoile" },
    { num: "02", title: "Planificare", desc: "Stabilim strategia" },
    { num: "03", title: "Execuție", desc: "Implementăm" },
    { num: "04", title: "Livrare", desc: "Predăm rezultatele" },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <div className="px-8 py-12 relative overflow-hidden" style={{ backgroundColor: t.colors[0] }}>
        <div
          className="absolute right-0 top-0 w-64 h-full opacity-10"
          style={{
            background: `linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.5) 50%)`,
          }}
        />
        <div className="relative max-w-lg">
          <h1
            className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight"
            style={{ color: heroTextColor(t.colors[0]), fontFamily: "var(--font-display)" }}
          >
            {t.heroTitle}
          </h1>
          <p
            className="text-sm leading-relaxed mb-7"
            style={{ color: heroTextColor(t.colors[0]) + "AA" }}
          >
            {t.heroSubtitle}
          </p>
          <button
            className="text-sm font-bold px-6 py-3 rounded-xl cursor-default shadow-md"
            style={heroBtnStyle(t)}
          >
            {t.heroBtn} →
          </button>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="grid grid-cols-3 divide-x divide-gray-200 bg-white border-b border-gray-100">
        {stats.map((s) => (
          <div key={s.label} className="text-center py-5">
            <p
              className="text-2xl font-extrabold"
              style={{ color: t.colors[0], fontFamily: "var(--font-display)" }}
            >
              {s.value}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── Services list ── */}
      <div className="px-6 sm:px-8 py-8 bg-white">
        <h2
          className="text-base font-bold text-gray-900 mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ce oferim
        </h2>
        <div className="space-y-3">
          {t.features.map((f, i) => (
            <div
              key={f.title}
              className="flex items-start gap-4 p-4 rounded-2xl"
              style={{
                backgroundColor: i === 0 ? t.colors[0] : t.colors[1],
              }}
            >
              <span className="text-2xl flex-shrink-0">{f.icon}</span>
              <div className="flex-1">
                <p
                  className="font-bold text-sm mb-0.5"
                  style={{
                    color: i === 0 ? heroTextColor(t.colors[0]) : t.colors[0],
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {f.title}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: i === 0 ? heroTextColor(t.colors[0]) + "99" : "#6B7A9A",
                  }}
                >
                  {f.desc}
                </p>
              </div>
              <CheckCircle
                size={16}
                className="flex-shrink-0 mt-0.5"
                style={{
                  color: i === 0 ? heroTextColor(t.colors[0]) + "60" : t.colors[0] + "60",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── How we work ── */}
      <div className="px-6 sm:px-8 py-8" style={{ backgroundColor: t.colors[1] }}>
        <h2
          className="text-base font-bold text-gray-900 mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Cum lucrăm
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold mb-2.5 shadow-sm"
                style={{ backgroundColor: t.colors[0] }}
              >
                {step.num}
              </div>
              <p className="text-sm font-bold text-gray-800">{step.title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   TRADES (MESERIAȘI) LAYOUT
   ═══════════════════════════════════════════════════════════════════ */
function TradesLayout({ t }: { t: Template }) {
  const heroBg = isLight(t.colors[0]) ? t.colors[1] : t.colors[0];
  const portfolio = [
    { title: "Apartament 3 camere", location: "București", emoji: t.features[0].icon },
    { title: "Vilă rezidențială", location: "Ilfov", emoji: t.features[1].icon },
    { title: "Spațiu comercial", location: "Ploiești", emoji: t.features[2].icon },
  ];

  return (
    <>
      {/* ── Hero: dark with diagonal accent ── */}
      <div className="relative overflow-hidden" style={{ backgroundColor: heroBg, minHeight: 220 }}>
        <div
          className="absolute top-0 right-0 w-56 h-full opacity-15"
          style={{
            background: `linear-gradient(135deg, transparent 40%, ${t.colors[0]} 40%)`,
          }}
        />
        <div className="relative px-8 py-12">
          <div
            className="inline-flex items-center gap-2 mb-4 text-xs font-bold px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: t.colors[0] + "40",
              color: heroTextColor(heroBg),
            }}
          >
            ✅ Autorizat · Garantat
          </div>
          <h1
            className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight max-w-sm"
            style={{ color: heroTextColor(heroBg), fontFamily: "var(--font-display)" }}
          >
            {t.heroTitle}
          </h1>
          <p
            className="text-sm leading-relaxed mb-7 max-w-sm"
            style={{ color: heroTextColor(heroBg) + "AA" }}
          >
            {t.heroSubtitle}
          </p>
          <div className="flex gap-3">
            <button
              className="text-sm font-bold px-6 py-3 rounded-xl cursor-default shadow-md text-white"
              style={{ backgroundColor: t.colors[0] }}
            >
              {t.heroBtn} →
            </button>
            <button
              className="text-sm font-medium px-6 py-3 rounded-xl cursor-default border"
              style={{
                borderColor: heroTextColor(heroBg) + "30",
                color: heroTextColor(heroBg) + "CC",
              }}
            >
              📞 Sună acum
            </button>
          </div>
        </div>
      </div>

      {/* ── Trust badges ── */}
      <div className="flex items-center gap-3 px-6 py-3.5 bg-white border-b border-gray-100 overflow-x-auto">
        {["🏅 Autorizat", "⚡ Disponibil 24/7", "✅ Garanție", "📋 Deviz gratuit"].map((b) => (
          <span
            key={b}
            className="text-xs font-medium text-gray-600 whitespace-nowrap bg-gray-50 px-2.5 py-1 rounded-full border border-gray-200"
          >
            {b}
          </span>
        ))}
      </div>

      {/* ── Services ── */}
      <div className="px-6 sm:px-8 py-8 bg-white">
        <h2
          className="text-base font-bold text-gray-900 mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Servicii oferite
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {t.features.map((f) => (
            <div
              key={f.title}
              className="p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <span className="text-2xl">{f.icon}</span>
              <p
                className="font-bold text-sm mt-2 mb-1 text-gray-800"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {f.title}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Portfolio ── */}
      <div className="px-6 sm:px-8 py-7" style={{ backgroundColor: t.colors[1] }}>
        <h2
          className="text-base font-bold text-gray-900 mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Portofoliu recent
        </h2>
        <div className="space-y-2">
          {portfolio.map((p) => (
            <div
              key={p.title}
              className="flex items-center gap-4 p-3.5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ backgroundColor: t.colors[0] + "18" }}
              >
                {p.emoji}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{p.title}</p>
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                  <MapPin size={10} />
                  {p.location}
                </p>
              </div>
              <ChevronRight size={14} className="text-gray-300 ml-auto" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─── Dispatch by category ───────────────────────────────────────── */
function CategoryContent({ t }: { t: Template }) {
  switch (t.category) {
    case "Restaurant":
      return <RestaurantLayout t={t} />;
    case "Clinică":
      return <ClinicLayout t={t} />;
    case "Salon":
      return <SalonLayout t={t} />;
    case "E-commerce":
      return <EcommerceLayout t={t} />;
    case "Meseriași":
      return <TradesLayout t={t} />;
    default:
      return <ServicesLayout t={t} />;
  }
}

/* ─── Full website preview ───────────────────────────────────────── */
export function WebsitePreview({ t }: { t: Template }) {
  return (
    <div className="overflow-hidden" style={{ fontFamily: "var(--font-body)" }}>
      <Navbar t={t} />
      <CategoryContent t={t} />
      <Testimonial t={t} />
      <Footer t={t} />
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      style={{ backgroundColor: "rgba(6,13,26,0.8)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl flex flex-col"
        style={{ maxHeight: "92vh" }}
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
            <div className="bg-gray-200 rounded-md px-4 py-1 text-xs text-gray-500 font-medium flex items-center gap-1.5 max-w-xs w-full justify-center">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: t.colors[0] }}
              />
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
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="font-bold text-sm text-[#0D1F5C] truncate"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.name}
            </span>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
              style={{ color: t.tagColor, backgroundColor: t.tagBg }}
            >
              {t.category}
            </span>
            <span className="ml-1 text-xs text-gray-400 hidden sm:inline">
              {t.pages} pagini
            </span>
          </div>
          <Link
            href="/start"
            className="text-xs font-bold px-4 py-2 rounded-xl text-white transition-all hover:opacity-90 flex-shrink-0"
            style={{ backgroundColor: t.colors[0] }}
          >
            Generează similar →
          </Link>
        </div>
      </div>
    </div>
  );
}
