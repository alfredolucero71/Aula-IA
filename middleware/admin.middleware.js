/**
 * ==========================================================
 * Aula IA v1.0
 * Middleware de autorización para Administradores
 * ==========================================================
 */

module.exports = (req, res, next) => {

    try {

        // El middleware auth.middleware debe ejecutarse antes
        if (!req.user) {

            return res.status(401).json({

                ok: false,

                mensaje: "Usuario no autenticado."

            });

        }

        // Verificar privilegios
        if (!req.user.admin) {

            return res.status(403).json({

                ok: false,

                mensaje: "No posee permisos para acceder a este recurso."

            });

        }

        next();

    }

    catch (error) {

        return res.status(500).json({

            ok: false,

            mensaje: error.message

        });

    }

};