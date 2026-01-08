"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden px-8 py-28"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/achievements-bg.png" // reuse same style bg if you want
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-slate-900 mb-16"
        >
          Achievements & Awards
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 rounded-2xl shadow-md border border-slate-200 overflow-hidden"
          >
            <img
              src="/deans-list.jpg"
              alt="Dean’s List Certificate"
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Dean’s List (3 Years)
              </h3>
              <p className="text-slate-600 text-sm">
                Recognized for consistent academic excellence at Iowa State
                University across multiple semesters.
              </p>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/90 rounded-2xl shadow-md border border-slate-200 overflow-hidden"
          >
            <img
              src="/best-backend.jpg"
              alt="Best Backend Developer Award"
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Best Backend Developer & Project Manager
              </h3>
              <p className="text-slate-600 text-sm">
                Awarded by faculty for leading backend development and project
                execution in a team-based academic project.
              </p>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/90 rounded-2xl shadow-md border border-slate-200 overflow-hidden"
          >
            <img
              src="/academic-award.jpg"
              alt="Academic Excellence Recognition"
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Academic Excellence Recognition
              </h3>
              <p className="text-slate-600 text-sm">
                Honored by the Dean for outstanding academic performance and
                dedication to excellence.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
