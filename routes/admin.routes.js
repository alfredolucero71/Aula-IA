/**
 * ==========================================================
 * Aula IA v1.0
 * Rutas del Panel de Administración
 * ==========================================================
 */

const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin.controller");

const authMiddleware = require("../middleware/auth.middleware");

const adminMiddleware = require("../middleware/admin.middleware");


// ======================================================
// TODAS LAS RUTAS REQUIEREN LOGIN
// ======================================================

router.use(authMiddleware);


// ======================================================
// TODAS LAS RUTAS REQUIEREN SER ADMINISTRADOR
// ======================================================

router.use(adminMiddleware);


// ======================================================
// DASHBOARD
// ======================================================

router.get(

    "/dashboard",

    adminController.dashboard

);


// ======================================================
// USUARIOS PENDIENTES
// ======================================================

router.get(

    "/users/pending",

    adminController.pendingUsers

);


// ======================================================
// CAMBIAR ESTADO DE UN USUARIO
// ======================================================

router.patch(

    "/users/:id/status",

    adminController.changeStatus

);


// ======================================================
// ELIMINAR USUARIO
// ======================================================

router.delete(

    "/users/:id",

    adminController.deleteUser

);


// ======================================================
// LISTADO DE PAGOS
// ======================================================

router.get(

    "/payments",

    adminController.payments

);


// ======================================================
// APROBAR PAGO
// ======================================================

router.patch(

    "/payments/:id/approve",

    adminController.approvePayment

);


// ======================================================
// RECHAZAR PAGO
// ======================================================

router.patch(

    "/payments/:id/reject",

    adminController.rejectPayment

);


// ======================================================
// IMPORTACIÓN CSV
// (Se implementará en el siguiente bloque)
// ======================================================

router.post(

    "/users/import/csv",

    (req, res) => {

        res.status(501).json({

            ok: false,

            mensaje: "Importación CSV aún no implementada."

        });

    }

);


// ======================================================
// IMPORTACIÓN EXCEL
// (Se implementará en el siguiente bloque)
// ======================================================

router.post(

    "/users/import/excel",

    (req, res) => {

        res.status(501).json({

            ok: false,

            mensaje: "Importación Excel aún no implementada."

        });

    }

);


// ======================================================
// EXPORTAR USUARIOS
// (Se implementará en el siguiente bloque)
// ======================================================

router.get(

    "/users/export",

    (req, res) => {

        res.status(501).json({

            ok: false,

            mensaje: "Exportación aún no implementada."

        });

    }

);


module.exports = router;