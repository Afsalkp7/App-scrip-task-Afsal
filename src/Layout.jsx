import React from "react";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
