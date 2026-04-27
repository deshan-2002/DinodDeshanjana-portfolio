"use client";

import { motion } from "framer-motion";
import { Code, MonitorSmartphone, ShieldCheck, Database, Wrench, GitMerge } from "lucide-react";

const skills = [
  {
    title: "Testing & QA",
    items: [
      "Playwright",
      "Manual Testing",
      "E2E Automation",
      "Test Plan & Case Design",
      "Bug Verification",
      "Cross-Browser Testing"
    ],
    icon: <ShieldCheck className="w-6 h-6 text-accent-500" />
  },
  {
    title: "Programming",
    items: [
      "JavaScript (ES6)",
      "PHP",
      "C#",
      "Python (Basic)",
      "Java (Basic)"
    ],
    icon: <Code className="w-6 h-6 text-brand-500" />
  },
  {
    title: "Web & Frameworks",
    items: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      ".NET Framework"
    ],
    icon: <MonitorSmartphone className="w-6 h-6 text-secondary-500" />
  },
  {
    title: "Databases",
    items: [
      "MySQL",
      "Microsoft SQL Server"
    ],
    icon: <Database className="w-6 h-6 text-emerald-500" />
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git & GitHub",
      "Visual Studio",
      "VS Code",
      "SSMS",
      "GitHub Pages"
    ],
    icon: <Wrench className="w-6 h-6 text-orange-500" />
  },
  {
    title: "Methodologies",
    items: [
      "SDLC",
      "STLC",
      "Agile"
    ],
    icon: <GitMerge className="w-6 h-6 text-indigo-500" />
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical expertise, ranging from QA automation to full-stack development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover p-6 md:p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/60 dark:bg-slate-800/60 flex items-center justify-center shadow-sm shrink-0">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                  {skill.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium rounded-xl bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-colors hover:bg-white dark:hover:bg-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
