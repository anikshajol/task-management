import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Task from "../pages/Dashboard/task";
import DashboardHome from "../pages/Dashboard/DashboardHome";

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
        path: "dashboardHome",
        index: true,
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "task",
        element: <Task></Task>,
      },
    ],
  },
]);

export default routes;
