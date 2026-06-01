import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

const projects = [
  {
    title: "Soccer Analytics Platform",
    desc: "Real-time sports analytics: YOLOv8 detection, ViT-based ReID player tracking, Voronoi tactical zones, per-player speed estimation, heatmaps — Dockerized Flask API.",
    highlights: [">90% mAP@50", ">70% tagging reduction", ">500 match hours"],
    tags: ["Python","YOLOv8","StrongSort","ReID","SigLIP","Docker","Flask"],
    github: "https://github.com/AchrafLamia/soccer-analytics-Vertigo-Digital",
    category: "Computer Vision",
    featured: true,
  },
  {
    title: "Industrial CV — Textile Monitoring",
    desc: "Production monitoring for textile lines. YOLOv12 + BoTSORT on 40k SAM2-annotated frames; distilled to nano → TensorRT INT8 → .kmodel for K230 edge at 22 FPS.",
    highlights: ["mAP@50 96.2%","22 FPS on K230","<5% mAP after KD"],
    tags: ["YOLOv12","BoTSORT","SAM2","TensorRT","K230","C++","RTOS"],
    github: "https://github.com/AchrafLamia/yolo-kd-k230-pipeline",
    category: "Edge AI",
    featured: true,
  },
  {
    title: "Nitra IoT — AWS Infrastructure",
    desc: "14-layer production AWS infra: EKS + Karpenter, ArgoCD GitOps, EMQX Cloud MQTT5/mTLS for 10,000+ IoT devices, ClickHouse OLAP + RDS dual data store.",
    highlights: ["~40% cost reduction","10,000+ devices","14 infra layers"],
    tags: ["AWS EKS","Terraform","Karpenter","ArgoCD","EMQX","ClickHouse"],
    github: null,
    category: "Cloud & MLOps",
    featured: true,
  },
  {
    title: "K230 BoTSORT Tracker",
    desc: "C++ BoTSORT with Kalman filter compiled as native ELF under RTOS. YOLO kmodel inference at 22 FPS on K230 embedded AI chip.",
    highlights: ["22 FPS","Native ELF / RTOS","C++ runtime"],
    tags: ["C++","BoTSORT","K230","RTOS","nncase"],
    github: "https://github.com/AchrafLamia/-k230-botsort-tracker",
    category: "Edge AI",
    featured: false,
  },
  {
    title: "Nitra ESP32 Mesh Firmware",
    desc: "FreeRTOS firmware: BLE provisioning, WiFi Mesh, MQTT5/mTLS over EMQX Cloud, OTA updates, X.509 per-device certificate authentication.",
    highlights: ["10+ nodes","mTLS / X.509","OTA live"],
    tags: ["C","ESP-IDF","FreeRTOS","MQTT5","mTLS","BLE"],
    github: "https://github.com/AchrafLamia/nitra-esp32-mesh",
    category: "IoT",
    featured: false,
  },
  {
    title: "L'BALE — AI Marketplace",
    desc: "Second-hand clothing marketplace with live-selling via AWS IVS. AI listing pipeline (YOLOv12 + CLIP) auto-generates product listings from photos.",
    highlights: [">80% listing time saved","AWS IVS live-selling","Flutter MVP"],
    tags: ["Flutter","Node.js","AWS IVS","YOLOv12","CLIP"],
    github: "https://github.com/AchrafLamia/lbale-app",
    category: "Full-Stack AI",
    featured: false,
  },
  {
    title: "Gesture & Action Recognition",
    desc: "Three-architecture study: ResNet18+LSTM + Kafka streaming, TCN with INT8 edge quantization, and Twins-SVT Vision Transformer at 91.9% accuracy.",
    highlights: ["91.9% (Twins-SVT)","INT8 TCN for edge","Kafka streaming"],
    tags: ["PyTorch","ResNet18","TCN","Twins-SVT","MediaPipe"],
    github: "https://github.com/AchrafLamia/gesture-action-recognition",
    category: "Research",
    featured: false,
  },
  {
    title: "Financial Portfolio Analysis",
    desc: "Quantitative portfolio optimization: efficient frontier via Monte Carlo, Sharpe ratio maximization, VaR at 95%/99%, minimum variance portfolio.",
    highlights: ["Efficient frontier","Sharpe & VaR","Monte Carlo"],
    tags: ["Python","NumPy","SciPy","Matplotlib"],
    github: "https://github.com/AchrafLamia/financial-portfolio-analysis",
    category: "Quantitative",
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <p className="label">Work</p>
        <h2 className="text-4xl sm:text-5xl font-black text-[#0a0a0a] mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-base mb-16">Production systems, research, and passion projects</p>

        {/* Featured — 3 col */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {featured.map((p) => <Card key={p.title} p={p} large />)}
        </div>

        {/* Rest — 4 col */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {rest.map((p) => <Card key={p.title} p={p} large={false} />)}
        </div>

        <div className="text-center">
          <a href="https://github.com/AchrafLamia" target="_blank" rel="noreferrer" className="btn-light">
            <GithubIcon size={17} /> View all on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

function Card({ p, large }: { p: typeof projects[0]; large: boolean }) {
  return (
    <div className={`group card bg-white flex flex-col hover:shadow-[0_4px_32px_rgba(0,0,0,0.07)] ${large ? "p-7" : "p-5"}`}>
      {/* Top: category + link */}
      <div className="flex items-start justify-between mb-5">
        <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
          {p.category}
        </span>
        {p.github ? (
          <a href={p.github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-black transition-colors" aria-label="GitHub">
            <GithubIcon size={15} />
          </a>
        ) : (
          <span className="text-xs text-gray-300">Private</span>
        )}
      </div>

      <h3 className={`font-black text-[#0a0a0a] mb-3 ${large ? "text-lg" : "text-sm"}`}>{p.title}</h3>
      <p className={`text-gray-400 leading-relaxed mb-5 flex-1 ${large ? "text-sm" : "text-xs"}`}>{p.desc}</p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {p.highlights.map((h) => (
          <span key={h} className="text-xs font-bold bg-[#0a0a0a] text-white px-2 py-0.5 rounded">
            {h}
          </span>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {(large ? p.tags : p.tags.slice(0, 4)).map((t) => (
          <span key={t} className="text-xs bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
            {t}
          </span>
        ))}
        {!large && p.tags.length > 4 && (
          <span className="text-xs text-gray-400">+{p.tags.length - 4}</span>
        )}
      </div>

      <div className="flex justify-end mt-auto">
        <ExternalLink size={13} className="text-gray-200 group-hover:text-gray-500 transition-colors" />
      </div>
    </div>
  );
}
