import { GithubIcon } from "./icons";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Soccer Analytics Platform",
    desc: "Real-time sports analytics: YOLOv8 detection, ViT-based ReID player tracking, Voronoi tactical zones, per-player speed estimation, heatmaps — Dockerized Flask API.",
    highlights: [">90% mAP@50","ViT-based ReID",">500 match hours"],
    tags: ["YOLOv8","StrongSort","SigLIP","Docker","Flask"],
    github: "https://github.com/AchrafLamia/soccer-analytics-Vertigo-Digital",
    cat: "Computer Vision",
    size: "bento-8",
    featured: true,
  },
  {
    title: "Industrial CV — Textile",
    desc: "YOLOv12 + BoTSORT on 40k SAM2-annotated frames. Distilled XLarge → nano → TensorRT INT8 → .kmodel running at 22 FPS on K230.",
    highlights: ["96.2% mAP@50","22 FPS K230","<5% mAP drop"],
    tags: ["YOLOv12","TensorRT","K230","C++"],
    github: "https://github.com/AchrafLamia/yolo-kd-k230-pipeline",
    cat: "Edge AI",
    size: "bento-4",
    featured: true,
  },
  {
    title: "Nitra IoT — AWS Infra",
    desc: "14-layer production AWS: EKS + Karpenter, ArgoCD GitOps, EMQX MQTT5/mTLS for 10,000+ devices, ClickHouse OLAP + RDS.",
    highlights: ["~40% cost cut","10k+ devices","14 layers"],
    tags: ["EKS","Terraform","EMQX","ArgoCD"],
    github: null,
    cat: "Cloud & MLOps",
    size: "bento-4",
    featured: true,
  },
  {
    title: "K230 BoTSORT Tracker",
    desc: "C++ BoTSORT with Kalman filter as native ELF under RTOS. 22 FPS on K230.",
    highlights: ["22 FPS","Native ELF"],
    tags: ["C++","BoTSORT","RTOS"],
    github: "https://github.com/AchrafLamia/-k230-botsort-tracker",
    cat: "Edge AI",
    size: "bento-3",
    featured: false,
  },
  {
    title: "ESP32 Mesh Firmware",
    desc: "FreeRTOS firmware: BLE provisioning, WiFi Mesh, MQTT5/mTLS, OTA, X.509.",
    highlights: ["10+ nodes","mTLS","OTA live"],
    tags: ["ESP-IDF","FreeRTOS","MQTT5"],
    github: "https://github.com/AchrafLamia/nitra-esp32-mesh",
    cat: "IoT",
    size: "bento-3",
    featured: false,
  },
  {
    title: "L'BALE — AI Marketplace",
    desc: "Live-selling marketplace (AWS IVS) with YOLOv12 + CLIP auto-listing pipeline. >80% listing time saved.",
    highlights: [">80% faster",  "AWS IVS"],
    tags: ["Flutter","Node.js","CLIP"],
    github: "https://github.com/AchrafLamia/lbale-app",
    cat: "Full-Stack AI",
    size: "bento-3",
    featured: false,
  },
  {
    title: "Gesture & Action Recognition",
    desc: "ResNet18+LSTM, INT8-quantized TCN, and Twins-SVT at 91.9% accuracy.",
    highlights: ["91.9% accuracy","INT8 edge TCN"],
    tags: ["PyTorch","TCN","Twins-SVT"],
    github: "https://github.com/AchrafLamia/gesture-action-recognition",
    cat: "Research",
    size: "bento-3",
    featured: false,
  },
];

const catDot: Record<string, string> = {
  "Computer Vision": "bg-blue-500",
  "Edge AI":         "bg-violet-500",
  "Cloud & MLOps":   "bg-orange-500",
  "IoT":             "bg-teal-500",
  "Full-Stack AI":   "bg-pink-500",
  "Research":        "bg-indigo-500",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 bg-[#070710]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-end justify-between mb-16 gap-6">
          <div>
            <p className="eyebrow">Work</p>
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight leading-none">
              Featured<br /><span className="g-text">Projects</span>
            </h2>
          </div>
          <a href="https://github.com/AchrafLamia" target="_blank" rel="noreferrer" className="btn-ghost hidden sm:inline-flex">
            <GithubIcon size={16} /> All repos
          </a>
        </div>

        {/* Bento featured */}
        <div className="bento mb-4">
          {featured.map((p) => (
            <div key={p.title} className={`card-accent group p-7 flex flex-col ${p.size}`}>
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${catDot[p.cat] ?? "bg-slate-500"}`} />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{p.cat}</span>
                </div>
                <div className="flex items-center gap-2">
                  {p.github
                    ? <a href={p.github} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-white transition-colors"><GithubIcon size={15} /></a>
                    : <span className="text-xs text-slate-700">Private</span>
                  }
                  <ArrowUpRight size={14} className="text-slate-700 group-hover:text-indigo-400 transition-colors" />
                </div>
              </div>

              <h3 className="font-black text-white text-xl mb-3">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {p.highlights.map((h) => (
                  <span key={h} className="text-xs font-bold bg-indigo-500/12 text-indigo-400 border border-indigo-500/20 px-2.5 py-0.5 rounded">
                    {h}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-white/04 border border-white/07 text-slate-500 px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Rest grid */}
        <div className="bento">
          {rest.map((p) => (
            <div key={p.title} className={`card group p-6 flex flex-col ${p.size}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${catDot[p.cat] ?? "bg-slate-500"}`} />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600">{p.cat}</span>
                </div>
                {p.github
                  ? <a href={p.github} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-white transition-colors"><GithubIcon size={14} /></a>
                  : <span className="text-xs text-slate-700">Private</span>
                }
              </div>

              <h3 className="font-black text-white text-sm mb-2">{p.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.highlights.map((h) => (
                  <span key={h} className="text-xs font-bold bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded">{h}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs text-slate-600 border border-white/06 px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
