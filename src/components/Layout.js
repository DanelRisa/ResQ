import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Layout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );
  export default Layout