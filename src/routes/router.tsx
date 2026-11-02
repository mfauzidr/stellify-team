import {
  createBrowserRouter,
} from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import HomePage from "../pages/HomePage";
import StellifyStyleGuide from "../pages/StellifyStyleGuide";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/style-guide",
    element: <StellifyStyleGuide />,
  }
]);

export default router;