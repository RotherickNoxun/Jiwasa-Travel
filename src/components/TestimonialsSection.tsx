"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { BILINGUAL_TESTIMONIALS, COMPANY_INFO } from "@/data/jiwasaData";
import { Star, Quote, ExternalLink, Award } from "lucide-react";

export default function TestimonialsSection() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const testimonials = BILINGUAL_TESTIMONIALS[lang] || BILINGUAL_TESTIMONIALS.es;

  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-jiwasa-lime-soft border border-jiwasa-lime/30 text-jiwasa-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-jiwasa-lime" />
            {t.testimonials.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-jiwasa-darkteal tracking-tight mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-jiwasa-charcoal text-base sm:text-lg">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-jiwasa-bg border border-jiwasa-lightgray/50 rounded-2xl p-8 flex flex-col justify-between hover:shadow-jiwasa transition-all"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-8 h-8 text-jiwasa-teal/20 mb-2" />
                <p className="text-jiwasa-charcoal text-sm sm:text-base leading-relaxed italic mb-6">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-jiwasa-lightgray/40 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-jiwasa-darkteal text-sm">
                    {item.author}
                  </h4>
                  <p className="text-xs text-jiwasa-charcoal">
                    {item.country} • {item.experience}
                  </p>
                </div>
                <span className="text-[11px] text-jiwasa-charcoal/70 font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TripAdvisor Banner Callout */}
        <div className="bg-gradient-to-r from-jiwasa-darkteal to-jiwasa-teal rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-jiwasa">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/20">
              <Award className="w-8 h-8 text-jiwasa-lime" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                {t.testimonials.tripadvisorTitle}
              </h3>
              <p className="text-xs sm:text-sm text-jiwasa-lightgray mt-1">
                {t.testimonials.tripadvisorSubtitle}
              </p>
            </div>
          </div>

          <a
            href={COMPANY_INFO.socials.tripadvisor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-jiwasa-lime hover:bg-jiwasa-lime-hover text-jiwasa-darkteal font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition whitespace-nowrap"
          >
            <span>{t.testimonials.tripadvisorBtn}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
