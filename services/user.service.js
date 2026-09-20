/**
 * ==========================================================
 * Aula IA v1.0
 * Servicio de Usuarios
 * ==========================================================
 */

const bcrypt = require("bcrypt");
const db = require("../config/database");

class UserService {

    // ======================================================
    // LISTAR TODOS
    // ======================================================

    getAll() {

        return new Promise((resolve, reject) => {

            db.all(

                `SELECT

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

                ORDER BY apellido_nombre`,

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

    getById(id) {

        return new Promise((resolve, reject) => {

            db.get(

                `SELECT *

                FROM docentes

                WHERE id=?`,

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

                `SELECT

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

                ORDER BY apellido_nombre`,

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
    // CREAR
    // ======================================================

    async create(data) {

        const passwordHash = await bcrypt.hash(

            data.password,

            10

        );

        return new Promise((resolve, reject) => {

            db.run(

                `INSERT INTO docentes(

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

                    ?,?,?,?,?,?,?,?,?,?

                )`,

                [

                    data.apellido_nombre,
                    data.dni,
                    data.direccion,
                    data.provincia,
                    data.telefono,
                    data.email,
                    data.tipo_comunicacion,
                    passwordHash,
                    data.estado_registro,
                    data.es_admin ? 1 : 0

                ],

                function(err){

                    if(err) return reject(err);

                    resolve(this.lastID);

                }

            );

        });

    }


    // ======================================================
    // ACTUALIZAR
    // ======================================================

    update(id,data){

        return new Promise((resolve,reject)=>{

            db.run(

                `UPDATE docentes SET

                    apellido_nombre=?,
                    dni=?,
                    direccion=?,
                    provincia=?,
                    telefono=?,
                    email=?,
                    tipo_comunicacion=?,
                    estado_registro=?,
                    es_admin=?

                WHERE id=?`,

                [

                    data.apellido_nombre,
                    data.dni,
                    data.direccion,
                    data.provincia,
                    data.telefono,
                    data.email,
                    data.tipo_comunicacion,
                    data.estado_registro,
                    data.es_admin ? 1 : 0,
                    id

                ],

                function(err){

                    if(err) return reject(err);

                    resolve();

                }

            );

        });

    }


    // ======================================================
    // APROBAR
    // ======================================================

    approve(id){

        return new Promise((resolve,reject)=>{

            db.run(

                `UPDATE docentes

                SET estado_registro='APROBADO'

                WHERE id=?`,

                [id],

                function(err){

                    if(err) return reject(err);

                    resolve();

                }

            );

        });

    }


    // ======================================================
    // RECHAZAR
    // ======================================================

    reject(id){

        return new Promise((resolve,reject)=>{

            db.run(

                `UPDATE docentes

                SET estado_registro='RECHAZADO'

                WHERE id=?`,

                [id],

                function(err){

                    if(err) return reject(err);

                    resolve();

                }

            );

        });

    }


    // ======================================================
    // ELIMINAR
    // ======================================================

    remove(id){

        return new Promise((resolve,reject)=>{

            db.run(

                `DELETE FROM docentes

                WHERE id=?`,

                [id],

                function(err){

                    if(err) return reject(err);

                    resolve();

                }

            );

        });

    }

}

module.exports = new UserService();