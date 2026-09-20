import {
  listUsers,
  updateUserStatus
} from "../repositories/user.repository.js";

// ------------------------------------------
// LISTAR USUARIOS
// ------------------------------------------

export async function getUsers(req, res, next) {
  try {

    const users = await listUsers();

    return res.status(200).json({
      success: true,
      users
    });

  } catch (error) {

    next(error);
  }
}

// ------------------------------------------
// CAMBIAR ESTADO DE USUARIO
// ------------------------------------------

export async function changeUserStatus(req, res, next) {
  try {

    const { userId } = req.params;
    const { status } = req.body;

    const allowedStatuses = [
      "pending",
      "approved",
      "suspended",
      "rejected"
    ];

    if (!allowedStatuses.includes(status)) {

      return res.status(400).json({
        success: false,
        error: {
          code: "INVALID_STATUS",
          message: "Estado de usuario no válido."
        }
      });
    }

    const user = await updateUserStatus(
      userId,
      status
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

    return res.status(200).json({
      success: true,
      user
    });

  } catch (error) {

    next(error);
  }
}