import { Terminal, Layout, Brain, CloudCog } from "lucide-react";

const categories = [
  { icon: Terminal, label: "Backend", skills: "Python, Go, Node.js, PostgreSQL" },
  { icon: Layout, label: "Frontend", skills: "React, Tailwind, TypeScript, Next.js" },
  { icon: Brain, label: "ML/AI", skills: "PyTorch, TensorFlow, Scikit-learn" },
  { icon: CloudCog, label: "DevOps", skills: "Docker, Kubernetes, AWS, CI/CD" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 font-mono text-xs text-muted-foreground">02. Dependencies</div>
        <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          LOADED_LIBRARIES: <span className="text-primary">{categories.reduce((a, c) => a + c.skills.split(", ").length, 0)}</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.label} className="border border-border p-6 transition-all hover:border-primary">
              <c.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground">{c.label}</h3>
              <p className="font-body text-sm text-muted-foreground">{c.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
