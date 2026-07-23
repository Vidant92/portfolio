import { env } from "../config/env.js";
import { getTransporter } from "../config/mailer.js";
import { isDbConnected } from "../config/db.js";
import { ContactMessage } from "../models/ContactMessage.js";

export async function submitContactMessage(req, res, next) {
  const { name, email, message } = req.body;

  try {
    let savedId = null;

    if (isDbConnected()) {
      const saved = await ContactMessage.create({ name, email, message });
      savedId = saved._id;
    } else {
      console.info("[contact] DB not connected — logging submission only:", { name, email });
    }

    const transporter = getTransporter();
    if (transporter) {
      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${env.smtp.user}>`,
        to: env.contactReceiverEmail,
        replyTo: email,
        subject: `Portfolio inquiry from ${name}`,
        text: `${message}\n\n— ${name} (${email})`
      });
    } else {
      console.info("[contact] SMTP not configured, message not emailed:", savedId || "(unsaved)");
    }

    return res.status(201).json({
      success: true,
      message: "Your message has been received. I'll get back to you soon.",
      delivered: Boolean(transporter)
    });
  } catch (err) {
    err.publicMessage = "Could not send your message right now. Please try again shortly.";
    next(err);
  }
}
