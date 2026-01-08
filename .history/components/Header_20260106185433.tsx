"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-gradient-to-r from-blue-50 via-white to-indigo-50 backdrop-blur border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo / Name */}
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-slate-900 hover:text-blue-600 transition"
        >
          Umesh
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative group text-slate-700 hover:text-blue-600 transition"
            >
              {item.label}

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
