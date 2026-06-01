const skillGroups = [
  {
    category: "ML & Computer Vision",
    color: "blue",
    skills: [
      "PyTorch", "YOLOv12", "TensorRT", "ONNX", "INT8 Quantization",
      "Knowledge Distillation", "OpenCV", "SigLIP", "SAM2", "StrongSort",
      "Edge AI", "Roboflow", "W&B",
    ],
  },
  {
    category: "MLOps & DevOps",
    color: "violet",
    skills: [
      "Docker", "Terraform", "GitHub Actions", "Jenkins", "Helm",
      "GitOps", "Karpenter", "ArgoCD", "Prometheus", "Grafana",
    ],
  },
  {
    category: "Cloud — AWS",
    color: "orange",
    skills: [
      "EKS", "Kubernetes", "RDS", "VPC", "IAM", "CloudWatch",
      "S3", "EC2", "Lambda", "ECR", "KMS", "Route53", "ALB",
      "SageMaker", "NAT Gateway",
    ],
  },
  {
    category: "Architecture & IoT",
    color: "teal",
    skills: [
      "System Design", "Distributed Systems", "Event-Driven Architecture",
      "MQTT 5", "mTLS", "X.509", "IoT Fleet Management", "ESP-IDF", "FreeRTOS",
    ],
  },
  {
    category: "Tools & Languages",
    color: "slate",
    skills: [
      "Python", "C++", "Git", "Linux", "PostgreSQL", "ClickHouse",
      "Keycloak", "EMQX", "FastAPI", "Power BI", "REST APIs",
    ],
  },
];

const colorMap: Record<string, string> = {
  blue:   "bg-blue-50 text-blue-700 border-blue-100",
  violet: "bg-violet-50 text-violet-700 border-violet-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
  teal:   "bg-teal-50 text-teal-700 border-teal-100",
  slate:  "bg-slate-100 text-slate-700 border-slate-200",
};

const headerMap: Record<string, string> = {
  blue:   "text-blue-600",
  violet: "text-violet-600",
  orange: "text-orange-600",
  teal:   "text-teal-600",
  slate:  "text-slate-600",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Skills
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            Technical Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <h3 className={`font-bold text-sm uppercase tracking-wide mb-4 ${headerMap[group.color]}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium border px-2.5 py-1 rounded-full ${colorMap[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Languages card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all">
            <h3 className="font-bold text-sm uppercase tracking-wide mb-4 text-slate-600">
              Spoken Languages
            </h3>
            <div className="space-y-3">
              {[
                { lang: "Arabic", level: "Native", pct: 100 },
                { lang: "French", level: "C2", pct: 95 },
                { lang: "English", level: "C2", pct: 95 },
              ].map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">{l.lang}</span>
                    <span className="text-slate-400">{l.level}</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
