"use client";

import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useProjectContext } from "@/context/ProjectContext";

export default function Projects() {
  const { activeProject, setActiveProject } = useProjectContext();

  return (
    <section
      id="projects"
      className="relative px-8 py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/projects-bg.png" // <-- your image path
        alt=""
        aria-hidden
        className="
    absolute inset-0 w-full h-full object-cover
    opacity-1
    pointer-events-none
  "
      />

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto">
        ƒ
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((project, index) => {
            const isActive = activeProject === project.title;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setActiveProject(project.title);
                }}
                tabIndex={0}
                role="button"
                aria-label={`View skills used in ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setActiveProject(project.title);
                  }
                }}
                className={`
                  group cursor-pointer rounded-2xl overflow-hidden
                  border bg-white transition-all duration-300
                  ${
                    isActive
                      ? "border-blue-500 ring-2 ring-blue-300 shadow-xl scale-[1.02]"
                      : "border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-xl"
                  }
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                `}
              >
                {/* IMAGE */}
                <div className="h-48 w-full bg-slate-100 overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`
                          text-sm px-3 py-1 rounded-full transition
                          ${
                            isActive
                              ? "bg-blue-100 text-blue-700"
                              : "bg-slate-100 text-slate-700"
                          }
                        `}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        Source Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        Demo / Video
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* VIEW MORE PROJECTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://github.com/Tej0712"
            target="_blank"
            className="
      inline-flex items-center gap-2
      rounded-xl
      bg-blue-600
      px-10 py-4
      text-lg
      font-semibold
      text-white
      shadow-md
      transition-all
      hover:bg-blue-700
      hover:shadow-xl
      hover:-translate-y-1
      focus:outline-none
      focus:ring-4
      focus:ring-blue-300
    "
          >
            View More Projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
