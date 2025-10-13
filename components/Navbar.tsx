"use client";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  className="w-full"
                  width={0}
                  height={0}
                />
              </div>
              <div>
                <div className="text-xl font-bold text-blue-900">
                  Catastrofale.eu
                </div>
                <div className="text-xs text-gray-500">by Alca Broker</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              href="/questionario-catastrofale"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Preventivo
            </Link>
            <a
              href="#faqs"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              FAQ
            </a>
            <Link
              href="/area-clienti"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Area Clienti
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tidycal.com/sviluppo/introduzione-mobility-express-1rl5ng9"
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center space-x-2 transition transform hover:scale-105">
                <span>Prenota una call</span>
                <Phone className="w-5 h-5" />
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-4 space-y-3 ">
            <Link
              href="/questionario-catastrofale"
              className="block text-gray-700 font-medium"
            >
              Preventivo
            </Link>
            <a href="#faqs" className="block text-gray-700 font-medium">
              FAQ
            </a>
            <a href="#area-clienti" className="block text-gray-700 font-medium">
              Area Clienti
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tidycal.com/sviluppo/introduzione-mobility-express-1rl5ng9"
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center space-x-2 transition transform hover:scale-105">
                <span>Prenota una call</span>
                <Phone className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
