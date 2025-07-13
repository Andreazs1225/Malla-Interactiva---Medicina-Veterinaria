/**********************
 *  Datos de la malla *
 **********************/
const cursos = [
  // ---- Primer ciclo ----
  { id: "matematica_aplicada",  nombre: "Matemática Aplicada",                       ciclo: 1, prereqs: [] },
  { id: "quimica_biofisica",    nombre: "Química Biofísica",                        ciclo: 1, prereqs: [] },
  { id: "anatomia_animal_i",    nombre: "Anatomía Animal I",                        ciclo: 1, prereqs: [] },
  { id: "intro_medicina_vet",   nombre: "Introducción a la Medicina Veterinaria",   ciclo: 1, prereqs: [] },
  { id: "embriologia_histologia",nombre:"Embriología e Histología Animal",          ciclo: 1, prereqs: [] },
  { id: "expresion_oral",       nombre: "Expresión Oral y Escrita",                 ciclo: 1, prereqs: [] },
  { id: "biologia_cel_mol",     nombre: "Biología Celular y Molecular",             ciclo: 1, prereqs: [] },

  // ---- Segundo ciclo ----
  { id: "anatomia_animal_ii",   nombre: "Anatomía Animal II",                       ciclo: 2, prereqs: ["anatomia_animal_i"] },
  { id: "bioquimica_i",         nombre: "Bioquímica I",                             ciclo: 2, prereqs: ["quimica_biofisica"] },
  { id: "practicas_i",          nombre: "Prácticas Laborales I",                    ciclo: 2, prereqs: [] },
  { id: "metodologia_inv",      nombre: "Metodología de la Investigación",          ciclo: 2, prereqs: ["matematica_aplicada", "expresion_oral"] },
  { id: "ecologia_ambiente",    nombre: "Ecología y Ambiente",                      ciclo: 2, prereqs: [] },
  { id: "derechos_humanos",     nombre: "Derechos Humanos – Ciudadanía – Buen Vivir",ciclo: 2, prereqs: [] },

  // ---- Tercer ciclo ----
  { id: "microbiologia",        nombre: "Microbiología",                            ciclo: 3, prereqs: ["bioquimica_i"] },
  { id: "bioquimica_ii",        nombre: "Bioquímica II",                            ciclo: 3, prereqs: ["bioquimica_i"] },
  { id: "fisiologia_i",         nombre: "Fisiología Animal I",                      ciclo: 3, prereqs: ["anatomia_animal_ii"] },
  { id: "etologia_bienestar",   nombre: "Etología y Bienestar Animal",              ciclo: 3, prereqs: [] },
  { id: "bioestadistica",       nombre: "Bioestadística",                           ciclo: 3, prereqs: ["metodologia_inv"] },
  { id: "pastos_forrajes",      nombre: "Pastos y Forrajes",                        ciclo: 3, prereqs: ["ecologia_ambiente"] },

  // ---- Cuarto ciclo ----
  { id: "fisiologia_ii",        nombre: "Fisiología Animal II",                     ciclo: 4, prereqs: ["fisiologia_i"] },
  { id: "inmunologia",          nombre: "Inmunología",                              ciclo: 4, prereqs: ["bioquimica_ii"] },
  { id: "genetica_mejoramiento",nombre: "Genética y Mejoramiento Animal",           ciclo: 4, prereqs: ["embriologia_histologia", "biologia_cel_mol", "fisiologia_i"] },
  { id: "nutricion_animal",     nombre: "Nutrición Animal",                         ciclo: 4, prereqs: ["bioquimica_ii", "pastos_forrajes"] },
  { id: "equinos",              nombre: "Equinos",                                  ciclo: 4, prereqs: [] },
  { id: "analisis_diseno_exp",  nombre: "Análisis y Diseño de Experimentos",        ciclo: 4, prereqs: ["bioestadistica"] },

  // ---- Quinto ciclo ----
  { id: "bioetica_legislacion", nombre: "Bioética y Legislación Agropecuaria",      ciclo: 5, prereqs: ["etologia_bienestar"] },
  { id: "propedeutica_zootec",  nombre: "Proped. y Semiología Anim. Interés Zoot.", ciclo: 5, prereqs: ["fisiologia_ii"] },
  { id: "fisiopatologia",       nombre: "Fisiopatología",                           ciclo: 5, prereqs: ["fisiologia_ii"] },
  { id: "farmaco_tox_i",        nombre: "Farmacología y Toxicología I",             ciclo: 5, prereqs: ["bioquimica_ii"] },
  { id: "porcinos",             nombre: "Porcinos",                                 ciclo: 5, prereqs: ["etologia_bienestar", "ecologia_ambiente"] },
  { id: "practicas_ii",         nombre: "Prácticas Laborales II",                   ciclo: 5, prereqs: ["practicas_i"] },
  { id: "caviacultura",         nombre: "Caviacultura",                             ciclo: 5, prereqs: ["biologia_cel_mol"] },

  // ---- Sexto ciclo ----
  { id: "parasitologia",        nombre: "Parasitología y Enfermedades Parasitarias",ciclo: 6, prereqs: ["inmunologia", "propedeutica_zootec", "farmaco_tox_i"] },
  { id: "propedeutica_comp",    nombre: "Proped. y Semiología Anim. Compañía",      ciclo: 6, prereqs: ["propedeutica_zootec"] },
  { id: "anestesiologia",       nombre: "Itin. 2 – Anestesiología",                ciclo: 6, prereqs: [] },
  { id: "patologia",            nombre: "Patología",                                ciclo: 6, prereqs: ["fisiopatologia"] },
  { id: "enf_infecciosas_i",    nombre: "Enfermedades Infecciosas I",               ciclo: 6, prereqs: ["bioquimica_ii", "farmaco_tox_i"] },
  { id: "farmaco_tox_ii",       nombre: "Farmacología y Toxicología II",            ciclo: 6, prereqs: ["farmaco_tox_i"] },

  // ---- Séptimo ciclo ----
  { id: "bovinos",              nombre: "Bovinos",                                  ciclo: 7, prereqs: ["nutricion_animal"] },
  { id: "enf_infecciosas_ii",   nombre: "Enfermedades Infecciosas II",              ciclo: 7, prereqs: ["parasitologia", "enf_infecciosas_i"] },
  { id: "reproduccion_animal",  nombre: "Reproducción Animal",                      ciclo: 7, prereqs: ["genetica_mejoramiento", "farmaco_tox_ii"] },
  { id: "diagnostico_imagen",   nombre: "Diagnóstico por Imagen",                   ciclo: 7, prereqs: ["propedeutica_comp"] },
  { id: "practicas_iii",        nombre: "Prácticas Laborales III",                  ciclo: 7, prereqs: ["practicas_ii"] },
  { id: "patologia_clinica",    nombre: "Patología Clínica",                        ciclo: 7, prereqs: ["patologia"] },

  // ---- Octavo ciclo ----
  { id: "fauna_silvestre",      nombre: "Fauna Silvestre",                          ciclo: 8, prereqs: ["etologia_bienestar", "ecologia_ambiente"] },
  { id: "prod_pat_aviar",       nombre: "Producción y Patología Aviar",             ciclo: 8, prereqs: ["patologia_clinica"] },
  { id: "calidad_prod_pecu",    nombre: "Calidad de la Producción Pecuaria",        ciclo: 8, prereqs: ["bioetica_legislacion", "parasitologia", "enf_infecciosas_ii"] },
  { id: "cirugia_i",            nombre: "Cirugía I",                                ciclo: 8, prereqs: ["diagnostico_imagen"] },
  { id: "med_int_comp",         nombre: "Medicina Interna Anim. Compañía",          ciclo: 8, prereqs: ["propedeutica_comp"] },
  { id: "proyectos_pecuarios",  nombre: "Proyectos Pecuarios",                      ciclo: 8, prereqs: ["analisis_diseno_exp"] },
  { id: "diseno_anteproy",      nombre: "Diseño de Anteproyectos",                  ciclo: 8, prereqs: ["analisis_diseno_exp"] },

  // ---- Noveno ciclo ----
  { id: "epidemiologia_salud",  nombre: "Epidemiología y Salud Pública",            ciclo: 9, prereqs: ["bioetica_legislacion"] },
  { id: "cirugia_ii",           nombre: "Cirugía II",                               ciclo: 9, prereqs: ["cirugia_i"] },
  { id: "med_int_zootec",       nombre: "Medicina Interna Anim. Interés Zoot.",     ciclo: 9, prereqs: ["propedeutica_zootec", "farmaco_tox_ii"] },
  { id: "med_int_comp_ii",      nombre: "Itin. 2 – Med. Interna Comp. II",          ciclo: 9, prereqs: ["anestesiologia"] },
  { id: "servicio_comunitario", nombre: "Prácticas de Servicio Comunitario",        ciclo: 9, prereqs: [] },
  { id: "dtic_i",               nombre: "Trab. Integración Curricular I",           ciclo: 9, prereqs: ["diseno_anteproy"] },

  // ---- Décimo ciclo ----
  { id: "traumatologia",        nombre: "Itin. 2 – Traumatología",                  ciclo: 10, prereqs: ["med_int_comp_ii"] },
  { id: "practicas_iv",         nombre: "Prácticas Laborales IV",                   ciclo: 10, prereqs: ["practicas_iii"] },
  { id: "extension_rural",      nombre: "Extensión Rural",                          ciclo: 10, prereqs: [] },
  { id: "dtic_ii",              nombre: "Trab. Integración Curricular II",          ciclo: 10, prereqs: ["dtic_i"] },
  { id: "emprendimiento_pecu",  nombre: "Emprendim. y Gestión Emp. Pecuaria",       ciclo: 10, prereqs: ["proyectos_pecuarios"] },
];

/**********************
 *  Lógica principal  *
 **********************/
const mallaEl = document.getElementById("malla");
const aprobados = new Set(); // IDs de cursos aprobados

init();

function init() {
  // 1. Agrupar cursos por ciclo
  const ciclos = {};
  cursos.forEach(c => {
    ciclos[c.ciclo] ??= [];
    ciclos[c.ciclo].push(c);
  });

  // 2. Renderizar cada ciclo + sus cursos
  Object.keys(ciclos)
    .sort((a, b) => a - b)
    .forEach(num => renderCiclo(num, ciclos[num]));

  // 3. Después del primer render, verificar bloqueos
  refrescarBloqueos();
}

function renderCiclo(numero, listaCursos) {
  const seccion = document.createElement("section");
  seccion.className = "ciclo";

  seccion.innerHTML = `
    <h2 class="ciclo__titulo">Ciclo ${numero}</h2>
    <div class="ciclo__grid" id="ciclo-${numero}"></div>
  `;

  const grid = seccion.querySelector(".ciclo__grid");

  listaCursos.forEach(curso => {
    const card = document.createElement("div");
    card.className = "curso";
    card.dataset.id = curso.id;

    card.innerHTML = `
      <span class="curso__nombre">${curso.nombre}</span>
      <input type="number" min="0" max="100" placeholder="Nota (≥60)" disabled />
    `;

    // Click para aprobar/desaprobar manualmente
    card.addEventListener("click", e => {
      // Evitar que el click en el <input> dispare el toggle
      if (e.target.tagName === "INPUT") return;
      if (card.classList.contains("bloqueado")) return;
      toggleAprobacion(curso.id);
    });

    // Evento al escribir nota
    const input = card.querySelector("input");
    input.addEventListener("input", () => {
      const val = Number(input.value);
      if (val >= 60) {
        aprobarCurso(curso.id);
      } else {
        desaprobarCurso(curso.id);
      }
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
}

function aprobarCurso(id) {
  aprobados.add(id);
  const card = document.querySelector(`[data-id="${id}"]`);
  card.classList.add("aprobado");
  card.querySelector("input").disabled = false;
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
    card.classList.toggle("bloqueado", !desbloqueado && !aprobados.has(curso.id));
    card.querySelector("input").disabled = !desbloqueado;
  });
}
