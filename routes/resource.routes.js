/**
 * ==========================================================
 * Aula IA v1.0
 * Resource Routes
 * ==========================================================
 */

const express = require("express");

const router = express.Router();

const resourceController = require("../controllers/resource.controller");

const authMiddleware = require("../middleware/auth.middleware");

const adminMiddleware = require("../middleware/admin.middleware");

const {

    validateResource

} = require("../utils/validator");


// ======================================================
// RUTAS PÚBLICAS
// ======================================================

// Listado de recursos
router.get(

    "/",

    resourceController.getAll

);

// Recursos destacados
router.get(

    "/featured",

    resourceController.featured

);

// Recursos gratuitos
router.get(

    "/free",

    resourceController.free

);

// Buscar
router.get(

    "/search",

    resourceController.search

);

// Filtrar por categoría
router.get(

    "/category/:id",

    resourceController.byCategory

);

// Detalle
router.get(

    "/:id",

    resourceController.getById

);


// ======================================================
// RUTAS PRIVADAS
// ======================================================

// Descargar recurso
router.get(

    "/:id/download",

    authMiddleware,

    resourceController.download

);


// ======================================================
// RUTAS ADMINISTRADOR
// ======================================================

// Crear
router.post(

    "/",

    authMiddleware,

    adminMiddleware,

    validateResource,

    resourceController.create

);

// Actualizar
router.put(

    "/:id",

    authMiddleware,

    adminMiddleware,

    validateResource,

    resourceController.update

);

// Eliminar
router.delete(

    "/:id",

    authMiddleware,

    adminMiddleware,

    resourceController.remove

);


module.exports = router;