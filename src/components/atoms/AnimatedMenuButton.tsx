
interface AnimatedMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AnimatedMenuButton = ({
  isOpen,
  onToggle,
}: AnimatedMenuButtonProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      className="relative lg:hidden inline-flex size-10 items-center justify-center rounded-[10px] border border-[#E5EAF3] bg-white transition-colors duration-300 hover:bg-[#F8FAFD]"
    >
      <span
        className={`absolute h-0.5 w-5 rounded-full bg-[#17233F] transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 rotate-45"
            : "-translate-y-1.5 rotate-0"
        }`}
      />

      <span
        className={`absolute h-0.5 w-5 rounded-full bg-[#17233F] transition-all duration-200 ease-in-out ${
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />

      <span
        className={`absolute h-0.5 w-5 rounded-full bg-[#17233F] transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 -rotate-45"
            : "translate-y-1.5 rotate-0"
        }`}
      />
    </button>
  );
};

export default AnimatedMenuButton;