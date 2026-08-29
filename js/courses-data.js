// courses-data.js
// Aquí vive TODA la información de la carrera. Para añadir un curso nuevo,
// agrega un objeto más al array COURSES siguiendo la misma forma.
// No hace falta tocar app.js, course.js ni el HTML.

const COURSES = [
  {
    id: "fundamentos",
    code: "PROD-101",
    title: "Fundamentos: DAW e Interfaz",
    duration: "1–1.5 meses · 8–12h",
    summary:
      "El punto de partida: aprender a moverte en FL Studio, entender el flujo de señal de tu Focusrite y hacer sonar tu teclado MIDI por primera vez.",
    hue: 27, // ámbar
    checklist: [
      "Recorrer la interfaz de FL Studio (transporte, channel rack, playlist, mixer)",
      "Entender el flujo de señal: micrófono/instrumento → Focusrite → FL Studio",
      "Configurar gain staging correcto en la interfaz (sin clipear)",
      "Mapear el teclado MIDI a un instrumento y tocar las primeras notas",
      "Grabar un audio de prueba y verificar la señal en el mixer",
      "Guardar tu primer proyecto y organizar carpetas de trabajo"
    ],
    resources: [
      { label: "Olbaid Music — canal completo", url: "https://www.youtube.com/channel/UC3yTbQJCyIx1hJRS5pK_c0A" },
      { label: "Curso FL Studio desde cero — Olbaid", url: "https://www.youtube.com/playlist?list=PLDhUODcit3B7BqeL_lhcNMIiE-q" },
      { label: "FL Studio — canal oficial", url: "https://www.youtube.com/@FL_STUDIO" }
    ]
  },
  {
    id: "teoria-midi",
    code: "PROD-102",
    title: "Teoría Musical Aplicada + MIDI",
    duration: "2–3 meses · 16–24h",
    summary:
      "Escalas y acordes que realmente usas, tocados en tu teclado en vez de dibujados con el mouse. Aquí dejas de 'no saber usar' el MIDI.",
    hue: 45,
    checklist: [
      "Aprender una escala mayor y una menor y tocarlas en el teclado",
      "Construir una progresión de 4 acordes básicos (ej. I–V–vi–IV)",
      "Grabar esa progresión usando el teclado MIDI, no el mouse",
      "Practicar quantize y edición de velocity en el piano roll",
      "Componer una melodía simple de 8 compases sobre la progresión"
    ],
    resources: [
      { label: "Olbaid Music — canal completo", url: "https://www.youtube.com/channel/UC3yTbQJCyIx1hJRS5pK_c0A" }
    ]
  },
  {
    id: "grabacion",
    code: "PROD-103",
    title: "Grabación de Voz e Instrumentos",
    duration: "1–1.5 meses · 8–12h",
    summary:
      "Técnica de micrófono real: distancia, ángulo, tomas múltiples y comping. Tu ambiente cerrado y con A/C ya juega a tu favor aquí.",
    hue: 165, // teal
    checklist: [
      "Practicar distancia y ángulo de micrófono para voz",
      "Usar filtro anti-pop y revisar que no haya 'p' y 's' explosivas",
      "Grabar 3 tomas de la misma frase y compararlas",
      "Hacer comping: armar una toma final combinando lo mejor de cada una",
      "Grabar una guitarra acústica con el mismo criterio de gain staging"
    ],
    resources: [
      { label: "Olbaid Music — canal completo", url: "https://www.youtube.com/channel/UC3yTbQJCyIx1hJRS5pK_c0A" }
    ]
  },
  {
    id: "mezcla",
    code: "PROD-104",
    title: "Mezcla (Mixing)",
    duration: "3–4 meses · 24–32h",
    summary:
      "La fase más larga a propósito: aquí es donde más se nota la diferencia entre una demo y un producto terminado.",
    hue: 165,
    checklist: [
      "Aplicar EQ sustractivo antes que aditivo en una pista de voz",
      "Configurar un compresor básico (threshold, ratio, attack, release)",
      "Panear los elementos de una mezcla de 4–6 pistas",
      "Añadir reverb/delay en un bus auxiliar, no insertado directo",
      "Comparar tu mezcla contra una canción de referencia al mismo volumen",
      "Mezclar una canción completa de principio a fin"
    ],
    resources: [
      { label: "El Rincón del Mastering — Paco Rincón", url: "https://www.youtube.com/c/elrincondelmastering" }
    ]
  },
  {
    id: "arreglo",
    code: "PROD-105",
    title: "Arreglo, Sound Design e Identidad Sonora",
    duration: "3–4 meses · 24–32h",
    summary:
      "Construir canciones completas y empezar a sonar como tú, no como un tutorial más.",
    hue: 27,
    checklist: [
      "Estructurar una canción completa (intro, verso, coro, puente/drop)",
      "Seleccionar sonidos que compartan una misma paleta tonal",
      "Diseñar un sonido propio desde cero (synth), no solo usar presets",
      "Terminar una canción completa: de la idea al arreglo final",
      "Pedir feedback externo sobre el tema terminado"
    ],
    resources: [
      { label: "Olbaid Music — canal completo", url: "https://www.youtube.com/channel/UC3yTbQJCyIx1hJRS5pK_c0A" }
    ]
  },
  {
    id: "mastering",
    code: "PROD-106",
    title: "Mastering Básico y Finalización",
    duration: "1–1.5 meses · 8–12h",
    summary:
      "Dejar tus temas listos para competir en volumen y calidad con lo que ya suena en streaming.",
    hue: 45,
    checklist: [
      "Entender LUFS y el nivel de loudness objetivo para streaming",
      "Aplicar un limitador final sin perder dinámica",
      "Exportar en los formatos correctos (WAV para máster, MP3 para compartir)",
      "Verificar el máster en varios sistemas (audífonos, parlantes, celular)",
      "Subir un tema terminado a una plataforma (SoundCloud / YouTube / Spotify)"
    ],
    resources: [
      { label: "El Rincón del Mastering — Paco Rincón", url: "https://www.youtube.com/c/elrincondelmastering" }
    ]
  },
  {
    id: "portafolio",
    code: "PROD-107",
    title: "Portafolio, Red de Contactos y Monetización",
    duration: "Continuo desde el mes ~10 · 12–18 meses para consolidarse",
    summary:
      "Empieza en paralelo cuando ya tengas 3–5 canciones que te representen. No tiene fin fijo: se consolida con clientes reales.",
    hue: 200,
    checklist: [
      "Reunir 3–5 canciones que te representen en un portafolio",
      "Ofrecer producir/mezclar para 1–2 artistas (gratis o tarifa baja) para ganar experiencia",
      "Pedir feedback honesto de cada colaboración",
      "Definir una tarifa inicial acorde a tu nivel actual",
      "Unirte a una comunidad/Discord de productores para retroalimentación constante"
    ],
    resources: [
      { label: "Olbaid Music — canal completo", url: "https://www.youtube.com/channel/UC3yTbQJCyIx1hJRS5pK_c0A" },
      { label: "El Rincón del Mastering — Paco Rincón", url: "https://www.youtube.com/c/elrincondelmastering" }
    ]
  }
];

const CAREER = {
  name: "Producción Musical",
  subtitle: "Carrera autodidacta · Cohorte propia · 2026",
  student: "Jose Q"
};
