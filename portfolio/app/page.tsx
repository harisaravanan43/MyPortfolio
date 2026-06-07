import Link from "next/link";
import Badge from "@/components/Badge";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { profile, projects, skills } from "@/data/resume";

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 rounded-[3rem] bg-white p-10 shadow-xl ring-1 ring-slate-200 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Embedded Software Engineer</p>
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                I build embedded firmware, IoT systems, and real-time products for hardware-first teams.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">{profile.summary}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="inline-flex rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                View Projects
              </Link>
              <Link href="/contact" className="inline-flex rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                Contact Me
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-xl font-semibold text-slate-950">Core strengths</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.slice(0, 4).flatMap((group) => group.items.slice(0, 2)).map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-xl font-semibold text-slate-950">Contact</h2>
                <div className="mt-4 space-y-3 text-slate-600">
                  <p>{profile.contact.location}</p>
                  <p>{profile.contact.email}</p>
                  <p>{profile.contact.phone}</p>
                  <p>linkedin.com/in/{profile.contact.linkedIn}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Featured work</p>
              <h2 className="mt-4 text-3xl font-semibold">Selected projects</h2>
              <p className="mt-4 text-slate-300 leading-7">
                Projects that show how I bring firmware, hardware, and software together in real products.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {featuredProjects.map((project) => (
                  <Badge key={project.title} variant="soft">
                    {project.title}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <SectionHeading
          title="Technical skills"
          description="A set of embedded and systems engineering capabilities that support scalable firmware and product development."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">{skillGroup.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
