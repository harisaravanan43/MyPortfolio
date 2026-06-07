export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-6xl font-bold mb-4">
        Hari Saravanan
      </h1>

      <h2 className="text-2xl text-gray-600 mb-6">
        Embedded Software Engineer
      </h2>

      <p className="max-w-2xl text-lg mb-8">
        Designing firmware, embedded systems,
        IoT devices, robotics solutions,
        and scalable software architectures.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-black text-white rounded-lg">
          View Projects
        </button>

        <button className="px-6 py-3 border rounded-lg">
          Contact Me
        </button>
      </div>

    </main>
  );
}