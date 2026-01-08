"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-6 pt-24"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Hi, I’m <span className="text-blue-600">Umesh Sai Teja Poola</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
            I’m a software developer passionate about building clean, scalable,
            and user-focused applications. I enjoy working across the stack and
            turning ideas into reliable, well-designed solutions. I care deeply
            about code quality, performance, and meaningful user experiences.
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

        {/* RIGHT: PHOTO + EDUCATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col items-center md:items-end gap-6"
        >
          {/* Profile Image */}
          <img
            src="/profile.jpg"
            alt="Umesh"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-8 border-blue-600 shadow-xl"
          />

          {/* Education Card (NO OVERLAP) */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-lg px-6 py-5 max-w-sm w-full">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-lg">
                🎓
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Iowa State University
                </h4>

                <p className="text-sm text-slate-700 mt-1">
                  Bachelor of Science in Computer Science
                </p>

                <p className="text-sm text-slate-600">
                  Minor in Data Science & Applied AI
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  GPA: 3.60 · Dean’s List (3 years)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
