"use client";

import { useProjectContext } from "@/context/ProjectContext";

export default function Projects() {
  const { setActiveProject } = useProjectContext();

  return (
    <section id="projects" className="px-8 py-28 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>

        {/* TEMP project card */}
        <div
          onClick={() => {
            setActiveProject("Portfolio Website");
            document
              .querySelector("#skills")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="cursor-pointer rounded-xl border p-6 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p className="text-slate-600 mt-2">
            Click me to activate skills highlight (test)
          </p>
        </div>
      </div>
    </section>
  );
}
