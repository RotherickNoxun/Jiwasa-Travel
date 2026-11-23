"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  MessageCircle,
  Play,
  TreePine,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/jiwasaData";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import VideoModal from "./VideoModal";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544979590-37e9b47eb705?q=80&w=2000&auto=format&fit=crop",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].hero;

  const slides = t.slides.map((s, idx) => ({
    ...s,
    image: HERO_IMAGES[idx],
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <section
        id="inicio"
        className="relative min-h-[92vh] flex items-center justify-center bg-jiwasa-darkteal overflow-hidden"
      >
        {/* Background Slideshow with Smooth Crossfade & Ken Burns Zoom */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].caption}
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Translucent cinematic gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-jiwasa-darkteal/80 via-black/25 to-black/30 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-jiwasa-darkteal/75 via-jiwasa-darkteal/35 to-transparent z-[1]" />
        </div>

        {/* Content with text dropshadow */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white w-full">
          <div className="max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jiwasa-darkteal/60 backdrop-blur-md border border-white/25 text-jiwasa-lime text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm"
            >
              <TreePine className="w-4 h-4 text-jiwasa-lime" />
              <span>{slides[currentSlide].tag}</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
            >
              {t.titlePrefix}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-jiwasa-lime via-emerald-200 to-white drop-shadow-sm">
                {t.titleHighlight}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-100 font-normal leading-relaxed mb-8 max-w-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
            >
              {t.subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
            >
              <Link
                href="#experiencias"
                className="inline-flex items-center justify-center gap-2.5 bg-jiwasa-lime hover:bg-jiwasa-lime-hover text-jiwasa-darkteal font-bold px-7 py-3.5 rounded-full shadow-jiwasa transition-all transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <Compass className="w-5 h-5 text-jiwasa-darkteal" />
                <span>{t.exploreBtn}</span>
              </Link>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-6 py-3.5 rounded-full transition-all text-sm sm:text-base group"
              >
                <div className="w-6 h-6 rounded-full bg-jiwasa-lime text-jiwasa-darkteal flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-jiwasa-darkteal ml-0.5" />
                </div>
                <span>{t.videoBtn}</span>
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-jiwasa-lime font-semibold text-sm py-2 px-3 transition"
              >
                <MessageCircle className="w-4 h-4 text-jiwasa-lime" />
                <span>{t.whatsappBtn}</span>
              </a>
            </motion.div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={prevSlide}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white/80 hover:text-white transition"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx
                        ? "w-8 bg-jiwasa-lime"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white/80 hover:text-white transition"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-200 font-mono ml-2">
                📍 {slides[currentSlide].caption}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors">
          <Link href="#planificador" aria-label="Scroll down">
            <ChevronDown className="w-6 h-6 animate-bounce text-jiwasa-lime" />
          </Link>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title={t.videoModalTitle}
      />
    </>
  );
}
