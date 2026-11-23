import { useState } from "react";
import Brand from "../../atoms/Brand";
import DesktopNav from "../../molecules/DesktopNav";
import ProfileButton from "../../molecules/ProfileButton";
import ProfileMenu from "../../molecules/ProfileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Temporary mock authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
    closeMenu();
  };

  return (
    <header className="w-full bg-white shadow-(--shadow-card)">
      <div className="page-container relative flex items-center justify-between py-2">
        <Brand />

        <DesktopNav />

        <div className="relative">
          <ProfileButton
            isAuthenticated={isAuthenticated}
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen((prev) => !prev)}
          />

          <ProfileMenu
            isOpen={isMenuOpen}
            isAuthenticated={isAuthenticated}
            onNavigate={closeMenu}
            onSignOut={handleSignOut}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
