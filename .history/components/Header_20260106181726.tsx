"use client";

import { motion } from "framer-motion";

const navItems = ["Projects", "Skills", "Experience", "About", "Contact"];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-gradient-to-r from-blue-50 via-white to-indigo-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        
        {/* Name */}
        <div className="text-xl font-semibold tracking-tight text-slate-900">
          Umesh
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group text-slate-700 transition"
            >
              {item}
              {/* underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
