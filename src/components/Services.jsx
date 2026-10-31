
import { motion } from "motion/react";
import {
  MonitorSmartphone,
  PenTool,
  Wrench,
  ArrowUpRight,
} from "lucide-react";


const services = [
  {
    number: "01",
    icon: MonitorSmartphone,
    title: "Frontend Development",
    description:
      "Modern, responsive websites built with React, Next.js, and Tailwind CSS.",
    tags: ["React", "Next.js", "Responsive"],
  },
  {
  number: "02",
  icon: PenTool,
  title: "Figma to Website",
    description:
      "Turning Figma designs into clean, responsive, and interactive web interfaces.",
    tags: ["Figma", "HTML", "CSS"],
  },
  {
    number: "03",
    icon: Wrench,
    title: "Website Improvements",
    description:
      "Improving layouts, fixing frontend bugs, and making websites mobile-friendly.",
    tags: ["Bug Fixes", "CSS", "UI"],
  },
];

function Services() {
  return (
    <section id="services" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm uppercase tracking-[0.3em] text-purple-400">
          / What I Offer
        </p>

        <h2 className="mb-6 text-4xl font-semibold text-white md:text-6xl">
          From ideas to <span className="text-purple-400">reality.</span>
        </h2>

        <p className="mb-14 max-w-xl leading-8 text-gray-400">
          I help individuals and businesses create modern,
          responsive, and engaging web experiences.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-purple-400/40"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    SERVICE / {service.number}
                  </span>

                  <ArrowUpRight
                    size={22}
                    className="text-gray-500 transition group-hover:text-purple-400"
                  />
                </div>

                <div className="mb-7 inline-flex rounded-2xl bg-purple-500/10 p-4 text-purple-300">
                  <Icon size={30} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-5 min-h-24 leading-7 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-2 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
