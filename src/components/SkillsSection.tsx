import { Terminal, Layout, Brain, CloudCog } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SkillsCanvas from "./SkillsCanvas";

const categories = [
  { icon: Terminal, label: "Backend", skills: "Python, Go, Node.js, PostgreSQL" },
  { icon: Layout, label: "Frontend", skills: "React, Tailwind, TypeScript, Next.js" },
  { icon: Brain, label: "ML/AI", skills: "PyTorch, TensorFlow, Scikit-learn" },
  { icon: CloudCog, label: "DevOps", skills: "Docker, Kubernetes, AWS, CI/CD" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative border-b border-border py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-4 font-mono text-xs text-muted-foreground">02. Dependencies</div>
          <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            LOADED_LIBRARIES: <span className="text-primary text-glow">{categories.reduce((a, c) => a + c.skills.split(", ").length, 0)}</span>
          </h2>
        </AnimatedSection>

        {/* 3D Skills Visualization */}
        <AnimatedSection delay={200}>
          <SkillsCanvas />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {categories.map((c, i) => (
            <AnimatedSection key={c.label} delay={300 + i * 100}>
              <div className="group relative border border-border p-6 transition-all duration-300 hover:border-primary hover:border-glow bg-card/50 backdrop-blur-sm">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <c.icon className="relative z-10 mb-4 h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="relative z-10 mb-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground">{c.label}</h3>
                <p className="relative z-10 font-body text-sm text-muted-foreground">{c.skills}</p>
                
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-transparent group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-transparent group-hover:border-primary transition-colors duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
