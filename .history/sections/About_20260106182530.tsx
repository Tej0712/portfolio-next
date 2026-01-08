"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="px-8 py-24 bg-gradient-to-b from-slate-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>

        <p className="text-lg text-slate-600 leading-8">
          I’m a Computer Science graduate passionate about building efficient,
          scalable, and user-focused software. I enjoy working across the stack,
          solving real-world problems, and continuously learning new
          technologies to improve my craft.
        </p>
      </div>
    </section>
  );
}
