import ExperienceCard from "@/components/ExperienceCard";
import InfoCard from "@/components/InfoCard";
import SectionHeading from "@/components/SectionHeading";
import { education, experience, languages, profile, skills } from "@/data/resume";

export default function AboutPage() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          badge="About"
          title="Experience and engineering profile"
          description="A professional summary from five years of embedded firmware development across biomedical, industrial, and IoT product domains."
        />

        <div className="mt-10 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">Professional summary</h2>
              <p className="mt-4 text-slate-600 leading-8">{profile.summary}</p>
            </div>

            <div className="space-y-6">
              {experience.map((item) => (
                <ExperienceCard key={`${item.company}-${item.role}`} experience={item} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <InfoCard title="Education" subtitle={education.institute}>
              <p className="font-semibold text-slate-950">{education.degree}</p>
              <p>{education.dates}</p>
            </InfoCard>

            <InfoCard title="Languages">
              {languages.map((language) => (
                <p key={language}>{language}</p>
              ))}
            </InfoCard>

            <InfoCard title="Technical strengths">
              <div className="space-y-3">
                {skills.map((group) => (
                  <div key={group.category}>
                    <p className="text-sm font-semibold text-slate-950">{group.category}</p>
                    <p className="mt-1 text-slate-600">{group.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </main>
  );
}
