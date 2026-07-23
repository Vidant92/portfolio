import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { contactMethods, socials, profile } from "../../data/profile.js";
import { RevealOnScroll } from "../shared/RevealOnScroll.jsx";
import { MagneticButton } from "../shared/MagneticButton.jsx";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function openMailFallback() {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) throw new Error("request failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      openMailFallback();
      setStatus("fallback");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section id="contact" className="bg-deep text-ink-onDeep">
      <div className="shell section-pad">
        <RevealOnScroll>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-onDeep/60">
            <span className="h-[6px] w-[6px] rounded-full bg-accent" />
            Entry 05 — Contact
          </span>
          <h2 className="heading-display mt-4 text-4xl text-ink-onDeep sm:text-5xl lg:text-6xl">
            Let&apos;s build something worth logging
          </h2>
          <p className="mt-4 max-w-lg text-ink-onDeep/70">
            Open to SDE and full-stack internship conversations — reach out and I&apos;ll reply
            within a day.
          </p>
        </RevealOnScroll>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <RevealOnScroll direction="right" className="space-y-4">
            {contactMethods.map((method) => (
              <a
                key={method.name}
                href={method.href}
                className="flex items-center gap-4 rounded-2xl border border-lineDeep bg-deep-raised p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                  <method.icon className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="font-mono text-[11px] text-ink-onDeep/60">{method.name}</p>
                  <p className="font-medium text-ink-onDeep">{method.value}</p>
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-lineDeep bg-deep-raised p-5">
              <p className="font-mono text-[11px] text-ink-onDeep/60">Elsewhere</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-lineDeep text-ink-onDeep/70 transition-colors hover:border-accent hover:text-accent"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-lineDeep bg-deep-raised p-6 sm:p-8"
            >
              <Field label="Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-transparent text-sm text-ink-onDeep outline-none placeholder:text-ink-onDeep/40"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm text-ink-onDeep outline-none placeholder:text-ink-onDeep/40"
                />
              </Field>
              <Field label="Message">
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the opportunity or idea..."
                  className="w-full resize-none bg-transparent text-sm text-ink-onDeep outline-none placeholder:text-ink-onDeep/40"
                />
              </Field>

              <MagneticButton className="w-full">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-deep transition-all duration-300 hover:brightness-110 disabled:opacity-70"
                >
                  {status === "sending" && (
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Sending...
                    </motion.span>
                  )}
                  {status === "sent" && (
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Message sent!
                    </motion.span>
                  )}
                  {status === "fallback" && (
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Opening your mail app...
                    </motion.span>
                  )}
                  {status === "idle" && (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </MagneticButton>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] tracking-wide text-ink-onDeep/50">
        {label}
      </span>
      <div className="rounded-xl border border-lineDeep bg-white/[0.03] px-4 py-3 transition-colors focus-within:border-accent">
        {children}
      </div>
    </label>
  );
}
