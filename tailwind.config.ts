import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jiwasa: {
          // Official 6 Brand Colors extracted from PAGINA WEB JIWASA.docx
          forest: "#314b24",      // Verde Bosque Oscuro
          darkteal: "#045363",    // Azul Petróleo Profundo
          lightgray: "#c8c9c9",   // Gris Claro / Plateado
          teal: "#0c7e7e",        // Teal / Turquesa Jiwasa (Color Primario)
          charcoal: "#55595d",    // Gris Pizarra / Textos y Tipografía
          lime: "#6ba53a",        // Verde Hoja / Lima Vivo (Acento / CTA)

          // Harmonized utility tints strictly derived from the brand palette
          "darkteal-dark": "#022d36",
          "teal-hover": "#096262",
          "teal-soft": "#e7f2f2",
          "lime-hover": "#5a8c31",
          "lime-soft": "#f0f7ec",
          "forest-soft": "#ebf0e8",
          bg: "#f8faf9",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        jiwasa: "0 10px 25px -5px rgba(4, 83, 99, 0.1), 0 8px 10px -6px rgba(4, 83, 99, 0.05)",
        "jiwasa-hover": "0 20px 30px -10px rgba(4, 83, 99, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
