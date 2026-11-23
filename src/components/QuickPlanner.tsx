"use client";

import React, { useState } from "react";
import { MapPin, Calendar, Compass, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function QuickPlanner() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].planner;

  const [destination, setDestination] = useState(t.destinations[0].label);
  const [category, setCategory] = useState(t.types[0].label);
  const [travelers, setTravelers] = useState(t.groups[1].label);

  const handleConsult = (e: React.FormEvent) => {
    e.preventDefault();
    const message = t.whatsappTemplate(destination, category, travelers);
    window.open(`https://wa.me/59164030065?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="planificador" className="relative -mt-10 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-jiwasa border border-jiwasa-lightgray/50 p-5 sm:p-7">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-3 border-b border-jiwasa-lightgray/40">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-jiwasa-teal">
              {t.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-jiwasa-darkteal">
              {t.title}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-jiwasa-charcoal">
            {t.subtitle}
          </p>
        </div>

        <form onSubmit={handleConsult} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          {/* Destination */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-jiwasa-charcoal flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-jiwasa-teal" />
              {t.destinationLabel}
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-jiwasa-bg border border-jiwasa-lightgray/80 rounded-lg px-3.5 py-2.5 text-sm font-medium text-jiwasa-charcoal focus:outline-none focus:ring-2 focus:ring-jiwasa-teal/30 focus:border-jiwasa-teal transition"
            >
              {t.destinations.map((d) => (
                <option key={d.value} value={d.label}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          {/* Type of Experience */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-jiwasa-charcoal flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-jiwasa-teal" />
              {t.typeLabel}
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-jiwasa-bg border border-jiwasa-lightgray/80 rounded-lg px-3.5 py-2.5 text-sm font-medium text-jiwasa-charcoal focus:outline-none focus:ring-2 focus:ring-jiwasa-teal/30 focus:border-jiwasa-teal transition"
            >
              {t.types.map((tp) => (
                <option key={tp.value} value={tp.label}>
                  {tp.label}
                </option>
              ))}
            </select>
          </div>

          {/* Group size */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-jiwasa-charcoal flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-jiwasa-teal" />
              {t.groupLabel}
            </label>
            <select
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full bg-jiwasa-bg border border-jiwasa-lightgray/80 rounded-lg px-3.5 py-2.5 text-sm font-medium text-jiwasa-charcoal focus:outline-none focus:ring-2 focus:ring-jiwasa-teal/30 focus:border-jiwasa-teal transition"
            >
              {t.groups.map((g) => (
                <option key={g.value} value={g.label}>
                  {g.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-jiwasa-teal hover:bg-jiwasa-darkteal text-white font-bold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all text-sm h-[42px]"
            >
              <Send className="w-4 h-4 text-jiwasa-lime" />
              <span>{t.submitBtn}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
