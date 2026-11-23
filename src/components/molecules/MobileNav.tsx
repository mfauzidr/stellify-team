import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navlinks";

interface MobileNavProps {
  isOpen: boolean;
  onNavigate: () => void;
}

const MobileNav = ({ isOpen, onNavigate }: MobileNavProps) => {
  return (
    <nav
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
      className={`absolute right-0 top-full z-50 mt-3 w-56 rounded-xl border border-stellify-border bg-white p-2 shadow-(--shadow-card) transition-all duration-300 ease-in-out ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-1">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            end={link.href === "/"}
            onClick={onNavigate}
            tabIndex={isOpen ? 0 : -1}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-sky-100 text-sky-600"
                  : "text-stellify-text-secondary hover:bg-stellify-surface-subtle hover:text-sky-600"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
