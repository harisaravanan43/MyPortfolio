interface BadgeProps {
  children: React.ReactNode;
  variant?: "solid" | "soft";
}

export default function Badge({ children, variant = "soft" }: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide";
  const style =
    variant === "solid"
      ? "bg-slate-950 text-white"
      : "bg-slate-100 text-slate-700 ring-1 ring-slate-200";

  return <span className={`${base} ${style}`}>{children}</span>;
}
