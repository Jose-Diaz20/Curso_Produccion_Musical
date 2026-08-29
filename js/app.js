// app.js — dashboard "Vista general de carrera"

function cardTemplate(course) {
  const p = progressOf(course);
  const doneBadge = p.pct === 100 ? `<span class="badge-done">Completado</span>` : "";
  return `
    <a class="card" href="course.html?id=${encodeURIComponent(course.id)}">
      <div class="card-banner">${renderWaveformBanner(course)}</div>
      <div class="card-body">
        <span class="card-code">${course.code}</span>
        <h3 class="card-title">${escapeHtml(course.title)}</h3>
        <div class="card-progress-row">
          ${renderVU(p.pct, 10)}
          <span class="card-progress-pct">${p.pct}%</span>
        </div>
        <div class="card-meta">${doneBadge || `${p.done}/${p.total} pasos · ${escapeHtml(course.duration)}`}</div>
      </div>
    </a>
  `;
}

function renderGrid(filterText) {
  const grid = document.getElementById("grid");
  const term = (filterText || "").trim().toLowerCase();
  const filtered = COURSES.filter((c) => {
    if (!term) return true;
    return (
      c.title.toLowerCase().includes(term) ||
      c.code.toLowerCase().includes(term) ||
      c.summary.toLowerCase().includes(term)
    );
  });
  grid.innerHTML = filtered.map(cardTemplate).join("");
}

function renderOverall() {
  const o = overallProgress();
  document.getElementById("overall-pct").textContent = `${o.pct}%`;
  document.getElementById("overall-vu").innerHTML = renderVU(o.pct, 24);
  document.getElementById("overall-steps").textContent = `${o.done}/${o.total} pasos completados en total`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderOverall();
  renderGrid("");

  const search = document.getElementById("search");
  search.addEventListener("input", (e) => renderGrid(e.target.value));
});
