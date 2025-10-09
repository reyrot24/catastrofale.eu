"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
                <img src="/logo.svg" />
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
          <nav className="hidden md:flex space-x-8">
            <a
              href="#preventivo"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Preventivo
            </a>
            <a
              href="#faqs"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              FAQ
            </a>
            <a
              href="#documenti"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Documenti
            </a>
            <a
              href="#area-clienti"
              className="text-gray-700 hover:text-blue-900 font-medium transition"
            >
              Area Clienti
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
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
          <div className="px-4 py-4 space-y-3">
            <a href="#preventivo" className="block text-gray-700 font-medium">
              Preventivo
            </a>
            <a href="#faq" className="block text-gray-700 font-medium">
              FAQ
            </a>
            <a href="#documenti" className="block text-gray-700 font-medium">
              Documenti
            </a>
            <a href="#area-clienti" className="block text-gray-700 font-medium">
              Area Clienti
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
