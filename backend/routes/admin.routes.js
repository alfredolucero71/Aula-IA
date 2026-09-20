import { Router } from "express";

import {
  authenticateToken
} from "../middleware/auth.middleware.js";

import {
  requireRole
} from "../middleware/role.middleware.js";

import {
  getUsers,
  changeUserStatus
} from "../controllers/admin.controller.js";

const router = Router();

router.use(
  authenticateToken,
  requireRole("admin")
);

router.get(
  "/users",
  getUsers
);

router.patch(
  "/users/:userId/status",
  changeUserStatus
);

export default router;