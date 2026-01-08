"use client";

import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

const coreSkills = [
  { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" },
];

export default function CoreSkills() {
  return (
    <section id="core-skills" className="px-8 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">
          Core Skills
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {coreSkills.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="
                flex flex-col items-center justify-center gap-3
                rounded-xl border border-slate-200 bg-white p-6
                shadow-sm transition
                hover:-translate-y-1 hover:shadow-md
              "
            >
              <Icon className={`text-4xl ${color}`} />
              <span className="text-sm font-medium text-slate-700">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
