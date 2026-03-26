import { Terminal } from "lucide-react";

const projects = [
  {
    name: "NEURAL_ARCH_V2",
    description: "Next-gen visualization engine for deep learning models, rendering complex tensors in real-time using WebGL.",
    tags: ["React", "TensorFlow", "PostgreSQL"],
  },
  {
    name: "QUANTUM_LEDGER",
    description: "A high-throughput distributed database designed for post-quantum cryptographic standards.",
    tags: ["Rust", "gRPC", "Docker"],
  },
  {
    name: "SYNTAX_HUNT",
    description: "Static analysis tool for catching memory leaks in low-level C++ applications before compilation.",
    tags: ["LLVM", "Python", "Qt"],
  },
  {
    name: "VOID_COMMERCE",
    description: "Headless commerce engine capable of handling 100k+ concurrent transactions with sub-10ms latency.",
    tags: ["Next.js", "Go", "Redis"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 font-mono text-xs text-muted-foreground">Directory: /work/featured</div>
        <h2 className="mb-2 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Projects
        </h2>
        <p className="mb-12 font-mono text-xs text-muted-foreground">
          TOTAL_ENTRIES: {String(projects.length).padStart(2, "0")}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group border border-border bg-card p-6 transition-all hover:border-primary hover:border-glow"
            >
              <div className="mb-4 flex items-center gap-3">
                <Terminal className="h-4 w-4 text-primary" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">{p.name}</h3>
              </div>
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:border-primary/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4 font-mono text-xs text-muted-foreground">
          <span className="text-primary">STATUS</span>
          <span>● LIVE_SERVER</span>
          <span className="ml-4 text-primary">BRANCH</span>
          <span>main/production</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
