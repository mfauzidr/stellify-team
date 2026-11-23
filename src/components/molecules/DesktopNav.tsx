import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navlinks";

const DesktopNav = () => {
  return (
    <nav className="hidden items-center gap-7 lg:flex">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          end={link.href === "/"}
          className={({ isActive }) =>
            `text-md font-medium transition-colors duration-200 rounded-2xl py-1 ${
              isActive
                ? "text-sky-600"
                : "text-stellify-text-secondary hover:text-sky-600 hover:border-b-2 hover:border-sky-600 hover:rounded-none"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default DesktopNav;
