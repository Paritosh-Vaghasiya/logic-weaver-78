import { useRef, useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const specs = [
  { label: "Location", value: "San Francisco, CA" },
  { label: "Degree", value: "M.S. Computer Science" },
  { label: "Current IDE", value: "NeoVim / VS Code" },
  { label: "Coffee Intake", value: "0x04 Cups / Day" },
  { label: "Status", value: "Optimizing Processes" },
];

// Animated counter component
function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    if (!inView) return;
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayValue(
        value
          .split("")
          .map((char, index) => {
            if (index < iterations) return value[index];
            if (char === " " || char === "." || char === "/" || char === ",") return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iterations += 1/3;
      if (iterations >= value.length) {
        clearInterval(interval);
        setDisplayValue(value);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [value, inView]);

  return <span className="text-foreground">{displayValue}</span>;
}

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative border-b border-border py-24 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 20s linear infinite',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-4 font-mono text-xs text-muted-foreground">01. The Kernel</div>
          <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            SYSTEM_MANIFEST<span className="text-primary">.md</span>
          </h2>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection delay={100}>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-primary">System Specifications</h3>
            <div className="space-y-0 border border-border overflow-hidden">
              {specs.map((s, i) => (
                <div 
                  key={i} 
                  className="group flex items-center justify-between border-b border-border px-4 py-3 last:border-b-0 transition-colors hover:bg-primary/5"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</span>
                  <span className="font-mono text-xs">
                    <AnimatedValue value={s.value} inView={inView} />
                  </span>
                  
                  {/* Hover indicator */}
                  <div className="absolute left-0 h-full w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-center" />
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h3 className="mb-4 font-mono text-xs text-terminal-dim">// Philosophy</h3>
            <blockquote className="relative mb-6 border-l-2 border-primary pl-4 text-lg font-semibold uppercase leading-tight text-foreground">
              <span className="relative">
                CODE IS NOT JUST INSTRUCTION; IT IS AN ARCHITECTURE OF THOUGHT.
                <span className="absolute -left-4 top-0 text-4xl text-primary/20 font-serif">&ldquo;</span>
              </span>
            </blockquote>
            <div className="space-y-4 font-body text-sm leading-relaxed text-muted-foreground">
              <p className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:bg-primary/50">
                In the chaotic landscape of modern software, I find clarity in structural integrity. My approach mirrors the "Logic-Gate Aesthetic"—a commitment to precision, efficiency, and zero-radius geometry in every line of code.
              </p>
              <p className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:bg-primary/50">
                {"Whether building low-latency distributed systems or fine-tuning neural architectures, I believe that the beauty of engineering lies in its invisible foundations. I don't just build features; I compile experiences that stand the test of execution time."}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
