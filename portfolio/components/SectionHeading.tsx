interface SectionHeadingProps {
  title: string;
  description?: string;
  badge?: string;
}

export default function SectionHeading({ title, description, badge }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      {badge ? (
        <p className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">
          {badge}
        </p>
      ) : null}
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h2>
        {description ? <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{description}</p> : null}
      </div>
    </div>
  );
}
