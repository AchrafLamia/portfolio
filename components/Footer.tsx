export default function Footer() {
  return (
    <footer className="border-t border-white/05 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xl font-black">
          <span className="grad-text">AL</span>
          <span className="text-indigo-500">.</span>
        </span>

        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Achraf Lamia — ML &amp; CV Engineer
        </p>

        <div className="flex gap-6">
          {[
            { href: "https://github.com/AchrafLamia", label: "GitHub" },
            { href: "https://linkedin.com/in/achraflamia", label: "LinkedIn" },
            { href: "mailto:lamia.achraf60@gmail.com", label: "Email" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-slate-600 hover:text-indigo-400 text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
