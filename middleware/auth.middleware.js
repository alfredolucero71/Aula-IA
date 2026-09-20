const jwt = require("jsonwebtoken");

const db = require("../config/database");

module.exports = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {

            return res.status(401).json({
                ok: false,
                mensaje: "No se recibió el token de autenticación."
            });

        }

        const partes = authHeader.split(" ");

        if (partes.length !== 2) {

            return res.status(401).json({
                ok: false,
                mensaje: "Formato de token inválido."
            });

        }

        const tipo = partes[0];

        const token = partes[1];

        if (tipo !== "Bearer") {

            return res.status(401).json({
                ok: false,
                mensaje: "Tipo de autenticación inválido."
            });

        }

        jwt.verify(

            token,

            process.env.JWT_SECRET,

            (err, decoded) => {

                if (err) {

                    return res.status(401).json({

                        ok: false,

                        mensaje: "Token inválido o expirado."

                    });

                }

                db.get(

                    `SELECT

                        id,
                        apellido_nombre,
                        email,
                        es_admin,
                        estado_registro

                    FROM docentes

                    WHERE id = ?`,

                    [

                        decoded.id

                    ],

                    (err, usuario) => {

                        if (err) {

                            return res.status(500).json({

                                ok: false,

                                mensaje: err.message

                            });

                        }

                        if (!usuario) {

                            return res.status(401).json({

                                ok: false,

                                mensaje: "Usuario inexistente."

                            });

                        }

                        if (usuario.estado_registro !== "APROBADO") {

                            return res.status(403).json({

                                ok: false,

                                mensaje: "La cuenta todavía no fue aprobada."

                            });

                        }

                        req.user = {

                            id: usuario.id,

                            nombre: usuario.apellido_nombre,

                            email: usuario.email,

                            admin: usuario.es_admin === 1

                        };

                        next();

                    }

                );

            }

        );

    }

    catch (error) {

        return res.status(500).json({

            ok: false,

            mensaje: error.message

        });

    }

};