# Jiwasa Travel – Ecoturismo & Turismo Regenerativo en Bolivia

Plataforma web multipágina y catálogo de experiencias ecoturísticas para **Jiwasa Travel**, desarrollada con **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** y **EmailJS**, tomando como modelo comercial y arquitectónico a [Viva Cusco Perú](https://vivacuscoperu.com/).

---

## 🗺️ Arquitectura Multipágina (Rutas Independientes)

Cada sección cuenta con su propia página dedicada, optimizada para SEO con metadatos específicos, migas de pan (*breadcrumbs*), animaciones de entrada y enlaces directos, todo enlazado desde la cabecera y el portal de la página principal:

| Ruta | Página | Contenido Principal |
| :--- | :--- | :--- |
| **`/`** | **Página Principal** | Hero interactivo con slideshow *Ken Burns*, video modal, métricas animadas, portal de accesos a todas las áreas y vista previa de experiencias. |
| **`/experiencias`** | **Experiencias & Rutas** | Catálogo completo de tours con filtros dinámicos (*Santuarios*, *Mariposas*, *Trekking*, *Comunitario*), selector de grupo y modal de itinerario. |
| **`/destinos`** | **Destinos de Bolivia** | Guía de pisos ecológicos (Parque Cotapata, Santuario Senda Verde, Cordillera Real y La Paz) con perfiles de altitud. |
| **`/biodiversidad`** | **Biodiversidad & Fauna** | Explorador multimedia interactivo de mariposas de Yungas, abejas meliponas nativas, aves y mamíferos rescatados, con sonido ambiental simulado y principios éticos. |
| **`/historia`** | **Nuestra Historia** | Narrativa completa desde sus orígenes como montañistas en 2016, apoyo al Santuario Senda Verde en 2020 y consolidación en 2021. |
| **`/mision`** | **Misión & 5 Objetivos** | Filosofía institucional, misión, visión y desglose de los 5 objetivos estratégicos de desarrollo sostenible. |
| **`/testimonios`** | **Opiniones de Clientes** | Reseñas verificadas de viajeros, métricas de satisfacción y enlace directo al perfil oficial en TripAdvisor La Paz. |
| **`/contacto`** | **Contacto & Reservas** | Formulario con EmailJS, atención directa en WhatsApp, dirección en Calle Sagárnaga #380 Of. 2, Google Maps y Preguntas Frecuentes (FAQ). |

---

## 🎨 Identidad Gráfica y Paleta Oficial

Extraída del documento oficial `PÁGINA WEB JIWASA.docx`:

* **`#0c7e7e`** (*Teal Jiwasa*) – Color primario de marca, botones principales y agua.
* **`#045363`** (*Petróleo Profundo*) – Fondos contrastados, barras de navegación y cabeceras.
* **`#6ba53a`** (*Verde Hoja*) – Acentos vivos de conservación y botones destacados.
* **`#314b24`** (*Verde Bosque*) – Profundidad ecológica y selva nubosa.
* **`#55595d`** (*Gris Pizarra*) – Tipografía y subtítulos.
* **`#c8c9c9`** (*Gris Suave*) – Bordes y fondos neutros.

Logotipos en `/public/images/`:
* `logo-color.png`: Versión oficial a color para cabecera clara.
* `logo-white.png`: Versión blanca para footer oscuro.
* `palette.png`: Paleta gráfica extraída del documento.

---

## 🛠️ Tecnologías Utilizadas

* **Framework:** Next.js 14 (App Router con generación estática `SSG`)
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS con tokens corporativos `jiwasa-*`
* **Animaciones:** Framer Motion (slideshow *Ken Burns*, transiciones de pestañas `layoutId`, contadores numéricos y revelaciones en scroll)
* **Formularios:** EmailJS (`@emailjs/browser`) con fallback inmediato a WhatsApp
* **Iconos:** Lucide React

---

## ⚙️ Configuración de EmailJS

Configura tu archivo `.env.local` en la raíz del proyecto para habilitar el envío real de correos:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

*(Si no se configuran las credenciales, el formulario simula el envío y permite transferir todos los campos con un solo clic al chat de WhatsApp oficial `+591 64030065`).*

---

## 💻 Comandos

```bash
# Servidor de desarrollo
npm run dev

# Compilar todas las rutas estáticas
npm run build

# Ejecutar en producción
npm start
```
