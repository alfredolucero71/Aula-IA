# AulaIA — PWA y publicación en GitHub Pages

AulaIA es una aplicación web progresiva orientada al piloto de docentes fundadores. GitHub Pages publica el frontend estático para que pueda instalarse desde Chrome o Edge; no aloja el backend, la API, SQLite ni los agentes.

## Publicación

El workflow `.github/workflows/deploy-pages.yml` compila el frontend para el prefijo `/Aula-IA/` y publica `frontend/dist`. En GitHub, el propietario debe configurar **Settings → Pages → Build and deployment → Source: GitHub Actions**. Después del primer despliegue, la dirección del proyecto es:

`https://alfredolucero71.github.io/Aula-IA/`

Los cambios en `main` vuelven a compilar y publicar el sitio.

## Compilar localmente

Desde la raíz del repositorio:

```bash
npm ci --prefix frontend
npm --prefix frontend run build
npm --prefix frontend run preview
```

La compilación normal usa raíz `/`. Para generar exactamente el artefacto de GitHub Pages, establecer `GITHUB_PAGES=true` antes del build.

## Instalar en Windows

1. Abrir la dirección HTTPS en Chrome o Edge.
2. Esperar a que carguen la página y los recursos.
3. Usar el icono de instalación del navegador o el menú **Instalar AulaIA**.
4. Abrir AulaIA desde el acceso directo instalado.

El paquete PWA no es un instalador `.exe` ni `.msi`. La instalación la gestiona Chrome o Edge. La disponibilidad del aviso de instalación depende de los criterios del navegador.

## Funciones y límites

- El manifiesto, los iconos y el service worker permiten instalar la interfaz y abrir el shell previamente descargado.
- El service worker no almacena respuestas de la API, sesiones ni datos personales.
- El modo sin conexión no ofrece autenticación, API, base de datos ni generación IA.
- GitHub Pages sirve únicamente archivos estáticos. El backend necesita otro hosting con HTTPS y almacenamiento persistente para SQLite antes de habilitar registro, acceso y agentes reales.
- La interfaz actual sigue siendo una página de presentación; el ingreso y los agentes aún no están integrados.

## Verificación antes del piloto

- [ ] El workflow de verificación y el workflow de publicación finalizan correctamente.
- [ ] La dirección HTTPS responde y las rutas bajo `/Aula-IA/` cargan.
- [ ] Manifiesto, iconos y service worker responden desde la ruta del proyecto.
- [ ] El service worker abre el shell sin conexión tras una primera carga.
- [ ] La instalación se valida en Chrome y Edge en Windows.
- [ ] Registro, aprobación administrativa, inicio de sesión y autorización se prueban antes de incorporar datos reales.
