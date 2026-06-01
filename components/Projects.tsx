import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

const projects = [
  {
    title: "Soccer Analytics Platform",
    desc: "Real-time sports analytics: YOLOv8 detection, ViT-based ReID player tracking, Voronoi tactical zones, per-player speed estimation, heatmaps — Dockerized Flask API.",
    highlights: [">90% mAP@50", ">70% tagging reduction", ">500 match hours"],
    tags: ["Python", "YOLOv8", "StrongSort", "ReID", "SigLIP", "Docker", "Flask"],
    github: "https://github.com/AchrafLamia/soccer-analytics-Vertigo-Digital",
    category: "Computer Vision",
    cat: "cv",
    featured: true,
  },
  {
    title: "Industrial CV — Textile Monitoring",
    desc: "Production monitoring for textile lines. YOLOv12 + BoTSORT on 40k SAM2-annotated frames; knowledge-distilled to nano → TensorRT INT8 → .kmodel for K230 edge at 22 FPS.",
    highlights: ["mAP@50 96.2%", "22 FPS on K230", "<5% mAP after KD"],
    tags: ["YOLOv12", "BoTSORT", "SAM2", "TensorRT", "K230", "C++", "RTOS"],
    github: "https://github.com/AchrafLamia/yolo-kd-k230-pipeline",
    category: "Edge AI",
    cat: "edge",
    featured: true,
  },
  {
    title: "Nitra IoT — AWS Infrastructure",
    desc: "14-layer production AWS infra: EKS + Karpenter, ArgoCD GitOps, EMQX Cloud MQTT5/mTLS for 10,000+ devices, ClickHouse OLAP + RDS dual data store.",
    highlights: ["~40% cost reduction", "10,000+ devices", "14 infra layers"],
    tags: ["AWS EKS", "Terraform", "Karpenter", "ArgoCD", "EMQX", "ClickHouse"],
    github: null,
    category: "Cloud & MLOps",
    cat: "cloud",
    featured: true,
  },
  {
    title: "K230 BoTSORT Tracker",
    desc: "C++ BoTSORT with Kalman filter compiled as native ELF under RTOS. YOLO kmodel inference at 22 FPS on K230 embedded AI chip.",
    highlights: ["22 FPS", "Native ELF / RTOS", "C++ runtime"],
    tags: ["C++", "BoTSORT", "K230", "RTOS", "nncase"],
    github: "https://github.com/AchrafLamia/-k230-botsort-tracker",
    category: "Edge AI",
    cat: "edge",
    featured: false,
  },
  {
    title: "Nitra ESP32 Mesh Firmware",
    desc: "FreeRTOS firmware: BLE provisioning, WiFi Mesh, MQTT5/mTLS over EMQX Cloud, OTA updates, X.509 per-device certificate authentication.",
    highlights: ["10+ nodes", "mTLS / X.509", "OTA live"],
    tags: ["C", "ESP-IDF", "FreeRTOS", "MQTT5", "mTLS", "BLE"],
    github: "https://github.com/AchrafLamia/nitra-esp32-mesh",
    category: "IoT",
    cat: "iot",
    featured: false,
  },
  {
    title: "L'BALE — AI Marketplace",
    desc: "Second-hand clothing marketplace with live-selling via AWS IVS. AI listing pipeline (YOLOv12 + CLIP) auto-generates product titles from photos — >80% listing time reduction.",
    highlights: [">80% listing time saved", "AWS IVS live-selling", "Flutter MVP"],
    tags: ["Flutter", "Node.js", "AWS IVS", "YOLOv12", "CLIP"],
    github: "https://github.com/AchrafLamia/lbale-app",
    category: "Full-Stack AI",
    cat: "fullstack",
    featured: false,
  },
  {
    title: "Gesture & Action Recognition",
    desc: "Three-architecture study: ResNet18+LSTM with Kafka streaming, TCN with INT8 quantization for edge, and Twins-SVT Vision Transformer at 91.9% accuracy.",
    highlights: ["91.9% (Twins-SVT)", "INT8 TCN for edge", "Kafka streaming"],
    tags: ["PyTorch", "ResNet18", "TCN", "Twins-SVT", "MediaPipe"],
    github: "https://github.com/AchrafLamia/gesture-action-recognition",
    category: "Research",
    cat: "research",
    featured: false,
  },
  {
    title: "Financial Portfolio Analysis",
    desc: "Quantitative portfolio optimization: efficient frontier via Monte Carlo, Sharpe ratio maximization, VaR at 95%/99%, minimum variance via scipy.optimize.",
    highlights: ["Efficient frontier", "Sharpe & VaR", "Monte Carlo"],
    tags: ["Python", "NumPy", "SciPy", "Matplotlib"],
    github: "https://github.com/AchrafLamia/financial-portfolio-analysis",
    category: "Quantitative",
    cat: "quant",
    featured: false,
  },
];

const catColor: Record<string, string> = {
  cv:        "bg-blue-500/12 text-blue-400 border-blue-500/25",
  edge:      "bg-violet-500/12 text-violet-400 border-violet-500/25",
  cloud:     "bg-orange-500/12 text-orange-400 border-orange-500/25",
  iot:       "bg-teal-500/12 text-teal-400 border-teal-500/25",
  fullstack: "bg-pink-500/12 text-pink-400 border-pink-500/25",
  research:  "bg-indigo-500/12 text-indigo-400 border-indigo-500/25",
  quant:     "bg-emerald-500/12 text-emerald-400 border-emerald-500/25",
};

const catAccent: Record<string, string> = {
  cv:        "bg-blue-500",
  edge:      "bg-violet-500",
  cloud:     "bg-orange-500",
  iot:       "bg-teal-500",
  fullstack: "bg-pink-500",
  research:  "bg-indigo-500",
  quant:     "bg-emerald-500",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/08 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">Work</p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Featured <span className="grad-text">Projects</span>
          </h2>
          <p className="text-slate-500 mt-3">Production systems, research, and passion projects</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {featured.map((p) => <Card key={p.title} p={p} large />)}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {rest.map((p) => <Card key={p.title} p={p} large={false} />)}
        </div>

        <div className="text-center">
          <a href="https://github.com/AchrafLamia" target="_blank" rel="noreferrer" className="btn-outline">
            <GithubIcon size={18} /> View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Card({ p, large }: { p: typeof projects[0]; large: boolean }) {
  return (
    <div className={`group glass rounded-2xl flex flex-col transition-all duration-200 hover:scale-[1.015] overflow-hidden ${large ? "p-7" : "p-5"}`}>
      {/* Colored top accent line */}
      <div className={`h-0.5 -mx-7 -mt-7 mb-6 ${catAccent[p.cat]} opacity-60 ${large ? "" : "-mx-5 -mt-5 mb-5"}`} />

      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs font-bold border px-2.5 py-1 rounded-full ${catColor[p.cat]}`}>
          {p.category}
        </span>
        {p.github ? (
          <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 hover:text-indigo-400 transition-colors">
            <GithubIcon size={15} />
          </a>
        ) : (
          <span className="text-xs text-slate-700 font-medium">Private</span>
        )}
      </div>

      <h3 className={`font-black text-white mb-2 ${large ? "text-lg" : "text-sm"}`}>{p.title}</h3>
      <p className={`text-slate-400 leading-relaxed mb-4 flex-1 ${large ? "text-sm" : "text-xs"}`}>{p.desc}</p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {p.highlights.map((h) => (
          <span key={h} className="text-xs font-bold bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded">
            {h}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {(large ? p.tags : p.tags.slice(0, 4)).map((t) => (
          <span key={t} className="text-xs bg-white/04 border border-white/07 text-slate-500 px-2 py-0.5 rounded-full">
            {t}
          </span>
        ))}
        {!large && p.tags.length > 4 && (
          <span className="text-xs text-slate-600 px-1">+{p.tags.length - 4}</span>
        )}
      </div>

      <div className="flex items-center justify-end mt-auto">
        <ExternalLink size={13} className="text-slate-700 group-hover:text-indigo-500 transition-colors" />
      </div>
    </div>
  );
}
