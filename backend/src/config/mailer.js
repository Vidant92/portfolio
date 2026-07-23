import nodemailer from "nodemailer";
import { env } from "./env.js";

let transporter = null;

export function getTransporter() {
  if (!env.isSmtpConfigured()) return null;

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.smtp.host,
      port: env.smtp.port,
      secure: env.smtp.secure,
      auth: { user: env.smtp.user, pass: env.smtp.pass }
    });
  }

  return transporter;
}
