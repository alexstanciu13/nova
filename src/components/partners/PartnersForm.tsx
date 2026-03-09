"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full border border-[#EEF2FF] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder:text-[#6B7A9A]/50 focus:outline-none focus:border-[#0051CC] focus:ring-2 focus:ring-[#0051CC]/10 transition-colors";

export default function PartnersForm() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", clients: "", partnership: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", company: "", email: "", phone: "", clients: "", partnership: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-10 bg-white rounded-2xl border border-emerald-200 shadow-sm p-10 text-center">
        <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
        <h3
          className="text-xl font-bold text-[#0D1F5C] mb-2"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          Aplicație trimisă!
        </h3>
        <p className="text-[#6B7A9A] text-sm mb-6" style={{ fontFamily: "var(--font-body)" }}>
          Am primit aplicația ta. Te contactăm în maximum 24h cu detalii despre program și comisioane.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-[#0051CC] hover:underline"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Trimite o altă aplicație
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-4 bg-white rounded-2xl p-8 border border-[#EEF2FF] shadow-sm"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#0D1F5C] mb-1.5" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
            Prenume și Nume *
          </label>
          <input type="text" required placeholder="Ion Popescu" value={form.name} onChange={set("name")} className={inputClass} style={{ fontFamily: "var(--font-body)" }} />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0D1F5C] mb-1.5" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
            Agenție / Companie
          </label>
          <input type="text" placeholder="Agenția Ta SRL" value={form.company} onChange={set("company")} className={inputClass} style={{ fontFamily: "var(--font-body)" }} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#0D1F5C] mb-1.5" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
          Email *
        </label>
        <input type="email" required placeholder="ion@agentia-ta.ro" value={form.email} onChange={set("email")} className={inputClass} style={{ fontFamily: "var(--font-body)" }} />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#0D1F5C] mb-1.5" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
          Telefon *
        </label>
        <input type="tel" required placeholder="+40 7XX XXX XXX" value={form.phone} onChange={set("phone")} className={inputClass} style={{ fontFamily: "var(--font-body)" }} />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#0D1F5C] mb-1.5" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
          Câți clienți gestionezi în prezent? *
        </label>
        <select required value={form.clients} onChange={set("clients")} className={inputClass + " bg-white"} style={{ fontFamily: "var(--font-body)" }}>
          <option value="">Selectează</option>
          <option>1–5 clienți</option>
          <option>6–15 clienți</option>
          <option>16–30 clienți</option>
          <option>30+ clienți</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#0D1F5C] mb-1.5" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
          Tip parteneriat preferat
        </label>
        <div className="flex gap-4">
          {["Afiliat", "Reseller", "Ambele"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="partnership"
                value={opt}
                checked={form.partnership === opt}
                onChange={set("partnership")}
                className="accent-[#0051CC]"
              />
              <span className="text-sm text-[#0D1F5C]" style={{ fontFamily: "var(--font-body)" }}>{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm" style={{ fontFamily: "var(--font-body)" }}>
          <AlertCircle size={16} className="flex-shrink-0" />
          Ceva nu a mers. Încearcă din nou sau scrie direct la contact@trynova.ro
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-[#00C2FF] hover:bg-[#0051CC] disabled:opacity-60 disabled:cursor-not-allowed text-[#0D1F5C] hover:text-white font-semibold text-sm py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg mt-2"
        style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
      >
        {status === "loading" ? (
          <><Loader2 size={16} className="animate-spin" /> Se trimite...</>
        ) : (
          "Trimite aplicația →"
        )}
      </button>
      <p className="text-center text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
        Te contactăm în maximum 24h cu detalii despre program.
      </p>
    </form>
  );
}
