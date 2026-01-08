"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-8 py-28">
      {/* BACKGROUND IMAGE */}
      <img
        src="/about-bg.png"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-10 text-slate-900"
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-lg text-slate-700 leading-8 text-center max-w-3xl mx-auto mb-16"
        >
          I’m a Computer Science graduate who enjoys building software that is
          clean, scalable, and thoughtfully designed. I like working on problems
          end-to-end—from understanding requirements to implementing reliable
          solutions and refining user experience.
        </motion.p>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-white/80 rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              What I Build
            </h3>
            <p className="text-slate-600 leading-7">
              I work on full-stack applications, systems projects, and
              data-driven solutions. My projects range from web platforms and
              backend services to applied machine learning and computer vision
              systems.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="bg-white/80 rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              How I Work
            </h3>
            <p className="text-slate-600 leading-7">
              I value clear code, strong fundamentals, and continuous learning.
              I enjoy collaborating with others, breaking down complex problems,
              and improving performance, reliability, and maintainability.
            </p>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="bg-white/80 rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              What I’m Looking For
            </h3>
            <p className="text-slate-600 leading-7">
              I’m seeking software engineering roles where I can grow as an
              engineer, work on meaningful problems, and contribute to products
              that have real-world impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
