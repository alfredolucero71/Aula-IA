import rateLimit from "express-rate-limit";
import env from "../config/env.js";

export const generalRateLimit =
  rateLimit({
    windowMs:
      env.rateLimitWindowMs,

    limit:
      env.rateLimitMaxRequests,

    standardHeaders: true,

    legacyHeaders: false,

    message: {
      success: false,
      error: {
        code: "RATE_LIMIT_EXCEEDED",
        message:
          "Has realizado demasiadas solicitudes. Intenta nuevamente más tarde."
      }
    }
  });

export const aiRateLimit =
  rateLimit({
    windowMs: 60 * 1000,

    limit: 10,

    standardHeaders: true,

    legacyHeaders: false,

    message: {
      success: false,
      error: {
        code: "AI_RATE_LIMIT_EXCEEDED",
        message:
          "Has alcanzado temporalmente el límite de solicitudes IA."
      }
    }
  });