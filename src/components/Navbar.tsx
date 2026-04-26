"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="section-padding">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-ink/10 px-5 py-3 transition-all ${
            scrolled ? "glass card-shadow" : "bg-transparent"
          }`}
        >
          <Link href="#top" className="flex items-center gap-2 font-display text-xl">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-ember" />
            <span className="font-semibold">{profile.shortName}.</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
          >
            Let's talk
          </a>

          <button
            className="md:hidden rounded-full p-2 hover:bg-ink/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-ink/10 glass card-shadow p-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink/80 hover:bg-ink/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-2xl bg-ink px-4 py-3 text-center text-sm font-medium text-cream"
                >
                  Let's talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
