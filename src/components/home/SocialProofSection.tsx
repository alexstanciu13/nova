import { Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  {
    name: "Maria Ionescu",
    role: "Proprietar, Restaurant La Bunica",
    city: "București",
    rating: 5,
    quote:
      "Am avut site-ul live în mai puțin de 30 de minute. Clientele mă găsesc acum pe Google, iar rezervările au crescut cu 40%. Nova e cea mai bună investiție pe care am făcut-o pentru restaurant.",
    initials: "MI",
    color: "#0051CC",
  },
  {
    name: "Dr. Andrei Popescu",
    role: "Medic stomatolog, Cabinet Dr. Popescu",
    city: "Cluj-Napoca",
    rating: 5,
    quote:
      "Ca medic, nu am timp să mă ocup de website. Nova a generat un site profesional cu pagina de servicii, galerie și formular de programări. Pacienții apreciază că găsesc informații clare.",
    initials: "AP",
    color: "#0D1F5C",
  },
  {
    name: "Elena Dumitrescu",
    role: "Proprietar, Salon Beauty Star",
    city: "Timișoara",
    rating: 5,
    quote:
      "Salonul meu arată acum ca un brand serios. Site-ul are galeria cu lucrările mele, prețurile și programarea online. Clienții noi vin direct de pe Google.",
    initials: "ED",
    color: "#00C2FF",
  },
  {
    name: "Mihai Stancu",
    role: "Administrator, Firma Construcții M&S",
    city: "Brașov",
    rating: 5,
    quote:
      "Am cerut oferte de site de la 3 agenții — prețuri între 2000 și 5000 lei. Nova mi-a generat ceva mai bun în 15 minute. Suportul răspunde rapid la orice întrebare.",
    initials: "MS",
    color: "#0D1F5C",
  },
  {
    name: "Ana-Maria Popa",
    role: "Fondatoare, AgroFresh SRL",
    city: "Iași",
    rating: 5,
    quote:
      "Vindem produse bio și aveam nevoie de un site care să inspire încredere. Nova l-a generat personalizat pentru brandul nostru. Comenzile online au crescut vizibil.",
    initials: "AP",
    color: "#0051CC",
  },
  {
    name: "Cristian Marin",
    role: "Electrician autorizat, ElectroPro",
    city: "Ploiești",
    rating: 5,
    quote:
      "Mă suna lumea să mă întrebe dacă exist ca firmă, că nu aveam site. Acum am unul profesional și primesc solicitări noi în fiecare săptămână. Simplu, rapid, eficient.",
    initials: "CM",
    color: "#0D1F5C",
  },
];

const showcaseSites = [
  { category: "Restaurant", name: "La Bunica", bg: "#FFF8F0" },
  { category: "Clinică", name: "MedCenter", bg: "#F0F8FF" },
  { category: "Salon", name: "Beauty Star", bg: "#FFF0F8" },
  { category: "Construcții", name: "M&S Build", bg: "#F0FFF8" },
  { category: "Produse Bio", name: "AgroFresh", bg: "#FFFFF0" },
  { category: "Servicii", name: "ElectroPro", bg: "#F8F0FF" },
];

const stats = [
  { value: "100+", label: "Site-uri live" },
  { value: "4.9/5", label: "Rating mediu" },
  { value: "< 2h", label: "Timp mediu de răspuns suport" },
  { value: "97%", label: "Clienți mulțumiți" },
];

export default function SocialProofSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#EEF2FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl lg:text-4xl font-extrabold text-[#0D1F5C] mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <SectionHeader
          eyebrow="Ce spun clienții noștri"
          title="Afaceri din toată România au ales nova"
          subtitle="Restaurante, cabinete medicale, saloane, firme de servicii — toate cu site-uri profesionale generate în minute."
        />

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#EEF2FF] hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400" fill="#facc15" />
                ))}
              </div>
              <p
                className="text-[#0D1F5C] text-sm leading-relaxed mb-5 italic"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color, fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-[#0D1F5C] text-sm font-semibold leading-none mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[#6B7A9A] text-xs" style={{ fontFamily: "var(--font-body)" }}>
                    {t.role} • {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Showcase Gallery */}
        <div className="mt-20">
          <SectionHeader
            eyebrow="Galerie site-uri generate"
            title="Site-uri reale, create cu nova"
            subtitle="Fiecare site este unic, adaptat specificului afacerii tale."
          />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {showcaseSites.map((site) => (
              <div
                key={site.name}
                className="rounded-xl overflow-hidden border border-[#EEF2FF] hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group"
                style={{ backgroundColor: site.bg }}
              >
                <div className="aspect-[4/3] flex flex-col items-center justify-center p-6 gap-3">
                  {/* Mock website preview */}
                  <div className="w-full bg-white rounded-lg shadow-sm p-3 space-y-2">
                    <div className="h-2 bg-[#0D1F5C]/20 rounded w-3/4" />
                    <div className="h-1.5 bg-[#0D1F5C]/10 rounded w-full" />
                    <div className="h-1.5 bg-[#0D1F5C]/10 rounded w-2/3" />
                    <div className="grid grid-cols-3 gap-1 mt-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-6 bg-[#EEF2FF] rounded" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-white border-t border-[#EEF2FF]">
                  <span className="text-xs font-semibold text-[#0051CC] bg-[#EEF2FF] px-2 py-0.5 rounded-full">
                    {site.category}
                  </span>
                  <p
                    className="text-[#0D1F5C] text-sm font-semibold mt-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                  >
                    {site.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
