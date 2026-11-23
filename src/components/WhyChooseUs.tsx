"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mountain, ShieldCheck, Heart, Users2, Sprout, Footprints } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function WhyChooseUs() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].whyChooseUs;

  const icons = [Mountain, Heart, Sprout, Users2, ShieldCheck, Footprints];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-wider text-jiwasa-teal bg-jiwasa-lime-soft px-3 py-1 rounded-full border border-jiwasa-lime/30"
          >
            {t.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-jiwasa-darkteal tracking-tight mt-3 mb-4"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.pillars.map((pillar, idx) => {
            const Icon = icons[idx] || Mountain;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl bg-jiwasa-bg hover:bg-jiwasa-lime-soft/40 border border-jiwasa-lightgray/50 hover:border-jiwasa-teal/40 shadow-sm hover:shadow-jiwasa transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-jiwasa-teal text-white flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-jiwasa-darkteal transition-all">
                  <Icon className="w-6 h-6 text-jiwasa-lime" />
                </div>
                <h3 className="text-lg font-bold text-jiwasa-darkteal mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-jiwasa-charcoal text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
