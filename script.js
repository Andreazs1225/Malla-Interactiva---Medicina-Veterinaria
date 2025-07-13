/**********************
 *  Datos de la malla *
 **********************/
const cursos = [
  { id: "matematica_aplicada", nombre: "Matemática Aplicada", ciclo: 1, prereqs: [] },
  { id: "quimica_biofisica", nombre: "Química Biofísica", ciclo: 1, prereqs: [] },
  { id: "anatomia_animal_i", nombre: "Anatomía Animal I", ciclo: 1, prereqs: [] },
  { id: "intro_medicina_vet", nombre: "Introducción a la Medicina Veterinaria", ciclo: 1, prereqs: [] },
  { id: "embriologia_histologia", nombre: "Embriología e Histología Animal", ciclo: 1, prereqs: [] },
  { id: "expresion_oral", nombre: "Expresión Oral y Escrita", ciclo: 1, prereqs: [] },
  { id: "biologia_cel_mol", nombre: "Biología Celular y Molecular", ciclo: 1, prereqs: [] },
  { id: "anatomia_animal_ii", nombre: "Anatomía Animal II", ciclo: 2, prereqs: ["anatomia_animal_i"] },
  { id: "bioquimica_i", nombre: "Bioquímica I", ciclo: 2, prereqs: ["quimica_biofisica"] },
  { id: "practicas_i", nombre: "Prácticas Laborales I", ciclo: 2, prereqs: [] },
  { id: "metodologia_inv", nombre: "Metodología de la Investigación", ciclo: 2, prereqs: ["matematica_aplicada", "expresion_oral"] },
  { id: "ecologia_ambiente", nombre: "Ecología y Ambiente", ciclo: 2, prereqs: [] },
  { id: "derechos_humanos", nombre: "Derechos Humanos – Ciudadanía – Buen Vivir", ciclo: 2, prereqs: [] },
  // Agrega el resto de tus materias igual que esto...
];

/**********************
 *  Lógica principal  *
 **********************/
const mallaEl = document.getElementById("malla");
let aprobados = new Set(JSON.parse(localStorage.getItem("aprobados") || "[]"));

init();

function init() {
  const ciclos = {};
  cursos.forEach(c => {
    ciclos[c.ciclo] ??= [];
    ciclos[c.ciclo].push(c);
  });

  Object.keys(ciclos)
    .sort((a, b) => a - b)
    .forEach(num => renderCiclo(num, ciclos[num]));

  refrescarBloqueos();
}

function renderCiclo(numero, listaCursos) {
  const seccion = document.createElement("section");
  seccion.className = "ciclo";

  seccion.innerHTML = `
    <h2 class="ciclo__titulo">Ciclo ${numero}</h2>
    <div class="ciclo__grid" id="ciclo-${numero}"></div>
  `;

  const grid = seccion.querySelector(".ciclo__grid");

  listaCursos.forEach(curso => {
    const card = document.createElement("div");
    card.className = "curso";
    card.dataset.id = curso.id;

    card.innerHTML = `
      <span class="curso__nombre">${curso.nombre}</span>
    `;

    // Click para aprobar/desaprobar
    card.addEventListener("click", () => {
      if (card.classList.contains("bloqueado")) return;
      toggleAprobacion(curso.id);
    });

    grid.appendChild(card);
  });

  mallaEl.appendChild(seccion);
}

function toggleAprobacion(id) {
  if (aprobados.has(id)) {
    desaprobarCurso(id);
  } else {
    aprobarCurso(id);
  }
  guardarProgreso();
}

function aprobarCurso(id) {
  aprobados.add(id);
  const card = document.querySelector(`[data-id="${id}"]`);
  card.classList.add("aprobado");
  refrescarBloqueos();
}

function desaprobarCurso(id) {
  aprobados.delete(id);
  const card = document.querySelector(`[data-id="${id}"]`);
  card.classList.remove("aprobado");
  refrescarBloqueos();
}

function refrescarBloqueos() {
  cursos.forEach(curso => {
    const card = document.querySelector(`[data-id="${curso.id}"]`);
    const desbloqueado = curso.prereqs.every(p => aprobados.has(p));
    const aprobado = aprobados.has(curso.id);
    card.classList.toggle("bloqueado", !desbloqueado && !aprobado);
  });
}

function guardarProgreso() {
  localStorage.setItem("aprobados", JSON.stringify(Array.from(aprobados)));
}
