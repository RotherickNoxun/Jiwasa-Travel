"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, Compass } from "lucide-react";
import { COMPANY_INFO } from "@/data/jiwasaData";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#inicio" },
    { name: t.nav.experiences, href: "#experiencias" },
    { name: t.nav.destinations, href: "#destinos" },
    { name: t.nav.biodiversity, href: "#biodiversidad" },
    { name: t.nav.history, href: "#historia" },
    { name: t.nav.mission, href: "#mision" },
    { name: t.nav.testimonials, href: "#testimonios" },
    { name: t.nav.contact, href: "#contacto" },
  ];

  return (
    <>
      {/* Top quick contact bar */}
      <div className="bg-jiwasa-darkteal text-white text-xs py-2 px-4 border-b border-jiwasa-teal/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-jiwasa-lime font-medium">
              <span className="w-2 h-2 rounded-full bg-jiwasa-lime animate-pulse" />
              {t.topbar.tagline}
            </span>
            <span className="hidden md:inline text-white/50">|</span>
            <span className="hidden md:inline text-white/80">
              {t.topbar.address}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher variant="topbar" />
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="hover:text-jiwasa-lime transition-colors hidden sm:flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-jiwasa-lime" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-jiwasa-lime/20 hover:bg-jiwasa-lime hover:text-jiwasa-darkteal text-jiwasa-lime font-semibold px-2.5 py-0.5 rounded transition-all flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t.topbar.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#inicio" className="flex items-center gap-3 group">
              <div className="relative h-12 w-44 sm:h-14 sm:w-52">
                <Image
                  src="/images/logo-color.png"
                  alt="Jiwasa Travel Ecoturismo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-jiwasa-charcoal hover:text-jiwasa-teal tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-jiwasa-teal hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Language Switcher & CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher variant="header" />
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 bg-jiwasa-teal hover:bg-jiwasa-darkteal text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
              >
                <Compass className="w-4 h-4 text-jiwasa-lime" />
                <span>{t.nav.cta}</span>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className="xl:hidden flex items-center gap-2">
              <LanguageSwitcher variant="header" />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-jiwasa-charcoal hover:text-jiwasa-teal focus:outline-none"
                aria-label="Abrir menú de navegación"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg text-sm font-medium text-slate-700 hover:text-jiwasa-teal hover:bg-jiwasa-lime-soft/40 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-jiwasa-teal text-white py-2.5 rounded-lg font-semibold text-sm"
                >
                  <Compass className="w-4 h-4 text-jiwasa-lime" />
                  {t.nav.planCustom}
                </Link>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-jiwasa-lime-soft text-jiwasa-forest border border-jiwasa-lime/30 py-2.5 rounded-lg font-semibold text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-jiwasa-lime" />
                  {t.topbar.whatsapp}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
