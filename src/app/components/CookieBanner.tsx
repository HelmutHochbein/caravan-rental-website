"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("camperio-cookies");
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (level: "accepted" | "essential") => {
    localStorage.setItem("camperio-cookies", level);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-[slideUp_0.4s_ease-out]">
      <div className="max-w-4xl mx-auto bg-charcoal text-white rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="flex-1">
            <p className="font-semibold text-lg mb-1">Cookie-Hinweis</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Diese Website verwendet Cookies für die Kartendarstellung (Google
              Maps). Weitere Tracking- oder Marketing-Cookies werden nicht
              eingesetzt.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => accept("essential")}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white/80 border border-white/20 hover:border-white/40 transition-colors"
            >
              Nur notwendige
            </button>
            <button
              onClick={() => accept("accepted")}
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-accent hover:bg-accent-hover text-white transition-colors"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
