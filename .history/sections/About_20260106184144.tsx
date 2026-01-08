"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="px-8 py-24 bg-gradient-to-b from-slate-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-slate-900 mb-6"
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-lg text-slate-600 leading-8"
        >
          I’m a Computer Science graduate passionate about building efficient,
          scalable, and user-focused software. I enjoy working across the stack,
          solving real-world problems, and continuously learning new technologies
          to improve my craft.
        </motion.p>

      </div>
    </section>
  );
}
