"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Bug, CheckCircle, X, Check, ArrowRight, Calendar, User, Award, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

type Category = "All" | "Web Development" | "QA Testing";

type Project = {
  title: string;
  description: string;
  about?: string;
  keyFeatures?: string[];
  role?: string;
  results?: string;
  image: string;
  tags: string[];
  category: "Web Development" | "QA Testing";
  demo?: string;
  github?: string;
  qaDetails?: {
    type: string;
    tools: string;
    bugsFound?: string;
  };
};

const projects: Project[] = [
  {
    title: "FMC GPA Calculator",
    description: "A purpose-built academic tool that eliminates manual grade calculations for undergraduate students.",
    about: "A purpose-built academic tool that eliminates manual grade calculations for undergraduate students at the Faculty of Management and Commerce, SEUSL — covering GPA tracking, cumulative degree GPA, and automated degree class eligibility verification.",
    keyFeatures: [
      "Semester GPA & Cumulative Degree GPA calculation",
      "Degree class eligibility verification per FMC academic regulations",
      "Supports 8 specialisations with auxiliary & poor-grade edge case logic",
      "Fully responsive across desktop & mobile"
    ],
    role: "Solo Developer — Frontend & Logic\n\nDesigned the UI, implemented all GPA calculation logic in JavaScript, and digitised the 2021/2022 undergraduate curriculum into the codebase. Managed serverless deployment via GitHub Pages.",
    results: "Digitised the full 2021/2022 curriculum — handling complex edge cases such as a maximum of 3 poor grades for MIT and 4 for BBA/BCom, across all 8 degree specialisations.",
    image: "/images/FMCGPA.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "GitHub Pages"],
    category: "Web Development",
    demo: "https://dinoddeshanjana.github.io/fmc-gpa-calculator/",
    github: "https://github.com/DinodDeshanjana/fmc-gpa-calculator.git",
  },
  {
    title: "E-License Management System",
    description: "A full-stack web portal that digitises the driving licence application process.",
    about: "A full-stack web portal that digitises the driving licence application process — eliminating manual paperwork, enabling online exam scheduling, and providing real-time status transparency for both applicants and administrators.",
    keyFeatures: [
      "Online licence application & exam scheduling",
      "Real-time exam result & licence status tracking",
      "Dual-role dashboards — applicant portal & admin panel",
      "Relational database with 4 linked tables"
    ],
    role: "Solo Developer — Full-Stack\n\nArchitected the frontend layout, developed all server-side PHP logic, and designed the relational database schema linking users, exam applications, results, and licence records.",
    results: "Delivered a fully functional 4-table relational system with complete role-based access — separate admin approval workflows and applicant self-service portals.",
    image: "/images/E-license system.png",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "PHP", "MySQL", "GitHub"],
    category: "Web Development",

    github: "https://github.com/DinodDeshanjana/Elicense-System.git",
  },
  {
    title: "AnyStore — Inventory Management",
    description: "A feature-rich desktop application for retail inventory management with automated billing.",
    about: "A feature-rich desktop application for retail inventory management, featuring role-based access control, automated billing computation, and real-time stock updates — built to ensure operational data integrity for retail businesses.",
    keyFeatures: [
      "Role-based access — Admin (full control) & Standard User (sales/purchases)",
      "Automated billing: Sub Total, Discount, VAT & Grand Total",
      "Real-time stock updates triggered on every transaction",
      "6-table relational database for full data traceability"
    ],
    role: "Solo Developer — Full-Stack Desktop\n\nDesigned the desktop UI in Visual Studio, programmed all transaction and billing logic in C#, and built a 6-table MSSQL database covering users, categories, products, dealers, customers, and transaction histories.",
    results: "All complex billing calculations (discount, VAT, totals) execute directly at the database layer — ensuring accuracy and consistency across all records without manual intervention.",
    image: "/images/login.jpg",
    tags: ["C#", ".NET Framework", "MS SQL Server", "Visual Studio", "SSMS", "GitHub"],
    category: "Web Development",

    github: "https://github.com/DinodDeshanjana/Inventory-Management-System.git",
  },
  {
    title: "Three-Wheeler Rental System",
    description: "An end-to-end online vehicle booking platform built to bridge the gap between foreign tourists and local three-wheeler drivers.",
    about: "An end-to-end online vehicle booking platform built to bridge the gap between foreign tourists and local three-wheeler drivers — overcoming language barriers and replacing inefficient traditional booking methods.",
    keyFeatures: [
      "Online booking flow connecting users with available vehicles",
      "Centralised database across Users, Vehicles & Bookings tables",
      "Tourist-friendly interface addressing language barrier concerns",
      "Full CRUD operations for bookings management"
    ],
    role: "Solo Developer — Full-Stack Web\n\nBuilt the full user interface, implemented all backend booking logic in PHP, and designed the 3-table MySQL database architecture linking users, available vehicles, and booking records.",
    results: "Delivered a complete end-to-end booking platform — from vehicle discovery to booking confirmation — with a structured relational data model ensuring consistent and reliable records.",
    image: "/images/t.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    category: "Web Development",

    github: "https://github.com/DinodDeshanjana/Three-Wheeler-Rental-System-project.git",
  },
  {
    title: "Simple GPA Calculator",
    description: "A clean, responsive GPA calculator allowing students to dynamically add courses and compute GPA.",
    about: "A clean, responsive GPA calculator allowing students to dynamically add courses, enter credits and grades, and instantly see their computed GPA update in real time — built as a deliberate front-end skills exercise.",
    keyFeatures: [
      "Dynamic course addition & removal with instant GPA recalculation",
      "Smooth scroll-reveal animations via ScrollReveal.js",
      "Fully responsive layout across mobile & desktop",
      "Zero-dependency core logic in vanilla JavaScript ES6"
    ],
    role: "Solo Developer — Frontend\n\nCreated the full UI layout with responsive styling, implemented the GPA calculation engine, and integrated ScrollReveal.js animations — developed to advance front-end development skills using a real-world use case.",
    results: "Produces instantaneous GPA output as courses are dynamically added or removed, with a polished animation-enhanced interface showcasing strong front-end fundamentals and attention to UX.",
    image: "/images/Cal.png",
    tags: ["HTML5", "CSS3", "JavaScript (ES6)", "ScrollReveal.js"],
    category: "Web Development",
    demo: "https://dinoddeshanjana.github.io/GPA-Calculator/",
    github: "https://github.com/DinodDeshanjana/GPA-Calculator.git",
  },
  {
    title: "E-License QA Automation",
    description: "A full E2E test automation framework built for the E-License Management System — automating the complete exam application lifecycle and security validation.",
    about: "A full E2E test automation framework built for the E-License Management System — automating the complete exam application lifecycle, security validation, and cross-browser verification using Playwright.",
    keyFeatures: [
      "Automated E2E workflows: user application → admin approval → result → licence",
      "Security & validation testing — duplicate emails, NIC formats, SQL injection",
      "Cross-browser execution across Chromium, Firefox & WebKit",
      "HTML test execution reports via Playwright's built-in reporter",
      "Custom NPM scripts for targeted module testing (user, admin, auth)"
    ],
    role: "Solo QA Automation Engineer / SDET\n\nIndependently designed and built the entire automated testing architecture from scratch — writing comprehensive test suites for both positive and negative scenarios, configuring the CI/CD pipeline, and establishing targeted module-level test commands.",
    results: "Significantly reduced manual testing time by creating a robust safety net that continuously verifies core E-License platform functionality — demonstrating practical ability to build test automation frameworks and integrate them into modern DevOps workflows.",
    image: "/images/E-license system.png",
    tags: ["JavaScript", "Playwright", "Node.js", "GitHub Actions"],
    category: "QA Testing",
    github: "https://github.com/dinoddeshanjana/e-license-qa-automation",
    qaDetails: {
      type: "Automation",
      tools: "Playwright",
      bugsFound: "Security & Flow Validated",
    }
  },

];

const categories: Category[] = ["All", "Web Development", "QA Testing"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  // Prevent scroll when modal is open and handle Esc key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);

      // Focus trap
      if (modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          (focusableElements[0] as HTMLElement).focus();
        }
      }
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <>
      <section id="portfolio" className="py-24 px-6 relative overflow-hidden bg-slate-50/50 dark:bg-[#030712] transition-colors duration-300">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-60 dark:opacity-40 overflow-hidden z-0">
          <div className="absolute -top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-200/50 dark:bg-brand-900/30 mix-blend-multiply blur-[120px] dark:blur-[150px]" />
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[50%] rounded-full bg-blue-200/50 dark:bg-blue-900/20 mix-blend-multiply blur-[120px] dark:blur-[150px]" />
          <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-violet-200/50 dark:bg-violet-900/20 mix-blend-multiply blur-[120px] dark:blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
            >
              My Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            >
              A curated portfolio showcasing my expertise in crafting responsive web applications and ensuring software quality through rigorous testing.
            </motion.p>
          </div>

          {/* Filter System */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                  ? "text-white shadow-lg shadow-brand-500/40 dark:shadow-brand-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm"
                  }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-brand-500 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="space-y-16">
            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                    key={project.title}
                    onClick={() => setSelectedProject(project)}
                    className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] border border-slate-100 dark:border-slate-800/80 group hover:-translate-y-2 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col cursor-pointer relative before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-indigo-500/0 before:to-indigo-500/0 hover:before:from-indigo-500/5 hover:before:to-transparent dark:hover:before:from-indigo-500/10 dark:before:transition-colors before:duration-500"
                  >
                    {/* Maintain perfect 16:9 aspect ratio wrapper for the image */}
                    <div className="w-full aspect-video rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden relative mb-6 border border-slate-100/50 dark:border-slate-700/50 group-hover:border-indigo-500/20 dark:group-hover:border-indigo-400/20 transition-colors duration-500 z-10">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 dark:group-hover:bg-slate-900/20 transition-colors duration-500" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 shadow-sm border border-black/5 dark:border-white/10">
                          {project.category === "Web Development" ? "Web Dev" : "QA"}
                        </span>
                      </div>
                    </div>

                    <div className="px-1 pb-1 flex-1 flex flex-col relative z-20">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2.5 group-hover:text-indigo-500 transition-colors duration-500 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6 mt-auto relative z-10">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2.5 py-1 bg-slate-100/80 dark:bg-slate-800/60 rounded-lg text-[11px] font-semibold text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 group-hover:border-indigo-500/20 transition-colors duration-500">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2.5 py-1 bg-slate-100/80 dark:bg-slate-800/60 rounded-lg text-[11px] font-semibold text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div
                        className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-5 mt-2 relative z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-sm font-semibold text-brand-500 dark:text-brand-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:tracking-wide transition-all duration-500 flex items-center gap-2 cursor-pointer" onClick={() => setSelectedProject(project)}>
                          View Details <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="flex items-center gap-3">
                          {project.demo && (
                            <Link href={project.demo} className="text-slate-400 hover:text-indigo-500 transition-colors duration-300 hover:scale-110" title="Live Demo">
                              <Globe className="w-5 h-5" />
                            </Link>
                          )}
                          {project.github && (
                            <Link href={project.github} className="text-slate-400 hover:text-indigo-500 transition-colors duration-300 hover:scale-110" title="View Code">
                              <GithubIcon className="w-5 h-5" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MODERN PROJECT MODAL - Image Top, Clean Stacked Layout */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6">
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/70 dark:bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
              aria-hidden="true"
            />

            {/* Modal Container - Modern, Clean Design */}
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] sm:max-h-[90vh] border border-slate-200/50 dark:border-slate-700/50"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close Button - Clean, Top Right */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 z-30 p-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-full hover:bg-white dark:hover:bg-slate-700 transition-all duration-200 shadow-md border border-slate-200/50 dark:border-slate-600/50 group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Scrollable Content Area */}
              <div className="overflow-y-auto overflow-x-hidden flex-1 scroll-smooth" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>

                {/* IMAGE SECTION - Full Width, Fixed Height */}
                <div className="relative w-full h-56 sm:h-72 md:h-80 bg-slate-100 dark:bg-slate-800 overflow-hidden group">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

                  {/* Category Badge Overlay on Image */}
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
                    <span className="px-3 py-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 shadow-lg">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT SECTION - Stacked Layout, Clean Spacing */}
                <div className="px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">

                  {/* Title & Description Section */}
                  <div className="mb-8">
                    <h2
                      id="modal-title"
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight"
                    >
                      {selectedProject.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* About Section */}
                  {selectedProject.about && (
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-1 h-4 bg-brand-500 rounded-full"></span>
                        About
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                        {selectedProject.about}
                      </p>
                    </div>
                  )}

                  {/* Tech Stack Section */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-1 h-4 bg-brand-500 rounded-full"></span>
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features Section */}
                  {selectedProject.keyFeatures && (
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-1 h-4 bg-brand-500 rounded-full"></span>
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center">
                              <Check className="w-3 h-3 text-brand-500" />
                            </div>
                            <span className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Role Section */}
                  {selectedProject.role && (
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-1 h-4 bg-brand-500 rounded-full"></span>
                        My Role
                      </h3>
                      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                          {selectedProject.role}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Results Section */}
                  {selectedProject.results && (
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-1 h-4 bg-brand-500 rounded-full"></span>
                        Results
                      </h3>
                      <div className="bg-gradient-to-br from-brand-50/50 to-transparent dark:from-brand-500/5 rounded-xl p-5 border border-brand-100 dark:border-brand-500/20">
                        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed flex items-start gap-3">
                          <Award className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                          <span>{selectedProject.results}</span>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* QA Section - Conditional, Modern Design */}
                  {selectedProject.qaDetails && (
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-1 h-4 bg-brand-500 rounded-full"></span>
                        QA & Testing Details
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                          <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                            Testing Type
                          </span>
                          <span className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                            {selectedProject.qaDetails.type}
                          </span>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                          <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                            Tools Used
                          </span>
                          <span className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                            <Code className="w-4 h-4 text-blue-500" />
                            {selectedProject.qaDetails.tools}
                          </span>
                        </div>
                        {selectedProject.qaDetails.bugsFound && (
                          <div className="bg-rose-50 dark:bg-rose-500/5 rounded-xl p-4 border border-rose-200 dark:border-rose-500/20">
                            <span className="block text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2 uppercase tracking-wider">
                              Bugs Found
                            </span>
                            <span className="flex items-center gap-2 text-sm font-semibold text-rose-700 dark:text-rose-300">
                              <Bug className="w-4 h-4" />
                              {selectedProject.qaDetails.bugsFound}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons - Clean, Modern */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 mt-2 border-t border-slate-200 dark:border-slate-700">
                    {selectedProject.demo && (
                      <Link
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white px-5 py-3.5 flex items-center justify-center gap-2 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Live Demo
                          <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                      </Link>
                    )}
                    {selectedProject.github && (
                      <Link
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-xl font-semibold text-sm hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-slate-200 dark:hover:bg-slate-700/80 transition-all duration-300 hover:-translate-y-0.5 shadow-sm group"
                      >
                        Source Code
                        <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}