import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const Layout = () => (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
  export default Layout