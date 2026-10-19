# Consolidación técnica de AulaIA — alcance de esta entrega

## Objetivo

Reducir la ambigüedad entre implementaciones heredadas y establecer una entrada reproducible para trabajar en la primera versión PWA destinada al piloto de docentes fundadores, sin borrar código cuya función todavía no fue migrada.

## Decisiones adoptadas

1. **Frontend canónico:** `frontend/` (React + Vite).
2. **Backend canónico para nuevas funciones:** `backend/` (Express con módulos ES y SQLite).
3. **Comandos unificados:** los scripts de la raíz delegan en los paquetes frontend/backend.
4. **Backend antiguo:** se mantiene temporalmente en la raíz, pero queda documentado como heredado. No añadirle funciones nuevas.
5. **Datos locales:** el `.gitignore` ahora excluye archivos SQLite y otros artefactos locales.
6. **Base de datos:** se mantiene SQLite para reducir complejidad y costos en el piloto; no se cambia de tecnología en esta fase.

## Diferencias funcionales que requieren una migración posterior

| Área | Backend modular (`backend/`) | Backend heredado (raíz) | Decisión |
|---|---|---|---|
| Inicio/API | `/api/health` | `/api/status` | Mantener como canónico `/api/health` |
| Autenticación y usuarios | Rutas y repositorios modulares | Implementación anterior | Usar el modular como base y comparar comportamientos antes de migrar |
| Administración/aprobación | Rutas de administración y estados de cuenta | La implementación previa debe revisarse por completo | Verificar el alta segura del primer administrador y probar los estados |
| Recursos didácticos | No se confirmó una API equivalente en el modular | Existe una ruta de recursos heredada | No borrar; especificar y migrar esta función antes de retirar el legado |
| Persistencia | SQLite configurada desde variables de entorno | Configuración SQLite anterior | No mezclar las bases; definir una migración explícita si hay datos que conservar |

## Riesgos abiertos antes de desplegar

- Hay que comprobar si los archivos SQLite versionados contienen información real o secretos. Añadir reglas a `.gitignore` no elimina archivos que ya están versionados.
- Confirmar cómo se crea el primer administrador: las variables `ADMIN_EMAIL` y `ADMIN_PASSWORD` no deben considerarse suficientes hasta verificar el mecanismo.
- Revisar CORS, almacenamiento de contraseñas, JWT, aprobación de cuentas y manejo de errores.
- El frontend aún requiere integración funcional con registro, inicio de sesión, panel de administración y estados de aprobación.
- La PWA todavía necesita manifiesto, iconos, estrategia de caché/service worker y pruebas de instalación.
- La integración de agentes IA y la gestión segura de sus credenciales siguen pendientes.
- No se ha ejecutado instalación, compilación, pruebas automatizadas ni despliegue como parte de esta consolidación.

## Secuencia recomendada después de esta base

1. Verificar las bases SQLite versionadas y retirar del historial o rotar cualquier secreto/dato sensible encontrado.
2. Comparar los flujos de autenticación, administración y recursos entre ambos backends.
3. Migrar la función de recursos que siga siendo necesaria al backend modular y definir una estrategia de datos.
4. Probar registro → pendiente → aprobación administrativa → acceso.
5. Integrar frontend y API.
6. Completar la PWA y comprobar su instalación en escritorio.
7. Incorporar el flujo pedagógico A00 → aprobación → A01 → aprobación → A02.
8. Ejecutar pruebas funcionales y de seguridad antes de invitar a los 10 docentes.

## Estado

**Base de estructura y documentación propuesta en esta rama.** No equivale a una PWA terminada, no confirma que la aplicación compile y no habilita un despliegue de producción.
