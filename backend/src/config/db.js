import mongoose from "mongoose";
import { env } from "./env.js";

let connected = false;

export async function connectDB() {
  if (!env.isMongoConfigured()) {
    console.info("[db] MONGODB_URI not set — contact submissions will be logged only.");
    return false;
  }

  try {
    await mongoose.connect(env.mongodbUri);
    connected = true;
    console.log("[db] Connected to MongoDB");
    return true;
  } catch (err) {
    console.error("[db] MongoDB connection failed:", err.message);
    return false;
  }
}

export function isDbConnected() {
  return connected;
}
