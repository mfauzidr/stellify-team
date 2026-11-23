
import Avatar from "../atoms/Avatar";

interface ProfileButtonProps {
  isAuthenticated: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const ProfileButton = ({
  isAuthenticated,
  isOpen,
  onToggle,
}: ProfileButtonProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Open account menu"
      aria-expanded={isOpen}
      className="flex items-center gap-2 rounded-full transition-colors hover:bg-stellify-surface-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
    >
      <Avatar />

      <span className="hidden text-sm font-medium text-stellify-text-primary sm:block">
        {isAuthenticated ? "My Account" : "Account"}
      </span>

      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={`hidden size-4 text-stellify-text-secondary transition-transform duration-200 sm:block ${
          isOpen ? "rotate-180" : ""
        }`}
        aria-hidden="true"
      >
        <path
          d="m6 9 6 6 6-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ProfileButton;
