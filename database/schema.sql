PRAGMA foreign_keys = ON;

-- ==========================================================
-- TABLA: ROLES
-- ==========================================================

CREATE TABLE IF NOT EXISTS roles (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nombre TEXT NOT NULL UNIQUE,

    descripcion TEXT,

    activo INTEGER DEFAULT 1

);

-- ==========================================================
-- TABLA: DOCENTES
-- ==========================================================

CREATE TABLE IF NOT EXISTS docentes (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    apellido_nombre TEXT NOT NULL,

    dni TEXT NOT NULL UNIQUE,

    direccion TEXT,

    localidad TEXT,

    provincia TEXT,

    codigo_postal TEXT,

    telefono TEXT,

    email TEXT NOT NULL UNIQUE,

    tipo_comunicacion TEXT,

    password TEXT NOT NULL,

    foto_perfil TEXT,

    biografia TEXT,

    rol_id INTEGER DEFAULT 2,

    es_admin INTEGER DEFAULT 0,

    estado_registro TEXT DEFAULT 'PENDIENTE',

    ultimo_acceso DATETIME,

    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,

    fecha_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (rol_id) REFERENCES roles(id)

);

-- ==========================================================
-- TABLA: PERMISOS
-- ==========================================================

CREATE TABLE IF NOT EXISTS permisos (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nombre TEXT NOT NULL UNIQUE,

    descripcion TEXT

);

-- ==========================================================
-- TABLA: ROL_PERMISOS
-- ==========================================================

CREATE TABLE IF NOT EXISTS rol_permisos (

    rol_id INTEGER,

    permiso_id INTEGER,

    PRIMARY KEY (rol_id, permiso_id),

    FOREIGN KEY (rol_id) REFERENCES roles(id),

    FOREIGN KEY (permiso_id) REFERENCES permisos(id)

);

-- ==========================================================
-- TABLA: CATEGORÍAS
-- ==========================================================

CREATE TABLE IF NOT EXISTS categorias (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nombre TEXT NOT NULL UNIQUE,

    descripcion TEXT,

    icono TEXT,

    activo INTEGER DEFAULT 1

);

-- ==========================================================
-- TABLA: RECURSOS
-- ==========================================================

CREATE TABLE IF NOT EXISTS recursos (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    categoria_id INTEGER,

    titulo TEXT NOT NULL,

    descripcion TEXT,

    imagen TEXT,

    archivo TEXT,

    tipo TEXT,

    precio REAL DEFAULT 0,

    gratuito INTEGER DEFAULT 0,

    destacado INTEGER DEFAULT 0,

    activo INTEGER DEFAULT 1,

    fecha_publicacion DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (categoria_id) REFERENCES categorias(id)

);

-- ==========================================================
-- TABLA: ETIQUETAS
-- ==========================================================

CREATE TABLE IF NOT EXISTS etiquetas (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nombre TEXT UNIQUE

);

-- ==========================================================
-- TABLA: RECURSO_ETIQUETA
-- ==========================================================

CREATE TABLE IF NOT EXISTS recurso_etiqueta (

    recurso_id INTEGER,

    etiqueta_id INTEGER,

    PRIMARY KEY(recurso_id, etiqueta_id),

    FOREIGN KEY(recurso_id) REFERENCES recursos(id),

    FOREIGN KEY(etiqueta_id) REFERENCES etiquetas(id)

);

-- ==========================================================
-- TABLA: CURSOS
-- ==========================================================

CREATE TABLE IF NOT EXISTS cursos (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    titulo TEXT,

    descripcion TEXT,

    portada TEXT,

    activo INTEGER DEFAULT 1,

    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP

);

-- ==========================================================
-- TABLA: MÓDULOS
-- ==========================================================

CREATE TABLE IF NOT EXISTS modulos (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    curso_id INTEGER,

    titulo TEXT,

    descripcion TEXT,

    orden INTEGER,

    FOREIGN KEY(curso_id) REFERENCES cursos(id)

);

-- ==========================================================
-- TABLA: LECCIONES
-- ==========================================================

CREATE TABLE IF NOT EXISTS lecciones (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    modulo_id INTEGER,

    titulo TEXT,

    contenido TEXT,

    video TEXT,

    archivo TEXT,

    orden INTEGER,

    FOREIGN KEY(modulo_id) REFERENCES modulos(id)

);

-- ==========================================================
-- TABLA: SUSCRIPCIONES
-- ==========================================================

CREATE TABLE IF NOT EXISTS suscripciones (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    docente_id INTEGER,

    plan TEXT,

    fecha_inicio DATE,

    fecha_fin DATE,

    estado TEXT,

    FOREIGN KEY(docente_id) REFERENCES docentes(id)

);

-- ==========================================================
-- TABLA: PAGOS
-- ==========================================================

CREATE TABLE IF NOT EXISTS pagos (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    docente_id INTEGER,

    recurso_id INTEGER,

    importe REAL,

    medio_pago TEXT,

    comprobante TEXT,

    estado TEXT,

    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(docente_id) REFERENCES docentes(id),

    FOREIGN KEY(recurso_id) REFERENCES recursos(id)

);

-- ==========================================================
-- TABLA: DESCARGAS
-- ==========================================================

CREATE TABLE IF NOT EXISTS descargas (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    docente_id INTEGER,

    recurso_id INTEGER,

    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,

    ip TEXT,

    FOREIGN KEY(docente_id) REFERENCES docentes(id),

    FOREIGN KEY(recurso_id) REFERENCES recursos(id)

);

-- ==========================================================
-- TABLA: FAVORITOS
-- ==========================================================

CREATE TABLE IF NOT EXISTS favoritos (

    docente_id INTEGER,

    recurso_id INTEGER,

    PRIMARY KEY(docente_id,recurso_id),

    FOREIGN KEY(docente_id) REFERENCES docentes(id),

    FOREIGN KEY(recurso_id) REFERENCES recursos(id)

);

-- ==========================================================
-- TABLA: NOTIFICACIONES
-- ==========================================================

CREATE TABLE IF NOT EXISTS notificaciones (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    docente_id INTEGER,

    titulo TEXT,

    mensaje TEXT,

    leida INTEGER DEFAULT 0,

    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(docente_id) REFERENCES docentes(id)

);

-- ==========================================================
-- TABLA: CONFIGURACIÓN
-- ==========================================================

CREATE TABLE IF NOT EXISTS configuracion (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    clave TEXT UNIQUE,

    valor TEXT

);

-- ==========================================================
-- TABLA: AUDITORÍA
-- ==========================================================

CREATE TABLE IF NOT EXISTS auditoria (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    usuario_id INTEGER,

    accion TEXT,

    tabla TEXT,

    registro_id INTEGER,

    descripcion TEXT,

    ip TEXT,

    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(usuario_id) REFERENCES docentes(id)

);

-- ==========================================================
-- TABLA: LOGS DEL SISTEMA
-- ==========================================================

CREATE TABLE IF NOT EXISTS logs (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    nivel TEXT,

    origen TEXT,

    mensaje TEXT,

    stack TEXT,

    fecha DATETIME DEFAULT CURRENT_TIMESTAMP

);

-- ==========================================================
-- DATOS INICIALES
-- ==========================================================

INSERT OR IGNORE INTO roles (id,nombre,descripcion)
VALUES
(1,'Administrador','Administrador General'),
(2,'Docente','Usuario Docente');

INSERT OR IGNORE INTO categorias (nombre)
VALUES
('Planificaciones'),
('Evaluaciones'),
('Actividades'),
('Presentaciones'),
('IA'),
('Programación'),
('Robótica'),
('Scratch'),
('Documentos');