"use client";
import { useState, useEffect } from "react";
import { GithubIcon } from "./icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tight">
          <span className="grad-text">AL</span>
          <span className="text-indigo-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/AchrafLamia"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold border border-white/10 text-slate-300 px-4 py-2 rounded-lg hover:border-indigo-500/50 hover:text-indigo-400 transition-all"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-3 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate-400 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
