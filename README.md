# Producción Musical — Plataforma personal

Sitio estático (sin backend) que muestra tu carrera autodidacta de Producción Musical como
una vista de curso al estilo campus virtual: tarjetas por curso, checklist de avance,
notas técnicas y recursos, todo con progreso guardado en tu propio navegador.

## Vinculo del Curso

1. Crea un repositorio nuevo en GitHub (público), por ejemplo `produccion-musical`.
2. Sube **todo el contenido de esta carpeta** tal cual (no la carpeta contenedora, su contenido)
   a la raíz del repositorio: `index.html`, `course.html`, `README.md`, `css/`, `js/`.
3. En el repositorio: **Settings → Pages → Source** → selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. GitHub te da una URL como `https://tu-usuario.github.io/produccion-musical/`.
5. Ábrela — ya tienes tu carrera en línea, siempre disponible.

No necesitas build, ni Node, ni nada más: son archivos HTML/CSS/JS planos.

## Cómo funciona el progreso

- Cada curso tiene un checklist. Al marcar una casilla, se guarda automáticamente en el
  `localStorage` de tu navegador (no en un servidor).
- Las notas técnicas de cada curso también se guardan ahí mismo, con autoguardado.
- **Importante**: el progreso vive en el navegador/dispositivo donde lo marques. Si entras
  desde el celular y luego desde el computador, cada uno tendrá su propio progreso porque
  no hay una base de datos compartida. Si en el futuro quieres sincronizar entre dispositivos,
  se puede agregar (te lo puedo armar cuando quieras: implicaría una base de datos simple
  tipo Supabase/Firebase gratis).

## Cómo agregar un curso nuevo

Todo el contenido vive en un solo archivo: `js/courses-data.js`. No hay que tocar el diseño
ni la lógica. Copia un bloque existente dentro del array `COURSES` y ajusta:

```js
{
  id: "identificador-unico-sin-espacios",
  code: "PROD-108",
  title: "Nombre del curso",
  duration: "Duración estimada",
  summary: "Una o dos frases sobre el curso.",
  hue: 27, // color del banner: 27=ámbar, 165=teal, 45=dorado, 200=azul
  checklist: [
    "Paso 1",
    "Paso 2"
  ],
  resources: [
    { label: "Nombre del recurso", url: "https://..." }
  ]
}
```

Guarda el archivo, vuelve a subirlo a GitHub (o haz commit + push) y el curso nuevo aparece
solo en el dashboard con su propia tarjeta y progreso en 0%.

## Estructura del proyecto

```
├── index.html          → Vista general de la carrera (dashboard)
├── course.html          → Plantilla de detalle de un curso (usa ?id=... en la URL)
├── css/
│   └── style.css        → Toda la identidad visual
├── js/
│   ├── courses-data.js  → Los 7 cursos de la carrera (edítalo para agregar/cambiar cursos)
│   ├── utils.js          → Cálculo de progreso, medidor VU, forma de onda de las tarjetas
│   ├── app.js             → Lógica del dashboard (búsqueda, render de tarjetas)
│   └── course.js          → Lógica del detalle (checklist, notas, recursos)
└── README.md
```
