"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShieldCheck, Volume2, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

const SPECIES_IMAGES: Record<string, string> = {
  mariposas: "https://images.unsplash.com/photo-1551893478-d726eaf0442c?q=80&w=1200&auto=format&fit=crop",
  abejas: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1200&auto=format&fit=crop",
  aves: "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=1200&auto=format&fit=crop",
  mamiferos: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?q=80&w=1200&auto=format&fit=crop",
};

export default function BiodiversityShowcase() {
  const [activeTab, setActiveTab] = useState<string>("mariposas");
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].biodiversity;

  const current = (t.species as Record<string, any>)[activeTab];
  const currentImage = SPECIES_IMAGES[activeTab];

  return (
    <section id="biodiversidad" className="py-24 bg-jiwasa-darkteal-dark text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-jiwasa-teal/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-jiwasa-lime/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-jiwasa-lime text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-4 h-4 text-jiwasa-lime" />
            <span>{t.badge}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-jiwasa-lightgray text-sm sm:text-base leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Tab selection */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {t.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? "text-jiwasa-darkteal"
                  : "text-jiwasa-lightgray hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeBioTab"
                  className="absolute inset-0 bg-jiwasa-lime rounded-full shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10 text-base">{tab.icon}</span>
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "_" + lang}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-jiwasa"
          >
            {/* Visual media preview (7 cols) */}
            <div className="lg:col-span-7 relative group">
              <div className="relative h-80 sm:h-96 lg:h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15">
                <Image
                  src={currentImage}
                  alt={current.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jiwasa-darkteal/90 via-transparent to-black/20" />

                {/* Status pill */}
                <span className="absolute top-4 left-4 bg-jiwasa-darkteal/85 backdrop-blur-md text-jiwasa-lime text-xs font-bold px-3 py-1.5 rounded-full border border-jiwasa-lime/30 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-jiwasa-lime" />
                  {current.status}
                </span>

                {/* Audio visualizer simulation */}
                <div
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="absolute top-4 right-4 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2 cursor-pointer transition select-none"
                  title="Habitat soundscape simulation"
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? "text-jiwasa-lime animate-bounce" : ""}`} />
                  <span className="hidden sm:inline">
                    {isPlayingAudio ? t.audioActive : t.audioInactive}
                  </span>
                  {isPlayingAudio && (
                    <div className="flex items-center gap-0.5">
                      <span className="w-1 h-3 bg-jiwasa-lime rounded-full animate-pulse" />
                      <span className="w-1 h-4 bg-jiwasa-lime rounded-full animate-pulse delay-75" />
                      <span className="w-1 h-2 bg-jiwasa-lime rounded-full animate-pulse delay-150" />
                    </div>
                  )}
                </div>

                {/* Subtitle on image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-jiwasa-lime font-mono italic">
                    {current.scientificName}
                  </p>
                  <p className="text-xs text-jiwasa-lightgray mt-1">
                    📍 {current.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Info and action side (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-jiwasa-lime">
                  {t.focusLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 leading-tight">
                  {current.name}
                </h3>
              </div>

              <p className="text-jiwasa-lightgray text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              {/* Eco Fact Highlight */}
              <div className="p-4 rounded-xl bg-white/5 border-l-4 border-jiwasa-lime text-xs sm:text-sm text-white">
                <strong className="block text-jiwasa-lime font-bold mb-1">
                  {t.ecoFactTitle}
                </strong>
                {current.ecoFact}
              </div>

              {/* Best Season */}
              <div className="flex items-center justify-between text-xs text-jiwasa-lightgray py-2 border-t border-white/10">
                <span>{t.seasonLabel}</span>
                <strong className="text-white">{current.season}</strong>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/59164030065?text=${encodeURIComponent(
                    t.whatsappMessage(current.name)
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-jiwasa-lime hover:bg-jiwasa-lime-hover text-jiwasa-darkteal font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-jiwasa transition"
                >
                  <MessageCircle className="w-4 h-4 text-jiwasa-darkteal" />
                  <span>{t.consultBtn}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
