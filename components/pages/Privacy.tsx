"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { handleDownloadGestioneReclami } from "@/lib/downloadReclamo";
import Link from "next/link";

const Privacy = () => {
  return (
    <main>
      <Navbar />
      <div className="px-[5%] pt-10 pb-18 md:pb-25 bg-white h-full">
        <Link href="/">
          <Button
            variant="outline"
            className="[&_svg:not([class*='size-'])]:size-8 text-emerald-600 hover:border-emerald-600 hover:text-emerald-600"
          >
            <ChevronLeft />
          </Button>
        </Link>
        <article
          className={`prose prose-slate max-w-none p-6 rounded-2xl shadow-md bg-white`}
        >
          <header>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold md:mb-2 md:text-4xl lg:text-5xl text-brand-color">
                INFORMATIVA SULLA PRIVACY AI SENSI DELL’ART. 13 DEL REGOLAMENTO
                UE 2016/679 (GDPR)
              </h1>
              <h2 className="mb-5 text-base md:mb-6 text-brand-color">
                ALCA BROKER S.R.L. –{" "}
                <a
                  href="https://www.alcabroker.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  www.alcabroker.it
                </a>
              </h2>
            </div>
          </header>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">Definizioni</h2>
            <p>
              <strong>Dato personale:</strong> qualsiasi informazione
              riguardante una persona fisica identificata o identificabile
              (“interessato”).
            </p>
            <p>
              <strong>Trattamento:</strong> qualsiasi operazione o insieme di
              operazioni compiute su dati personali, come raccolta,
              registrazione, conservazione, consultazione, comunicazione o
              cancellazione.
            </p>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              1. Titolare del Trattamento
            </h2>
            <p>
              <strong>ALCA BROKER S.R.L.</strong> <br />
              📍 Via Vittoria Colonna, 14 – 80121 Napoli (NA)
              <br />
              📍 Sede secondaria: Via Seggiari, 22 – 80049 Somma Vesuviana (NA)
            </p>
            <p>
              📧 <strong>Email:</strong> info@alcabroker.it <br />
              📫 <strong>PEC:</strong> alcabrokersrl@legalmail.it <br />
              ☎️ <strong>Telefono:</strong> +39 081 199 17 730
            </p>
            <p>
              <strong>P.IVA</strong> e <strong>C.F.</strong>: 07965051217 <br />
              <strong>Numero Iscrizione RUI</strong>: B000514026 – Sezione: B
              (Broker)
            </p>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              2. Tipologia di Dati Personali Trattati
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Dati anagrafici e identificativi</li>
              <li>Dati di contatto (telefono, e-mail, PEC)</li>
              <li>Dati assicurativi, patrimoniali e reddituali</li>
              <li>Dati relativi ai veicoli o ai beni assicurati</li>
              <li>Dati di collaboratori e partner commerciali</li>
              <li>
                Dati di navigazione (indirizzi IP, log, protocolli internet)
              </li>
            </ul>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              3. Finalità e Base Giuridica del Trattamento
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Adempimenti di legge e obblighi IVASS</li>
              <li>Esecuzione di contratti o misure precontrattuali</li>
              <li>Consenso espresso per finalità commerciali e marketing</li>
            </ul>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              4. Destinatari dei Dati Personali
            </h2>
            <p>
              I dati possono essere comunicati a compagnie assicurative,
              consulenti, enti di vigilanza, istituti di credito, collaboratori
              e fornitori IT. Non sono diffusi a soggetti indeterminati.
            </p>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              5. Trasferimento di Dati verso Paesi Terzi
            </h2>
            <p>
              Il trattamento avviene prevalentemente all’interno dell’UE.
              Eventuali trasferimenti verso Paesi extra UE rispettano gli artt.
              45 e 46 del GDPR.
            </p>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              6. Periodo di Conservazione dei Dati
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Dati contrattuali: fino a 10 anni</li>
              <li>Dati marketing: fino a revoca del consenso (max 24 mesi)</li>
              <li>Dati di navigazione: max 12 mesi</li>
            </ul>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              7. Diritti dell’Interessato
            </h2>
            <p>
              L’interessato può esercitare i diritti di accesso, rettifica,
              cancellazione, opposizione, limitazione e portabilità.
              <br />
              <strong>Email</strong>: privacy@alcabroker.it – 📫{" "}
              <strong>PEC</strong>: alcabrokersrl@legalmail.it
            </p>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              8. Diritto di Reclamo
            </h2>
            <p>
              È possibile proporre reclamo al Garante per la Protezione dei Dati
              Personali (📍 Piazza Venezia 11, 00187 Roma – 🌐
              www.garanteprivacy.it).
            </p>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              9. Conseguenze della Mancata Comunicazione dei Dati
            </h2>
            <p>
              Il conferimento è obbligatorio per la gestione dei rapporti
              contrattuali. Il mancato conferimento può impedire la prestazione
              dei servizi richiesti.
            </p>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              10. Processi Automatizzati
            </h2>
            <p>
              ALCA BROKER non utilizza processi decisionali automatizzati o
              profilazione.
            </p>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              11. Modalità del Trattamento
            </h2>
            <p>
              Il trattamento avviene tramite strumenti manuali e digitali,
              garantendo sicurezza, riservatezza e trasparenza.
            </p>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              12. Dati di Navigazione e Cookie
            </h2>
            <p>
              Il sito utilizza cookie tecnici e analitici anonimi (es. Google
              Analytics) e non impiega cookie di profilazione senza consenso. È
              possibile gestirli tramite il browser.
            </p>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              13. Minori di 14 Anni
            </h2>
            <p>
              I servizi non sono destinati a minori di 14 anni. Eventuali dati
              forniti verranno eliminati.
            </p>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              14. Aggiornamenti
            </h2>
            <p>
              L’informativa può essere soggetta a modifiche. La versione
              aggiornata è disponibile su{" "}
              <a
                href="https://www.alcabroker.it"
                className="text-blue-600 underline"
              >
                www.alcabroker.it
              </a>
              .
            </p>
          </section>

          <section className="my-4">
            <h2 className="text-xl font-bold text-brand-color">
              15. Procedura Gestione Reclami
            </h2>
            <p>
              Per informazioni o download del documento ufficiale:{" "}
              <Button
                variant="outline"
                onClick={handleDownloadGestioneReclami}
                className="text-blue-600 underline"
              >
                📄 Scarica la Procedura Gestione Reclami
              </Button>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default Privacy;
