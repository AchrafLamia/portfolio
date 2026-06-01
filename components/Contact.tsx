import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const contacts = [
  {
    label: "Email",
    value: "lamia.achraf60@gmail.com",
    href: "mailto:lamia.achraf60@gmail.com",
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100 hover:border-blue-300",
    type: "mail" as const,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/achraflamia",
    href: "https://linkedin.com/in/achraflamia",
    color: "text-blue-700",
    bg: "bg-blue-50 border-blue-100 hover:border-blue-300",
    type: "linkedin" as const,
  },
  {
    label: "GitHub",
    value: "github.com/AchrafLamia",
    href: "https://github.com/AchrafLamia",
    color: "text-slate-700",
    bg: "bg-slate-100 border-slate-200 hover:border-slate-400",
    type: "github" as const,
  },
  {
    label: "Location",
    value: "Casablanca, Morocco",
    href: null,
    color: "text-slate-600",
    bg: "bg-slate-100 border-slate-200",
    type: "location" as const,
  },
];

function ContactIcon({ type, size }: { type: typeof contacts[0]["type"]; size: number }) {
  if (type === "mail") return <Mail size={size} />;
  if (type === "linkedin") return <LinkedinIcon size={size} />;
  if (type === "github") return <GithubIcon size={size} />;
  return <MapPin size={size} />;
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Open to senior ML/CV and cloud engineering roles — remote or relocation.
            Feel free to reach out.
          </p>
        </div>

        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
          {contacts.map((item) => {
            const inner = (
              <div className={`border rounded-2xl p-6 flex items-center gap-4 transition-all ${item.bg}`}>
                <div className={`${item.color} shrink-0`}>
                  <ContactIcon type={item.type} size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">
                    {item.label}
                  </p>
                  <p className={`font-semibold text-sm ${item.color}`}>{item.value}</p>
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
      </div>
    </section>
  );
}
