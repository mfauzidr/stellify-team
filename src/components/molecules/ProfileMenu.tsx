
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/navlinks";

interface ProfileMenuProps {
  isOpen: boolean;
  isAuthenticated: boolean;
  onNavigate: () => void;
  onSignOut: () => void;
}

const ProfileMenu = ({
  isOpen,
  isAuthenticated,
  onNavigate,
  onSignOut,
}: ProfileMenuProps) => {
  return (
    <div
      aria-hidden={!isOpen}
      className={`absolute right-0 top-full z-50 mt-3 w-60 origin-top-right rounded-xl border border-stellify-border bg-white p-2 shadow-(--shadow-card) transition-all duration-200 ease-in-out ${
        isOpen
          ? "visible translate-y-0 scale-100 opacity-100"
          : "invisible pointer-events-none -translate-y-2 scale-95 opacity-0"
      }`}
    >
      {/* Mobile & Tablet Navigation */}
      <nav
        aria-label="Mobile navigation"
        className="flex flex-col gap-1 lg:hidden"
      >
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
      </nav>

      {/* Divider */}
      <div className="my-2 border-t border-stellify-border lg:hidden" />

      {/* Guest Actions */}
      {!isAuthenticated && (
        <div className="flex flex-col gap-1">
          <Link
            to="/login"
            onClick={onNavigate}
            tabIndex={isOpen ? 0 : -1}
            className="rounded-lg px-4 py-3 text-sm font-medium text-stellify-text-secondary transition-colors hover:bg-stellify-surface-subtle hover:text-sky-600"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            onClick={onNavigate}
            tabIndex={isOpen ? 0 : -1}
            className="rounded-lg bg-sky-500 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-sky-600"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Authenticated Actions */}
      {isAuthenticated && (
        <div className="flex flex-col gap-1">
          <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stellify-text-muted">
            My Account
          </div>

          <Link
            to="/profile"
            onClick={onNavigate}
            tabIndex={isOpen ? 0 : -1}
            className="rounded-lg px-4 py-3 text-sm font-medium text-stellify-text-secondary transition-colors hover:bg-stellify-surface-subtle hover:text-sky-600"
          >
            My Profile
          </Link>

          <Link
            to="/orders"
            onClick={onNavigate}
            tabIndex={isOpen ? 0 : -1}
            className="rounded-lg px-4 py-3 text-sm font-medium text-stellify-text-secondary transition-colors hover:bg-stellify-surface-subtle hover:text-sky-600"
          >
            My Orders
          </Link>

          <div className="my-1 border-t border-stellify-border" />

          <button
            type="button"
            onClick={onSignOut}
            tabIndex={isOpen ? 0 : -1}
            className="rounded-lg px-4 py-3 text-left text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
