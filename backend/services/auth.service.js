import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import env from "../config/env.js";

import {
  findUserByEmail,
  findUserById,
  createUser
} from "../repositories/user.repository.js";

function generateToken(user) {
  return jwt.sign(
    {
      sub: user.id,
      email: user.email,
      role: user.role,
      status: user.status
    },
    env.jwtSecret,
    {
      expiresIn: env.jwtExpiresIn
    }
  );
}

export async function register({
  name,
  email,
  password
}) {
  const normalizedEmail =
    email.trim().toLowerCase();

  const existingUser =
    await findUserByEmail(
      normalizedEmail
    );

  if (existingUser) {
    const error = new Error(
      "Ya existe una cuenta con ese correo electrónico."
    );

    error.statusCode = 409;
    error.code = "EMAIL_ALREADY_EXISTS";

    throw error;
  }

  const passwordHash =
    await bcrypt.hash(
      password,
      12
    );

  const user =
    await createUser({
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      role: "teacher",
      status: "pending"
    });

  return {
    user: sanitizeUser(user),
    message:
      "Registro realizado correctamente. Tu cuenta quedará pendiente de aprobación."
  };
}

export async function login({
  email,
  password
}) {
  const normalizedEmail =
    email.trim().toLowerCase();

  const user =
    await findUserByEmail(
      normalizedEmail
    );

  if (!user) {
    const error = new Error(
      "Correo electrónico o contraseña incorrectos."
    );

    error.statusCode = 401;
    error.code = "INVALID_CREDENTIALS";

    throw error;
  }

  const validPassword =
    await bcrypt.compare(
      password,
      user.password_hash
    );

  if (!validPassword) {
    const error = new Error(
      "Correo electrónico o contraseña incorrectos."
    );

    error.statusCode = 401;
    error.code = "INVALID_CREDENTIALS";

    throw error;
  }

  if (user.status !== "approved" &&
      user.role !== "admin") {
    const error = new Error(
      "Tu cuenta todavía no está habilitada."
    );

    error.statusCode = 403;
    error.code = "ACCOUNT_NOT_APPROVED";

    throw error;
  }

  const token =
    generateToken(user);

  return {
    token,
    user: sanitizeUser(user)
  };
}

export async function getCurrentUser(
  userId
) {
  const user =
    await findUserById(userId);

  if (!user) {
    const error = new Error(
      "Usuario no encontrado."
    );

    error.statusCode = 404;
    error.code = "USER_NOT_FOUND";

    throw error;
  }

  return sanitizeUser(user);
}

function sanitizeUser(user) {
  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
    created_at: user.created_at,
    updated_at: user.updated_at
  };
}