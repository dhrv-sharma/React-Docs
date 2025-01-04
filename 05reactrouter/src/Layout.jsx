import React from "react";
// dynmaically ui
import { Outlet } from "react-router";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
// we pass out the Layout where header and footer are alway same and outlet is functionality provided by react-router
// Outlet dynamic changing Outlet through router
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
