import { profile } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-ink/10 bg-ink text-cream">
      <div className="section-padding mx-auto max-w-6xl py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="font-display text-3xl">{profile.name}.</div>
            <p className="mt-2 max-w-md text-sm text-cream/70">
              {profile.title} · {profile.location}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-cream/15 p-3 hover:bg-cream/10"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cream/15 p-3 hover:bg-cream/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cream/15 p-3 hover:bg-cream/10"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} {profile.name}.</div>
        </div>
      </div>
    </footer>
  );
}
