import { Outlet } from "react-router-dom";
import Navbar from "../components/organism/Navbar";
const AppLayout = () => {
  
  return (
    <>
    <Navbar/>
      <main className="mx-2 my-2">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;