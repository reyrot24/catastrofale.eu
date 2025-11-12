"use client";
import Navbar from "@/components/Navbar";
import Section1 from "./sections/Section1";
import Section6 from "./sections/Section6";
import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "@/contexts/form-context";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { validatePIVA, validateTelefono } from "./utils/validationFunctions";
import Ubicazioni from "./sections/Ubicazioni";
import SectionHelp from "./sections/SectionHelp";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const QuestionarioContent = () => {
  const { formState } = useForm();
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [success, setSuccess] = useState(false);
  // Ensure the page is scrolled href top when this component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  const validateForm = (): boolean => {
    const errors: { [key: string]: string | null } = {};
    let hasErrors = false;

    //SECTION 1
    if (!formState.section1.cfPiva.trim()) {
      errors.cfPiva = "CF / PIVA è obbligatoria";
      hasErrors = true;
    } else {
      const piva = validatePIVA(formState.section1.cfPiva);
      if (!piva) {
        errors.cfPiva = "La P. IVA deve essere composto da 11 numeri.";
        hasErrors = true;
      }
    }
    if (!formState.section1.ragioneSociale.trim()) {
      errors.ragioneSociale = "Ragione Sociale è obbligatoria";
      hasErrors = true;
    }
    if (!formState.section1.sedeLegale.trim()) {
      errors.sedeLegale = "Sede Legale è obbligatoria";
      hasErrors = true;
    }
    if (!formState.section1.dataCostituzione) {
      errors.dataCostituzione = "Data Costituzione è obbligatoria";
      hasErrors = true;
    }
    if (!formState.section1.codiceAteco.trim()) {
      errors.codiceAteco = "Codice Ateco è obbligatorio";
      hasErrors = true;
    }
    if (!formState.section1.telefono.trim()) {
      errors.telefono = "Cellulare è obbligatorio";
      hasErrors = true;
    } else {
      const isPhoneValid = validateTelefono(formState.section1.telefono);
      if (!isPhoneValid) {
        errors.telefono =
          "Il numero di cellulare deve essere composto da almeno 9 numeri.";
        hasErrors = true;
      }
    }
    //Controllo che le ubicazioni sono obbligatorie
    if (!formState.section1.email.trim()) {
      errors.email = "Email è obbligatoria";
      hasErrors = true;
    }
    if (!formState.section1.nominativoRiferimento.trim()) {
      errors.nominativoRiferimento = "Nominativo Riferimento è obbligatorio";
      hasErrors = true;
    }

    if (formState.ubicazioni.length === 0) {
      errors.nominativoRiferimento = "Compilare almeno un'ubicazione";
      hasErrors = true;
    }

    //SECTION 6
    if (!formState.section6.checkboxTrattamentoDatiPersonali) {
      errors.checkboxTrattamentoDatiPersonali =
        "Acconsentire al trattamento dei dati personali";
      hasErrors = true;
    }
    if (!formState.section6.checkboxAutorizzazionePreventivo) {
      errors.checkboxAutorizzazionePreventivo =
        "Acconsentire all'autorizzazione per formulare un preventivo assicurativo";
      hasErrors = true;
    }

    setErrors(errors);

    if (hasErrors) {
      let errorMessage = "Ci sono questi errori nel form:\n\n";
      for (const key in errors) {
        if (errors[key]) {
          errorMessage += `${errors[key]}\n`;
        }
      }
      alert(errorMessage); // Show the errors in an alert
      toast.error("Ci sono errori nel form. Controlla i campi evidenziati.");
      return false;
    }

    return true;
  };

  const handleSalva = () => {
    if (!validateForm()) {
      console.log("Saving form data:", formState);
      return; // If validation fails, do nothing
    }

    setErrors({}); // ✅ Clear errors before saving
    const data = {
      id: "21731228-0B42-4036-BA6E-476D909DA4E6",
      data: formState,
    };
    InviaForm(data);
    /* console.log("Saving form data:", data); */
  };

  async function InviaForm(data: any) {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(data),
      };

      const response = await fetch(
        "https://devops.mobilityexpress.it/api/getSaveCat",
        options
      );
      const responseData = await response.json();
      if (responseData.status === -1 || responseData.status === 0) {
        toast.error(responseData.message + ". Errore");
        return;
      }
      toast.success(responseData.message + " con successo");
      setSuccess(true);
    } catch (err) {
      toast.error("Errore nell'invio del form");
      console.log(err);
    }
  }

  return (
    <main>
      <Navbar />
      {success ? (
        <div className="px-[5%] pt-10 pb-18 md:pb-25 bg-white h-full text-center space-y-4">
          <h1 className="text-2xl  font-bold md:mb-2 md:text-4xl lg:text-5xl text-brand-color">
            Questionario inviato con successo
          </h1>
          <Link href="/">
            <Button
              variant="outline"
              className="[&_svg:not([class*='size-'])]:size-8 text-emerald-600 hover:border-emerald-600 hover:text-emerald-600"
            >
              Torna indietro
            </Button>
          </Link>
        </div>
      ) : (
        <div className="px-[5%] pt-10 pb-18 md:pb-25 bg-white h-full">
          <Link href="/">
            <Button
              variant="outline"
              className="[&_svg:not([class*='size-'])]:size-8 text-emerald-600 hover:border-emerald-600 hover:text-emerald-600"
            >
              <ChevronLeft />
            </Button>
          </Link>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold md:mb-2 md:text-4xl lg:text-5xl text-brand-color">
              Questionario per Polizze Catastrofali
            </h1>
            <h2 className="mb-5 text-base md:mb-6 text-brand-color">
              (Terremoto, Alluvione, Inondazione, Esondazione, Frana)
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <Section1 errors={errors} />
            <Ubicazioni />
            <Section6 errors={errors} />
            <div className="text-right">
              <Button
                type="submit"
                onClick={handleSalva}
                className="bg-emerald-600 text-white hover:bg-emerald-600  space-x-2 transition transform hover:scale-105 shadow-lg"
              >
                Salva
              </Button>
            </div>
            <SectionHelp /* numeroTelefono={numeroTelefono} */ />
          </div>
        </div>
      )}
    </main>
  );
};

const Questionario = () => (
  <FormProvider>
    <QuestionarioContent />
  </FormProvider>
);

export default Questionario;
