import { useState, useRef, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const jobs = [
  {
    id: "01",
    period: "PRESENT",
    company: "NEURAL_SYNC",
    title: "Lead Systems Architect",
    description: "Pioneering distributed neural networks for edge computing environments. Orchestrating the transition from monolithic legacy systems to reactive, event-driven micro-architectures.",
    stats: [
      { label: "AVAILABILITY", value: "99.9% Uptime" },
      { label: "THROUGHPUT", value: "2.4M req/s" },
    ],
    bullets: [
      "Architected a custom Go-based orchestration engine reducing latency by 42% across global clusters.",
      "Implemented zero-trust security protocols ensuring compliance with ISO-27001 standards.",
      "Mentored a team of 12 engineers, fostering a culture of test-driven development.",
    ],
    tags: ["GO", "KUBERNETES", "GRPC", "RUST"],
  },
  {
    id: "02",
    period: "2021-2023",
    company: "VOID_LABS",
    title: "Senior Core Engineer",
    description: "Led the development of open-source tooling for blockchain observability. Focused on performance profiling and real-time data visualization of peer-to-peer networks.",
    stats: [{ label: "DATA PROCESSING", value: "15PB / MONTHLY" }],
    bullets: [
      "Optimized database query performance by 300% using advanced indexing strategies in PostgreSQL.",
      "Designed and deployed a serverless analytics pipeline handling massive bursts in traffic.",
    ],
    tags: ["TYPESCRIPT", "POSTGRES", "AWS"],
  },
  {
    id: "03",
    period: "2019-2021",
    company: "KINETIC_OS",
    title: "Backend Developer",
    description: "Full-stack development for a high-frequency trading platform. Specialized in low-latency UI components and real-time websocket integrations.",
    stats: [
      { label: "EXECUTION", value: "<5ms Latency" },
      { label: "USER BASE", value: "500k+ Active" },
    ],
    bullets: [],
    tags: ["REACT", "NODE.JS", "REDIS"],
  },
];

// Animated stat counter
function AnimatedStat({ value, animate }: { value: string; animate: boolean }) {
  const [display, setDisplay] = useState(value);
  
  useEffect(() => {
    if (!animate) {
      setDisplay(value);
      return;
    }
    
    const chars = "0123456789ABCDEF%/.+<>kMBPT";
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(
        value
          .split("")
          .map((char, index) => {
            if (index < iterations) return value[index];
            if (char === " " || char === "." || char === "/" || char === "%" || char === "<" || char === ">") return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iterations += 0.5;
      if (iterations >= value.length) {
        clearInterval(interval);
        setDisplay(value);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [value, animate]);

  return <span>{display}</span>;
}

const ExperienceSection = () => {
  const [active, setActive] = useState(0);
  const [animateStats, setAnimateStats] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Reset animation when tab changes
  useEffect(() => {
    setAnimateStats(false);
    setTimeout(() => setAnimateStats(true), 100);
  }, [active]);

  return (
    <section id="experience" ref={sectionRef} className="relative border-b border-border py-24 overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 50 30 M 50 70 L 50 100 M 0 50 L 30 50 M 70 50 L 100 50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
              <circle cx="50" cy="50" r="4" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-4 font-mono text-xs text-muted-foreground">Execution Path</div>
          <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            PROFESSIONAL<br /><span className="text-primary text-glow">ARCHITECTURE.</span>
          </h2>
        </AnimatedSection>

        {/* Timeline tabs */}
        <AnimatedSection delay={100}>
          <div className="mb-8 flex gap-4 border-b border-border">
            {jobs.map((j, i) => (
              <button
                key={j.id}
                onClick={() => setActive(i)}
                className={`relative pb-4 font-mono text-xs uppercase tracking-widest transition-colors ${
                  active === i ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {j.id} // {j.period}
                {/* Animated underline */}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    active === i ? 'w-full' : 'w-0'
                  }`} 
                />
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Active job detail with transition */}
        {(() => {
          const j = jobs[active];
          return (
            <div key={j.id} className="grid gap-8 lg:grid-cols-3 animate-fade-in">
              <AnimatedSection delay={150}>
                <div className="relative">
                  <h3 className="text-2xl font-bold uppercase text-foreground">{j.company}</h3>
                  <p className="mt-1 font-mono text-xs text-primary">{j.title}</p>
                  
                  {/* Decorative element */}
                  <div className="mt-4 flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className="h-1 w-4 bg-primary/30"
                        style={{ 
                          opacity: i <= active ? 1 : 0.3,
                          transition: 'opacity 0.3s',
                          transitionDelay: `${i * 50}ms`
                        }} 
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200} className="lg:col-span-2">
                <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">{j.description}</p>

                {j.stats.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-6">
                    {j.stats.map((s, i) => (
                      <div 
                        key={s.label} 
                        className="group border border-border px-4 py-2 transition-all hover:border-primary hover:border-glow"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</span>
                        <p className="font-mono text-sm text-primary">
                          <AnimatedStat value={s.value} animate={animateStats} />
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {j.bullets.length > 0 && (
                  <div className="mb-6 space-y-2">
                    {j.bullets.map((b, i) => (
                      <p 
                        key={i} 
                        className="font-mono text-xs text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1"
                      >
                        <span className="text-primary">&gt;</span> {b}
                      </p>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {j.tags.map((t, i) => (
                    <span 
                      key={t} 
                      className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default ExperienceSection;
