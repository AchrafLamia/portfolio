const groups = [
  { label: "ML & CV",          color: "bg-blue-500/10 text-blue-300 border-blue-500/20",     skills: ["PyTorch","YOLOv12","TensorRT","ONNX","INT8 Quantization","Knowledge Distillation","OpenCV","SigLIP","SAM2","StrongSort","Edge AI","Roboflow","W&B"] },
  { label: "MLOps & DevOps",   color: "bg-violet-500/10 text-violet-300 border-violet-500/20", skills: ["Docker","Terraform","GitHub Actions","Jenkins","Helm","GitOps","Karpenter","ArgoCD","Prometheus","Grafana"] },
  { label: "Cloud — AWS",      color: "bg-orange-500/10 text-orange-300 border-orange-500/20", skills: ["EKS","Kubernetes","RDS","VPC","IAM","CloudWatch","S3","EC2","ECR","KMS","Route53","ALB","SageMaker","NAT Gateway"] },
  { label: "Architecture",     color: "bg-teal-500/10 text-teal-300 border-teal-500/20",      skills: ["System Design","Distributed Systems","Event-Driven","MQTT 5","mTLS","X.509","IoT Fleet","ESP-IDF","FreeRTOS"] },
  { label: "Tools",            color: "bg-slate-500/10 text-slate-300 border-slate-500/20",   skills: ["Python","C++","Git","Linux","PostgreSQL","ClickHouse","EMQX","FastAPI","Keycloak","Power BI"] },
];

const langs = [
  { lang: "Arabic",  level: "Native", pct: 100 },
  { lang: "French",  level: "C2",     pct: 95 },
  { lang: "English", level: "C2",     pct: 95 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#070710]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <p className="eyebrow">Expertise</p>
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight leading-none">
              Technical<br /><span className="g-text">Skills</span>
            </h2>
          </div>
          {/* Languages mini card */}
          <div className="card p-6 sm:w-64">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Languages</p>
            <div className="space-y-3">
              {langs.map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-300">{l.lang}</span>
                    <span className="text-slate-600">{l.level}</span>
                  </div>
                  <div className="h-0.5 bg-white/05 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-400 rounded-full" style={{ width: `${l.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {groups.map((g) => (
            <div key={g.label} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-5 border-b border-white/05 last:border-0">
              <span className="text-xs font-black uppercase tracking-widest text-slate-600 shrink-0 sm:w-36">
                {g.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className={`text-xs font-semibold border px-2.5 py-1 rounded-full ${g.color}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
