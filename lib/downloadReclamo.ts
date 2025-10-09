import { jsPDF } from "jspdf";

export const handleDownloadGestioneReclami = () => {
  const doc = new jsPDF({
    unit: "mm",
    format: "a4",
  });

  const lineSpacing = 8;
  let y = 20;

  // Titolo principale
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("GESTIONE RECLAMI", 105, y, { align: "center" });
  y += 8;

  doc.setFontSize(12);
  doc.setFont("helvetica", "italic");
  doc.text(
    "(Provvedimento IVASS n. 46/2016 – Regolamento ISVAP n. 24/2008)",
    105,
    y,
    { align: "center" }
  );
  y += 14;

  // Funzione helper per titolo e testo
  const addSection = (title: string, text: string) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(title, 10, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    const lines = doc.splitTextToSize(text, 185);
    doc.text(lines, 10, y);
    y += lines.length * 5 + lineSpacing;
  };

  // Sezioni
  addSection(
    "1. Premessa",
    "In conformità al Provvedimento IVASS n. 46 del 3 maggio 2016, integrativo del Regolamento ISVAP n. 24/2008, ALCA BROKER S.R.L. ha istituito una funzione interna dedicata alla gestione dei reclami, per garantire la corretta tutela dei diritti del contraente, dell’assicurato, del beneficiario e del danneggiato."
  );

  addSection(
    "2. Soggetti legittimati e modalità di presentazione",
    "Il contraente, l’assicurato, il beneficiario o il danneggiato possono presentare un reclamo scritto nei confronti dell’intermediario o dell’impresa di assicurazione, fermo restando il diritto di adire l’Autorità Giudiziaria.\n\n Raccomandata A/R:\nALCA BROKER S.R.L. – Ufficio Reclami\nc.a. Sig. Alfonso Caiazzo\nVia Vittoria Colonna, 14 – 80121 Napoli (NA)\n\n E-mail dedicata: reclamialca@gmail.com"
  );

  addSection(
    "3. Gestione interna dei reclami",
    "Il Responsabile della Funzione Reclami è Alfonso Caiazzo. La funzione non è esternalizzata: la gestione dei reclami avviene interamente all’interno della struttura aziendale di ALCA BROKER S.R.L. L’intermediario si impegna a fornire risposta scritta entro 45 giorni dalla ricezione del reclamo, con motivazione e indicazione dell’esito delle verifiche effettuate."
  );

  addSection(
    "4. Ricorso all’IVASS",
    "Se il reclamante non è soddisfatto o non riceve risposta entro 45 giorni, può rivolgersi a: IVASS – Istituto per la Vigilanza sulle Assicurazioni, Servizio Vigilanza Intermediari, Via del Quirinale n. 21 – 00187 Roma. Fax: 06 42133206. PEC: ivass@pec.ivass.it. Sito web: www.ivass.it.\n\nAlla segnalazione deve essere allegata la documentazione del reclamo già inviato e l’eventuale risposta ricevuta."
  );

  addSection(
    "5. Reclami nei rapporti di libera collaborazione",
    "L’informativa è integrata con la procedura per la presentazione dei reclami relativi ai rapporti di libera collaborazione tra intermediari, ai sensi dell’art. 22, comma 10, del D.L. 179/2012 (L. 221/2012)."
  );

  addSection(
    "6. Arbitro Assicurativo (dal 9 ottobre 2025)",
    "Dal 9 ottobre 2025, il contraente o l’assicurato potrà rivolgersi anche all’Arbitro Assicurativo, istituito presso l’IVASS, per la risoluzione stragiudiziale delle controversie sui contratti assicurativi.\nL’accesso all’Arbitro è gratuito per il cliente, salvo spese vive documentate.\n\nInformazioni su competenze, procedura e modulistica:\nwww.ivass.it – www.arbitroassicurativo.it"
  );

  // Salva il file
  doc.save("Gestione_Reclami_ALCA_BROKER.pdf");
};
