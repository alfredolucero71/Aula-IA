import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import env from "./config/env.js";
import { initializeDatabase } from "./database/init.js";

import {
  generalRateLimit
} from "./middleware/rateLimit.middleware.js";

import {
  notFoundHandler,
  errorHandler
} from "./middleware/error.middleware.js";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import adminRoutes from "./routes/admin.routes.js";

// ------------------------------------------
// APP
// ------------------------------------------

const app = express();

// ------------------------------------------
// SEGURIDAD
// ------------------------------------------

app.disable("x-powered-by");

app.use(
  helmet()
);

app.use(
  cors({
    origin: env.frontendUrl,
    credentials: true
  })
);

// ------------------------------------------
// LOGGING
// ------------------------------------------

app.use(
  morgan(
    env.nodeEnv === "production"
      ? "combined"
      : "dev"
  )
);

// ------------------------------------------
// PARSERS
// ------------------------------------------

app.use(
  express.json({
    limit: "2mb"
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "2mb"
  })
);

// ------------------------------------------
// RATE LIMIT
// ------------------------------------------

app.use(
  "/api",
  generalRateLimit
);

// ------------------------------------------
// HEALTH CHECK
// ------------------------------------------

app.get(
  "/api/health",
  (req, res) => {
    res.status(200).json({
      success: true,
      application: "Docentes IA PRO",
      version: "0.9.0",
      status: "online",
      timestamp: new Date().toISOString()
    });
  }
);

// ------------------------------------------
// API ROUTES
// ------------------------------------------

// Autenticación
app.use(
  "/api/auth",
  authRoutes
);

// Usuarios
app.use(
  "/api/users",
  usersRoutes
);

// Administración
app.use(
  "/api/admin",
  adminRoutes
);

// ------------------------------------------
// 404
// ------------------------------------------

app.use(
  notFoundHandler
);

// ------------------------------------------
// ERROR HANDLER
// ------------------------------------------

app.use(
  errorHandler
);

// ------------------------------------------
// DATABASE + SERVER
// ------------------------------------------

async function startServer() {
  try {

    await initializeDatabase();

    app.listen(
      env.port,
      () => {

        console.log("");

        console.log(
          "======================================"
        );

        console.log(
          "   DOCENTES IA PRO - AULAIA"
        );

        console.log(
          "======================================"
        );

        console.log(
          `✓ Servidor: http://localhost:${env.port}`
        );

        console.log(
          `✓ Health: http://localhost:${env.port}/api/health`
        );

        console.log(
          `✓ Entorno: ${env.nodeEnv}`
        );

        console.log(
          "======================================"
        );

        console.log("");
      }
    );

  } catch (error) {

    console.error("");
    console.error(
      "======================================"
    );

    console.error(
      "ERROR AL INICIAR DOCENTES IA PRO"
    );

    console.error(
      "======================================"
    );

    console.error(
      error
    );

    console.error("");

    process.exit(1);
  }
}

// ------------------------------------------
// MANEJO DE ERRORES NO CONTROLADOS
// ------------------------------------------

process.on(
  "unhandledRejection",
  (reason) => {

    console.error(
      "Unhandled Promise Rejection:",
      reason
    );
  }
);

process.on(
  "uncaughtException",
  (error) => {

    console.error(
      "Uncaught Exception:",
      error
    );

    process.exit(1);
  }
);

// ------------------------------------------
// START
// ------------------------------------------

startServer();