export default function Footer() {
  return (
    <footer className="border-t border-white/05 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-black text-lg">
          <span className="g-text">AL</span>
          <span className="text-indigo-500/50">.</span>
        </span>
        <p className="text-slate-700 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Achraf Lamia — ML &amp; CV Engineer
        </p>
        <div className="flex gap-6">
          {[
            { href: "https://github.com/AchrafLamia", label: "GitHub" },
            { href: "https://linkedin.com/in/achraflamia", label: "LinkedIn" },
            { href: "mailto:lamia.achraf60@gmail.com", label: "Email" },
          ].map((l) => (
            <a key={l.label} href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="text-slate-700 hover:text-indigo-400 text-xs font-semibold uppercase tracking-widest transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
