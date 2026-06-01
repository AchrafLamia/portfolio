import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const items = [
  { type: "mail" as const,     label: "Email",     value: "lamia.achraf60@gmail.com",      href: "mailto:lamia.achraf60@gmail.com" },
  { type: "linkedin" as const, label: "LinkedIn",  value: "linkedin.com/in/achraflamia",   href: "https://linkedin.com/in/achraflamia" },
  { type: "github" as const,   label: "GitHub",    value: "github.com/AchrafLamia",        href: "https://github.com/AchrafLamia" },
  { type: "location" as const, label: "Location",  value: "Casablanca, Morocco",            href: null },
];

function Icon({ type }: { type: typeof items[0]["type"] }) {
  if (type === "mail")     return <Mail size={18} strokeWidth={1.8} />;
  if (type === "linkedin") return <LinkedinIcon size={18} />;
  if (type === "github")   return <GithubIcon size={18} />;
  return <MapPin size={18} strokeWidth={1.8} />;
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="divider mb-20" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0a0a] mb-6">
              Let&apos;s work together
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Open to senior ML/CV and cloud engineering roles worldwide.
              Remote or relocation. Feel free to reach out.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-sm text-gray-500 font-medium">Available for new opportunities</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {items.map((item) => {
              const inner = (
                <div className="card bg-white p-5 flex items-center gap-4 group-hover:border-gray-300 transition-all">
                  <div className="w-9 h-9 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center shrink-0 text-gray-600">
                    <Icon type={item.type} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-[#0a0a0a] truncate">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="group">
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
