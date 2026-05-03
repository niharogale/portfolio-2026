// ===========================================
// PORTFOLIO DATA - EDIT YOUR INFORMATION HERE
// ===========================================

export const personalInfo = {
  name: "Nihar Ogale",
  title: "Software Engineer",
  email: "ogalenihar@gmail.com",
};

export const socialLinks = {
  github: "https://github.com/niharogale",
  linkedin: "https://linkedin.com/in/nihar-ogale",
  resume: "/resume.pdf", // Place your resume in the public folder
};

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  description?: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Amazon Web Services",
    role: "Software Engineering Intern",
    period: "May 2025 — Aug. 2025",
  },
  {
    id: "exp-2",
    company: "University of Michigan PURE-ECE",
    role: "Artificial Intelligence Researcher",
    period: "Sep. 2024 — May 2025",
  },
  {
    id: "exp-3",
    company: "University of Michigan Radiological Health and Science Lab",
    role: "Research Assistant",
    period: "Dec. 2023 — Sep. 2024",
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "High-Performance GPU Convolution Kernel",
    description: "Optimized a CNN forward-pass CUDA kernel, slashing execution time from 13s to 30ms by bypassing memory bottlenecks. Achieved 90% SM occupancy and 83.8% FMA utilization via spatial coarsening and register-level optimization.",
    technologies: ["C++", "CUDA", "Parallel Computing", "Memory Management"],
    featured: true,
  },
  {
    id: "proj-2",
    title: "Sharded Paxos Key-Value Store",
    description: "Engineered a highly available, sharded distributed key-value store utilizing the Paxos consensus protocol to orchestrate robust state replication and ensure strict linearizability under network partitions and simulated node crashes.",
    technologies: ["Go", "Distributed Systems", "Networking", "Concurrency"],
    featured: true,
  },
  {
    id: "proj-3",
    title: "User-Level Threading & Synchronization Library",
    description: "Architected a preemptive user-level threading library from scratch. Implemented custom CPU context switching, precise register state management, and rigorous synchronization primitives (mutexes, condition variables) to eliminate race conditions.",
    technologies: ["C++", "Linux", "Systems Programming", "OS Architecture"],
    featured: true,
  },
  {
    id: "proj-4",
    title: "Lighthouse",
    description: "An AI agent system designed to make the open-source contribution process seamless. Built a custom Scout MCP server to map repositories, analyze developer patterns, and match developers with optimal contribution opportunities.",
    technologies: ["Python", "Model Context Protocol (MCP)", "LangChain"],
    githubUrl: "https://github.com/niharogale/Open-Source-Light-House",
  },
  {
    id: "proj-5",
    title: "Smart Cards",
    description: "An intelligent study platform that automatically generates custom flashcards and practice exams from uploaded course materials, utilizing language models to extract key concepts and streamline the active recall process.",
    technologies: ["TypeScript", "Next.js", "AI Integration", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/niharogale/ai_flashcards_stripe",
  },
  {
    id: "proj-6",
    title: "Perfect Pong",
    description: "A hardware-software integration project utilizing a Raspberry Pi and a 1-D gantry system to catch moving objects in real-time. Engineered a computer vision pipeline using OpenCV with HSV color masking and a custom one-shot prediction algorithm.",
    technologies: ["Python", "OpenCV", "Raspberry Pi", "Arduino", "CV"],
  },
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
];
