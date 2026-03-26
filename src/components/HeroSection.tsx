import { useEffect, useState } from "react";
import HeroCanvas from "./HeroCanvas";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = 'System.ready()';

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
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
        <HeroCanvas />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          {/* Typed command */}
          <p className={`mb-2 font-mono text-xs text-primary transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            {typedText}<span className="animate-blink">|</span>
          </p>

          {/* Main heading with staggered reveal */}
          <h1 className="mb-8 text-5xl font-bold uppercase leading-none tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span 
              className={`inline-block transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              ARCHITECTING
            </span>
            <br />
            <span 
              className={`inline-block text-glow text-primary transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              LOGIC
            </span>
            <br />
            <span 
              className={`inline-block transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              INTO REALITY.
            </span>
          </h1>

          {/* System info panel */}
          <div 
            className={`mb-8 space-y-2 border-l-2 border-primary pl-4 font-mono text-xs text-muted-foreground transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
          >
            <p className="flex items-center gap-2">
              System.status: <span className="text-primary relative">"Active"<span className="absolute -right-2 top-0 h-2 w-2 rounded-full bg-primary animate-ping" /></span>
            </p>
            <p>Role: <span className="text-primary">["SWE", "Data Scientist", "AI Engineer"]</span></p>
            <p className="text-terminal-dim">// Initializing core modules...</p>
          </div>

          {/* CTA buttons */}
          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a
              href="#projects"
              className="group relative border border-primary bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#about"
              className="group border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-all hover:border-primary hover:text-primary relative overflow-hidden"
            >
              <span className="relative z-10">Documentation</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-6 flex items-center gap-4 font-mono text-xs text-muted-foreground transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-primary animate-scroll-line" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
