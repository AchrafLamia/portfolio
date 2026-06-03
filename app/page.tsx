"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];
    const observers: IntersectionObserver[] = [];
    let cancelled = false;

    /* 1. Boot sequence */
    (function boot() {
      const el = document.getElementById("boot");
      if (!el) return;
      const lines = [
        "$ init achraf.lamia --role=ml-cv-engineer",
        "loading models ......... <ok>ok</ok>",
        "tensorrt int8 engine ... <ok>ready</ok>",
        "k230 edge runtime ...... <ok>22 fps</ok>",
      ];
      const cur = '<span class="cur"></span>';
      if (reduce) {
        el.innerHTML = lines[lines.length - 1]
          .replace(/<ok>/g, '<span class="ok">')
          .replace(/<\/ok>/g, "</span>");
        return;
      }
      let li = 0;
      let ci = 0;
      const typeChar = () => {
        if (cancelled || li >= lines.length) return;
        const raw = lines[li];
        ci++;
        let html = raw
          .slice(0, ci)
          .replace(/<ok>/g, '<span class="ok">')
          .replace(/<\/ok>/g, "</span>");
        const opens = (html.match(/<span class="ok">/g) || []).length;
        const closes = (html.match(/<\/span>/g) || []).length;
        if (opens > closes) html += "</span>";
        el.innerHTML = html + cur;
        if (ci >= raw.length) {
          li++;
          ci = 0;
          timers.push(window.setTimeout(typeChar, li >= lines.length ? 0 : 340));
        } else {
          timers.push(window.setTimeout(typeChar, 16 + Math.random() * 26));
        }
      };
      timers.push(window.setTimeout(typeChar, 350));
    })();

    /* 2. Hero intro */
    document.querySelectorAll<HTMLElement>(".hero h1 [data-r]").forEach((s, i) => {
      s.style.transform = "translateY(105%)";
      s.style.transition = "transform 0.9s cubic-bezier(0.22,1,0.36,1)";
      s.style.transitionDelay = 0.15 + i * 0.1 + "s";
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          s.style.transform = "none";
        })
      );
    });
    timers.push(
      window.setTimeout(() => {
        document.querySelectorAll<HTMLElement>(".hero .reveal").forEach((r) => r.classList.add("in"));
      }, 200)
    );

    /* 3. Scroll reveals */
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observers.push(revObs);
    document.querySelectorAll<HTMLElement>(".reveal").forEach((r) => {
      if (!r.closest(".hero")) revObs.observe(r);
    });

    /* 4. Metric counters */
    const animateCount = (el: HTMLElement) => {
      const to = parseFloat(el.getAttribute("data-to") || "0");
      const dec = parseInt(el.getAttribute("data-dec") || "0", 10);
      if (reduce) {
        el.textContent = to.toFixed(dec);
        return;
      }
      const dur = 1500;
      let start: number | null = null;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (to * eased).toFixed(dec);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = to.toFixed(dec);
      };
      requestAnimationFrame(step);
    };
    const numObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCount(e.target as HTMLElement);
            numObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    observers.push(numObs);
    document.querySelectorAll<HTMLElement>(".num").forEach((n) => numObs.observe(n));

    /* 5. Language bars */
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".bar i").forEach((i) => {
              i.style.width = (i.getAttribute("data-w") || "0") + "%";
            });
            barObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observers.push(barObs);
    const langsWrap = document.querySelector(".langs");
    if (langsWrap) barObs.observe(langsWrap);

    /* 6. Detection viz */
    (function viz() {
      const boxes = document.querySelectorAll<HTMLElement>("#viz .bbox");
      if (!boxes.length) return;
      if (reduce) {
        boxes.forEach((b) => b.classList.add("show"));
        return;
      }
      const cycle = () => {
        boxes.forEach((b) => b.classList.remove("show"));
        boxes.forEach((b, i) => {
          timers.push(window.setTimeout(() => b.classList.add("show"), 350 + i * 320));
        });
      };
      let seen = false;
      const vObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !seen) {
              seen = true;
              cycle();
            }
          });
        },
        { threshold: 0.3 }
      );
      observers.push(vObs);
      const vizEl = document.getElementById("viz");
      if (vizEl) vObs.observe(vizEl);
      const iv = window.setInterval(() => {
        if (seen && !cancelled) cycle();
      }, 4400);
      timers.push(iv);
    })();

    /* 7. Nav stuck + active section */
    const nav = document.getElementById("nav");
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("#navlinks a"));
    const sections = links
      .map((a) => document.querySelector(a.getAttribute("href") || ""))
      .filter((s): s is Element => !!s);

    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 40) nav.classList.add("stuck");
      else nav.classList.remove("stuck");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const secObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = "#" + e.target.id;
            links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    observers.push(secObs);
    sections.forEach((s) => secObs.observe(s));

    /* 8. Command hint */
    timers.push(
      window.setTimeout(() => {
        const h = document.getElementById("cmdhint");
        if (h) h.classList.add("in");
        timers.push(window.setTimeout(() => h && h.classList.remove("in"), 6000));
      }, 2600)
    );

    /* 9. Command palette */
    const pal = document.getElementById("palette");
    const input = document.getElementById("palinput") as HTMLInputElement | null;
    const list = document.getElementById("pallist");
    const items = [
      { t: "Impact — key metrics", h: "#metrics" },
      { t: "About — profile", h: "#about" },
      { t: "Stack — skills", h: "#skills" },
      { t: "Experience — timeline", h: "#experience" },
      { t: "Projects — repositories", h: "#projects" },
      { t: "Education — degree & languages", h: "#education" },
      { t: "Email — lamia.achraf60@gmail.com", h: "mailto:lamia.achraf60@gmail.com" },
      { t: "GitHub — AchrafLamia", h: "https://github.com/AchrafLamia" },
      { t: "LinkedIn — achraflamia", h: "https://linkedin.com/in/achraflamia" },
    ];
    let sel = 0;
    let filtered = items.slice();

    const go = (it: { t: string; h: string }) => {
      close();
      if (it.h.charAt(0) === "#") {
        const target = document.querySelector(it.h);
        if (target) target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      } else {
        window.open(it.h, it.h.indexOf("mailto") === 0 ? "_self" : "_blank");
      }
    };
    const paint = () => {
      if (!list) return;
      Array.from(list.children).forEach((c, i) => (c as HTMLElement).classList.toggle("sel", i === sel));
    };
    const render = () => {
      if (!list) return;
      list.innerHTML = "";
      filtered.forEach((it, i) => {
        const d = document.createElement("div");
        d.className = "palette-item" + (i === sel ? " sel" : "");
        d.innerHTML =
          '<span class="pi-n">' +
          String(i + 1).padStart(2, "0") +
          '</span><span>' +
          it.t +
          '</span><span class="pi-go">↵</span>';
        d.addEventListener("click", () => go(it));
        d.addEventListener("mouseenter", () => {
          sel = i;
          paint();
        });
        list.appendChild(d);
      });
    };
    const open = () => {
      if (!pal || !input) return;
      pal.classList.add("open");
      input.value = "";
      filtered = items.slice();
      sel = 0;
      render();
      window.setTimeout(() => input.focus(), 30);
    };
    function close() {
      if (pal) pal.classList.remove("open");
    }
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (pal && pal.classList.contains("open")) close();
        else open();
        return;
      }
      if (!pal || !pal.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowDown") {
        e.preventDefault();
        sel = (sel + 1) % filtered.length;
        paint();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        sel = (sel - 1 + filtered.length) % filtered.length;
        paint();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[sel]) go(filtered[sel]);
      }
    };
    document.addEventListener("keydown", onKey);
    const onInput = () => {
      if (!input) return;
      const q = input.value.toLowerCase();
      filtered = items.filter((it) => it.t.toLowerCase().indexOf(q) !== -1);
      sel = 0;
      render();
    };
    if (input) input.addEventListener("input", onInput);
    const onPalClick = (e: MouseEvent) => {
      if (e.target === pal) close();
    };
    if (pal) pal.addEventListener("click", onPalClick);

    /* cleanup */
    return () => {
      cancelled = true;
      timers.forEach((t) => {
        clearTimeout(t);
        clearInterval(t);
      });
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
      if (input) input.removeEventListener("input", onInput);
      if (pal) pal.removeEventListener("click", onPalClick);
    };
  }, []);

  return (
    <>
      {/* Ambient FX */}
      <div className="fx-grid"></div>
      <div className="fx-vig"></div>
      <div className="fx-scan"></div>

      {/* NAV */}
      <nav className="nav" id="nav">
        <a href="#top" className="nav-brand">
          <span className="dot"></span>
          <b>Achraf&nbsp;Lamia</b>
          <span className="role">/ ML&nbsp;·&nbsp;CV&nbsp;Engineer</span>
        </a>
        <div className="nav-links" id="navlinks">
          <a href="#metrics"><span className="n">01</span>Impact</a>
          <a href="#about"><span className="n">02</span>About</a>
          <a href="#skills"><span className="n">03</span>Stack</a>
          <a href="#experience"><span className="n">04</span>Experience</a>
          <a href="#projects"><span className="n">05</span>Projects</a>
          <a href="#education"><span className="n">06</span>Education</a>
        </div>
        <a href="mailto:lamia.achraf60@gmail.com" className="nav-cta">Get in touch ↗</a>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="hero-left">
          <div className="boot" id="boot"><span className="cur"></span></div>

          <h1>
            <span className="ln"><span data-r>Achraf</span></span>
            <span className="ln"><span data-r data-d="1">Lamia<em>.</em></span></span>
          </h1>

          <div className="hero-role reveal" data-d="1">
            <span>ML &amp; Computer Vision Engineer</span>
            <span className="tag">2+ yrs in production</span>
          </div>

          <div className="hero-meta reveal" data-d="2">
            <span><span className="mk">loc</span> <b>Casablanca, MA</b></span>
            <span><span className="mk">status</span> <b>Open · relocation &amp; remote</b></span>
            <span><span className="mk">langs</span> <b>AR · FR&nbsp;C2 · EN&nbsp;C2</b></span>
          </div>

          <div className="hero-cta reveal" data-d="3">
            <a href="#projects" className="btn btn-primary">View work <span className="ar">↗</span></a>
            <a href="mailto:lamia.achraf60@gmail.com" className="btn btn-ghost">lamia.achraf60@gmail.com</a>
          </div>
        </div>

        <div className="hero-right reveal" data-d="2">
          <div className="viz" id="viz">
            <span className="bracket tl"></span><span className="bracket tr"></span>
            <span className="bracket bl"></span><span className="bracket br"></span>

            <div className="viz-head">
              <span>cam_00 · k230 · 22fps</span>
              <span className="rec"><i></i>LIVE INFERENCE</span>
            </div>

            <div className="viz-ph">
              <div className="ph-label">[ detection&nbsp;feed ]<br />textile&nbsp;line&nbsp;·&nbsp;yolov12&nbsp;+&nbsp;botsort</div>
            </div>

            <div className="viz-scanline"></div>

            <div className="bbox" data-i="0" style={{ left: "14%", top: "30%", width: "30%", height: "42%" }}><span className="lbl">garment 0.96</span></div>
            <div className="bbox amber" data-i="1" style={{ left: "52%", top: "22%", width: "26%", height: "34%" }}><span className="lbl">operator 0.94</span></div>
            <div className="bbox" data-i="2" style={{ left: "58%", top: "60%", width: "22%", height: "24%" }}><span className="lbl">station 0.91</span></div>

            <div className="viz-foot">
              <span>mAP@50 96.2%</span>
              <span>INT8 · TensorRT · .kmodel</span>
            </div>
          </div>
        </div>
      </header>

      {/* METRICS */}
      <section className="metrics wrap" id="metrics">
        <div className="section-head reveal">
          <div>
            <span className="kicker">01 / Impact</span>
            <h2>Measured in production.</h2>
          </div>
          <span className="idx">// shipped, not slideware</span>
        </div>

        <div className="metrics-grid reveal" data-d="1">
          <div className="metric">
            <div className="mtop">accuracy</div>
            <div className="mval"><span className="num" data-to="96.2" data-dec="1">0</span><span className="u">%</span></div>
            <div className="mlabel">mAP@50 on textile dataset — 40k SAM2-annotated frames</div>
          </div>
          <div className="metric amber">
            <div className="mtop">cost</div>
            <div className="mval"><span className="pre">~</span><span className="num" data-to="40">0</span><span className="u">%</span></div>
            <div className="mlabel">infrastructure cost reduction — EMQX over AWS IoT Core + MSK</div>
          </div>
          <div className="metric">
            <div className="mtop">edge</div>
            <div className="mval"><span className="num" data-to="22">0</span><span className="u">fps</span></div>
            <div className="mlabel">native C++ BoTSORT runtime on K230 embedded hardware</div>
          </div>
          <div className="metric amber">
            <div className="mtop">infra</div>
            <div className="mval"><span className="num" data-to="14">0</span><span className="u">layers</span></div>
            <div className="mlabel">AWS EKS infrastructure on Terraform — fully automated</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="wrap" id="about">
        <div className="section-head reveal">
          <div>
            <span className="kicker amber">02 / Profile</span>
            <h2>Full-stack ML, end&nbsp;to&nbsp;end.</h2>
          </div>
          <span className="idx">// from annotation to the metal</span>
        </div>

        <div className="about-grid">
          <p className="about-lead reveal">
            I build computer-vision systems that survive contact with the real world — from{" "}
            <b>annotating 40k frames with SAM2</b> and training knowledge-distilled models, to{" "}
            <b>C++ BoTSORT runtimes at 22 FPS</b> on embedded K230 hardware, to{" "}
            <span className="am">14-layer AWS infrastructure</span> on Terraform &amp; EKS. The whole pipeline, owned.
          </p>
          <div className="about-side reveal" data-d="1">
            <div className="row"><span className="k">focus</span><span className="v">Edge AI · MLOps · real-time CV</span></div>
            <div className="row"><span className="k">experience</span><span className="v"><b>2+ years</b> in production</span></div>
            <div className="row"><span className="k">degree</span><span className="v">M.Sc. Data Science &amp; AI</span></div>
            <div className="row"><span className="k">school</span><span className="v">ENSET Mohammedia · Hassan&nbsp;II</span></div>
            <div className="row"><span className="k">based in</span><span className="v">Casablanca — open to remote</span></div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="wrap" id="skills">
        <div className="section-head reveal">
          <div>
            <span className="kicker">03 / Stack</span>
            <h2>The toolchain.</h2>
          </div>
          <span className="idx">// 5 domains</span>
        </div>

        <div className="skills-grid">
          <div className="skillcat reveal">
            <h3>ML &amp; Computer Vision <span className="ci">[A]</span></h3>
            <div className="tags">
              <span className="tag">PyTorch</span><span className="tag">YOLOv12</span><span className="tag">TensorRT</span>
              <span className="tag">ONNX</span><span className="tag">INT8 Quantization</span><span className="tag">Knowledge Distillation</span>
              <span className="tag">OpenCV</span><span className="tag">SigLIP</span><span className="tag">SAM2</span>
              <span className="tag">StrongSort</span><span className="tag">Edge AI</span><span className="tag">Roboflow</span><span className="tag">W&amp;B</span>
            </div>
          </div>
          <div className="skillcat reveal" data-d="1">
            <h3>MLOps &amp; DevOps <span className="ci">[B]</span></h3>
            <div className="tags">
              <span className="tag">Docker</span><span className="tag">Terraform</span><span className="tag">GitHub Actions</span>
              <span className="tag">Jenkins</span><span className="tag">Helm</span><span className="tag">GitOps</span>
              <span className="tag">Karpenter</span><span className="tag">ArgoCD</span><span className="tag">Prometheus</span><span className="tag">Grafana</span>
            </div>
          </div>
          <div className="skillcat reveal">
            <h3>Cloud · AWS <span className="ci">[C]</span></h3>
            <div className="tags">
              <span className="tag">EKS</span><span className="tag">Kubernetes</span><span className="tag">RDS</span><span className="tag">VPC</span>
              <span className="tag">IAM</span><span className="tag">CloudWatch</span><span className="tag">S3</span><span className="tag">EC2</span>
              <span className="tag">Lambda</span><span className="tag">ECR</span><span className="tag">KMS</span><span className="tag">Route53</span>
              <span className="tag">ALB</span><span className="tag">SageMaker</span>
            </div>
          </div>
          <div className="skillcat reveal" data-d="1">
            <h3>Architecture &amp; IoT <span className="ci">[D]</span></h3>
            <div className="tags">
              <span className="tag">MQTT 5</span><span className="tag">mTLS</span><span className="tag">X.509</span>
              <span className="tag">IoT Fleet</span><span className="tag">ESP-IDF</span><span className="tag">FreeRTOS</span>
            </div>
          </div>
          <div className="skillcat reveal">
            <h3>Languages &amp; Data <span className="ci">[E]</span></h3>
            <div className="tags">
              <span className="tag">Python</span><span className="tag">C++</span><span className="tag">Git</span><span className="tag">Linux</span>
              <span className="tag">PostgreSQL</span><span className="tag">ClickHouse</span><span className="tag">EMQX</span><span className="tag">FastAPI</span>
            </div>
          </div>
          <div className="skillcat reveal" data-d="1">
            <h3>Spoken <span className="ci">[F]</span></h3>
            <div className="tags">
              <span className="tag">Arabic — native</span><span className="tag">Français — C2</span><span className="tag">English — C2</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="wrap" id="experience">
        <div className="section-head reveal">
          <div>
            <span className="kicker amber">04 / Experience</span>
            <h2>Where I&nbsp;shipped.</h2>
          </div>
          <span className="idx">// 2024 → present</span>
        </div>

        <div className="timeline">
          <article className="exp reveal">
            <div className="exp-when">
              <div className="co">Marwa Group</div>
              <div className="ro">Cloud Infrastructure &amp; IoT Engineer</div>
              <div className="dt">Apr 2026 — Present</div>
            </div>
            <div className="exp-body">
              <ul>
                <li><b>14-layer AWS infra on Terraform</b> — VPC, EKS, Karpenter, RDS, ECR, Secrets Manager, Route53, ClickHouse, EMQX, Bastion — automated via <span className="hl">GitHub Actions</span> with drift detection.</li>
                <li>Replaced AWS IoT Core + MSK with EMQX Cloud Dedicated Flex — MQTT 5 broker for <span className="hla">10,000+ K230 devices</span>, <span className="hla">~40% cost cut</span>, X.509 mTLS per device.</li>
                <li>EKS + Karpenter (3 NodePools) + ArgoCD App-of-Apps with <span className="hl">PullRequest ApplicationSet</span> for ephemeral environments.</li>
                <li>Dual data store — RDS PostgreSQL 16 + ClickHouse Cloud OLAP; kube-prometheus-stack with <span className="hl">15 alerting rules</span>.</li>
              </ul>
              <div className="exp-stack">
                <span className="s">AWS EKS</span><span className="s">Terraform</span><span className="s">Karpenter</span>
                <span className="s">ArgoCD</span><span className="s">EMQX</span><span className="s">ClickHouse</span><span className="s">MQTT5 / mTLS</span>
              </div>
            </div>
          </article>

          <article className="exp reveal">
            <div className="exp-when">
              <div className="co">Marwa Group</div>
              <div className="ro">Industrial Computer Vision Engineer · R&amp;D</div>
              <div className="dt">Oct 2025 — Mar 2026</div>
            </div>
            <div className="exp-body">
              <ul>
                <li>Real-time CV system for <b>textile-line monitoring</b> — piece tracking per operator / station, live KPIs in Grafana.</li>
                <li>YOLOv12 + BoTSORT pipeline — <span className="hl">mAP@50 96.2%</span>, Precision 94.4%, F1 94.0% over 40k SAM2-annotated frames.</li>
                <li>Full MLOps pipeline — XLarge → KD nano → ONNX → TensorRT INT8 → .kmodel → K230; <span className="hla">40%+ latency cut</span>, <span className="hla">22 FPS</span>, &lt;5% mAP drop; C++ runtime compiled to native ELF under RTOS.</li>
              </ul>
              <div className="exp-stack">
                <span className="s">YOLOv12</span><span className="s">BoTSORT</span><span className="s">SAM2</span>
                <span className="s">TensorRT</span><span className="s">K230</span><span className="s">C++</span><span className="s">RTOS</span>
              </div>
            </div>
          </article>

          <article className="exp reveal">
            <div className="exp-when">
              <div className="co">Vertigo Digital</div>
              <div className="ro">Computer Vision &amp; MLOps Engineer</div>
              <div className="dt">Jan 2025 — Sep 2025</div>
            </div>
            <div className="exp-body">
              <ul>
                <li>Fine-tuned <b>YOLOv8 detection + pose estimation</b> on European &amp; African football footage — <span className="hl">&gt;90% mAP@50</span>.</li>
                <li>StrongSort + ReID pipeline with automated clustering (SigLIP + UMAP + KMeans) — <span className="hla">&gt;70% less tagging effort</span>.</li>
                <li>Automated ML pipeline (Roboflow → train → validate → deploy) — model iteration cut from days to <span className="hl">&lt;4h</span>.</li>
                <li>Batch inference over <b>500+ hours</b> of matches via AWS SageMaker.</li>
              </ul>
              <div className="exp-stack">
                <span className="s">YOLOv8</span><span className="s">StrongSort</span><span className="s">ReID</span>
                <span className="s">SigLIP</span><span className="s">AWS SageMaker</span><span className="s">Roboflow</span>
              </div>
            </div>
          </article>

          <article className="exp reveal">
            <div className="exp-when">
              <div className="co">Société Générale Maroc</div>
              <div className="ro">Data Scientist · Intern</div>
              <div className="dt">Mar 2024 — Sep 2024</div>
            </div>
            <div className="exp-body">
              <ul>
                <li><b>LLaMA 3 HR recommendation system</b> for optimal staff reassignment — manual analysis cut from weeks to hours.</li>
                <li>Flask API bridging the HR database to the LLM; fine-tuning + deployment on Hugging Face Inference Endpoints; Power BI dashboards.</li>
              </ul>
              <div className="exp-stack">
                <span className="s">LLaMA 3</span><span className="s">Fine-tuning</span><span className="s">Flask</span>
                <span className="s">Hugging Face</span><span className="s">Power BI</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="wrap" id="projects">
        <div className="section-head reveal">
          <div>
            <span className="kicker">05 / Projects</span>
            <h2>Selected work.</h2>
          </div>
          <span className="idx">// 8 repositories</span>
        </div>

        <div className="proj-grid">
          <a href="https://github.com/AchrafLamia/yolo-kd-k230-pipeline" target="_blank" rel="noopener noreferrer" className="card feat reveal">
            <div className="card-top"><span className="card-no">PRJ_01</span><span className="card-gh">github <span className="ar">↗</span></span></div>
            <h3>Industrial CV — Textile Monitoring</h3>
            <p className="desc">YOLOv12 + BoTSORT over 40k SAM2 frames; knowledge-distilled nano → TensorRT INT8 → .kmodel on K230 edge at 22 FPS.</p>
            <div className="card-metrics">
              <div className="cm"><span className="v">96.2%</span><span className="l">mAP@50</span></div>
              <div className="cm"><span className="v">22 FPS</span><span className="l">on K230</span></div>
              <div className="cm"><span className="v">&lt;5%</span><span className="l">mAP drop · KD</span></div>
            </div>
            <div className="card-stack">
              <span className="s">YOLOv12</span><span className="s">BoTSORT</span><span className="s">SAM2</span><span className="s">TensorRT</span><span className="s">K230</span><span className="s">C++</span><span className="s">RTOS</span>
            </div>
          </a>

          <a href="https://github.com/AchrafLamia/soccer-analytics-Vertigo-Digital" target="_blank" rel="noopener noreferrer" className="card feat am reveal" data-d="1">
            <div className="card-top"><span className="card-no">PRJ_02</span><span className="card-gh">github <span className="ar">↗</span></span></div>
            <h3>Soccer Analytics Platform</h3>
            <p className="desc">YOLOv8 detection, ReID ViT, Voronoi tactical zones, per-player speed &amp; heatmaps — Dockerized Flask API.</p>
            <div className="card-metrics">
              <div className="cm"><span className="v">&gt;90%</span><span className="l">mAP@50</span></div>
              <div className="cm"><span className="v">&gt;70%</span><span className="l">less tagging</span></div>
              <div className="cm"><span className="v">500h+</span><span className="l">matches</span></div>
            </div>
            <div className="card-stack">
              <span className="s">Python</span><span className="s">YOLOv8</span><span className="s">StrongSort</span><span className="s">ReID</span><span className="s">SigLIP</span><span className="s">Docker</span><span className="s">Flask</span>
            </div>
          </a>

          <a href="#" className="card wide reveal" data-no="PRJ_03" data-private="1">
            <div className="card-top"><span className="card-no">PRJ_03</span><span className="card-gh">private</span></div>
            <h3>Nitra IoT — AWS Infrastructure</h3>
            <p className="desc">14-layer AWS infra: EKS + Karpenter, ArgoCD GitOps, EMQX Cloud MQTT5/mTLS for 10k+ devices, ClickHouse + RDS.</p>
            <div className="card-metrics">
              <div className="cm"><span className="v">~40%</span><span className="l">cost cut</span></div>
              <div className="cm"><span className="v">10k+</span><span className="l">devices</span></div>
              <div className="cm"><span className="v">14</span><span className="l">infra layers</span></div>
            </div>
            <div className="card-stack">
              <span className="s">AWS EKS</span><span className="s">Terraform</span><span className="s">Karpenter</span><span className="s">ArgoCD</span><span className="s">EMQX</span><span className="s">ClickHouse</span>
            </div>
          </a>

          <a href="https://github.com/AchrafLamia/-k230-botsort-tracker" target="_blank" rel="noopener noreferrer" className="card norm am reveal" data-d="1">
            <div className="card-top"><span className="card-no">PRJ_04</span><span className="card-gh">github <span className="ar">↗</span></span></div>
            <h3>K230 BoTSORT Tracker</h3>
            <p className="desc">C++ BoTSORT with Kalman filter, compiled to native ELF under RTOS; YOLO kmodel inference at 22 FPS on K230.</p>
            <div className="card-metrics">
              <div className="cm"><span className="v">22 FPS</span><span className="l">on K230</span></div>
              <div className="cm"><span className="v">ELF</span><span className="l">native · RTOS</span></div>
            </div>
            <div className="card-stack">
              <span className="s">C++</span><span className="s">BoTSORT</span><span className="s">K230</span><span className="s">RTOS</span>
            </div>
          </a>

          <a href="https://github.com/AchrafLamia/nitra-esp32-mesh" target="_blank" rel="noopener noreferrer" className="card norm reveal" data-d="2">
            <div className="card-top"><span className="card-no">PRJ_05</span><span className="card-gh">github <span className="ar">↗</span></span></div>
            <h3>Nitra ESP32 Mesh Firmware</h3>
            <p className="desc">FreeRTOS firmware: BLE provisioning, WiFi Mesh, MQTT5/mTLS on EMQX, OTA updates, per-device X.509 auth.</p>
            <div className="card-metrics">
              <div className="cm"><span className="v">10+</span><span className="l">nodes</span></div>
              <div className="cm"><span className="v">mTLS</span><span className="l">X.509</span></div>
            </div>
            <div className="card-stack">
              <span className="s">C</span><span className="s">ESP-IDF</span><span className="s">FreeRTOS</span><span className="s">MQTT5</span>
            </div>
          </a>

          <a href="https://github.com/AchrafLamia/lbale-app" target="_blank" rel="noopener noreferrer" className="card norm am reveal">
            <div className="card-top"><span className="card-no">PRJ_06</span><span className="card-gh">github <span className="ar">↗</span></span></div>
            <h3>L'BALE — AI Marketplace</h3>
            <p className="desc">Second-hand clothing marketplace with live-selling on AWS IVS. YOLOv12 + CLIP pipeline auto-generates product titles from photos.</p>
            <div className="card-metrics">
              <div className="cm"><span className="v">&gt;80%</span><span className="l">faster listing</span></div>
            </div>
            <div className="card-stack">
              <span className="s">Flutter</span><span className="s">Node.js</span><span className="s">AWS IVS</span><span className="s">YOLOv12</span>
            </div>
          </a>

          <a href="https://github.com/AchrafLamia/gesture-action-recognition" target="_blank" rel="noopener noreferrer" className="card norm reveal" data-d="1">
            <div className="card-top"><span className="card-no">PRJ_07</span><span className="card-gh">github <span className="ar">↗</span></span></div>
            <h3>Gesture &amp; Action Recognition</h3>
            <p className="desc">Three architectures: ResNet18+LSTM (Kafka streaming), TCN INT8 edge, and Twins-SVT ViT reaching 91.9% accuracy.</p>
            <div className="card-metrics">
              <div className="cm"><span className="v">91.9%</span><span className="l">accuracy · ViT</span></div>
            </div>
            <div className="card-stack">
              <span className="s">PyTorch</span><span className="s">ResNet18</span><span className="s">TCN</span><span className="s">Twins-SVT</span>
            </div>
          </a>

          <a href="https://github.com/AchrafLamia/financial-portfolio-analysis" target="_blank" rel="noopener noreferrer" className="card norm am reveal" data-d="2">
            <div className="card-top"><span className="card-no">PRJ_08</span><span className="card-gh">github <span className="ar">↗</span></span></div>
            <h3>Financial Portfolio Analysis</h3>
            <p className="desc">Quantitative optimization: Monte Carlo efficient frontier, Sharpe maximization, 95%/99% VaR, minimum variance.</p>
            <div className="card-metrics">
              <div className="cm"><span className="v">MC</span><span className="l">efficient frontier</span></div>
            </div>
            <div className="card-stack">
              <span className="s">Python</span><span className="s">NumPy</span><span className="s">SciPy</span><span className="s">Matplotlib</span>
            </div>
          </a>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="wrap" id="education">
        <div className="section-head reveal">
          <div>
            <span className="kicker amber">06 / Education</span>
            <h2>Foundations.</h2>
          </div>
          <span className="idx">// theory &amp; tongues</span>
        </div>

        <div className="edu">
          <div className="edu-card reveal">
            <h3>M.Sc. Data Science &amp; AI <span style={{ color: "var(--faint)", fontFamily: "var(--mono)", fontSize: "14px" }}>(SDIA)</span></h3>
            <div className="sub">ENSET Mohammedia — Hassan II University</div>
            <div className="dt">Nov 2022 — Sep 2024</div>
            <div className="edu-mods">
              <span className="s">AI</span><span className="s">Computer Vision</span><span className="s">Big Data</span>
              <span className="s">Machine Learning</span><span className="s">Deep Learning</span><span className="s">NLP</span>
              <span className="s">Distributed Systems</span><span className="s">Cloud Computing</span>
            </div>
          </div>

          <div className="reveal" data-d="1">
            <div className="langs">
              <div className="lang">
                <div className="lt"><span className="name">Arabic</span><span className="lvl">Native</span></div>
                <div className="bar"><i data-w="100"></i></div>
              </div>
              <div className="lang">
                <div className="lt"><span className="name">Français</span><span className="lvl">C2</span></div>
                <div className="bar"><i data-w="96"></i></div>
              </div>
              <div className="lang">
                <div className="lt"><span className="name">English</span><span className="lvl">C2</span></div>
                <div className="bar"><i data-w="96"></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <span className="kicker reveal">// let's build something that ships</span>
          <h2 className="reveal" data-d="1">Let's talk.<br /><a href="mailto:lamia.achraf60@gmail.com">lamia.achraf60@gmail.com</a></h2>
          <div className="footer-links reveal" data-d="2">
            <a href="mailto:lamia.achraf60@gmail.com" className="btn btn-primary">Email me <span className="ar">↗</span></a>
            <a href="https://github.com/AchrafLamia" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub <span className="ar">↗</span></a>
            <a href="https://linkedin.com/in/achraflamia" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn <span className="ar">↗</span></a>
          </div>
          <div className="footer-foot">
            <span className="sig">© 2026 Achraf Lamia · ML &amp; Computer Vision Engineer</span>
            <span>Casablanca, Morocco · 33.5731° N, 7.5898° W</span>
          </div>
        </div>
      </footer>

      {/* keyboard hint + palette */}
      <div className="cmd-hint" id="cmdhint">press <kbd>⌘K</kbd> to navigate</div>
      <div className="palette" id="palette">
        <div className="palette-box">
          <div className="palette-in"><span className="pp">›</span><input id="palinput" placeholder="jump to section…" autoComplete="off" /></div>
          <div className="palette-list" id="pallist"></div>
        </div>
      </div>
    </>
  );
}
