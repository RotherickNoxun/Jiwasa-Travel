"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Compass, TreePine, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

function Counter({ from = 0, to, duration = 2, suffix = "", prefix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = from + (to - from) * ease;
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function AnimatedStats() {
  const { lang } = useLanguage();
  const statsList = TRANSLATIONS[lang].stats;

  const icons = [Compass, Sparkles, TreePine, Award];

  return (
    <div className="relative -mt-6 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-jiwasa-darkteal via-jiwasa-forest to-jiwasa-darkteal-dark text-white shadow-jiwasa border border-white/15 backdrop-blur-xl relative overflow-hidden"
      >
        {/* Ambient lighting */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-jiwasa-lime/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-jiwasa-teal/30 rounded-full blur-3xl pointer-events-none" />

        {statsList.map((item, idx) => {
          const Icon = icons[idx] || Compass;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-jiwasa-lightgray to-jiwasa-lime">
                  <Counter
                    to={item.to}
                    suffix={item.suffix}
                    prefix={item.prefix}
                    decimals={item.decimals}
                  />
                </span>
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-jiwasa-lime group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-jiwasa-lime" />
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {item.label}
                </h4>
                <p className="text-[11px] text-jiwasa-lightgray mt-1">
                  {item.sublabel}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
