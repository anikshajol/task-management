import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";

import DashboardHome from "../pages/Dashboard/DashboardHome";
import CompletedList from "../components/todo/CompleteList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        // path: "/home",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "dashboard",
      //   element: (
      //     <PrivateRoute>
      //       <Dashboard></Dashboard>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        path: "dashboardHome",
        element: <DashboardHome></DashboardHome>,
      },

      {
        path: "task/complete",
        element: <CompletedList></CompletedList>,
      },
    ],
  },
]);

export default routes;
