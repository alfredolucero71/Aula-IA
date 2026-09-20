/**
 * ==========================================================
 * Aula IA v1.0
 * Validator Central
 * ==========================================================
 */

const { body, validationResult } = require("express-validator");

// ======================================================
// MIDDLEWARE GENERAL
// ======================================================

const validate = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({

            ok: false,

            errores: errors.array()

        });

    }

    next();

};

// ======================================================
// REGISTRO
// ======================================================

const validateRegister = [

    body("apellido_nombre")
        .trim()
        .notEmpty()
        .withMessage("Debe ingresar Apellido y Nombre.")
        .isLength({ min: 5, max: 120 })
        .withMessage("Apellido y Nombre inválido."),

    body("dni")
        .trim()
        .notEmpty()
        .withMessage("Debe ingresar el DNI.")
        .isNumeric()
        .withMessage("El DNI debe contener solamente números.")
        .isLength({ min: 7, max: 8 })
        .withMessage("El DNI debe tener entre 7 y 8 dígitos."),

    body("direccion")
        .trim()
        .notEmpty()
        .withMessage("Debe ingresar la dirección."),

    body("provincia")
        .trim()
        .notEmpty()
        .withMessage("Debe seleccionar una provincia."),

    body("telefono")
        .trim()
        .notEmpty()
        .withMessage("Debe ingresar un teléfono."),

    body("email")
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage("Correo electrónico inválido."),

    body("tipo_comunicacion")
        .trim()
        .isIn([
            "mail",
            "whatsapp",
            "sms",
            "telefono"
        ])
        .withMessage("Tipo de comunicación inválido."),

    body("password")
        .isLength({ min: 8 })
        .withMessage("La contraseña debe tener al menos 8 caracteres.")
        .matches(/[A-Z]/)
        .withMessage("Debe contener una mayúscula.")
        .matches(/[a-z]/)
        .withMessage("Debe contener una minúscula.")
        .matches(/[0-9]/)
        .withMessage("Debe contener un número."),

    validate

];

// ======================================================
// LOGIN
// ======================================================

const validateLogin = [

    body("email")
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage("Correo inválido."),

    body("password")
        .notEmpty()
        .withMessage("Debe ingresar la contraseña."),

    validate

];

// ======================================================
// ALTA / EDICIÓN DE USUARIO
// ======================================================

const validateUser = [

    body("apellido_nombre")
        .trim()
        .notEmpty(),

    body("dni")
        .trim()
        .isNumeric(),

    body("direccion")
        .trim()
        .notEmpty(),

    body("provincia")
        .trim()
        .notEmpty(),

    body("telefono")
        .trim()
        .notEmpty(),

    body("email")
        .trim()
        .normalizeEmail()
        .isEmail(),

    body("tipo_comunicacion")
        .trim()
        .isIn([
            "mail",
            "whatsapp",
            "sms",
            "telefono"
        ]),

    validate

];

// ======================================================
// RECURSOS
// ======================================================

const validateResource = [

    body("titulo")
        .trim()
        .notEmpty(),

    body("descripcion")
        .trim()
        .notEmpty(),

    body("precio")
        .isFloat({ min: 0 }),

    body("tipo")
        .trim()
        .notEmpty(),

    validate

];

// ======================================================
// PAGOS
// ======================================================

const validatePayment = [

    body("docente_id")
        .isInt(),

    body("recurso_id")
        .isInt(),

    validate

];

// ======================================================
// EXPORTACIÓN
// ======================================================

module.exports = {

    validateRegister,

    validateLogin,

    validateUser,

    validateResource,

    validatePayment

};