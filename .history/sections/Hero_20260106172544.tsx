"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6 pt-24">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Hi, I’m{" "}
            <span className="text-blue-600">Umesh</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
            Software Engineer passionate about building clean, scalable, and
            user-focused applications using modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT: PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/profile.jpg"
            alt="Umesh"
            className="w-60 h-60 md:w-100 md:h-100 rounded-full object-cover border-10 border-blue-600 shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
