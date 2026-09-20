/**
 * ==========================================================
 * Aula IA v1.0
 * Resource Service
 * ==========================================================
 */

const ApiError = require("../utils/ApiError");
const resourceRepository = require("../repositories/resource.repository");

class ResourceService {

    // ======================================================
    // LISTAR TODOS
    // ======================================================

    async getAll() {

        return await resourceRepository.findAll();

    }

    // ======================================================
    // BUSCAR POR ID
    // ======================================================

    async getById(id) {

        const recurso = await resourceRepository.findById(id);

        if (!recurso) {

            throw new ApiError(

                404,

                "Recurso inexistente."

            );

        }

        return recurso;

    }

    // ======================================================
    // BUSCAR
    // ======================================================

    async search(texto) {

        return await resourceRepository.search(texto);

    }

    // ======================================================
    // LISTAR POR CATEGORÍA
    // ======================================================

    async getByCategory(categoriaId) {

        return await resourceRepository.findByCategory(

            categoriaId

        );

    }

    // ======================================================
    // CREAR RECURSO
    // ======================================================

    async create(data) {

        const sql = `

            INSERT INTO recursos(

                categoria_id,
                titulo,
                descripcion,
                imagen,
                archivo,
                tipo,
                precio,
                gratuito,
                destacado,
                activo

            )

            VALUES(

                ?,?,?,?,?,?,?,?,?,?

            )

        `;

        const values = [

            data.categoria_id,

            data.titulo,

            data.descripcion,

            data.imagen || null,

            data.archivo || null,

            data.tipo,

            data.precio,

            data.gratuito ? 1 : 0,

            data.destacado ? 1 : 0,

            1

        ];

        return await resourceRepository.create(

            sql,

            values

        );

    }

    // ======================================================
    // ACTUALIZAR
    // ======================================================

    async update(id, data) {

        const recurso = await this.getById(id);

        const sql = `

            UPDATE recursos

            SET

                categoria_id=?,
                titulo=?,
                descripcion=?,
                imagen=?,
                archivo=?,
                tipo=?,
                precio=?,
                gratuito=?,
                destacado=?,
                activo=?

            WHERE id=?

        `;

        const values = [

            data.categoria_id,

            data.titulo,

            data.descripcion,

            data.imagen,

            data.archivo,

            data.tipo,

            data.precio,

            data.gratuito ? 1 : 0,

            data.destacado ? 1 : 0,

            data.activo ? 1 : 0,

            id

        ];

        await resourceRepository.update(

            sql,

            values

        );

        return recurso;

    }

    // ======================================================
    // ELIMINAR
    // ======================================================

    async remove(id) {

        await this.getById(id);

        await resourceRepository.delete(id);

        return true;

    }

    // ======================================================
    // VALIDAR ACCESO
    // ======================================================

    async canDownload(usuario, recursoId) {

        const recurso = await this.getById(recursoId);

        // Administradores siempre tienen acceso
        if (usuario.admin) {

            return true;

        }

        // Recursos gratuitos
        if (recurso.gratuito === 1) {

            return true;

        }

        /*
         * Próximamente:
         *
         * - Verificar compra
         * - Verificar suscripción
         * - Verificar licencia institucional
         * - Verificar acceso temporal
         */

        throw new ApiError(

            403,

            "No posee permisos para descargar este recurso."

        );

    }

    // ======================================================
    // REGISTRAR DESCARGA
    // ======================================================

    async registerDownload(usuarioId, recursoId, ip) {

        // Próxima versión:
        // insertar registro en tabla descargas
        // actualizar estadísticas
        // generar auditoría

        return true;

    }

}

module.exports = new ResourceService();