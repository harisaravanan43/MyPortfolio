import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-1">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col-reverse items-center gap-40 lg:flex-row lg:items-center">
        <div className="w-full max-w-[400px] overflow-hidden rounded-full border border-slate-200 bg-white shadow-xl">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/my-photo.jpg"
              alt="Hari Saravanan"
              fill
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <h1 className="text-6xl font-bold mb-4">
            Hari Saravanan
          </h1>

          <h2 className="text-2xl text-gray-600 mb-6">
            Embedded Software Engineer
          </h2>

          <div className="flex gap-4">
            <a
              href="/hari-saravanan-resume.pdf"
              download="Hari Saravanan Resume.pdf"
              className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-white transition hover:bg-slate-800"
            >
              Download CV
            </a>

            <button className="px-6 py-3 border rounded-lg">
              Contact Me
            </button>
          </div> 
        </div>
      </div>
    </main>
  );
}
