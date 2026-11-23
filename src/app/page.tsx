import React from "react";
import Hero from "@/components/Hero";
import AnimatedStats from "@/components/AnimatedStats";
import QuickPlanner from "@/components/QuickPlanner";
import ExperiencesSection from "@/components/ExperiencesSection";
import BiodiversityShowcase from "@/components/BiodiversityShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import DestinationsSection from "@/components/DestinationsSection";
import HistorySection from "@/components/HistorySection";
import MissionVisionSection from "@/components/MissionVisionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Cinemático con Video Modal & Ken Burns */}
      <Hero />

      {/* 2. Métricas Animadas (Contador al hacer scroll) */}
      <AnimatedStats />

      {/* 3. Planificador Rápido de Viajes */}
      <QuickPlanner />

      {/* 4. Catálogo de Experiencias Ecoturísticas con Filtros */}
      <ExperiencesSection />

      {/* 5. Explorador Interactivo de Biodiversidad (Mariposas, Abejas, Aves, Fauna) */}
      <BiodiversityShowcase />

      {/* 6. Pilares Diferenciales (¿Por qué viajar con Jiwasa?) */}
      <WhyChooseUs />

      {/* 7. Destinos Principales de Bolivia */}
      <DestinationsSection />

      {/* 8. Nuestra Historia Completa (2016 - Presente) */}
      <HistorySection />

      {/* 9. Misión, Visión y los 5 Objetivos Estratégicos */}
      <MissionVisionSection />

      {/* 10. Testimonios & Reseñas de TripAdvisor */}
      <TestimonialsSection />

      {/* 11. Preguntas Frecuentes (Acordeón Interactivo) */}
      <FaqSection />

      {/* 12. Formulario de Contacto (EmailJS) & WhatsApp */}
      <ContactSection />
    </main>
  );
}
