export interface ColorEntry {
  id: string;
  nombre: string;
  hex: string;
  familia: "rojos" | "azules" | "verdes" | "amarillos" | "naranjas" | "violetas" | "neutros";
}

export const colorsData: ColorEntry[] = [
  // Rojos
  { id: "rojo-fuego", nombre: "Rojo Fuego", hex: "#E8001D", familia: "rojos" },
  { id: "rojo-vino", nombre: "Rojo Vino", hex: "#7B0D1E", familia: "rojos" },
  { id: "bordo", nombre: "Bordo", hex: "#5C0A1A", familia: "rojos" },
  { id: "rojo-carmesi", nombre: "Rojo Carmesí", hex: "#DC143C", familia: "rojos" },
  { id: "granate", nombre: "Granate", hex: "#800000", familia: "rojos" },
  
  // Azules
  { id: "azul-francia", nombre: "Azul Francia", hex: "#0033A0", familia: "azules" },
  { id: "azul-celeste", nombre: "Azul Celeste", hex: "#00AEEF", familia: "azules" },
  { id: "azul-marino", nombre: "Azul Marino", hex: "#001F5B", familia: "azules" },
  { id: "azul-royal", nombre: "Azul Royal", hex: "#4169E1", familia: "azules" },
  { id: "cian", nombre: "Cian", hex: "#00FFFF", familia: "azules" },
  
  // Verdes
  { id: "verde-esmeralda", nombre: "Verde Esmeralda", hex: "#50C878", familia: "verdes" },
  { id: "verde-lima", nombre: "Verde Lima", hex: "#32CD32", familia: "verdes" },
  { id: "verde-bosque", nombre: "Verde Bosque", hex: "#228B22", familia: "verdes" },
  { id: "verde-oliva", nombre: "Verde Oliva", hex: "#808000", familia: "verdes" },
  { id: "verde-agua", nombre: "Verde Agua", hex: "#66CDAA", familia: "verdes" },
  
  // Amarillos
  { id: "amarillo-oro", nombre: "Amarillo Oro", hex: "#FFD700", familia: "amarillos" },
  { id: "amarillo-limon", nombre: "Amarillo Limón", hex: "#FFF44F", familia: "amarillos" },
  { id: "amarillo-canario", nombre: "Amarillo Canario", hex: "#FFEF00", familia: "amarillos" },
  { id: "mostaza", nombre: "Mostaza", hex: "#FFDB58", familia: "amarillos" },
  
  // Naranjas
  { id: "naranja-intenso", nombre: "Naranja Intenso", hex: "#FF8C00", familia: "naranjas" },
  { id: "naranja-coral", nombre: "Naranja Coral", hex: "#FF7F50", familia: "naranjas" },
  { id: "mandarina", nombre: "Mandarina", hex: "#FFCC33", familia: "naranjas" },
  
  // Violetas
  { id: "violeta-real", nombre: "Violeta Real", hex: "#7851A9", familia: "violetas" },
  { id: "purpura", nombre: "Púrpura", hex: "#800080", familia: "violetas" },
  { id: "lavanda", nombre: "Lavanda", hex: "#E6E6FA", familia: "violetas" },
  
  // Neutros
  { id: "negro", nombre: "Negro", hex: "#0A0A0A", familia: "neutros" },
  { id: "blanco", nombre: "Blanco", hex: "#F5F5F5", familia: "neutros" },
  { id: "gris-plata", nombre: "Gris Plata", hex: "#A0A0A0", familia: "neutros" },
  { id: "gris-antracita", nombre: "Gris Antracita", hex: "#3A3A3A", familia: "neutros" },
  { id: "grafito", nombre: "Grafito", hex: "#4B4B4B", familia: "neutros" }
];
