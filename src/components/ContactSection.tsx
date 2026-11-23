"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { COMPANY_INFO, BILINGUAL_EXPERIENCES } from "@/data/jiwasaData";
import { ContactFormData } from "@/types";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang];
  const experiences = BILINGUAL_EXPERIENCES[lang] || BILINGUAL_EXPERIENCES.es;

  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    experienceInterest: experiences[0]?.title || "Santuario Senda Verde & Vida Silvestre",
    travelDate: "",
    groupSize: "1 - 2 personas",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_jiwasa";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_jiwasa";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_jiwasa";

    try {
      const hasRealKeys =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (hasRealKeys && formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setStatus("success");
      setFeedbackMessage(t.contact.successMessage);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experienceInterest: experiences[0]?.title || "Santuario Senda Verde & Vida Silvestre",
        travelDate: "",
        groupSize: "1 - 2 personas",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setFeedbackMessage(t.contact.errorMessage);
    }
  };

  const sendDirectWhatsApp = () => {
    const text = t.contact.whatsappTemplate(
      formData.fullName,
      formData.email,
      formData.experienceInterest,
      formData.travelDate,
      formData.groupSize,
      formData.message
    );
    window.open(`https://wa.me/59164030065?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-jiwasa-teal bg-jiwasa-lime-soft px-3 py-1 rounded-full border border-jiwasa-lime/30">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-jiwasa-darkteal tracking-tight mt-3 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-jiwasa-charcoal text-base sm:text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Card */}
            <div className="bg-jiwasa-forest-soft/30 rounded-2xl p-7 border border-jiwasa-lightgray/50 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-jiwasa-darkteal flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-jiwasa-lime" />
                {t.contact.infoTitle}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white text-jiwasa-teal flex items-center justify-center shrink-0 shadow-sm border border-jiwasa-lightgray/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-jiwasa-charcoal uppercase tracking-wider">
                    {t.contact.officeTitle}
                  </h4>
                  <p className="text-sm font-semibold text-jiwasa-darkteal mt-0.5">
                    {COMPANY_INFO.address}
                  </p>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-jiwasa-teal hover:text-jiwasa-darkteal font-bold mt-1"
                  >
                    <span>{t.contact.mapsLink}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white text-jiwasa-teal flex items-center justify-center shrink-0 shadow-sm border border-jiwasa-lightgray/40">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-jiwasa-charcoal uppercase tracking-wider">
                    {t.contact.phoneTitle}
                  </h4>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-sm font-semibold text-jiwasa-darkteal hover:text-jiwasa-teal block mt-0.5"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-jiwasa-charcoal">{t.contact.phoneSubtitle}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white text-jiwasa-teal flex items-center justify-center shrink-0 shadow-sm border border-jiwasa-lightgray/40">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-jiwasa-charcoal uppercase tracking-wider">
                    {t.contact.emailTitle}
                  </h4>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-jiwasa-darkteal hover:text-jiwasa-teal block mt-0.5"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-jiwasa-charcoal">{t.contact.emailSubtitle}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-jiwasa-lightgray/40">
                <div className="w-10 h-10 rounded-xl bg-white text-jiwasa-teal flex items-center justify-center shrink-0 shadow-sm border border-jiwasa-lightgray/40">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-jiwasa-charcoal uppercase tracking-wider">
                    {t.contact.hoursTitle}
                  </h4>
                  <p className="text-xs text-jiwasa-darkteal font-semibold mt-0.5">
                    {t.contact.hoursWeek}
                  </p>
                  <p className="text-xs text-jiwasa-charcoal">
                    {t.contact.hoursSun}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Box in #314b24 & #045363 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-jiwasa-forest to-jiwasa-darkteal text-white shadow-jiwasa flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-base flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-jiwasa-lime" />
                  {t.contact.immediateTitle}
                </h4>
                <p className="text-xs text-jiwasa-lightgray mt-1">
                  {t.contact.immediateSubtitle}
                </p>
              </div>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-jiwasa-lime hover:bg-jiwasa-lime-hover text-jiwasa-darkteal px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap shadow transition"
              >
                {t.contact.openChatBtn}
              </a>
            </div>
          </div>

          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-jiwasa-lightgray/50 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-jiwasa-darkteal mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-jiwasa-charcoal mb-6">
              {t.contact.formSubtitle}
            </p>

            {/* Notification messages */}
            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-jiwasa-lime-soft border border-jiwasa-lime/40 text-jiwasa-forest flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jiwasa-lime shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-bold">{t.contact.successTitle}</p>
                  <p>{feedbackMessage}</p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-bold">{t.contact.errorTitle}</p>
                  <p>{feedbackMessage}</p>
                  <button
                    onClick={sendDirectWhatsApp}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold bg-jiwasa-lime text-jiwasa-darkteal px-3 py-1.5 rounded-lg"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    {t.contact.sendWhatsappDirectDataBtn}
                  </button>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name */}
                <div>
                  <label className="block text-xs font-bold text-jiwasa-charcoal uppercase tracking-wider mb-1">
                    {t.contact.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t.contact.fullNamePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-jiwasa-bg border border-jiwasa-lightgray/80 rounded-lg text-sm text-jiwasa-charcoal focus:outline-none focus:ring-2 focus:ring-jiwasa-teal/30 focus:border-jiwasa-teal transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-jiwasa-charcoal uppercase tracking-wider mb-1">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 bg-jiwasa-bg border border-jiwasa-lightgray/80 rounded-lg text-sm text-jiwasa-charcoal focus:outline-none focus:ring-2 focus:ring-jiwasa-teal/30 focus:border-jiwasa-teal transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-jiwasa-charcoal uppercase tracking-wider mb-1">
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-jiwasa-bg border border-jiwasa-lightgray/80 rounded-lg text-sm text-jiwasa-charcoal focus:outline-none focus:ring-2 focus:ring-jiwasa-teal/30 focus:border-jiwasa-teal transition"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-xs font-bold text-jiwasa-charcoal uppercase tracking-wider mb-1">
                    {t.contact.experienceLabel}
                  </label>
                  <select
                    name="experienceInterest"
                    value={formData.experienceInterest}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-jiwasa-bg border border-jiwasa-lightgray/80 rounded-lg text-sm text-jiwasa-charcoal focus:outline-none focus:ring-2 focus:ring-jiwasa-teal/30 focus:border-jiwasa-teal transition"
                  >
                    {experiences.map((exp) => (
                      <option key={exp.id} value={exp.title}>
                        {exp.title}
                      </option>
                    ))}
                    <option value={t.contact.customExpOption}>{t.contact.customExpOption}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs font-bold text-jiwasa-charcoal uppercase tracking-wider mb-1">
                    {t.contact.dateLabel}
                  </label>
                  <input
                    type="text"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    placeholder={t.contact.datePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-jiwasa-bg border border-jiwasa-lightgray/80 rounded-lg text-sm text-jiwasa-charcoal focus:outline-none focus:ring-2 focus:ring-jiwasa-teal/30 focus:border-jiwasa-teal transition"
                  />
                </div>

                {/* Travelers */}
                <div>
                  <label className="block text-xs font-bold text-jiwasa-charcoal uppercase tracking-wider mb-1">
                    {t.contact.travelersLabel}
                  </label>
                  <select
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-jiwasa-bg border border-jiwasa-lightgray/80 rounded-lg text-sm text-jiwasa-charcoal focus:outline-none focus:ring-2 focus:ring-jiwasa-teal/30 focus:border-jiwasa-teal transition"
                  >
                    {t.contact.travelerOptions.map((opt, i) => (
                      <option key={i} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-jiwasa-charcoal uppercase tracking-wider mb-1">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3.5 py-2.5 bg-jiwasa-bg border border-jiwasa-lightgray/80 rounded-lg text-sm text-jiwasa-charcoal focus:outline-none focus:ring-2 focus:ring-jiwasa-teal/30 focus:border-jiwasa-teal transition resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-jiwasa-teal hover:bg-jiwasa-darkteal disabled:bg-jiwasa-lightgray text-white font-bold py-3 px-6 rounded-lg shadow-sm hover:shadow transition text-sm"
                >
                  {status === "loading" ? (
                    <span>{t.contact.submittingBtn}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-jiwasa-lime" />
                      <span>{t.contact.submitBtn}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={sendDirectWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-jiwasa-lime-soft hover:bg-jiwasa-lime text-jiwasa-forest hover:text-white border border-jiwasa-lime/40 font-bold py-3 px-5 rounded-lg transition text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-jiwasa-forest" />
                  <span>{t.contact.whatsappFallbackBtn}</span>
                </button>
              </div>

              <p className="text-[11px] text-jiwasa-charcoal text-center mt-2">
                {t.contact.privacyNotice}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
