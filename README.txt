GlobalAcer ONE PAGE

Dominio:
https://globalacer.com.es/

Teléfono SOLO en caja de información:
+34 910 05 40 41

Teléfono en todos los botones:
+34 914 46 85 03

Diagnóstico:
GRATUITO

Logo e isotipo:
assets/logo-globalacer.png (cabecera y footer)
assets/favicon-globalacer.png (icono del navegador)
Ambos archivos vienen con fondo blanco opaco (capturas facilitadas
por el cliente, no PNG con transparencia). Se les da un pequeño
fondo/cápsula blanca a propósito en CSS para que no se vea como una
caja mal recortada sobre la cabecera y el footer oscuros.

NOTA: este repositorio partía de una copia sin corregir de AcerTech
(mismos textos, mismo dominio antiguo reparaciondeportatilesmadrid.com.es,
logo-acertech.png). Se ha regenerado todo el contenido/textos para
que no sea contenido duplicado respecto a AcerTech, se ha cambiado
el dominio, el logo/isotipo y la paleta de color para ajustarse al
logo de GlobalAcer. Se mantienen sin cambios los enlaces funcionales
ya existentes: WhatsApp, teléfonos, recogida (Redsys), Google Maps,
YouTube y Cal.com.

Variables SMTP compartidas en Vercel:
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[configurada únicamente en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

El correo no aparece visible en la web; solo se utiliza en /api/contacto.

Google Analytics:
G-6LJRCVWEGY

HISTORIAL: el repositorio era multipágina (14 páginas /servicios/ de
averías Acer) y se convirtió a one-page; esas páginas fueron
eliminadas en commits anteriores. Un commit previo ("REDIRECT1") ya
había añadido un middleware.mjs y la dependencia @vercel/functions,
pero ambos se perdieron en un commit posterior ("GlobalAcerONE") que
reconstruyó el proyecto. Como las páginas antiguas ya no existen en
el sitemap actual, se ha vuelto a añadir middleware.mjs para
redirigir (301) cualquier URL antigua a la home, evitando 404 en
enlaces indexados o backlinks antiguos. Excluye /api/* y cualquier
ruta con extensión de archivo. Re-añadida también la dependencia
"@vercel/functions": "^2.0.3" en package.json.

REVISIÓN (fixes aplicados en esta pasada):
- Ya estaba bien: banner de cookies, schema.org (ya usaba
  correctamente el teléfono de la caja de información,
  +34 910 05 40 41, no el de los botones), sección SEO, menú móvil,
  borde blanco del chat, api/contacto.js con SMTP + nodemailer. No se
  ha modificado ninguno de estos, ni ninguno de los dos números de
  teléfono.
- Google Analytics: no existía. Añadido G-6LJRCVWEGY.
- Meta robots: no existía. Añadido.
- .navcall: el texto largo ("Atención Telefónica 24 horas 365 días")
  deformaba la píldora del menú. Acortado a solo el número (mismo
  número de los botones, +34 914 46 85 03) y añadido
  white-space:nowrap como salvaguarda.
- H1 de portada reescrito, corto, directo y totalmente afirmativo
  (sin interrogación ni condicionales, el anterior tenía 19
  palabras), incluye la marca, redacción distinta a la de AcerTech:
  "Tu Acer no responde. Aquí lo diagnosticamos sin rodeos." Tamaño
  del H1 aumentado: clamp(38-58px) → clamp(46-74px) en escritorio,
  40px → 48px en móvil.

REVISIÓN ADICIONAL (a petición del cliente, regla general de la familia):
- Quitada la pestaña/etiqueta rotada del hero (.hero-chip o
  .hero-tag) que sobresalía y se solapaba visualmente con la caja de
  información en anchos de tablet/escritorio medio (detectado con
  captura en vivo en AcerTech). Regla para toda la familia: no volver
  a añadir este tipo de elemento decorativo.
