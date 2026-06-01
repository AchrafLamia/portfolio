const groups = [
  {
    label: "ML & Computer Vision",
    accent: "text-blue-400",
    pill: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    skills: ["PyTorch","YOLOv12","TensorRT","ONNX","INT8 Quantization","Knowledge Distillation","OpenCV","SigLIP","SAM2","StrongSort","Edge AI","Roboflow","W&B"],
  },
  {
    label: "MLOps & DevOps",
    accent: "text-violet-400",
    pill: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    skills: ["Docker","Terraform","GitHub Actions","Jenkins","Helm","GitOps","Karpenter","ArgoCD","Prometheus","Grafana"],
  },
  {
    label: "Cloud — AWS",
    accent: "text-orange-400",
    pill: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    skills: ["EKS","Kubernetes","RDS","VPC","IAM","CloudWatch","S3","EC2","Lambda","ECR","KMS","Route53","ALB","SageMaker","NAT Gateway"],
  },
  {
    label: "Architecture & IoT",
    accent: "text-cyan-400",
    pill: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    skills: ["System Design","Distributed Systems","Event-Driven","MQTT 5","mTLS","X.509","IoT Fleet","ESP-IDF","FreeRTOS"],
  },
  {
    label: "Tools & Languages",
    accent: "text-emerald-400",
    pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    skills: ["Python","C++","Git","Linux","PostgreSQL","ClickHouse","EMQX","FastAPI","Keycloak","Power BI"],
  },
];

const langs = [
  { lang: "Arabic", level: "Native", pct: 100, color: "bg-indigo-500" },
  { lang: "French", level: "C2",     pct: 95,  color: "bg-violet-500" },
  { lang: "English", level: "C2",    pct: 95,  color: "bg-blue-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Technical <span className="grad-text">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {groups.map((g) => (
            <div key={g.label} className="glass rounded-2xl p-6">
              <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${g.accent}`}>
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className={`text-xs font-medium border px-2.5 py-1 rounded-full ${g.pill}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Languages */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-slate-400">
              Spoken Languages
            </h3>
            <div className="space-y-4">
              {langs.map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-slate-300">{l.lang}</span>
                    <span className="text-slate-500 text-xs">{l.level}</span>
                  </div>
                  <div className="h-1 bg-white/05 rounded-full overflow-hidden">
                    <div className={`h-full ${l.color} rounded-full`} style={{ width: `${l.pct}%` }} />
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
