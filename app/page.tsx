"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Download,
  Code2,
  Brain,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Sparkles,
  ExternalLink,
  X,
  ZoomIn,
} from "lucide-react";
import ThemeToggle from "../app/components/ThemeToggle";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const projects = [
  {
    number: "01",
    title: "Mockify.AI",
    category: "AI • RAG • EDUCATION",
    description:
      "An intelligent learning platform that transforms study material into personalized practice experiences. Built to make revision more interactive using retrieval-augmented generation, semantic search, and AI-powered assistance.",
    highlights: [
      "AI-generated personalized mock tests",
      "Semantic document search",
      "OCR support for images and PDFs",
      "Context-aware doubt resolution",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "RAG",
      "LLMs",
      "PostgreSQL",
      "pgvector",
    ],
    image: "/projects/Mockify-AI.png",
    github: "https://github.com/VAISHNA1102/Mockify.AI",
    live: "https://mockify-ai-theta.vercel.app/",
    accent: "from-violet-500/30 via-purple-500/10 to-transparent",
  },
  {
    number: "02",
    title: "Expensync",
    category: "FULL STACK • AI • FINTECH",
    description:
      "A smart personal finance companion designed to simplify expense tracking. It combines full-stack development, receipt intelligence, natural language input, and machine learning to help users understand their financial habits.",
    highlights: [
      "Smart transaction management",
      "Receipt scanning with OCR",
      "ML-based expense categorization",
      "Expense forecasting and insights",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "Flask",
      "Machine Learning",
    ],
    image: "/projects/Expensync.png",
    github: "https://github.com/VAISHNA1102/Expensync",
    live: "https://expensync-cyan.vercel.app/",
    accent: "from-cyan-500/30 via-blue-500/10 to-transparent",
  },
  {
    number: "03",
    title: "Railway Reservation System",
    category: "JAVA FULL STACK",
    description:
      "A full-stack railway booking system built around real-world booking workflows. The application handles user management, train discovery, reservations, cancellations, and payment flows through a service-oriented architecture.",
    highlights: [
      "Train search and reservation workflows",
      "Microservices-based architecture",
      "RESTful service integration",
      "Online payment integration",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "Microservices",
      "Docker",
    ],
    image: "/projects/RRS.png",
    github: "https://github.com/VAISHNA1102/RailwayReservationSystem",
    live: "https://github.com/VAISHNA1102/RailwayReservationSystem",
    accent: "from-orange-500/30 via-red-500/10 to-transparent",
  },
  {
    number: "04",
    title: "Interview Tracking System",
    category: "JAVA FULL STACK",
    description:
      "A structured platform for managing candidates and interview workflows. Designed with a focus on reliable backend services, clean API integration, and code quality.",
    highlights: [
      "Candidate and interview management",
      "REST API architecture",
      "Responsive React interface",
      "Unit testing and code quality analysis",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "JUnit",
      "Mockito",
      "SonarQube",
    ],
    image: "/projects/ITS.png",
    github: "https://github.com/VAISHNA1102",
    live: "https://github.com/VAISHNA1102",
    accent: "from-emerald-500/30 via-teal-500/10 to-transparent",
  },
  {
    number: "05",
    title: "EduTechHub",
    category: "FULL STACK • EDUCATION",
    description:
      "An online learning ecosystem focused on connecting students and instructors through secure authentication, course discovery, learning progress, and dedicated dashboards.",
    highlights: [
      "Role-based authentication",
      "Student and instructor dashboards",
      "Course discovery and search",
      "Learning progress tracking",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/projects/EduTech.png",
    github: "https://github.com/VAISHNA1102/EduTechHub",
    live: "https://edu-tech-hub.vercel.app/",
    accent: "from-pink-500/30 via-rose-500/10 to-transparent",
  },
];

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: BriefcaseBusiness,
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JPA",
      "Hibernate",
    ],
  },
  {
    title: "AI & Intelligence",
    icon: Brain,
    items: [
      "Machine Learning",
      "Generative AI",
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "OCR",
      "Python",
    ],
  },
  {
    title: "Data & Tools",
    icon: Sparkles,
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "pgvector",
      "Git",
      "GitHub",
      "Postman",
      "Docker",
    ],
  },
];

export default function Home() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeLightbox();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] selection:bg-purple-500/40">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute right-[5%] top-[45%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              aria-label="Close certificate preview"
              className="absolute -right-3 -top-3 z-10 rounded-full bg-[var(--background)] border border-[var(--border-strong)] p-2 text-[var(--foreground)] transition hover:bg-purple-400 hover:text-white"
            >
              <X size={18} />
            </button>
            <img
              src={lightbox}
              alt="Certificate"
              className="w-full h-auto max-h-[85vh] rounded-2xl border border-[var(--border)] object-contain shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
          <button
            onClick={() => scrollTo("home")}
            className="text-base font-bold tracking-tight sm:text-lg"
          >
            VAISHNAVI<span className="text-purple-400">.</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
            <button onClick={() => scrollTo("about")} className="transition hover:text-[var(--foreground)]">About</button>
            <button onClick={() => scrollTo("experience")} className="transition hover:text-[var(--foreground)]">Experience</button>
            <button onClick={() => scrollTo("projects")} className="transition hover:text-[var(--foreground)]">Projects</button>
            <button onClick={() => scrollTo("achievements")} className="transition hover:text-[var(--foreground)]">Achievements</button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button
              onClick={() => scrollTo("contact")}
              className="hidden rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm transition hover:border-purple-400 hover:bg-purple-400 hover:text-black sm:block sm:px-5 sm:py-2.5"
            >
              Let&apos;s Connect
            </button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex flex-col gap-1.5 p-2 md:hidden"
            >
              <span className={`block h-0.5 w-5 bg-current transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-[var(--border)] bg-[var(--background)]/95 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-[var(--muted)]">
              {["about","experience","projects","achievements","contact"].map((id) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-left capitalize transition hover:text-[var(--foreground)]">
                  {id}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-20 sm:px-6 md:px-10"
      >
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-3 text-xs text-purple-400 sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>

            <p className="mb-4 text-xs tracking-[0.3em] text-[var(--muted)] sm:text-sm">
              HELLO, I&apos;M
            </p>

            <h1 className="text-5xl font-bold leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              Vaishnavi
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-gray-600 dark:from-purple-500  dark:to-gray-600 bg-clip-text text-transparent">
                Sirimalla.
              </span>
            </h1>

            <div className="mt-6 max-w-xl">
              <h2 className="text-lg font-medium text-[var(--muted-strong)] sm:text-xl md:text-2xl">
                Full Stack Developer <span className="text-purple-400">×</span>{" "}
                AI Builder
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base md:text-lg">
                I enjoy turning ideas into scalable digital products - from
                robust Java and JavaScript applications to intelligent systems
                powered by AI.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="group flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:bg-purple-400 sm:px-6 sm:py-3.5"
              >
                Explore My Work
                <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-3 text-sm transition hover:border-purple-400 hover:bg-purple-400/5 sm:px-6 sm:py-3.5"
              >
                <Download size={15} />
                Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React", "Node.js", "AI/ML"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <SocialIcons />
            </div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
          >
            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-tr from-purple-600/30 via-blue-500/10 to-transparent blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-gradient-to-br from-purple-500/10 to-transparent sm:rounded-[2.5rem]">
              <img
                src="/profile/profile.jpeg"
                alt="Vaishnavi Sirimalla"
                className="h-full w-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-[var(--border-strong)] bg-[var(--background)]/90 px-4 py-3 backdrop-blur-xl sm:-bottom-5 sm:-left-5 sm:rounded-2xl sm:px-5 sm:py-4">
              <p className="text-xs text-[var(--muted)]">FOCUS</p>
              <p className="mt-0.5 text-sm font-medium sm:mt-1">Full Stack + AI</p>
            </div>
          </motion.div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--muted)] transition hover:text-[var(--foreground)]"
        >
          <ArrowDown className="animate-bounce" size={22} />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-[var(--border)] px-4 py-20 sm:px-6 sm:py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel number="01" title="ABOUT" />
          <div>
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              I like building things that live{" "}
              <span className="text-[var(--muted)]">beyond the screen.</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              <p>My journey in technology started with curiosity about how software works and evolved into a passion for building complete products.</p>
              <p>Today, I work across the stack - designing responsive interfaces, building backend services, connecting databases, and exploring how AI can make applications more useful.</p>
              <p>I&apos;m particularly interested in the space where strong software engineering meets intelligent systems.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Stat number="5+" label="Projects Built" />
              <Stat number="Full Stack" label="Development Focus" />
              <Stat number="AI + Web" label="Building Direction" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-[var(--border)] px-4 py-20 sm:px-6 sm:py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel number="02" title="EXPERIENCE" />
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Learning by <span className="text-[var(--muted)]">building.</span>
            </h2>

            <div className="mt-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 sm:px-5">
                  <h1 className="text-xl font-bold sm:text-2xl">Capgemini</h1>
                  <p className="text-xs text-[var(--muted)]">Feb 2025 - Aug 2026</p>
                </div>
                <span className="h-px flex-1 bg-purple-500/20" />
              </div>

              <div className="border-l border-purple-500/30 pl-6 space-y-8 sm:pl-8 sm:space-y-10">
                <div className="relative">
                  <span className="absolute -left-[33px] top-2 h-4 w-4 rounded-full border-4 border-[var(--background)] bg-purple-400 sm:-left-[41px]" />
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs text-purple-400 tracking-widest">25 JULY 2025 - 28 AUGUST 2026</p>
                      <h3 className="mt-1.5 text-xl font-semibold sm:text-2xl">Software Engineer</h3>
                    </div>
                    <span className="h-fit w-fit rounded-full border border-[var(--border-strong)] px-3 py-1 text-xs text-[var(--muted)]">Full-Time</span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    Worked on full-stack applications and backend services, contributing across REST APIs, responsive interfaces, databases, authentication, and testing.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[33px] top-2 h-4 w-4 rounded-full border-4 border-[var(--background)] bg-purple-400/50 sm:-left-[41px]" />
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs text-purple-400 tracking-widest">FEBRUARY 2025 - JUNE 2025</p>
                      <h3 className="mt-1.5 text-xl font-semibold sm:text-2xl">Software Engineer Intern</h3>
                    </div>
                    <span className="h-fit w-fit rounded-full border border-[var(--border-strong)] px-3 py-1 text-xs text-[var(--muted)]">Internship</span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    Built and integrated full-stack features using Java and React, gaining hands-on experience with JPA, Hibernate, REST APIs, and collaborative development workflows.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 pl-6 sm:pl-8">
                {["Java","Spring Boot","React","REST APIs","JPA","Hibernate","Testing"].map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>

              <div className="mt-6 pl-6 sm:pl-8">
                <a
                  href="/Capgemini_ExperienceLetter.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-sm transition hover:border-purple-400 hover:bg-purple-400/5"
                >
                  <ExternalLink size={14} />
                  View Experience Letter
                </a>
                <a
                  href="/Capgemini_ExperienceLetter.pdf"
                  download
                  className="ml-3 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-sm transition hover:border-purple-400 hover:bg-purple-400/5"
                >
                  <Download size={14} />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-[var(--border)] px-4 py-20 sm:px-6 sm:py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="03" title="SELECTED WORK" />
          <div className="mt-10 flex flex-col justify-between gap-5 sm:mt-12 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Projects that helped me{" "}
              <span className="text-[var(--muted)]">learn by doing.</span>
            </h2>
            <p className="max-w-sm text-sm text-[var(--muted)] sm:text-base">
              A mix of AI experiments, Java full-stack systems, and modern web applications.
            </p>
          </div>
          <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} reverse={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-t border-[var(--border)] px-4 py-20 sm:px-6 sm:py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="04" title="TOOLBOX" />
          <h2 className="mt-10 text-3xl font-semibold tracking-tight sm:mt-12 sm:text-4xl md:text-5xl lg:text-6xl">
            Technologies I enjoy <span className="text-[var(--muted)]">working with.</span>
          </h2>
          <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={skill.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition hover:border-purple-400/30 sm:rounded-3xl sm:p-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-purple-500/10 p-2.5 text-purple-400 sm:p-3">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold sm:text-xl">{skill.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
                    {skill.items.map((item) => <Tag key={item}>{item}</Tag>)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="border-t border-[var(--border)] px-4 py-20 sm:px-6 sm:py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="05" title="ACHIEVEMENTS" />
          <h2 className="mt-10 max-w-4xl text-3xl font-semibold tracking-tight sm:mt-12 sm:text-4xl md:text-5xl lg:text-6xl">
            Beyond writing <span className="text-[var(--muted)]">code.</span>
          </h2>

          {/* Certificate cards */}
          <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 sm:grid-cols-2">
            <CertificateCard
              image="/certificates/AWS.png"
             
              title="AWS Certified Cloud Practitioner"
              provider="Amazon Web Services"
              description="Strengthened understanding of cloud fundamentals, core AWS services, security, and modern cloud architecture concepts."
              onView={setLightbox}
            />
            <CertificateCard
              image="/certificates/JavaFS.png"
              title="Java Full Stack Development"
              provider="Spark 2.0"
              description="Completed an intensive Java Full Stack program covering Spring Boot, React, REST APIs, JPA, Hibernate, and enterprise development practices."
              onView={setLightbox}
            />
            
            <CertificateCard
              image="/certificates/OceanC.png"
              title="Ocean Certified Java Full Stack Developer"
              provider="Capgemini"
              description="Achieved Grade A4 under Capgemini’s OCEAN Program, certified in Java Full Stack – React, demonstrating proficiency in full-stack application development with Java and React."
              onView={setLightbox}
            />
          </div>

          {/* Other achievements */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <AchievementCard
              icon={Sparkles}
              title="Community Builder"
              description="Building and contributing to a developer community centered around collaboration, open source, hackathons, technical discussions, podcasts, and meetups."
            />
            <AchievementCard
              icon={Brain}
              title="Continuous Learner"
              description="Focused on learning through hands-on projects, experimentation, and consistently exploring new technologies across full-stack development and AI."
            />
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-t border-[var(--border)] px-4 py-20 sm:px-6 sm:py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel number="06" title="EDUCATION" />
          <div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:rounded-3xl sm:p-8 md:p-10">
              <GraduationCap className="text-purple-400" size={28} />
              <p className="mt-6 text-xs tracking-[0.2em] text-[var(--muted)] sm:mt-8 sm:text-sm">2021 - 2025</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
                Artificial Intelligence
                <br />&amp; Machine Learning
              </h2>
              <p className="mt-4 text-base text-[var(--muted)] sm:text-lg">Thakur College of Engineering and Technology</p>
              <div className="mt-6 inline-flex rounded-full border border-purple-400/20 bg-purple-400/5 px-4 py-1.5 text-sm text-purple-400 sm:px-5 sm:py-2">
                CGPA - 9.1 / 10
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden border-t border-[var(--border)] px-4 py-24 sm:px-6 sm:py-32 md:px-10">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[160px] sm:h-[500px] sm:w-[500px]" />
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs tracking-[0.25em] text-purple-400 sm:text-sm">LET&apos;S CONNECT</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:mt-7 sm:text-5xl md:text-6xl lg:text-8xl">
            Have an idea?
            <br />
            <span className="text-[var(--muted)]">Let&apos;s build it.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-[var(--muted)] sm:mt-8 sm:text-base">
            I&apos;m always interested in exciting opportunities, meaningful collaborations, and conversations around technology.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">
            <a
              href="mailto:sirimallavaishnavi@gmail.com"
              className="flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition hover:bg-purple-400 sm:px-7 sm:py-4"
            >
              <Mail size={16} />
              Send me an email
            </a>
          </div>
          <div className="mt-6 flex justify-center sm:mt-8">
            <SocialIcons size={22} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border)] px-4 py-6 sm:px-6 sm:py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-[var(--muted)] sm:flex-row sm:text-sm">
          <p>&copy; 2026 Vaishnavi Sirimalla</p>
          
          <p>Designed &amp; built with curiosity &#10022;</p>
        </div>
      </footer>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function SectionLabel({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 self-start">
      <span className="text-sm text-purple-400">{number}</span>
      <span className="h-px w-10 bg-purple-400/50" />
      <span className="text-xs tracking-[0.25em] text-[var(--muted)]">{title}</span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs text-[var(--muted)]">
      {children}
    </span>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
      <p className="text-xl font-semibold">{number}</p>
      <p className="mt-1 text-xs text-[var(--muted)]">{label}</p>
    </div>
  );
}

function ProjectCard({
  project,
  reverse,
}: {
  project: (typeof projects)[0];
  reverse: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`grid items-center gap-8 sm:gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br sm:rounded-3xl ${project.accent}`}>
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--background)]/20">
          <div className="rounded-xl border border-[var(--border-strong)] bg-[var(--background)]/60 px-4 py-3 text-center backdrop-blur-md sm:px-5 sm:py-4">
            <p className="text-sm font-medium">{project.title}</p>
          </div>
        </div>
        <div className="absolute left-4 top-4 rounded-full border border-[var(--border-strong)] bg-[var(--background)]/70 px-3 py-1 text-xs text-[var(--muted)] backdrop-blur-md">
          {project.number}
        </div>
      </div>

      <div>
        <p className="text-xs tracking-[0.2em] text-purple-400">{project.category}</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">{project.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:mt-5 sm:text-base">{project.description}</p>
        <div className="mt-5 space-y-2 sm:mt-7 sm:space-y-3">
          {project.highlights.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
          {project.tech.map((item) => <Tag key={item}>{item}</Tag>)}
        </div>
        <div className="mt-7 flex flex-wrap gap-4 sm:mt-9">
          <a href={project.github} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--muted-strong)] transition hover:text-purple-400">
            Code <ExternalLink size={15} />
          </a>
          <a href={project.live} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--muted-strong)] transition hover:text-purple-400">
            Live Demo <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function CertificateCard({
  image, title, provider, description, onView,
}: {
  image: string;
  title: string;
  provider: string;
  description: string;
  onView: (src: string) => void;
}) {
  const [missing, setMissing] = useState(false);
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition hover:border-purple-400/40 sm:rounded-3xl"
    >
      <button
        onClick={() => !missing && onView(image)}
        aria-label={`View ${title} certificate`}
        disabled={missing}
        className="group relative block w-full overflow-hidden disabled:cursor-default"
      >
        <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--card)]">
          {missing ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--muted)]">
              <Award size={32} className="opacity-30" />
              <p className="text-xs opacity-50">Place image at {image}</p>
            </div>
          ) : (
            <img
              src={image}
              alt={`${title} certificate`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              onError={() => setMissing(true)}
            />
          )}
        </div>
        {!missing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
            <span className="flex items-center gap-2 rounded-full bg-[var(--background)]/90 px-4 py-2 text-xs font-medium opacity-0 transition group-hover:opacity-100">
              <ZoomIn size={14} /> View Certificate
            </span>
          </div>
        )}
      </button>
      <div className="p-5 sm:p-6">
        <p className="text-xs tracking-widest text-purple-400">{provider}</p>
        <h3 className="mt-1.5 text-lg font-semibold sm:text-xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
      </div>
    </motion.div>
  );
}

function AchievementCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition hover:border-purple-400/30 sm:rounded-3xl sm:p-7"
    >
      <div className="inline-flex rounded-xl bg-purple-500/10 p-2.5 text-purple-400 sm:p-3">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 text-xl font-semibold sm:mt-6 sm:text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:mt-4 sm:text-base">{description}</p>
    </motion.div>
  );
}

function SocialIcons({ size = 19 }: { size?: number }) {
  const links = [
    { 
      href: "mailto:sirimallavaishnavi@gmail.com", 
      label: "Email", 
      icon: MdEmail, 
      external: false 
    },
    { 
      href: "https://github.com/VAISHNA1102", 
      label: "GitHub", 
      icon: SiGithub, 
      external: true 
    },
    { 
      href: "https://www.linkedin.com/in/vaishnavi-sirimalla-89351322b/", 
      label: "LinkedIn", 
      icon: FaLinkedin, 
      external: true 
    },
    { 
      href: "https://leetcode.com/u/Vaishnavi_05/", 
      label: "LeetCode", 
      icon: SiLeetcode, 
      external: true 
    },
    { 
      href: "https://www.instagram.com/vaishna_11.02/", 
      label: "Instagram", 
      icon: FaInstagram, 
      external: true 
    },
    { 
      href: "https://x.com/VaishnaviS1105", 
      label: "Twitter", 
      icon: FaXTwitter, 
      external: true 
    },
  ];
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {links.map(({ href, label, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-2.5 text-[var(--muted)] transition hover:border-purple-400 hover:bg-purple-400/10 hover:text-purple-400"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}