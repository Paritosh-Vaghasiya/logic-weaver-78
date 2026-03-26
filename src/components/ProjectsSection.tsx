import { Terminal, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    name: "NEURAL_ARCH_V2",
    description: "Next-gen visualization engine for deep learning models, rendering complex tensors in real-time using WebGL.",
    tags: ["React", "TensorFlow", "PostgreSQL"],
    status: "LIVE",
  },
  {
    name: "QUANTUM_LEDGER",
    description: "A high-throughput distributed database designed for post-quantum cryptographic standards.",
    tags: ["Rust", "gRPC", "Docker"],
    status: "BETA",
  },
  {
    name: "SYNTAX_HUNT",
    description: "Static analysis tool for catching memory leaks in low-level C++ applications before compilation.",
    tags: ["LLVM", "Python", "Qt"],
    status: "LIVE",
  },
  {
    name: "VOID_COMMERCE",
    description: "Headless commerce engine capable of handling 100k+ concurrent transactions with sub-10ms latency.",
    tags: ["Next.js", "Go", "Redis"],
    status: "DEV",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative border-b border-border py-24 overflow-hidden">
      {/* Diagonal lines background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              hsl(var(--primary)) 50px,
              hsl(var(--primary)) 51px
            )`
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-4 font-mono text-xs text-muted-foreground">Directory: /work/featured</div>
          <h2 className="mb-2 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            Projects
          </h2>
          <p className="mb-12 font-mono text-xs text-muted-foreground">
            TOTAL_ENTRIES: {String(projects.length).padStart(2, "0")}
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <AnimatedSection key={p.name} delay={100 + i * 100}>
              <div className="group relative border border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:border-primary overflow-hidden">
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[200%] animate-scan" />
                </div>

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Terminal className="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-12" />
                      <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">{p.name}</h3>
                    </div>
                    
                    {/* Status indicator */}
                    <div className={`flex items-center gap-2 font-mono text-[10px] ${
                      p.status === 'LIVE' ? 'text-primary' : 
                      p.status === 'BETA' ? 'text-yellow-500' : 'text-muted-foreground'
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${
                        p.status === 'LIVE' ? 'bg-primary animate-pulse' : 
                        p.status === 'BETA' ? 'bg-yellow-500' : 'bg-muted-foreground'
                      }`} />
                      {p.status}
                    </div>
                  </div>
                  
                  <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span 
                          key={t} 
                          className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-primary" />
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-transparent group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-transparent group-hover:border-primary transition-colors duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <div className="mt-8 flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="text-primary">STATUS</span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              LIVE_SERVER
            </span>
            <span className="ml-4 text-primary">BRANCH</span>
            <span>main/production</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
