import {
  register,
  login,
  getCurrentUser
} from "../services/auth.service.js";

export async function registerController(
  req,
  res,
  next
) {
  try {
    const result =
      await register(req.body);

    res.status(201).json({
      success: true,
      ...result
    });
  } catch (error) {
    next(error);
  }
}

export async function loginController(
  req,
  res,
  next
) {
  try {
    const result =
      await login(req.body);

    res.json({
      success: true,
      ...result
    });
  } catch (error) {
    next(error);
  }
}

export async function meController(
  req,
  res,
  next
) {
  try {
    const user =
      await getCurrentUser(
        req.user.sub
      );

    res.json({
      success: true,
      user
    });
  } catch (error) {
    next(error);
  }
}