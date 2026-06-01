export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              About
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Building AI systems that work in the real world
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I&apos;m an ML &amp; Computer Vision Engineer based in Casablanca,
                Morocco, with 2+ years of production experience across real-time
                CV systems, edge AI deployment, and full-stack AWS cloud
                infrastructure.
              </p>
              <p>
                My work spans the full stack — from annotating 40,000 frames
                with SAM2 and training knowledge-distilled models, to writing
                C++ BoTSORT runtimes that run at 22 FPS on a K230 embedded
                chip under RTOS, to provisioning 14-layer AWS infrastructure
                with Terraform on EKS.
              </p>
              <p>
                I hold a Master&apos;s in Data Science &amp; AI from ENSET Mohammedia
                (Hassan II University, top engineering school in Morocco) and
                speak Arabic, French (C2), and English (C2).
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Python", "C++", "PyTorch", "Terraform", "AWS", "Docker"].map((t) => (
                <span
                  key={t}
                  className="bg-white border border-slate-200 text-slate-700 text-sm font-medium px-3 py-1.5 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "🧠",
                title: "Edge AI",
                desc: "K230, TensorRT INT8, ONNX, knowledge distillation, C++ runtimes under RTOS",
              },
              {
                icon: "☁️",
                title: "Cloud (AWS)",
                desc: "EKS, Karpenter, Terraform, ArgoCD, EMQX, ClickHouse, multi-AZ VPC",
              },
              {
                icon: "👁️",
                title: "Computer Vision",
                desc: "YOLOv12, BoTSORT, SAM2, StrongSort+ReID, real-time tracking pipelines",
              },
              {
                icon: "⚙️",
                title: "MLOps",
                desc: "Roboflow, W&B, SageMaker, CI/CD pipelines, model versioning & deployment",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-1">{c.title}</h3>
                <p className="text-slate-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
