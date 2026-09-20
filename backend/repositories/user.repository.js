import db from "../config/database.js";

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (error) {
      if (error) {
        reject(error);
        return;
      }

      resolve({
        id: this.lastID,
        changes: this.changes
      });
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (error, row) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(row);
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (error, rows) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(rows);
    });
  });
}

export async function findUserById(id) {
  return get(
    `
      SELECT
        id,
        email,
        name,
        role,
        status,
        created_at,
        updated_at
      FROM users
      WHERE id = ?
    `,
    [id]
  );
}

export async function findUserByEmail(email) {
  return get(
    `
      SELECT *
      FROM users
      WHERE email = ?
    `,
    [email]
  );
}

export async function createUser({
  email,
  passwordHash,
  name,
  role = "teacher",
  status = "pending"
}) {
  const result = await run(
    `
      INSERT INTO users
      (
        email,
        password_hash,
        name,
        role,
        status,
        created_at,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `,
    [
      email,
      passwordHash,
      name,
      role,
      status
    ]
  );

  return findUserById(result.id);
}

export async function updateUserStatus(
  userId,
  status
) {
  await run(
    `
      UPDATE users
      SET
        status = ?,
        updated_at = datetime('now')
      WHERE id = ?
    `,
    [status, userId]
  );

  return findUserById(userId);
}

export async function listUsers() {
  return all(
    `
      SELECT
        id,
        email,
        name,
        role,
        status,
        created_at,
        updated_at
      FROM users
      ORDER BY created_at DESC
    `
  );
}