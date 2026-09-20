import { Router } from "express";

import {
  registerController,
  loginController,
  meController
} from "../controllers/auth.controller.js";

import {
  authenticateToken
} from "../middleware/auth.middleware.js";

const router = Router();

router.post(
  "/register",
  registerController
);

router.post(
  "/login",
  loginController
);

router.get(
  "/me",
  authenticateToken,
  meController
);

export default router;