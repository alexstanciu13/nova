import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și Condiții — nova",
  description: "Termenii și condițiile de utilizare a platformei nova.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#060D1A] pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Termeni și Condiții
          </h1>
          <p className="text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            Ultima actualizare: 1 Martie 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <style>{`
              .legal-content h2 { font-family: var(--font-display); font-weight: 700; color: #0D1F5C; font-size: 1.25rem; margin-top: 2rem; margin-bottom: 0.75rem; }
              .legal-content p { font-family: var(--font-body); color: #0D1F5C; line-height: 1.8; margin-bottom: 1rem; font-size: 0.9375rem; }
              .legal-content ul { margin-bottom: 1rem; padding-left: 1.5rem; }
              .legal-content li { font-family: var(--font-body); color: #0D1F5C; margin-bottom: 0.4rem; font-size: 0.9375rem; line-height: 1.7; }
            `}</style>
            <div className="legal-content">
              <p>
                Bine ați venit la nova. Prin accesarea sau utilizarea platformei noastre, acceptați termenii și condițiile prezentate mai jos. Vă rugăm să îi citiți cu atenție înainte de a utiliza serviciile.
              </p>

              <h2>1. Descrierea serviciilor</h2>
              <p>
                Nova oferă o platformă SaaS de generare și găzduire a site-urilor WordPress, folosind tehnologie AI. Serviciile includ generare automată de conținut, hosting, suport tehnic și funcționalități asociate, conform planului ales.
              </p>

              <h2>2. Înregistrare și cont de utilizator</h2>
              <p>
                Pentru a utiliza serviciile, trebuie să creați un cont cu informații corecte și actualizate. Sunteți responsabil pentru menținerea confidențialității parolei și pentru toate activitățile care au loc sub contul dvs.
              </p>

              <h2>3. Abonamente și plăți</h2>
              <p>
                Nova oferă planuri cu facturare lunară, anuală și bienală. Prețurile sunt în RON și includ TVA unde aplicabil. Plățile se procesează securizat prin furnizori terți de plăți. La abonamentele anuale, suma se debitează integral la înregistrare.
              </p>
              <ul>
                <li>Perioada de trial: 14 zile, fără taxare</li>
                <li>La expirarea trialului, se activează planul ales și se debitează suma corespunzătoare</li>
                <li>Rambursare: nu se oferă rambursări pentru perioadele deja consumate</li>
              </ul>

              <h2>4. Anulare și suspendare</h2>
              <p>
                Puteți anula abonamentul oricând. La anulare, contul rămâne activ până la finalul perioadei plătite. Site-urile dvs. nu se șterg la anulare — sunt înghețate și pot fi reactivate oricând prin reabonare.
              </p>

              <h2>5. Proprietatea conținutului</h2>
              <p>
                Conținutul site-urilor dvs. vă aparține în totalitate. Nova nu revendică nicio proprietate asupra conținutului generat sau încărcat de dvs. pe platformă. Nova are dreptul de a utiliza date anonimizate pentru îmbunătățirea serviciilor.
              </p>

              <h2>6. Utilizare acceptabilă</h2>
              <p>
                Este interzisă utilizarea platformei pentru: conținut ilegal, spam, activități frauduloase, sau orice activitate care încalcă drepturile terților sau legislația română și europeană.
              </p>

              <h2>7. Disponibilitate și SLA</h2>
              <p>
                Nova se angajează să mențină o disponibilitate de 99.5% a platformei. Intervenția pentru mentenanță planificată este anunțată cu minimum 24h înainte.
              </p>

              <h2>8. Limitarea răspunderii</h2>
              <p>
                Nova nu este responsabilă pentru pierderi indirecte, incidentale sau de altă natură rezultate din utilizarea sau imposibilitatea utilizării serviciilor. Răspunderea totală a Nova față de orice client este limitată la suma plătită în ultimele 3 luni.
              </p>

              <h2>9. Modificări ale termenilor</h2>
              <p>
                Nova își rezervă dreptul de a modifica acești termeni. Utilizatorii vor fi notificați prin email cu minimum 14 zile înainte de intrarea în vigoare a modificărilor semnificative.
              </p>

              <h2>10. Legea aplicabilă</h2>
              <p>
                Acești termeni sunt guvernați de legea română. Orice dispute se soluționează prin instanțele competente din România.
              </p>

              <h2>Contact</h2>
              <p>
                Pentru întrebări despre acești termeni, contactați-ne la: legal@nova.ro
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
