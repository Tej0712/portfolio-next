"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="px-8 py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-slate-900 mb-10 text-center"
        >
          Education
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-2xl font-semibold text-slate-900">
              Iowa State University
            </h3>
            <span className="text-slate-500">
              August 2022 – December 2025
            </span>
          </div>

          <p className="text-slate-700 font-medium mb-2">
            Bachelor of Science in Computer Science  
            <span className="block text-slate-600 text-sm">
              Minor in Data Science & Artificial Intelligence
            </span>
          </p>

          <p className="text-slate-600 mb-4">
            GPA: <span className="font-medium text-slate-800">3.6 / 4.0</span>
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
                "Web Development",
                "Software Engineering",
                "Programming Languages",
                "Distributed Systems",
                "Computer Architecture",
              ].map((course) => (
                <span
                  key={course}
                  className="rounded-full bg-slate-100 px-4 py-1.5 text-sm text-slate-700"
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
