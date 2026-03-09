"use client";

import { useState } from "react";
import { TrendingUp } from "lucide-react";

const AFFILIATE_PER_CLIENT = 118; // RON/month
const RESELLER_PER_CLIENT = 180;  // RON/month (wholesale margin)

export default function EarningsCalculator() {
  const [clients, setClients] = useState(10);
  const [model, setModel] = useState<"affiliate" | "reseller">("affiliate");

  const ratePerClient = model === "affiliate" ? AFFILIATE_PER_CLIENT : RESELLER_PER_CLIENT;
  const monthly = clients * ratePerClient;
  const annual = monthly * 12;

  const milestones = [5, 10, 20, 30, 50];

  return (
    <div className="mt-12 bg-white rounded-2xl border border-[#EEF2FF] shadow-sm overflow-hidden">
      {/* Model toggle */}
      <div className="flex border-b border-[#EEF2FF]">
        {(["affiliate", "reseller"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setModel(m)}
            className={`flex-1 py-4 text-sm font-semibold transition-all ${
              model === m
                ? "bg-[#0D1F5C] text-white"
                : "text-[#6B7A9A] hover:text-[#0D1F5C] hover:bg-[#EEF2FF]/60"
            }`}
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            {m === "affiliate" ? "Model Afiliat" : "Model Reseller"}
          </button>
        ))}
      </div>

      <div className="p-8">
        {/* Slider */}
        <div className="mb-8">
          <div className="flex items-end justify-between mb-3">
            <label
              className="text-sm font-semibold text-[#0D1F5C]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Număr clienți activi
            </label>
            <span
              className="text-3xl font-bold text-[#0051CC]"
              style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
            >
              {clients}
            </span>
          </div>

          <input
            type="range"
            min={1}
            max={50}
            value={clients}
            onChange={(e) => setClients(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #0051CC ${((clients - 1) / 49) * 100}%, #EEF2FF ${((clients - 1) / 49) * 100}%)`,
              accentColor: "#0051CC",
            }}
          />

          {/* Milestone labels */}
          <div className="flex justify-between mt-2">
            {milestones.map((m) => (
              <button
                key={m}
                onClick={() => setClients(m)}
                className={`text-xs transition-colors ${
                  clients === m ? "text-[#0051CC] font-semibold" : "text-[#6B7A9A]"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Earnings display */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#EEF2FF] rounded-xl p-5 text-center">
            <p
              className="text-xs font-semibold text-[#6B7A9A] uppercase tracking-wide mb-2"
              style={{ fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
            >
              Venit lunar
            </p>
            <p
              className="text-3xl font-bold text-[#0D1F5C]"
              style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
            >
              {monthly.toLocaleString("ro-RO")}
            </p>
            <p className="text-sm text-[#6B7A9A] mt-1" style={{ fontFamily: "var(--font-body)" }}>
              RON / lună
            </p>
          </div>
          <div className="bg-[#0051CC] rounded-xl p-5 text-center">
            <p
              className="text-xs font-semibold text-white/70 uppercase tracking-wide mb-2"
              style={{ fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
            >
              Venit anual
            </p>
            <p
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}
            >
              {annual.toLocaleString("ro-RO")}
            </p>
            <p className="text-sm text-white/70 mt-1" style={{ fontFamily: "var(--font-body)" }}>
              RON / an
            </p>
          </div>
        </div>

        {/* Per-client breakdown */}
        <div className="flex items-center gap-2 bg-[#EEF2FF] rounded-xl px-4 py-3 mb-6">
          <TrendingUp size={16} className="text-[#0051CC] flex-shrink-0" />
          <p className="text-sm text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
            <span className="font-semibold text-[#0D1F5C]">
              {ratePerClient} RON/lună
            </span>{" "}
            per client •{" "}
            {model === "affiliate"
              ? "comision recurent 12 luni"
              : "marjă wholesale garantată"}
          </p>
        </div>

        <a
          href="#apply"
          className="block w-full text-center bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-semibold text-sm py-3.5 px-6 rounded-xl transition-all shadow-sm hover:shadow-md"
          style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
        >
          Aplică ca partener și câștigă {monthly.toLocaleString("ro-RO")} RON/lună →
        </a>
        <p className="text-center text-xs text-[#6B7A9A] mt-3" style={{ fontFamily: "var(--font-body)" }}>
          * Estimare orientativă. Detalii exacte la aplicare.
        </p>
      </div>
    </div>
  );
}
