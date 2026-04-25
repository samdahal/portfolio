import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import {
  profile,
  competencies,
  achievements,
  experience,
  education,
  languages,
} from "@/lib/data";
import PrintButton from "./PrintButton";

export default function Resume() {
  return (
    <article className="resume mx-auto max-w-4xl bg-cream px-8 py-10 sm:px-12 sm:py-14 print:max-w-none print:p-0">
      {/* Header */}
      <header className="border-b-2 border-ink/90 pb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-1 text-base font-medium text-ember sm:text-lg">
              {profile.title}
            </p>
            <p className="mt-1 max-w-2xl text-sm text-ink/60">
              {profile.tagline}
            </p>
          </div>
          <div className="no-print">
            <PrintButton />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink/75">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-ember" />
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 hover:text-ember"
          >
            <Mail size={14} className="text-ember" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-ember"
          >
            <Phone size={14} className="text-ember" />
            {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-ember"
          >
            <Linkedin size={14} className="text-ember" />
            {profile.linkedinLabel}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-ember"
          >
            <Github size={14} className="text-ember" />
            {profile.githubLabel}
          </a>
        </div>
      </header>

      {/* Summary */}
      <Section title="Summary">
        <div className="space-y-3 text-[15px] leading-relaxed text-ink/80">
          {profile.summary.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Section>

      {/* Core Competencies */}
      <Section title="Core Competencies">
        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {competencies.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ember">
                {c.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink/80">
                {c.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Achievements */}
      <Section title="Key Achievements">
        <ul className="space-y-2">
          {achievements.map((a) => (
            <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
              <span
                aria-hidden
                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
              />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Experience */}
      <Section title="Professional Experience">
        <div className="space-y-7">
          {experience.map((job) => (
            <div key={job.company} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-ink/15 pb-1">
                <h3 className="font-display text-xl text-ink">{job.company}</h3>
                <div className="text-sm text-ink/60">
                  {job.location} · {job.tenure}
                </div>
              </div>

              <div className="mt-3 space-y-5">
                {job.roles.map((role) => (
                  <div key={role.title + role.period} className="break-inside-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <div>
                        <div className="text-[15px] font-semibold text-ink">
                          {role.title}
                        </div>
                        {"focus" in role && role.focus && (
                          <div className="text-[13px] font-medium uppercase tracking-wider text-ember">
                            {role.focus}
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-ink/60">{role.period}</div>
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {role.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-[14.5px] leading-relaxed text-ink/80"
                        >
                          <span
                            aria-hidden
                            className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-ink/40"
                          />
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

      {/* Education + Languages */}
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <Section title="Education" inline>
          <div className="text-[15px] leading-relaxed text-ink/80">
            <div className="font-semibold text-ink">{education.degree}</div>
            <div>{education.school}</div>
            <div className="text-sm text-ink/60">
              {education.year} · {education.note}
            </div>
          </div>
        </Section>

        <Section title="Languages" inline>
          <p className="text-[15px] text-ink/80">{languages.join(" · ")}</p>
        </Section>
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
    <section className={inline ? "" : "mt-8"}>
      <h2 className="mb-3 font-display text-lg uppercase tracking-[0.18em] text-ink">
        {title}
        <span aria-hidden className="ml-3 inline-block h-px w-10 align-middle bg-ember" />
      </h2>
      {children}
    </section>
  );
}
