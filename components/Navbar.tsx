"use client";
import { useState, useEffect } from "react";

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
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[#040407]/85 backdrop-blur-2xl border-b border-white/[0.05]" : ""
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#" className="font-black text-lg tracking-tight">
          <span className="g-text">AL</span>
          <span className="text-indigo-500/60">.</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a href="mailto:lamia.achraf60@gmail.com"
          className="hidden md:inline-flex btn-fill text-xs px-5 py-2.5">
          Hire me
        </a>

        <button className="md:hidden text-slate-400 p-2" onClick={() => setOpen(!open)}>
          <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-3 h-px bg-current transition-all" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#040407]/95 backdrop-blur-xl border-b border-white/05 px-6 py-5 space-y-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
