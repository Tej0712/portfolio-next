"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiSpring,
  SiMysql,
  SiMongodb,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiGit,
  SiGithub,
  SiLinux,
  SiDocker,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";


const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "Java", icon: FaJava, color: "text-red-600" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "text-cyan-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-slate-800" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" },
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-slate-700" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ],
  },
  {
    category: "ML / AI",
    items: [
      { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
      { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
      { name: "OpenCV", icon: SiOpencv, color: "text-blue-500" },
    ],
  },
  {
    category: "Tools & Systems",
    items: [
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-slate-800" },
      { name: "Linux", icon: SiLinux, color: "text-black" },
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-8 py-28 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-16 text-slate-900"
        >
          Skills
        </motion.h2>

        {/* Categories */}
        <div className="space-y-14">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {group.items.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-white border border-slate-200 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <Icon
                      className={`text-4xl ${color} transition group-hover:scale-110`}
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
