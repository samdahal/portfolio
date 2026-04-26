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

export default function ResumeMinimal() {
  return (
    <article className="resume mx-auto max-w-3xl bg-cream px-10 py-14 sm:px-16 sm:py-20 print:max-w-none print:px-10 print:py-8">
      {/* Header — centered, restrained */}
      <header className="text-center">
        <h1 className="font-display text-3xl font-normal tracking-tight text-ink sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-[13px] uppercase tracking-[0.25em] text-ink/70">
          {profile.title}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-[13px] italic text-ink/55">
          {profile.tagline}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12.5px] text-ink/70">
          <span>{profile.location}</span>
          <span aria-hidden className="text-ink/30">/</span>
          <a href={`mailto:${profile.email}`} className="hover:text-ember">
            {profile.email}
          </a>
          <span aria-hidden className="text-ink/30">/</span>
          <a href={`tel:${profile.phone}`} className="hover:text-ember">
            {profile.phone}
          </a>
          <span aria-hidden className="text-ink/30">/</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ember"
          >
            {profile.linkedinLabel}
          </a>
          <span aria-hidden className="text-ink/30">/</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ember"
          >
            {profile.githubLabel}
          </a>
        </div>

        <div className="no-print mt-6 flex justify-center">
          <PrintButton />
        </div>
      </header>

      <Section label="summary">
        <div className="space-y-3 text-[14.5px] leading-[1.7] text-ink/80">
          {profile.summary.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Section>

      <Section label="competencies">
        <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {competencies.map((c) => (
            <div key={c.title}>
              <h3 className="font-mono text-[11px] lowercase tracking-wider text-ink/55">
                — {c.title.toLowerCase()}
              </h3>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink/80">
                {c.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="achievements">
        <ul className="space-y-2">
          {achievements.map((a) => (
            <li
              key={a}
              className="text-[14px] leading-[1.7] text-ink/80 before:mr-3 before:text-ink/40 before:content-['—']"
            >
              {a}
            </li>
          ))}
        </ul>
      </Section>

      <Section label="experience">
        <div className="space-y-8">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 break-after-avoid">
                <h3 className="font-display text-lg font-normal text-ink">
                  {job.company}
                </h3>
                <div className="text-[12px] text-ink/55">
                  {job.location} · {job.tenure}
                </div>
              </div>
              <div className="mt-3 space-y-5">
                {job.roles.map((role) => (
                  <div
                    key={role.title + role.period}
                    className="break-inside-avoid"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <div>
                        <div className="text-[14px] font-medium text-ink">
                          {role.title}
                        </div>
                        {"focus" in role && role.focus && (
                          <div className="font-mono text-[11px] lowercase tracking-wider text-ink/55">
                            {role.focus.toLowerCase()}
                          </div>
                        )}
                      </div>
                      <div className="text-[12px] text-ink/55">
                        {role.period}
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {role.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-[13.5px] leading-[1.7] text-ink/80 before:mr-2.5 before:text-ink/35 before:content-['·']"
                        >
                          {b}
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
        <Section label="projects">
          <div className="space-y-5">
            {projects.map((p) => (
              <div key={p.name} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-[14px] font-medium text-ink">
                    {p.name}
                    {p.tagline && (
                      <span className="ml-2 font-mono text-[11px] font-normal lowercase tracking-wider text-ink/55">
                        — {p.tagline.toLowerCase()}
                      </span>
                    )}
                  </h3>
                  {p.status && (
                    <span className="text-[11px] text-ink/55">{p.status}</span>
                  )}
                </div>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ink/80">
                  {p.description}
                </p>
                <p className="mt-1 font-mono text-[11px] text-ink/55">
                  {p.tech.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section label="education">
        <div className="text-[14px] leading-relaxed text-ink/80">
          <div className="font-medium text-ink">{education.degree}</div>
          <div>{education.school}</div>
          <div className="text-[12px] text-ink/55">
            {education.year} · {education.note}
          </div>
        </div>
      </Section>

      <Section label="languages">
        <p className="text-[14px] text-ink/80">{languages.join(" · ")}</p>
      </Section>
    </article>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 font-mono text-[11px] lowercase tracking-[0.2em] text-ember">
        // {label}
      </h2>
      {children}
    </section>
  );
}
