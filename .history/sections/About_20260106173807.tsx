"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-slate-50 text-slate-900 px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-300 leading-8"
        >
          I’m a Computer Science graduate passionate about building efficient,
          scalable, and user-focused software. I enjoy working across the stack,
          solving real-world problems, and continuously learning new
          technologies to improve my craft.
        </motion.p>
      </div>
    </section>
  );
}
