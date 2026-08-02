interface NavigationButtonProps {
  onClick: () => void;
}

export default function NavigationButton({ onClick }: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex
        items-center
        gap-2
        rounded-lg
        border
        border-gray-300
        bg-white
        px-4
        py-2
        text-sm
        font-medium
        shadow-sm
        transition  
        hover:bg-gray-50
        hover:border-gray-400
        hover:shadow
        focus:outline-none
focus:ring-2
focus:ring-gray-300
focus:ring-offset-2
      "
    >
      <span>☰</span>
      <span>Table of Contents</span>
    </button>
  );
}
