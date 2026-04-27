"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-2">
            Get To Know More
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Background Shape */}
            <div className="absolute top-6 -left-6 w-full h-full bg-blue-500/20 rounded-[2rem] -rotate-3 transition duration-500 hover:rotate-0" />

            {/* Image */}
            <div className="relative rounded-[2rem] overflow-hidden h-full min-h-[500px] shadow-2xl">
              <Image
                src="/images/about.jpg"
                alt="About Me"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between"
          >

            {/* BIO */}
            <div className="space-y-5 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I’m an MIT undergraduate who loves turning ideas into real applications.
                From booking systems to web platforms, I enjoy building solutions that
                are simple, efficient, and user-friendly.
              </p>

              <p>
                I’m currently focused on growing my skills in both development and QA
                automation, with an interest in modern tools and clean design. I’m always
                learning, experimenting, and looking for opportunities to create better
                digital experiences.
              </p>
            </div>

            {/* EDUCATION */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Education
              </h3>

              <div className="space-y-5">

                {/* Card 1 */}
                <div className="p-6 rounded-2xl glass glass-hover border border-slate-200/50 dark:border-white/10 hover:scale-[1.02] hover:border-brand-400/30 transition-all duration-300">
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                    South Eastern University of Sri Lanka
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    B.Sc. in Management and Information Technology
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Oct 2023 – Present
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 rounded-2xl glass glass-hover border border-slate-200/50 dark:border-white/10 hover:scale-[1.02] hover:border-brand-400/30 transition-all duration-300">
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                    Wayamba University of Sri Lanka
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Diploma in Information Technology
                  </p>

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-slate-500">
                      Mar 2023 – 2024
                    </span>
                    <span className="text-sm font-semibold text-brand-500">
                      Distinction
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}