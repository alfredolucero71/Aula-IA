import jwt from "jsonwebtoken";
import env from "../config/env.js";

export function authenticateToken(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({
      success: false,
      error: {
        code: "AUTH_REQUIRED",
        message: "Debes iniciar sesión para acceder a este recurso."
      }
    });
  }

  const [type, token] = authorization.split(" ");

  if (type !== "Bearer" || !token) {
    return res.status(401).json({
      success: false,
      error: {
        code: "INVALID_AUTH_HEADER",
        message: "Formato de autenticación inválido."
      }
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      env.jwtSecret
    );

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: {
        code: "INVALID_TOKEN",
        message: "La sesión no es válida o ha expirado."
      }
    });
  }
}