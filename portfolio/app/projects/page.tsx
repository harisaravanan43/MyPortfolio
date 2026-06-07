const projects = [
  {
    title: "IoT Sensor Gateway",
    overview: "Designed firmware and backend integration for a low-power environmental monitoring system.",
    details: ["MQTT data streaming", "Battery-efficient sleep modes", "Over-the-air updates"],
  },
  {
    title: "Robotics Motion Controller",
    overview: "Built a safety-first control platform for motor and sensor coordination in a robotics prototype.",
    details: ["Real-time feedback loops", "Sensor fusion", "Safety limit handling"],
  },
  {
    title: "Smart Home Embedded Hub",
    overview: "Implemented device management and secure communication for smart home edge hardware.",
    details: ["Wireless connectivity", "Secure provisioning", "User-centric diagnostics"],
  },
];

export default function Projects() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
            <h1 className="text-4xl font-semibold">Projects</h1>
            <p className="mt-4 max-w-3xl text-slate-600">
              A selection of embedded and IoT systems I’ve designed, implemented, and refined from prototype to deployment.
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <div key={project.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="mt-3 text-slate-600">{project.overview}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-700">
                  {project.details.map((detail) => (
                    <span key={detail} className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
