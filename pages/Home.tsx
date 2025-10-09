"use client";
import { useState, useEffect } from "react";
import {
  Shield,
  Euro,
  Clock,
  FileText,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { handleDownloadGestioneReclami } from "./GestioneReclami";

const CatastrofaleHomepage = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  const [openDialog, setOpenDialog] = useState(false);

  // Calcola countdown dinamico fino al 31/03/2025
  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date("2025-03-31T23:59:59");
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setCountdown({ days, hours, minutes });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleReclami = () => {
    handleDownloadGestioneReclami();
    setOpenDialog(false);
  };

  const advantages = [
    {
      icon: Shield,
      title: "Protezione Completa",
      description:
        "Copriamo terremoti, alluvioni e altri eventi catastrofali previsti dalla normativa 2025",
    },
    {
      icon: Euro,
      title: "Migliori Tariffe",
      description:
        "Confrontiamo le offerte di più compagnie per garantirti il prezzo più conveniente",
    },
    {
      icon: Clock,
      title: "Preventivo Immediato",
      description:
        "In pochi minuti ottieni un preventivo personalizzato pronto per l'acquisto",
    },
    {
      icon: FileText,
      title: "Tutto Digitale",
      description:
        "Firma elettronica, pagamento online e documenti sempre disponibili nella tua area riservata",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Inserisci Partita IVA",
      description: "Compila i dati della tua impresa",
    },
    {
      number: 2,
      title: "Confronta Offerte",
      description: "Visualizza le proposte delle compagnie",
    },
    {
      number: 3,
      title: "Firma e Paga Online",
      description: "Concludi in sicurezza e ricevi la polizza",
    },
  ];

  const questions = [
    {
      question:
        "Quali imprese sono obbligate a stipulare la polizza contro i rischi catastrofali?",
      answer: (
        <p>
          Tutte le <strong>imprese con sede legale in Italia</strong>, nonché le{" "}
          <strong>
            imprese estere con una stabile organizzazione in Italia
          </strong>
          , iscritte al Registro delle Imprese, sono soggette all’obbligo.
        </p>
      ),
    },
    {
      question: "Sono previste esclusioni?",
      answer: (
        <>
          <p>Sì, l’obbligo non si applica a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Imprese agricole</li>
            <li>
              Imprese con immobili abusivi o privi delle autorizzazioni edilizie
            </li>
            <li>Enti del Terzo Settore iscritti unicamente al REA</li>
          </ul>
        </>
      ),
    },
    {
      question: "Da quando scatta l’obbligo assicurativo?",
      answer: (
        <>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="py-2 px-2">Categoria Impresa</th>
                  <th className="py-2 px-2">Scadenza</th>
                  <th className="py-2 px-2">Applicazione sanzioni</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-2">Grandi imprese</td>
                  <td className="py-2 px-2">31 marzo 2025</td>
                  <td className="py-2 px-2">dal 30 giugno 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-2">Medie imprese</td>
                  <td className="py-2 px-2">1° ottobre 2025</td>
                  <td className="py-2 px-2">dal 1° ottobre 2025</td>
                </tr>
                <tr>
                  <td className="py-2 px-2">Piccole e microimprese</td>
                  <td className="py-2 px-2">31 dicembre 2025</td>
                  <td className="py-2 px-2">dal 31 dicembre 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-amber-700">
            ⚠️ Moratoria: per le grandi imprese è prevista una tolleranza di 90
            giorni (fino al 30 giugno 2025) senza sanzioni.
          </p>
        </>
      ),
    },
    {
      question: "Quali eventi devono essere coperti dalla polizza?",
      answer: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Terremoti (sismi)</li>
          <li>Alluvioni, esondazioni, inondazioni</li>
          <li>Frane</li>
        </ul>
      ),
    },
    {
      question: "Quali beni devono essere assicurati?",
      answer: (
        <>
          <p>
            Sono obbligatoriamente coperti i beni materiali indicati all’art.
            2424 c.c., voce B-II, punti 1–2–3:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Terreni e fabbricati destinati all’attività d’impresa</li>
            <li>Impianti e macchinari</li>
            <li>Attrezzature industriali e commerciali</li>
          </ul>
        </>
      ),
    },
    {
      question: "Come vengono calcolati i premi assicurativi?",
      answer: (
        <>
          <p>I premi sono proporzionali al rischio e calcolati in base a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Ubicazione geografica dell’impresa</li>
            <li>Vulnerabilità dei beni assicurati</li>
            <li>Misure di prevenzione e mitigazione adottate</li>
          </ul>
        </>
      ),
    },
    {
      question: "Sono previste franchigie o scoperti?",
      answer: (
        <p>
          ✅ Sì, le polizze possono prevedere uno{" "}
          <strong>scoperto massimo del 15%</strong> dell’indennizzo per
          coperture fino a 30 milioni di euro.
        </p>
      ),
    },
    {
      question:
        "Quali sono le modalità di assunzione del rischio da parte delle compagnie?",
      answer: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Coperture offerte direttamente</li>
          <li>Coassicurazione</li>
          <li>Partecipazione a forme consortili</li>
        </ul>
      ),
    },
    {
      question: "Cosa succede se non stipulo la polizza entro la scadenza?",
      answer: (
        <>
          <p>In caso di mancata stipula:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>❌ Esclusione da contributi pubblici</li>
            <li>🚫 Limitazioni all’accesso al credito (Fondo PMI)</li>
            <li>⚠️ Penalizzazioni nell’accesso a misure di sostegno</li>
          </ul>
        </>
      ),
    },
    {
      question: "Esiste un supporto statale per le compagnie assicurative?",
      answer: (
        <p>
          Sì, <strong>SACE S.p.A.</strong> può fornire copertura riassicurativa
          fino al 50% degli indennizzi, con un tetto massimo di 5 miliardi di
          euro annui.
        </p>
      ),
    },
    {
      question:
        "Le imprese devono stipulare una nuova polizza o possono integrare quelle esistenti?",
      answer: (
        <p>
          È possibile integrare le polizze già in essere, purché rispettino i
          requisiti minimi previsti dalla normativa (eventi coperti, beni
          inclusi, franchigie, ecc.).
        </p>
      ),
    },
    {
      question: "Chi controlla il rispetto dell’obbligo?",
      answer: (
        <p>
          Non è previsto un organo specifico di controllo. Tuttavia, le
          amministrazioni pubbliche verificano l’adempimento ai fini
          dell’erogazione di incentivi e agevolazioni.
        </p>
      ),
    },
    {
      question: "È prevista una comunicazione ufficiale da parte dell’impresa?",
      answer: (
        <p>
          No, non è richiesta una comunicazione preventiva, ma le imprese
          dovranno dimostrare l’adempimento in caso di richiesta da parte di
          enti pubblici o istituti di credito.
        </p>
      ),
    },
    {
      question: "È possibile ottenere il DURC senza la polizza obbligatoria?",
      answer: (
        <>
          <p>
            ❌ No. Dalla decorrenza delle sanzioni indirette, la mancata stipula
            comporta anche il blocco del DURC.
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="py-2 px-2">Categoria Impresa</th>
                  <th className="py-2 px-2">Blocco DURC da</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-2">Grandi imprese</td>
                  <td className="py-2 px-2">30 giugno 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-2">Medie imprese</td>
                  <td className="py-2 px-2">1° ottobre 2025</td>
                </tr>
                <tr>
                  <td className="py-2 px-2">Piccole e microimprese</td>
                  <td className="py-2 px-2">31 dicembre 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      question: "Come tutelarsi per non perdere l’accesso a DURC e contributi?",
      answer: (
        <ul className="list-disc pl-6 space-y-1">
          <li>🕒 Stipulare la polizza nei termini previsti</li>
          <li>📄 Conservare la documentazione assicurativa</li>
          <li>
            👥 Informare consulenti e referenti aziendali sugli obblighi
            normativi
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Sticky */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              La tua impresa deve essere pronta ai rischi catastrofali. Dal 2025
              è obbligatorio.
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Proteggi la tua azienda da terremoti, alluvioni e altri eventi
              estremi. Ottieni subito il tuo preventivo.
            </p>
            <Link href="/questionario-catastrofale">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-8 rounded-lg text-lg font-semibold flex items-center space-x-2 transition transform hover:scale-105 shadow-lg">
                <span>Fai un Preventivo</span>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Countdown */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 max-w-md">
            <div className="flex items-center space-x-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold text-yellow-300">
                Scadenza per imprese di classe A
              </span>
            </div>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold">{countdown.days}</div>
                <div className="text-sm text-blue-200">giorni</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{countdown.hours}</div>
                <div className="text-sm text-blue-200">ore</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{countdown.minutes}</div>
                <div className="text-sm text-blue-200">minuti</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ottieni la tua polizza in 3 semplici passi
            </h2>
            <p className="text-lg text-gray-600">
              Un processo veloce, sicuro e completamente digitale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full text-2xl font-bold mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300 w-8 h-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perché scegliere Catastrofale.it
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-900" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQs</h2>
            <p className="text-lg text-gray-600">
              Obbligo Assicurativo per Rischi Catastrofali
            </p>
          </div>
          <Accordion type="single" collapsible>
            {questions.map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="md:py-5 md:text-md font-bold cursor-pointer">
                  {question.question}
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Normativa Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Riferimenti Normativi
          </h2>
          <p className="text-gray-700 mb-8">
            L'obbligo di assicurazione contro i rischi catastrofali per le
            imprese è stabilito dalla normativa italiana.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="legge-213"
              className="inline-flex items-center px-6 py-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-50 transition"
            >
              <FileText className="w-5 h-5 mr-2 text-blue-900" />
              <span className="font-medium text-blue-900">Legge 213/2023</span>
            </Link>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-50 transition"
            >
              <FileText className="w-5 h-5 mr-2 text-blue-900" />
              <span className="font-medium text-blue-900">DM 18/2025</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Calcola il tuo preventivo in pochi minuti. È obbligatorio, fallo
            adesso.
          </h2>
          <Link href="/questionario-catastrofale">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-8 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 transition transform hover:scale-105 shadow-lg">
              <span>Inizia Subito</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-white font-semibold mb-4">Link Rapidi</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#faqs" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Area Clienti
                  </a>
                </li>

                {/* ✅ Dialog should live inside an <li> */}
                <li>
                  <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogTrigger asChild>
                      <button className="hover:text-white transition cursor-pointer underline">
                        Reclami
                      </button>
                    </DialogTrigger>
                    <DialogContent className="w-64 h-48">
                      <DialogHeader>
                        <DialogTitle>
                          Vuoi scaricare la procedura di gestione reclami?
                        </DialogTitle>
                      </DialogHeader>

                      <DialogFooter className="sm:justify-start space-x-2">
                        <DialogClose asChild>
                          <Button type="button" variant="outline">
                            No
                          </Button>
                        </DialogClose>
                        <Button
                          onClick={handleReclami}
                          type="submit"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white  hover:scale-105"
                        >
                          Sì
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-white font-semibold mb-4">Assistenza</h3>
              <ul className="space-y-2">
                <li>Tel: 081 17676699</li>
                <li>PEC: info@pec.alcabroker.it</li>
                <li>Email: info@alcabroker.it</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                Informazioni Legali
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <img src="/logo.svg" />
                </div>
                <div>
                  <div className="text-white font-bold">Catastrofale.eu</div>
                  <div className="text-sm">by Alca Broker S.r.l.</div>
                </div>
              </div>
              <p className="text-sm">
                Intermediario assicurativo iscritto al registro IVASS - RUI col
                numero B000514026
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2025 Alca Broker S.r.l. - P.IVA 12345678901 - Tutti i
              diritti riservati
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CatastrofaleHomepage;
