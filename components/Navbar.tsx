"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "System Design", href: "/systems-design" },
  { name: "Projects", href: "/projects" },
  { name: "Insights", href: "/insights" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/projects") {
      return (
        pathname === "/projects" ||
        pathname.startsWith("/projects/") ||
        pathname.startsWith("/case-studies/")
      );
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav className="flex flex-wrap items-center justify-center gap-8 py-4">
      {navLinks.map((link) => {
        const active = isActive(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`border-b-2 pb-1 transition-all ${
              active
                ? "border-slate-900 font-medium text-slate-900"
                : "border-transparent text-black hover:border-slate-300"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
