const jobs = [
  {
    company: "Marwa Group",
    role: "Cloud Infrastructure & IoT Engineer",
    period: "Apr 2026 — Present",
    location: "Casablanca, Morocco",
    tag: "Current",
    bullets: [
      "Provisioned 14-layer AWS infrastructure with Terraform: VPC, EKS, Karpenter, RDS, ECR, Secrets Manager, Route53, ClickHouse, EMQX Cloud, Bastion — automated via GitHub Actions with scheduled drift detection",
      "Replaced AWS IoT Core + MSK with EMQX Cloud Dedicated Flex as MQTT 5 broker for 10,000+ K230 devices, cutting infra cost ~40%; enforced X.509 mTLS per-device certificate authentication",
      "Deployed EKS with Karpenter (3 NodePools) and ArgoCD App-of-Apps with PullRequest ApplicationSet for per-MR ephemeral environments",
      "Built dual data store: RDS PostgreSQL 16 (app state) + ClickHouse Cloud OLAP (KPI time-series); monitored via kube-prometheus-stack with 15 production alerting rules",
    ],
    skills: ["AWS EKS", "Terraform", "Karpenter", "ArgoCD", "EMQX", "ClickHouse", "MQTT5/mTLS"],
  },
  {
    company: "Marwa Group",
    role: "Industrial Computer Vision Engineer (R&D)",
    period: "Oct 2025 — Mar 2026",
    location: "Casablanca, Morocco",
    tag: null,
    bullets: [
      "Designed a real-time CV system to monitor textile production lines, tracking finished pieces per operator/station with live KPI visualization via Grafana",
      "Developed multi-object detection & tracking pipeline (YOLOv12 + BoTSORT); XLarge model achieved mAP@50 96.2%, Precision 94.4%, F1 94.0%",
      "Engineered annotation pipeline using SAM2 for automated segmentation across 40k frames; managed dataset versioning via Roboflow",
      "Built end-to-end MLOps pipeline: XLarge → KD to nano → ONNX → TensorRT INT8 → .kmodel → K230; achieved 40%+ latency reduction, 22 FPS on-device, <5% mAP degradation; C++ runtime compiled as native ELF under RTOS",
    ],
    skills: ["YOLOv12", "BoTSORT", "SAM2", "TensorRT", "K230", "C++", "RTOS", "Knowledge Distillation"],
  },
  {
    company: "Vertigo Digital",
    role: "Computer Vision & MLOps Engineer",
    period: "Jan 2025 — Sep 2025",
    location: "Casablanca, Morocco",
    tag: null,
    bullets: [
      "Fine-tuned YOLOv8 detection and pose-estimation models on European & African football footage; reached >90% mAP@50 on multi-class detection across varied pitch conditions",
      "Built StrongSort + ReID tracking pipeline with automated player clustering (SigLIP + UMAP + KMeans); reduced manual tagging effort by >70%",
      "Delivered tactical analytics: formation detection, control zones, heatmaps, and per-player & ball speed estimation",
      "Automated end-to-end ML pipeline: Roboflow → auto-training → validation gate → deployment; cut model iteration cycle to <4 hours",
      "Trained and served models on AWS SageMaker for scalable batch inference on >500 match hours",
    ],
    skills: ["YOLOv8", "StrongSort", "ReID", "SigLIP", "AWS SageMaker", "Roboflow", "MLOps"],
  },
  {
    company: "Société Générale Maroc",
    role: "Data Scientist Intern — Graduation Project",
    period: "Mar 2024 — Sep 2024",
    location: "Casablanca, Morocco",
    tag: null,
    bullets: [
      "Built LLaMA 3-powered HR recommendation system to predict optimal job reassignments for overstaffed employees; reduced manual HR analysis time from weeks to hours",
      "Designed Flask API layer between HR database and LLM; fine-tuned and deployed on Hugging Face Inference Endpoints; delivered Power BI dashboards tracking KPI adoption",
    ],
    skills: ["LLaMA 3", "Fine-tuning", "Flask", "Hugging Face", "Power BI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Experience
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            Professional Journey
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <div
                key={`${job.company}-${i}`}
                className={`relative md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}
              >
                {/* Dot on timeline */}
                <div
                  className={`hidden md:block absolute top-6 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow ${
                    i % 2 === 0 ? "-right-1.5" : "-left-1.5"
                  }`}
                />

                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-bold text-slate-900">{job.company}</h3>
                      <p className="text-blue-600 font-medium text-sm mt-0.5">{job.role}</p>
                    </div>
                    {job.tag && (
                      <span className="shrink-0 bg-green-50 text-green-700 border border-green-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {job.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                    <span>{job.period}</span>
                    <span>·</span>
                    <span>{job.location}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-slate-600 text-sm">
                        <span className="text-blue-400 mt-1.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.map((s) => (
                      <span
                        key={s}
                        className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full"
                      >
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
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-8">
          <h3 className="font-bold text-slate-900 text-lg mb-1">
            ENSET Mohammedia — Hassan II University
            <span className="text-slate-400 font-normal text-sm ml-2">(top engineering school, Morocco)</span>
          </h3>
          <p className="text-blue-600 font-medium text-sm mb-1">
            Master&apos;s in Data Science &amp; Artificial Intelligence (SDIA)
          </p>
          <p className="text-slate-400 text-sm mb-3">Nov 2022 — Sep 2024 · Mohammedia, Morocco</p>
          <p className="text-slate-500 text-sm">
            Core: AI · Computer Vision · Big Data · ML · Deep Learning · NLP · Distributed Systems · Cloud Computing
          </p>
        </div>
      </div>
    </section>
  );
}
