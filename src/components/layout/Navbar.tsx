"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="w-full max-w-5xl flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white group">
          Dinod Deshanjana<span className="text-brand-500 group-hover:text-brand-600 transition-colors"></span>
        </a>

        <nav className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full glass">
          <a href="#home" className="text-base font-medium text-slate-600 hover:text-brand-500 dark:text-slate-300 transition-colors hover:scale-105 transform">
            Home
          </a>
          <a href="#about" className="text-base font-medium text-slate-600 hover:text-brand-500 dark:text-slate-300 transition-colors hover:scale-105 transform">
            About
          </a>
          <a href="#portfolio" className="text-base font-medium text-slate-600 hover:text-brand-500 dark:text-slate-300 transition-colors hover:scale-105 transform">
            Portfolio
          </a>
          <a href="#contact" className="text-base font-medium text-slate-600 hover:text-brand-500 dark:text-slate-300 transition-colors hover:scale-105 transform">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 shadow-sm transition-all text-sm font-medium hover:scale-105"
          >
            <Briefcase className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            <span>Get In Touch</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 shadow-sm transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-5 h-5 text-slate-800 dark:text-white" /> : <Menu className="w-5 h-5 text-slate-800 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 px-4 md:hidden"
          >
            <div className="glass rounded-2xl p-4 flex flex-col gap-2 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
              <a href="#home" onClick={() => setIsOpen(false)} className="px-4 py-3 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-xl transition-colors text-base font-medium text-slate-800 dark:text-slate-200">Home</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="px-4 py-3 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-xl transition-colors text-base font-medium text-slate-800 dark:text-slate-200">About</a>
              <a href="#portfolio" onClick={() => setIsOpen(false)} className="px-4 py-3 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-xl transition-colors text-base font-medium text-slate-800 dark:text-slate-200">Portfolio</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="px-4 py-3 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-xl transition-colors text-base font-medium text-slate-800 dark:text-slate-200">Contact</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="px-4 py-3 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-xl transition-colors text-base font-medium text-brand-500 bg-brand-50/50 dark:bg-brand-500/10 mt-2 text-center">Get In Touch</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
