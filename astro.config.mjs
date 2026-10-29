// @ts-check
import { defineConfig } from 'astro/config';

// Publicado en GitHub Pages con dominio propio (ver .github/workflows/deploy.yml).
// Las páginas usan rutas absolutas ("/unete", "/demos"), así que el sitio debe servirse en
// la raíz de un dominio: con la URL por defecto usuario.github.io/<repo> habría que
// agregar `base` y ajustar esos enlaces.
export default defineConfig({
  site: 'https://jamelin.gitflow.cl',
  // La página de postulaciones se llamaba "Trabaja con nosotros"; los enlaces viejos siguen funcionando.
  redirects: {
    '/trabaja-con-nosotros': '/unete',
    // "Método" pasó a llamarse "Por dentro".
    '/metodo': '/por-dentro',
  },
});
