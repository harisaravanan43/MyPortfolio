import type { ExperienceItem } from "@/data/resume";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            {experience.company}
          </p>
          <h3 className="text-2xl font-semibold text-slate-950">{experience.role}</h3>
        </div>
        <div className="text-sm text-slate-500">
          <p>{experience.location}</p>
          <p>{experience.date}</p>
        </div>
      </div>

      <p className="mt-4 text-slate-600 leading-7">{experience.summary}</p>
      <ul className="mt-5 space-y-3 text-slate-700">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-slate-950" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
