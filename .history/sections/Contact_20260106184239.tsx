"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-8 py-24 bg-lightblue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>

        <p className="text-lg text-blue-100 mb-10">
          I’m currently open to software engineering opportunities and
          collaborations. Feel free to reach out.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:umeshsaiteja.poola@gmail.com"
            className="rounded-lg bg-white text-blue-600 px-6 py-3 font-medium hover:bg-blue-50 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Tej0712"
            target="_blank"
            className="rounded-lg border border-white/40 px-6 py-3 hover:bg-white/10 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/umesh-sai-teja-poola"
            target="_blank"
            className="rounded-lg border border-white/40 px-6 py-3 hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
