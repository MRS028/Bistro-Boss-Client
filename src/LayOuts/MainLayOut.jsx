import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayOut = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      </div>
      
      
      <Outlet></Outlet>
      
      
      
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
