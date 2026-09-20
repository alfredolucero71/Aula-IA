/**
 * ==========================================================
 * Aula IA v1.0
 * Middleware Global de Errores
 * ==========================================================
 */

const errorMiddleware = (err, req, res, next) => {

    console.error("");

    console.error("======================================");
    console.error("ERROR");
    console.error("======================================");

    console.error(err);

    const status = err.status || 500;

    const message = err.message || "Error interno del servidor.";

    res.status(status).json({

        ok: false,

        mensaje: message

    });

};

module.exports = errorMiddleware;