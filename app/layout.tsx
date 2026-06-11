import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kingsley Emeka",
  description: "Technical Product Owner, Systems Thinker, and Web Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b">
          <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-4">
            <Link href="/" className="font-bold">
              Kingsley Emeka
            </Link>

            <div className="flex flex-wrap gap-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/systems-design">Systems Design</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm">
            © 2026 Kingsley Emeka. Technical Product Owner • Business Analyst •
            Solution Architect.
          </div>
        </footer>
      </body>
    </html>
  );
}
