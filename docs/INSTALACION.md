# Instalación local de AulaIA

## Requisitos

- Node.js compatible con las versiones declaradas en los paquetes del proyecto.
- npm y Git.

## 1. Instalar dependencias

Desde la raíz del repositorio:

```bash
npm run install:all
```

## 2. Configurar el backend

Copiar `backend/.env.example` como `backend/.env`. Configurar un `JWT_SECRET` aleatorio propio de al menos 32 caracteres y valores locales válidos para la base de datos. No compartir el archivo `.env` ni usar valores de ejemplo en producción.

Para crear el primer administrador, configurar `ADMIN_EMAIL` y `ADMIN_PASSWORD` con un correo propio y una contraseña única de al menos 16 caracteres; luego ejecutar:

```bash
npm --prefix backend run admin:create
```

El comando se detiene si ya existe un administrador o si el correo ya pertenece a otra cuenta. Después de crear la cuenta, quitar `ADMIN_PASSWORD` del archivo local y conservarla en un gestor seguro. Detalles en `docs/SEGURIDAD_Y_ADMIN.md`.

## 3. Iniciar el backend

En una terminal:

```bash
npm run dev:backend
```

La API usa el puerto configurado en `backend/.env` (el ejemplo utiliza 4000). El endpoint de salud previsto es `/api/health`.

## 4. Iniciar el frontend

En otra terminal:

```bash
npm run dev:frontend
```

Vite informa la URL local en la consola; la configuración actual utiliza el puerto 5173.

## 5. Comprobaciones disponibles

```bash
npm run check:backend
npm run build
```

## Advertencias

- Estos pasos documentan la configuración prevista; no implican que la instalación, compilación o pruebas se hayan ejecutado y verificado en este cambio.
- El backend heredado ubicado en la raíz no es la entrada recomendada. Usar los comandos de este documento.
- No cargar datos reales de estudiantes ni docentes durante las pruebas iniciales.
- Antes de publicar, revisar CORS, secretos, contenido de SQLite, copias de seguridad, aprobación de cuentas y HTTPS.
