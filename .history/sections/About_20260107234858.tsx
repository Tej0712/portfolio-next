"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="px-8 py-28 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-slate-900 mb-16"
        >
          About Me
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            bg-white
            rounded-3xl
            shadow-sm
            border border-slate-200
            p-10
            grid grid-cols-1 md:grid-cols-3
            gap-10
            items-center
          "
        >
          {/* LEFT: PHOTO */}
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Umesh Sai Teja Poola"
              className="
                w-48 h-48
                rounded-full
                object-cover
                border-4 border-blue-600
                shadow-md
              "
            />
          </div>

          {/* RIGHT: TEXT */}
          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              I’m a software developer with a strong foundation in computer
              science and a passion for building clean, scalable, and
              user-focused applications.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              I enjoy working across the stack — from designing intuitive
              front-end experiences to developing reliable back-end systems —
              and turning ideas into well-structured, production-ready
              solutions.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              I care deeply about code quality, performance, and continuous
              learning, and I’m always excited to take on meaningful technical
              challenges that help me grow as an engineer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
