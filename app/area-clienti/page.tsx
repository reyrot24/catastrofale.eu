import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import Form from "./form";

const page = () => {
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
                Area Clienti
              </h1>
            </div>
          </header>
          <Form />
        </article>
      </div>
    </main>
  );
};

export default page;
