"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Umesh. All rights reserved.
        </p>

        {/* Right: Icons */}
        <div className="flex gap-4">
          {/* GitHub */}
          <motion.a
            href="https://github.com/Tej0712"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center justify-center
              w-12 h-12
              rounded-xl
              bg-slate-100
              text-slate-700
              hover:bg-slate-200
              hover:text-slate-900
              transition
            "
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/umesh-sai-teja-poola"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center justify-center
              w-12 h-12
              rounded-xl
              bg-slate-100
              text-slate-700
              hover:bg-slate-200
              hover:text-slate-900
              transition
            "
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-xl" />
          </motion.a>

          {/* YouTube (optional – remove if not needed) */}
          <motion.a
            href="#"
            target="_blank"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center justify-center
              w-12 h-12
              rounded-xl
              bg-slate-100
              text-slate-700
              hover:bg-slate-200
              hover:text-slate-900
              transition
            "
            aria-label="YouTube"
          >
            <FaYoutube className="text-xl" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
