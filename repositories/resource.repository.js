/**
 * ==========================================================
 * Aula IA v1.0
 * Resource Repository
 * ==========================================================
 */

const db = require("../config/database");

class ResourceRepository {

    // ======================================================
    // LISTAR TODOS
    // ======================================================

    findAll() {

        return new Promise((resolve, reject) => {

            db.all(

                `
                SELECT

                    r.id,
                    r.titulo,
                    r.descripcion,
                    r.tipo,
                    r.precio,
                    r.gratuito,
                    r.destacado,
                    r.activo,
                    r.fecha_publicacion,

                    c.nombre categoria

                FROM recursos r

                LEFT JOIN categorias c

                    ON r.categoria_id=c.id

                ORDER BY

                    r.fecha_publicacion DESC
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

                `
                SELECT *

                FROM recursos

                WHERE id=?
                `,

                [id],

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
                SELECT *

                FROM recursos

                WHERE

                    titulo LIKE ?

                    OR descripcion LIKE ?

                ORDER BY titulo
                `,

                [

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
    // LISTAR POR CATEGORÍA
    // ======================================================

    findByCategory(idCategoria) {

        return new Promise((resolve, reject) => {

            db.all(

                `
                SELECT *

                FROM recursos

                WHERE categoria_id=?

                ORDER BY titulo
                `,

                [

                    idCategoria

                ],

                (err, rows) => {

                    if (err) return reject(err);

                    resolve(rows);

                }

            );

        });

    }

    // ======================================================
    // CREAR
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

                `
                DELETE FROM recursos

                WHERE id=?
                `,

                [

                    id

                ],

                function (err) {

                    if (err) return reject(err);

                    resolve(this.changes);

                }

            );

        });

    }

}

module.exports = new ResourceRepository();