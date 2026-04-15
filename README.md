# La Promesa Deportes — Indumentaria de Alta Gama

Sitio web profesional para **La Promesa Deportes**, empresa familiar dedicada a la confección de indumentaria deportiva personalizada desde 2015.

## 🚀 Stack Tecnológico
- **Framework**: [Astro](https://astro.build/) (Static Output)
- **UI library**: [React 19](https://react.dev/) (para el sistema de galería interactiva)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fuentes**: Anton (Display), Barlow Condensed (Titles), Inter (Body)
- **Efectos**: 3D Flip Cards y Tipografía en Capas (Z-Layering)

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
- **`hero`**: Configuración del efecto de tipografía en capas (`tituloFondo` y `tituloPrimerPlano`).
- **`trustBar`**: Las métricas que aparecen en la barra roja (ej: "+500 conjuntos").
- **`nosotros`**: La historia de la empresa y los perfiles del equipo.
- **`seo`**: Títulos y descripciones para motores de búsqueda de cada página.

### WhatsApp Inteligente
No es necesario cambiar el número en cada botón. Al actualizar el campo `whatsapp` y `whatsappMensaje` en el `config.json`, todos los botones del sitio se actualizan automáticamente gracias al helper `src/utils/whatsapp.ts`.

## 📁 Estructura del Proyecto

- `src/content/designs/`: Archivos JSON que alimentan la galería.
- `src/data/`: Datos estáticos (colores, deportes, testimonios).
- `src/components/`:
  - `layout/`: Navbar (con logo dinámico), Footer y Layout base.
  - `ui/`: Componentes atómicos (Button, Badge, StatCard).
  - `gallery/`: Sistema React de filtrado, modal y **Cards 3D**.
  - `home/`: Secciones con efectos premium (Hero layering, TrustBar).
- `src/pages/`: Rutas del sitio (Inicio, Galería, Nosotros, etc.).

## 📝 Guía de Edición

### Agregar nuevos diseños (Efecto Frente/Dorso)
Para sumar un diseño a la galería, creá un nuevo archivo `.json` en `src/content/designs/`. El sistema soporta previsualización 3D, por lo que necesitás dos imágenes:
```json
{
  "id": "diseno-nuevo",
  "nombre": "Nombre del modelo",
  "imagen_front": "/images/designs/nombre_front.webp",
  "imagen_back": "/images/designs/nombre_back.webp",
  "deporte": "Fútbol",
  "division": "Masculino",
  "colores": ["rojo", "negro"],
  "tipo": "Conjunto Competencia",
  "descripcion": "Descripción detallada.",
  "destacado": true
}
```

### Cambiar el número de WhatsApp
Simplemente actualizá el campo `whatsapp` en `src/data/config.json`. El formato debe ser internacional (ej: `5491122334455`).

### Conectar Formulario de Contacto
El formulario en `src/pages/contacto.astro` ya está preparado para Formspree. Solo debés actualizar el campo `actionUrl` en el bloque `formspree` de `config.json` con tu ID de formulario.

---
*Desarrollado para La Promesa Deportes — Tu equipo. Tu identidad.*
