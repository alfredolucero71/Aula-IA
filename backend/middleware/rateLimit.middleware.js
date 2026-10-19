import rateLimit from "express-rate-limit";
import env from "../config/env.js";

const message = (code, text) => ({ success: false, error: { code, message: text } });

export const generalRateLimit = rateLimit({
  windowMs: env.rateLimitWindowMs,
  limit: env.rateLimitMaxRequests,
  standardHeaders: true,
  legacyHeaders: false,
  message: message("RATE_LIMIT_EXCEEDED", "Has realizado demasiadas solicitudes. Intenta nuevamente más tarde.")
});

export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: message("AUTH_RATE_LIMIT_EXCEEDED", "Se alcanzó el límite temporal de intentos. Espera unos minutos antes de volver a intentar.")
});

export const aiRateLimit = rateLimit({
  windowMs: 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: message("AI_RATE_LIMIT_EXCEEDED", "Has alcanzado temporalmente el límite de solicitudes IA.")
});
