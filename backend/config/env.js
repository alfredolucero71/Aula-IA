import dotenv from "dotenv";
dotenv.config();

const nodeEnv = process.env.NODE_ENV || "development";
const jwtSecret = process.env.JWT_SECRET || "DEV_ONLY_CHANGE_THIS_SECRET";

if (nodeEnv === "production" && (jwtSecret.length < 32 || jwtSecret === "DEV_ONLY_CHANGE_THIS_SECRET" || jwtSecret.includes("CAMBIAR_") || jwtSecret.includes("REEMPLAZAR_"))) {
  throw new Error("Configuración insegura: en producción JWT_SECRET debe ser un secreto aleatorio de al menos 32 caracteres.");
}

const env = {
  nodeEnv,
  port: Number(process.env.PORT) || 4000,
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
  jwtSecret,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  databasePath: process.env.DATABASE_PATH || "./database/aulaia.sqlite",
  rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  rateLimitMaxRequests: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  adminEmail: process.env.ADMIN_EMAIL || "",
  adminPassword: process.env.ADMIN_PASSWORD || ""
};

export default env;
