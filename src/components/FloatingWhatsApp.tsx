"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { COMPANY_INFO } from "@/data/jiwasaData";

export default function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-jiwasa-darkteal text-xs font-semibold py-2.5 px-4 rounded-2xl shadow-jiwasa-hover border border-jiwasa-lightgray/50 animate-in fade-in slide-in-from-right duration-300">
          <span>{t.floatingWhatsApp.tooltip}</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-jiwasa-charcoal hover:text-jiwasa-darkteal p-0.5"
            aria-label={lang === "en" ? "Close suggestion" : "Cerrar sugerencia"}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing button in #6ba53a (lime) & #0c7e7e (teal) */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-jiwasa-lime hover:bg-jiwasa-lime-hover text-white shadow-jiwasa-hover transition-all transform hover:scale-110 focus:outline-none"
        aria-label={t.floatingWhatsApp.ariaLabel}
      >
        <span className="absolute -inset-1 rounded-full bg-jiwasa-lime opacity-50 animate-ping group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-white" />
      </a>
    </div>
  );
}
