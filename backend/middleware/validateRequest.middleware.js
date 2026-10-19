import { validationResult } from "express-validator";

export function validateRequest(req, res, next) {
  const result = validationResult(req);
  if (result.isEmpty()) return next();
  return res.status(400).json({
    success: false,
    error: {
      code: "VALIDATION_ERROR",
      message: "Revisá los datos enviados.",
      details: result.array({ onlyFirstError: true }).map(({ path, msg }) => ({ field: path, message: msg }))
    }
  });
}
