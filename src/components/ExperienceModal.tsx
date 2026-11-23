"use client";

import React from "react";
import Image from "next/image";
import { X, Clock, MapPin, CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";
import { Experience } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].experiences.modal;

  if (!experience) return null;

  const handleBooking = () => {
    const text = t.whatsappMessage(experience.title);
    window.open(`https://wa.me/59164030065?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-jiwasa-darkteal-dark/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-jiwasa-lightgray/50">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-jiwasa-darkteal shadow transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative h-64 sm:h-72 w-full">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jiwasa-darkteal/95 via-jiwasa-darkteal/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-jiwasa-lime text-jiwasa-darkteal mb-2">
              {experience.difficulty}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight">
              {experience.title}
            </h3>
            <p className="text-xs sm:text-sm text-jiwasa-lightgray font-light mt-1">
              {experience.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata bar */}
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-jiwasa-lightgray/40 text-sm">
            <div className="flex items-center gap-2 text-jiwasa-charcoal">
              <Clock className="w-4 h-4 text-jiwasa-teal" />
              <span><strong>{t.duration}:</strong> {experience.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-jiwasa-charcoal">
              <MapPin className="w-4 h-4 text-jiwasa-teal" />
              <span><strong>{t.location}:</strong> {experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-jiwasa-teal mb-2">
              {t.descTitle}
            </h4>
            <p className="text-jiwasa-charcoal text-sm sm:text-base leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-jiwasa-teal mb-2">
              {t.highlightsTitle}
            </h4>
            <ul className="space-y-2">
              {experience.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-jiwasa-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-jiwasa-lime shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's included */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-jiwasa-teal mb-2">
              {t.includesTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {experience.includes.map((inc, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-jiwasa-charcoal bg-jiwasa-bg p-2.5 rounded-xl border border-jiwasa-lightgray/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-jiwasa-teal shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-jiwasa-lightgray/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-jiwasa-charcoal">
              <AlertCircle className="w-4 h-4 text-jiwasa-teal shrink-0" />
              <span>{t.groupNote}</span>
            </div>

            <button
              onClick={handleBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-jiwasa-teal hover:bg-jiwasa-darkteal text-white font-bold px-6 py-3 rounded-full shadow hover:shadow-lg transition text-sm"
            >
              <MessageCircle className="w-4 h-4 text-jiwasa-lime" />
              <span>{t.requestInfoBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
