# Robusto — landing para Quantum III

Sitio del equipo postulante a **Quantum III – Logistic Innovation Lab** (Vía B), hecho en
Astro. El nombre es provisional: se cambia en `src/data/site.ts`, junto con el equipo, el
estado de la postulación y los números del caso LMS.

```
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check
npm run build    # sitio estático en dist/
```

## Dónde está cada cosa

- `src/data/site.ts`: empresa, programa (`status`: "Postulantes" hasta la selección), equipo y cifras del LMS.
- `src/data/guia.ts`: pasos de la guía para clientes. El PDF se compila aparte (LaTeX) y se copia a `public/guia-clientes.pdf`.
- `src/assets/`: fotos del hero y de las demos (Wikimedia Commons, CC BY-SA 4.0; el crédito va en la página).
- Páginas: `/` (landing), `/demos`, `/metodo`, `/unete` (postulaciones).

## Publicación

Cada push a `main` compila y publica el sitio en GitHub Pages
(`.github/workflows/deploy.yml`). Configuración única en GitHub:

1. **Settings → Pages → Source:** "GitHub Actions".
2. **Settings → Pages → Custom domain:** el subdominio de `site` en `astro.config.mjs`.
3. En el DNS del dominio, un registro `CNAME` de ese subdominio a `<usuario>.github.io`.
