"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { BILINGUAL_HISTORY } from "@/data/jiwasaData";
import { Calendar, Compass, HeartHandshake, Sparkles } from "lucide-react";

export default function HistorySection() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const historyParagraphs = BILINGUAL_HISTORY[lang] || BILINGUAL_HISTORY.es;

  const milestoneIcons = [Compass, HeartHandshake, Calendar, Sparkles];

  return (
    <section id="historia" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-wider text-jiwasa-teal bg-jiwasa-lime-soft px-3 py-1 rounded-full border border-jiwasa-lime/30"
          >
            {t.history.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-jiwasa-darkteal tracking-tight mt-3 mb-4"
          >
            {t.history.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-jiwasa-charcoal text-base sm:text-lg"
          >
            {t.history.subtitle}
          </motion.p>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Text narrative from docx */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 text-jiwasa-charcoal leading-relaxed text-sm sm:text-base"
          >
            <p className="font-semibold text-jiwasa-darkteal text-base sm:text-lg border-l-4 border-jiwasa-lime pl-4">
              {historyParagraphs[0]}
            </p>
            <p>{historyParagraphs[1]}</p>
            <p>{historyParagraphs[2]}</p>
            <p>{historyParagraphs[3]}</p>
            <p className="bg-jiwasa-bg p-5 rounded-xl border border-jiwasa-lightgray/50 shadow-sm text-jiwasa-darkteal italic font-medium">
              &quot;{historyParagraphs[4]}&quot;
            </p>
          </motion.div>

          {/* Visual Showcase with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-jiwasa border-4 border-white group">
              <Image
                src="https://images.unsplash.com/photo-1544979590-37e9b47eb705?q=80&w=1000&auto=format&fit=crop"
                alt="Fauna silvestre y biodiversidad de Bolivia"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jiwasa-darkteal/95 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-jiwasa-lime font-bold">
                  {t.history.cardBadge}
                </span>
                <h4 className="text-xl font-bold mt-1">
                  {t.history.cardTitle}
                </h4>
                <p className="text-xs text-jiwasa-lightgray mt-1">
                  {t.history.cardSubtitle}
                </p>
              </div>
            </div>

            {/* Small decorative floating card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-jiwasa border border-jiwasa-lightgray/50 hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-jiwasa-teal text-white flex items-center justify-center font-bold text-sm">
                8+
              </div>
              <div className="text-xs">
                <p className="font-bold text-jiwasa-darkteal">{t.history.yearsBadge}</p>
                <p className="text-jiwasa-charcoal">{t.history.yearsSubtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-jiwasa-lightgray/40">
          {t.history.milestones.map((m, idx) => {
            const Icon = milestoneIcons[idx] || Sparkles;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-jiwasa-bg p-6 rounded-xl border border-jiwasa-lightgray/50 shadow-sm hover:shadow-jiwasa transition group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-jiwasa-teal group-hover:text-jiwasa-lime transition-colors">
                    {m.year}
                  </span>
                  <div className="p-2 rounded-lg bg-jiwasa-lime-soft text-jiwasa-forest group-hover:bg-jiwasa-teal group-hover:text-white transition">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-bold text-jiwasa-darkteal mb-1.5 text-sm">
                  {m.title}
                </h4>
                <p className="text-jiwasa-charcoal text-xs leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
