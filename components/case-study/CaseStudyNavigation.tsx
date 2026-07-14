import Link from "next/link";

import { NavigationGroup } from "@/types/case-study-navigation";

interface CaseStudyNavigationProps {
  navigation: NavigationGroup[];
}

export function CaseStudyNavigation({ navigation }: CaseStudyNavigationProps) {
  return (
    <aside className="sticky top-24">
      <nav>
        {navigation.map((group) => (
          <div key={group.title} className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
              {group.title}
            </p>

            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="block rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
