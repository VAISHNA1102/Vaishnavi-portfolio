"use client";

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
} from "lucide-react";

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
    image: "/projects/railway.jpg",
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
    image: "/projects/interview.jpg",
    github: "#",
    live: "#",
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
    image: "/projects/EduTech.jpg",
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
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070707] text-white selection:bg-purple-500/40">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute right-[5%] top-[45%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#070707]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <button
            onClick={() => scrollTo("home")}
            className="text-lg font-bold tracking-tight"
          >
            VAISHNAVI<span className="text-purple-400">.</span>
          </button>

          <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
            <button onClick={() => scrollTo("about")} className="hover:text-white">
              About
            </button>
            <button
              onClick={() => scrollTo("experience")}
              className="hover:text-white"
            >
              Experience
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="hover:text-white"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo("achievements")}
              className="hover:text-white"
            >
              Achievements
            </button>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-purple-400 hover:bg-purple-400 hover:text-black"
          >
            Let&apos;s Connect
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 md:px-10"
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 flex items-center gap-3 text-sm text-purple-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>

            <p className="mb-5 text-sm tracking-[0.3em] text-gray-500">
              HELLO, I&apos;M
            </p>

            <h1 className="text-6xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl">
              Vaishnavi
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-white to-gray-500 bg-clip-text text-transparent">
                Sirimalla.
              </span>
            </h1>

            <div className="mt-8 max-w-xl">
              <h2 className="text-xl font-medium text-gray-300 md:text-2xl">
                Full Stack Developer <span className="text-purple-400">×</span>{" "}
                AI Builder
              </h2>

              <p className="mt-5 text-base leading-relaxed text-gray-400 md:text-lg">
                I enjoy turning ideas into scalable digital products — from
                robust Java and JavaScript applications to intelligent systems
                powered by AI.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-black transition hover:bg-purple-400"
              >
                Explore My Work
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <a
                href="/resume.pdf"
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm transition hover:border-white hover:bg-white/5"
              >
                <Download size={17} />
                Resume
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {["Java", "Spring Boot", "React", "Node.js", "AI/ML"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-400"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-tr from-purple-600/30 via-blue-500/10 to-transparent blur-2xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.01]">
              {/* Replace profile.jpg with your image */}
              <img
                src="/profile/profile.jpeg"
                alt="Vaishnavi Sirimalla" 
                className="w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#111]/90 px-5 py-4 backdrop-blur-xl">
              <p className="text-xs text-gray-500">FOCUS</p>
              <p className="mt-1 font-medium">Full Stack + AI</p>
            </div>
          </motion.div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition hover:text-white"
        >
          <ArrowDown className="animate-bounce" size={23} />
        </button>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/[0.07] px-6 py-28 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel number="01" title="ABOUT" />

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              I like building things that live{" "}
              <span className="text-gray-500">beyond the screen.</span>
            </h2>

            <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-gray-400">
              <p>
                My journey in technology started with curiosity about how
                software works and evolved into a passion for building complete
                products.
              </p>

              <p>
                Today, I work across the stack — designing responsive interfaces,
                building backend services, connecting databases, and exploring
                how AI can make applications more useful.
              </p>

              <p>
                I&apos;m particularly interested in the space where strong
                software engineering meets intelligent systems.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Stat number="5+" label="Projects Built" />
              <Stat number="Full Stack" label="Development Focus" />
              <Stat number="AI + Web" label="Building Direction" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-t border-white/[0.07] px-6 py-28 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel number="02" title="EXPERIENCE" />

          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Learning by <span className="text-gray-500">building.</span>
            </h2>

            <div className="mt-14 border-l border-purple-500/30 pl-8">
              <div className="relative">
                <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-[#070707] bg-purple-400" />

                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <p className="text-sm text-purple-400">
                      JULY 2025 — AUGUST 2026
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold">
                      Software Engineer
                    </h3>
                    <p className="mt-1 text-gray-500">Capgemini</p>
                  </div>

                  <span className="h-fit rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
                    Full Stack Engineering
                  </span>
                </div>

                <p className="mt-7 max-w-2xl leading-relaxed text-gray-400">
                  Contributed to full-stack applications and backend services,
                  working across APIs, responsive interfaces, databases,
                  authentication, validation, testing, and collaborative software
                  development practices.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Java",
                    "Spring Boot",
                    "React",
                    "REST APIs",
                    "JPA",
                    "Hibernate",
                    "Testing",
                  ].map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/[0.07] px-6 py-28 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="03" title="SELECTED WORK" />

          <div className="mt-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Projects that helped me{" "}
              <span className="text-gray-500">learn by doing.</span>
            </h2>

            <p className="max-w-sm text-gray-500">
              A mix of AI experiments, Java full-stack systems, and modern web
              applications.
            </p>
          </div>

          <div className="mt-16 space-y-24">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-t border-white/[0.07] px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="04" title="TOOLBOX" />

          <h2 className="mt-12 text-4xl font-semibold tracking-tight md:text-6xl">
            Technologies I enjoy <span className="text-gray-500">working with.</span>
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={skill.title}
                  className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition hover:border-purple-400/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-purple-500/10 p-3 text-purple-300">
                      <Icon size={21} />
                    </div>

                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section
        id="achievements"
        className="border-t border-white/[0.07] px-6 py-28 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="05" title="ACHIEVEMENTS" />

          <h2 className="mt-12 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Beyond writing <span className="text-gray-500">code.</span>
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <AchievementCard
              icon={Award}
              title="AWS Certified"
              description="Earned the AWS Certified Cloud Practitioner certification, strengthening my understanding of cloud fundamentals and modern cloud concepts."
            />

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
      <section className="border-t border-white/[0.07] px-6 py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel number="06" title="EDUCATION" />

          <div>
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-10">
              <GraduationCap className="text-purple-400" size={30} />

              <p className="mt-8 text-sm tracking-[0.2em] text-gray-500">
                2021 — 2025
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Artificial Intelligence
                <br />& Machine Learning
              </h2>

              <p className="mt-5 text-lg text-gray-400">
                Thakur College of Engineering and Technology
              </p>

              <div className="mt-8 inline-flex rounded-full border border-purple-400/20 bg-purple-400/5 px-5 py-2 text-purple-300">
                CGPA — 9.1 / 10
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/[0.07] px-6 py-32 md:px-10"
      >
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[160px]" />

        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm tracking-[0.25em] text-purple-400">
            LET&apos;S CONNECT
          </p>

          <h2 className="mt-7 text-5xl font-semibold tracking-tight md:text-8xl">
            Have an idea?
            <br />
            <span className="text-gray-500">Let&apos;s build it.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-gray-400">
            I&apos;m always interested in exciting opportunities, meaningful
            collaborations, and conversations around technology.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sirimallavaishnavi@gmail.com"
              className="flex items-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-purple-400"
            >
              <Mail size={18} />
              Send me an email
            </a>

            <a
              href="https://www.linkedin.com/in/vaishnavi-sirimalla-89351322b/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-7 py-4 transition hover:border-white hover:bg-white/5"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/VAISHNA1102"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-7 py-4 transition hover:border-white hover:bg-white/5"
            >
              GitHub ↗
            </a>

            <a
              href="https://leetcode.com/u/Vaishnavi_05/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-7 py-4 transition hover:border-white hover:bg-white/5"
            >
              LeetCode ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-gray-600 md:flex-row">
          <p>© 2026 Vaishnavi Sirimalla</p>
          <p>Designed & built with curiosity ✦</p>
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
      <span className="text-xs tracking-[0.25em] text-gray-500">{title}</span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/[0.09] bg-white/[0.02] px-3 py-1.5 text-xs text-gray-400">
      {children}
    </span>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
      <p className="text-xl font-semibold">{number}</p>
      <p className="mt-1 text-xs text-gray-500">{label}</p>
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
      className={`grid items-center gap-10 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* IMAGE */}
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br ${project.accent}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-center backdrop-blur-md">
            <p className="text-sm font-medium">{project.title}</p>
            <p className="mt-1 text-xs text-gray-500">
              Add image: {project.image}
            </p>
          </div>
        </div>

        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-gray-300 backdrop-blur-md">
          {project.number}
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <p className="text-xs tracking-[0.2em] text-purple-400">
          {project.category}
        </p>

        <h3 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-xl leading-relaxed text-gray-400">
          {project.description}
        </p>

        <div className="mt-7 space-y-3">
          {project.highlights.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-gray-400">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div className="mt-9 flex gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-purple-400"
          >
            Code <ExternalLink size={15} />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-purple-400"
          >
            Live Demo <ArrowUpRight size={16} />
          </a>
        </div>
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
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition hover:border-purple-400/30"
    >
      <div className="inline-flex rounded-xl bg-purple-500/10 p-3 text-purple-300">
        <Icon size={23} />
      </div>

      <h3 className="mt-6 text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-relaxed text-gray-400">{description}</p>
    </motion.div>
  );
}