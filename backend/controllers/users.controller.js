import {
  findUserById
} from "../repositories/user.repository.js";

export async function getProfile(
  req,
  res,
  next
) {
  try {
    const user =
      await findUserById(
        req.user.sub
      );

    if (!user) {
      return res.status(404).json({
        success: false,
        error: {
          code: "USER_NOT_FOUND",
          message: "Usuario no encontrado."
        }
      });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
        created_at: user.created_at
      }
    });
  } catch (error) {
    next(error);
  }
}