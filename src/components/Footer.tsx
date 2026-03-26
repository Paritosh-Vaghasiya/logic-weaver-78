import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const socialLinks = [
  { name: "Github", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Social links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center gap-2 font-mono text-xs text-muted-foreground transition-all hover:text-primary"
                aria-label={link.name}
              >
                <link.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-mono text-xs text-muted-foreground transition-all hover:text-primary"
            aria-label="Scroll to top"
          >
            <span>BACK_TO_TOP</span>
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </button>

          {/* Timestamp */}
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            LAST_UPDATED: {new Date().toISOString().split('T')[0].replace(/-/g, '-')}_UTC
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="font-mono text-[10px] text-muted-foreground">
            &copy; {new Date().getFullYear()} PORTFOLIO_CORE. ALL_RIGHTS_RESERVED.
          </p>
          <p className="mt-2 font-mono text-[10px] text-terminal-dim">
            // Built with React + Three.js
          </p>
        </div>

        {/* Decorative element */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-1 w-1 bg-primary/30"
                style={{
                  animation: `pulse-glow 2s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
