import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          badge="Work"
          title="Featured embedded systems projects"
          description="A collection of product-driven firmware, IoT, and wearable development work that demonstrates my engineering approach."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
