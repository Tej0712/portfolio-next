"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-slate-900 text-slate-300"
    >
      {/* TOP: CTA */}
      <div className="max-w-4xl mx-auto px-8 pt-24 pb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
          Let’s Connect
        </h2>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          I’m currently open to software engineering opportunities and
          collaborations. If you’d like to connect or discuss a project, feel
          free to reach out.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Email (Primary) */}
          <motion.a
            href="mailto:umeshsaiteja.poola@gmail.com"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="
              inline-flex items-center gap-3
              rounded-xl bg-blue-600
              px-8 py-4
              text-white font-medium
              hover:bg-blue-700
              transition
            "
          >
            <FaEnvelope className="text-lg" />
            Email Me
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Tej0712"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="
              inline-flex items-center gap-3
              rounded-xl bg-slate-800
              px-6 py-4
              text-slate-200
              hover:bg-slate-700
              transition
            "
          >
            <FaGithub className="text-lg" />
            GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/umesh-sai-teja-poola"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="
              inline-flex items-center gap-3
              rounded-xl bg-slate-800
              px-6 py-4
              text-slate-200
              hover:bg-slate-700
              transition
            "
          >
            <FaLinkedinIn className="text-lg" />
            LinkedIn
          </motion.a>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-slate-800" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <p className="text-slate-500">
          © {new Date().getFullYear()} Umesh. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#achievements" className="hover:text-white">
            Achievements
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
