import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const items = [
  {
    type: "mail" as const,
    label: "Email",
    value: "lamia.achraf60@gmail.com",
    href: "mailto:lamia.achraf60@gmail.com",
    accent: "group-hover:text-blue-400",
    glow: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]",
  },
  {
    type: "linkedin" as const,
    label: "LinkedIn",
    value: "linkedin.com/in/achraflamia",
    href: "https://linkedin.com/in/achraflamia",
    accent: "group-hover:text-indigo-400",
    glow: "group-hover:border-indigo-500/30 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]",
  },
  {
    type: "github" as const,
    label: "GitHub",
    value: "github.com/AchrafLamia",
    href: "https://github.com/AchrafLamia",
    accent: "group-hover:text-violet-400",
    glow: "group-hover:border-violet-500/30 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]",
  },
  {
    type: "location" as const,
    label: "Location",
    value: "Casablanca, Morocco",
    href: null,
    accent: "text-slate-400",
    glow: "",
  },
];

function Icon({ type, size }: { type: typeof items[0]["type"]; size: number }) {
  if (type === "mail") return <Mail size={size} />;
  if (type === "linkedin") return <LinkedinIcon size={size} />;
  if (type === "github") return <GithubIcon size={size} />;
  return <MapPin size={size} />;
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-3">
            Let&apos;s <span className="grad-text">Connect</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto">
            Open to senior ML/CV and cloud engineering roles worldwide — remote or relocation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
          {items.map((item) => {
            const inner = (
              <div className={`group glass rounded-2xl p-6 flex items-center gap-5 transition-all duration-200 ${item.glow}`}>
                <div className={`text-slate-500 transition-colors shrink-0 ${item.accent}`}>
                  <Icon type={item.type} size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold uppercase tracking-widest mb-0.5">
                    {item.label}
                  </p>
                  <p className={`font-semibold text-sm text-slate-300 transition-colors ${item.accent}`}>
                    {item.value}
                  </p>
                </div>
              </div>
            );
            return item.href ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {inner}
              </a>
            ) : (
              <div key={item.label}>{inner}</div>
            );
          })}
        </div>

        {/* Availability note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2.5 border border-emerald-500/20 bg-emerald-500/08 text-emerald-400 text-sm font-medium px-5 py-2.5 rounded-full">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available — open to new opportunities
          </div>
        </div>
      </div>
    </section>
  );
}
