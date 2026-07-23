import { Router } from "express";
import { submitContactMessage } from "../controllers/contactController.js";
import { validateContact } from "../middleware/validateContact.js";
import { contactRateLimiter } from "../middleware/rateLimiter.js";

const router = Router();

router.post("/", contactRateLimiter, validateContact, submitContactMessage);

export default router;
