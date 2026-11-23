"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { COMPANY_INFO } from "@/data/jiwasaData";
import {
  MapPin,
  Phone,
  Mail,
  FileText,
} from "lucide-react";

export default function Footer() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-jiwasa-darkteal text-white pt-16 pb-8 border-t border-jiwasa-teal/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-14 w-56">
              <Image
                src="/images/logo-white.png"
                alt="Jiwasa Travel Ecoturismo Logo Blanco"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-jiwasa-lightgray text-xs sm:text-sm leading-relaxed max-w-sm">
              {COMPANY_INFO.tagline[lang]}.{" "}
              {lang === "en"
                ? "Ecotourism and mountaineering tour operator in Bolivia, committed to biodiversity conservation, regenerative travel, and sustainable local community development."
                : "Operadora de ecoturismo y montañismo en Bolivia, comprometida con la conservación de la biodiversidad, el turismo regenerativo y el desarrollo de las comunidades locales."}
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-jiwasa-lime hover:text-jiwasa-darkteal transition-colors flex items-center justify-center text-xs font-bold"
                aria-label="Facebook Jiwasa Travel"
                title="Facebook: Jiwasa Travel - Ecoturismo"
              >
                FB
              </a>
              <a
                href={COMPANY_INFO.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-jiwasa-lime hover:text-jiwasa-darkteal transition-colors flex items-center justify-center text-xs font-bold"
                aria-label="Instagram Jiwasa Travel"
                title="Instagram: @jiwasatravel"
              >
                IG
              </a>
              <a
                href={COMPANY_INFO.socials.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-jiwasa-lime hover:text-jiwasa-darkteal transition-colors flex items-center justify-center text-xs font-bold"
                aria-label="TikTok Jiwasa Travel"
                title="TikTok: @jiwasatravel"
              >
                TT
              </a>
              <a
                href={COMPANY_INFO.socials.tripadvisor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-jiwasa-lime hover:text-jiwasa-darkteal transition-colors flex items-center justify-center text-xs font-bold"
                aria-label="TripAdvisor Jiwasa Travel"
                title="TripAdvisor Jiwasa Travel"
              >
                TA
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-jiwasa-lime">
              {t.footer.exploreTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-jiwasa-lightgray">
              <li>
                <Link href="#inicio" className="hover:text-white transition">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="#experiencias" className="hover:text-white transition">
                  {t.nav.experiences}
                </Link>
              </li>
              <li>
                <Link href="#destinos" className="hover:text-white transition">
                  {t.nav.destinations}
                </Link>
              </li>
              <li>
                <Link href="#biodiversidad" className="hover:text-white transition">
                  {t.nav.biodiversity}
                </Link>
              </li>
              <li>
                <Link href="#historia" className="hover:text-white transition">
                  {t.nav.history}
                </Link>
              </li>
              <li>
                <Link href="#mision" className="hover:text-white transition">
                  {t.nav.mission}
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="hover:text-white transition">
                  {t.nav.testimonials}
                </Link>
              </li>
            </ul>
          </div>

          {/* Ecoturismo & Santuarios */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-jiwasa-lime">
              {t.footer.conservationTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-jiwasa-lightgray">
              <li>
                <Link href="#destinos" className="hover:text-white transition">
                  {t.footer.conservationLinks[0]}
                </Link>
              </li>
              <li>
                <Link href="#destinos" className="hover:text-white transition">
                  {t.footer.conservationLinks[1]}
                </Link>
              </li>
              <li>
                <Link href="#biodiversidad" className="hover:text-white transition">
                  {t.footer.conservationLinks[2]}
                </Link>
              </li>
              <li>
                <Link href="#mision" className="hover:text-white transition">
                  {t.footer.conservationLinks[3]}
                </Link>
              </li>
              <li>
                <Link href="#mision" className="hover:text-white transition">
                  {t.footer.conservationLinks[4]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-jiwasa-lime">
              {t.footer.officeTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-jiwasa-lightgray">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-jiwasa-lime shrink-0 mt-0.5" />
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {COMPANY_INFO.address}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-jiwasa-lime shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-jiwasa-lime shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="#contacto"
                  className="inline-block text-xs font-bold text-jiwasa-lime hover:underline"
                >
                  {t.footer.contactFormLink}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-jiwasa-lightgray">
          <p>
            © {new Date().getFullYear()} Jiwasa Travel – Ecoturismo. {t.footer.rights}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="hover:text-white cursor-pointer">
              {t.footer.terms}
            </span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">
              {t.footer.privacy}
            </span>
            <span>•</span>
            <Link href="#contacto" className="hover:text-white flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-jiwasa-lime" />
              {t.footer.complaintsBook}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
