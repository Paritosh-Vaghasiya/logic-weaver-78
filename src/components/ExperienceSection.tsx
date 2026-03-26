import { useState, useRef, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const jobs = [
  {
    id: "01",
    period: "Jan 2025 - Present",
    company: "ICEG • Remote",
    title: "Contract | Full-Stack Developer",
    description:
      "Developing scalable web features and maintaining secure full-stack systems for a community-driven non-profit platform.",
    stats: [
      { label: "TYPE", value: "Contract" },
      { label: "LOCATION", value: "Remote" },
    ],
    bullets: [
      "Built and shipped production-ready full-stack features with strong UI/UX and reliability standards.",
      "Collaborated directly with stakeholders to prioritize roadmap items and iterative improvements.",
      "Focused on performance, accessibility, and maintainable component architecture.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    id: "02",
    period: "Oct 2023 - Present",
    company: "Code211 • Schaumburg, IL",
    title: "Full-time | Co-Director & Web Developer",
    description:
      "Leading web initiatives, event technology, and platform development to support education-focused programs and hackathon operations.",
    stats: [{ label: "TYPE", value: "Full-time" }],
    bullets: [
      "Directed website and product development efforts across multiple collaborative student and mentor teams.",
      "Implemented SEO and content architecture for higher discoverability and onboarding clarity.",
      "Built and maintained event-facing web experiences used by participants during hackathons.",
    ],
    tags: ["Next.js", "SEO", "UI/UX", "Leadership"],
  },
  {
    id: "03",
    period: "Aug 2022 - May 2026",
    company: "Schaumburg High School • Schaumburg, IL",
    title: "Education | Diploma",
    description:
      "Academic foundation in computer science, data, and software engineering with project-based leadership in technical competitions.",
    stats: [
      { label: "TYPE", value: "Education" },
      { label: "PROGRAM", value: "Diploma" },
    ],
    bullets: [
      "Advanced practical work in software, artificial intelligence, and web development.",
      "Competed in state and national-level web design and development events.",
      "Applied classroom and self-directed learning to real-world full-stack applications.",
    ],
    tags: ["Computer Science", "AI", "Web Development"],
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
            if (
              char === " " ||
              char === "." ||
              char === "/" ||
              char === "%" ||
              char === "<" ||
              char === ">"
            )
              return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
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
  const [expanded, setExpanded] = useState<number | null>(null);
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
      { threshold: 0.3 },
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
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 md:py-28"
    >
      {/* Circuit pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.02]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 50 30 M 50 70 L 50 100 M 0 50 L 30 50 M 70 50 L 100 50"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                className="text-primary"
              />
              <circle
                cx="50"
                cy="50"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <AnimatedSection>
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Execution Path
          </div>
          <h2 className="mb-12 text-4xl font-semibold tracking-[-0.02em] text-foreground md:text-5xl">
            PROFESSIONAL
            <br />
            <span className="text-primary text-glow">ARCHITECTURE.</span>
          </h2>
        </AnimatedSection>

        {/* Timeline tabs */}
        <AnimatedSection delay={100}>
          <div className="mb-8 flex flex-wrap gap-3">
            {jobs.map((j, i) => (
              <button
                key={j.id}
                onClick={() => setActive(i)}
                className={`ghost-edge relative rounded-sm px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                  active === i
                    ? "surface-l2 text-primary"
                    : "surface-l1 text-muted-foreground hover:text-foreground"
                }`}
              >
                {j.id} // {j.period}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Active job detail with transition */}
        {(() => {
          const j = jobs[active];
          return (
            <div
              key={j.id}
              className="grid gap-8 lg:grid-cols-3 animate-fade-in"
            >
              <AnimatedSection delay={150}>
                <div className="relative">
                  <h3 className="text-2xl font-bold uppercase text-foreground">
                    {j.company}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-primary">
                    {j.title}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-4 flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1 w-4 bg-primary/30"
                        style={{
                          opacity: i <= active ? 1 : 0.3,
                          transition: "opacity 0.3s",
                          transitionDelay: `${i * 50}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} className="lg:col-span-2">
                <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                  {j.description}
                </p>

                {j.stats.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-6">
                    {j.stats.map((s, i) => (
                      <div
                        key={s.label}
                        className="group surface-l1 ghost-edge rounded-sm px-4 py-2 transition-all hover:border-glow"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {s.label}
                        </span>
                        <p className="font-mono text-sm text-primary">
                          <AnimatedStat
                            value={s.value}
                            animate={animateStats}
                          />
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {j.bullets.length > 0 && (
                  <div className="mb-6 space-y-2">
                    {(expanded === active
                      ? j.bullets
                      : j.bullets.slice(0, 1)
                    ).map((b, i) => (
                      <p
                        key={i}
                        className="font-mono text-xs text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1"
                      >
                        <span className="text-primary">&gt;</span> {b}
                      </p>
                    ))}
                    <button
                      onClick={() =>
                        setExpanded(expanded === active ? null : active)
                      }
                      className="pt-1 font-mono text-xs text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                    >
                      Show More
                    </button>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {j.tags.map((t, i) => (
                    <span
                      key={t}
                      className="surface-l1 ghost-edge rounded-sm px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground transition-all duration-300 hover:text-primary"
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
