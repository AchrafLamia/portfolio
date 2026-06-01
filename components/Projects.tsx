import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    title: "Soccer Analytics Platform",
    emoji: "⚽",
    description:
      "Real-time sports analytics pipeline: YOLOv8 multi-class detection, ViT-based ReID player tracking, Voronoi tactical zone analysis, per-player speed estimation, and heatmaps — served via a Dockerized Flask API.",
    highlights: [">90% mAP@50", ">70% tagging reduction", ">500 match hours processed"],
    tags: ["Python", "YOLOv8", "StrongSort", "ReID", "SigLIP", "Docker", "Flask"],
    github: "https://github.com/AchrafLamia/soccer-analytics-Vertigo-Digital",
    category: "Computer Vision",
    featured: true,
  },
  {
    title: "Industrial CV System — Textile Monitoring",
    emoji: "🏭",
    description:
      "Real-time production monitoring system for textile lines. YOLOv12 + BoTSORT pipeline trained on 40k SAM2-annotated frames; knowledge-distilled to nano → ONNX → TensorRT INT8 → .kmodel for K230 edge deployment.",
    highlights: ["mAP@50 96.2%", "22 FPS on K230", "<5% mAP after KD"],
    tags: ["YOLOv12", "BoTSORT", "SAM2", "TensorRT", "K230", "C++", "RTOS"],
    github: "https://github.com/AchrafLamia/yolo-kd-k230-pipeline",
    category: "Edge AI",
    featured: true,
  },
  {
    title: "Nitra IoT Platform — AWS Infrastructure",
    emoji: "☁️",
    description:
      "14-layer production AWS infrastructure for an industrial IoT SaaS. Terraform-provisioned EKS with Karpenter, ArgoCD GitOps, EMQX Cloud MQTT5/mTLS for 10,000+ devices, ClickHouse OLAP + RDS PostgreSQL dual data store.",
    highlights: ["~40% infra cost cut", "10,000+ IoT devices", "14 infra layers"],
    tags: ["AWS EKS", "Terraform", "Karpenter", "ArgoCD", "EMQX", "ClickHouse", "mTLS"],
    github: null,
    category: "Cloud & MLOps",
    featured: true,
  },
  {
    title: "K230 BoTSORT Tracker",
    emoji: "⚡",
    description:
      "C++ multi-object tracker ported to K230 embedded AI hardware. BoTSORT algorithm with Kalman filter compiled as native ELF binary under RTOS, running YOLO kmodel inference at 22 FPS.",
    highlights: ["22 FPS on-device", "Native ELF under RTOS", "C++ runtime"],
    tags: ["C++", "BoTSORT", "K230", "RTOS", "nncase", "kmodel"],
    github: "https://github.com/AchrafLamia/-k230-botsort-tracker",
    category: "Edge AI",
    featured: false,
  },
  {
    title: "Nitra ESP32 Mesh Firmware",
    emoji: "📡",
    description:
      "ESP32 FreeRTOS firmware for industrial IoT mesh networks. BLE provisioning, ESP-WiFi-Mesh, MQTT5/mTLS over EMQX Cloud, OTA updates across all mesh nodes, X.509 per-device certificate authentication.",
    highlights: ["10+ mesh nodes deployed", "mTLS / X.509", "OTA without downtime"],
    tags: ["C", "ESP-IDF", "FreeRTOS", "MQTT5", "mTLS", "BLE", "OTA"],
    github: "https://github.com/AchrafLamia/nitra-esp32-mesh",
    category: "Embedded & IoT",
    featured: false,
  },
  {
    title: "L'BALE — AI-Powered Marketplace",
    emoji: "🛍️",
    description:
      "Second-hand clothing marketplace with real-time live-selling via AWS IVS. AI listing pipeline (YOLOv12 + CLIP) auto-generates product titles and tags from photos, cutting manual listing time by >80%. Flutter mobile app at MVP stage.",
    highlights: [">80% listing time reduction", "AWS IVS live-selling", "MVP deployed"],
    tags: ["Flutter", "Node.js", "PostgreSQL", "AWS IVS", "YOLOv12", "CLIP", "WebSocket"],
    github: "https://github.com/AchrafLamia/lbale-app",
    category: "Full-Stack AI",
    featured: false,
  },
  {
    title: "Gesture & Action Recognition",
    emoji: "🤖",
    description:
      "Three-architecture study of gesture and action recognition: ResNet18+LSTM with MediaPipe skeleton extraction and Kafka streaming, TCN with INT8 edge quantization, and Twins-SVT Vision Transformer achieving 91.9% accuracy.",
    highlights: ["91.9% accuracy (Twins-SVT)", "INT8 edge-quantized TCN", "Kafka streaming"],
    tags: ["PyTorch", "ResNet18", "LSTM", "TCN", "Twins-SVT", "MediaPipe", "Kafka"],
    github: "https://github.com/AchrafLamia/gesture-action-recognition",
    category: "Research",
    featured: false,
  },
  {
    title: "Financial Portfolio Analysis",
    emoji: "📈",
    description:
      "Quantitative portfolio optimization: efficient frontier via Monte Carlo simulation, maximum Sharpe ratio identification, VaR at 95%/99% confidence, minimum variance portfolio via scipy.optimize.",
    highlights: ["Efficient frontier", "Sharpe & VaR analysis", "Monte Carlo simulation"],
    tags: ["Python", "NumPy", "SciPy", "Matplotlib", "Alpha Vantage"],
    github: "https://github.com/AchrafLamia/financial-portfolio-analysis",
    category: "Quantitative",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Computer Vision": "bg-blue-50 text-blue-600 border-blue-100",
  "Edge AI":         "bg-violet-50 text-violet-600 border-violet-100",
  "Cloud & MLOps":   "bg-orange-50 text-orange-600 border-orange-100",
  "Embedded & IoT":  "bg-teal-50 text-teal-600 border-teal-100",
  "Full-Stack AI":   "bg-pink-50 text-pink-600 border-pink-100",
  "Research":        "bg-indigo-50 text-indigo-600 border-indigo-100",
  "Quantitative":    "bg-green-50 text-green-600 border-green-100",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Projects
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Work
          </h2>
          <p className="text-slate-500 mt-3">
            Production systems, research, and passion projects
          </p>
        </div>

        {/* Featured — large cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} large />
          ))}
        </div>

        {/* Rest — smaller grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((p) => (
            <ProjectCard key={p.title} project={p} large={false} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/AchrafLamia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            <GithubIcon size={18} />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large,
}: {
  project: (typeof projects)[0];
  large: boolean;
}) {
  return (
    <div
      className={`group bg-white border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all flex flex-col ${
        large ? "p-7" : "p-5"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className={large ? "text-3xl" : "text-2xl"}>{project.emoji}</span>
        <span
          className={`text-xs font-semibold border px-2.5 py-1 rounded-full ${
            categoryColors[project.category] ?? "bg-slate-100 text-slate-600 border-slate-200"
          }`}
        >
          {project.category}
        </span>
      </div>

      <h3 className={`font-bold text-slate-900 mb-2 ${large ? "text-lg" : "text-base"}`}>
        {project.title}
      </h3>

      <p className={`text-slate-500 leading-relaxed mb-4 flex-1 ${large ? "text-sm" : "text-xs"}`}>
        {project.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.highlights.map((h) => (
          <span
            key={h}
            className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded"
          >
            {h}
          </span>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.slice(0, large ? undefined : 4).map((t) => (
          <span
            key={t}
            className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
        {!large && project.tags.length > 4 && (
          <span className="bg-slate-100 text-slate-400 text-xs px-2 py-0.5 rounded">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-auto">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors"
          >
            <GithubIcon size={15} />
            Code
          </a>
        ) : (
          <span className="flex items-center gap-1.5 text-slate-300 text-sm">
            <GithubIcon size={15} />
            Private
          </span>
        )}
        <ExternalLink
          size={14}
          className="ml-auto text-slate-200 group-hover:text-blue-300 transition-colors"
        />
      </div>
    </div>
  );
}
