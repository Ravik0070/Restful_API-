const ErrorHAndler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  //wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHAndler(message, 400);
  }
  res.status(err.statusCode).json({
    success: true,
    message: err.message,
  });
};
