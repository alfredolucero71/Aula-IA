import bcrypt from "bcrypt";
import env from "../config/env.js";
import db from "../config/database.js";
import { createUser, findUserByEmail } from "../repositories/user.repository.js";

const getAdminCount = () => new Promise((resolve, reject) => {
  db.get("SELECT COUNT(*) AS count FROM users WHERE role = 'admin'", (error, row) => {
    if (error) return reject(error);
    resolve(row.count);
  });
});

async function run() {
  const email = env.adminEmail.trim().toLowerCase();
  const password = env.adminPassword;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Set a valid ADMIN_EMAIL in backend/.env.");
  if (!password || password.length < 16 || /CAMBIAR|REEMPLAZAR|EJEMPLO/i.test(password)) throw new Error("Set a unique ADMIN_PASSWORD of at least 16 characters.");
  if ((await getAdminCount()) > 0) throw new Error("An administrator already exists; no account was changed.");
  if (await findUserByEmail(email)) throw new Error("That email already belongs to an account; no role was changed.");

  const passwordHash = await bcrypt.hash(password, 12);
  await createUser({ name: "AulaIA Administrator", email, passwordHash, role: "admin", status: "approved" });
  console.log("Initial administrator created. Remove ADMIN_PASSWORD from backend/.env and store it securely.");
}

try {
  await run();
} catch (error) {
  console.error("Initial administrator setup failed:", error.message);
  process.exitCode = 1;
} finally {
  await new Promise((resolve) => db.close(() => resolve()));
}
