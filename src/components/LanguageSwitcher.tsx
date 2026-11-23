"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  variant?: "topbar" | "header" | "mobile";
}

export default function LanguageSwitcher({ variant = "header" }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();

  if (variant === "topbar") {
    return (
      <div className="flex items-center gap-1 bg-white/10 rounded-full p-0.5 border border-white/15 text-[11px] font-semibold">
        <button
          onClick={() => setLang("es")}
          className={`px-2 py-0.5 rounded-full transition-all ${
            lang === "es"
              ? "bg-jiwasa-lime text-jiwasa-darkteal font-bold shadow-sm"
              : "text-white/80 hover:text-white"
          }`}
          aria-label="Cambiar a Español"
        >
          ES
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-2 py-0.5 rounded-full transition-all ${
            lang === "en"
              ? "bg-jiwasa-lime text-jiwasa-darkteal font-bold shadow-sm"
              : "text-white/80 hover:text-white"
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 bg-jiwasa-bg border border-jiwasa-lightgray/70 rounded-full p-1 text-xs font-semibold">
      <Globe className="w-3.5 h-3.5 text-jiwasa-teal ml-1 shrink-0" />
      <button
        onClick={() => setLang("es")}
        className={`px-2.5 py-1 rounded-full transition-all ${
          lang === "es"
            ? "bg-jiwasa-teal text-white shadow-sm font-bold"
            : "text-jiwasa-charcoal hover:text-jiwasa-darkteal"
        }`}
      >
        Español
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-full transition-all ${
          lang === "en"
            ? "bg-jiwasa-teal text-white shadow-sm font-bold"
            : "text-jiwasa-charcoal hover:text-jiwasa-darkteal"
        }`}
      >
        English
      </button>
    </div>
  );
}
