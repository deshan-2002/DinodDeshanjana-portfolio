import Link from "next/link";
import { LinkedinIcon as Linkedin, GithubIcon as Github, YoutubeIcon as Youtube } from "../ui/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 mt-20 border-t border-slate-200/50 dark:border-slate-800/50 glass">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
            Dinod Deshanjana<span className="text-brand-500"></span>
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 text-center md:text-left max-w-sm">
            Ensuring software quality and building robust digital experiences.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://www.linkedin.com/in/dinod-deshanjana/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass-hover text-slate-600 dark:text-slate-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/DinodDeshanjana" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass-hover text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://www.youtube.com/@dinoddeshanjana" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass-hover text-slate-600 dark:text-slate-400 hover:text-[#FF0000] dark:hover:text-[#FF0000] transition-colors">
            <Youtube className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">
        &copy; {currentYear} Developed by Dinod Deshanjana. All rights reserved.
      </div>
    </footer>
  );
}
