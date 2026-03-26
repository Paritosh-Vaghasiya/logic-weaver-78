import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import HeroCanvas from "./HeroCanvas";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "System.ready()";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [mounted]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* 3D Canvas Background */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
        <HeroCanvas />
      </div>

      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-secondary/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 md:px-10 md:py-32">
        <div className="max-w-4xl lg:max-w-3xl">
          {/* Typed command */}
          <p
            className={`mb-4 inline-flex rounded-sm bg-surface-elevated/70 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-primary transition-opacity duration-500 ghost-edge ${mounted ? "opacity-100" : "opacity-0"}`}
          >
            {typedText}
            <span className="animate-blink">|</span>
          </p>

          <h1 className="mb-4 text-5xl font-semibold tracking-[-0.03em] text-foreground md:text-7xl">
            <span
              className={`inline-block transition-all duration-700 delay-200 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              Paritosh Vaghasiya
            </span>
          </h1>
          <p className="mb-8 max-w-2xl font-mono text-xs uppercase tracking-[0.24em] text-primary/90">
            Computer Scientist / Full-Stack Developer
          </p>

          <p className="mb-10 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            Building innovative solutions at the intersection of data,
            artificial intelligence, and web development. Passionate about
            creating secure, scalable, and user-friendly applications.
          </p>

          <div
            className={`mb-8 flex flex-wrap gap-4 transition-all duration-700 delay-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-sm bg-primary px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-all hover:bg-primary/90"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 translate-y-full bg-background/10 transition-transform duration-300 group-hover:translate-y-0" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="group ghost-edge relative overflow-hidden rounded-sm px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-all hover:text-primary"
            >
              <span className="relative z-10">Download Resume</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
            <a
              href="#"
              className="ghost-edge inline-flex items-center gap-2 rounded-sm px-3 py-2 transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#"
              className="ghost-edge inline-flex items-center gap-2 rounded-sm px-3 py-2 transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:paritoshnvaghasiya@gmail.com"
              className="ghost-edge inline-flex items-center gap-2 rounded-sm px-3 py-2 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
