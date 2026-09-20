import sqlite3 from "sqlite3";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import env from "./env.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const databasePath = path.resolve(
  __dirname,
  "..",
  env.databasePath
);

const databaseDirectory = path.dirname(databasePath);

if (!fs.existsSync(databaseDirectory)) {
  fs.mkdirSync(databaseDirectory, {
    recursive: true
  });
}

sqlite3.verbose();

const db = new sqlite3.Database(
  databasePath,
  (error) => {
    if (error) {
      console.error(
        "❌ Error conectando con SQLite:",
        error.message
      );
      process.exit(1);
    }

    console.log(
      `✓ SQLite conectado: ${databasePath}`
    );
  }
);

db.run("PRAGMA foreign_keys = ON");

export default db;