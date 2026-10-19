# Seguridad y primer administrador de AulaIA

## Crear el primer administrador

1. Copiar backend/.env.example como backend/.env.
2. Configurar JWT_SECRET con un valor aleatorio propio de al menos 32 caracteres. No reutilizar el ejemplo ni compartirlo.
3. Configurar ADMIN_EMAIL y ADMIN_PASSWORD con un correo propio y una contraseña única de al menos 16 caracteres.
4. Instalar las dependencias desde la raíz con npm run install:all.
5. Ejecutar desde la raíz: npm --prefix backend run admin:create.
6. Iniciar sesión con esa cuenta, confirmar el acceso y luego quitar ADMIN_PASSWORD de backend/.env. Conservar la contraseña en un gestor seguro.

El comando se detiene si ya existe un administrador o si el correo ya está registrado. No hay un endpoint público para convertir una cuenta en administrador. Esta utilidad local no se ha ejecutado contra la base del repositorio.

## Controles incluidos en esta rama

- El entorno de producción rechaza un JWT_SECRET débil o de ejemplo.
- Registro e inicio de sesión tienen límite de intentos y validación de entradas.
- Cada petición autenticada consulta el estado y rol actuales en SQLite; suspender una cuenta bloquea el uso de tokens anteriores.
- El flujo existente usa bcrypt para almacenar contraseñas.

## Base SQLite versionada

El repositorio contiene backend/database/aulaia.sqlite. La inspección textual preliminar no mostró direcciones de correo legibles, pero esto no demuestra que la base esté vacía ni que carezca de datos personales. Antes de retirarla del repositorio, comprobar su contenido con una herramienta SQLite en un entorno local seguro. No publicar dumps ni resultados con datos personales. Si contiene cuentas o información útil, hacer una copia local restringida y planificar una migración; si no se necesita, eliminarla del control de versiones en un cambio separado. Añadirla a .gitignore no la desversiona.

## Pendiente antes de producción

- Ejecutar npm run check:backend desde la raíz después de instalar dependencias.
- Probar registro, inicio de sesión, aprobación, suspensión y administración.
- Verificar CORS, HTTPS, copias de seguridad, retención y recuperación de acceso.
- Revisar el contenido de la base SQLite versionada antes de desplegar.
