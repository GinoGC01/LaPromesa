# La Promesa Deportes — Indumentaria de Alta Gama

Sitio web profesional para **La Promesa Deportes**, empresa familiar dedicada a la confección de indumentaria deportiva personalizada desde 2015.

## 🚀 Stack Tecnológico
- **Framework**: [Astro](https://astro.build/) (Static Output)
- **UI library**: [React 19](https://react.dev/) (para el sistema de galería filtrable)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fuentes**: Anton (Display), Barlow Condensed (Titles), Inter (Body)
- **Iconografía**: Custom SVGs

## 🛠️ Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Entorno de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

## ⚙️ Gestión de Contenido Centralizada

Este proyecto utiliza un sistema de **Fuente Única de Verdad**. Todo el contenido editable del sitio (textos, datos de contacto, redes sociales, métricas y configuración de SEO) se gestiona desde un solo archivo:

📍 `src/data/config.json`

### Campos principales para el cliente:
- **`empresa`**: Nombre y datos básicos de la marca.
- **`contacto`**: Número de WhatsApp, Email y Dirección.
- **`hero`**: Todos los textos y la imagen de fondo de la sección principal.
- **`trustBar`**: Las 4 métricas que aparecen en la barra roja (ej: "+500 conjuntos").
- **`nosotros`**: La historia de la empresa y los perfiles del equipo.
- **`seo`**: Títulos y descripciones para motores de búsqueda de cada página.

### WhatsApp Inteligente
No es necesario cambiar el número en cada botón. Al actualizar el campo `whatsapp` y `whatsappMensaje` en el `config.json`, todos los botones del sitio se actualizan automáticamente gracias al helper `src/utils/whatsapp.ts`.

## 📁 Estructura del Proyecto

- `src/content/designs/`: Archivos JSON que alimentan la galería.
- `src/data/`: Datos estáticos (colores, deportes, testimonios).
- `src/components/`:
  - `layout/`: Navbar, Footer y Layout base.
  - `ui/`: Componentes atómicos (Button, Badge, StatCard).
  - `gallery/`: Sistema React de filtrado y modal.
  - `home/`: Secciones específicas del inicio.
- `src/pages/`: Rutas del sitio (Inicio, Galería, Nosotros, etc.).

## 📝 Guía de Edición

### Agregar nuevos diseños
Para sumar un diseño a la galería, creá un nuevo archivo `.json` en `src/content/designs/` siguiendo esta estructura:
```json
{
  "id": "diseno-011",
  "nombre": "Nombre del modelo",
  "imagen": "/images/designs/011.webp",
  "imagenes_extra": ["/images/designs/011-a.webp"],
  "deporte": "futbol",
  "division": "primera",
  "colores": ["rojo-fuego", "negro"],
  "tipo": "camiseta",
  "descripcion": "Descripción breve del producto.",
  "destacado": false
}
```

### Cambiar el número de WhatsApp
Buscá la cadena `wa.me` en todo el proyecto. Los componentes principales son `src/components/contact/WhatsAppCTA.astro` y `src/components/layout/Footer.astro`.

### Conectar Formulario (Formspree)
En `src/pages/contacto.astro`, agregá el atributo `action="https://formspree.io/f/TU_ID"` y `method="POST"` a la etiqueta `<form>`. Asegurate de que cada input tenga el atributo `name`.

## ⏳ Pendientes
- [ ] Reemplazar imágenes placeholder por fotos reales de productos.
- [ ] Cargar catálogo completo de diseños (actualmente 10 de muestra).
- [ ] Verificar SEO final una vez definido el dominio definitivo.

---
*Desarrollado con pasión para deportistas.*
