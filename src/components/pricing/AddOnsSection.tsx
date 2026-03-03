import { Plus } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const addons = [
  {
    name: "Store Basic",
    price: "+79 RON/lună",
    desc: "WooCommerce cu până la 50 produse, gateway de plată configurat, pagini de coș și checkout.",
    tags: ["WooCommerce", "Până la 50 produse", "Gateway plată"],
  },
  {
    name: "Store Growth",
    price: "+129 RON/lună",
    desc: "Produse nelimitate, import CSV, 1 rundă de mentenanță/lună, priorități de livrare.",
    tags: ["Produse nelimitate", "Import CSV", "1 mentenanță/lună"],
  },
  {
    name: "Gestionare Domeniu & DNS",
    price: "29 RON/lună sau 149 RON setup",
    desc: "Nova gestionează transferul de domeniu, configurarea DNS, reînnoirile automate și SSL.",
    tags: ["Transfer domeniu", "Configurare DNS", "Reînnoire automată"],
  },
  {
    name: "Raportare Automată",
    price: "+39 RON/lună",
    desc: "Raport PDF lunar cu trafic, conversii și recomandări SEO. Trimis automat pe email.",
    tags: ["Raport PDF lunar", "Date GA4", "Recomandări SEO"],
  },
];

export default function AddOnsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Add-on-uri opționale"
          title="Extinde-ți planul după nevoile tale"
          subtitle="Adaugă funcționalități extra la orice plan. Fără angajamente pe termen lung."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {addons.map((addon) => (
            <div
              key={addon.name}
              className="rounded-2xl border border-[#EEF2FF] p-6 hover:border-[#0051CC]/30 hover:shadow-md transition-all bg-white"
            >
              <div className="w-8 h-8 bg-[#EEF2FF] rounded-lg flex items-center justify-center mb-4">
                <Plus size={16} className="text-[#0051CC]" />
              </div>
              <h3
                className="text-base font-bold text-[#0D1F5C] mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                {addon.name}
              </h3>
              <p
                className="text-sm font-semibold text-[#0051CC] mb-3"
                style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
              >
                {addon.price}
              </p>
              <p className="text-sm text-[#6B7A9A] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                {addon.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {addon.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#EEF2FF] text-[#0D1F5C] px-2 py-0.5 rounded-full"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
