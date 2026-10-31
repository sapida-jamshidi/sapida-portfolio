
import { motion } from "motion/react";
import { Code2, Palette, Workflow, GitBranch } from "lucide-react";

const skillGroups = [
  {
    title: "Core Development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Styling & UI",
    icon: Palette,
    skills: ["Tailwind CSS", "Responsive Design", "CSS Layouts"],
  },
  {
    title: "Frameworks & Tools",
    icon: Workflow,
    skills: ["Next.js", "Vite", "React Router"],
  },
  {
    title: "Workflow",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-purple-400">
          / My Toolkit
        </p>

        <h2 className="mb-14 text-4xl font-semibold text-white md:text-6xl">
          Tools behind the <span className="text-purple-400">craft.</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-purple-400/40"
              >
                <Icon size={30} className="mb-7 text-purple-400" />

                <h3 className="mb-6 text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
