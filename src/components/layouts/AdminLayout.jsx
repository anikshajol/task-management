import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-red-500 text-white font-bold  flex-[1]">
        <h1>SideBar</h1>
      </div>
      <div className="bg-green-500 text-white  font-bold flex-[3]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
