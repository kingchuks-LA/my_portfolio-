import { useEffect } from "react";

import NavigationGroup from "./NavigationGroup";

import { NavigationGroup as NavigationGroupType } from "@/types/case-study-navigation";

interface DocumentNavigatorProps {
  navigation: NavigationGroupType[];
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function DocumentNavigator({
  navigation,
  activeSection,
  isOpen,
  onClose,
}: DocumentNavigatorProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        className={`
    fixed inset-0 z-40
    bg-black/20
    transition-opacity
    duration-300
    ${
      isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }
  `}
      />
      ;{/* Overlay */}
      <aside
        className={`
    fixed
    right-0
    top-0
    z-50
    h-screen
    w-96
    overflow-y-auto
    bg-white
    shadow-2xl
    transform
    transition-transform
    duration-300
    ease-out
    ${isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"}
  `}
      >
        {/* Drawer */}

        <div className="border-b p-6">
          <h2 className="text-2xl font-bold">Trusted Carpool Network</h2>

          <p className="mt-2 text-sm text-gray-500">Table of Contents</p>
        </div>

        <div className="space-y-8 p-6">
          {navigation.map((group) => (
            <NavigationGroup
              key={group.title}
              group={group}
              activeSection={activeSection}
              onSelect={(id) => {
                const section = document.getElementById(id);

                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }

                onClose();
              }}
            />
          ))}
        </div>
      </aside>
    </>
  );
}
