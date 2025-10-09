"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    localStorage.setItem("cookie_notice_seen", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-gray-800 text-white text-sm p-4 rounded-2xl shadow-lg z-50">
      <p>
        Questo sito utilizza solo cookie tecnici per garantire il corretto
        funzionamento. Nessun cookie di profilazione viene utilizzato.{" "}
        <a href="/privacy" className="underline">
          Scopri di più
        </a>
        .
      </p>
      <button
        onClick={handleClose}
        className="mt-3 bg-emerald-600 hover:bg-emerald-700 text-white py-1 px-3 rounded-lg text-xs transition"
      >
        Ok
      </button>
    </div>
  );
}
