
import { motion } from "motion/react";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-36 md:px-12"
    >
      {/* Background lights */}
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-purple-600/20 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-400/5 px-5 py-3 text-sm text-purple-300"
          >
            <Sparkles size={17} />
            Building thoughtful digital experiences
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl xl:text-7xl"
          >
            I turn ideas
            <br />
            into{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              interfaces.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-lg text-lg leading-8 text-gray-400"
          >
            I'm Sapida Jamshidi, a frontend developer creating
            responsive, intuitive and memorable web experiences
            with React, Next.js and modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-4 font-medium text-white transition hover:bg-purple-500"
            >
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a
              href="https://github.com/sapida-jamshidi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-white transition hover:border-purple-400"
            >
              <Code2 size={18} /> GitHub
            </a>
          </motion.div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto flex h-[360px] w-full max-w-[500px] items-center justify-center sm:h-[480px]">

          {/* Orbit circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute h-[260px] w-[260px] rounded-full border border-purple-400/25 sm:h-[380px] sm:w-[380px]"
          >
            <div className="absolute -top-2 left-1/2 h-4 w-4 rounded-full bg-purple-400 shadow-[0_0_25px_#a855f7]" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute h-[200px] w-[200px] rounded-full border border-cyan-400/20 sm:h-[290px] sm:w-[290px]"
          >
            <div className="absolute bottom-8 -left-1 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]" />
          </motion.div>

          {/* Central card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex h-52 w-52 flex-col items-center justify-center rounded-[2rem] border border-white/15 bg-white/5 shadow-2xl backdrop-blur-xl sm:h-64 sm:w-64"
          >
            <div className="mb-5 rounded-2xl bg-purple-500/15 p-5 text-purple-300">
              <Code2 size={42} strokeWidth={1.5} />
            </div>
            <span className="text-3xl font-semibold text-white">SJ.</span>
            <span className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">
              Creative Developer
            </span>
          </motion.div>

          {/* Floating labels */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-0 top-12 rounded-xl border border-white/10 bg-[#151a30]/90 px-5 py-3 text-sm text-purple-200 shadow-xl"
          >
            React.js
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute bottom-12 right-0 rounded-xl border border-white/10 bg-[#151a30]/90 px-5 py-3 text-sm text-cyan-200 shadow-xl"
          >
            Next.js + Tailwind
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
