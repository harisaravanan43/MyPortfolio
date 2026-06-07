const experienceHighlights = [
  "5+ years designing embedded firmware for commercial products",
  "Built IoT gateways with secure wireless connectivity",
  "Delivered robotics controllers with real-time safety monitoring",
  "Collaborated closely with electrical and mechanical engineering teams",
];

export default function AboutPage() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-4xl font-semibold">About Me</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            I am an embedded software engineer with a passion for building dependable systems at the intersection of hardware and software. I enjoy solving hardware constraints, optimizing performance, and delivering products that operate reliably in the real world.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">What I care about</h2>
              <ul className="mt-5 space-y-3 text-slate-600">
                <li>Efficient firmware that scales across devices</li>
                <li>Robust real-time control and safety systems</li>
                <li>Clear cross-disciplinary communication</li>
                <li>Practical product design with measurable impact</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Experience highlights</h2>
              <ul className="mt-5 space-y-3 text-slate-600">
                {experienceHighlights.map((item) => (
                  <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-semibold">Core Skills</h2>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-700">
              {[
                "Firmware Architecture",
                "RTOS",
                "Embedded C/C++",
                "Sensor Interfaces",
                "IoT Connectivity",
                "Hardware Debugging",
                "System Design",
                "Low-power Optimization",
              ].map((skill) => (
                <span key={skill} className="rounded-full border border-slate-300 bg-white px-4 py-2">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
