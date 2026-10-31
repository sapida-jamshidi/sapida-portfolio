
import { motion } from "motion/react";
import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Ghalib Hospital",
    category: "Healthcare Website",
    description:
      "A modern, responsive hospital website featuring medical services, doctors, and appointment navigation.",
    technologies: ["Next.js", "Tailwind CSS", "React"],
    color: "from-emerald-500/20 to-cyan-500/10",
    image: "/images/ghalib-hospital.png",
    github: "",
    live: "",
  },
  {
    number: "02",
    title: "Prescripto",
    category: "Doctor Appointment Platform",
    description:
      "A responsive medical appointment interface with doctor listings, profiles, and booking features.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    color: "from-purple-500/20 to-pink-500/10",
    image: "/images/prescripto.png",
    github: "https://github.com/sapida-jamshidi/prescripto",
    live: "",
  },
  {
    number: "03",
    title: "Find Clinic",
    category: "Clinic Discovery Interface",
    description:
      "An interactive clinic discovery experience with search, filters, and map-based navigation.",
    technologies: ["React", "Leaflet", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/10",
    image: "/images/find-clinic.png",
    github: "",
    live: "",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-400">
            / Selected Work
          </p>
          <h2 className="text-4xl font-semibold text-white md:text-6xl">
            Projects that <span className="text-purple-400">speak.</span>
          </h2>
          <p className="mt-5 max-w-xl text-gray-400">
            A selection of interfaces and digital experiences
            I've contributed to building.
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] lg:grid-cols-2"
            >
              <div
                className={`relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br ${project.color} p-8`}
              >
                <div className="absolute left-8 top-7 text-sm text-white/50">
                  PROJECT / {project.number}
                </div>

                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="relative z-10 max-h-[340px] w-full rounded-xl object-contain shadow-2xl transition duration-500 group-hover:scale-[1.03]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <Code2
                  size={100}
                  strokeWidth={0.5}
                  className="absolute text-white/10"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="mb-4 text-sm text-purple-300">
                  {project.category}
                </p>

                <h3 className="text-3xl font-semibold text-white md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap gap-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white hover:text-purple-400"
                    >
                      Source Code <ArrowUpRight size={17} />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white hover:text-purple-400"
                    >
                      Live Preview <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
