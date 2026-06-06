import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-5">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}