"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useEffect } from "react";

const Legge213 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);
  return (
    <main>
      <div className="px-[5%] pt-10 pb-18 md:pb-25 bg-white h-full">
        <article
          className={`prose prose-slate max-w-none p-6 rounded-2xl shadow-md bg-white`}
        >
          <header>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold md:mb-2 md:text-4xl lg:text-5xl text-brand-color">
                Obbligo di Assicurazione contro i Rischi Catastrofali per le
                Imprese
              </h1>
              <h2 className="mb-5 text-base md:mb-6 text-brand-color">
                Sintesi della normativa e principali punti di attenzione.
              </h2>
            </div>
          </header>

          <section>
            <p>
              Con l’introduzione della{" "}
              <strong>Legge di Bilancio 2024 (Legge n. 213/2023)</strong> e il
              successivo
              <strong> Decreto Attuativo (DM n. 18/2025)</strong>, l’ordinamento
              giuridico italiano ha stabilito per la prima volta un obbligo
              assicurativo specifico per la copertura dei rischi catastrofali in
              capo alle imprese. Questa riforma trasferisce la responsabilità
              del risarcimento dal pubblico al mercato assicurativo.
            </p>
          </section>

          <details className="my-4">
            <summary className="cursor-pointer text-brand-color font-bold">
              Quadro Normativo di Riferimento
            </summary>

            <div className="mt-3">
              <h3 className="font-semibold">
                Legge n. 213/2023 – Legge di Bilancio 2024
              </h3>
              <p>
                L’articolo 1, commi da 101 a 112 introduce l’obbligo per le
                imprese di stipulare una copertura assicurativa contro i danni
                derivanti da calamità naturali ed eventi catastrofali per
                potenziare la resilienza del tessuto imprenditoriale nazionale.
              </p>

              <h3 className="font-semibold">Decreto Ministeriale n. 18/2025</h3>
              <p>
                Il DM (30 gennaio 2025, n. 18 — pubblicato in G.U. il 27
                febbraio 2025) definisce le modalità attuative, tra cui:
              </p>
              <ul className="list-disc">
                <li className="ml-8">
                  Individuazione degli eventi calamitosi e catastrofali
                </li>
                <li className="ml-8">
                  I beni oggetto di copertura assicurativa
                </li>
                <li className="ml-8">Determinazione dei premi</li>
                <li className="ml-8">
                  Franchigie, massimali e limiti di indennizzo
                </li>
                <li className="ml-8">
                  Modalità di aggiornamento periodico dei premi
                </li>
              </ul>
            </div>
          </details>

          <section className="mt-4">
            <h2 className="text-brand-color font-bold">Soggetti Obbligati</h2>
            <p>
              L’obbligo riguarda tutte le imprese con sede legale in Italia e le
              imprese estere con stabile organizzazione in Italia, iscritte al
              Registro delle Imprese (art. 2188 c.c.).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <h4 className="text-brand-color font-bold">Imprese Incluse</h4>
                <ul className="list-disc">
                  <li className="ml-8">
                    Società commerciali di qualsiasi tipo
                  </li>
                  <li className="ml-8">
                    Società tra professionisti (STP e STA)
                  </li>
                  <li className="ml-8">
                    Cooperative sociali e imprese sociali iscritte nel Registro
                    delle Imprese
                  </li>
                  <li className="ml-8">
                    Attività commerciali (ristoranti, negozi, laboratori)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-brand-color font-bold">Imprese Escluse</h4>
                <ul className="list-disc">
                  <li className="ml-8">Imprese agricole</li>
                  <li className="ml-8">
                    Imprese con immobili abusivi o prive delle autorizzazioni
                    edilizie
                  </li>
                  <li className="ml-8">
                    Enti del Terzo Settore iscritti unicamente al REA
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-brand-color font-bold">
              Scadenze per l’Adeguamento
            </h2>
            <p className="mb-3">
              Le scadenze variano in base alla dimensione dell’impresa
              (Decreto-Legge 31 marzo 2025, n. 39 — Legge n. 78/2025):
            </p>

            <div className="overflow-x-auto w-full">
              <ScrollArea className="w-[54rem] md:w-full">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="text-left">
                      <th className="py-2">Categoria</th>
                      <th className="py-2">Scadenza</th>
                      <th className="py-2">Requisiti</th>
                      <th className="py-2">Decorrenza sanzioni indirette</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-slate-50">
                      <td className="py-2 align-top">Grandi Imprese</td>
                      <td className="py-2 align-top">31 marzo 2025</td>
                      <td className="py-2 align-top">
                        &gt;250 dipendenti o fatturato &gt;50 mln € o bilancio
                        &gt;43 mln €
                      </td>
                      <td className="py-2 align-top">
                        30 giugno 2025 (moratoria 90 giorni)
                      </td>
                    </tr>

                    <tr className="even:bg-white">
                      <td className="py-2 align-top">Medie Imprese</td>
                      <td className="py-2 align-top">1° ottobre 2025</td>
                      <td className="py-2 align-top">
                        ≤250 dipendenti, fatturato ≤50 mln € o bilancio ≤43 mln
                        €
                      </td>
                      <td className="py-2 align-top">1° ottobre 2025</td>
                    </tr>

                    <tr className="odd:bg-slate-50">
                      <td className="py-2 align-top">Piccole e Microimprese</td>
                      <td className="py-2 align-top">31 dicembre 2025</td>
                      <td className="py-2 align-top">
                        Piccole: &lt;50 dip., ≤10 mln €; Micro: &lt;10 dip., ≤2
                        mln €
                      </td>
                      <td className="py-2 align-top">31 dicembre 2025</td>
                    </tr>
                  </tbody>
                </table>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            <p className="mt-3 text-sm text-slate-600">
              Nota: per le grandi imprese è prevista una moratoria di 90 giorni.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-brand-color font-bold">
              Eventi Catastrofali Coperti
            </h2>
            <ul className="list-disc">
              <li className="ml-8">
                Sismi (terremoti con epicentro in aree riconosciute da enti
                nazionali competenti)
              </li>
              <li className="ml-8">Alluvioni, inondazioni, esondazioni</li>
              <li className="ml-8">
                Frane (movimenti rapidi di terra o roccia)
              </li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-brand-color font-bold">Beni Assicurati</h2>
            <p>
              Sono oggetto di copertura obbligatoria le immobilizzazioni
              materiali (art. 2424, voce B-II, numeri 1), 2) e 3) del Codice
              Civile):
            </p>
            <ul className="list-disc">
              <li className="ml-8">
                Terreni e fabbricati utilizzati per l’attività d’impresa
              </li>
              <li className="ml-8">Impianti e macchinari</li>
              <li className="ml-8">
                Attrezzature industriali e commerciali operative
              </li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-brand-color font-bold">
              Caratteristiche della Polizza
            </h2>
            <h4 className="font-semibold">Franchigia e Scoperto</h4>
            <p>
              Scoperto massimo del 15% per coperture fino a 30 milioni di euro.
            </p>

            <h4 className="font-semibold">Premi Assicurativi</h4>
            <p>
              Premi proporzionali al rischio, calcolati in base a: ubicazione
              geografica, vulnerabilità dei beni e misure di prevenzione
              adottate.
            </p>

            <h4 className="font-semibold">
              Modalità di Assunzione del Rischio
            </h4>
            <p>
              Le compagnie possono operare direttamente, in coassicurazione o in
              forma consortile.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-brand-color font-bold">
              Conseguenze della Mancata Stipula
            </h2>
            <p>
              Non sono previste sanzioni pecuniarie dirette, ma inadempienze
              causano esclusione da contributi pubblici, limitazioni
              nell’accesso al credito e penalizzazioni nelle misure di sostegno.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-brand-color font-bold">
              Supporto Statale e Riassicurazione
            </h2>
            <p>
              SACE S.p.A. può fornire copertura riassicurativa fino al 50% degli
              indennizzi, con un tetto massimo di 5 miliardi di euro annui, per
              favorire l’offerta di polizze e garantire stabilità al sistema.
            </p>
          </section>

          <footer className="mt-6">
            <h3 className="text-brand-color font-bold">Conclusione</h3>
            <p>
              La normativa rappresenta un passo verso una gestione del rischio
              più moderna: incentiva la prevenzione, favorisce la continuità
              operativa e riduce la dipendenza dagli aiuti pubblici.
            </p>

            <div className="mt-4 flex gap-3 justify-end">
              <Button
                onClick={() => window.print()}
                className="bg-emerald-600 text-white hover:bg-emerald-600  space-x-2 transition transform hover:scale-105 shadow-lg"
                aria-label="Stampa"
              >
                Stampa
              </Button>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
};

export default Legge213;
