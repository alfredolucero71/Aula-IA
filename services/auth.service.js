/**
 * ==========================================================
 * Aula IA v1.0
 * Authentication Service
 * ==========================================================
 */

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ApiError = require("../utils/ApiError");
const userRepository = require("../repositories/user.repository");

class AuthService {

    // ======================================================
    // REGISTRO
    // ======================================================

    async register(data) {

        const existeEmail = await userRepository.findByEmail(data.email);

        if (existeEmail) {

            throw new ApiError(
                409,
                "Ya existe un usuario registrado con ese correo."
            );

        }

        const existeDni = await userRepository.findByDni(data.dni);

        if (existeDni) {

            throw new ApiError(
                409,
                "Ya existe un usuario registrado con ese DNI."
            );

        }

        const passwordHash = await bcrypt.hash(data.password, 10);

        const sql = `

            INSERT INTO docentes(

                apellido_nombre,
                dni,
                direccion,
                provincia,
                telefono,
                email,
                tipo_comunicacion,
                password,
                estado_registro,
                es_admin

            )

            VALUES(

                ?,?,?,?,?,?,?,?,
                'PENDIENTE',
                0

            )

        `;

        const values = [

            data.apellido_nombre,
            data.dni,
            data.direccion,
            data.provincia,
            data.telefono,
            data.email,
            data.tipo_comunicacion,
            passwordHash

        ];

        const id = await userRepository.create(

            sql,

            values

        );

        return {

            id,

            apellido_nombre: data.apellido_nombre,

            email: data.email,

            estado: "PENDIENTE"

        };

    }

    // ======================================================
    // LOGIN
    // ======================================================

    async login(email, password) {

        const usuario = await userRepository.findByEmail(email);

        if (!usuario) {

            throw new ApiError(

                401,

                "Usuario o contraseña incorrectos."

            );

        }

        const passwordCorrecta = await bcrypt.compare(

            password,

            usuario.password

        );

        if (!passwordCorrecta) {

            throw new ApiError(

                401,

                "Usuario o contraseña incorrectos."

            );

        }

        if (usuario.estado_registro !== "APROBADO") {

            throw new ApiError(

                403,

                "La cuenta todavía no fue aprobada por un administrador."

            );

        }

        const token = jwt.sign(

            {

                id: usuario.id,

                email: usuario.email,

                admin: usuario.es_admin

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "8h"

            }

        );

        return {

            token,

            usuario: {

                id: usuario.id,

                apellido_nombre: usuario.apellido_nombre,

                email: usuario.email,

                admin: usuario.es_admin

            }

        };

    }

    // ======================================================
    // PERFIL
    // ======================================================

    async profile(id) {

        const usuario = await userRepository.findById(id);

        if (!usuario) {

            throw new ApiError(

                404,

                "Usuario inexistente."

            );

        }

        delete usuario.password;

        return usuario;

    }

    // ======================================================
    // CAMBIO DE CONTRASEÑA
    // ======================================================

    async changePassword(id, actual, nueva) {

        const usuario = await userRepository.findById(id);

        if (!usuario) {

            throw new ApiError(

                404,

                "Usuario inexistente."

            );

        }

        const correcta = await bcrypt.compare(

            actual,

            usuario.password

        );

        if (!correcta) {

            throw new ApiError(

                401,

                "La contraseña actual es incorrecta."

            );

        }

        const hash = await bcrypt.hash(

            nueva,

            10

        );

        const sql = `

            UPDATE docentes

            SET password=?

            WHERE id=?

        `;

        await userRepository.update(

            sql,

            [

                hash,

                id

            ]

        );

        return true;

    }

    // ======================================================
    // VERIFICAR TOKEN
    // ======================================================

    verifyToken(token) {

        try {

            return jwt.verify(

                token,

                process.env.JWT_SECRET

            );

        }

        catch {

            throw new ApiError(

                401,

                "Token inválido."

            );

        }

    }

}

module.exports = new AuthService();