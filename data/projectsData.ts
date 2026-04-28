import type { Project } from "@/types/server";

const projectsData: Project[] = [
  {
    type: "self",
    title: "DUYA",
    description:
      "Desktop AI Agent framework (Electron + Vite) with hydrology-domain knowledge base and multi-tool orchestration for autonomous satellite data retrieval and flood warning workflows.",
    repo: "lava-chen/duya",
    builtWith: ["Electron", "Vite", "TypeScript", "Python", "LangChain"],
    imgSrc: "",
    url: "",
  },
  {
    type: "self",
    title: "HydroArray",
    description:
      "Python hydrology algorithm library integrating common hydrological models (新安江模型, 坦克模型) and ML models (LSTM, Transformer) with standardized data interfaces.",
    repo: "lava-chen/HydroArray",
    builtWith: ["Python", "PyTorch", "NumPy"],
    imgSrc: "",
    url: "",
  },
  {
    type: "self",
    title: "Personal Website",
    description:
      "This website — built with Next.js, featuring dark/pink theme toggle, blog system, and project showcase.",
    repo: "lava-chen/lava-chen.github.io",
    builtWith: ["Next.js", "Tailwind", "TypeScript", "Vercel"],
    imgSrc: "",
    url: "https://lavachen.org",
  },
  {
    type: "self",
    title: "FloodApp",
    description:
      "Real-time flood monitoring app integrating satellite precipitation and gauge data for operational flood warning.",
    repo: "",
    builtWith: ["React", "Node.js", "MongoDB"],
    imgSrc: "",
    url: "",
  },
];

export default projectsData;
