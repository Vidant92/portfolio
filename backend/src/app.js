import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import contactRoutes from "./routes/contactRoutes.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js";

export function createApp() {
  const app = express();

  app.use(cors({ origin: env.corsOrigins, methods: ["GET", "POST"] }));
  app.use(express.json({ limit: "20kb" }));

  app.get("/api/health", (req, res) => {
    res.json({ success: true, status: "ok", timestamp: new Date().toISOString() });
  });

  app.use("/api/contact", contactRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
