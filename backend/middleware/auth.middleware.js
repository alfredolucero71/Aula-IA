import jwt from "jsonwebtoken";
import env from "../config/env.js";
import { findUserById } from "../repositories/user.repository.js";

export async function authenticateToken(req, res, next) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ success: false, error: { code: "AUTH_REQUIRED", message: "Debes iniciar sesión para acceder a este recurso." } });
  }

  const [type, token, extra] = authorization.split(" ");
  if (type !== "Bearer" || !token || extra) {
    return res.status(401).json({ success: false, error: { code: "INVALID_AUTH_HEADER", message: "Formato de autenticación inválido." } });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, env.jwtSecret);
  } catch {
    return res.status(401).json({ success: false, error: { code: "INVALID_TOKEN", message: "La sesión no es válida o ha expirado." } });
  }

  try {
    // Consultar el estado y el rol actuales evita confiar en claims antiguos del JWT.
    const user = await findUserById(decoded.sub);
    if (!user) {
      return res.status(401).json({ success: false, error: { code: "USER_NOT_FOUND", message: "La cuenta asociada a esta sesión ya no existe." } });
    }
    if (user.status !== "approved") {
      return res.status(403).json({ success: false, error: { code: "ACCOUNT_NOT_APPROVED", message: "La cuenta no está habilitada para acceder." } });
    }
    req.user = { sub: user.id, email: user.email, role: user.role, status: user.status };
    return next();
  } catch (error) {
    return next(error);
  }
}
