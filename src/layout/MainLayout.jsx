import React from "react";
import NavBar from "../components/Shared/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
