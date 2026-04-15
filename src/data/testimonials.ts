export interface Testimonial {
  id: string;
  texto: string;
  nombre: string;
  club: string;
  foto: string;
  destacado: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-01",
    texto: "Desde que empezamos a trabajar con La Promesa, la identidad de nuestro club cambió por completo. La calidad de las telas es excepcional, especialmente para el nivel de competencia que manejamos en la primera división. Lo que más nos sorprendió fue la rapidez de entrega; en menos de 15 días ya teníamos todo el equipamiento listo para el torneo. Un servicio de primer nivel.",
    nombre: "Julián Martínez",
    club: "Club Atlético San Lorenzo",
    foto: "/images/testimonials/persona-01.webp",
    destacado: true
  },
  {
    id: "testimonial-02",
    texto: "La atención personalizada y el asesoramiento en el diseño fueron fundamentales para nosotros. Necesitábamos algo moderno que respetara los colores históricos del club y lograron un resultado increíble. La suavidad de las prendas y su durabilidad ante los lavados frecuentes nos convencieron de que son el mejor proveedor de la zona. Realmente estamos muy conformes con la rapidez y calidad del servicio.",
    nombre: "Mariana Rodríguez",
    club: "Hockey Municipal",
    foto: "/images/testimonials/persona-02.webp",
    destacado: true
  },
  {
    id: "testimonial-03",
    texto: "Para nuestra escuela de básquet buscábamos comodidad y estilo, y La Promesa superó todas las expectativas. Los chicos están encantados con los nuevos conjuntos. Se nota el compromiso con la excelencia en cada costura y detalle del sublimado. Además, cumplir con los plazos de entrega en temporada alta es algo que pocos hacen, y ellos lo lograron sin problemas. Excelente experiencia de compra.",
    nombre: "Carlos Gómez",
    club: "Titanes del Básquet",
    foto: "/images/testimonials/persona-03.webp",
    destacado: true
  },
  {
    id: "testimonial-04",
    texto: "Trabajamos con varios proveedores antes, pero ninguno tuvo la eficiencia de este equipo. Necesitábamos renovar las camisetas de voley para un torneo nacional urgente y cumplieron en tiempo récord. La calidad de impresión es impecable, los colores son vibrantes y no se degradan con el uso intensivo. El trato humano y la profesionalidad que demuestran nos hicieron elegirlos como socios estratégicos para el futuro.",
    nombre: "Sofía López",
    club: "Voley Club Norte",
    foto: "/images/testimonials/persona-04.webp",
    destacado: true
  },
  {
    id: "testimonial-05",
    texto: "El rugby exige indumentaria que aguante el máximo rigor físico, y estas prendas han demostrado estar a la altura del desafío. Son resistentes, cómodas y mantienen su forma después de cada partido embarrado. La logística de entrega fue perfecta, coordinaron todo para que llegara antes del inicio de la liga. Es un alivio contar con un proveedor que entienda las necesidades de alto rendimiento deportivo.",
    nombre: "Hernán Díaz",
    club: "Rugby XV",
    foto: "/images/testimonials/persona-05.webp",
    destacado: false
  },
  {
    id: "testimonial-06",
    texto: "Completamos todo el equipamiento de handball con ellos y no podríamos estar más felices. El diseño es innovador y la tela permite una transpirabilidad excelente durante el juego. Es fundamental para nosotros que los tiempos de entrega se respeten, y en La Promesa la rapidez es una de sus mayores virtudes. La relación precio-calidad es insuperable en el mercado actual. Seguiremos confiando en su trabajo siempre.",
    nombre: "Lucía Pérez",
    club: "Asociación Handball",
    foto: "/images/testimonials/persona-06.webp",
    destacado: false
  }
];
