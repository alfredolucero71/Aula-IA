# Instalación local de AulaIA

## Requisitos

- Node.js compatible con las versiones declaradas en los paquetes del proyecto.
- npm.
- Git para obtener el repositorio.

## 1. Instalar dependencias

Desde la raíz del repositorio:

```bash
npm run install:all
```

## 2. Configurar el backend

Copiar `backend/.env.example` como `backend/.env` y completar los valores locales. Generar un `JWT_SECRET` largo, aleatorio y exclusivo para cada entorno. No usar contraseñas de ejemplo en producción ni compartir el archivo `.env`.

Antes de un despliegue real, verificar cómo se crea el primer usuario administrador y completar el procedimiento de configuración segura. No asumir que `ADMIN_EMAIL` y `ADMIN_PASSWORD` crean automáticamente una cuenta administradora.

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

## 5. Compilar el frontend

```bash
npm run build
```

## Advertencias

- Estos pasos documentan la configuración prevista; no implican que la instalación o compilación se hayan ejecutado y verificado en este cambio.
- El backend heredado ubicado en la raíz no es la entrada recomendada. Usar los comandos de este documento.
- No cargar datos reales de estudiantes ni docentes durante pruebas iniciales.
- Antes de publicar, revisar CORS, secretos, creación del administrador, persistencia SQLite, copias de seguridad, aprobación de cuentas y despliegue HTTPS.
