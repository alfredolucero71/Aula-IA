/**
 * ==========================================================
 * Aula IA v1.0
 * Panel de Administración
 * ==========================================================
 */

const db = require("../config/database");


// ==========================================================
// DASHBOARD
// ==========================================================

exports.dashboard = (req, res) => {

    const dashboard = {};

    db.get(

        `SELECT COUNT(*) total FROM docentes`,

        [],

        (err, row) => {

            if (err)
                return res.status(500).json({ ok:false, mensaje:err.message });

            dashboard.totalUsuarios = row.total;

            db.get(

                `SELECT COUNT(*) total
                 FROM docentes
                 WHERE estado_registro='PENDIENTE'`,

                [],

                (err,row)=>{

                    if(err)
                        return res.status(500).json({ok:false,mensaje:err.message});

                    dashboard.usuariosPendientes=row.total;

                    db.get(

                        `SELECT COUNT(*) total
                         FROM docentes
                         WHERE estado_registro='APROBADO'`,

                        [],

                        (err,row)=>{

                            if(err)
                                return res.status(500).json({ok:false,mensaje:err.message});

                            dashboard.usuariosAprobados=row.total;

                            db.get(

                                `SELECT COUNT(*) total
                                 FROM recursos
                                 WHERE activo=1`,

                                [],

                                (err,row)=>{

                                    if(err)
                                        return res.status(500).json({ok:false,mensaje:err.message});

                                    dashboard.recursos=row.total;

                                    db.get(

                                        `SELECT COUNT(*) total
                                         FROM pagos
                                         WHERE estado='APROBADO'`,

                                        [],

                                        (err,row)=>{

                                            if(err)
                                                return res.status(500).json({ok:false,mensaje:err.message});

                                            dashboard.pagosAprobados=row.total;

                                            res.json({

                                                ok:true,

                                                dashboard

                                            });

                                        }

                                    );

                                }

                            );

                        }

                    );

                }

            );

        }

    );

};


// ==========================================================
// USUARIOS PENDIENTES
// ==========================================================

exports.pendingUsers=(req,res)=>{

    db.all(

        `SELECT

            id,
            apellido_nombre,
            dni,
            provincia,
            telefono,
            email,
            fecha_creacion

        FROM docentes

        WHERE estado_registro='PENDIENTE'

        ORDER BY fecha_creacion ASC`,

        [],

        (err,rows)=>{

            if(err){

                return res.status(500).json({

                    ok:false,

                    mensaje:err.message

                });

            }

            res.json({

                ok:true,

                cantidad:rows.length,

                usuarios:rows

            });

        }

    );

};


// ==========================================================
// CAMBIAR ESTADO DEL USUARIO
// ==========================================================

exports.changeStatus=(req,res)=>{

    const{

        estado

    }=req.body;

    db.run(

        `UPDATE docentes

        SET estado_registro=?

        WHERE id=?`,

        [

            estado,

            req.params.id

        ],

        function(err){

            if(err){

                return res.status(500).json({

                    ok:false,

                    mensaje:err.message

                });

            }

            res.json({

                ok:true,

                mensaje:"Estado actualizado."

            });

        }

    );

};


// ==========================================================
// ELIMINAR CUENTA
// ==========================================================

exports.deleteUser=(req,res)=>{

    db.run(

        `DELETE FROM docentes

        WHERE id=?`,

        [

            req.params.id

        ],

        function(err){

            if(err){

                return res.status(500).json({

                    ok:false,

                    mensaje:err.message

                });

            }

            res.json({

                ok:true,

                mensaje:"Cuenta eliminada."

            });

        }

    );

};


// ==========================================================
// LISTADO DE PAGOS
// ==========================================================

exports.payments=(req,res)=>{

    db.all(

        `SELECT

            pagos.id,

            docentes.apellido_nombre,

            recursos.titulo,

            pagos.estado,

            pagos.fecha

        FROM pagos

        INNER JOIN docentes

        ON pagos.docente_id=docentes.id

        INNER JOIN recursos

        ON pagos.recurso_id=recursos.id

        ORDER BY pagos.fecha DESC`,

        [],

        (err,rows)=>{

            if(err){

                return res.status(500).json({

                    ok:false,

                    mensaje:err.message

                });

            }

            res.json({

                ok:true,

                pagos:rows

            });

        }

    );

};


// ==========================================================
// APROBAR PAGO
// ==========================================================

exports.approvePayment=(req,res)=>{

    db.run(

        `UPDATE pagos

        SET estado='APROBADO'

        WHERE id=?`,

        [

            req.params.id

        ],

        function(err){

            if(err){

                return res.status(500).json({

                    ok:false,

                    mensaje:err.message

                });

            }

            res.json({

                ok:true,

                mensaje:"Pago aprobado."

            });

        }

    );

};


// ==========================================================
// RECHAZAR PAGO
// ==========================================================

exports.rejectPayment=(req,res)=>{

    db.run(

        `UPDATE pagos

        SET estado='RECHAZADO'

        WHERE id=?`,

        [

            req.params.id

        ],

        function(err){

            if(err){

                return res.status(500).json({

                    ok:false,

                    mensaje:err.message

                });

            }

            res.json({

                ok:true,

                mensaje:"Pago rechazado."

            });

        }

    );

};