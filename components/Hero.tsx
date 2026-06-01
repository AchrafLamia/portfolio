import { ArrowRight, Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const stats = [
  { value: "96.2%", label: "mAP@50 on custom textile dataset" },
  { value: "~40%", label: "infrastructure cost reduction" },
  { value: "22 FPS", label: "real-time inference on K230" },
  { value: "14-layer", label: "AWS EKS infra on Terraform" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-20">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-500 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-10 fade-up">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
          Open to relocation &amp; remote
        </div>

        {/* Name */}
        <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black tracking-tight leading-[0.92] text-[#0a0a0a] mb-6 fade-up delay-1">
          Achraf Lamia
        </h1>

        {/* Divider + title row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 fade-up delay-2">
          <div className="h-px w-12 bg-gray-300 hidden sm:block" />
          <p className="text-lg sm:text-xl text-gray-500 font-medium">
            ML &amp; Computer Vision Engineer
          </p>
        </div>

        <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mb-12 fade-up delay-2">
          End-to-end AI systems — from YOLOv12 training and knowledge distillation
          to C++ runtimes on K230 edge hardware and 14-layer AWS EKS production infra.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-16 fade-up delay-3">
          <a href="#projects" className="btn-dark">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="mailto:lamia.achraf60@gmail.com" className="btn-light">
            <Mail size={16} /> Get in Touch
          </a>
          <div className="flex items-center gap-3 ml-1">
            <a href="https://github.com/AchrafLamia" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors" aria-label="GitHub">
              <GithubIcon size={19} />
            </a>
            <a href="https://linkedin.com/in/achraflamia" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={19} />
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="divider mb-10 fade-up delay-4" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 fade-up delay-5">
          {stats.map((s, i) => (
            <div key={s.value}>
              <div className="text-2xl sm:text-3xl font-black text-[#0a0a0a] mb-1">{s.value}</div>
              <div className="text-xs text-gray-400 leading-snug">{s.label}</div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block absolute" />
              )}
            </div>
          ))}
        </div>

      </div>

      <a href="#about" className="flex justify-center pb-10 text-gray-300 hover:text-gray-500 transition-colors animate-bounce" aria-label="Scroll">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
