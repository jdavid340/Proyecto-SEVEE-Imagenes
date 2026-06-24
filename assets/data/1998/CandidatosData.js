// ============================================================
// ARCHIVO: src/assets/data/1998/CandidatosData.js
// ============================================================

const imageModules = import.meta.glob('../../img/**/*.{png,jpg,jpeg,svg}', {
  eager: false
});

const img = (path) => {
  const fullPath = `../../img/${path}`;
  const loader = imageModules[fullPath];

  if (loader) {
    return async () => {
      const mod = await loader();
      return mod.default;
    };
  }

  console.warn(`⚠️ Imagen no encontrada en glob: ${path}`);
  return async () => "";
};

// ============================================================
// 1. LEYENDA DE COLORES
// ============================================================

export const dessertsData = [
  {
    porcentaje: "Nivel Bajo",
    p1: "#ffb3b3", // Rojo claro para zonas con pocos votos
  },
  {
    porcentaje: "Nivel Medio",
    p1: "#ff4d4d", // Rojo de intensidad media
  },
  {
    porcentaje: "Nivel Alto",
    p1: "#ff0000", // Rojo oscuro/puro oficial del PRE
  },
];

// ============================================================
// 2. DICCIONARIO DE CANDIDATOS
// ============================================================

export const candidatoData = [
  {
    partido: 1,
    nombre: "ÁLVARO NOBOA PONTÓN",
    url: img("imagenes_presidentes/1998/alvaro_noboa_pre_1998.png"),
    logo: img("logos_partidos_politicos/1998/pre_1998.png"),
    color: "#ff0000", 
    nombrePartido: "COMPLETAR", // este candidato pertenece al partido PRE
    json: "COMPLETAR",
  },
  {
    partido: 10,
    nombre: "EMPATE",
    url: "",
    logo: "",
    color: "#808080", // Gris para empates (ESTO ES OBLIGATORIO)
    nombrePartido: "EMPATE",
    json: "EMPATE",
  }
];
