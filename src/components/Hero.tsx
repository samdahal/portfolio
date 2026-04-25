"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      {/* ambient accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-8%] top-[-5%] h-[480px] w-[480px] rounded-full bg-ember/25 blur-3xl animate-blob" />
        <div className="absolute left-[-12%] bottom-[-15%] h-[420px] w-[420px] rounded-full bg-ink/10 blur-3xl animate-blob [animation-delay:-9s]" />
      </div>

      <div className="section-padding mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <span className="chip">
            <Sparkles size={14} className="text-ember" />
            Software Engineer at heart · Engineering Leader by trade
          </span>

          <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Engineering leadership
            <br />
            for <span className="text-gradient italic">bold</span> platforms.
          </h1>

          <p className="max-w-2xl text-lg text-ink/70 sm:text-xl">
            I'm <span className="font-semibold text-ink">{profile.name}</span>, a {profile.title} scaling global teams that ship resilient, high-impact data &amp; application platforms.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              See my work
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
            <span className="ml-2 inline-flex items-center gap-1.5 text-sm text-ink/60">
              <MapPin size={14} />
              {profile.location}
            </span>
          </div>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {profile.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-ink/10 bg-white/70 p-5 card-shadow"
            >
              <div className="font-display text-3xl text-ink sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink/60">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
