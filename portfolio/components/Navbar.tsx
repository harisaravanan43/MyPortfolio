import Link from "next/link";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Insights", href: "/blogs" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold text-lg text-slate-950">
          Hari Saravanan
        </Link>

        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
