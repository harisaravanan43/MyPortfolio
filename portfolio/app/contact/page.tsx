import InfoCard from "@/components/InfoCard";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Let’s build the next product together"
          description="Reach out for embedded software, firmware design, or IoT product development opportunities."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <InfoCard title="Email">
            <p>{profile.contact.email}</p>
          </InfoCard>
          <InfoCard title="Phone">
            <p>{profile.contact.phone}</p>
          </InfoCard>
        </div>

        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">LinkedIn</h2>
          <p className="mt-3 text-slate-600">linkedin.com/in/{profile.contact.linkedIn}</p>
        </div>

        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-slate-700">
          <p>
            Tip: If you want, I can also add a contact form that sends email or integrates with a service like EmailJS, Formspree, or a dedicated backend.
          </p>
        </div>
      </div>
    </main>
  );
}
