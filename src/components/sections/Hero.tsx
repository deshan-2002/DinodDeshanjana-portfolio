"use client";

import { motion } from "framer-motion";
import { Download, Code } from "lucide-react";
import { LinkedinIcon as Linkedin, GithubIcon as Github, YoutubeIcon as Youtube } from "../ui/SocialIcons";
import Link from "next/link";

import Image from "next/image";
import ParticleBackground from "../ui/ParticleBackground";

export default function Hero() {
  return (
    <section className="min-h-[75vh] flex flex-col items-center justify-center relative px-6">

      {/* Particle Network Background */}
      <ParticleBackground />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-4 md:mt-8 relative z-10">

        {/* Floating Profile Image / Avatar container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6 md:mb-8 w-48 h-48 md:w-56 md:h-56"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500 to-accent-500 p-1 border border-white/20">
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full overflow-hidden shadow-2xl relative z-10 p-1">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src="/images/dinod.png"
                  alt="Dinod Deshanjana"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-4 -right-8 glass rounded-2xl p-3 z-20 shadow-xl"
          >
            <Code className="w-6 h-6 text-blue-500" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-6 -left-10 glass rounded-full px-4 py-2 z-20 shadow-xl flex items-center gap-2"
          >
            <span className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 block"></span>
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Engineer</span>
          </motion.div>
        </motion.div>

        {/* Categories / Pill Tags */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {['Web Development', 'Software Engineering', 'QA Engineering', 'IoT Projects'].map((tag) => (
            <span key={tag} className="glass px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Main Text */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-800 dark:text-white mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">Dinod</span>{" "}
          Deshanjana
        </motion.h1>



        {/* Desktop Buttons & Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1H3p8sq-ci4Iu1VAYd3kD9H-JyxYZW3rW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-brand-500/25 hover:-translate-y-1 transition-all duration-300"
            >
              <span>Download CV</span>
              <Download className="w-5 h-5" />
            </a>
            <Link
              href="#contact"
              className="glass flex items-center gap-2 px-8 py-4 rounded-full font-semibold hover:-translate-y-1 transition-all text-slate-800 dark:text-white duration-300"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link href="https://www.linkedin.com/in/dinod-deshanjana/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-hover text-slate-800 dark:text-slate-200 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:scale-110 transition-all shadow-sm">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/DinodDeshanjana" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-hover text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white hover:scale-110 transition-all shadow-sm">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://www.youtube.com/@dinoddeshanjana" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-hover text-slate-800 dark:text-slate-200 hover:text-[#FF0000] dark:hover:text-[#FF0000] hover:scale-110 transition-all shadow-sm">
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
