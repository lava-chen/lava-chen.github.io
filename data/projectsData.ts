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
    title: "pi-dag",
    description:
      "Declarative DAG orchestration engine for multi-agent pipelines and hybrid AI+deterministic workflows, with YAML-defined agent/command nodes, structured output validation, feedback loops, and an interactive TUI browser.",
    repo: "lava-chen/pi-dag",
    builtWith: ["TypeScript", "YAML", "Bun", "Node.js"],
    imgSrc: "",
    url: "",
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
