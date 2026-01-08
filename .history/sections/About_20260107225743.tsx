"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/about-bg.png"
        alt=""
        aria-hidden
        className="absolute inset-10 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-10 bg-white/40 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-10 px-8 py-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 mb-6"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 leading-8"
          >
            I’m a Computer Science graduate with a strong interest in building
            reliable, scalable, and user-friendly software. I enjoy working
            across the stack, solving real-world problems, and continuously
            learning new technologies to grow as an engineer.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
