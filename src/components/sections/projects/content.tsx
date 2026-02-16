"use client";

import { ProjectCard } from "./project-card";

interface ProjectDef {
  code: string;
  image: string;
  link: string;
}

const projects: ProjectDef[] = [
  {
    code: "arthurhauenstein",
    image: "/images/projects/arthurhauenstein.png",
    link: "https://arthurhauenstein.com",
  },
  {
    code: "carraroplastica",
    image: "/images/projects/carraroplastica.png",
    link: "https://carraroplastica.com",
  },
];

export function Content() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pb-16">
      {projects.map((project, index) => (
        <ProjectCard key={project.code} index={index} {...project} />
      ))}
    </div>
  );
}
