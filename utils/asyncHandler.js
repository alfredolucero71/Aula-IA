/**
 * ==========================================================
 * Aula IA
 * Wrapper para funciones async
 * Evita escribir try/catch en todos los controladores.
 * ==========================================================
 */

module.exports = (fn) => {

    return (req, res, next) => {

        Promise.resolve(

            fn(req, res, next)

        ).catch(next);

    };

};