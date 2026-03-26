import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

const filters = [
  "All",
  "AI",
  "Web Development",
  "SEO",
  "Finance",
  "Education",
  "Full-Stack",
];

const projects: Project[] = [
  {
    title: "AI Sanskrit-to-Gujarati Translator",
    subtitle: "AI Sanskrit-to-Gujarati Translator",
    categories: ["AI", "Web Development"],
    description:
      "A web application designed to help users, especially Swamis at Mandirs, translate Sanskrit scriptures into Gujarati. Utilizes OCR with OpenCV-enhanced image processing and Tesseract for improved text recognition, followed by NLP translation with IndicTrans2.",
    stack: [
      "Python",
      "Django",
      "OpenCV",
      "Tesseract",
      "IndicTrans2",
      "Next.js",
    ],
  },
  {
    title: "Code211 Hackathon Website",
    subtitle: "Code211 Hackathon Website",
    categories: ["Web Development", "SEO"],
    description:
      "Developed the official Code211 Hackathon website to streamline communication, registration, and event management. Implemented strong SEO techniques to improve visibility and ensure participants could easily find resources before and during the event.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    github: "#",
    demo: "#",
  },
  {
    title: "ICEG Non-Profit Website",
    subtitle: "ICEG Non-Profit Website",
    categories: ["Web Development"],
    description:
      "This website was built for ICEG, a community-oriented non-profit, to promote events and inform visitors. Focus was placed on UI/UX, accessibility, and fast load times using Next.js with server-side rendering.",
    stack: ["Next.js", "React", "Tailwind CSS", "GitHub Pages"],
    github: "#",
    demo: "#",
  },
  {
    title: "SpendSense",
    subtitle: "SpendSense",
    categories: ["Web Development", "Finance"],
    description:
      "SpendSense is a responsive web app that helps users manage their finances. Users can track income, expenses, and categories through a dynamic UI connected to a PostgreSQL database via Supabase.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Supabase",
      "Bootstrap",
      "GitHub Pages",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "GradeMaster",
    subtitle: "GradeMaster",
    categories: ["Web Development", "Education", "Full-Stack"],
    description:
      "Full-stack grade management system that helps students organize classes, assignments, and visualize weighted grades in real time.",
    stack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Supabase",
      "Zustand",
      "Recharts",
      "Tailwind CSS",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "CodeNode",
    subtitle: "CodeNode",
    categories: ["Web Development", "Education", "Full-Stack"],
    description:
      "Project-based, gamified CS learning platform that helps students build practical programming skills while tracking progress and collaborating with peers. Created for FBLA-2026.",
    stack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Supabase",
      "Zustand",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
    ],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) =>
      project.categories.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-muted/35 py-24 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <AnimatedSection>
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            My Projects
          </div>
          <h2 className="mb-3 text-4xl font-semibold tracking-[-0.02em] text-foreground md:text-5xl">
            A showcase of my work in data, artificial intelligence, and web
            development.
          </h2>
          <p className="mb-10 font-body text-sm text-muted-foreground">
            Each project represents a unique challenge and innovative solution.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`ghost-edge rounded-sm px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "surface-l1 text-muted-foreground hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={150 + index * 50}>
              <article className="ambient-lift surface-l2 ghost-edge h-full rounded-sm p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span
                      key={`${project.title}-${category}`}
                      className="ghost-edge rounded-sm px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-primary"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 font-mono text-xs text-muted-foreground">
                  {project.subtitle}
                </p>
                <p className="mb-5 font-body text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={`${project.title}-${tech}`}
                      className="surface-l1 ghost-edge rounded-sm px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 font-mono text-xs">
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
