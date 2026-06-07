const blogPosts = [
  {
    title: "Designing robust embedded firmware for sensor systems",
    description: "Best practices for power management, modular architecture, and reliable sensor communication.",
  },
  {
    title: "Integrating IoT devices with cloud telemetry",
    description: "A practical approach to secure wireless data flow and low-latency updates.",
  },
  {
    title: "Debugging hardware and firmware together",
    description: "How to streamline testing across boards, firmware, and communication layers.",
  },
];

export default function Blogs() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-4xl font-semibold">Blogs</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            Articles and insights on embedded software, IoT systems, and product engineering.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="mt-3 text-slate-600">{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
