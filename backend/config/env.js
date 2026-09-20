import dotenv from "dotenv";

dotenv.config();

const env = {
  nodeEnv: process.env.NODE_ENV || "development",

  port: Number(process.env.PORT) || 4000,

  frontendUrl:
    process.env.FRONTEND_URL || "http://localhost:5173",

  jwtSecret:
    process.env.JWT_SECRET || "DEV_ONLY_CHANGE_THIS_SECRET",

  jwtExpiresIn:
    process.env.JWT_EXPIRES_IN || "7d",

  databasePath:
    process.env.DATABASE_PATH || "./database/aulaia.sqlite",

  rateLimitWindowMs:
    Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,

  rateLimitMaxRequests:
    Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,

  adminEmail:
    process.env.ADMIN_EMAIL || "",

  adminPassword:
    process.env.ADMIN_PASSWORD || ""
};

export default env;