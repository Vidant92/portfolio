export function notFoundHandler(req, res) {
  res.status(404).json({ success: false, errors: ["Route not found."] });
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  console.error("[API ERROR]", err);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    errors: [err.publicMessage || "Something went wrong. Please try again shortly."]
  });
}
