/**
 * ---------------------------------------------
 * File: NavigationGroup.tsx
 *
 * Purpose:
 * Displays a single navigation group within
 * the document navigator.
 *
 * Responsibilities:
 * - Display the group heading
 * - Display navigation items
 * - Notify parent when an item is selected
 *
 * ---------------------------------------------
 */

import { NavigationGroup as NavigationGroupType } from "@/types/case-study-navigation";

import NavigationItem from "./NavigationItem";

interface NavigationGroupProps {
  group: NavigationGroupType;
  activeSection: string;
  onSelect: (id: string) => void;
}

export default function NavigationGroup({
  group,
  activeSection,
  onSelect,
}: NavigationGroupProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
        {group.title}
      </h3>

      <ul className="space-y-2">
        {group.items.map((item) => (
          <li key={item.id}>
            <NavigationItem
              item={item}
              active={item.id === activeSection}
              onSelect={onSelect}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
