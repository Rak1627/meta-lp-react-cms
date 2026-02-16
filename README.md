# meta-lp-1-react

Pixel-style React rebuild of the landing page:
`https://www.brandscalingbootcamp.com/meta-lp-1`

This project is a **single-page** React app (Vite + React JS) with custom CSS and embeds (ConverteAI video players + Typeform modal).

## Tech Stack
- React (JavaScript)
- Vite
- CSS (no Tailwind / no CSS-in-JS)
- Google Fonts (Syne / Inter / Space Grotesk)

## Getting Started
Prereqs: Node.js (recommended: 18+), npm.

```bash
npm install
npm run dev
```

Open: `http://127.0.0.1:5173/`

## Scripts
- `npm run dev` – start dev server (HMR)
- `npm run build` – production build to `dist/`
- `npm run preview` – preview the production build locally
- `npm run lint` – ESLint

## Project Structure
- `src/App.jsx` – page layout (all sections)
- `src/App.css` – page styling (section-by-section)
- `src/components/ConverteAiPlayers.jsx` – ConverteAI player wrappers
- `src/components/TypeformModal.jsx` – Typeform iframe modal
- `src/components/Countdown.jsx` – countdown widget (EARLYBIRD timer)
- `src/components/Icons.jsx` – inline SVG icon components
- `src/lib/ensureScript.js` – injects external scripts once

## Config / Key Values
Update these if the client changes dates/forms/videos:
- `src/App.jsx`
  - `TYPEFORM_GENERAL_ID`, `TYPEFORM_VIP_ID`
  - `EARLYBIRD_TARGET_ISO`
- `src/components/ConverteAiPlayers.jsx`
  - `CONVERTE_ACCOUNT_ID`
  - player IDs passed to `<ConverteAiV4Player playerId="..." />`

## Notes
- Many images are loaded from Framer CDN (`framerusercontent.com`) to match the original design quickly.
- Videos are embedded via ConverteAI and require network access to load player scripts.
- Buttons/sections use anchor links like `#pricing` (no router).
