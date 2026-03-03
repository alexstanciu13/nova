import { Shield, Clock, RefreshCw, Headphones } from "lucide-react";

interface TrustStripProps {
  dark?: boolean;
}

const items = [
  { icon: Shield, text: "Plăți securizate SSL" },
  { icon: Clock, text: "14 zile gratuit" },
  { icon: RefreshCw, text: "Anulezi oricând" },
  { icon: Headphones, text: "Suport în română" },
];

export default function TrustStrip({ dark = false }: TrustStripProps) {
  const textClass = dark ? "text-white/60" : "text-[#6B7A9A]";
  const iconClass = dark ? "text-[#00C2FF]" : "text-[#0051CC]";
  const borderClass = dark ? "border-white/10" : "border-[#EEF2FF]";

  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 border-t ${borderClass}`}>
      {items.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center gap-2">
          <Icon size={14} className={iconClass} />
          <span className={`text-xs font-medium ${textClass}`} style={{ fontFamily: "var(--font-body)" }}>
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}
