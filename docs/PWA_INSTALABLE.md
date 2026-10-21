# AulaIA — primera versión PWA

AulaIA es una aplicación web progresiva orientada al piloto de docentes fundadores. Esta rama añade la base instalable; no significa que el servicio esté publicado ni que el flujo completo de agentes ya esté integrado.

## Funciones incluidas en esta etapa

- Manifiesto web en `frontend/public/manifest.webmanifest`.
- Iconos SVG de aplicación.
- Registro del service worker solo en compilación de producción.
- Caché del shell de la aplicación y fallback de navegación para abrir la interfaz sin conexión después de una primera carga correcta.
- Aviso de instalación cuando el navegador ofrece el evento `beforeinstallprompt`.
- Exclusión deliberada de rutas `/api/` de la caché: no se guardan respuestas, sesiones ni datos de usuarios.
- Flujo de verificación automática para compilación del frontend y comprobación sintáctica del backend.

## Compilar y probar localmente

Desde la raíz del repositorio:

```bash
npm ci --prefix frontend
npm --prefix frontend run build
npm --prefix frontend run preview
```

Abrí la URL que informe Vite Preview. Para probar service workers y la instalación real, usá `localhost` o un sitio servido por HTTPS. El servidor de desarrollo de Vite no registra el service worker, por diseño.

En otra terminal se puede comprobar el backend:

```bash
npm ci --prefix backend
npm run check:backend
```

## Instalar en escritorio

1. Abrí AulaIA mediante Chrome o Edge en `localhost` o HTTPS.
2. Esperá a que termine la carga inicial y el navegador detecte los requisitos de instalación.
3. Si el navegador ofrece la opción, usá **Instalar AulaIA** o el icono de instalación de la barra de direcciones.
4. Abrí la aplicación desde el acceso directo creado.

En navegadores o dispositivos que no exponen `beforeinstallprompt`, la interfaz no muestra un botón falso: usá la opción de instalación que ofrezca el propio navegador, si está disponible.

## Límites conocidos

- El modo sin conexión permite abrir el shell previamente descargado; no convierte la API, el inicio de sesión ni los agentes IA en servicios offline.
- La integración de IA debe realizarse a través del backend y nunca exponiendo claves privadas en el frontend.
- La instalación debe validarse en los navegadores y sistemas operativos elegidos para el piloto.
- No hay despliegue configurado en esta entrega. Para instalación desde otros equipos, hace falta un hosting accesible por HTTPS.
- SQLite requiere almacenamiento persistente en el servidor; no debe suponerse que cualquier hosting gratuito conserve el archivo entre reinicios o despliegues.

## Lista de comprobación antes del piloto

- [ ] El workflow de GitHub Actions termina correctamente.
- [ ] La compilación genera `dist/manifest.webmanifest` y `dist/sw.js`.
- [ ] El manifiesto y los iconos responden sin error desde Preview.
- [ ] El service worker se registra en producción local.
- [ ] La aplicación abre su shell sin conexión después de la primera visita.
- [ ] Las rutas `/api/` no se cachean.
- [ ] La instalación se prueba en al menos un navegador de escritorio objetivo.
- [ ] Registro, aprobación administrativa, inicio de sesión y autorización se prueban antes de incorporar datos reales.
