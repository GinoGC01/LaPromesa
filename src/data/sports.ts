export interface Sport {
  id: string;
  nombre: string;
  descripcion: string;
  iconPath: string;
}

export const sports: Sport[] = [
  {
    id: "futbol",
    nombre: "FÚTBOL",
    descripcion: "Camisetas, shorts y arquero para escuelas y clubes con diseños profesionales.",
    iconPath: "soccer-ball"
  },
  {
    id: "hockey",
    nombre: "HOCKEY",
    descripcion: "Equipamiento técnico para jugadoras de alto rendimiento y ligas locales.",
    iconPath: "hockey-stick"
  },
  {
    id: "basquet",
    nombre: "BÁSQUET",
    descripcion: "Conjuntos de juego con materiales livianos y máximo confort en cancha.",
    iconPath: "basketball"
  },
  {
    id: "voley",
    nombre: "VÓLEY",
    descripcion: "Indumentaria técnica sublimada para equipos masculinos y femeninos.",
    iconPath: "volleyball"
  },
  {
    id: "rugby",
    nombre: "RUGBY",
    descripcion: "Prendas de alta resistencia preparadas para el contacto físico intenso.",
    iconPath: "rugby-ball"
  },
  {
    id: "handball",
    nombre: "HANDBALL",
    descripcion: "Diseños dinámicos y funcionales para la máxima movilidad del jugador.",
    iconPath: "handball"
  }
];
