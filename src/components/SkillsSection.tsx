import AnimatedSection from "./AnimatedSection";

const technicalSkills = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Django", "Supabase", "Firebase", "PostgreSQL", "SQL"],
  "AI & Data": [
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Numpy",
    "Pandas",
    "OpenCV",
  ],
};

const certifications = [
  {
    name: "CS50 Python",
    issuer: "Harvard",
    year: "2024",
  },
  {
    name: "State Champion & National Qualifier: Fundementals of Web Design",
    issuer: "Illinois Business Professionals of America",
    year: "2025",
  },
  {
    name: "State Medalist & National Qualifier: Website Design Team",
    issuer: "Illinois Business Professionals of America",
    year: "2025",
  },
  {
    name: "State Medalist: Fundementals of Web Design",
    issuer: "Illinois Business Professionals of America",
    year: "2024",
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-border py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-4 font-mono text-xs text-muted-foreground">
            Skills
          </div>
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            A summary of my professional qualifications, technical expertise,
            and certifications.
          </h2>
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-2">
          <AnimatedSection delay={100}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
              Technical Skills
            </h3>
            <div className="space-y-5">
              {Object.entries(technicalSkills).map(([group, values]) => (
                <div key={group} className="border border-border p-4">
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-foreground">
                    {group}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {values.map((value) => (
                      <span
                        key={`${group}-${value}`}
                        className="border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
              Certifications & Awards
            </h3>
            <div className="space-y-4">
              {certifications.map((certification) => (
                <article
                  key={certification.name}
                  className="border border-border p-4"
                >
                  <h4 className="mb-2 text-sm font-semibold text-foreground">
                    {certification.name}
                  </h4>
                  <p className="font-mono text-xs text-muted-foreground">
                    {certification.issuer}
                  </p>
                  <p className="mt-2 font-mono text-xs text-primary">
                    {certification.year}
                  </p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
