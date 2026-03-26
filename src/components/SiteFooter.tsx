import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const quickLinks = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

const Footer = () => {
  const scrollToSection = (section: string) => {
    const id = section.toLowerCase() === "home" ? "hero" : section.toLowerCase();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden py-12">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">Portfolio</h3>
            <p className="font-body text-sm text-muted-foreground">
              Showcasing my journey in computer science, artificial intelligence, and full-stack development.
            </p>
            <div className="mt-4 flex gap-4 font-mono text-xs text-muted-foreground">
              <a href="#" className="inline-flex items-center gap-2 transition-colors hover:text-primary"><Github className="h-4 w-4" />GitHub</a>
              <a href="#" className="inline-flex items-center gap-2 transition-colors hover:text-primary"><Linkedin className="h-4 w-4" />LinkedIn</a>
              <a href="mailto:paritoshnvaghasiya@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-primary"><Mail className="h-4 w-4" />Email</a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">Quick Links</h3>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-mono text-xs text-muted-foreground">
              © 2026 Paritosh Vaghasiya Portfolio. All rights reserved.
            </p>
            <button
              onClick={() => scrollToSection("Home")}
              className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Back to top
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
