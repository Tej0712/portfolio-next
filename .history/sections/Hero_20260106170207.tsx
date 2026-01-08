"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I’m <span className="text-blue-500">Umesh</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Software Engineer focused on building clean, scalable, and impactful web applications.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 transition hover:bg-blue-700"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="rounded-lg border border-gray-400 px-6 py-3 transition hover:bg-gray-800"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
