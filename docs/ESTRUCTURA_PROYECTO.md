# Estructura del proyecto AulaIA

## Fuente de verdad para el desarrollo

La estructura activa de la primera versión se organiza en dos aplicaciones:

- `frontend/`: interfaz React + Vite. Es la aplicación web que se convertirá progresivamente en PWA.
- `backend/`: API Express con módulos ES, autenticación, autorización por roles, aprobación de cuentas y persistencia SQLite.

## Comandos desde la raíz

- `npm run install:all`: instala dependencias del backend y frontend.
- `npm run dev:frontend`: inicia Vite para desarrollo.
- `npm run dev:backend`: inicia la API.
- `npm run build`: genera la compilación de producción del frontend.
- `npm start`: inicia el backend.
- `npm run check:backend`: realiza la comprobación sintáctica configurada en el backend.

Ejecutar frontend y backend en terminales separadas durante el desarrollo. Configurar `backend/.env` a partir de `backend/.env.example` antes de iniciar la API.

## Código heredado pendiente de migración

Los archivos y carpetas del backend ubicados en la raíz (`server.js`, `routes/`, `controllers/`, `services/`, `middleware/`, `config/` y `database/`) representan una implementación anterior. No deben ampliarse ni considerarse la entrada oficial de la aplicación sin una migración deliberada.

No se eliminan en esta consolidación porque antes deben compararse sus funciones con la API modular y migrar de forma comprobada cualquier capacidad que siga siendo necesaria, especialmente recursos didácticos. Evitar ejecutar ambos servidores contra bases distintas como si fueran una única aplicación.

## Decisiones y límites actuales

- Se conserva Express + SQLite para el piloto; no se migra a otro proveedor de base de datos en esta etapa.
- El backend modular es la única base prevista para nuevas funciones.
- La integración real con proveedores de IA y la PWA completa todavía requieren implementación y pruebas.
- No guardar bases de datos, claves ni datos de docentes en el repositorio.
