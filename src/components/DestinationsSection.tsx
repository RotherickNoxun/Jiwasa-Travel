"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { BILINGUAL_DESTINATIONS } from "@/data/jiwasaData";
import { MapPin, MountainSnow, ArrowUpRight } from "lucide-react";

export default function DestinationsSection() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const destinations = BILINGUAL_DESTINATIONS[lang] || BILINGUAL_DESTINATIONS.es;

  return (
    <section id="destinos" className="py-24 bg-jiwasa-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-jiwasa-teal bg-jiwasa-lime-soft px-3 py-1 rounded-full border border-jiwasa-lime/30">
              {t.destinations.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-jiwasa-darkteal tracking-tight mt-3">
              {t.destinations.title}
            </h2>
            <p className="text-jiwasa-charcoal text-sm sm:text-base mt-2 max-w-xl">
              {t.destinations.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-jiwasa-darkteal bg-white px-3 py-1.5 rounded-full border border-jiwasa-lightgray/50 shadow-sm">
            <MountainSnow className="w-4 h-4 text-jiwasa-teal" />
            <span>{t.destinations.altitudeNote}</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative rounded-2xl overflow-hidden shadow-jiwasa bg-jiwasa-darkteal h-96 flex flex-col justify-end p-6 hover:shadow-jiwasa-hover transition-all duration-300 border border-jiwasa-lightgray/30"
            >
              {/* Background Image */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-75 group-hover:opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jiwasa-darkteal/95 via-jiwasa-forest/50 to-transparent" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="text-[11px] font-semibold bg-jiwasa-darkteal/80 backdrop-blur-md text-jiwasa-lime px-2.5 py-1 rounded-full border border-jiwasa-lime/30">
                  {dest.altitude}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-jiwasa-lime group-hover:text-jiwasa-darkteal transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 text-white">
                <div className="flex items-center gap-1 text-xs text-jiwasa-lime font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{dest.region}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-jiwasa-lime transition-colors">
                  {dest.name}
                </h3>

                <p className="text-xs text-jiwasa-lightgray line-clamp-2 leading-relaxed mb-3">
                  {dest.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/20">
                  {dest.attractions.slice(0, 2).map((att, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-black/40 text-jiwasa-lightgray px-2 py-0.5 rounded"
                    >
                      {att}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
