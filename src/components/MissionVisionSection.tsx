"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { BILINGUAL_MISSION, BILINGUAL_VISION, BILINGUAL_OBJECTIVES } from "@/data/jiwasaData";
import { Target, Eye, Compass, Leaf, Sparkles, Users, ShieldCheck } from "lucide-react";

export default function MissionVisionSection() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];

  const missionText = BILINGUAL_MISSION[lang] || BILINGUAL_MISSION.es;
  const visionText = BILINGUAL_VISION[lang] || BILINGUAL_VISION.es;
  const objectives = BILINGUAL_OBJECTIVES[lang] || BILINGUAL_OBJECTIVES.es;

  const iconMap: Record<string, React.ElementType> = {
    compass: Compass,
    leaf: Leaf,
    sparkles: Sparkles,
    users: Users,
    "shield-check": ShieldCheck,
  };

  return (
    <section id="mision" className="py-24 bg-jiwasa-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-jiwasa-teal bg-jiwasa-lime-soft px-3 py-1 rounded-full border border-jiwasa-lime/30">
            {t.mission.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-jiwasa-darkteal tracking-tight mt-3 mb-4">
            {t.mission.title}
          </h2>
          <p className="text-jiwasa-charcoal text-base sm:text-lg">
            {t.mission.subtitle}
          </p>
        </div>

        {/* Mission and Vision 2-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-jiwasa-darkteal to-jiwasa-teal text-white shadow-jiwasa overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-36 h-36" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-jiwasa-lime text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                <Target className="w-4 h-4" />
                {t.mission.missionBadge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {t.mission.missionTitle}
              </h3>
              <p className="text-jiwasa-lightgray text-sm sm:text-base leading-relaxed">
                {missionText}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-jiwasa-forest to-jiwasa-darkteal text-white shadow-jiwasa overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Eye className="w-36 h-36" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-jiwasa-lime text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                <Eye className="w-4 h-4" />
                {t.mission.visionBadge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {t.mission.visionTitle}
              </h3>
              <p className="text-jiwasa-lightgray text-sm sm:text-base leading-relaxed">
                {visionText}
              </p>
            </div>
          </div>
        </div>

        {/* 5 Objectives Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-jiwasa-darkteal">
            {t.mission.objectivesTitle}
          </h3>
          <p className="text-jiwasa-charcoal text-sm mt-1">
            {t.mission.objectivesSubtitle}
          </p>
        </div>

        {/* 5 Objectives Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, idx) => {
            const Icon = iconMap[obj.icon] || Compass;
            return (
              <div
                key={idx}
                className="bg-white border border-jiwasa-lightgray/50 rounded-2xl p-7 hover:shadow-jiwasa transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-jiwasa-lime-soft text-jiwasa-forest group-hover:bg-jiwasa-teal group-hover:text-white transition flex items-center justify-center shrink-0 border border-jiwasa-lime/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-jiwasa-teal uppercase tracking-wider bg-jiwasa-teal-soft px-2.5 py-0.5 rounded-full">
                    {lang === "en" ? `Objective ${idx + 1}` : `Objetivo ${idx + 1}`}
                  </span>
                </div>
                <h4 className="font-bold text-jiwasa-darkteal text-base mb-2 group-hover:text-jiwasa-teal transition">
                  {obj.title}
                </h4>
                <p className="text-jiwasa-charcoal text-xs sm:text-sm leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
