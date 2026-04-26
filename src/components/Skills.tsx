"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="section-padding mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-4">
          <span className="chip">Skills</span>
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            A toolbox spanning <span className="text-gradient">strategy</span> to <span className="text-gradient">stack</span>.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-ink/10 bg-white/70 p-6 card-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-ember/10 font-display text-sm font-bold text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl">{g.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* marquee */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-ink/10 bg-ink py-6 text-cream">
          <div className="flex w-[200%] animate-marquee gap-12 whitespace-nowrap">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span
                key={i}
                className="font-display text-3xl text-cream/80 sm:text-4xl"
              >
                {w} <span className="mx-6 text-cream/30">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const marqueeWords = [
  "Databricks",
  "GenAI",
  "Agentic Coding",
  "Spring Boot",
  "AWS",
  "React",
  "Microservices",
  "Leadership",
  "Big Data",
  "Java",
  "Resiliency",
  "Architecture",
];
