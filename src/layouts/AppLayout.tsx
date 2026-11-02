import { Outlet } from "react-router-dom";
const AppLayout = () => {
  
  return (
    <>
      <main className="mx-2 my-2">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;