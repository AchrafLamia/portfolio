export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-black text-lg text-[#0a0a0a]">AL<span className="text-gray-300">.</span></span>
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Achraf Lamia</p>
        <div className="flex gap-6">
          {[
            { href: "https://github.com/AchrafLamia", label: "GitHub" },
            { href: "https://linkedin.com/in/achraflamia", label: "LinkedIn" },
            { href: "mailto:lamia.achraf60@gmail.com", label: "Email" },
          ].map((l) => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="text-gray-400 hover:text-black text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
