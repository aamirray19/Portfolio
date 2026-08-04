import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Mohammad Aamir Rayyan",
  firstName: "Aamir",
  initials: "AR",
  url: "https://aamirray19.github.io",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune,+Maharashtra,+India",
  description:
    "Software Engineer | Backend, AI & Distributed Systems",
  summary: `
     <p>I like to build backend and AI systems and automate repetitive work.</p>
     <p>Having worked at both startups and MNCs, it has taught me ownership, fast execution, and collaboration.</p>
     <p>Outside of this, it's mostly football, reading, and story mode games.</p>
  `,
  avatarUrl: "/me.jpg",
  skills: [

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://drive.google.com/file/d/1fsAnJqwnpGEf-3dQhXEd9HFQA4wd-PFd/view?usp=sharing", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: "mohaamirray6@gmail.com",
    tel: "9049065533",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aamirray19",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammadaamirrayyan06",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/aamirray19",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mohaamirray6@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Hewlett Packard Enterprise (HPE)",
      href: "https://www.hpe.com/",
      badges: [],
      location: "Pune",
      title: "Technology Consultant Intern",
      logoUrl: "/hpe.png",
      start: "February 2026",
      end: "Present",
      description: [
        "Automated RHEL 9 to 10 migration and CIS OS hardening for United Overseas Bank (UOB) using Chef, reducing audit time by 30% and compliance vulnerabilities by 40% through scalable infrastructure automation.",
        "Developed an AI observability platform that automatically instrumented uploaded Python LLM applications using OpenTelemetry and Langfuse, enabling real-time monitoring of traces, latency, errors, and token usage to accelerate debugging and performance analysis.",
      ],
    },
    {
      company: "Unbox Robotics",
      href: "https://www.unboxrobotics.com/",
      badges: [],
      location: "Pune",
      title: "Software Development Engineer Intern",
      logoUrl: "/unbox_robotics.png",
      start: "June 2025",
      end: "December 2025",
      description: [
        "Automated Robot simulation environment provisioning with Ansible, reducing deployment time by 96% (4 hours to 10 minutes) and accelerating business simulation workflows.",
        "Built a real-time Charging Logger service using FastAPI, CAN bus, and PostgreSQL, enabling continuous charger monitoring and faster root cause analysis for field issues.",
        "Developed a real-time uptime analytics platform to compute and visualize hourly system availability, providing customers with actionable reliability insights and performance visibility.",
      ],
    },
    {
      company: "L3Cube Labs",
      href: "https://ravirajoshi.medium.com/introduction-to-l3cube-48c265f37385",
      badges: [],
      location: "Pune",
      title: "Research Intern",
      logoUrl: "/l3cube.png",
      start: "August 2025",
      end: "June 2026",
      description: [
        "Developed a layout-preserving Marathi-to-English document translation pipeline using Chandra OCR, LLM-based translation, and coordinate-guided text alignment, reconstructing government PDFs while preserving their original formatting and structure.",
        "Built an automated LLM benchmarking framework evaluating 5 open-source models across 6 Indian languages, 4 domains, and 6 prompting strategies to analyze multilingual instruction-following performance.",
      ],
    },
  ],
  education: [
    {
      school: "Pune Institute of Computer Technology, SPPU",
      href: "https://www.pict.edu/",
      degree: "B.E. Computer Engineering",
      logoUrl: "/pict.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Code Quality Intelligence Agent",
      href: "https://github.com/aamirray19/Code-Quality-Intelligence-Analyst",
      dates: "",
      active: true,
      description:
        "An AI-powered code intelligence platform that automates repository analysis using static analysis, multi-agent LLM workflows, and semantic code retrieval. The system indexes repositories, evaluates security, performance, reliability, and maintainability, and generates explainable quality reports with actionable recommendations. It also provides a conversational RAG assistant for grounded codebase exploration and debugging.",
      technologies: [
        "Python",
        "FastAPI",
        "LangGraph",
        "PostgreSQL",
        "Redis",
        "Qdrant",
        "Deepseek",
        "Gemini",
        "Tree-sitter parser",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aamirray19/Code-Quality-Intelligence-Analyst",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cqia.jpeg",
      video: "",
    },
    {
      title: "AI Brand Monitoring Platform",
      href: "https://github.com/aamirray19/AI-visibility-tracker",
      dates: "",
      active: true,
      description:
        "An AI-driven brand visibility platform that continuously evaluates how large language models perceive brands across prompts and competitors. The platform automates prompt generation, executes multi-model analysis, tracks rankings, sentiment, citations, and share of voice, and presents near real-time analytics through an interactive dashboard.",
      technologies: [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Docker",
        "ARQ",
        "LLMs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aamirray19/AI-visibility-tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ai-brand-monitoring.jpeg",
      video: "",
    },
    {
      title: "Eventra (Coming Soon!)",
      href: "",
      dates: "Coming Soon",
      active: true,
      description:
        "Eventra is an AI-powered prediction marketplace that leverages autonomous agents to discover emerging events, analyze relevant information, and create tradable prediction markets. Alongside AI-generated markets, users can launch their own community event markets, allowing others to participate by predicting and staking on outcomes.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://eventra-silk.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/eventra.jpeg",
      video: "",
    },
  ],
  publications: [
    {
      title: "Graph-Based Model for Hindi Text Summarization",
      href: "https://ieeexplore.ieee.org/xpl/conhome/11373938/proceeding",
      dates: "Pune IEEEcon 2025",
      active: true,
      description:
        "A graph-based Hindi text summarization framework that ranks sentences using PageRank over similarity graphs built from lexical, semantic, and embedding-based methods. The study compares traditional similarity, WordNet, and FastText approaches, showing strong ROUGE performance from cosine similarity and improved semantic coverage from WordNet.",
      technologies: ["NLP", "Graph Algorithms", "PageRank", "FastText", "WordNet"],
      links: [
        {
          type: "PDF",
          href: "https://drive.google.com/file/d/10tW-HV8nqH-aUdc1kIa5aooIeadUrbgg/view?usp=drivesdk",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Publication",
          href: "https://ieeexplore.ieee.org/xpl/conhome/11373938/proceeding",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title:
        "Structure-Preserving Document Translation via Multi-Stage LLM Pipeline: A Case Study in Marathi",
      href: "https://arxiv.org/abs/2606.28796",
      dates: "June 27, 2026",
      active: true,
      description:
        "A multi-stage LLM pipeline for translating documents into Marathi while preserving original layout and structure, addressing the loss of formatting common in direct machine translation approaches.",
      technologies: ["LLM", "NLP", "Machine Translation", "Marathi"],
      links: [
        {
          type: "PDF",
          href: "https://drive.google.com/file/d/1T1_7g-W4JuytO99TYxZWZnVukXkENXRK/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Publication",
          href: "https://arxiv.org/abs/2606.28796",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
