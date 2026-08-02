/**
 * ---------------------------------------------
 * File: NavigationItem.tsx
 *
 * Purpose:
 * Displays a single navigation item.
 *
 * Responsibilities:
 * - Render one navigation item
 * - Notify parent when selected
 *
 * ---------------------------------------------
 */

import { NavigationItem as NavigationItemType } from "@/types/case-study-navigation";

interface NavigationItemProps {
  item: NavigationItemType;
  active: boolean;
  onSelect: (id: string) => void;
}

export default function NavigationItem({
  item,
  active,
  onSelect,
}: NavigationItemProps) {
  return (
    <button
      onClick={() => onSelect(item.id)}
      className={`
  group
  flex
  w-full
  items-center
  rounded-lg
  px-3
  py-2.5
  text-left
  font-medium
  transition-all
  duration-200
  ${
    active
      ? "border-l-4 border-gray-900 bg-gray-100 text-gray-900 font-semibold"
      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1"
  }
  focus:outline-none
  focus:bg-gray-100
`}
    >
      <span className="font-medium">{item.label}</span>
    </button>
  );
}
