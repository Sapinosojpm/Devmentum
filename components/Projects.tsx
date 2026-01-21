import { projectsData } from "@/data/dummy-data";
import type { Project } from "@/data/dummy-data";
import Title from "@/components/Title";
import Image from "next/image";

const CATEGORY_ORDER: { key: Project["category"]; label: string }[] = [
  { key: "web", label: "Web Development" },
  { key: "graphic", label: "Graphic Design" },
  { key: "email", label: "Email Design" },
  { key: "other", label: "Other Projects" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative p-4 rounded-xl border backdrop-blur border-white/8 bg-indigo-950/30">
      <div className="relative w-full h-40 rounded-md mb-4 overflow-hidden">
        <Image
          src={project.imgSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
      <p className="text-sm text-gray-300 mb-3">{project.desc}</p>
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline"
        >
          View Project
        </a>
      ) : null}
    </div>
  );
}

export default function Projects() {
  const groups = CATEGORY_ORDER.map((c) => ({
    key: c.key,
    label: c.label,
    items: projectsData.filter((p) => p.category === c.key),
  }));

  return (
    <section id="projects" className="py-20 bg-white/1 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          title="Projects"
          heading="Showcase of Our Latest Projects"
          description="Explore a selection of our recent projects that highlight our expertise and commitment to excellence."
        />

        {groups.map((group) =>
          group.items.length ? (
            <div key={group.key} className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">{group.label}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {group.items.map((project) => (
                  <div key={project.id}>
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          ) : null,
        )}
      </div>
    </section>
  );
}
