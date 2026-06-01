import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const stats = [
  { value: "96.2%",    label: "mAP@50",               sub: "textile dataset" },
  { value: "22 FPS",   label: "on K230",               sub: "edge inference" },
  { value: "~40%",     label: "infra cost cut",         sub: "via EMQX migration" },
  { value: "14",       label: "AWS infra layers",       sub: "on Terraform + EKS" },
];

const ticker = [
  "YOLOv12","AWS EKS","TensorRT INT8","BoTSORT","Terraform","K230 Edge AI",
  "Knowledge Distillation","MQTT5 / mTLS","ArgoCD","ClickHouse","SAM2","ONNX",
  "Karpenter","FreeRTOS","StrongSort + ReID","PyTorch","EMQX Cloud",
];

export default function Hero() {
  const tickerStr = ticker.join("  ·  ");

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/08 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-600/06 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative flex-1 max-w-7xl mx-auto px-6 w-full pt-28 pb-12 flex flex-col justify-center">

        {/* Top row */}
        <div className="flex items-center justify-between mb-12">
          <div className="inline-flex items-center gap-2 border border-emerald-500/25 bg-emerald-500/06 text-emerald-400 text-xs font-bold px-4 py-2 rounded-full fade-up">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Available — Open to relocation &amp; remote
          </div>
          <div className="hidden md:flex items-center gap-4 fade-up">
            <a href="https://github.com/AchrafLamia" target="_blank" rel="noreferrer"
              className="text-slate-600 hover:text-white transition-colors"><GithubIcon size={18} /></a>
            <a href="https://linkedin.com/in/achraflamia" target="_blank" rel="noreferrer"
              className="text-slate-600 hover:text-indigo-400 transition-colors"><LinkedinIcon size={18} /></a>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-16">

          {/* Left — Name + info */}
          <div>
            <h1 className="font-black leading-[0.88] tracking-tight mb-6 fade-up d1"
              style={{ fontSize: "clamp(3.8rem, 11vw, 8.5rem)" }}>
              Achraf <span className="g-text">Lamia</span>
            </h1>

            <div className="flex items-center gap-4 mb-5 fade-up d2">
              <div className="h-px w-10 bg-indigo-500/50" />
              <p className="text-slate-400 font-medium text-lg tracking-wide">
                ML &amp; Computer Vision Engineer
              </p>
            </div>

            <p className="text-slate-500 text-base leading-relaxed max-w-xl mb-10 fade-up d2">
              End-to-end AI systems — from YOLOv12 training and knowledge distillation
              to C++ runtimes on K230 edge hardware and 14-layer AWS EKS production infra.
            </p>

            <div className="flex flex-wrap gap-3 fade-up d3">
              <a href="#projects" className="btn-fill">
                View Projects <ArrowRight size={15} />
              </a>
              <a href="mailto:lamia.achraf60@gmail.com" className="btn-ghost">
                <Mail size={15} /> Get in Touch
              </a>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4 fade-up d3">
            {stats.map((s) => (
              <div key={s.value} className="card px-6 py-5 lg:w-52">
                <div className="stat-number g-text mb-0.5">{s.value}</div>
                <div className="text-slate-300 font-semibold text-sm">{s.label}</div>
                <div className="text-slate-600 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="line fade-up d4" />
      </div>

      {/* Marquee */}
      <div className="marquee-track py-4 fade-up d5">
        <div className="marquee-inner">
          {[tickerStr, tickerStr].map((t, i) => (
            <span key={i} className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 px-8 whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
