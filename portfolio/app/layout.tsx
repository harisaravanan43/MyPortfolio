import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Hari Saravanan | Embedded Software Engineer",
  description:
    "Portfolio of Hari Saravanan — embedded firmware engineer specializing in IoT, real-time systems, and biomedical product development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
