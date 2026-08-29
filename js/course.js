// course.js — página de detalle de un curso individual

function getCourseIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderCourse() {
  const id = getCourseIdFromUrl();
  const course = COURSES.find((c) => c.id === id);
  const root = document.getElementById("course-root");

  if (!course) {
    root.innerHTML = `
      <div class="course-head">
        <h1>Curso no encontrado</h1>
        <p class="lead">No existe ningún curso con el identificador "${escapeHtml(id || "")}". Vuelve a la vista general de la carrera.</p>
      </div>
    `;
    return;
  }

  document.title = `${course.title} · Producción Musical`;

  const state = getCourseState(course);
  const p = progressOf(course);

  root.innerHTML = `
    <div class="course-head">
      <span class="card-code">${course.code}</span>
      <h1>${escapeHtml(course.title)}</h1>
      <p class="lead">${escapeHtml(course.summary)}</p>
      <div class="course-meta-row">
        <div class="meta-item">
          <span class="k">Duración estimada</span>
          <span class="v">${escapeHtml(course.duration)}</span>
        </div>
        <div class="meta-item">
          <span class="k">Progreso</span>
          <span class="v" id="progress-meta">${p.done}/${p.total} pasos (${p.pct}%)</span>
        </div>
        <div class="meta-item" style="flex:1; min-width:180px;">
          <span class="k">&nbsp;</span>
          <div id="course-vu">${renderVU(p.pct, 20)}</div>
        </div>
      </div>
    </div>

    <div class="two-col">
      <div>
        <h2 class="section-title">Checklist de avance</h2>
        <ul class="checklist" id="checklist">
          ${course.checklist
            .map(
              (item, i) => `
            <li class="${state.checked[i] ? "done" : ""}" data-index="${i}">
              <label>
                <input type="checkbox" ${state.checked[i] ? "checked" : ""} data-index="${i}" />
                <span>${escapeHtml(item)}</span>
              </label>
            </li>
          `
            )
            .join("")}
        </ul>

        <h2 class="section-title">Recursos recomendados</h2>
        <ul class="resource-list">
          ${course.resources
            .map(
              (r) => `
            <li><a href="${r.url}" target="_blank" rel="noopener">${escapeHtml(r.label)}</a></li>
          `
            )
            .join("")}
        </ul>
      </div>

      <div>
        <h2 class="section-title">Notas técnicas</h2>
        <div class="notes-box">
          <textarea id="notes" placeholder="Apunta aquí lo importante de este curso: atajos, ajustes que funcionaron, cosas que no se te pueden olvidar en uso diario...">${escapeHtml(state.notes)}</textarea>
          <div class="notes-save-state" id="notes-state">Guardado</div>
        </div>
      </div>
    </div>
  `;

  // Checklist interactions
  document.querySelectorAll('#checklist input[type="checkbox"]').forEach((box) => {
    box.addEventListener("change", (e) => {
      const idx = Number(e.target.dataset.index);
      const current = getCourseState(course);
      current.checked[idx] = e.target.checked;
      saveCourseState(course.id, current);

      const li = e.target.closest("li");
      li.classList.toggle("done", e.target.checked);

      const newP = progressOf(course);
      document.getElementById("course-vu").innerHTML = renderVU(newP.pct, 20);
      document.getElementById("progress-meta").textContent = `${newP.done}/${newP.total} pasos (${newP.pct}%)`;
    });
  });

  // Notes autosave (debounced)
  const notesEl = document.getElementById("notes");
  const notesState = document.getElementById("notes-state");
  let saveTimeout = null;
  notesEl.addEventListener("input", () => {
    notesState.textContent = "Escribiendo...";
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      const current = getCourseState(course);
      current.notes = notesEl.value;
      saveCourseState(course.id, current);
      notesState.textContent = "Guardado";
    }, 500);
  });
}

document.addEventListener("DOMContentLoaded", renderCourse);
