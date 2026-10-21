# AulaIA v1.0

**Tu equipo inteligente para planificar, enseñar y evaluar.**

AulaIA está en desarrollo para una primera edición piloto con docentes fundadores. La arquitectura canónica actual es:

- **Frontend:** React + Vite, en `frontend/`.
- **Backend:** Node.js + Express + SQLite, en `backend/`.
- **Documentación:** configuración, seguridad y puesta en marcha en `docs/`.

## Inicio rápido

1. Instalá dependencias: `npm run install:all`.
2. Configurá `backend/.env` tomando como referencia `backend/.env.example`.
3. Creá el primer administrador siguiendo `docs/SEGURIDAD_Y_ADMIN.md`.
4. Iniciá el backend con `npm run dev:backend`.
5. En otra terminal, iniciá el frontend con `npm run dev:frontend`.

Guía completa: [docs/INSTALACION.md](docs/INSTALACION.md).

## PWA instalable

La rama `feature/pwa-installable` incorpora manifiesto, iconos, service worker, aviso de instalación y verificación de compilación. Consultá [docs/PWA_INSTALABLE.md](docs/PWA_INSTALABLE.md) para compilar y probar la instalación. La rama no debe interpretarse como un despliegue público.

## Estado y límites

La base técnica y el soporte PWA están en desarrollo. No asumir que el sistema completo de autenticación, la aprobación de docentes, los agentes A00/A01/A02 ni la integración con proveedores de IA estén completamente conectados hasta terminar las pruebas funcionales correspondientes.

Antes de producción: revisar seguridad, almacenamiento persistente de SQLite, copias de seguridad, HTTPS, autorización y gestión segura de credenciales. No cargar datos reales de estudiantes durante las pruebas.
