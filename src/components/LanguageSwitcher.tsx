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
      <div className="inline-flex items-center bg-white/10 rounded-full p-0.5 border border-white/15 text-[11px]">
        <button
          onClick={() => setLang("es")}
          className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
            lang === "es"
              ? "bg-jiwasa-lime text-jiwasa-darkteal font-bold shadow-xs"
              : "text-white/80 hover:text-white"
          }`}
          aria-label="Cambiar a Español"
        >
          ES
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
            lang === "en"
              ? "bg-jiwasa-lime text-jiwasa-darkteal font-bold shadow-xs"
              : "text-white/80 hover:text-white"
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
      </div>
    );
  }

  // Modern, sleek segmented pill for Header and Mobile
  return (
    <div className="inline-flex items-center bg-slate-100/90 hover:bg-slate-100 rounded-full p-0.5 border border-slate-200/90 transition-all shadow-xs">
      <div className="pl-1.5 pr-0.5 text-jiwasa-teal" title={lang === "es" ? "Idioma" : "Language"}>
        <Globe className="w-3.5 h-3.5" />
      </div>
      <div className="flex items-center gap-0.5">
        <button
          onClick={() => setLang("es")}
          className={`px-2 py-1 rounded-full text-xs transition-all duration-200 select-none ${
            lang === "es"
              ? "bg-white text-jiwasa-darkteal font-bold shadow-sm"
              : "text-slate-500 hover:text-jiwasa-darkteal font-medium"
          }`}
          aria-label="Español"
        >
          ES
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-2 py-1 rounded-full text-xs transition-all duration-200 select-none ${
            lang === "en"
              ? "bg-white text-jiwasa-darkteal font-bold shadow-sm"
              : "text-slate-500 hover:text-jiwasa-darkteal font-medium"
          }`}
          aria-label="English"
        >
          EN
        </button>
      </div>
    </div>
  );
}
