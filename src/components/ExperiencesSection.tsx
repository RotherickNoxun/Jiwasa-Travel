"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, ArrowRight, Sparkles, MessageCircle, Shield } from "lucide-react";
import { BILINGUAL_EXPERIENCES } from "@/data/jiwasaData";
import { Experience } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import ExperienceModal from "./ExperienceModal";

export default function ExperiencesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].experiences;

  const experiencesList = BILINGUAL_EXPERIENCES[lang];

  const filteredExperiences =
    activeCategory === "all"
      ? experiencesList
      : experiencesList.filter((exp) => exp.category === activeCategory);

  return (
    <section id="experiencias" className="py-24 bg-jiwasa-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-jiwasa-lime-soft text-jiwasa-forest border border-jiwasa-lime/30 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-jiwasa-lime" />
            {t.badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-jiwasa-darkteal tracking-tight mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-jiwasa-charcoal text-base sm:text-lg"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {t.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "text-white"
                  : "text-jiwasa-charcoal hover:text-jiwasa-darkteal bg-white hover:bg-jiwasa-lime-soft border border-jiwasa-lightgray/60"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeFilterTab"
                  className="absolute inset-0 bg-jiwasa-teal rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Animated Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredExperiences.map((exp) => (
              <motion.div
                layout
                key={exp.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-jiwasa hover:shadow-jiwasa-hover transition-all duration-300 flex flex-col group border border-jiwasa-lightgray/50"
              >
                {/* Card Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jiwasa-darkteal/80 via-transparent to-black/20" />

                  {/* Difficulty tag */}
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-jiwasa-forest text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1 border border-jiwasa-lime/30">
                    <Shield className="w-3 h-3 text-jiwasa-lime" />
                    {exp.difficulty}
                  </span>

                  {/* Duration */}
                  <span className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-medium bg-jiwasa-darkteal/85 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-jiwasa-lime" />
                    {exp.duration}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-jiwasa-teal font-semibold mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-jiwasa-darkteal group-hover:text-jiwasa-teal transition-colors mb-2 leading-snug">
                      {exp.title}
                    </h3>

                    <p className="text-jiwasa-charcoal text-sm line-clamp-3 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-jiwasa-lightgray/40 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedExperience(exp)}
                      className="inline-flex items-center gap-1.5 text-jiwasa-teal hover:text-jiwasa-darkteal text-xs sm:text-sm font-bold transition group-hover:translate-x-1 duration-200"
                    >
                      <span>{t.viewItinerary}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`https://wa.me/59164030065?text=${encodeURIComponent(
                        t.modal.whatsappMessage(exp.title)
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-jiwasa-lime-soft text-jiwasa-forest hover:bg-jiwasa-lime hover:text-white transition shadow-sm"
                      title={t.consultWhatsApp}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
}
