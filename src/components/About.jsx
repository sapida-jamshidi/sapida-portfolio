
import { motion } from "motion/react";
import { ArrowUpRight, Code2, Layers3 } from "lucide-react";

function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-purple-400">
            / About Me
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Behind every
            <span className="block text-purple-400">
              great interface.
            </span>
          </h2>

          <p className="mt-8 max-w-xl leading-8 text-gray-400">
            I'm Sapida Jamshidi, a frontend developer passionate
            about creating clean, responsive, and user-friendly
            websites.
          </p>

          <p className="mt-5 max-w-xl leading-8 text-gray-400">
            I work with React, Next.js, JavaScript, and Tailwind CSS
            to transform ideas and designs into interactive web
            experiences. I enjoy learning new technologies and
            improving every detail of the user experience.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-medium text-purple-300 transition hover:text-white"
          >
            Let's work together <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <Code2 className="mb-8 text-purple-400" size={34} />
            <h3 className="text-xl font-semibold text-white">
              Clean Code
            </h3>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Building organized and reusable React components.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:translate-y-10">
            <Layers3 className="mb-8 text-cyan-400" size={34} />
            <h3 className="text-xl font-semibold text-white">
              Modern Design
            </h3>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Creating responsive layouts with attention to detail.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
