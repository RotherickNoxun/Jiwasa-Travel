import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Jiwasa Travel – Ecoturismo & Conservación en Bolivia | Ecotourism & Conservation",
  description:
    "Operadora de ecoturismo, senderismo y turismo regenerativo en Bolivia. Ecotourism, wildlife conservation, Senda Verde Sanctuary, and trekking in Bolivia.",
  keywords: [
    "Jiwasa Travel",
    "Ecoturismo Bolivia",
    "Bolivia Ecotourism",
    "Senda Verde",
    "Parque Nacional Cotapata",
    "Trekking Bolivia",
    "Turismo Regenerativo",
    "La Paz Bolivia Turismo",
    "Calle Sagárnaga",
    "Birdwatching Bolivia",
    "Montañismo Bolivia",
  ],
  authors: [{ name: "Jiwasa Travel – Ecoturismo" }],
  openGraph: {
    title: "Jiwasa Travel – Ecoturismo & Conservación en Bolivia",
    description:
      "Un camino de aventura, descubrimiento y compromiso con la vida silvestre. Descubre Bolivia con guías montañistas certificados.",
    url: "https://jiwasatravel.com",
    siteName: "Jiwasa Travel",
    locale: "es_BO",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#045363",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased selection:bg-jiwasa-lime selection:text-jiwasa-darkteal">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
