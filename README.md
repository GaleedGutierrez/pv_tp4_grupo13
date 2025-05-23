# pv_tp4_grupo13

## 🚀 Descripción del Proyecto

Este proyecto es una aplicación web desarrollada como parte de la materia
Programación Visual. Su objetivo principal es permitir a los usuarios gestionar
una lista de productos, ofreciendo funcionalidades para agregar, visualizar y
editar o eliminar dichos productos. La interfaz de usuario está construida con
React y estilizada mediante CSS Modules junto con un sistema de estilos
personalizado y estructurado.

## Estructura de Carpetas

El proyecto está organizado en los siguientes directorios principales:

- `assignment/`: Contiene el documento oficial del TP
  (`Trabajo-Practico-4.pdf`).
- `public/`: Almacena activos estáticos que son servidos directamente por el
  servidor web, como `vite.svg`.
- `src/`: Es el corazón de la aplicación, conteniendo todo el código fuente.
  - `assets/`: Guarda activos estáticos utilizados dentro del código de la
    aplicación, como imágenes, fuentes e íconos.
  - `components/`: Contiene todos los componentes de React. Cada componente
    típicamente reside en su propia subcarpeta, incluyendo su archivo JSX
    (p.ej., `index.jsx`) y un Módulo CSS para el estilizado (p.ej.,
    `index.module.css`).
    - `InputForm/`: Un componente para manejar formularios de entrada.
    - `ProductForm/`: Un formulario para agregar o editar detalles de productos.
    - `ProductItem/`: Muestra un solo producto con su información.
    - `ProductList/`: Renderiza una lista de productos.
    - `ProductSectionHeader/`: Un componente de encabezado para las secciones de
      productos.
    - `SideBar/`: El componente de la barra lateral, que incluye un `SearchBar`
      y `SideBarHeader`.
    - `SideBar/SearchBar/`: Barra de búsqueda de productos por ID o descripción.
  - `models/`: Define estructuras de datos o modelos utilizados en la
    aplicación, como `Product.model.js`.
  - `styles/`: Contiene hojas de estilo globales y configuraciones de
    estilizado. Sigue un enfoque estructurado, organizando los estilos en:
    - `atoms/`: Bloques de construcción básicos de la interfaz de usuario
      (p.ej., `a-button.css`, `a-input.css`).
    - `elements/`: Estilizado para elementos HTML base.
    - `generic/`: Reseteos globales y normalizaciones.
    - `settings/`: Variables para colores, diseño, tipografía, etc.
    - `tools/`: Mixins y funciones para el estilizado.
    - `utilities/`: Clases de utilidad para diseño, tipografía, etc.
  - `utils/`: Incluye funciones de utilidad usadas a través de la aplicación,
    como `getPriceWithDiscount.js`.
  - `App.jsx`: El componente principal de la aplicación que orquesta otros
    componentes.
  - `App.module.css`: Módulos CSS específicos para el componente `App`.
  - `main.jsx`: El punto de entrada para la aplicación React, responsable de
    renderizar el componente raíz.
- Archivos del Directorio Raíz:
  - `index.html`: El archivo HTML principal que Vite usa para servir la
    aplicación.

## Tecnologías Utilizadas

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Una herramienta de compilación rápida y servidor de desarrollo para
  proyectos web modernos.
- **JavaScript (ES6+)**: El lenguaje de programación principal.
- **CSS Modules**: Para CSS con alcance local, previniendo conflictos de estilo
  entre componentes.

## Cómo Empezar

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/GaleedGutierrez/pv_tp4_grupo13.git
   cd pv_tp4_grupo13
   ```

2. **Instala las dependencias:**
   Asegúrate de tener Node.js y npm (o yarn/pnpm) instalados.

   Para cambiar a la versión especificada en el .nvmrc

   ```bash
    nvm use
   ```

   Para instalar la versión especificada si no la tienes instalada

   ```bash
    nvm install
   ```

   Instala las dependencias necesarias para el proyecto

   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

4. Abre tu navegador y navega a la URL proporcionada por Vite
   `http://localhost:5173`.

## 👥 Integrantes

- **[Alfredo Ezequiel Gonzalez Lopez](https://github.com/Ezequiel12354s)**
- **[Axel Enrique Galeed Gutierrez](https://github.com/GaleedGutierrez)**
- **[Enzo Isaías Condori](https://github.com/isaiahOZ)**
- **[Franklin Fernando Alexander Vazquez](https://github.com/VasquezFranklin)**
- **[Tomas Leandro Tastaca Gutierrez](https://github.com/TomasTastaca)**
