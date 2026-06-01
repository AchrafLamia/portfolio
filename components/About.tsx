import { Zap, Cloud, Eye, GitBranch } from "lucide-react";

const cards = [
  { icon: Zap,       title: "Edge AI",           desc: "K230 · TensorRT INT8 · ONNX · Knowledge Distillation · C++ runtimes under RTOS" },
  { icon: Cloud,     title: "Cloud — AWS",        desc: "EKS · Karpenter · Terraform · ArgoCD · EMQX · ClickHouse · multi-AZ VPC" },
  { icon: Eye,       title: "Computer Vision",    desc: "YOLOv12 · BoTSORT · SAM2 · StrongSort+ReID · real-time tracking pipelines" },
  { icon: GitBranch, title: "MLOps",              desc: "Roboflow · W&B · SageMaker · CI/CD · model versioning & deployment" },
];

const tags = ["Python", "C++", "PyTorch", "TensorRT", "Terraform", "AWS EKS", "Docker", "MQTT5"];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="divider mb-20" />

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <p className="label">About me</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0a0a] leading-tight mb-8">
              Building AI that works
              <br />
              in the real world
            </h2>
            <div className="space-y-5 text-gray-500 text-base leading-relaxed">
              <p>
                ML &amp; CV Engineer with 2+ years of production experience.
                I work across the full stack — from annotating 40k frames with SAM2
                and training knowledge-distilled models, to writing C++ BoTSORT
                runtimes at 22 FPS on K230 embedded hardware, to provisioning
                14-layer AWS infrastructure with Terraform on EKS.
              </p>
              <p>
                Master&apos;s in Data Science &amp; AI from{" "}
                <span className="text-[#0a0a0a] font-semibold">ENSET Mohammedia</span>{" "}
                (top engineering school, Morocco). Fluent in Arabic, French (C2), and English (C2).
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((t) => (
                <span key={t} className="text-xs font-semibold bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="card p-6">
                  <div className="w-9 h-9 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center mb-5">
                    <Icon size={17} className="text-gray-700" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bold text-[#0a0a0a] text-sm mb-2">{c.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
