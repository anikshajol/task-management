import { Outlet } from "react-router-dom";
import MainLayout from "./components/layouts/Mainlayout";

function App() {
  return (
    <>
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </>
  );
}

export default App;
