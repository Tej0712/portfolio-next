"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-8 py-24">
      {/* BACKGROUND IMAGE */}
      <img
        src="/about-bg.png" // put image in /public
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-1"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

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
          About me
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-lg text-slate-600 mb-10"
        >
          I’m a Computer Science graduate with a strong interest in building
          reliable, scalable, and user-friendly software. I enjoy working across
          the stack, solving real-world problems, and continuously learning new
          technologies to grow as an engineer.
        </motion.p>

        
      </div>
    </section>
  );
}
