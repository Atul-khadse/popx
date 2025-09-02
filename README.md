# React XD Qualifier
Pixel-perfect, mobile-first React app centered on the page. Built with **Vite + React + Tailwind**, animated with **Framer Motion**, and routed with **React Router**.

## Features
- Mobile app interface fixed to 375x812 (iPhone X) and **centered** on desktop.
- **Multiple pages**: Welcome, Login, Signup, Home, Details, Profile.
- **Seamless navigation** via bottom nav and links.
- Clean, production-ready structure with Tailwind and Vite.
- Easy deploy to **Vercel** / **Netlify**.

## Quickstart
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (Vercel)
1. Push repo to GitHub.
2. On Vercel: **New Project** → Import your repo → Framework: `Vite` (auto-detected).
3. Build command: `npm run build` • Output: `dist/`.
4. Deploy.

## Pixel Tweaks
- Device size is controlled by CSS vars in `src/index.css` (`--device-w`, `--device-h`).
- Update colors in `tailwind.config.js` under `theme.extend.colors.brand`.
- Replace placeholders in pages with assets from the XD (icons, images, text) to match exactly.
