import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 font-mono text-xs text-muted-foreground">03. Handshake Protocol</div>
        <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          READY TO START THE<br /><span className="text-primary">NEXT_BUILD?</span>
        </h2>
        <p className="mb-12 font-body text-sm text-muted-foreground">
          Drop a message and let's compile something remarkable together.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border bg-transparent px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary"
                placeholder="your_name"
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border bg-transparent px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none border border-border bg-transparent px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary"
                placeholder="// Describe your project..."
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
            >
              <Send className="h-3 w-3" />
              {sent ? "MESSAGE_SENT ✓" : "INITIALIZE_COLLABORATION"}
            </button>
          </form>

          <div className="flex flex-col justify-center">
            <div className="border border-border p-6">
              <p className="mb-4 font-mono text-xs text-primary">SYSTEM_STATUS</p>
              <div className="space-y-3 font-mono text-xs text-muted-foreground">
                <p>&gt; Connection: <span className="text-primary">OPEN</span></p>
                <p>&gt; Response Time: <span className="text-foreground">&lt; 24h</span></p>
                <p>&gt; Availability: <span className="text-primary">ACCEPTING_PROJECTS</span></p>
                <p>&gt; Preferred: <span className="text-foreground">Remote / Hybrid</span></p>
              </div>
              <div className="mt-6 h-px w-full bg-border" />
              <div className="mt-4 flex gap-6">
                {["Github", "LinkedIn", "Twitter"].map((l) => (
                  <a key={l} href="#" className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary">
                    {l}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
