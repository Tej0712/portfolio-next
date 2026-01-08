"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-8 py-24"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/contact-bg.png" // put image in /public
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-1"
      />

      {/* Overlay */}
      <div className="absolute inset-10 bg-white/40 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
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
          collaborations. If you’d like to connect or discuss a project, feel
          free to reach out.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.a
            href="mailto:umeshsaiteja.poola@gmail.com"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border border-blue-300 text-blue-700 px-8 py-4 font-medium hover:bg-blue-200/50 hover:shadow-md"
          >
            Email Me
          </motion.a>

          <motion.a
            href="https://github.com/Tej0712"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border border-blue-300 text-blue-700 px-8 py-4 font-medium hover:bg-blue-200/50 hover:shadow-md"
          >
            GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/umesh-sai-teja-poola"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border border-blue-300 text-blue-700 px-8 py-4 font-medium hover:bg-blue-200/50 hover:shadow-md"
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
