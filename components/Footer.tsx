export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-slate-900 font-bold text-lg">
          AL<span className="text-blue-600">.</span>
        </span>
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Achraf Lamia. All rights reserved.
        </p>
        <div className="flex gap-5">
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
              className="text-slate-400 hover:text-blue-600 text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
