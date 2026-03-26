import { useState } from "react";

const jobs = [
  {
    id: "01",
    period: "PRESENT",
    company: "NEURAL_SYNC",
    title: "Lead Systems Architect",
    description:
      "Pioneering distributed neural networks for edge computing environments. Orchestrating the transition from monolithic legacy systems to reactive, event-driven micro-architectures.",
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
    description:
      "Led the development of open-source tooling for blockchain observability. Focused on performance profiling and real-time data visualization of peer-to-peer networks.",
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
    description:
      "Full-stack development for a high-frequency trading platform. Specialized in low-latency UI components and real-time websocket integrations.",
    stats: [
      { label: "EXECUTION", value: "<5ms Latency" },
      { label: "USER BASE", value: "500k+ Active" },
    ],
    bullets: [],
    tags: ["REACT", "NODE.JS", "REDIS"],
  },
];

const ExperienceTimeline = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 font-mono text-xs text-muted-foreground">
          Execution Path
        </div>
        <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          PROFESSIONAL
          <br />
          <span className="text-primary">ARCHITECTURE.</span>
        </h2>

        {/* Timeline tabs */}
        <div className="mb-8 flex gap-4 border-b border-border">
          {jobs.map((j, i) => (
            <button
              key={j.id}
              onClick={() => setActive(i)}
              className={`border-b-2 pb-4 font-mono text-xs uppercase tracking-widest transition-colors ${
                active === i
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {j.id} // {j.period}
            </button>
          ))}
        </div>

        {/* Active job detail */}
        {(() => {
          const j = jobs[active];
          return (
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <h3 className="text-2xl font-bold uppercase text-foreground">
                  {j.company}
                </h3>
                <p className="mt-1 font-mono text-xs text-primary">{j.title}</p>
              </div>
              <div className="lg:col-span-2">
                <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                  {j.description}
                </p>

                {j.stats.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-6">
                    {j.stats.map((s) => (
                      <div
                        key={s.label}
                        className="border border-border px-4 py-2"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {s.label}
                        </span>
                        <p className="font-mono text-sm text-primary">
                          {s.value}
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
                        className="font-mono text-xs text-muted-foreground"
                      >
                        <span className="text-primary">&gt;</span> {b}
                      </p>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {j.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
