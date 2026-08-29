// utils.js — funciones compartidas entre el dashboard y el detalle de curso

const STORAGE_PREFIX = "prodmusical:";

function storageKey(courseId) {
  return `${STORAGE_PREFIX}${courseId}`;
}

// Lee el progreso guardado de un curso: { checked: [bool, bool, ...], notes: "" }
function getCourseState(course) {
  const raw = localStorage.getItem(storageKey(course.id));
  if (!raw) {
    return { checked: course.checklist.map(() => false), notes: "" };
  }
  try {
    const parsed = JSON.parse(raw);
    // Si el checklist creció desde la última visita, rellena con false
    const checked = course.checklist.map((_, i) => Boolean(parsed.checked && parsed.checked[i]));
    return { checked, notes: parsed.notes || "" };
  } catch (e) {
    return { checked: course.checklist.map(() => false), notes: "" };
  }
}

function saveCourseState(courseId, state) {
  localStorage.setItem(storageKey(courseId), JSON.stringify(state));
}

function progressOf(course) {
  const state = getCourseState(course);
  const total = state.checked.length || 1;
  const done = state.checked.filter(Boolean).length;
  return { done, total, pct: Math.round((done / total) * 100) };
}

function overallProgress() {
  let done = 0;
  let total = 0;
  COURSES.forEach((c) => {
    const p = progressOf(c);
    done += p.done;
    total += p.total;
  });
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

// Medidor VU segmentado — el elemento firma del sitio.
// segments: cuántos bloques mostrar. pct: 0-100.
function renderVU(pct, segments = 12) {
  const on = Math.round((pct / 100) * segments);
  let html = "";
  for (let i = 0; i < segments; i++) {
    const isOn = i < on;
    const isFull = isOn && i >= Math.round(segments * 0.83); // últimos segmentos en teal
    html += `<span class="vu-seg ${isOn ? "on" : ""} ${isFull ? "full" : ""}"></span>`;
  }
  return `<div class="vu" role="img" aria-label="${pct}% completado">${html}</div>`;
}

// Genera una forma de onda determinista (misma semilla = mismo dibujo)
// a partir del id del curso, coloreada según su hue.
function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return function () {
    h = (h * 9301 + 49297) % 233280;
    return h / 233280;
  };
}

function renderWaveformBanner(course) {
  const rand = seededRandom(course.id);
  const bars = 48;
  const w = 480;
  const h = 96;
  const barW = w / bars;
  let bars_svg = "";
  for (let i = 0; i < bars; i++) {
    const amp = 0.15 + rand() * 0.85;
    const barH = amp * (h * 0.7);
    const x = i * barW;
    const y = (h - barH) / 2;
    const opacity = 0.35 + amp * 0.5;
    bars_svg += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${(barW * 0.55).toFixed(1)}" height="${barH.toFixed(1)}" rx="1.5" fill="hsl(${course.hue}, 70%, 62%)" opacity="${opacity.toFixed(2)}" />`;
  }
  return `
    <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="${w}" height="${h}" fill="hsl(${course.hue}, 35%, 12%)" />
      ${bars_svg}
    </svg>
  `;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
