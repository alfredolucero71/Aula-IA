import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import db from "../config/database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemaPath = path.join(
  __dirname,
  "schema.sql"
);

export function initializeDatabase() {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(schemaPath)) {
      return reject(
        new Error(
          `No se encontró schema.sql en ${schemaPath}`
        )
      );
    }

    const schema = fs.readFileSync(
      schemaPath,
      "utf8"
    );

    db.exec(schema, (error) => {
      if (error) {
        console.error(
          "❌ Error inicializando la base de datos:",
          error.message
        );

        reject(error);
        return;
      }

      console.log(
        "✓ Base de datos inicializada correctamente"
      );

      resolve();
    });
  });
}