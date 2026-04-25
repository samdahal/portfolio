"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-padding mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-4">
          <span className="chip">Experience</span>
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            A decade of <span className="text-gradient">scaling</span> teams &amp; platforms.
          </h2>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-ink/10 md:left-1/2" />
          <ol className="space-y-10">
            {experience.map((e, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative pl-10 md:pl-0 md:text-right md:pr-10">
                  <span className="absolute left-0 top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ember text-cream md:left-1/2 md:-translate-x-1/2">
                    <span className="block h-2 w-2 rounded-full bg-cream" />
                  </span>
                  <div className="text-sm font-medium uppercase tracking-wider text-ink/50">
                    {e.period}
                  </div>
                  <div className="mt-1 font-display text-2xl">{e.company}</div>
                  <div className="text-ink/60">{e.location}</div>
                </div>

                <div className="rounded-3xl border border-ink/10 bg-white/70 p-6 card-shadow">
                  <div className="font-semibold text-ink">{e.role}</div>
                  <ul className="mt-3 space-y-2 text-ink/75">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
