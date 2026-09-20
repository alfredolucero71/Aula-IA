/**
 * ==========================================================
 * Aula IA v1.0
 * Users Controller
 * ==========================================================
 */

const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const userService = require("../services/user.service");

// ==========================================================
// LISTAR TODOS
// ==========================================================

exports.getAll = asyncHandler(async (req, res) => {

    const usuarios = await userService.getAll();

    res.json({

        ok: true,

        cantidad: usuarios.length,

        usuarios

    });

});


// ==========================================================
// BUSCAR POR ID
// ==========================================================

exports.getById = asyncHandler(async (req, res) => {

    const usuario = await userService.getById(req.params.id);

    if (!usuario) {

        throw new ApiError(

            404,

            "Usuario no encontrado."

        );

    }

    res.json({

        ok: true,

        usuario

    });

});


// ==========================================================
// BUSCAR
// ==========================================================

exports.search = asyncHandler(async (req, res) => {

    const texto = req.query.q || "";

    const usuarios = await userService.search(texto);

    res.json({

        ok: true,

        cantidad: usuarios.length,

        usuarios

    });

});


// ==========================================================
// CREAR
// ==========================================================

exports.create = asyncHandler(async (req, res) => {

    const id = await userService.create(req.body);

    res.status(201).json({

        ok: true,

        mensaje: "Usuario creado correctamente.",

        id

    });

});


// ==========================================================
// ACTUALIZAR
// ==========================================================

exports.update = asyncHandler(async (req, res) => {

    const usuario = await userService.getById(req.params.id);

    if (!usuario) {

        throw new ApiError(

            404,

            "Usuario inexistente."

        );

    }

    await userService.update(

        req.params.id,

        req.body

    );

    res.json({

        ok: true,

        mensaje: "Usuario actualizado."

    });

});


// ==========================================================
// APROBAR
// ==========================================================

exports.approve = asyncHandler(async (req, res) => {

    const usuario = await userService.getById(req.params.id);

    if (!usuario) {

        throw new ApiError(

            404,

            "Usuario inexistente."

        );

    }

    await userService.approve(req.params.id);

    res.json({

        ok: true,

        mensaje: "Usuario aprobado."

    });

});


// ==========================================================
// RECHAZAR
// ==========================================================

exports.reject = asyncHandler(async (req, res) => {

    const usuario = await userService.getById(req.params.id);

    if (!usuario) {

        throw new ApiError(

            404,

            "Usuario inexistente."

        );

    }

    await userService.reject(req.params.id);

    res.json({

        ok: true,

        mensaje: "Usuario rechazado."

    });

});


// ==========================================================
// ELIMINAR
// ==========================================================

exports.remove = asyncHandler(async (req, res) => {

    const usuario = await userService.getById(req.params.id);

    if (!usuario) {

        throw new ApiError(

            404,

            "Usuario inexistente."

        );

    }

    await userService.remove(req.params.id);

    res.json({

        ok: true,

        mensaje: "Usuario eliminado."

    });

});