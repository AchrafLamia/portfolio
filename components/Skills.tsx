const groups = [
  {
    label: "ML & Computer Vision",
    skills: ["PyTorch","YOLOv12","TensorRT","ONNX","INT8 Quantization","Knowledge Distillation","OpenCV","SigLIP","SAM2","StrongSort","Edge AI","Roboflow","W&B"],
  },
  {
    label: "MLOps & DevOps",
    skills: ["Docker","Terraform","GitHub Actions","Jenkins","Helm","GitOps","Karpenter","ArgoCD","Prometheus","Grafana"],
  },
  {
    label: "Cloud — AWS",
    skills: ["EKS","Kubernetes","RDS","VPC","IAM","CloudWatch","S3","EC2","ECR","KMS","Route53","ALB","SageMaker","NAT Gateway"],
  },
  {
    label: "Architecture & IoT",
    skills: ["System Design","Distributed Systems","Event-Driven","MQTT 5","mTLS","X.509","IoT Fleet","ESP-IDF","FreeRTOS"],
  },
  {
    label: "Tools & Languages",
    skills: ["Python","C++","Git","Linux","PostgreSQL","ClickHouse","EMQX","FastAPI","Keycloak","Power BI"],
  },
];

const langs = [
  { lang: "Arabic",  level: "Native", pct: 100 },
  { lang: "French",  level: "C2",     pct: 95  },
  { lang: "English", level: "C2",     pct: 95  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <p className="label">Expertise</p>
        <h2 className="text-4xl sm:text-5xl font-black text-[#0a0a0a] mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <div key={g.label} className="card bg-white p-7">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700 px-2.5 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Languages */}
          <div className="card bg-white p-7">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
              Spoken Languages
            </h3>
            <div className="space-y-4">
              {langs.map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-[#0a0a0a]">{l.lang}</span>
                    <span className="text-gray-400 text-xs">{l.level}</span>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0a0a0a] rounded-full" style={{ width: `${l.pct}%` }} />
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
