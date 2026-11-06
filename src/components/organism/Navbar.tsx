import Brand from "../atoms/Brand";
import { HamburgerButton } from "@/components/ui/hamburger-button";

const Navbar = () => {
  return <>
  <div className="flex items-center justify-between bg-white shadow-md px-4 py-2">
    <Brand />
    <HamburgerButton />
  </div>
  </>;
};

export default Navbar;
