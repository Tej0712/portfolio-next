"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-8 py-28"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/education-bg.png" // place in /public
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-1"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-blue-900 text-center mb-14"
        >
          Education
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow-md transition"
        >
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-2xl font-semibold text-slate-900">
              Iowa State University
            </h3>
            <span className="text-slate-500">
              August 2022 – December 2025
            </span>
          </div>

          {/* Degree */}
          <p className="text-slate-700 font-medium">
            Bachelor of Science in Computer Science
          </p>
          <p className="text-slate-600 mb-4">
            Minor in Data Science & Artificial Intelligence
          </p>

          {/* GPA */}
          <p className="text-slate-600 mb-6">
            GPA: <span className="font-semibold text-slate-800">3.6 / 4.0</span>
          </p>

          {/* Coursework */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-3">
              Relevant Coursework
            </h4>

            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures & Algorithms",
                "Operating Systems",
                "Database Systems",
                "Machine Learning",
                "Artificial Intelligence",
                "Computer Vision",
                "Software Engineering",
                "Web Development",
                "Distributed Systems",
                "Programming Languages",
                "Computer Architecture",
              ].map((course) => (
                <span
                  key={course}
                  className="rounded-full bg-slate-100 px-4 py-1.5 text-sm text-slate-700 hover:bg-slate-200 transition"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
