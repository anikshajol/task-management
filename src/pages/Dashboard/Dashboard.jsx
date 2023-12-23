import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendar,
  FaCalendarCheck,
  FaCartShopping,
  FaHouse,
  FaStreetView,
} from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
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
                <FaCalendar></FaCalendar>
                My Task
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/cart"}>
                <FaCartShopping></FaCartShopping>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/review"}>
                <FaStreetView></FaStreetView>
                Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/bookings"}>
                <FaCalendarCheck></FaCalendarCheck>
                My bookings
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
            <NavLink to={"/order/Salad"}>
              <GiHamburgerMenu />
              Menu
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
