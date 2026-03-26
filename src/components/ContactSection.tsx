import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-muted/40 py-24 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <AnimatedSection>
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Get In Touch
          </div>
          <h2 className="mb-4 text-4xl font-semibold tracking-[-0.02em] text-foreground md:text-5xl">
            Have a project in mind or want to discuss a collaboration?
          </h2>
          <p className="mb-10 font-body text-sm text-muted-foreground">
            Feel free to reach out using the form below or through my contact
            information.
          </p>
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-2">
          <AnimatedSection delay={100}>
            <div className="surface-l1 ghost-edge rounded-sm p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-primary">
                Contact Information
              </h3>
              <div className="space-y-4 font-body text-sm text-muted-foreground">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-foreground">
                    Location
                  </p>
                  <p>Chicago, Illinois, USA</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:paritoshnvaghasiya@gmail.com"
                    className="transition-colors hover:text-primary"
                  >
                    paritoshnvaghasiya@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <form
              className="surface-l2 ghost-edge space-y-4 rounded-sm p-6"
              onSubmit={(event) => event.preventDefault()}
            >
              <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-primary">
                Send Me a Message
              </h3>

              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Your Name
                </label>
                <input
                  value={form.name}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                  placeholder="John Doe"
                  className="ghost-edge w-full rounded-sm bg-surface-elevated/60 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, email: event.target.value }))
                  }
                  placeholder="john@example.com"
                  className="ghost-edge w-full rounded-sm bg-surface-elevated/60 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Subject
                </label>
                <input
                  value={form.subject}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      subject: event.target.value,
                    }))
                  }
                  placeholder="Project Inquiry"
                  className="ghost-edge w-full rounded-sm bg-surface-elevated/60 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      message: event.target.value,
                    }))
                  }
                  placeholder="Your message here..."
                  className="ghost-edge w-full resize-none rounded-sm bg-surface-elevated/60 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="rounded-sm bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
