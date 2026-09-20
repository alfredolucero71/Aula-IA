export function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    error: {
      code: "ROUTE_NOT_FOUND",
      message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`
    }
  });
}

export function errorHandler(
  error,
  req,
  res,
  next
) {
  console.error("❌ ERROR:", error);

  const statusCode =
    error.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    error: {
      code:
        error.code ||
        "INTERNAL_SERVER_ERROR",

      message:
        error.message ||
        "Se produjo un error inesperado."
    }
  });
}