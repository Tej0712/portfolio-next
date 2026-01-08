"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-8 py-24 bg-gradient-to-b from-blue-50 to-blue-100"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold mb-6 text-slate-900"
        >
          Get In Touch
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-lg text-slate-600 mb-10"
        >
          I’m currently open to software engineering opportunities and
          collaborations. Feel free to reach out.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:umeshsaiteja.poola@gmail.com"
            className="rounded-lg bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition"
          >
            Email Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/Tej0712"
            target="_blank"
            className="rounded-lg border border-blue-300 text-blue-700 px-6 py-3 hover:bg-blue-200/40 transition"
          >
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.linkedin.com/in/umesh-sai-teja-poola"
            target="_blank"
            className="rounded-lg border border-blue-300 text-blue-700 px-6 py-3 hover:bg-blue-200/40 transition"
          >
            LinkedIn
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
