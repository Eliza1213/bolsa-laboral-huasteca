# Bolsa Laboral Huasteca – PMV concierge (5 pantallas del prototipo)

Páginas: index (Inicio), vacantes (Catálogo), detalle (Detalle de vacante), publicar (Publicar vacante), negocio (Panel de negocio).
Sin base de datos ni cuentas: las vacantes viven en `datos.js` y la bina las actualiza a mano. Los interesados escriben al WhatsApp de la bina (`CONFIG.whatsapp`), que les pasa el contacto del negocio.

## Cómo funciona el concierge
- Publicar vacante: el negocio llena el formulario y se genera un mensaje para la bina (WhatsApp). La bina verifica y publica.
- Panel de negocio: se entra con el código del negocio (N01…). Los botones Renovar / Marcar ocupada preparan un mensaje para la bina, que cambia el estado.
- Los botones de WhatsApp se activan al poner el número en `CONFIG.whatsapp` (datos.js) y cuando la vacante está Vigente.

## Actualizar una vacante (datos.js)
1. Cambia `estado` a "Vigente" solo cuando esté verificada; llena `publicada` y `vence` con formato AAAA-MM-DD (vence = publicada + `CONFIG.vigenciaDias`, según el protocolo v1.1).
2. Si el negocio avisa que se cubrió: estado "Ocupada". Si venció sin respuesta: "Vencida".
3. Actualiza `CONFIG.actualizado` y anota el cambio en la bitácora.

## Publicar en GitHub Pages
Sube todos los archivos a un repositorio → Settings → Pages → Branch main, carpeta /root → Save.

## Limitaciones declaradas
Sin login real, sin cobro ni "destacar", sin mapa interactivo, sin guardado automático. El código de negocio no es una contraseña.
