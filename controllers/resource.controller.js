/**
 * ==========================================================
 * Aula IA v1.0
 * Resource Controller
 * ==========================================================
 */

const asyncHandler = require("../utils/asyncHandler");
const resourceService = require("../services/resource.service");
const ApiError = require("../utils/ApiError");

// ======================================================
// LISTAR TODOS
// ======================================================

exports.getAll = asyncHandler(async (req, res) => {

    const recursos = await resourceService.getAll();

    res.json({

        ok: true,

        cantidad: recursos.length,

        recursos

    });

});

// ======================================================
// OBTENER POR ID
// ======================================================

exports.getById = asyncHandler(async (req, res) => {

    const recurso = await resourceService.getById(

        req.params.id

    );

    res.json({

        ok: true,

        recurso

    });

});

// ======================================================
// BUSCAR
// ======================================================

exports.search = asyncHandler(async (req, res) => {

    const texto = req.query.q || "";

    const recursos = await resourceService.search(

        texto

    );

    res.json({

        ok: true,

        cantidad: recursos.length,

        recursos

    });

});

// ======================================================
// LISTAR POR CATEGORÍA
// ======================================================

exports.byCategory = asyncHandler(async (req, res) => {

    const recursos = await resourceService.getByCategory(

        req.params.id

    );

    res.json({

        ok: true,

        cantidad: recursos.length,

        recursos

    });

});

// ======================================================
// CREAR
// ======================================================

exports.create = asyncHandler(async (req, res) => {

    const id = await resourceService.create(

        req.body

    );

    res.status(201).json({

        ok: true,

        mensaje: "Recurso creado correctamente.",

        id

    });

});

// ======================================================
// ACTUALIZAR
// ======================================================

exports.update = asyncHandler(async (req, res) => {

    await resourceService.update(

        req.params.id,

        req.body

    );

    res.json({

        ok: true,

        mensaje: "Recurso actualizado correctamente."

    });

});

// ======================================================
// ELIMINAR
// ======================================================

exports.remove = asyncHandler(async (req, res) => {

    await resourceService.remove(

        req.params.id

    );

    res.json({

        ok: true,

        mensaje: "Recurso eliminado."

    });

});

// ======================================================
// DESCARGAR RECURSO
// ======================================================

exports.download = asyncHandler(async (req, res) => {

    const usuario = req.user;

    const recurso = await resourceService.getById(

        req.params.id

    );

    const autorizado = await resourceService.canDownload(

        usuario,

        recurso.id

    );

    if (!autorizado) {

        throw new ApiError(

            403,

            "No posee permisos para descargar este recurso."

        );

    }

    await resourceService.registerDownload(

        usuario.id,

        recurso.id,

        req.ip

    );

    res.json({

        ok: true,

        descarga: true,

        archivo: recurso.archivo

    });

});

// ======================================================
// DESTACADOS
// ======================================================

exports.featured = asyncHandler(async (req, res) => {

    const recursos = await resourceService.getAll();

    const destacados = recursos.filter(

        r => r.destacado === 1

    );

    res.json({

        ok: true,

        cantidad: destacados.length,

        recursos: destacados

    });

});

// ======================================================
// GRATUITOS
// ======================================================

exports.free = asyncHandler(async (req, res) => {

    const recursos = await resourceService.getAll();

    const gratuitos = recursos.filter(

        r => r.gratuito === 1

    );

    res.json({

        ok: true,

        cantidad: gratuitos.length,

        recursos: gratuitos

    });

});