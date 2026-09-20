/**
 * ==========================================================
 * Aula IA v1.0
 * Authentication Controller
 * ==========================================================
 */

const asyncHandler = require("../utils/asyncHandler");
const authService = require("../services/auth.service");


// ======================================================
// REGISTRO
// ======================================================

exports.register = asyncHandler(async (req, res) => {

    const usuario = await authService.register(req.body);

    res.status(201).json({

        ok: true,

        mensaje:
            "Registro realizado correctamente. Su cuenta quedará pendiente de aprobación.",

        usuario

    });

});


// ======================================================
// LOGIN
// ======================================================

exports.login = asyncHandler(async (req, res) => {

    const {

        email,
        password

    } = req.body;

    const respuesta = await authService.login(

        email,

        password

    );

    res.json({

        ok: true,

        mensaje: "Inicio de sesión correcto.",

        token: respuesta.token,

        usuario: respuesta.usuario

    });

});


// ======================================================
// PERFIL
// ======================================================

exports.profile = asyncHandler(async (req, res) => {

    const usuario = await authService.profile(

        req.user.id

    );

    res.json({

        ok: true,

        usuario

    });

});


// ======================================================
// CAMBIAR CONTRASEÑA
// ======================================================

exports.changePassword = asyncHandler(async (req, res) => {

    const {

        actual,
        nueva

    } = req.body;

    await authService.changePassword(

        req.user.id,

        actual,

        nueva

    );

    res.json({

        ok: true,

        mensaje: "Contraseña actualizada correctamente."

    });

});


// ======================================================
// LOGOUT
// ======================================================

exports.logout = asyncHandler(async (req, res) => {

    res.json({

        ok: true,

        mensaje: "Sesión finalizada correctamente."

    });

});