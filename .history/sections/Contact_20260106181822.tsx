"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 text-slate-900 px-6 py-24">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-300 mb-10"
        >
          I’m currently open to software engineering opportunities and
          collaborations. Feel free to reach out!
        </motion.p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:umeshsaiteja.poola@gmail.com"
            className="rounded-lg bg-blue-600 px-6 py-3 transition hover:bg-blue-700"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Tej0712"
            target="_blank"
            className="rounded-lg border border-gray-400 px-6 py-3 transition hover:bg-gray-800"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/umesh-sai-teja-poola"
            target="_blank"
            className="rounded-lg border border-gray-400 px-6 py-3 transition hover:bg-gray-800"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
