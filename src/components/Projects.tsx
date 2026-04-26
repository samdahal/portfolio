"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-padding mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-4">
          <span className="chip">Selected work</span>
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Platforms that move <span className="text-gradient">the business</span>.
          </h2>
          <p className="max-w-2xl text-lg text-ink/70">
            A handful of initiatives where I've led architecture, delivery, and team execution end-to-end.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-cream/60 p-7 card-shadow transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-ember" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl">{p.title}</h3>
                  {"subtitle" in p && p.subtitle && (
                    <div className="mt-1 text-sm font-medium uppercase tracking-wider text-ember">
                      {p.subtitle}
                    </div>
                  )}
                </div>
                <span className="rounded-full bg-ink p-2 text-cream transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <p className="mt-4 text-ink/70">{p.blurb}</p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-2 text-sm font-semibold text-ember">
                {p.metric}
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-ink/10 px-2.5 py-1 text-xs font-medium text-ink/60"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
