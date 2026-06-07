const featuredProjects = [
  {
    title: "IoT Sensor Gateway",
    description: "Firmware and cloud integration for low-power environmental monitoring.",
    tags: ["Embedded C", "MQTT", "Cloud"],
  },
  {
    title: "Robotics Motion Controller",
    description: "Real-time actuator control, sensor fusion, and safety monitoring.",
    tags: ["RTOS", "C++", "Control Systems"],
  },
  {
    title: "Portfolio Website",
    description: "A responsive site to showcase work, skills, and contact options.",
    tags: ["Next.js", "React", "Tailwind"],
  },
];

const skills = [
  "Embedded Systems",
  "Firmware Design",
  "IoT Architecture",
  "Real-time Software",
  "Hardware Debugging",
  "System Design",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16 lg:px-8">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Embedded Software Engineer
          </p>
          <h1 className="text-5xl font-semibold sm:text-6xl">
            I build firmware, IoT systems, and robotics software that connects hardware to meaning.
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            I create reliable embedded systems, deliver low-latency real-time control, and design clean, maintainable software for product-ready hardware.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="/projects" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              View Projects
            </a>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Contact Me
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">What I do</h2>
            <p className="mt-4 text-slate-600 leading-7">
              I focus on embedded firmware, IoT device architecture, and robotics systems. My work balances performance, reliability, and the real-world constraints of hardware.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <div className="mt-6 space-y-4">
              {featuredProjects.map((project) => (
                <div key={project.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-700 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
