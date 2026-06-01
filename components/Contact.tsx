import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Large CTA headline */}
        <div className="mb-20">
          <p className="eyebrow">Contact</p>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6">
            Let&apos;s build<br />
            <span className="g-text">something</span><br />
            together
          </h2>
          <p className="text-slate-500 text-lg max-w-md">
            Open to senior ML/CV and cloud engineering roles worldwide — remote or relocation.
          </p>
        </div>

        {/* Contact row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {[
            { icon: <Mail size={18} strokeWidth={1.75} />,     label: "Email",     value: "lamia.achraf60@gmail.com",    href: "mailto:lamia.achraf60@gmail.com" },
            { icon: <LinkedinIcon size={18} />,                label: "LinkedIn",  value: "linkedin.com/in/achraflamia", href: "https://linkedin.com/in/achraflamia" },
            { icon: <GithubIcon size={18} />,                  label: "GitHub",    value: "github.com/AchrafLamia",      href: "https://github.com/AchrafLamia" },
            { icon: <MapPin size={18} strokeWidth={1.75} />,   label: "Location",  value: "Casablanca, Morocco",          href: null },
          ].map((item) => {
            const inner = (
              <div className="card p-5 flex items-center gap-4 group hover:border-indigo-500/25 transition-all">
                <div className="w-9 h-9 rounded-lg bg-white/04 border border-white/08 flex items-center justify-center shrink-0 text-slate-500 group-hover:text-indigo-400 transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-0.5">{item.label}</p>
                  <p className="text-sm font-semibold text-slate-300 truncate group-hover:text-white transition-colors">{item.value}</p>
                </div>
              </div>
            );
            return item.href ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{inner}</a>
            ) : <div key={item.label}>{inner}</div>;
          })}
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-slate-500 text-sm font-medium">Available now — actively looking for new opportunities</span>
        </div>

      </div>
    </section>
  );
}
