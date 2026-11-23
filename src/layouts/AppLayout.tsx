import { Outlet } from "react-router-dom";
import Navbar from "../components/organism/Navbar/Navbar";
import Footer from "../components/organism/Footer/Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />

      <main className="page-container">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default AppLayout;