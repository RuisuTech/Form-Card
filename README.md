# Form Card - Interactive Credit Card Form

Interactive credit card details form built with React, TypeScript, and Tailwind CSS. Part of the [Frontend Mentor](https://www.frontendmentor.io) challenges.

![Desktop Preview](./src/assets/design/desktop-preview.jpg)

## Features

- Live credit card preview that updates as you type
- Card number formatting (groups of 4 digits)
- Expiry date and CVC display
- Responsive design (mobile & desktop)
- Form → Confirmation screen transition

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI library |
| TypeScript | Type safety |
| Vite | Build tool |
| Tailwind CSS | Styling |
| SWC | Fast compilation |

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Root component & state
├── App.css               # Global styles
├── index.css             # Tailwind base styles
├── components/
│   ├── RenderForm.tsx    # Input form with validation
│   ├── RenderCards.tsx   # Live card display
│   └── RenderComplete.tsx # Success screen
└── assets/
    └── design/           # Design reference files
```
