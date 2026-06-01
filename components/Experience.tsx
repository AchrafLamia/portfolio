const jobs = [
  {
    company: "Marwa Group",
    role: "Cloud Infrastructure & IoT Engineer",
    period: "Apr 2026 — Present",
    tag: "Current",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    dotColor: "bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.7)]",
    bullets: [
      "Provisioned 14-layer AWS infrastructure with Terraform: VPC, EKS, Karpenter, RDS, ECR, Secrets Manager, Route53, ClickHouse, EMQX Cloud, Bastion — automated via GitHub Actions with drift detection",
      "Replaced AWS IoT Core + MSK with EMQX Cloud Dedicated Flex as MQTT 5 broker for 10,000+ K230 devices, cutting infra cost ~40%; enforced X.509 mTLS per-device cert auth",
      "Deployed EKS with Karpenter (3 NodePools) and ArgoCD App-of-Apps with PullRequest ApplicationSet for per-MR ephemeral environments",
      "Built dual data store: RDS PostgreSQL 16 + ClickHouse Cloud OLAP; monitored via kube-prometheus-stack with 15 production alerting rules",
    ],
    skills: ["AWS EKS", "Terraform", "Karpenter", "ArgoCD", "EMQX", "ClickHouse", "MQTT5/mTLS"],
  },
  {
    company: "Marwa Group",
    role: "Industrial Computer Vision Engineer (R&D)",
    period: "Oct 2025 — Mar 2026",
    tag: null,
    tagColor: "",
    dotColor: "bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]",
    bullets: [
      "Designed real-time CV system for textile production monitoring — tracking finished pieces per operator/station with live KPI visualization via Grafana",
      "Built YOLOv12 + BoTSORT detection & tracking pipeline; XLarge model achieved mAP@50 96.2%, Precision 94.4%, F1 94.0% on 40k SAM2-annotated frames",
      "End-to-end MLOps pipeline: XLarge → KD nano → ONNX → TensorRT INT8 → .kmodel → K230; 40%+ latency reduction, 22 FPS on-device, <5% mAP drop; C++ runtime compiled as native ELF under RTOS",
    ],
    skills: ["YOLOv12", "BoTSORT", "SAM2", "TensorRT", "K230", "C++", "RTOS"],
  },
  {
    company: "Vertigo Digital",
    role: "Computer Vision & MLOps Engineer",
    period: "Jan 2025 — Sep 2025",
    tag: null,
    tagColor: "",
    dotColor: "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]",
    bullets: [
      "Fine-tuned YOLOv8 detection and pose-estimation models on European & African football footage; >90% mAP@50 across multi-class detection",
      "Built StrongSort + ReID tracking pipeline with automated clustering (SigLIP + UMAP + KMeans); reduced manual tagging effort >70%",
      "Automated end-to-end ML pipeline (Roboflow → training → validation → deploy); cut model iteration from days to <4 hours",
      "Trained and served models on AWS SageMaker for batch inference on >500 match hours",
    ],
    skills: ["YOLOv8", "StrongSort", "ReID", "SigLIP", "AWS SageMaker", "Roboflow"],
  },
  {
    company: "Société Générale Maroc",
    role: "Data Scientist Intern — Graduation Project",
    period: "Mar 2024 — Sep 2024",
    tag: null,
    tagColor: "",
    dotColor: "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]",
    bullets: [
      "Built LLaMA 3-powered HR recommendation system for optimal job reassignments across business units; reduced manual HR analysis from weeks to hours",
      "Flask API connecting HR database to LLM; fine-tuned & deployed on Hugging Face Inference Endpoints; Power BI dashboards for KPI adoption tracking",
    ],
    skills: ["LLaMA 3", "Fine-tuning", "Flask", "Hugging Face", "Power BI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/08 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">Journey</p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Professional <span className="grad-text">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 via-violet-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {jobs.map((job) => (
              <div key={`${job.company}-${job.role}`} className="sm:pl-14 relative">
                {/* Timeline dot */}
                <div className={`hidden sm:block absolute left-2.5 top-6 w-3 h-3 rounded-full -translate-x-1/2 ${job.dotColor}`} />

                <div className="glass rounded-2xl p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-black text-white text-lg leading-tight">{job.company}</h3>
                      <p className="text-indigo-400 font-semibold text-sm mt-0.5">{job.role}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {job.tag && (
                        <span className={`text-xs font-bold border px-2.5 py-1 rounded-full ${job.tagColor}`}>
                          {job.tag}
                        </span>
                      )}
                      <span className="text-slate-500 text-xs">{job.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2.5 text-slate-400 text-sm">
                        <span className="text-indigo-500 mt-1 shrink-0 text-xs">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <span key={s} className="text-xs font-medium bg-white/04 border border-white/07 text-slate-400 px-2.5 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-10 sm:pl-14 relative">
          <div className="hidden sm:block absolute left-4 top-6 w-3 h-3 bg-slate-600 rounded-full -translate-x-1/2" />
          <div className="glass rounded-2xl p-7">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <h3 className="font-black text-white">
                ENSET Mohammedia — Hassan II University
                <span className="text-slate-500 font-normal text-sm ml-2">(top engineering school, Morocco)</span>
              </h3>
              <span className="text-slate-500 text-xs shrink-0">Nov 2022 — Sep 2024</span>
            </div>
            <p className="text-indigo-400 font-semibold text-sm mb-3">Master&apos;s in Data Science &amp; AI (SDIA)</p>
            <p className="text-slate-500 text-sm">
              AI · Computer Vision · Big Data · ML · Deep Learning · NLP · Distributed Systems · Cloud Computing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
