import type { Metadata } from "next";
import { Mail, MessageSquare, Phone, MapPin, Clock } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contact — nova",
  description: "Contactează echipa nova. Suport în română prin email, chat sau telefon.",
};

const channels = [
  {
    icon: Mail,
    title: "Email",
    desc: "Pentru întrebări generale și suport tehnic",
    value: "support@nova.ro",
    action: "Trimite email",
    href: "mailto:support@nova.ro",
    time: "Răspuns în 24h",
  },
  {
    icon: MessageSquare,
    title: "Chat Live",
    desc: "Disponibil în platformă pentru clienți activi",
    value: "Chat în dashboard",
    action: "Deschide chat",
    href: "/login",
    time: "Răspuns în ~2h",
  },
  {
    icon: Phone,
    title: "WhatsApp (Pro)",
    desc: "Suport WhatsApp dedicat pentru planul Pro",
    value: "+40 7XX XXX XXX",
    action: "Scrie pe WhatsApp",
    href: "https://wa.me/40700000000",
    time: "Răspuns în 4h (L-V 9-18)",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#060D1A] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C2FF] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Contact
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Suntem aici pentru tine
          </h1>
          <p
            className="text-white/70 text-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Echipa nova răspunde în română. Alege canalul preferat.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="py-20 bg-[#EEF2FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {channels.map((ch) => {
              const Icon = ch.icon;
              return (
                <div
                  key={ch.title}
                  className="bg-white rounded-2xl border border-[#EEF2FF] p-6 hover:border-[#0051CC]/30 hover:shadow-md transition-all text-center"
                >
                  <div className="w-12 h-12 bg-[#EEF2FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-[#0051CC]" />
                  </div>
                  <h3
                    className="text-base font-bold text-[#0D1F5C] mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {ch.title}
                  </h3>
                  <p className="text-xs text-[#6B7A9A] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                    {ch.desc}
                  </p>
                  <p
                    className="text-sm font-semibold text-[#0D1F5C] mb-3"
                    style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
                  >
                    {ch.value}
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-[#6B7A9A] mb-4" style={{ fontFamily: "var(--font-body)" }}>
                    <Clock size={11} className="text-[#00C2FF]" />
                    {ch.time}
                  </div>
                  <a
                    href={ch.href}
                    className="inline-block text-sm font-semibold bg-[#EEF2FF] hover:bg-[#0D1F5C] hover:text-white text-[#0D1F5C] px-5 py-2 rounded-lg transition-all"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                  >
                    {ch.action}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Contact form */}
          <div className="max-w-2xl mx-auto">
            <SectionHeader
              eyebrow="Formular de contact"
              title="Trimite-ne un mesaj"
              subtitle="Completează formularul și te contactăm în 24h."
            />
            <form className="mt-10 bg-white rounded-2xl border border-[#EEF2FF] shadow-sm p-8 space-y-4">
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
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ion@afacerea-ta.ro"
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
                  Subiect *
                </label>
                <select
                  required
                  className="w-full border border-[#EEF2FF] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] focus:outline-none focus:border-[#0051CC] focus:ring-2 focus:ring-[#0051CC]/10 transition-colors bg-white"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <option value="">Selectează subiectul</option>
                  <option>Întrebare despre produs</option>
                  <option>Suport tehnic</option>
                  <option>Facturare & abonament</option>
                  <option>Parteneriat / Agenție</option>
                  <option>Altceva</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-[#0D1F5C] mb-1.5"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  Mesaj *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Descrie problema sau întrebarea ta cu cât mai multe detalii..."
                  className="w-full border border-[#EEF2FF] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder:text-[#6B7A9A]/50 focus:outline-none focus:border-[#0051CC] focus:ring-2 focus:ring-[#0051CC]/10 transition-colors resize-none"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-semibold text-sm py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
              >
                Trimite mesajul →
              </button>
              <p className="text-center text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                Răspundem în maximum 24h în ziua lucrătoare.
              </p>
            </form>
          </div>

          {/* Office info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-[#6B7A9A] text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <MapPin size={14} className="text-[#0051CC]" />
              România 🇷🇴 — Echipă 100% locală, disponibilă în română
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
