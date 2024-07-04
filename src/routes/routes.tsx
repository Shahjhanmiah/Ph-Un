
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";

import { adminRoutes } from "./admin.routes";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: adminRoutes,
  },

  {
    path: "/student",
    element: <App></App>,
    children: adminRoutes,
  },

  {
    path: "/faculty",
    element: <App></App>,
    children: adminRoutes,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router
