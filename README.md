# Form Card - Formulario de Tarjeta de Crédito Interactivo

Formulario interactivo de detalles de tarjeta de crédito construido con React, TypeScript y Tailwind CSS. Parte de los desafíos de [Frontend Mentor](https://www.frontendmentor.io).

![Vista previa de escritorio](./src/assets/design/desktop-preview.jpg)

## Características

- Vista previa en vivo de la tarjeta que se actualiza al escribir
- Formateo del número de tarjeta (grupos de 4 dígitos)
- Visualización de fecha de expiración y CVC
- Diseño responsivo (móvil y escritorio)
- Transición de formulario a pantalla de confirmación

## Tecnologías

| Herramienta | Propósito |
|-------------|-----------|
| React 18 | Librería de UI |
| TypeScript | Seguridad de tipos |
| Vite | Herramienta de build |
| Tailwind CSS | Estilos |
| SWC | Compilación rápida |

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa del build de producción
npm run preview
```

## Estructura del proyecto

```
src/
├── main.tsx              # Punto de entrada
├── App.tsx               # Componente raíz y estado
├── App.css               # Estilos globales
├── index.css             # Estilos base de Tailwind
├── components/
│   ├── RenderForm.tsx    # Formulario con validación
│   ├── RenderCards.tsx   # Visualización de tarjeta en vivo
│   └── RenderComplete.tsx # Pantalla de éxito
└── assets/
    └── design/           # Archivos de referencia de diseño
```
