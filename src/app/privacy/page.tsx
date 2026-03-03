import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate — nova",
  description: "Cum colectăm, folosim și protejăm datele tale personale pe platforma nova. Conform GDPR.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[#060D1A] pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Politica de Confidențialitate
          </h1>
          <p className="text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            Ultima actualizare: 1 Martie 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="legal-content">
            <style>{`
              .legal-content h2 { font-family: var(--font-display); font-weight: 700; color: #0D1F5C; font-size: 1.25rem; margin-top: 2rem; margin-bottom: 0.75rem; }
              .legal-content p { font-family: var(--font-body); color: #0D1F5C; line-height: 1.8; margin-bottom: 1rem; font-size: 0.9375rem; }
              .legal-content ul { margin-bottom: 1rem; padding-left: 1.5rem; }
              .legal-content li { font-family: var(--font-body); color: #0D1F5C; margin-bottom: 0.4rem; font-size: 0.9375rem; line-height: 1.7; }
            `}</style>

            <p>
              Nova se angajează să protejeze confidențialitatea datelor dvs. personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația română aplicabilă.
            </p>

            <h2 id="gdpr">1. Operatorul de date</h2>
            <p>
              Operator de date: Nova SRL, cu sediul în România. Contact: privacy@nova.ro
            </p>

            <h2>2. Date colectate</h2>
            <p>Colectăm următoarele categorii de date:</p>
            <ul>
              <li><strong>Date de cont:</strong> email, parolă (criptată), nume</li>
              <li><strong>Date de plată:</strong> procesate de furnizori terți (nu stocăm date de card)</li>
              <li><strong>Date de utilizare:</strong> site-uri create, sesiuni de utilizare, erori</li>
              <li><strong>Date tehnice:</strong> adresa IP, browser, device</li>
              <li><strong>Conținut site:</strong> textele, imaginile și setările site-urilor dvs.</li>
            </ul>

            <h2>3. Scopurile prelucrării</h2>
            <ul>
              <li>Furnizarea și îmbunătățirea serviciilor nova</li>
              <li>Facturare și gestionarea abonamentelor</li>
              <li>Suport tehnic și comunicare cu utilizatorii</li>
              <li>Respectarea obligațiilor legale</li>
              <li>Marketing (numai cu consimțământul dvs.)</li>
            </ul>

            <h2>4. Temeiul juridic al prelucrării</h2>
            <ul>
              <li>Executarea contractului (furnizarea serviciilor)</li>
              <li>Consimțământul dvs. (marketing, cookies opționale)</li>
              <li>Obligație legală (facturare, arhivare)</li>
              <li>Interes legitim (securitate, prevenirea fraudei)</li>
            </ul>

            <h2>5. Stocarea datelor</h2>
            <p>
              Datele sunt stocate pe servere situate în Uniunea Europeană. Nu transferăm date în afara UE fără garanții adecvate. Datele de cont se păstrează pe durata abonamentului + 3 ani pentru obligații fiscale.
            </p>

            <h2>6. Drepturile dvs. (GDPR)</h2>
            <ul>
              <li>Dreptul de acces la datele dvs. personale</li>
              <li>Dreptul la rectificare a datelor incorecte</li>
              <li>Dreptul la ștergere (&ldquo;dreptul de a fi uitat&rdquo;)</li>
              <li>Dreptul la restricționarea prelucrării</li>
              <li>Dreptul la portabilitatea datelor</li>
              <li>Dreptul de a vă opune prelucrării</li>
              <li>Dreptul de a retrage consimțământul</li>
            </ul>
            <p>
              Pentru exercitarea acestor drepturi, contactați: privacy@nova.ro. Vom răspunde în maximum 30 de zile.
            </p>

            <h2>7. Cookie-uri</h2>
            <p>
              Utilizăm cookie-uri necesare pentru funcționarea platformei și, cu consimțământul dvs., cookie-uri analitice (GA4) și de marketing. Detalii în Politica de Cookie-uri.
            </p>

            <h2>8. Modificări ale politicii</h2>
            <p>
              Orice modificare semnificativă va fi comunicată prin email cu minimum 14 zile înainte. Continuarea utilizării serviciilor după această dată constituie acceptarea noilor termeni.
            </p>

            <h2>9. Contact și reclamații</h2>
            <p>
              Contact: privacy@nova.ro. Aveți dreptul să depuneți o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
