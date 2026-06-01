import { Zap, Cloud, Eye, GitBranch } from "lucide-react";

const cards = [
  { icon: Zap,       title: "Edge AI",          desc: "K230 · TensorRT INT8 · ONNX · Knowledge Distillation · C++ under RTOS", color: "text-violet-400", ring: "ring-violet-500/15" },
  { icon: Cloud,     title: "Cloud — AWS",       desc: "EKS · Karpenter · Terraform · ArgoCD · EMQX · ClickHouse",            color: "text-orange-400", ring: "ring-orange-500/15" },
  { icon: Eye,       title: "Computer Vision",   desc: "YOLOv12 · BoTSORT · SAM2 · StrongSort+ReID · tracking pipelines",     color: "text-blue-400",   ring: "ring-blue-500/15" },
  { icon: GitBranch, title: "MLOps",             desc: "Roboflow · W&B · SageMaker · CI/CD · model versioning & deployment",  color: "text-cyan-400",   ring: "ring-cyan-500/15" },
];

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <p className="eyebrow">About</p>
            <h2 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tight mb-10">
              Building AI that<br />
              works in the<br />
              <span className="g-text">real world</span>
            </h2>
            <div className="space-y-5 text-slate-400 text-base leading-relaxed">
              <p>
                ML &amp; CV Engineer with 2+ years of production experience across
                real-time CV systems, edge AI deployment, and full-stack AWS cloud
                infrastructure.
              </p>
              <p>
                I work the full stack — from annotating 40k frames with SAM2 and
                training knowledge-distilled models, to writing C++ BoTSORT runtimes
                at 22 FPS on K230 embedded hardware, to provisioning 14-layer AWS
                infrastructure with Terraform on EKS.
              </p>
              <p>
                Master&apos;s in Data Science &amp; AI from{" "}
                <span className="text-slate-200 font-semibold">ENSET Mohammedia</span>{" "}
                — top engineering school in Morocco. Fluent in Arabic, French (C2), and English (C2).
              </p>
            </div>
          </div>

          {/* Right — cards */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className={`card-accent p-6 ring-1 ${c.ring}`}>
                  <div className="mb-4">
                    <Icon size={22} className={c.color} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{c.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom tech strip */}
        <div className="mt-20 line" />
        <div className="mt-8 flex flex-wrap gap-2">
          {["Python","C++","PyTorch","TensorRT","Terraform","AWS EKS","Docker","MQTT5","FreeRTOS","ClickHouse","EMQX","ONNX"].map((t) => (
            <span key={t} className="text-xs font-semibold text-slate-500 border border-white/06 px-3 py-1.5 rounded-full hover:border-indigo-500/30 hover:text-indigo-400 transition-colors cursor-default">
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
