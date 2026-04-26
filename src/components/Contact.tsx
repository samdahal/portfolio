"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-padding mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-ink/10 bg-ink p-8 sm:p-14 md:p-20 text-cream card-shadow"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ember/60 opacity-60 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-ember/30 opacity-50 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-3 py-1.5 text-sm">
              Contact
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight sm:text-6xl">
              Let's build something <span className="text-gradient">resilient</span>.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-cream/70">
              Always interested in conversations around enterprise platform strategy, engineering leadership, data modernization, and building resilient technology organizations.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                <Mail size={16} />
                {profile.email}
                <ArrowUpRight size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 font-medium text-cream transition-colors hover:bg-cream/10"
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-sm text-cream/60">
              <MapPin size={14} />
              {profile.location}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
