export interface TemplateFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface Template {
  name: string;
  category: string;
  desc: string;
  colors: [string, string, string];
  pages: number;
  tagColor: string;
  tagBg: string;
  url: string;
  navLinks: string[];
  heroTitle: string;
  heroSubtitle: string;
  heroBtn: string;
  features: TemplateFeature[];
  testimonial: { text: string; author: string };
}

export const categories = [
  "Toate",
  "Restaurant",
  "Clinică",
  "Salon",
  "Servicii",
  "Meseriași",
  "E-commerce",
];

export const templates: Template[] = [
  {
    name: "La Bunica",
    category: "Restaurant",
    desc: "Restaurant tradițional cu meniu digital, galerie și rezervări online.",
    colors: ["#8B4513", "#F5DEB3", "#FFFFFF"],
    pages: 6,
    tagColor: "#FF8C42",
    tagBg: "#FFF3EB",
    url: "labunica.ro",
    navLinks: ["Meniu", "Rezervări", "Galerie", "Contact"],
    heroTitle: "Gust de casă, rețete din suflet",
    heroSubtitle:
      "Restaurant tradițional românesc în inima orașului. Ingrediente locale, rețete autentice.",
    heroBtn: "Rezervă masă",
    features: [
      { icon: "🍽️", title: "Meniu tradițional", desc: "Rețete românești autentice gătite cu ingrediente locale din fermele partenere" },
      { icon: "📅", title: "Rezervări online", desc: "Rezervă masa cu câteva click-uri, oricând, direct de pe telefon" },
      { icon: "🌿", title: "Terasă de vară", desc: "Savurează masa în aer liber pe terasa noastră cu 40 de locuri" },
    ],
    testimonial: {
      text: "Cel mai bun mâncare tradițională din oraș! Atmosferă caldă și personal prietenos. Revin de fiecare dată cu drag.",
      author: "Maria P. — client fidel",
    },
  },
  {
    name: "MedCenter",
    category: "Clinică",
    desc: "Cabinet medical cu servicii, echipă, programări și galerie.",
    colors: ["#0051CC", "#EEF2FF", "#FFFFFF"],
    pages: 7,
    tagColor: "#0051CC",
    tagBg: "#EEF2FF",
    url: "medcenter.ro",
    navLinks: ["Servicii", "Medici", "Programări", "Contact"],
    heroTitle: "Sănătatea ta, prioritatea noastră",
    heroSubtitle:
      "Consultații și tratamente de specialitate. Echipă medicală cu experiență de peste 15 ani.",
    heroBtn: "Programare online",
    features: [
      { icon: "🩺", title: "Consultații", desc: "Medici specialiști în 12 domenii medicale disponibili zilnic" },
      { icon: "💊", title: "Laborator", desc: "Analize complete cu rezultate online în maximum 24 de ore" },
      { icon: "📋", title: "Programări 24/7", desc: "Sistem de programare online disponibil non-stop, fără cozi" },
    ],
    testimonial: {
      text: "Medici profesioniști și servicii de calitate. Mă simt în siguranță de fiecare dată când vin la consultație.",
      author: "Alexandru D. — pacient",
    },
  },
  {
    name: "Beauty Star",
    category: "Salon",
    desc: "Salon beauty cu galerie lucrări, prețuri și rezervare online.",
    colors: ["#CC0051", "#FFF0F8", "#FFFFFF"],
    pages: 5,
    tagColor: "#CC0051",
    tagBg: "#FFF0F8",
    url: "beautystar.ro",
    navLinks: ["Servicii", "Galerie", "Prețuri", "Rezervare"],
    heroTitle: "Frumusețea ta, pasiunea noastră",
    heroSubtitle:
      "Salon de beauty premium cu specialiști certificați. Transformă-te alături de noi.",
    heroBtn: "Rezervă acum",
    features: [
      { icon: "💄", title: "Make-up profesional", desc: "Make-up pentru orice ocazie cu produse de la branduri premium" },
      { icon: "💅", title: "Manichiură & Pedichiură", desc: "Unghii perfecte cu tehnici moderne și gel UV rezistent" },
      { icon: "✨", title: "Tratamente faciale", desc: "Tratamente cu acid hialuronic și vitamina C pentru ten radiant" },
    ],
    testimonial: {
      text: "Cea mai bună experiență la salon! Rezultate uimitoare de fiecare dată. Mă simt cu adevărat îngrijită.",
      author: "Elena M. — clientă regulată",
    },
  },
  {
    name: "ElectroPro",
    category: "Meseriași",
    desc: "Electrician autorizat cu servicii, portofoliu și cerere ofertă.",
    colors: ["#F5A623", "#0D1F5C", "#FFFFFF"],
    pages: 4,
    tagColor: "#008C4A",
    tagBg: "#F0FFF8",
    url: "electropro.ro",
    navLinks: ["Servicii", "Portofoliu", "Ofertă", "Contact"],
    heroTitle: "Electricitate sigură, lucrări garantate",
    heroSubtitle:
      "Electrician autorizat ANRE pentru instalații rezidențiale și comerciale. Rapiditate și profesionalism.",
    heroBtn: "Cere ofertă",
    features: [
      { icon: "⚡", title: "Instalații electrice", desc: "Instalații complete pentru case, apartamente și spații comerciale" },
      { icon: "🔧", title: "Intervenții rapide", desc: "Remediem orice defecțiune în cel mult 2 ore de la apel" },
      { icon: "📜", title: "Autorizat ANRE", desc: "Lucrări executate conform normativelor, cu garanție și certificat" },
    ],
    testimonial: {
      text: "Lucrare impecabilă, punctual și profesionist. Mi-a refăcut toată instalația electrică fără probleme. Recomand!",
      author: "Gheorghe T. — client",
    },
  },
  {
    name: "AgroFresh",
    category: "E-commerce",
    desc: "Magazin produse bio cu catalog, coș și plată online.",
    colors: ["#4CAF50", "#F0FFF0", "#FFFFFF"],
    pages: 8,
    tagColor: "#6A00CC",
    tagBg: "#F8F0FF",
    url: "agrofresh.ro",
    navLinks: ["Produse", "Catalog", "Coș", "Contact"],
    heroTitle: "Produse bio direct de la producător",
    heroSubtitle:
      "Legume și fructe certificate organic. Livrare proaspătă la domiciliu în 24 de ore.",
    heroBtn: "Cumpără acum",
    features: [
      { icon: "🌱", title: "100% Bio", desc: "Produse certificate ecologic, cultivate fără pesticide sau chimicale" },
      { icon: "🚚", title: "Livrare în 24h", desc: "Coletul ajunge la ușa ta proaspăt, în maxim 24 de ore" },
      { icon: "💳", title: "Plată securizată", desc: "Plată online cu card sau ramburs la livrare, fără surprize" },
    ],
    testimonial: {
      text: "Produse proaspete și de calitate! Îmi fac cumpărăturile săptămânale aici. Nu mai merg la supermarket.",
      author: "Ioana S. — abonată",
    },
  },
  {
    name: "ContaExpert",
    category: "Servicii",
    desc: "Cabinet contabilitate cu servicii, echipă și formular contact.",
    colors: ["#0D1F5C", "#EEF2FF", "#FFFFFF"],
    pages: 5,
    tagColor: "#0D1F5C",
    tagBg: "#EEF2FF",
    url: "contaexpert.ro",
    navLinks: ["Servicii", "Echipă", "Tarife", "Contact"],
    heroTitle: "Contabilitate fără griji pentru afacerea ta",
    heroSubtitle:
      "Cabinet cu experiență de 12 ani. Ne ocupăm de toate, tu te concentrezi pe business.",
    heroBtn: "Consultație gratuită",
    features: [
      { icon: "📊", title: "Contabilitate completă", desc: "Evidență contabilă lunară, balanțe și situații financiare" },
      { icon: "📑", title: "Declarații fiscale", desc: "Depunem toate declarațiile la ANAF și gestionăm relația cu autoritățile" },
      { icon: "🧾", title: "Salarizare & HR", desc: "Gestionarea completă a statelor de plată și dosarelor de personal" },
    ],
    testimonial: {
      text: "Profesionalism și seriozitate. M-au scutit de multe bătăi de cap cu contabilitatea și declarațiile.",
      author: "Mircea O. — antreprenor",
    },
  },
  {
    name: "DrSmile",
    category: "Clinică",
    desc: "Cabinet stomatologic modern cu programare online și galerie.",
    colors: ["#00C2FF", "#F0F8FF", "#FFFFFF"],
    pages: 6,
    tagColor: "#0051CC",
    tagBg: "#EEF2FF",
    url: "drsmile.ro",
    navLinks: ["Servicii", "Medici", "Programări", "Blog"],
    heroTitle: "Zâmbetul perfect începe la DrSmile",
    heroSubtitle:
      "Cabinet stomatologic modern cu tehnologie de ultimă generație. Tratamente fără durere.",
    heroBtn: "Programează-te",
    features: [
      { icon: "😁", title: "Albire dentară", desc: "Albire profesională cu sistem LED pentru un zâmbet cu până la 10 nuanțe mai alb" },
      { icon: "🦷", title: "Implant dentar", desc: "Implanturi premium cu garanție pe viață și integrare rapidă" },
      { icon: "👶", title: "Stomatologie pediatrică", desc: "Tratamente blânde pentru copii, cu anestezic topic fără ace" },
    ],
    testimonial: {
      text: "Cel mai bun dentist! Profesionist, blând și cu rezultate excelente. Nu mai simt frica de dentist.",
      author: "Cristina V. — pacientă",
    },
  },
  {
    name: "PizzeriaRoma",
    category: "Restaurant",
    desc: "Pizzerie cu meniu, delivery și comandă online.",
    colors: ["#C0392B", "#FFF8F0", "#FFFFFF"],
    pages: 5,
    tagColor: "#FF8C42",
    tagBg: "#FFF3EB",
    url: "pizzeriaroma.ro",
    navLinks: ["Meniu", "Delivery", "Localizare", "Contact"],
    heroTitle: "Pizza autentică italiană, livrată la tine",
    heroSubtitle:
      "Rețete tradiționale italiene, ingrediente proaspete. Comandă online și primești în 30 de minute.",
    heroBtn: "Comandă acum",
    features: [
      { icon: "🍕", title: "Cuptor cu lemne", desc: "Coptă la 450°C în cuptorul nostru tradițional italian importat din Napoli" },
      { icon: "🏍️", title: "Delivery rapid", desc: "Livrăm în 30 de minute în tot orașul, garantat sau pizza e gratuită" },
      { icon: "📱", title: "Comandă online", desc: "Comandă simplu de pe telefon și urmărește statusul comenzii în timp real" },
    ],
    testimonial: {
      text: "Cea mai bună pizza din oraș! Livrare rapidă și pizza mereu fierbinte. Comandăm în fiecare vineri.",
      author: "Radu M. — client",
    },
  },
  {
    name: "ConstructMax",
    category: "Servicii",
    desc: "Firmă construcții cu portofoliu, servicii și cerere ofertă.",
    colors: ["#E67E22", "#0D1F5C", "#FFFFFF"],
    pages: 5,
    tagColor: "#0D1F5C",
    tagBg: "#EEF2FF",
    url: "constructmax.ro",
    navLinks: ["Servicii", "Portofoliu", "Ofertă", "Contact"],
    heroTitle: "Construim visele tale, zi de zi",
    heroSubtitle:
      "Firmă de construcții cu 20 de ani de experiență. Calitate, termene respectate, prețuri corecte.",
    heroBtn: "Cere ofertă",
    features: [
      { icon: "🏗️", title: "Construcții noi", desc: "Construcții rezidențiale și comerciale de la fundație, la cheie" },
      { icon: "🔨", title: "Renovări complete", desc: "Renovare totală sau parțială, cu materiale premium și garanție 5 ani" },
      { icon: "📐", title: "Consultanță & proiectare", desc: "Proiectare arhitecturală și autorizații de construcție incluse" },
    ],
    testimonial: {
      text: "Au construit casa visurilor noastre! Calitate impecabilă, au respectat termenele și bugetul.",
      author: "Familia Popa — clienți",
    },
  },
  {
    name: "KinetoPro",
    category: "Clinică",
    desc: "Cabinet kinetoterapie cu servicii, programare și blog.",
    colors: ["#16A085", "#E8F8F5", "#FFFFFF"],
    pages: 6,
    tagColor: "#0051CC",
    tagBg: "#EEF2FF",
    url: "kinetopro.ro",
    navLinks: ["Servicii", "Echipă", "Programări", "Blog"],
    heroTitle: "Recuperare rapidă, mișcare liberă",
    heroSubtitle:
      "Cabinet de kinetoterapie cu specialiști certificați. Tratamente personalizate pentru fiecare pacient.",
    heroBtn: "Programare online",
    features: [
      { icon: "🏃", title: "Kinetoterapie", desc: "Programe de exerciții terapeutice personalizate pentru recuperare completă" },
      { icon: "💪", title: "Recuperare post-op", desc: "Recuperare post-operatorie și post-traumatică cu protocol individualizat" },
      { icon: "🧘", title: "Masaj terapeutic", desc: "Masaj de relaxare, drenaj limfatic și masaj terapeutic specializat" },
    ],
    testimonial: {
      text: "Am recuperat după operație mult mai rapid datorită lor. Specialiști desăvârșiți, recomand cu căldură!",
      author: "Ionuț B. — pacient",
    },
  },
  {
    name: "CoaforaElegance",
    category: "Salon",
    desc: "Salon coafură cu galerie, lista servicii și program.",
    colors: ["#8E44AD", "#F9F0FF", "#FFFFFF"],
    pages: 4,
    tagColor: "#CC0051",
    tagBg: "#FFF0F8",
    url: "coaforaelegance.ro",
    navLinks: ["Servicii", "Galerie", "Program", "Contact"],
    heroTitle: "Coafuri moderne, stil inconfundabil",
    heroSubtitle:
      "Salon cu stylisti cu experiență internațională. Descoperă noile tendințe și transformă-ți look-ul.",
    heroBtn: "Rezervă programare",
    features: [
      { icon: "✂️", title: "Tuns & Coafat", desc: "Tuns și coafat profesional pentru toate tipurile și lungimile de păr" },
      { icon: "🎨", title: "Vopsire & Decolorare", desc: "Colorare personalizată cu produse premium fără amoniac" },
      { icon: "💆", title: "Tratamente de păr", desc: "Tratamente de keratină, regenerare și hidratare intensivă" },
    ],
    testimonial: {
      text: "Mereu ies de la salon cu un look uimitor! Stylisti profesioniști care știu exact ce vor clienții.",
      author: "Andreea C. — clientă",
    },
  },
  {
    name: "FitLife",
    category: "Servicii",
    desc: "Sala fitness cu abonamente, antrenori și orar clase.",
    colors: ["#2C3E50", "#E74C3C", "#FFFFFF"],
    pages: 7,
    tagColor: "#0D1F5C",
    tagBg: "#EEF2FF",
    url: "fitlife.ro",
    navLinks: ["Abonamente", "Antrenori", "Orar", "Contact"],
    heroTitle: "Transformă-ți corpul, transformă-ți viața",
    heroSubtitle:
      "Sala de fitness dotată cu echipamente premium. Antrenori certificați pentru rezultate garantate.",
    heroBtn: "Încearcă gratuit",
    features: [
      { icon: "🏋️", title: "Echipamente premium", desc: "Aparate Life Fitness și Technogym, reînnoite anual pentru performanță maximă" },
      { icon: "🥊", title: "Clase de grup", desc: "Yoga, Zumba, Spinning, CrossFit — 40 de clase pe săptămână" },
      { icon: "🧑‍💼", title: "Personal trainer", desc: "Antrenori dedicați care îți personalizează programul pentru obiectivele tale" },
    ],
    testimonial: {
      text: "Am slăbit 15 kg în 4 luni! Antrenorii sunt motivanți și profesioniști. Cea mai bună investiție.",
      author: "Daniela M. — membră",
    },
  },
];
