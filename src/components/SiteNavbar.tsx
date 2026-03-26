import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", ...navLinks.map((l) => l.toLowerCase())];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const sectionId = id.toLowerCase() === "home" ? "hero" : id.toLowerCase();
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo with glitch effect on hover */}
        <button
          onClick={() => scrollTo("hero")}
          className="group relative font-mono text-sm text-primary transition-all hover:text-glow"
        >
          <span className="relative z-10">Logo</span>
          <span className="absolute inset-0 text-primary/50 opacity-0 blur-[2px] transition-opacity group-hover:opacity-100">
            Logo
          </span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l, i) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="group relative font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span
                className={`transition-colors ${
                  activeSection === (l.toLowerCase() === "home" ? "hero" : l.toLowerCase()) ? "text-primary" : ""
                }`}
              >
                {l}
              </span>
              <span
                className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                  activeSection === (l.toLowerCase() === "home" ? "hero" : l.toLowerCase()) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}

          {/* CTA Button */}
          <button
            onClick={() => scrollTo("contact")}
            className="group relative overflow-hidden border border-primary px-4 py-2 font-mono text-xs text-primary transition-all hover:text-primary-foreground"
          >
            <span className="relative z-10">Hire Me</span>
            <span className="absolute inset-0 -translate-x-full transform bg-primary transition-transform duration-300 group-hover:translate-x-0" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="relative p-2 text-foreground transition-colors hover:text-primary md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <div className="relative h-5 w-5">
            <Menu
              size={20}
              className={`absolute inset-0 transition-all duration-300 ${
                open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              size={20}
              className={`absolute inset-0 transition-all duration-300 ${
                open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu with slide animation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-background/95 px-6 pb-6 backdrop-blur-xl">
          {navLinks.map((l, i) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full py-3 text-left font-mono text-sm uppercase tracking-widest text-muted-foreground transition-all hover:translate-x-2 hover:text-primary"
              style={{
                animationDelay: `${i * 50}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-10px)",
                transition: `all 0.3s ${i * 0.05}s`,
              }}
            >
              <span className="mr-2 text-primary">{String(i + 1).padStart(2, "0")}.</span>
              {l}
            </button>
          ))}

          <button
            onClick={() => scrollTo("contact")}
            className="mt-4 w-full border border-primary py-3 font-mono text-sm uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
