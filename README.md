# NextCARD - Tarjeta de Crédito Personalizable

Formulario interactivo de tarjeta de crédito con diseño personalizable. Sube tu propia imagen y los colores se adaptan automáticamente.

## Características

- Vista previa en vivo de la tarjeta que se actualiza al escribir
- **Sube tu imagen personalizada**: Waifu, paisaje, abstracto, lo que quieras
- **Colores adaptativos**: El fondo del formulario y la UI cambian según el color dominante de tu imagen
- **Contraste automático**: Los textos cambian entre claro/oscuro según el fondo para mantener legibilidad
- **Fondo difuminado**: Efecto blur + overlay oscuro en el fondo de las tarjetas
- Formateo del número de tarjeta (grupos de 4 dígitos)
- Visualización de fecha de expiración y CVC
- Diseño responsivo (móvil y escritorio)
- Transición de formulario a pantalla de confirmación
- Todos los textos en español

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
│   ├── RenderComplete.tsx # Pantalla de éxito
│   └── Customize.tsx     # Panel de personalización de imagen
├── hooks/
│   └── useDominantColor.ts # Hook para extraer color dominante
└── assets/
    └── design/           # Archivos de referencia de diseño
```
