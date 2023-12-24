import { NavLink, Outlet } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { FcTodoList } from "react-icons/fc";

import { MdEmail } from "react-icons/md";

import "./Nav.css";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu space-y-4">
          <>
            <li>
              <NavLink to={`/dashboard/dashboardHome`}>
                <FaHouse></FaHouse>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/task"}>
                <FcTodoList></FcTodoList>
                To-do list
              </NavLink>
            </li>
          </>

          <div className="divider"></div>

          {/* shared or common */}
          <li>
            <NavLink to={"/"}>
              <FaHouse></FaHouse>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={"/dashboard/contact"}>
              <MdEmail />
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>

      {/* navigation */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
