import Badge from "@/components/Badge";
import type { ProjectItem } from "@/data/resume";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>

      <p className="mt-4 text-slate-600 leading-7">{project.description}</p>

      <ul className="mt-6 space-y-3 text-slate-700">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-slate-950" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
