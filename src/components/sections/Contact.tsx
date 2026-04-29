"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon as Linkedin, GithubIcon as Github, YoutubeIcon as Youtube } from "../ui/SocialIcons";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/3 translate-y-1/3" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] p-6 sm:p-8 md:p-16 flex flex-col items-center w-full"
        >
          <div className="mb-8 md:mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              I&apos;m currently available for new opportunities. Whether you have a question or just want to say hi, feel free to drop a message!
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 mb-10 md:mb-12">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:dinoddeshanjana@gmail.com"
              className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 py-4 md:px-8 md:py-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium sm:font-semibold shadow-lg hover:shadow-brand-500/25 transition-all text-sm sm:text-base md:text-lg"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span className="truncate">dinoddeshanjana@gmail.com</span>
            </motion.a>

            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
              <MapPin className="w-5 h-5 text-brand-500" />
              <span>Kandy, Sri Lanka</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
            <Link href="https://www.linkedin.com/in/dinod-deshanjana/" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 rounded-full glass-hover text-slate-800 dark:text-slate-200 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:scale-110 transition-all shadow-sm">
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
            </Link>
            <Link href="https://github.com/DinodDeshanjana" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 rounded-full glass-hover text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white hover:scale-110 transition-all shadow-sm">
              <Github className="w-6 h-6 sm:w-8 sm:h-8" />
            </Link>
            <Link href="https://www.youtube.com/@dinoddeshanjana" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 rounded-full glass-hover text-slate-800 dark:text-slate-200 hover:text-[#FF0000] dark:hover:text-[#FF0000] hover:scale-110 transition-all shadow-sm">
              <Youtube className="w-6 h-6 sm:w-8 sm:h-8" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
