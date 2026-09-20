/**
 * ==========================================================
 * Aula IA v1.0
 * User Repository
 * ==========================================================
 */

const db = require("../config/database");

class UserRepository {

    // ======================================================
    // LISTAR TODOS
    // ======================================================

    findAll() {

        return new Promise((resolve, reject) => {

            db.all(

                `
                SELECT

                    id,
                    apellido_nombre,
                    dni,
                    direccion,
                    provincia,
                    telefono,
                    email,
                    tipo_comunicacion,
                    estado_registro,
                    es_admin,
                    fecha_creacion

                FROM docentes

                ORDER BY apellido_nombre
                `,

                [],

                (err, rows) => {

                    if (err) return reject(err);

                    resolve(rows);

                }

            );

        });

    }

    // ======================================================
    // BUSCAR POR ID
    // ======================================================

    findById(id) {

        return new Promise((resolve, reject) => {

            db.get(

                "SELECT * FROM docentes WHERE id=?",

                [id],

                (err, row) => {

                    if (err) return reject(err);

                    resolve(row);

                }

            );

        });

    }

    // ======================================================
    // BUSCAR POR EMAIL
    // ======================================================

    findByEmail(email) {

        return new Promise((resolve, reject) => {

            db.get(

                "SELECT * FROM docentes WHERE email=?",

                [email],

                (err, row) => {

                    if (err) return reject(err);

                    resolve(row);

                }

            );

        });

    }

    // ======================================================
    // BUSCAR POR DNI
    // ======================================================

    findByDni(dni) {

        return new Promise((resolve, reject) => {

            db.get(

                "SELECT * FROM docentes WHERE dni=?",

                [dni],

                (err, row) => {

                    if (err) return reject(err);

                    resolve(row);

                }

            );

        });

    }

    // ======================================================
    // BUSCAR
    // ======================================================

    search(texto) {

        return new Promise((resolve, reject) => {

            db.all(

                `
                SELECT

                    id,
                    apellido_nombre,
                    dni,
                    email,
                    estado_registro

                FROM docentes

                WHERE

                    apellido_nombre LIKE ?

                    OR dni LIKE ?

                    OR email LIKE ?

                ORDER BY apellido_nombre
                `,

                [

                    `%${texto}%`,
                    `%${texto}%`,
                    `%${texto}%`

                ],

                (err, rows) => {

                    if (err) return reject(err);

                    resolve(rows);

                }

            );

        });

    }

    // ======================================================
    // INSERTAR
    // ======================================================

    create(sql, values) {

        return new Promise((resolve, reject) => {

            db.run(

                sql,

                values,

                function (err) {

                    if (err) return reject(err);

                    resolve(this.lastID);

                }

            );

        });

    }

    // ======================================================
    // ACTUALIZAR
    // ======================================================

    update(sql, values) {

        return new Promise((resolve, reject) => {

            db.run(

                sql,

                values,

                function (err) {

                    if (err) return reject(err);

                    resolve(this.changes);

                }

            );

        });

    }

    // ======================================================
    // ELIMINAR
    // ======================================================

    delete(id) {

        return new Promise((resolve, reject) => {

            db.run(

                "DELETE FROM docentes WHERE id=?",

                [id],

                function (err) {

                    if (err) return reject(err);

                    resolve(this.changes);

                }

            );

        });

    }

}

module.exports = new UserRepository();