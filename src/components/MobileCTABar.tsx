"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border-t border-[#EEF2FF] shadow-lg mobile-cta-bar">
      <Link
        href="/start"
        className="block w-full text-center bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-body font-semibold py-3.5 px-6 rounded-xl transition-all shadow-sm text-sm"
        style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
      >
        Încearcă gratuit 14 zile →
      </Link>
      <p className="text-center text-[#6B7A9A] text-xs mt-2" style={{ fontFamily: "var(--font-body)" }}>
        Anulezi oricând • Fără card obligatoriu
      </p>
    </div>
  );
}
