const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth.controller");

const authMiddleware = require("../middleware/auth.middleware");

const {

    validateRegister,

    validateLogin

} = require("../utils/validator");


// ======================================================
// REGISTRO
// ======================================================

router.post(

    "/register",

    validateRegister,

    authController.register

);


// ======================================================
// LOGIN
// ======================================================

router.post(

    "/login",

    validateLogin,

    authController.login

);


// ======================================================
// PERFIL
// ======================================================

router.get(

    "/profile",

    authMiddleware,

    authController.profile

);


// ======================================================
// LOGOUT
// ======================================================

router.post(

    "/logout",

    authMiddleware,

    authController.logout

);


module.exports = router;