/**
 * ==========================================================
 * Aula IA v1.0
 * Rutas del ABM de Usuarios
 * ==========================================================
 */

const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users.controller");

const authMiddleware = require("../middleware/auth.middleware");

const adminMiddleware = require("../middleware/admin.middleware");

const {

    validateUser

} = require("../utils/validator");


// ======================================================
// TODAS LAS RUTAS REQUIEREN AUTENTICACIÓN
// ======================================================

router.use(authMiddleware);


// ======================================================
// TODAS LAS RUTAS REQUIEREN SER ADMINISTRADOR
// ======================================================

router.use(adminMiddleware);


// ======================================================
// LISTAR TODOS LOS USUARIOS
// GET /api/users
// ======================================================

router.get(

    "/",

    usersController.getAll

);


// ======================================================
// BUSCAR USUARIOS
// GET /api/users/search?q=
// ======================================================

router.get(

    "/search",

    usersController.search

);


// ======================================================
// OBTENER USUARIO POR ID
// GET /api/users/:id
// ======================================================

router.get(

    "/:id",

    usersController.getById

);


// ======================================================
// CREAR USUARIO
// POST /api/users
// ======================================================

router.post(

    "/",

    validateUser,

    usersController.create

);


// ======================================================
// ACTUALIZAR USUARIO
// PUT /api/users/:id
// ======================================================

router.put(

    "/:id",

    validateUser,

    usersController.update

);


// ======================================================
// APROBAR USUARIO
// PATCH /api/users/:id/approve
// ======================================================

router.patch(

    "/:id/approve",

    usersController.approve

);


// ======================================================
// RECHAZAR USUARIO
// PATCH /api/users/:id/reject
// ======================================================

router.patch(

    "/:id/reject",

    usersController.reject

);


// ======================================================
// ELIMINAR USUARIO
// DELETE /api/users/:id
// ======================================================

router.delete(

    "/:id",

    usersController.remove

);


module.exports = router;