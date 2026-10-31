
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
const SERVICE_ID = "service_lks66ba";
const TEMPLATE_ID = "template_eoe9c9g";
const PUBLIC_KEY = "Glo66h9Lsfwz2olq6";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
  id="contact"
  className="scroll-mt-28 px-6 py-28 md:px-12"
>
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-purple-400">
            / Get In Touch
          </p>

          <h2 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
            Have an idea?
            <span className="block text-purple-400">
              Let's build it.
            </span>
          </h2>

          <p className="mt-8 max-w-md leading-8 text-gray-400">
            Looking for a frontend developer?
            Tell me about your project and let's
            create something meaningful together.
          </p>

          <a
            href="https://github.com/sapida-jamshidi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-purple-300 hover:text-white"
          >
            Explore my GitHub
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-10"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-3 block text-sm text-gray-300"
            >
              Your Name
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              maxLength={100}
              placeholder="John Doe"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-3 block text-sm text-gray-300"
            >
              Email Address
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              maxLength={254}
              placeholder="john@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-3 block text-sm text-gray-300"
            >
              Your Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={3000}
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-purple-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-purple-600 px-6 py-4 font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send size={18} />
          </button>

          {status === "success" && (
            <p
              role="status"
              className="text-center text-sm text-green-400"
            >
              Message sent successfully!
              Thank you for reaching out.
            </p>
          )}

          {status === "error" && (
            <p
              role="alert"
              className="text-center text-sm text-red-400"
            >
              Failed to send message.
              Please try again later.
            </p>
          )}

          <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <Mail size={14} />
            Your message will be sent securely.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
