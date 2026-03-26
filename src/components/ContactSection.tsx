import { useState, useRef, useEffect } from "react";
import { Send, Github, Linkedin, Twitter } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const socialLinks = [
  { name: "Github", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    
    // Simulate terminal output
    const lines = [
      "> Establishing connection...",
      "> Encrypting payload...",
      "> Transmitting message...",
      "> MESSAGE_SENT: SUCCESS",
    ];
    
    lines.forEach((line, i) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
      }, i * 400);
    });

    setTimeout(() => {
      setSent(false);
      setTerminalLines([]);
    }, 4000);
    setForm({ name: "", email: "", message: "" });
  };

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  return (
    <section id="contact" className="relative border-b border-border py-24 overflow-hidden">
      {/* Animated gradient orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="mb-4 font-mono text-xs text-muted-foreground">03. Handshake Protocol</div>
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            READY TO START THE<br /><span className="text-primary text-glow">NEXT_BUILD?</span>
          </h2>
          <p className="mb-12 font-body text-sm text-muted-foreground">
            Drop a message and let&apos;s compile something remarkable together.
          </p>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div className="relative group">
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full border border-border bg-transparent px-4 py-3 font-mono text-sm text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                    placeholder="your_name"
                  />
                  {/* Typing indicator */}
                  {focusedField === 'name' && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-primary animate-blink">|</span>
                  )}
                </div>
              </div>
              
              {/* Email field */}
              <div className="relative group">
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full border border-border bg-transparent px-4 py-3 font-mono text-sm text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                    placeholder="you@domain.com"
                  />
                  {focusedField === 'email' && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-primary animate-blink">|</span>
                  )}
                </div>
              </div>
              
              {/* Message field */}
              <div className="relative group">
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full resize-none border border-border bg-transparent px-4 py-3 font-mono text-sm text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                    placeholder="// Describe your project..."
                  />
                </div>
              </div>
              
              {/* Submit button */}
              <button
                type="submit"
                disabled={sent}
                className="group relative flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary disabled:opacity-50 overflow-hidden"
              >
                <Send className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                <span className="relative z-10">
                  {sent ? "TRANSMITTING..." : "INITIALIZE_COLLABORATION"}
                </span>
                
                {/* Progress bar when sending */}
                {sent && (
                  <span className="absolute bottom-0 left-0 h-0.5 bg-primary-foreground animate-progress" />
                )}
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={200} className="flex flex-col justify-center">
            <div className="border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-destructive" />
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground">system_status.sh</span>
              </div>
              
              {/* Terminal content */}
              <div ref={terminalRef} className="p-6 font-mono text-xs min-h-[200px]">
                {terminalLines.length > 0 ? (
                  <div className="space-y-2">
                    {terminalLines.map((line, i) => (
                      <p 
                        key={i} 
                        className={`${line.includes('SUCCESS') ? 'text-primary' : 'text-muted-foreground'} animate-fade-in`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3 text-muted-foreground">
                    <p>&gt; Connection: <span className="text-primary">OPEN</span></p>
                    <p>&gt; Response Time: <span className="text-foreground">&lt; 24h</span></p>
                    <p>&gt; Availability: <span className="text-primary">ACCEPTING_PROJECTS</span></p>
                    <p>&gt; Preferred: <span className="text-foreground">Remote / Hybrid</span></p>
                    <p className="animate-blink">_</p>
                  </div>
                )}
              </div>
              
              {/* Social links */}
              <div className="border-t border-border px-6 py-4">
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="group flex items-center gap-2 font-mono text-xs text-muted-foreground transition-all hover:text-primary"
                    >
                      <link.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                      <span className="hidden sm:inline">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
