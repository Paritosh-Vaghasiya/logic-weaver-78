import AnimatedSection from "./AnimatedSection";

const specs = [
  { label: "Profile", value: "Computer Scientist & Scholar" },
  { label: "Focus", value: "AI-Powered Solutions" },
  { label: "Approach", value: "Data-Driven Development" },
  { label: "Expertise", value: "Full-Stack Engineering" },
  { label: "Community", value: "Open-Source Collaboration" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-muted/40 py-24 md:py-28"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <AnimatedSection>
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            About Me
          </div>
          <h2 className="mb-12 text-4xl font-semibold tracking-[-0.02em] text-foreground md:text-5xl">
            Profile
          </h2>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection delay={100}>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Computer Scientist & Scholar
            </h3>
            <div className="space-y-2">
              {specs.map((s, i) => (
                <div
                  key={i}
                  className="ambient-lift surface-l1 ghost-edge flex items-center justify-between rounded-sm px-4 py-3"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {s.label}
                  </span>
                  <span className="font-mono text-xs text-foreground">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h3 className="mb-4 font-mono text-xs text-terminal-dim">
              // About
            </h3>
            <blockquote className="mb-6 rounded-sm bg-surface-elevated/80 px-5 py-4 text-lg font-semibold leading-tight text-foreground ghost-edge">
              I&apos;m a passionate computer scientist with expertise in data
              science, artificial intelligence, and full-stack development.
            </blockquote>
            <div className="space-y-4 font-body text-sm leading-relaxed text-muted-foreground">
              <p className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:bg-primary/50">
                As a rising computer scientist in the tech industry, I&apos;ve
                worked on data-intensive applications, developing machine
                learning models, and building scalable applications.
              </p>
              <p className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:bg-primary/50">
                My mindset as a scholar fuels my drive to explore beyond the
                surface from understanding the nuances of natural language
                processing to applying data science for real-world impact. I
                treat every line of code as a step in a broader journey to
                innovate, question, and contribute meaningfully to the tech
                world.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
