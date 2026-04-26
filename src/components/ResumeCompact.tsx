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

export default function ResumeCompact() {
  return (
    <article className="resume mx-auto max-w-5xl bg-cream print:max-w-none">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] print:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="bg-ink/[0.04] px-6 py-10 print:px-5 print:py-6">
          <div className="border-l-4 border-ember pl-3">
            <h1 className="font-display text-2xl leading-tight text-ink">
              {profile.name}
            </h1>
            <p className="mt-1 text-[12.5px] font-medium text-ember">
              {profile.title}
            </p>
          </div>

          <div className="mt-6 space-y-2 text-[12.5px] text-ink/80">
            <div className="flex items-start gap-2">
              <MapPin size={13} className="mt-0.5 shrink-0 text-ember" />
              <span>{profile.location}</span>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-start gap-2 break-all hover:text-ember"
            >
              <Mail size={13} className="mt-0.5 shrink-0 text-ember" />
              <span>{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-start gap-2 hover:text-ember"
            >
              <Phone size={13} className="mt-0.5 shrink-0 text-ember" />
              <span>{profile.phone}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 break-all hover:text-ember"
            >
              <Linkedin size={13} className="mt-0.5 shrink-0 text-ember" />
              <span>{profile.linkedinLabel}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 break-all hover:text-ember"
            >
              <Github size={13} className="mt-0.5 shrink-0 text-ember" />
              <span>{profile.githubLabel}</span>
            </a>
          </div>

          <SidebarSection title="Core Competencies">
            <div className="space-y-3">
              {competencies.map((c) => (
                <div key={c.title}>
                  <div className="text-[10.5px] font-semibold uppercase tracking-wider text-ember">
                    {c.title}
                  </div>
                  <p className="mt-0.5 text-[11.5px] leading-snug text-ink/75">
                    {c.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </SidebarSection>

          <SidebarSection title="Education">
            <div className="text-[12px] leading-snug text-ink/80">
              <div className="font-semibold text-ink">{education.degree}</div>
              <div>{education.school}</div>
              <div className="text-[11px] text-ink/60">
                {education.year} · {education.note}
              </div>
            </div>
          </SidebarSection>

          <SidebarSection title="Languages">
            <p className="text-[12px] text-ink/80">{languages.join(" · ")}</p>
          </SidebarSection>

          <div className="no-print mt-8">
            <PrintButton />
          </div>
        </aside>

        {/* Main */}
        <main className="px-8 py-10 print:px-7 print:py-6">
          <p className="text-[13px] italic text-ink/60">{profile.tagline}</p>

          <MainSection title="Summary">
            <div className="space-y-2.5 text-[14px] leading-relaxed text-ink/80">
              {profile.summary.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </MainSection>

          <MainSection title="Key Achievements">
            <ul className="space-y-1.5">
              {achievements.map((a) => (
                <li
                  key={a}
                  className="flex gap-2.5 text-[14px] leading-relaxed text-ink/85"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                  />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </MainSection>

          <MainSection title="Professional Experience">
            <div className="space-y-5">
              {experience.map((job) => (
                <div key={job.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 break-after-avoid">
                    <h3 className="font-display text-lg text-ink">
                      {job.company}
                    </h3>
                    <div className="text-[12px] text-ink/60">
                      {job.location} · {job.tenure}
                    </div>
                  </div>
                  <div className="mt-2 space-y-3">
                    {job.roles.map((role) => (
                      <div
                        key={role.title + role.period}
                        className="break-inside-avoid"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                          <div>
                            <div className="text-[13.5px] font-semibold text-ink">
                              {role.title}
                            </div>
                            {"focus" in role && role.focus && (
                              <div className="text-[11.5px] font-medium uppercase tracking-wider text-ember">
                                {role.focus}
                              </div>
                            )}
                          </div>
                          <div className="text-[12px] text-ink/60">
                            {role.period}
                          </div>
                        </div>
                        <ul className="mt-1.5 space-y-1">
                          {role.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex gap-2.5 text-[13px] leading-relaxed text-ink/80"
                            >
                              <span
                                aria-hidden
                                className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-ink/40"
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
          </MainSection>

          {projects.length > 0 && (
            <MainSection title="Personal Projects">
              <div className="grid gap-3 sm:grid-cols-2">
                {projects.map((p) => (
                  <div
                    key={p.name}
                    className="break-inside-avoid rounded-md border border-ink/10 p-3"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-[13.5px] font-semibold text-ink">
                        {p.name}
                      </h3>
                      {p.status && (
                        <span className="text-[10.5px] text-ink/55">
                          {p.status}
                        </span>
                      )}
                    </div>
                    {p.tagline && (
                      <div className="text-[10.5px] uppercase tracking-wider text-ember">
                        {p.tagline}
                      </div>
                    )}
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/80">
                      {p.description}
                    </p>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink/15 px-1.5 py-0.5 text-[10px] text-ink/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </MainSection>
          )}
        </main>
      </div>
    </article>
  );
}

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
        {title}
      </h2>
      {children}
    </section>
  );
}

function MainSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2 className="mb-2.5 font-display text-base uppercase tracking-[0.2em] text-ink">
        <span className="border-b-2 border-ember pb-0.5">{title}</span>
      </h2>
      {children}
    </section>
  );
}
