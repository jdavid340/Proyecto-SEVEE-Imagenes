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
  { porcentaje: "Nivel Bajo",  p4: "#f5c89a" },
  { porcentaje: "Nivel Medio", p4: "#f5900a" },
  { porcentaje: "Nivel Alto",  p4: "#c46a00" },
];

// ============================================================
// 2. DICCIONARIO DE CANDIDATOS
// ============================================================

export const candidatoData = [
  {
    partido: 4,
    nombre: "RODRIGO BORJA CEVALLOS",
    url: img("imagenes_presidentes/1998/candidato_004.png"),
    logo: img("logos_partidos_politicos/1998/ID_1998.png"),
    color: "#c46a00",
    nombrePartido: "COMPLETAR",//este candidato pertenece al partido ID
    json: "COMPLETAR",
  },
];
