import Link from "next/link";
import type { BreadcrumbItem } from "@/types/case-study";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-10 flex items-center text-sm text-gray-500"
    >
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center">
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:text-gray-900"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-gray-600">{item.label}</span>
          )}

          {index < items.length - 1 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
        </div>
      ))}
    </nav>
  );
}
