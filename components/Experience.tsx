const jobs = [
  {
    company: "Marwa Group",
    role: "Cloud Infrastructure & IoT Engineer",
    period: "Apr 2026 — Present",
    current: true,
    bullets: [
      "Provisioned 14-layer AWS infrastructure with Terraform: VPC, EKS, Karpenter, RDS, ECR, Secrets Manager, Route53, ClickHouse, EMQX Cloud — automated via GitHub Actions with drift detection",
      "Replaced AWS IoT Core + MSK with EMQX Cloud MQTT 5 broker for 10,000+ K230 devices, cutting infra cost ~40%; enforced X.509 mTLS per-device certificate auth",
      "Deployed EKS with Karpenter (3 NodePools) and ArgoCD App-of-Apps with per-MR ephemeral environments",
      "Dual data store: RDS PostgreSQL 16 + ClickHouse Cloud OLAP; monitored with kube-prometheus-stack and 15 alerting rules",
    ],
    skills: ["AWS EKS","Terraform","Karpenter","ArgoCD","EMQX","ClickHouse","MQTT5/mTLS"],
  },
  {
    company: "Marwa Group",
    role: "Industrial Computer Vision Engineer (R&D)",
    period: "Oct 2025 — Mar 2026",
    current: false,
    bullets: [
      "Designed real-time CV system for textile production lines — tracking finished pieces per operator/station with live KPI visualization via Grafana",
      "YOLOv12 + BoTSORT pipeline on 40k SAM2-annotated frames; mAP@50 96.2%, Precision 94.4%, F1 94.0%",
      "End-to-end MLOps pipeline: XLarge → KD nano → ONNX → TensorRT INT8 → .kmodel → K230; 40%+ latency reduction, 22 FPS on-device; C++ runtime compiled as native ELF under RTOS",
    ],
    skills: ["YOLOv12","BoTSORT","SAM2","TensorRT","K230","C++","RTOS"],
  },
  {
    company: "Vertigo Digital",
    role: "Computer Vision & MLOps Engineer",
    period: "Jan 2025 — Sep 2025",
    current: false,
    bullets: [
      "Fine-tuned YOLOv8 for European & African football; >90% mAP@50 across multi-class detection",
      "StrongSort + ReID tracking with automated clustering (SigLIP + UMAP + KMeans); >70% manual tagging reduction",
      "Automated Roboflow → training → validation → deployment pipeline; model iteration down to <4 hours",
      "AWS SageMaker batch inference on >500 match hours",
    ],
    skills: ["YOLOv8","StrongSort","ReID","SigLIP","AWS SageMaker","Roboflow"],
  },
  {
    company: "Société Générale Maroc",
    role: "Data Scientist Intern — Graduation Project",
    period: "Mar 2024 — Sep 2024",
    current: false,
    bullets: [
      "LLaMA 3-powered HR recommendation system for job reassignments; reduced manual analysis from weeks to hours",
      "Flask API between HR database and LLM; deployed on Hugging Face Inference Endpoints; Power BI dashboards for KPI tracking",
    ],
    skills: ["LLaMA 3","Fine-tuning","Flask","Hugging Face","Power BI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="divider mb-20" />

        <p className="label">Journey</p>
        <h2 className="text-4xl sm:text-5xl font-black text-[#0a0a0a] mb-16">
          Professional Experience
        </h2>

        <div className="space-y-5">
          {jobs.map((job) => (
            <div key={`${job.company}-${job.role}`} className="card p-8 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h3 className="font-black text-[#0a0a0a] text-lg">{job.company}</h3>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-700 px-2.5 py-0.5 rounded-full">
                        <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 font-medium text-sm">{job.role}</p>
                </div>
                <span className="text-gray-400 text-sm shrink-0 font-medium">{job.period}</span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-gray-500 text-sm">
                    <span className="text-gray-300 mt-1.5 shrink-0 text-xs">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <span key={s} className="text-xs font-medium bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-5 card p-8 bg-gray-50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="font-black text-[#0a0a0a] text-base">ENSET Mohammedia — Hassan II University</h3>
              <p className="text-gray-400 text-xs mt-0.5">top engineering school, Morocco</p>
            </div>
            <span className="text-gray-400 text-sm shrink-0">Nov 2022 — Sep 2024</span>
          </div>
          <p className="text-gray-600 font-semibold text-sm mb-2">Master&apos;s in Data Science &amp; AI (SDIA)</p>
          <p className="text-gray-400 text-xs">
            AI · Computer Vision · Big Data · ML · Deep Learning · NLP · Distributed Systems · Cloud Computing
          </p>
        </div>

      </div>
    </section>
  );
}
