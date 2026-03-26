import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

const SiteNavbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo("hero")}
          className="font-mono text-sm text-primary"
        >
          &lt;CODE_GEN /&gt;
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="border border-primary px-4 py-2 font-mono text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Hire Me
          </button>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full py-3 text-left font-mono text-sm uppercase tracking-widest text-muted-foreground"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default SiteNavbar;
