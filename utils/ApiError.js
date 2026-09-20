/**
 * ==========================================================
 * Aula IA
 * Clase para manejar errores personalizados
 * ==========================================================
 */

class ApiError extends Error {

    constructor(status, message) {

        super(message);

        this.status = status;

    }

}

module.exports = ApiError;