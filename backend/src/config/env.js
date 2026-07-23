import "dotenv/config";

function parseOrigins(raw) {
  if (!raw) return ["http://localhost:5173"];
  return raw.split(",").map((origin) => origin.trim());
}

export const env = {
  port: Number(process.env.PORT) || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  corsOrigins: parseOrigins(process.env.CORS_ORIGIN),
  mongodbUri: process.env.MONGODB_URI || "",
  contactReceiverEmail: process.env.CONTACT_RECEIVER_EMAIL || "bhardwajvidant39@gmail.com",
  smtp: {
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || ""
  },
  isSmtpConfigured() {
    return Boolean(this.smtp.host && this.smtp.user && this.smtp.pass);
  },
  isMongoConfigured() {
    return Boolean(this.mongodbUri);
  }
};
