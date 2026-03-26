const HeroBanner = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center border-b border-border scanline"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 font-mono text-xs text-primary animate-fade-in-up">
              System.ready()
            </p>
            <h1
              className="mb-8 text-5xl font-bold uppercase leading-none tracking-tight text-foreground md:text-7xl lg:text-8xl"
              style={{ animationDelay: "0.1s" }}
            >
              ARCHITECTING
              <br />
              <span className="text-glow text-primary">LOGIC</span>
              <br />
              INTO REALITY.
            </h1>

            <div
              className="mb-8 space-y-2 border-l-2 border-primary pl-4 font-mono text-xs text-muted-foreground"
              style={{ animationDelay: "0.2s" }}
            >
              <p>
                System.status: <span className="text-primary">"Active"</span>
              </p>
              <p>
                Role:{" "}
                <span className="text-primary">
                  ["SWE", "Data Scientist", "AI Engineer"]
                </span>
              </p>
              <p className="text-terminal-dim">
                // Initializing core modules...
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="border border-primary bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                View My Work
              </a>
              <a
                href="#about"
                className="border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                Documentation
              </a>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <div className="relative h-80 w-80 border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center font-mono text-xs text-muted-foreground">
                  <p className="mb-2 text-primary">&gt; TIMESTAMP: 0x88F2</p>
                  <div className="mx-auto my-4 h-px w-32 bg-border" />
                  <p className="animate-blink">█</p>
                </div>
              </div>
              <div className="absolute -right-3 -top-3 h-6 w-6 border border-primary" />
              <div className="absolute -bottom-3 -left-3 h-6 w-6 border border-primary" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4 font-mono text-xs text-muted-foreground">
          <div className="h-8 w-px bg-primary" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
