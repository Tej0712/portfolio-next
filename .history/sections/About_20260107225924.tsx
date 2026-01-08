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

        
      </div>
    </section>
  );
}
