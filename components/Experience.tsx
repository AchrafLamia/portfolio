const jobs = [
  {
    no: "01",
    company: "Marwa Group",
    role: "Cloud Infrastructure & IoT Engineer",
    period: "Apr 2026 — Present",
    current: true,
    bullets: [
      "Provisioned 14-layer AWS infrastructure with Terraform: VPC, EKS, Karpenter, RDS, ECR, Secrets Manager, Route53, ClickHouse, EMQX Cloud — automated via GitHub Actions with drift detection",
      "Replaced AWS IoT Core + MSK with EMQX Cloud MQTT 5 for 10,000+ K230 devices, cutting infra cost ~40%; enforced X.509 mTLS per-device certificate auth",
      "Deployed EKS with Karpenter (3 NodePools) and ArgoCD App-of-Apps with per-MR ephemeral environments",
      "Dual data store: RDS PostgreSQL 16 + ClickHouse Cloud OLAP; monitored via kube-prometheus-stack with 15 production alerting rules",
    ],
    skills: ["AWS EKS","Terraform","Karpenter","ArgoCD","EMQX","ClickHouse","MQTT5/mTLS"],
  },
  {
    no: "02",
    company: "Marwa Group",
    role: "Industrial Computer Vision Engineer (R&D)",
    period: "Oct 2025 — Mar 2026",
    current: false,
    bullets: [
      "Designed real-time CV system for textile production lines — tracking pieces per operator/station with live KPI dashboards via Grafana",
      "YOLOv12 + BoTSORT pipeline on 40k SAM2-annotated frames; mAP@50 96.2%, Precision 94.4%, F1 94.0%",
      "End-to-end MLOps: XLarge → KD nano → ONNX → TensorRT INT8 → .kmodel → K230; 40%+ latency reduction, 22 FPS on-device; C++ runtime compiled as native ELF under RTOS",
    ],
    skills: ["YOLOv12","BoTSORT","SAM2","TensorRT","K230","C++","RTOS"],
  },
  {
    no: "03",
    company: "Vertigo Digital",
    role: "Computer Vision & MLOps Engineer",
    period: "Jan 2025 — Sep 2025",
    current: false,
    bullets: [
      "Fine-tuned YOLOv8 for European & African football; >90% mAP@50 across multi-class detection",
      "StrongSort + ReID tracking with automated player clustering (SigLIP + UMAP + KMeans); >70% manual tagging reduction",
      "Automated Roboflow → training → validation → deploy pipeline; iteration cycle down to <4 hours",
      "AWS SageMaker batch inference on >500 match hours",
    ],
    skills: ["YOLOv8","StrongSort","ReID","SigLIP","SageMaker","Roboflow"],
  },
  {
    no: "04",
    company: "Société Générale Maroc",
    role: "Data Scientist Intern — Graduation Project",
    period: "Mar 2024 — Sep 2024",
    current: false,
    bullets: [
      "LLaMA 3-powered HR recommendation system for job reassignments; reduced manual analysis from weeks to hours",
      "Flask API between HR database and LLM; deployed on Hugging Face Inference Endpoints; Power BI KPI dashboards",
    ],
    skills: ["LLaMA 3","Fine-tuning","Flask","Hugging Face","Power BI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <p className="eyebrow">Career</p>
        <h2 className="text-5xl sm:text-6xl font-black tracking-tight leading-none mb-16">
          Professional<br /><span className="g-text">Experience</span>
        </h2>

        <div className="space-y-3">
          {jobs.map((job) => (
            <details key={`${job.no}-${job.company}`}
              className="card group cursor-pointer overflow-hidden"
              open={job.current}>
              <summary className="flex items-center gap-6 px-7 py-6 list-none select-none hover:bg-white/[0.02] transition-colors">
                <span className="text-xs font-black text-slate-700 shrink-0 font-mono">{job.no}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5">
                    <h3 className="font-black text-white text-base sm:text-lg">{job.company}</h3>
                    {job.current && (
                      <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full">
                        <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" /> Now
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm">{job.role}</p>
                </div>
                <span className="text-slate-600 text-xs shrink-0 hidden sm:block">{job.period}</span>
                <span className="text-slate-600 text-lg shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>

              <div className="px-7 pb-7 border-t border-white/05 mt-0">
                <div className="pt-6 grid sm:grid-cols-[1fr_auto] gap-6 items-start">
                  <ul className="space-y-3">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 text-sm">
                        <span className="text-indigo-500/60 mt-1.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap sm:flex-col gap-2 sm:items-end">
                    {job.skills.map((s) => (
                      <span key={s} className="text-xs font-semibold bg-white/04 border border-white/08 text-slate-400 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Education */}
        <div className="mt-3 card px-7 py-6 bg-white/[0.015]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black text-slate-700 font-mono mb-1">EDU</p>
              <h3 className="font-black text-white text-base">ENSET Mohammedia — Hassan II University</h3>
              <p className="text-indigo-400 font-semibold text-sm mt-0.5">Master&apos;s in Data Science &amp; AI (SDIA)</p>
              <p className="text-slate-600 text-xs mt-2">AI · CV · Big Data · ML · Deep Learning · NLP · Distributed Systems · Cloud</p>
            </div>
            <span className="text-slate-600 text-xs shrink-0">Nov 2022 — Sep 2024</span>
          </div>
        </div>

      </div>
    </section>
  );
}
