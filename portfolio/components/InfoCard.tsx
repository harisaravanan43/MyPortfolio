interface InfoCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function InfoCard({ title, subtitle, children }: InfoCardProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex flex-col gap-1">
        <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
        {subtitle ? <p className="text-sm text-slate-500">{subtitle}</p> : null}
      </div>
      <div className="space-y-3 text-slate-600">{children}</div>
    </section>
  );
}
