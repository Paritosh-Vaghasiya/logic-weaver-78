import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

const Footer = () => {
  const scrollToSection = (section: string) => {
    const id =
      section.toLowerCase() === "home" ? "hero" : section.toLowerCase();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-background py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-primary">
              Portfolio
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Showcasing my journey in computer science, artificial
              intelligence, and full-stack development.
            </p>
            <div className="mt-4 flex gap-4 font-mono text-xs text-muted-foreground">
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

          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-primary">
              Quick Links
            </h3>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="surface-l1 ghost-edge rounded-sm px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary"
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
