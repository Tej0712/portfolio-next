"use client";

import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-8 py-28"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src="/experience-bg.png" // <-- put your image in /public
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-1 pointer-events-none"
      />

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-20 text-slate-900"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-blue-800 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {experience.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-6 h-4 w-4 rounded-full bg-black-800 md:left-1/2 md:-translate-x-1/2" />

                {/* Card */}
                <div className="
                  mt-2 w-full md:w-[46%]
                  rounded-2xl
                  bg-white/90 backdrop-blur-sm
                  border border-slate-200
                  p-8 shadow-sm
                ">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.role}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {item.company} • {item.location}
                  </p>

                  <p className="text-sm font-medium text-blue-600 mt-2">
                    {item.period}
                  </p>

                  <ul className="mt-6 space-y-3 text-slate-600">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
