import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Cookies — nova",
  description: "Cum folosim cookie-urile pe platforma nova.",
};

export default function CookiesPage() {
  return (
    <>
      <section className="bg-[#060D1A] pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Politica de Cookies
          </h1>
          <p className="text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            Ultima actualizare: 1 Martie 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="legal-content space-y-6">
            <style>{`
              .legal-content h2 { font-family: var(--font-display); font-weight: 700; color: #0D1F5C; font-size: 1.25rem; margin-top: 2rem; margin-bottom: 0.75rem; }
              .legal-content p { font-family: var(--font-body); color: #0D1F5C; line-height: 1.8; margin-bottom: 1rem; font-size: 0.9375rem; }
              .legal-content table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-family: var(--font-body); font-size: 0.875rem; }
              .legal-content th { background: #EEF2FF; padding: 0.75rem 1rem; text-align: left; font-weight: 600; color: #0D1F5C; }
              .legal-content td { padding: 0.75rem 1rem; border-bottom: 1px solid #EEF2FF; color: #0D1F5C; vertical-align: top; }
            `}</style>

            <p>
              Această politică explică ce sunt cookie-urile, cum le folosim pe platforma nova și cum le poți gestiona.
            </p>

            <h2>1. Ce sunt cookie-urile?</h2>
            <p>
              Cookie-urile sunt fișiere text mici stocate pe dispozitivul dvs. când vizitați un site web. Ele permit site-ului să vă recunoască la vizitele ulterioare și să vă ofere o experiență personalizată.
            </p>

            <h2>2. Cookie-uri pe care le folosim</h2>
            <table>
              <thead>
                <tr>
                  <th>Tip</th>
                  <th>Scop</th>
                  <th>Durata</th>
                  <th>Consimțământ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Esențiale</td>
                  <td>Autentificare, sesiune, securitate CSRF</td>
                  <td>Sesiune / 30 zile</td>
                  <td>Nu necesită</td>
                </tr>
                <tr>
                  <td>Funcționale</td>
                  <td>Preferințe utilizator (limbă, plan ales)</td>
                  <td>1 an</td>
                  <td>Nu necesită</td>
                </tr>
                <tr>
                  <td>Analitice</td>
                  <td>Google Analytics 4 — statistici de trafic</td>
                  <td>2 ani</td>
                  <td>Necesar</td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>Meta Pixel — campanii publicitate</td>
                  <td>90 zile</td>
                  <td>Necesar</td>
                </tr>
              </tbody>
            </table>

            <h2>3. Cum gestionezi cookie-urile</h2>
            <p>
              La prima vizită, îți prezentăm un banner de cookie-uri prin care poți accepta sau refuza categoriile opționale. Poți modifica preferințele oricând din setările contului.
            </p>
            <p>
              De asemenea, poți gestiona cookie-urile direct din browser (Setări → Confidențialitate → Cookie-uri). Atenție: dezactivarea cookie-urilor esențiale poate afecta funcționarea platformei.
            </p>

            <h2>4. Cookie-uri terți</h2>
            <p>
              Serviciile integrate (Google Analytics, Meta Pixel, Stripe) pot seta propriile cookie-uri, guvernate de politicile lor de confidențialitate. Linkuri: Google Privacy Policy, Meta Privacy Policy, Stripe Privacy Policy.
            </p>

            <h2>5. Contact</h2>
            <p>
              Pentru întrebări despre cookie-uri: privacy@nova.ro
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
