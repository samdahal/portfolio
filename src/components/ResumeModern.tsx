import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import {
  profile,
  competencies,
  achievements,
  experience,
  projects,
  education,
  languages,
} from "@/lib/data";
import PrintButton from "./PrintButton";

export default function ResumeModern() {
  return (
    <article className="resume mx-auto max-w-4xl bg-cream print:max-w-none">
      {/* Bold accent header band */}
      <header className="bg-ember px-8 py-10 text-cream sm:px-12 print:px-8 print:py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-1 text-base font-medium text-cream/90 sm:text-lg">
              {profile.title}
            </p>
            <p className="mt-2 max-w-2xl text-sm text-cream/75">
              {profile.tagline}
            </p>
          </div>
          <div className="no-print">
            <PrintButton />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-cream/90">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} />
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 hover:text-cream"
          >
            <Mail size={14} />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-cream"
          >
            <Phone size={14} />
            {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-cream"
          >
            <Linkedin size={14} />
            {profile.linkedinLabel}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-cream"
          >
            <Github size={14} />
            {profile.githubLabel}
          </a>
        </div>
      </header>

      <div className="px-8 py-8 sm:px-12 print:px-8 print:py-6">
        <Section title="Summary">
          <div className="space-y-3 text-[15px] leading-relaxed text-ink/80">
            {profile.summary.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Section>

        <Section title="Core Competencies">
          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {competencies.map((c) => (
              <div
                key={c.title}
                className="rounded-lg border-l-2 border-ember bg-ink/[0.025] py-2 pl-3 pr-2"
              >
                <h3 className="text-[12px] font-semibold uppercase tracking-wider text-ember">
                  {c.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-ink/80">
                  {c.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Key Achievements">
          <ul className="space-y-2">
            {achievements.map((a) => (
              <li
                key={a}
                className="flex gap-3 text-[14.5px] leading-relaxed text-ink/85"
              >
                <span
                  aria-hidden
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Experience — timeline style */}
        <Section title="Professional Experience">
          <div className="relative space-y-7 border-l-2 border-ember/30 pl-6">
            {experience.map((job) => (
              <div key={job.company} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-ember bg-cream"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 break-after-avoid">
                  <h3 className="font-display text-xl text-ink">{job.company}</h3>
                  <div className="text-sm text-ink/60">
                    {job.location} · {job.tenure}
                  </div>
                </div>
                <div className="mt-3 space-y-4">
                  {job.roles.map((role) => (
                    <div
                      key={role.title + role.period}
                      className="break-inside-avoid"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <div>
                          <div className="text-[14.5px] font-semibold text-ink">
                            {role.title}
                          </div>
                          {"focus" in role && role.focus && (
                            <div className="text-[12px] font-medium uppercase tracking-wider text-ember">
                              {role.focus}
                            </div>
                          )}
                        </div>
                        <div className="text-[13px] text-ink/60">
                          {role.period}
                        </div>
                      </div>
                      <ul className="mt-1.5 space-y-1">
                        {role.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex gap-2.5 text-[13.5px] leading-relaxed text-ink/80"
                          >
                            <span aria-hidden className="text-ember">›</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {projects.length > 0 && (
          <Section title="Personal Projects">
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((p) => (
                <div
                  key={p.name}
                  className="break-inside-avoid rounded-lg border-t-2 border-ember bg-ink/[0.025] p-4"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[15px] font-semibold text-ink">
                      {p.name}
                    </h3>
                    {p.status && (
                      <span className="text-[11px] text-ink/55">{p.status}</span>
                    )}
                  </div>
                  {p.tagline && (
                    <div className="text-[11.5px] uppercase tracking-wider text-ember">
                      {p.tagline}
                    </div>
                  )}
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink/80">
                    {p.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-ember/10 px-2 py-0.5 text-[10.5px] font-medium text-ember"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <Section title="Education" inline>
            <div className="text-[14.5px] leading-relaxed text-ink/80">
              <div className="font-semibold text-ink">{education.degree}</div>
              <div>{education.school}</div>
              <div className="text-sm text-ink/60">
                {education.year} · {education.note}
              </div>
            </div>
          </Section>
          <Section title="Languages" inline>
            <p className="text-[14.5px] text-ink/80">{languages.join(" · ")}</p>
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
  inline = false,
}: {
  title: string;
  children: React.ReactNode;
  inline?: boolean;
}) {
  return (
    <section className={inline ? "" : "mt-7"}>
      <h2 className="mb-3 inline-flex items-center gap-2 font-display text-base uppercase tracking-[0.22em] text-ink">
        <span aria-hidden className="inline-block h-2 w-2 rotate-45 bg-ember" />
        {title}
      </h2>
      {children}
    </section>
  );
}
