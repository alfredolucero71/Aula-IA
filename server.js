/**
 * ==========================================================
 * Aula IA v1.0
 * Servidor Principal
 * ==========================================================
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const db = require("./config/database");

const authRoutes = require("./routes/auth.routes");
const usersRoutes = require("./routes/users.routes");

const app = express();
const resourceRoutes = require("./routes/resource.routes");

// ======================================================
// CONFIGURACIÓN
// ======================================================

app.disable("x-powered-by");

app.use(helmet());

app.use(cors());

app.use(express.json({ limit: "20mb" }));

app.use(express.urlencoded({

    extended: true,

    limit: "20mb"

}));

app.use(morgan("dev"));

app.use(express.static("public"));

app.use("/api/resources", resourceRoutes);


// ======================================================
// ENDPOINT DE ESTADO
// ======================================================

app.get("/api/status", (req, res) => {

    res.json({

        ok: true,

        proyecto: "Aula IA",

        version: "1.0",

        servidor: "Activo",

        fecha: new Date()

    });

});


// ======================================================
// RUTAS
// ======================================================

app.use("/api/auth", authRoutes);

app.use("/api/users", usersRoutes);


// ======================================================
// RUTA NO ENCONTRADA
// ======================================================

app.use((req, res) => {

    res.status(404).json({

        ok: false,

        mensaje: "Ruta inexistente."

    });

});


// ======================================================
// ERROR GLOBAL
// ======================================================

app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).json({

        ok: false,

        mensaje: "Error interno del servidor."

    });

});


// ======================================================
// INICIAR SERVIDOR
// ======================================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.clear();

    console.log("");

    console.log("========================================");

    console.log("         AULA IA v1.0");

    console.log("========================================");

    console.log("");

    console.log("Servidor iniciado correctamente.");

    console.log("");

    console.log("Puerto :", PORT);

    console.log("");

    console.log("http://localhost:" + PORT);

    console.log("");

});


// ======================================================
// CIERRE CONTROLADO
// ======================================================

process.on("SIGINT", () => {

    console.log("");

    console.log("Cerrando servidor...");

    db.close((err) => {

        if (err) {

            console.error(err.message);

        } else {

            console.log("Base SQLite cerrada correctamente.");

        }

        process.exit(0);

    });

});


// ======================================================
// ERRORES NO CONTROLADOS
// ======================================================

process.on("uncaughtException", (err) => {

    console.error(err);

});

process.on("unhandledRejection", (err) => {

    console.error(err);

});