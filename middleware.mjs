// middleware.mjs
//
// Para proyectos ESTATICOS (HTML/CSS/JS, NO Next.js) en Vercel, como
// GlobalAcer. Redirige (301, permanente) CUALQUIER URL antigua del
// sitio anterior a la home del proyecto nuevo - sin limite de numero
// de URLs (a diferencia de vercel.json, que tiene un tope de 2048
// reglas), y sin tocar paginas nuevas, /api, ni archivos estaticos.
//
// Se basa en "Routing Middleware" de Vercel, disponible para
// CUALQUIER framework (incluido HTML estatico) y en CUALQUIER plan,
// incluido el gratuito (Hobby). Mas info:
// https://vercel.com/docs/routing-middleware
//
// COMO INSTALARLO:
//   1. En la raiz del proyecto (junto a package.json), ejecuta:
//        npm install @vercel/functions
//
//   2. Copia este archivo a la raiz del proyecto con el nombre exacto
//      "middleware.mjs" (junto a package.json, index.html, etc).
//
//   3. Copia junto a el el "old-paths.json" del dominio correspondiente
//      (generado por generar_redirects.py en salida/<dominio>/old-paths.json),
//      con ese mismo nombre "old-paths.json", en la MISMA carpeta.
//
//   4. Si tu package.json no tiene ya "type": "module", no pasa nada -
//      el archivo .mjs siempre se trata como modulo ES, sin necesidad
//      de tocar package.json.
//
//   5. Haz commit y push (o "vercel --prod"). Vercel detecta el archivo
//      middleware.mjs automaticamente.

import { next } from '@vercel/functions'
import oldPaths from './old-paths.json'

const OLD_PATHS = new Set(oldPaths)

function normalize(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname
}

export default function middleware(request) {
  const url = new URL(request.url)
  const normalized = normalize(url.pathname)

  // Nunca redirigir la propia home
  if (normalized === '/' || normalized === '') {
    return next()
  }

  if (OLD_PATHS.has(normalized)) {
    return Response.redirect(new URL('/', request.url), 301)
  }

  // No es una URL antigua conocida -> deja pasar la peticion tal cual
  // (paginas nuevas, /api, imagenes, css, js, etc.)
  return next()
}

// El matcher evita que el middleware se ejecute sobre /api/* y sobre
// cualquier ruta con un punto en el ultimo segmento (archivos: .css,
// .js, .png, .jpg, .svg, .webp, .xml, .txt, etc.) - capa extra de
// seguridad ademas de que esas rutas nunca estan en old-paths.json.
export const config = {
  matcher: ['/((?!api/|.*\\..*).*)'],
}
