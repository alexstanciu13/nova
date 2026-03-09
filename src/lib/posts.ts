export type Section =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
  author: string;
  image: string;
  imageAlt: string;
  content: Section[];
};

export const posts: Post[] = [
  // ─── 1 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cum-sa-apari-pe-google-local",
    category: "SEO",
    title: "Cum apari pe Google cu afacerea ta locală: ghid complet 2026",
    excerpt: "Google Business Profile, cuvinte cheie locale, pagini de servicii optimizate. Tot ce trebuie să știi pentru a fi găsit de clienții din orașul tău.",
    readTime: "8 min",
    date: "28 Feb 2026",
    featured: true,
    author: "Echipa nova",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Persoană care tastează pe laptop, căutare Google",
    content: [
      { type: "p", text: "Dacă ai o afacere locală în România și vrei să fii găsit de clienți pe Google, ai nevoie de o strategie clară de SEO local. Vestea bună: nu e atât de complicat pe cât pare." },
      { type: "h2", text: "1. Google Business Profile — fundația oricărei strategii locale" },
      { type: "p", text: "Primul pas este să creezi sau să revendici profilul tău Google Business Profile (GBP). Acesta e listing-ul care apare pe Google Maps și în căutările locale cu date de contact, program și recenzii." },
      { type: "p", text: "Asigură-te că incluzi:" },
      { type: "ul", items: ["Categoria corectă a afacerii (ex: \"Restaurant\", \"Cabinet stomatologic\")", "Adresa completă și numărul de telefon corect", "Programul de funcționare actualizat", "Cel puțin 10 fotografii de calitate", "Descriere detaliată cu cuvinte cheie relevante"] },
      { type: "h2", text: "2. Site-ul tău — cartea de vizită digitală" },
      { type: "p", text: "Un site bine optimizat este esențial. Google preferă site-urile rapide, mobile-friendly și cu conținut relevant. Cu nova, generezi automat un site optimizat SEO, cu structura corectă de headings și meta-taguri." },
      { type: "h2", text: "3. Cuvinte cheie locale — cum le găsești" },
      { type: "p", text: "Gândește-te cum caută clienții tăi: \"stomatolog Cluj\", \"restaurant italian București centru\", \"instalator autorizat Timișoara\". Integrează aceste fraze natural în textul site-ului, titlurile paginilor și descrierile meta." },
      { type: "h2", text: "4. Recenzii Google — cea mai puternică armă" },
      { type: "p", text: "Recenziile sunt factorul #1 în decizia unui client local. 5 recenzii autentice și pozitive îți pot dubla rata de click din Google Maps. Solicită activ recenzii clienților mulțumiți — trimite un link direct după fiecare serviciu prestat." },
      { type: "h2", text: "5. Consistența NAP — Nume, Adresă, Telefon" },
      { type: "p", text: "Google verifică dacă datele tale de contact sunt identice pe toate platformele: site, GBP, Facebook, directoare locale. Orice inconsistență îți scade credibilitatea și poziția în rezultate." },
      { type: "h2", text: "Concluzie" },
      { type: "p", text: "SEO local nu este un sprint, ci un maraton. Dar dacă urmezi acești pași și ai un site bine construit, vei vedea rezultate în 2–3 luni. Nova îți oferă fundația tehnică — tu te ocupi de conținut și relații cu clienții." },
    ],
  },

  // ─── 2 ─────────────────────────────────────────────────────────────────────
  {
    slug: "5-greseli-site-afaceri-mici",
    category: "Ghiduri Business",
    title: "5 greșeli comune pe care le fac afacerile mici pe site-ul lor",
    excerpt: "De la text prea lung pe homepage la absența unui CTA clar — greșelile care te costă clienți în fiecare zi.",
    readTime: "5 min",
    date: "21 Feb 2026",
    author: "Echipa nova",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Laptop cu site deschis pe birou",
    content: [
      { type: "p", text: "Majoritatea site-urilor pentru afaceri mici pierd clienți din cauza câtorva greșeli simple, dar costisitoare. Iată ce să eviți:" },
      { type: "h2", text: "1. Niciun CTA vizibil pe homepage" },
      { type: "p", text: "Dacă un vizitator nu înțelege în primele 5 secunde ce vrei să facă, va pleca. Fiecare pagină trebuie să aibă un singur buton clar: \"Solicită o ofertă\", \"Rezervă acum\", \"Contactează-ne\"." },
      { type: "h2", text: "2. Text prea mult, imagini prea puține" },
      { type: "p", text: "Oamenii nu citesc pe web — scanează. Înlocuiește blocurile mari de text cu titluri clare, bullet points și imagini relevante. Regulă practică: dacă un paragraf are mai mult de 4 rânduri, taie-l." },
      { type: "h2", text: "3. Site-ul nu e optimizat pentru mobil" },
      { type: "p", text: "Peste 70% din traficul web vine de pe telefon. Un site care arată prost pe mobil îți pierde 7 din 10 vizitatori înainte să citească un singur cuvânt. Verifică-ți site-ul pe telefon chiar acum." },
      { type: "h2", text: "4. Lipsesc datele de contact" },
      { type: "p", text: "Numărul de telefon și emailul trebuie să fie vizibile imediat — în header sau footer, nu ascunse pe o pagină separată. Un client care nu te poate contacta rapid va merge la concurență." },
      { type: "h2", text: "5. Site-ul se încarcă lent" },
      { type: "p", text: "Google penalizează site-urile lente în rezultatele de căutare. Imaginile prea mari sunt cel mai comun vinovat. Comprimă toate imaginile la sub 200KB și folosește un hosting de calitate." },
      { type: "h2", text: "Concluzie" },
      { type: "p", text: "Aceste 5 greșeli sunt ușor de corectat și pot dubla numărul de contacte primite prin site. Cu nova, site-ul tău este optimizat automat pentru viteză, mobil și conversii — fără să știi programare." },
    ],
  },

  // ─── 3 ─────────────────────────────────────────────────────────────────────
  {
    slug: "de-ce-ai-nevoie-de-site-nu-facebook",
    category: "Ghiduri Business",
    title: "De ce ai nevoie de un website și nu doar de o pagină Facebook",
    excerpt: "Facebook poate dispărea, poate suspenda contul sau poate schimba algoritmul. Site-ul tău e singurul activ digital pe care îl deții.",
    readTime: "4 min",
    date: "14 Feb 2026",
    author: "Echipa nova",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Telefon cu aplicații de social media",
    content: [
      { type: "p", text: "\"Am pagina de Facebook, de ce mai am nevoie de site?\" Este una dintre cele mai frecvente întrebări pe care le primim. Iată răspunsul sincer." },
      { type: "h2", text: "Nu ești proprietarul conținutului pe Facebook" },
      { type: "p", text: "Pagina ta de Facebook aparține Meta, nu ție. Contul poate fi suspendat fără avertisment, accesul poate fi blocat sau platforma poate pur și simplu să devină irelevantă (Myspace, Friendster — sună cunoscut?). Site-ul tău e singurul activ digital pe care îl controlezi complet." },
      { type: "h2", text: "Algoritmul Facebook nu îți arată postările" },
      { type: "p", text: "Reach-ul organic pe Facebook a scăzut de la ~16% în 2012 la sub 2% în 2026. Practic, dacă nu plătești pentru reclame, mai puțin de 2 din 100 de urmăritori îți văd postările. Un site cu SEO bun îți aduce trafic organic gratuit pe termen lung." },
      { type: "h2", text: "Credibilitatea — site vs. pagină Facebook" },
      { type: "p", text: "Studiile arată că 75% din consumatori judecă credibilitatea unei afaceri după site-ul său. O afacere fără site pare amatoare, indiferent câți urmăritori are pe Facebook." },
      { type: "h2", text: "Site-ul îți capturează date, Facebook nu" },
      { type: "p", text: "Cu un site, colectezi emailuri, instalezi Google Analytics, urmărești comportamentul vizitatorilor și construiești o audiență proprie. Pe Facebook nu ai acces la aceste date — ești chiriaș pe proprietatea altcuiva." },
      { type: "h2", text: "Concluzie: folosește ambele, dar deține site-ul" },
      { type: "p", text: "Facebook este un canal de distribuție excelent. Site-ul este baza de operațiuni. Folosește Facebook pentru a aduce trafic, dar trimite oamenii pe site-ul tău — unde tu controlezi experiența și datele." },
    ],
  },

  // ─── 4 ─────────────────────────────────────────────────────────────────────
  {
    slug: "nova-v2-update",
    category: "Actualizări Produs",
    title: "nova 2.0: Generare mai rapidă, noi șabloane și suport WooCommerce",
    excerpt: "Am lansat nova 2.0 cu o nouă generare AI de 3x mai rapidă, 12 șabloane noi și integrare nativă WooCommerce.",
    readTime: "3 min",
    date: "5 Feb 2026",
    author: "Echipa nova",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Echipă care lucrează la update software",
    content: [
      { type: "p", text: "Suntem entuziasmați să anunțăm lansarea nova 2.0, cel mai mare update din istoria platformei noastre. Iată ce e nou." },
      { type: "h2", text: "Generare AI de 3x mai rapidă" },
      { type: "p", text: "Am rescris complet motorul nostru de generare. Acum creezi un site complet în sub 45 de secunde față de 2+ minute anterior. Prompturile sunt procesate în paralel, iar rezultatele sunt afișate pe măsură ce sunt generate." },
      { type: "h2", text: "12 șabloane noi" },
      { type: "p", text: "Am adăugat 12 șabloane noi, acoperind industrii noi: cabinet medical, salon de înfrumusețare, firma de curățenie, birou notarial, atelier auto și mai multe. Fiecare șablon vine cu conținut placeholder relevant pentru industrie." },
      { type: "h2", text: "Suport nativ WooCommerce" },
      { type: "p", text: "Nova 2.0 integrează WooCommerce direct în fluxul de generare. Spui nova că vrei un magazin online, iar platforma configurează automat catalogul de produse, coșul de cumpărături și pagina de checkout." },
      { type: "h2", text: "Editor vizual îmbunătățit" },
      { type: "p", text: "Am refăcut editorul vizual de la zero. Acum poți modifica orice element al site-ului prin drag & drop, cu preview în timp real pe desktop și mobil simultan." },
      { type: "h2", text: "Disponibil pentru toți clienții" },
      { type: "p", text: "Nova 2.0 este disponibil imediat pentru toți clienții existenți, fără costuri suplimentare. Clienții noi beneficiază automat de noua versiune." },
    ],
  },

  // ─── 5 ─────────────────────────────────────────────────────────────────────
  {
    slug: "fotografie-produs-telefon",
    category: "Ghiduri Business",
    title: "Fotografii de produs cu telefonul: 7 trucuri simple",
    excerpt: "Nu ai nevoie de echipament scump. Cu telefonul și acești 7 pași, poți face fotografii care vând.",
    readTime: "6 min",
    date: "29 Ian 2026",
    author: "Echipa nova",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Fotografie produs cu telefonul",
    content: [
      { type: "p", text: "Fotografiile de produs slabe sunt al doilea motiv pentru care oamenii abandonează un magazin online (primul e prețul). Dar nu ai nevoie de un studio profesionist — telefonul tău e suficient dacă știi cum să îl folosești." },
      { type: "h2", text: "1. Folosește lumina naturală" },
      { type: "p", text: "Lumina de la fereastră este cea mai bună sursă de lumină gratuită. Fotografiază dimineața sau după-amiaza, când lumina e difuză. Evită lumina directă de soare care creează umbre dure." },
      { type: "h2", text: "2. Fundal alb simplu" },
      { type: "p", text: "Un carton alb A2 cumpărat de la papetărie (5-10 RON) face minuni. Pune produsul pe carton, ridică marginea din spate ca un fundal curbat și ai un studio foto improvizat." },
      { type: "h2", text: "3. Dezactivează zoom-ul digital" },
      { type: "p", text: "Zoom-ul digital degradează calitatea imaginii. Mai bine apropie-te fizic de produs sau folosește modul portret dacă vrei fundal estompat." },
      { type: "h2", text: "4. Curăță obiectivul" },
      { type: "p", text: "Sună banal, dar un obiectiv murdar este responsabil pentru 30% din fotografiile neclare. Șterge cu o cârpă moale înainte de orice sesiune foto." },
      { type: "h2", text: "5. Folosește un trepied sau reazem" },
      { type: "p", text: "Mișcarea mâinii cauzează blur. Câteva cărți stivuite sau un pahar pot ține telefonul fix. Un mini-trepied costă 30-50 RON și face diferența." },
      { type: "h2", text: "6. Fotografiază din mai multe unghiuri" },
      { type: "p", text: "Fa cel puțin 5-6 fotografii per produs: față, spate, lateral, detaliu, în context de utilizare. Clienții online vor să vadă produsul din toate perspectivele." },
      { type: "h2", text: "7. Editează minim în aplicație" },
      { type: "p", text: "Snapseed sau Lightroom Mobile (gratuit) îți permite să ajustezi luminozitatea, contrastul și culorile în 2-3 minute. Nu exagera cu filtrele — culorile trebuie să corespundă realității." },
    ],
  },

  // ─── 6 ─────────────────────────────────────────────────────────────────────
  {
    slug: "seo-local-restaurante",
    category: "SEO",
    title: "SEO local pentru restaurante: cum umpli mesele prin Google",
    excerpt: "Strategia pas-cu-pas pe care restaurantele din România o folosesc pentru a apărea în top 3 pe Google Maps.",
    readTime: "7 min",
    date: "22 Ian 2026",
    author: "Echipa nova",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Masă la restaurant cu mâncare servită",
    content: [
      { type: "p", text: "\"Restaurant [orașul tău]\", \"mâncare italiană aproape\", \"brunch București\" — acestea sunt căutările care îți umplu mesele. Iată cum te asiguri că apari tu, nu concurența." },
      { type: "h2", text: "Profilul Google Business — prioritatea #1" },
      { type: "p", text: "Dacă nu ai un profil Google Business verificat, ești invizibil pe Google Maps. Creează sau revendică profilul, adaugă meniul complet, programul, fotografii de calitate și răspunde la toate recenziile." },
      { type: "h2", text: "Fotografii care fac oamenii să salveze" },
      { type: "p", text: "Restaurantele cu peste 100 de fotografii pe GBP primesc cu 520% mai multe apeluri și cu 2717% mai multe cereri de indicații. Fotografiază zilnic: preparate noi, atmosfera, evenimente speciale." },
      { type: "h2", text: "Recenziile — motorul SEO local" },
      { type: "p", text: "Numărul și calitatea recenziilor Google sunt cel mai important factor de ranking local. Implementează un sistem simplu: la nota de plată, adaugă un QR code care duce direct la pagina de recenzii." },
      { type: "h2", text: "Site-ul tău — conținut local specific" },
      { type: "p", text: "Pagina ta de web trebuie să conțină explicit: tipul de bucătărie, cartierul sau zona, preparate specifice locale. \"Restaurant tradițional românesc în Floreasca, București\" se clasează mult mai bine decât \"Restaurant\"." },
      { type: "h2", text: "Citări locale — cum construiești autoritate" },
      { type: "p", text: "Înregistrează restaurantul pe: TripAdvisor, TheFork, Zomato, Yelp România, directoare locale ale orașului. Asigură-te că numele, adresa și telefonul sunt identice pe toate platformele." },
      { type: "h2", text: "Concluzie" },
      { type: "p", text: "SEO local pentru restaurante returnează investiția în 3-6 luni. Prioritizează GBP, recenzii și fotografii — acestea trei singure pot dubla vizibilitatea ta pe Google Maps." },
    ],
  },

  // ─── 7 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cum-alegi-domeniu-potrivit",
    category: "Ghiduri Business",
    title: "Cum alegi numele perfect pentru domeniul tău web",
    excerpt: "Scurt, memorabil, fără cratime. Regulile simple pe care experții le urmează când aleg un domeniu pentru o afacere.",
    readTime: "4 min",
    date: "15 Ian 2026",
    author: "Echipa nova",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Tastatură laptop cu lumini colorate",
    content: [
      { type: "p", text: "Domeniul este adresa ta pe internet — o alegi o dată și e greu de schimbat fără a pierde trafic. Merită câteva minute de gândire înainte de a da click pe \"Înregistrează\"." },
      { type: "h2", text: "Regula de aur: maxim 15 caractere" },
      { type: "p", text: "Cu cât domeniul e mai scurt, cu atât e mai ușor de reținut și de scris. Dacă depășește 15 caractere, caută o variantă mai scurtă — abrevierea numelui companiei, un cuvânt cheie principal sau un brand nou." },
      { type: "h2", text: ".ro sau .com?" },
      { type: "p", text: "Dacă afacerea ta e exclusiv pentru piața românească, .ro e preferabil — Google afișează mai des site-urile .ro utilizatorilor din România. Dacă ai planuri de extindere internațională, ia ambele și redirectează .ro spre .com." },
      { type: "h2", text: "Evită cratimele și cifrele" },
      { type: "p", text: "\"firma-mea.ro\" e greu de dictat la telefon și ușor de confundat cu \"firmamea.ro\". Cratimele și cifrele sunt semnale negative de calitate — evită-le complet." },
      { type: "h2", text: "Verifică dacă e disponibil pe social media" },
      { type: "p", text: "Înainte de a cumpăra domeniul, verifică că același username e disponibil pe Facebook, Instagram și TikTok. Consistența numelui pe toate platformele face brandul mai recunoscut." },
      { type: "h2", text: "Domeniul expirat cu autoritate — o oportunitate ascunsă" },
      { type: "p", text: "Uneori poți cumpăra un domeniu expirat care a aparținut unei afaceri similare — venind cu backlink-uri și autoritate SEO deja construite. Verifică pe Namecheap sau GoDaddy Auctions." },
    ],
  },

  // ─── 8 ─────────────────────────────────────────────────────────────────────
  {
    slug: "viteza-site-de-ce-conteaza",
    category: "Tutoriale Nova",
    title: "De ce viteza site-ului îți afectează direct vânzările",
    excerpt: "O întârziere de 1 secundă în încărcare reduce conversiile cu 7%. Iată cum să verifici viteza și ce poți face imediat.",
    readTime: "5 min",
    date: "8 Ian 2026",
    author: "Echipa nova",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Ecran laptop cu grafice de performanță",
    content: [
      { type: "p", text: "Amazon a calculat că fiecare 100ms în plus la timp de încărcare le costă 1% din vânzări. Pentru o afacere mică, datele sunt similare: viteza contează direct la buzunar." },
      { type: "h2", text: "Cum verifici viteza site-ului tău" },
      { type: "p", text: "Accesează pagespeed.web.dev și introdu adresa site-ului. Vei primi un scor de la 0 la 100 și o listă de probleme specifice. Scor sub 50 = problemă serioasă. Scor peste 80 = bun." },
      { type: "h2", text: "Vinovat #1: imaginile neoptimizate" },
      { type: "p", text: "O fotografie din telefon are 3-8 MB. Dacă ai 10 astfel de fotografii pe homepage, site-ul tău are nevoie să descarce ~50 MB înainte să se afișeze. Comprimă toate imaginile la sub 200 KB folosind tinypng.com (gratuit)." },
      { type: "h2", text: "Vinovat #2: hosting slab" },
      { type: "p", text: "Un hosting ieftin cu servere supraaglomerate adaugă 2-3 secunde la fiecare încărcare, indiferent cât de bine e optimizat site-ul. Alege un provider cu servere în Europa (timpul de răspuns de la server la utilizator contează)." },
      { type: "h2", text: "Cum nova rezolvă automat viteza" },
      { type: "p", text: "Site-urile generate cu nova sunt optimizate automat: imagini comprimate la încărcare, lazy loading activat, CDN inclus, caching configurat. Nu trebuie să faci nimic manual — viteza e rezolvată din prima zi." },
      { type: "h2", text: "Core Web Vitals — ce urmărește Google" },
      { type: "p", text: "Google măsoară trei metrici cheie: LCP (cât durează să se încarce conținutul principal), FID (cât de repede răspunde la click) și CLS (dacă elementele sar pe ecran). Un scor bun la acestea înseamnă poziție mai bună în căutări." },
    ],
  },

  // ─── 9 ─────────────────────────────────────────────────────────────────────
  {
    slug: "studiu-de-caz-salon-beauty-cluj",
    category: "Studii de Caz",
    title: "Studiu de caz: Salon de beauty din Cluj a triplat rezervările online în 3 luni",
    excerpt: "Cum a trecut Andreea de la zero prezență online la 40+ rezervări noi pe lună, folosind nova și câteva ore de muncă.",
    readTime: "6 min",
    date: "2 Ian 2026",
    author: "Echipa nova",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Salon de înfrumusețare modern",
    content: [
      { type: "p", text: "Andreea conduce un salon de beauty în Cluj-Napoca de 4 ani. Clienții vechi o recomandau prin viu grai, dar nu reușea să atragă clienți noi în mod consistent. Soluția: un site profesional și SEO local." },
      { type: "h2", text: "Situația inițială" },
      { type: "p", text: "Înainte de a folosi nova, Andreea nu avea site. Gestiona rezervările prin WhatsApp și avusese un cont de Instagram pe care nu îl mai actualiza de 6 luni. Căutând pe Google \"salon beauty Cluj\", nu apărea nicăieri." },
      { type: "h2", text: "Soluția: site + Google Business + recenzii" },
      { type: "p", text: "Pasul 1: Andreea a generat site-ul cu nova în 40 de minute — a descris serviciile prin prompturi AI și a obținut un site complet, cu pagini dedicate pentru fiecare serviciu (manichiură, pedichiură, extensii gene, etc.)." },
      { type: "ul", items: ["Site generat: 40 minute", "Google Business Profile verificat: 3 zile", "Primele 10 recenzii colectate: 2 săptămâni", "Prima rezervare organică: ziua 18"] },
      { type: "h2", text: "Rezultatele după 3 luni" },
      { type: "ul", items: ["Poziție medie Google Maps pentru \"salon beauty Cluj\": top 5", "Rezervări noi din online: 40+/lună", "Rata de conversie site → rezervare: 12%", "ROI estimat: 8x costul abonamentului lunar"] },
      { type: "h2", text: "Ce a făcut diferența" },
      { type: "p", text: "Andreea a înțeles că site-ul singur nu ajunge. Combinând site-ul profesional cu GBP actualizat constant și solicitând activ recenzii la finalul fiecărei ședințe, a construit o prezență solidă în căutările locale în timp record." },
      { type: "h2", text: "Concluzie" },
      { type: "p", text: "Un site profesional plus SEO local de bază poate transforma complet fluxul de clienți al unui salon de beauty. Andreea a investit ~40 de ore în primele 3 luni și acum salonul 'se vinde singur' pe Google." },
    ],
  },

  // ─── 10 ─────────────────────────────────────────────────────────────────────
  {
    slug: "google-analytics-4-ghid-incepatori",
    category: "Tutoriale Nova",
    title: "Google Analytics 4 pentru afaceri mici: ce să urmărești cu adevărat",
    excerpt: "Nu toate datele din GA4 sunt utile. Iată cele 5 metrici care contează pentru o afacere locală și cum le interpretezi.",
    readTime: "7 min",
    date: "26 Dec 2025",
    author: "Echipa nova",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Dashboard cu grafice și statistici",
    content: [
      { type: "p", text: "GA4 poate fi copleșitor la prima vedere — zeci de rapoarte, sute de metrici, terminologie ciudată. Dar pentru o afacere mică, ai nevoie de maximum 5 cifre pentru a lua decizii bune." },
      { type: "h2", text: "1. Utilizatori activi — câți oameni reali îți vizitează site-ul" },
      { type: "p", text: "Ignoră \"sesiunile\" și urmărește \"utilizatori activi\" — asta îți arată câți oameni unici au intrat pe site în perioada selectată. O cifră în creștere = eforturile de marketing funcționează." },
      { type: "h2", text: "2. Sursa traficului — de unde vin vizitatorii" },
      { type: "p", text: "Raportul de achiziție îți arată dacă oamenii vin din Google (organic), direct (au tastat adresa), social media sau reclame. Această informație îți spune unde să investești mai mult timp și bani." },
      { type: "h2", text: "3. Pagini cele mai vizitate" },
      { type: "p", text: "Ce pagini văd oamenii cel mai des? Dacă pagina de servicii sau de contact e vizitată rar, problema e în navigare sau în textul care trebuie să îi conducă acolo." },
      { type: "h2", text: "4. Rata de implicare" },
      { type: "p", text: "GA4 a înlocuit rata de respingere cu \"rata de implicare\" — procentul de sesiuni în care utilizatorul a interacționat activ cu site-ul. Sub 40% înseamnă că conținutul sau designul nu reține vizitatorii." },
      { type: "h2", text: "5. Conversii — acțiunile care contează" },
      { type: "p", text: "Configurează ca \"conversii\" acțiunile valoroase: click pe numărul de telefon, trimitere formular de contact, vizitare pagina de contact. Aceste cifre îți arată direct cât de eficient e site-ul tău în a genera clienți." },
      { type: "h2", text: "Cu nova, GA4 e configurat automat" },
      { type: "p", text: "Site-urile generate cu nova includ integrarea Google Analytics 4 din prima zi. Nu trebuie să copiezi niciun cod — conectezi contul GA4 și datele încep să curgă imediat." },
    ],
  },

  // ─── 11 ─────────────────────────────────────────────────────────────────────
  {
    slug: "email-marketing-prima-campanie",
    category: "Ghiduri Business",
    title: "Email marketing pentru afaceri mici: cum pornești prima campanie cu 0 RON",
    excerpt: "Lista de emailuri este cel mai valoros activ digital al unei afaceri. Iată cum o construiești și cum trimiți prima campanie gratuită.",
    readTime: "8 min",
    date: "19 Dec 2025",
    author: "Echipa nova",
    image: "https://images.unsplash.com/photo-1526628953301-3cd0c7434031?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Persoană care citește emailuri pe laptop",
    content: [
      { type: "p", text: "Email-ul are cel mai mare ROI din toate canalele de marketing: 36 RON returnat pentru fiecare 1 RON investit (DMA, 2025). Și, spre deosebire de social media, lista ta de emailuri îți aparține complet." },
      { type: "h2", text: "Pasul 1: alege un instrument gratuit" },
      { type: "p", text: "Mailchimp oferă gratuit până la 500 abonați și 1000 emailuri/lună. Brevo (fostul Sendinblue) oferă 300 emailuri/zi gratuit, fără limită de abonați. Ambele sunt perfecte pentru început." },
      { type: "h2", text: "Pasul 2: creează un lead magnet" },
      { type: "p", text: "Oamenii nu îți dau emailul fără un motiv. Oferă ceva util în schimb: un ghid PDF gratuit, o reducere de 10%, acces prioritar la rezervări, un tutorial video. Un lead magnet bun poate converti 5-15% din vizitatorii site-ului." },
      { type: "h2", text: "Pasul 3: adaugă formularul pe site" },
      { type: "p", text: "Cel mai eficient loc pentru formularul de abonare: footer (prezent pe toate paginile) și un popup discret care apare după 30 de secunde pe site. Nu pune formularul doar pe pagina de contact — nu îl va vedea nimeni." },
      { type: "h2", text: "Ce să trimiți — calendarul editorial simplu" },
      { type: "ul", items: ["Săptămânal sau bi-săptămânal — nu mai rar", "1 email cu valoare: un sfat, o resursă, o poveste", "1 email promoțional la fiecare 4 emailuri cu valoare", "Sezon: emailuri dedicate pentru Crăciun, Paște, Black Friday"] },
      { type: "h2", text: "Metrici pe care să le urmărești" },
      { type: "p", text: "Rata de deschidere (benchmark: 20-25% pentru retail, 30%+ pentru servicii profesionale) și rata de click (benchmark: 2-3%). Dacă ești sub aceste valori, problema e în subiectul emailului sau în conținut." },
    ],
  },

  // ─── 12 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cum-scrii-pagina-despre-noi-care-vinde",
    category: "Ghiduri Business",
    title: "Cum scrii o pagina Despre noi care castiga increderea clientilor",
    excerpt: "Pagina Despre noi e a doua cea mai vizitată pagină de pe orice site de afaceri. Majoritatea o irosesc cu text corporatist. Tu nu trebuie să faci la fel.",
    readTime: "5 min",
    date: "12 Dec 2025",
    author: "Echipa nova",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Echipă care lucrează împreună la birou",
    content: [
      { type: "p", text: "\"Suntem o companie dedicată excelenței, cu o echipă de profesioniști pasionați...\" Ai mai citit ceva similar de sute de ori. Nu spune nimic și nu câștigă nicio încredere. Iată cum să faci diferit." },
      { type: "h2", text: "Regula #1: Vorbește despre client, nu despre tine" },
      { type: "p", text: "Paradoxal, cea mai bună pagină \"Despre noi\" e centrată pe client. Cine ești tu contează mai puțin decât ce poți face pentru el. Structura câștigătoare: problema clientului → cum ai descoperit că o poți rezolva → dovezi că ai rezolvat-o." },
      { type: "h2", text: "Povestea fondatorului — aur neexploatat" },
      { type: "p", text: "De ce ai fondat această afacere? Ce problemă personală te-a determinat? Oamenii cumpără de la oameni, nu de la companii. O poveste autentică de 3-4 paragrafe bate orice biografie corporatistă." },
      { type: "h2", text: "Dovezi sociale concrete" },
      { type: "p", text: "Cifre reale câștigă imediat: \"Am ajutat 200+ afaceri din Cluj\", \"12 ani de experiență în domeniu\", \"NPS de 87 (media industriei: 44)\". Evită superlativele fără dovezi (\"cel mai bun\", \"lider\", \"unic\")." },
      { type: "h2", text: "Fotografii reale, nu stock" },
      { type: "p", text: "O fotografie reală cu tine sau echipa ta valorează mai mult decât 10 fotografii stock perfecte. Oamenii vor să vadă cu cine lucrează. Nu trebuie să fie fotografii profesionale — autenticitatea bate perfecțiunea." },
      { type: "h2", text: "Un CTA la final" },
      { type: "p", text: "Nu lăsa pagina să se termine fără o acțiune. \"Programează o discuție de 15 minute\", \"Solicită o ofertă gratuită\", \"Hai să construim ceva împreună →\". Dacă cineva a ajuns la finalul paginii, este interesat." },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): { prev: Post | null; next: Post | null } {
  const idx = posts.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? posts[idx - 1] : null,
    next: idx < posts.length - 1 ? posts[idx + 1] : null,
  };
}
