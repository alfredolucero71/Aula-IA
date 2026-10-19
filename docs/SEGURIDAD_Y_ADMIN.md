# Seguridad y primer administrador de AulaIA

## Crear el primer administrador

1. Copiar backend/.env.example a backend/.env.
2. Configurar JWT_SECRET con un valor aleatorio propio de al menos 32 caracteres. No reutilizar el ejemplo ni compartirlo.
3. Configurar ADMIN_EMAIL y ADMIN_PASSWORD con un correo propio y una contraseña única de al menos 16 caracteres.
4. Instalar las dependencias con npm run install:all desde la raíz.
5. Ejecutar npm run admin:create --prefix backend desde la raíz del repositorio.
6. Iniciar sesión con esa cuenta, confirmar el acceso al panel y luego quitar ADMIN_PASSWORD del archivo local backend/.env. Conservarla en un gestor seguro.

El comando solo debe crear un administrador si no existe ninguno y el correo no está registrado. No debe existir un endpoint público para convertir una cuenta en administrador.

## Controles añadidos en esta rama

- El entorno de producción rechaza un JWT_SECRET débil o de ejemplo.
- Los endpoints de registro e inicio de sesión tienen límite de intentos y validación de entradas.
- Cada petición autenticada consulta el estado y rol actuales en la base de datos; suspender una cuenta bloquea el uso de tokens anteriores.
- Las contraseñas se almacenan mediante bcrypt en el flujo existente.

## Base SQLite versionada

El repositorio contiene backend/database/aulaia.sqlite. La inspección textual preliminar no mostró direcciones de correo legibles, pero esto no demuestra que la base esté vacía ni que carezca de datos personales. Antes de retirarla del repositorio, comprobar su contenido con una herramienta SQLite en un entorno local seguro. No publicar dumps ni resultados con datos personales. Si contiene cuentas o información útil, hacer una copia local restringida y planificar una migración; si no se necesita, eliminarla del control de versiones en un cambio separado. Añadirla a .gitignore no la desversiona.

## Pendiente antes de producción

- Ejecutar instalación, chequeo sintáctico y pruebas de registro, login, aprobación, suspensión y administración.
- Verificar CORS, HTTPS, copias de seguridad, política de retención y recuperación de acceso.
- Revisar el contenido de la base SQLite versionada antes de cualquier despliegue.
