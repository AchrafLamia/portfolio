import { Zap, Cloud, Eye, GitBranch } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Edge AI",
    desc: "K230 · TensorRT INT8 · ONNX · Knowledge Distillation · C++ runtimes under RTOS",
    color: "text-violet-400",
    bg: "bg-violet-500/08",
  },
  {
    icon: Cloud,
    title: "Cloud — AWS",
    desc: "EKS · Karpenter · Terraform · ArgoCD · EMQX · ClickHouse · multi-AZ VPC",
    color: "text-orange-400",
    bg: "bg-orange-500/08",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "YOLOv12 · BoTSORT · SAM2 · StrongSort+ReID · real-time tracking pipelines",
    color: "text-blue-400",
    bg: "bg-blue-500/08",
  },
  {
    icon: GitBranch,
    title: "MLOps",
    desc: "Roboflow · W&B · SageMaker · CI/CD · model versioning & deployment",
    color: "text-cyan-400",
    bg: "bg-cyan-500/08",
  },
];

const tags = ["Python", "C++", "PyTorch", "TensorRT", "Terraform", "AWS EKS", "Docker", "MQTT5"];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="section-label">About me</p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
              Building AI that works{" "}
              <span className="grad-text">in the real world</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                ML &amp; CV Engineer with 2+ years of production experience.
                I work across the full stack — from annotating 40k frames with SAM2
                and training knowledge-distilled models, to writing C++ BoTSORT
                runtimes at 22 FPS on K230 embedded hardware, to provisioning
                14-layer AWS infrastructure with Terraform on EKS.
              </p>
              <p>
                Master&apos;s in Data Science &amp; AI from{" "}
                <span className="text-slate-300 font-medium">ENSET Mohammedia</span>{" "}
                (top engineering school, Morocco). Fluent in Arabic, French (C2), and English (C2).
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((t) => (
                <span key={t} className="text-xs font-semibold border border-white/08 bg-white/03 text-slate-400 px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
                    <Icon size={20} className={c.color} />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{c.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
