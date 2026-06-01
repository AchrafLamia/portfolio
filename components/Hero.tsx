import { Mail, ArrowRight, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const stats = [
  { value: "96.2%", label: "mAP@50 on textile dataset" },
  { value: "~40%", label: "infrastructure cost cut" },
  { value: "22 FPS", label: "on K230 edge device" },
  { value: "14-layer", label: "AWS EKS infra on Terraform" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="dot-grid opacity-40" />
      <div className="mesh-bg" />

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-600/08 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 border border-indigo-500/30 bg-indigo-500/08 text-indigo-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 fade-up">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          Open to relocation &amp; remote · Casablanca, Morocco
        </div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4 fade-up fade-up-1">
          Achraf <span className="grad-text">Lamia</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl text-slate-400 font-medium mb-3 fade-up fade-up-2">
          ML &amp; Computer Vision Engineer
        </p>
        <p className="text-slate-500 text-base mb-10 max-w-xl fade-up fade-up-2">
          End-to-end AI systems — from YOLOv12 training and knowledge distillation
          to C++ runtimes on K230 edge hardware and 14-layer AWS EKS production infra.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-4 mb-16 fade-up fade-up-3">
          <a href="#projects" className="btn-primary">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="mailto:lamia.achraf60@gmail.com" className="btn-outline">
            <Mail size={16} /> Get in Touch
          </a>
          <div className="flex items-center gap-3 pl-1">
            <a href="https://github.com/AchrafLamia" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-white transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com/in/achraflamia" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-indigo-400 transition-colors">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 fade-up fade-up-4">
          {stats.map((s) => (
            <div key={s.value} className="glass rounded-2xl p-5">
              <div className="text-2xl font-black grad-text-cyan mb-1">{s.value}</div>
              <div className="text-xs text-slate-500 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-indigo-400 transition-colors animate-bounce"
        aria-label="Scroll"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
