"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { BILINGUAL_FAQS } from "@/data/jiwasaData";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const faqs = BILINGUAL_FAQS[lang] || BILINGUAL_FAQS.es;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-jiwasa-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-jiwasa-teal bg-jiwasa-lime-soft px-3 py-1 rounded-full border border-jiwasa-lime/30">
            {t.faq.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-jiwasa-darkteal tracking-tight mt-3 mb-4">
            {t.faq.title}
          </h2>
          <p className="text-jiwasa-charcoal text-sm sm:text-base">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-jiwasa-lightgray/50 overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none hover:bg-jiwasa-forest-soft/30 transition"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-jiwasa-teal shrink-0" />
                    <span className="font-bold text-jiwasa-darkteal text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-jiwasa-charcoal transition-transform duration-300 shrink-0 ${
                      isOpen ? "transform rotate-180 text-jiwasa-teal" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-jiwasa-charcoal text-sm sm:text-base leading-relaxed border-t border-jiwasa-lightgray/30 bg-jiwasa-bg/50">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-3 text-[11px] font-semibold text-jiwasa-forest uppercase tracking-wider bg-jiwasa-lime-soft px-2.5 py-0.5 rounded-full border border-jiwasa-lime/30">
                      {t.faq.categoryLabel}: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
