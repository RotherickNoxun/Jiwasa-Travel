export const TRANSLATIONS = {
  es: {
    topbar: {
      tagline: "Ecoturismo & Turismo Regenerativo en Bolivia",
      address: "Sede La Paz: Calle Sagárnaga #380 Of. 2",
      whatsapp: "WhatsApp Directo",
    },
    nav: {
      home: "Inicio",
      experiences: "Experiencias",
      destinations: "Destinos",
      biodiversity: "Biodiversidad",
      history: "Historia",
      mission: "Misión & Objetivos",
      testimonials: "Testimonios",
      contact: "Contacto",
      cta: "Arma tu Viaje",
      planCustom: "Planear Viaje Personalizado",
    },
    hero: {
      tag: "Operadora de Ecoturismo & Conservación • Desde 2016",
      titlePrefix: "Descubre Bolivia con un",
      titleHighlight: "propósito vivo",
      subtitle:
        "Un camino de aventura, descubrimiento y compromiso con la vida silvestre. Conectamos a los viajeros con la biodiversidad mediante la observación ética, el turismo regenerativo y el liderazgo en montaña.",
      exploreBtn: "Explorar Experiencias",
      videoBtn: "Ver Video de Expedición",
      whatsappBtn: "WhatsApp Directo",
      slides: [
        { caption: "Bosque de Niebla & Yungas Paceños", tag: "Ecoturismo & Conservación" },
        { caption: "Cordillera Real & Caminos Precolombinos", tag: "Trekking & Montañismo desde 2016" },
        { caption: "Santuario Senda Verde & Fauna Silvestre", tag: "Turismo Regenerativo" },
      ],
      videoModalTitle: "Jiwasa Travel • Expedición & Conservación en Bolivia",
      videoConservationNote: "Imágenes capturadas respetando el bienestar animal y las normas de áreas protegidas.",
    },
    stats: [
      { to: 8, suffix: "+ Años", label: "Trayectoria Técnica", sublabel: "Montañistas y guías desde 2016" },
      { to: 150, prefix: "+", suffix: "", label: "Especies Observadas", sublabel: "Mariposas, abejas nativas y aves" },
      { to: 100, suffix: "%", label: "Turismo Regenerativo", sublabel: "Aporte directo a santuarios" },
      { to: 5.0, decimals: 1, suffix: "★", label: "TripAdvisor La Paz", sublabel: "Satisfacción 100% positiva" },
    ],
    planner: {
      badge: "Planificador Personalizado",
      title: "Comencemos a planear tu experiencia",
      subtitle: "Itinerarios flexibles, privados y diseñados por montañistas locales.",
      destinationLabel: "Destino",
      destinationPlaceholder: "Cualquier Destino",
      destinations: [
        { value: "Cualquiera", label: "Cualquier Destino" },
        { value: "Santuario Senda Verde (Yungas)", label: "Santuario Senda Verde" },
        { value: "Parque Nacional Cotapata", label: "Parque Nacional Cotapata" },
        { value: "Cordillera Real & Takesi", label: "Cordillera Real & Takesi" },
        { value: "La Paz Geológica (Valles & Farallones)", label: "La Paz Geológica" },
      ],
      typeLabel: "Tipo de Experiencia",
      typePlaceholder: "Todas las experiencias",
      types: [
        { value: "Todas las experiencias", label: "Todas las experiencias" },
        { value: "Conservación & Vida Silvestre", label: "Conservación & Vida Silvestre" },
        { value: "Observación de Mariposas y Abejas", label: "Mariposas & Abejas Nativas" },
        { value: "Trekking & Senderismo Inca", label: "Trekking & Senderismo" },
        { value: "Escalada en Roca & Montañismo", label: "Escalada en Roca" },
        { value: "Birdwatching (Observación de Aves)", label: "Observación de Aves" },
      ],
      groupLabel: "Viajeros",
      groupPlaceholder: "Seleccionar grupo",
      groups: [
        { value: "Viajero solitario", label: "1 Persona (Solitario)" },
        { value: "1 - 2 personas", label: "Pareja (2 Personas)" },
        { value: "Familia pequeña (3 a 5)", label: "Familia (3 a 5 Personas)" },
        { value: "Grupo de amigos / Delegación (+6)", label: "Grupo (+6 Personas)" },
      ],
      submitBtn: "Consultar por WhatsApp",
      whatsappTemplate: (dest: string, exp: string, group: string) =>
        `Hola Jiwasa Travel, me interesa planear un viaje. Destino: ${dest}, Experiencia: ${exp}, Grupo: ${group}. ¿Podrían brindarme información y fechas disponibles?`,
    },
    experiences: {
      badge: "Nuestras Rutas & Expediciones",
      title: "Experiencias Ecoturísticas Especializadas",
      subtitle:
        "Rutas diseñadas para observar, interpretar y valorar la biodiversidad boliviana, apoyando directamente a comunidades y santuarios de fauna silvestre.",
      allCategories: "Todas las Experiencias",
      categories: [
        { id: "all", label: "Todas las Experiencias" },
        { id: "conservacion", label: "Santuarios & Conservación" },
        { id: "biodiversidad", label: "Mariposas, Abejas & Aves" },
        { id: "montana", label: "Trekking & Montañismo" },
        { id: "cultural", label: "Ecoturismo Comunitario" },
      ],
      viewItinerary: "Ver Itinerario Completo",
      consultWhatsApp: "Consultar por WhatsApp",
      modal: {
        duration: "Duración",
        location: "Ubicación",
        descTitle: "Descripción de la Experiencia",
        highlightsTitle: "Puntos Destacados",
        includesTitle: "¿Qué incluye?",
        groupNote: "Grupos reducidos y enfoque de conservación.",
        requestInfoBtn: "Solicitar Información y Precios",
        whatsappMessage: (title: string) =>
          `Hola Jiwasa Travel, deseo consultar disponibilidad y precios para la experiencia: "${title}".`,
      },
    },
    biodiversity: {
      badge: "Observación & Valoración en Vivo",
      title: "El Fascinante Universo de la Biodiversidad",
      subtitle:
        "Desde mariposas y abejas nativas hasta mamíferos rescatados. Descubre las especies que dan sentido a nuestro compromiso de conservación.",
      audioActive: "Sonido Activo",
      audioInactive: "Ambiente Silvestre",
      focusLabel: "Enfoque Ecoturístico",
      ecoFactTitle: "💡 Dato de Conservación:",
      seasonLabel: "Temporada Recomendada:",
      consultBtn: "Consultar Ruta para esta Especie",
      whatsappMessage: (name: string) =>
        `Hola Jiwasa Travel, me gustaría hacer una expedición para observar: "${name}". ¿Tienen fechas disponibles?`,
      tabs: [
        { id: "mariposas", label: "Mariposas de los Yungas", icon: "🦋" },
        { id: "abejas", label: "Abejas Nativas Meliponas", icon: "🐝" },
        { id: "aves", label: "Aves de Bosque Nuboso", icon: "🦜" },
        { id: "mamiferos", label: "Fauna Silvestre Rescatada", icon: "🐾" },
      ],
      species: {
        mariposas: {
          name: "Mariposa Ojo de Búho & Morpho Azul",
          scientificName: "Caligo memnon / Morpho helenor",
          location: "Parque Nacional Cotapata & Yolosa (Yungas)",
          status: "Protegida en Área Natural",
          season: "Todo el año (Óptimo: Octubre a Mayo)",
          description:
            "Los Yungas de La Paz albergan una de las mayores densidades de lepidópteros del continente. Con Jiwasa Travel aprenderás a observar sus ciclos biológicos, mimetismo y la vital labor de polinización en la selva nubosa.",
          ecoFact:
            "Las alas de la Morpho azul no tienen pigmento azul; su color se produce por microestructuras que reflejan la luz solar.",
        },
        abejas: {
          name: "Abejas Meliponas Nativas sin Aguijón",
          scientificName: "Tribu Meliponini (Melipona & Trigona)",
          location: "Comunidades de Yungas & Cotapata",
          status: "Especie Clave para la Regeneración Forestal",
          season: "Florecimiento estacional",
          description:
            "Un universo silencioso y asombroso. A diferencia de las abejas europeas, estas especies milenarias no pican y producen una miel silvestre de propiedades medicinales extraordinarias. Apoyamos a familias locales que cuidan sus nidos ancestrales.",
          ecoFact:
            "Son las responsables de la polinización del 80% de las orquídeas y árboles de bosque húmedo andino.",
        },
        aves: {
          name: "Quetzal Andino & Tangaras Multicolores",
          scientificName: "Pharomachrus auriceps / Tangara chilensis",
          location: "Valle de Zongo & Corredor Cotapata",
          status: "Sensible a la deforestación",
          season: "Madrugadas (Avistamiento continuo)",
          description:
            "Bolivia es el quinto país del mundo con mayor riqueza ornitológica. En nuestras rutas de observación equipamos a los viajeros con guías ornitológicas y telescopios de alta fidelidad para un avistamiento ético sin perturbar sus cantos.",
          ecoFact:
            "En un solo día de recorrido con Jiwasa Travel es posible registrar más de 45 especies distintas de aves silvestres.",
        },
        mamiferos: {
          name: "Oso de Anteojos & Primates Rescatados",
          scientificName: "Tremarctos ornatus / Sapajus apella",
          location: "Santuario Senda Verde (Coroico)",
          status: "En Peligro / Lucha contra el Tráfico Ilegal",
          season: "Visitas educativas durante todo el año",
          description:
            "Testigos vivientes de la resiliencia animal. En el Santuario Senda Verde, nuestros viajeros conocen de primera mano las historias de rescate, rehabilitación y cuidado permanente de fauna arrebatada del tráfico ilícito.",
          ecoFact:
            "Cada boleto y visita gestionada por Jiwasa Travel destina fondos directos para la dieta y atención veterinaria de los animales del santuario.",
        },
      },
    },
    whyChooseUs: {
      badge: "Nuestros Pilares Diferenciales",
      title: "¿Por qué viajar con Jiwasa Travel?",
      subtitle:
        "No solo te llevamos a conocer Bolivia; te acompañamos a vivir una experiencia transformadora con impacto real en la naturaleza.",
      pillars: [
        {
          title: "Guías Montañistas desde 2016",
          desc: "Nacimos como un equipo de montañistas formados en técnicas de guiado, trekking, escalada y liderazgo en aventura. Te brindamos máxima seguridad técnica y confianza.",
        },
        {
          title: "Alianza con Santuarios de Fauna",
          desc: "Trabajamos activamente junto a espacios como el Santuario Senda Verde. Cada viaje apoya la alimentación de animales rescatados y combate el tráfico ilegal de fauna.",
        },
        {
          title: "Ecoturismo Regenerativo y Educativo",
          desc: "Más allá del paisaje tradicional, abrimos ventanas al universo de las mariposas, las abejas nativas meliponas y las aves silvestres, fomentando la conservación.",
        },
        {
          title: "Impacto Positivo en Comunidades",
          desc: "Colaboramos directamente con familias locales y guardaparques de áreas protegidas como Cotapata, asegurando una retribución económica justa en los territorios.",
        },
        {
          title: "Seguridad y Grupos Reducidos",
          desc: "Operamos con grupos pequeños para garantizar un impacto ambiental mínimo (No Deje Rastro) y una atención personalizada con equipo de montaña de primera calidad.",
        },
        {
          title: "Atención Local en La Paz",
          desc: "Oficina física en la emblemática Calle Sagárnaga #380, listos para recibirte personalmente y asesorarte en cada detalle de tu viaje antes de partir.",
        },
      ],
    },
    destinations: {
      badge: "Ecosistemas de Bolivia",
      title: "Nuestros Destinos Principales",
      subtitle:
        "Desde las cumbres nevadas de los Andes hasta los valles de niebla y santuarios de vida silvestre.",
      altitudeNote: "Pisos ecológicos desde 1,100 hasta 6,000+ msnm",
    },
    history: {
      badge: "Nuestra Historia",
      title: "Un camino de aventura, descubrimiento y compromiso con la vida silvestre",
      subtitle:
        "Cómo la pasión por la montaña boliviana nos llevó a convertirnos en defensores de la biodiversidad.",
      cardBadge: "Ecoturismo Regenerativo",
      cardTitle: "Protegiendo la Vida Silvestre",
      cardSubtitle: "Cada recorrido es una razón más para valorar y proteger nuestros ecosistemas.",
      yearsBadge: "Años de Trayectoria",
      yearsSubtitle: "Montañismo & Ecoturismo",
      milestones: [
        {
          year: "2016",
          title: "El Inicio en la Montaña",
          desc: "Nacimos como un equipo apasionado de montañistas, formándonos en técnicas de guiado, trekking, escalada y liderazgo en aventura por la Cordillera Real.",
        },
        {
          year: "2020",
          title: "Compromiso con Senda Verde",
          desc: "Durante la crisis sanitaria, participamos en campañas urgentes de recolección de alimentos y espacios de reflexión para salvar santuarios de fauna silvestre.",
        },
        {
          year: "2021",
          title: "Jiwasa Travel Ecoturismo",
          desc: "Consolidamos nuestra identidad institucional enfocada en el turismo regenerativo, la conservación y la lucha activa contra el tráfico de fauna.",
        },
        {
          year: "Hoy",
          title: "Biodiversidad & Educación",
          desc: "Construimos experiencias junto a Parques Nacionales como Cotapata, abriendo los ojos de viajeros al mundo de las mariposas, abejas nativas y aves.",
        },
      ],
    },
    mission: {
      badge: "Propósito & Compromiso",
      title: "Misión, Visión y Objetivos Estratégicos",
      subtitle: "La base ética sobre la cual operamos cada una de nuestras expediciones en Bolivia.",
      missionBadge: "Nuestra Misión",
      missionTitle: "Conectar a las personas con la biodiversidad",
      visionBadge: "Nuestra Visión",
      visionTitle: "Operadora referente en ecoturismo educativo",
      objectivesTitle: "Nuestros 5 Objetivos Estratégicos",
      objectivesSubtitle: "Pilares de acción que guían el desarrollo de cada producto y alianza turística.",
    },
    testimonials: {
      badge: "Opiniones de Nuestros Viajeros",
      title: "Testimonios & Reseñas Destacadas",
      subtitle:
        "Historias reales de personas que compartieron junto a nosotros el amor por la naturaleza y la montaña boliviana.",
      tripadvisorTitle: "Consulta nuestras reseñas oficiales en TripAdvisor",
      tripadvisorSubtitle:
        "Calificación excelente en La Paz, Bolivia. Lee más opiniones de la comunidad viajera global.",
      tripadvisorBtn: "Ver perfil en TripAdvisor",
    },
    faq: {
      badge: "Resuelve tus Dudas",
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber antes de embarcarte en una experiencia con Jiwasa Travel.",
      categoryLabel: "Categoría",
    },
    contact: {
      badge: "Contáctanos & Reserva",
      title: "Comencemos a diseñar tu viaje",
      subtitle:
        "Estamos en el centro histórico de La Paz y en línea para resolver tus preguntas, personalizar itinerarios o cotizar expediciones privadas.",
      infoTitle: "Información de Contacto",
      officeTitle: "Oficina Principal",
      mapsLink: "Ver en Google Maps",
      phoneTitle: "Teléfono & WhatsApp",
      phoneSubtitle: "Atención en español e inglés",
      emailTitle: "Correo Electrónico",
      emailSubtitle: "Respuesta en menos de 24 horas",
      hoursTitle: "Horario de Atención",
      hoursWeek: "Lunes a Sábado: 08:30 – 19:00",
      hoursSun: "Domingos: Coordinación previa / Atención virtual",
      immediateTitle: "¿Prefieres atención inmediata?",
      immediateSubtitle: "Chatea con un guía especialista ahora mismo por WhatsApp.",
      openChatBtn: "Abrir Chat",
      formTitle: "Formulario de Consulta & Reserva",
      formSubtitle: "Envíanos los datos de tu viaje y te responderemos con una propuesta personalizada.",
      fullNameLabel: "Nombre Completo *",
      fullNamePlaceholder: "Ej. Juan Pérez",
      emailLabel: "Correo Electrónico *",
      emailPlaceholder: "correo@ejemplo.com",
      phoneLabel: "Teléfono / WhatsApp *",
      phonePlaceholder: "+591 70000000",
      experienceLabel: "Experiencia de Interés",
      customExpOption: "Itinerario personalizado a medida",
      dateLabel: "Fecha o Temporada Tentativa",
      datePlaceholder: "Ej. Fin de semana o mes de preferencia",
      travelersLabel: "Número de Viajeros",
      travelerOptions: [
        { value: "1 persona", label: "1 Persona" },
        { value: "2 personas (Pareja)", label: "2 Personas" },
        { value: "3 a 5 personas (Familia/Amigos)", label: "3 a 5 Personas" },
        { value: "Grupo de más de 6 personas", label: "Más de 6 Personas" },
      ],
      messageLabel: "Mensaje o Requerimientos Especiales",
      messagePlaceholder: "Cuéntanos tus intereses, si requieres equipo especial, dudas sobre la altitud o logística...",
      submitBtn: "Enviar Consulta por EmailJS",
      submittingBtn: "Enviando mensaje...",
      whatsappFallbackBtn: "Enviar por WhatsApp",
      privacyNotice: "Protegemos tu privacidad. No compartimos tus datos con terceros ni enviamos spam.",
      successTitle: "¡Mensaje Enviado!",
      successMessage:
        "¡Tu consulta ha sido enviada con éxito! Nuestro equipo de Jiwasa Travel se comunicará contigo a la brevedad.",
      errorTitle: "Aviso",
      errorMessage:
        "Hubo un inconveniente al enviar por correo. Puedes escribirnos directamente a nuestro WhatsApp oficial para atención inmediata.",
      sendWhatsappDirectDataBtn: "Enviar datos por WhatsApp",
      whatsappTemplate: (name: string, email: string, exp: string, date: string, group: string, msg: string) =>
        `Hola Jiwasa Travel, deseo coordinar una experiencia.
• Nombre: ${name || "Viajero"}
• Correo: ${email || "No especificado"}
• Experiencia: ${exp}
• Fecha estimada: ${date || "Por coordinar"}
• Grupo: ${group}
• Consulta: ${msg || "Solicito más detalles e información"}`,
    },
    footer: {
      exploreTitle: "Navegación",
      conservationTitle: "Conservación",
      officeTitle: "Sede La Paz",
      contactFormLink: "Ir al Formulario de Contacto →",
      rights: "Todos los derechos reservados.",
      terms: "Términos & Condiciones",
      privacy: "Política de Privacidad",
      complaintsBook: "Libro de Reclamaciones",
      conservationLinks: [
        "Santuario Senda Verde",
        "Parque Nacional Cotapata",
        "Mariposas y Abejas Meliponas",
        "Lucha contra el Tráfico de Fauna",
        "Turismo Regenerativo",
      ],
    },
    floatingWhatsApp: {
      tooltip: "¿Deseas armar tu viaje a medida? ¡Escríbenos!",
      ariaLabel: "Chatear por WhatsApp con Jiwasa Travel",
    },
  },

  en: {
    topbar: {
      tagline: "Ecotourism & Regenerative Travel in Bolivia",
      address: "La Paz Headquarters: Sagárnaga St. #380 Office 2",
      whatsapp: "Direct WhatsApp",
    },
    nav: {
      home: "Home",
      experiences: "Experiences",
      destinations: "Destinations",
      biodiversity: "Biodiversity",
      history: "Our Story",
      mission: "Mission & Goals",
      testimonials: "Reviews",
      contact: "Contact",
      cta: "Plan Your Trip",
      planCustom: "Plan Custom Expedition",
    },
    hero: {
      tag: "Ecotourism & Wildlife Conservation Operator • Since 2016",
      titlePrefix: "Discover Bolivia with a",
      titleHighlight: "living purpose",
      subtitle:
        "A journey of adventure, discovery, and commitment to wildlife. We connect travelers with biodiversity through ethical observation, regenerative tourism, and certified mountain leadership.",
      exploreBtn: "Explore Experiences",
      videoBtn: "Watch Expedition Film",
      whatsappBtn: "Direct WhatsApp",
      slides: [
        { caption: "Cloud Forest & Yungas of La Paz", tag: "Ecotourism & Conservation" },
        { caption: "Cordillera Real & Inca Trails", tag: "Trekking & Mountaineering since 2016" },
        { caption: "Senda Verde Wildlife Sanctuary", tag: "Regenerative Tourism" },
      ],
      videoModalTitle: "Jiwasa Travel • Expedition & Conservation in Bolivia",
      videoConservationNote: "Footage recorded respecting animal welfare and national protected area standards.",
    },
    stats: [
      { to: 8, suffix: "+ Years", label: "Mountain Leadership", sublabel: "Certified guides & mountaineers since 2016" },
      { to: 150, prefix: "+", suffix: "", label: "Species Documented", sublabel: "Butterflies, native bees & birdlife" },
      { to: 100, suffix: "%", label: "Regenerative Tourism", sublabel: "Direct contributions to wildlife sanctuaries" },
      { to: 5.0, decimals: 1, suffix: "★", label: "TripAdvisor La Paz", sublabel: "100% positive guest satisfaction" },
    ],
    planner: {
      badge: "Custom Trip Planner",
      title: "Let's start planning your expedition",
      subtitle: "Flexible, private itineraries crafted by certified local mountaineers.",
      destinationLabel: "Destination",
      destinationPlaceholder: "Any Destination",
      destinations: [
        { value: "Cualquiera", label: "Any Destination" },
        { value: "Santuario Senda Verde (Yungas)", label: "Senda Verde Wildlife Sanctuary" },
        { value: "Parque Nacional Cotapata", label: "Cotapata National Park" },
        { value: "Cordillera Real & Takesi", label: "Cordillera Real & Takesi Inca Trail" },
        { value: "La Paz Geológica (Valles & Farallones)", label: "Geological La Paz (Valleys & Cliffs)" },
      ],
      typeLabel: "Experience Type",
      typePlaceholder: "All experiences",
      types: [
        { value: "Todas las experiencias", label: "All experiences" },
        { value: "Conservación & Vida Silvestre", label: "Wildlife Conservation & Sanctuaries" },
        { value: "Observación de Mariposas y Abejas", label: "Butterflies & Native Stingless Bees" },
        { value: "Trekking & Senderismo Inca", label: "High Altitude Trekking & Inca Trails" },
        { value: "Escalada en Roca & Montañismo", label: "Rock Climbing & Mountaineering" },
        { value: "Birdwatching (Observación de Aves)", label: "Specialized Birdwatching" },
      ],
      groupLabel: "Travelers",
      groupPlaceholder: "Select group size",
      groups: [
        { value: "Viajero solitario", label: "Solo Traveler (1 Person)" },
        { value: "1 - 2 personas", label: "Couple (2 People)" },
        { value: "Familia pequeña (3 a 5)", label: "Family (3 to 5 People)" },
        { value: "Grupo de amigos / Delegación (+6)", label: "Group (+6 People)" },
      ],
      submitBtn: "Check Availability on WhatsApp",
      whatsappTemplate: (dest: string, exp: string, group: string) =>
        `Hello Jiwasa Travel, I would like to plan an expedition. Destination: ${dest}, Experience: ${exp}, Group: ${group}. Could you provide details and available dates?`,
    },
    experiences: {
      badge: "Our Routes & Expeditions",
      title: "Specialized Ecotourism Experiences",
      subtitle:
        "Handcrafted routes designed to observe, interpret, and protect Bolivian biodiversity, directly supporting indigenous communities and wildlife rescue sanctuaries.",
      allCategories: "All Experiences",
      categories: [
        { id: "all", label: "All Experiences" },
        { id: "conservacion", label: "Sanctuaries & Conservation" },
        { id: "biodiversidad", label: "Butterflies, Bees & Birds" },
        { id: "montana", label: "Trekking & Mountaineering" },
        { id: "cultural", label: "Community Ecotourism" },
      ],
      viewItinerary: "View Full Itinerary",
      consultWhatsApp: "Inquire via WhatsApp",
      modal: {
        duration: "Duration",
        location: "Location",
        descTitle: "Experience Overview",
        highlightsTitle: "Key Highlights",
        includesTitle: "What's Included",
        groupNote: "Small groups only with strict conservation ethics.",
        requestInfoBtn: "Request Info & Pricing",
        whatsappMessage: (title: string) =>
          `Hello Jiwasa Travel, I would like to request availability and pricing for the experience: "${title}".`,
      },
    },
    biodiversity: {
      badge: "Live Observation & Valuation",
      title: "The Fascinating Universe of Biodiversity",
      subtitle:
        "From high-canopy butterflies and ancient stingless bees to rescued Andean wildlife. Discover the species that give meaning to our conservation mission.",
      audioActive: "Soundscape On",
      audioInactive: "Wild Ambience",
      focusLabel: "Ecotourism Focus",
      ecoFactTitle: "💡 Conservation Fact:",
      seasonLabel: "Recommended Season:",
      consultBtn: "Book an Expedition for this Species",
      whatsappMessage: (name: string) =>
        `Hello Jiwasa Travel, I am interested in an expedition to observe: "${name}". Do you have available dates?`,
      tabs: [
        { id: "mariposas", label: "Yungas Butterflies", icon: "🦋" },
        { id: "abejas", label: "Native Stingless Bees", icon: "🐝" },
        { id: "aves", label: "Cloud Forest Birdlife", icon: "🦜" },
        { id: "mamiferos", label: "Rescued Wildlife", icon: "🐾" },
      ],
      species: {
        mariposas: {
          name: "Owl Butterfly & Blue Morpho",
          scientificName: "Caligo memnon / Morpho helenor",
          location: "Cotapata National Park & Yolosa (Yungas)",
          status: "Protected in Natural Reserve",
          season: "Year-round (Peak: October to May)",
          description:
            "The Yungas of La Paz host one of the highest densities of lepidoptera on the continent. With Jiwasa Travel, you will observe their life cycles, camouflage, and vital pollination role within the montane cloud forest.",
          ecoFact:
            "The wings of the Blue Morpho possess no blue pigment; their vivid color is generated by microscopic nano-structures reflecting sunlight.",
        },
        abejas: {
          name: "Native Melipona Stingless Bees",
          scientificName: "Meliponini Tribe (Melipona & Trigona)",
          location: "Yungas & Cotapata Local Communities",
          status: "Keystone Species for Forest Regeneration",
          season: "Seasonal forest bloom",
          description:
            "A serene and astonishing miniature world. Unlike European bees, these ancient native bees do not sting and produce rare medicinal wild honey. We support local families who safeguard their ancestral forest hives.",
          ecoFact:
            "Native stingless bees are responsible for pollinating over 80% of native orchids and cloud forest canopy trees.",
        },
        aves: {
          name: "Golden-Headed Quetzal & Paradise Tanagers",
          scientificName: "Pharomachrus auriceps / Tangara chilensis",
          location: "Zongo Valley & Cotapata Corridor",
          status: "Sensitive to Habitat Fragmentation",
          season: "Early dawn hours (Continuous sightings)",
          description:
            "Bolivia ranks as the fifth richest birding country on Earth. On our specialized observation routes, travelers are equipped with field guides and high-definition spotting scopes for ethical birding without playback disturbance.",
          ecoFact:
            "On a single full-day expedition with Jiwasa Travel, it is possible to log over 45 distinct wild bird species on eBird.",
        },
        mamiferos: {
          name: "Spectacled Bear & Rescued Primates",
          scientificName: "Tremarctos ornatus / Sapajus apella",
          location: "Senda Verde Wildlife Sanctuary (Coroico)",
          status: "Vulnerable / Countering Illegal Wildlife Trade",
          season: "Educational visits year-round",
          description:
            "Living proof of animal resilience. At Senda Verde Sanctuary, our travelers learn first-hand the heartwarming rescue, rehabilitation, and lifetime care stories of animals saved from illegal trafficking.",
          ecoFact:
            "Every ticket and tour coordinated through Jiwasa Travel directly funds the specialized nutrition and veterinary care of sanctuary animals.",
        },
      },
    },
    whyChooseUs: {
      badge: "Our Core Differentiators",
      title: "Why Travel with Jiwasa Travel?",
      subtitle:
        "We don't just take you to see Bolivia; we guide you through a transformative journey that creates tangible positive impact for nature.",
      pillars: [
        {
          title: "Certified Mountaineers since 2016",
          desc: "We started as a team of passionate mountaineers certified in guiding, trekking, climbing, and wilderness leadership. We provide unmatched technical safety.",
        },
        {
          title: "Allied with Wildlife Sanctuaries",
          desc: "We actively collaborate with refuges such as Senda Verde. Every expedition supports the daily care of rescued animals and combats wildlife trafficking.",
        },
        {
          title: "Regenerative & Educational Tourism",
          desc: "Beyond postcard landscapes, we open doors to the universe of butterflies, native stingless bees, and rare birds, fostering environmental stewardship.",
        },
        {
          title: "Empowering Indigenous Communities",
          desc: "We work directly with local families and national park rangers in Cotapata, ensuring fair economic return and sustainable livelihoods across the territories.",
        },
        {
          title: "Small Groups & Leave No Trace",
          desc: "We operate exclusively in small groups to guarantee minimal environmental footprint and personalized attention with top-tier mountain equipment.",
        },
        {
          title: "Local Headquarters in La Paz",
          desc: "Physical office on historic Sagárnaga St. #380, ready to welcome you in person and answer every question before setting out into the wild.",
        },
      ],
    },
    destinations: {
      badge: "Bolivian Ecosystems",
      title: "Our Primary Destinations",
      subtitle:
        "From glaciated Andean peaks over 6,000 meters down into subtropical cloud forests and wildlife sanctuaries.",
      altitudeNote: "Ecological zones ranging from 1,100 to 6,000+ meters above sea level",
    },
    history: {
      badge: "Our Story",
      title: "A journey of adventure, discovery, and commitment to wildlife",
      subtitle:
        "How a deep passion for the Bolivian mountains inspired us to become dedicated guardians of biodiversity.",
      cardBadge: "Regenerative Ecotourism",
      cardTitle: "Protecting Wild Nature",
      cardSubtitle: "Every single journey is another reason to cherish, understand, and defend our ecosystems.",
      yearsBadge: "Years of Experience",
      yearsSubtitle: "Mountaineering & Conservation",
      milestones: [
        {
          year: "2016",
          title: "Beginnings in the Mountains",
          desc: "We began as an adventurous mountaineering team, training rigorously in technical guiding, high-altitude trekking, rock climbing, and expedition leadership.",
        },
        {
          year: "2020",
          title: "Emergency Support for Senda Verde",
          desc: "During the global crisis, we organized critical food drives and awareness campaigns to help sustain wildlife sanctuaries facing severe shortages.",
        },
        {
          year: "2021",
          title: "Consolidation of Jiwasa Travel",
          desc: "We formalized our identity as Jiwasa Travel – Ecoturismo, directing our efforts toward regenerative tourism, habitat conservation, and anti-trafficking.",
        },
        {
          year: "Today",
          title: "Biodiversity & Environmental Education",
          desc: "We partner with National Parks like Cotapata, opening travelers' eyes to the wonders of native butterflies, stingless bees, and birdlife.",
        },
      ],
    },
    mission: {
      badge: "Purpose & Ethics",
      title: "Mission, Vision & Strategic Objectives",
      subtitle: "The ethical foundation that steers every single expedition we lead across Bolivia.",
      missionBadge: "Our Mission",
      missionTitle: "Connecting people with living biodiversity",
      visionBadge: "Our Vision",
      visionTitle: "A benchmark operator in educational ecotourism",
      objectivesTitle: "Our 5 Strategic Objectives",
      objectivesSubtitle: "Action pillars guiding product design, sustainability standards, and community partnerships.",
    },
    testimonials: {
      badge: "Traveler Reviews",
      title: "Highlighted Stories & Guest Reviews",
      subtitle:
        "Real experiences from travelers who shared our profound love for nature and the Bolivian wilderness.",
      tripadvisorTitle: "Check our official reviews on TripAdvisor",
      tripadvisorSubtitle:
        "Consistently rated 5 stars in La Paz, Bolivia. Read more verified impressions from international travelers.",
      tripadvisorBtn: "View TripAdvisor Profile",
    },
    faq: {
      badge: "Help & Clarifications",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know before embarking on an expedition with Jiwasa Travel.",
      categoryLabel: "Category",
    },
    contact: {
      badge: "Contact & Reservations",
      title: "Let's craft your journey together",
      subtitle:
        "Located in the historic heart of La Paz and online to answer your questions, customize itineraries, or quote private expeditions.",
      infoTitle: "Contact Information",
      officeTitle: "Headquarters Office",
      mapsLink: "Open in Google Maps",
      phoneTitle: "Phone & WhatsApp",
      phoneSubtitle: "English and Spanish assistance",
      emailTitle: "Official Email",
      emailSubtitle: "Responses in under 24 hours",
      hoursTitle: "Office Hours",
      hoursWeek: "Monday to Saturday: 08:30 – 19:00",
      hoursSun: "Sunday: Prior arrangement / Online booking",
      immediateTitle: "Need instant assistance?",
      immediateSubtitle: "Chat with a certified expedition specialist directly on WhatsApp.",
      openChatBtn: "Open Chat",
      formTitle: "Inquiry & Booking Form",
      formSubtitle: "Send us your travel plans and we'll reply with a tailor-made proposal.",
      fullNameLabel: "Full Name *",
      fullNamePlaceholder: "e.g. John Smith",
      emailLabel: "Email Address *",
      emailPlaceholder: "yourname@example.com",
      phoneLabel: "Phone / WhatsApp *",
      phonePlaceholder: "+1 555 123 4567",
      experienceLabel: "Experience of Interest",
      customExpOption: "Tailor-made customized itinerary",
      dateLabel: "Tentative Date or Season",
      datePlaceholder: "e.g. Specific weekend or preferred month",
      travelersLabel: "Number of Travelers",
      travelerOptions: [
        { value: "1 persona", label: "1 Person (Solo)" },
        { value: "2 personas (Pareja)", label: "2 People (Couple)" },
        { value: "3 a 5 personas (Familia/Amigos)", label: "3 to 5 People (Family/Friends)" },
        { value: "Grupo de más de 6 personas", label: "Group (+6 People)" },
      ],
      messageLabel: "Special Requests or Questions",
      messagePlaceholder: "Tell us your interests, gear requirements, altitude questions, or logistics...",
      submitBtn: "Send Inquiry via EmailJS",
      submittingBtn: "Sending message...",
      whatsappFallbackBtn: "Send via WhatsApp",
      privacyNotice: "We respect your privacy. We never share your data or send spam.",
      successTitle: "Message Sent!",
      successMessage:
        "Your inquiry was sent successfully! Our Jiwasa Travel team will get in touch with you shortly.",
      errorTitle: "Notice",
      errorMessage:
        "There was a temporary issue sending via email. You can message us directly on WhatsApp for immediate support.",
      sendWhatsappDirectDataBtn: "Send Details on WhatsApp",
      whatsappTemplate: (name: string, email: string, exp: string, date: string, group: string, msg: string) =>
        `Hello Jiwasa Travel, I would like to organize an expedition.
• Name: ${name || "Traveler"}
• Email: ${email || "Not specified"}
• Experience: ${exp}
• Estimated Date: ${date || "To be coordinated"}
• Group: ${group}
• Message: ${msg || "Please provide further details and itinerary"}`,
    },
    footer: {
      exploreTitle: "Navigation",
      conservationTitle: "Conservation",
      officeTitle: "La Paz Office",
      contactFormLink: "Go to Contact Form →",
      rights: "All rights reserved.",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      complaintsBook: "Claims Register",
      conservationLinks: [
        "Senda Verde Wildlife Sanctuary",
        "Cotapata National Park",
        "Butterflies & Stingless Bees",
        "Countering Wildlife Trafficking",
        "Regenerative Travel",
      ],
    },
    floatingWhatsApp: {
      tooltip: "Looking for a custom trip? Message us!",
      ariaLabel: "Chat on WhatsApp with Jiwasa Travel",
    },
  },
};
