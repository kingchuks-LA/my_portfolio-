"use client";

import { ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  return (
    <div className="group relative inline-flex">
      {children}

      <div
        className="
          pointer-events-none
          absolute
          bottom-full
          left-1/2
          mb-3
          -translate-x-1/2
          whitespace-nowrap
          rounded-md
          bg-gray-900
          px-3
          py-2
          text-sm
          text-white
          opacity-0
          shadow-lg
          transition-all
          duration-200
          group-hover:opacity-100
          group-hover:-translate-y-1
          group-focus-within:opacity-100
          group-focus-within:-translate-y-1
        "
      >
        {content}
      </div>
    </div>
  );
}
