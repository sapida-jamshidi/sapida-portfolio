
import { ArrowUpRight, Code2, Heart } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="#home" className="text-3xl font-bold text-white">
              SJ<span className="text-purple-400">.</span>
            </a>

            <p className="mt-3 text-sm text-gray-400">
              Designing experiences. Building possibilities.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://github.com/sapida-jamshidi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-300 transition hover:text-purple-400"
            >
              <Code2 size={16} /> GitHub <ArrowUpRight size={14} />
            </a>

            <a
              href="#projects"
              className="text-sm text-gray-300 transition hover:text-purple-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-300 transition hover:text-purple-400"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row">
          <p>© {year} Sapida Jamshidi. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Made with <Heart size={13} className="text-purple-400" />
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
