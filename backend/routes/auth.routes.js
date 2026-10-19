import { Router } from "express";
import { body } from "express-validator";
import { registerController, loginController, meController } from "../controllers/auth.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";
import { authRateLimit } from "../middleware/rateLimit.middleware.js";
import { validateRequest } from "../middleware/validateRequest.middleware.js";

const router = Router();
const emailValidation = body("email")
  .isString().withMessage("El correo electrónico es obligatorio.")
  .trim()
  .isEmail().withMessage("Ingresá un correo electrónico válido.")
  .isLength({ max: 254 }).withMessage("El correo electrónico es demasiado largo.");

router.post("/register", authRateLimit,
  body("name").isString().withMessage("El nombre es obligatorio.").trim().isLength({ min: 2, max: 100 }).withMessage("El nombre debe tener entre 2 y 100 caracteres."),
  emailValidation,
  body("password").isString().withMessage("La contraseña es obligatoria.").isLength({ min: 12, max: 72 }).withMessage("La contraseña debe tener entre 12 y 72 caracteres."),
  validateRequest, registerController
);

router.post("/login", authRateLimit,
  emailValidation,
  body("password").isString().withMessage("La contraseña es obligatoria.").isLength({ min: 1, max: 72 }).withMessage("La contraseña no es válida."),
  validateRequest, loginController
);

router.get("/me", authenticateToken, meController);
export default router;
