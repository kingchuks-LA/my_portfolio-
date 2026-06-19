"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Systems Design", href: "/systems-design" },
  { name: "Projects", href: "/projects" },
  { name: "Come Learn With Me", href: "/come-learn-with-me" },
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
    <nav className="flex flex-wrap items-center justify-center gap-2 py-4">
      {navLinks.map((link) => {
        const active = isActive(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-4 py-2 transition-colors ${
              active
                ? "bg-slate-900 text-white"
                : "text-black hover:bg-gray-100"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
