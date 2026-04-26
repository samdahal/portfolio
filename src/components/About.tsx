"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-padding mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="chip">About</span>
              <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                Building teams that <span className="text-gradient">absorb pressure</span> and ship under constraint.
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7"
          >
            <p className="text-lg leading-relaxed text-ink/75">
              {profile.summary}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              My focus is simple: <em className="font-display">{profile.philosophy}</em>
            </p>

            <ul className="mt-8 grid gap-3">
              {profile.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white/60 p-4"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ember text-cream">
                    <Check size={14} />
                  </span>
                  <span className="text-ink/80">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
