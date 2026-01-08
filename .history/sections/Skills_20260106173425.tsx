"use client";

import { skills } from "../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
  id="skills"
  className="bg-slate-50 text-slate-900 px-6 py-24"
>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border border-gray-800 p-6"
            >
              <h3 className="text-xl font-semibold mb-4 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-gray-800 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
