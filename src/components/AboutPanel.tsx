const specs = [
  { label: "Location", value: "San Francisco, CA" },
  { label: "Degree", value: "M.S. Computer Science" },
  { label: "Current IDE", value: "NeoVim / VS Code" },
  { label: "Coffee Intake", value: "0x04 Cups / Day" },
  { label: "Status", value: "Optimizing Processes" },
];

const AboutSection = () => {
  return (
    <section id="about" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 font-mono text-xs text-muted-foreground">
          01. The Kernel
        </div>
        <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          SYSTEM_MANIFEST<span className="text-primary">.md</span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-primary">
              System Specifications
            </h3>
            <div className="space-y-0 border border-border">
              {specs.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-border px-4 py-3 last:border-b-0"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </span>
                  <span className="font-mono text-xs text-foreground">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs text-terminal-dim">
              // Philosophy
            </h3>
            <blockquote className="mb-6 border-l-2 border-primary pl-4 text-lg font-semibold uppercase leading-tight text-foreground">
              CODE IS NOT JUST INSTRUCTION; IT IS AN ARCHITECTURE OF THOUGHT.
            </blockquote>
            <div className="space-y-4 font-body text-sm leading-relaxed text-muted-foreground">
              <p>
                In the chaotic landscape of modern software, I find clarity in
                structural integrity. My approach mirrors the "Logic-Gate
                Aesthetic"—a commitment to precision, efficiency, and
                zero-radius geometry in every line of code.
              </p>
              <p>
                Whether building low-latency distributed systems or fine-tuning
                neural architectures, I believe that the beauty of engineering
                lies in its invisible foundations. I don't just build features;
                I compile experiences that stand the test of execution time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
