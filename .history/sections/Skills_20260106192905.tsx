"use client";

import { motion } from "framer-motion";
import { useProjectContext } from "@/context/ProjectContext";

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

/* =======================
   PROJECT SCROLL MAP
======================= */
const projectSectionMap: Record<string, string> = {
  "ByteForce Crop Detection": "#projects",
  "Autonomous Robotic Chess Player": "#projects",
  "Cyclone Connect": "#projects",
  "iPhone Store": "#projects",
  "LEGv8 Assembly Projects": "#projects",
  "Portfolio Website": "#projects",
};

/* =======================
   SKILLS DATA
======================= */
const skills = [
  {
    category: "Languages",
    items: [
      {
        name: "Python",
        icon: SiPython,
        color: "text-blue-500",
        projects: ["ByteForce Crop Detection", "Autonomous Robotic Chess Player"],
      },
      {
        name: "Java",
        icon: FaJava,
        color: "text-red-600",
        projects: ["Cyclone Connect"],
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "text-blue-600",
        projects: ["LEGv8 Assembly Projects"],
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
        projects: ["iPhone Store", "Cyclone Connect"],
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
        projects: ["Portfolio Website"],
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: SiReact,
        color: "text-cyan-500",
        projects: ["Portfolio Website", "iPhone Store"],
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-slate-900",
        projects: ["Portfolio Website"],
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-sky-500",
        projects: ["Portfolio Website"],
      },
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-green-500",
        projects: ["iPhone Store"],
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-slate-700",
        projects: ["iPhone Store"],
      },
      {
        name: "Spring Boot",
        icon: SiSpring,
        color: "text-green-600",
        projects: ["Cyclone Connect"],
      },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ],
  },
  {
    category: "ML / AI",
    items: [
      {
        name: "PyTorch",
        icon: SiPytorch,
        color: "text-red-500",
        projects: ["ByteForce Crop Detection"],
      },
      { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
      {
        name: "OpenCV",
        icon: SiOpencv,
        color: "text-blue-500",
        projects: ["Autonomous Robotic Chess Player"],
      },
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

/* =======================
   ANIMATION VARIANTS
======================= */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/* =======================
   COMPONENT
======================= */
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
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-20 text-slate-900"
        >
          Skills
        </motion.h2>

        {/* Categories */}
        <div className="space-y-20">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl font-semibold text-slate-800 mb-8">
                {group.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
              >
                {group.items.map(({ name, icon: Icon, color, projects }) => (
                  <motion.div
                    key={name}
                    variants={cardVariants}
                    onClick={() => {
                      if (projects?.length) {
                        const target = projectSectionMap[projects[0]];
                        target &&
                          document
                            .querySelector(target)
                            ?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="
                      group relative cursor-pointer
                      flex flex-col items-center justify-center gap-3
                      rounded-xl bg-white border border-slate-200 p-5
                      shadow-sm transition-all duration-300
                      hover:-translate-y-1 hover:shadow-xl
                      hover:border-blue-300 hover:ring-2 hover:ring-blue-200
                    "
                  >
                    <Icon
                      className={`text-4xl ${color} transition-transform duration-300 group-hover:scale-110`}
                    />

                    {/* Name + Tooltip */}
                    <div className="relative text-center">
                      <span className="text-sm font-medium text-slate-700">
                        {name}
                      </span>

                      {projects && (
                        <div
                          className="
                            absolute left-1/2 top-full mt-2 -translate-x-1/2
                            opacity-0 group-hover:opacity-100
                            bg-slate-900 text-white text-xs rounded-md
                            px-3 py-2 whitespace-nowrap transition
                            pointer-events-none z-10
                          "
                        >
                          Used in: {projects.join(", ")}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
