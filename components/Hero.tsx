import { Mail, MapPin, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Blue accent blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 fade-up">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Open to relocation &amp; remote
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-4 fade-up fade-up-delay-1">
            Achraf Lamia
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-blue-600 mb-6 fade-up fade-up-delay-2">
            ML &amp; Computer Vision Engineer
          </p>

          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl fade-up fade-up-delay-3">
            End-to-end ML systems — from model training and knowledge
            distillation to edge deployment on K230 hardware and 14-layer AWS
            production infrastructure on EKS. Hands-on from C++ inference
            runtimes to multi-AZ Kubernetes clusters.
          </p>

          {/* Achievements bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 fade-up fade-up-delay-4">
            {[
              { value: "96.2%", label: "mAP@50 on textile dataset" },
              { value: "~40%", label: "infra cost reduction" },
              { value: "22 FPS", label: "on K230 edge device" },
              { value: "14-layer", label: "AWS infrastructure on EKS" },
            ].map((s) => (
              <div key={s.value} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{s.value}</div>
                <div className="text-xs text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 fade-up fade-up-delay-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="mailto:lamia.achraf60@gmail.com"
              className="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              Get in Touch
            </a>

            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com/AchrafLamia"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-400 hover:text-slate-700 transition-colors"
              >
                <GithubIcon size={22} />
              </a>
              <a
                href="https://linkedin.com/in/achraflamia"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <LinkedinIcon size={22} />
              </a>
              <a
                href="mailto:lamia.achraf60@gmail.com"
                aria-label="Email"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 text-sm mt-6">
            <MapPin size={14} />
            Casablanca, Morocco
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-blue-600 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
