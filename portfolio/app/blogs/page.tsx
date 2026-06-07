import SectionHeading from "@/components/SectionHeading";
import { insights } from "@/data/resume";

export default function Blogs() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          badge="Insights"
          title="Engineering notes"
          description="Thoughts on firmware architecture, secure boot, and collaboration between hardware and software teams."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {insights.map((insight) => (
            <article key={insight.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{insight.title}</h2>
              <p className="mt-4 text-slate-600 leading-7">{insight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
