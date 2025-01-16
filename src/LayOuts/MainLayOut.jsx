import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayOut = () => {
  const location = useLocation();
  // console.log(location);
  const noHeaderfooter = location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <section>
      {noHeaderfooter || (
        <div className=" ">
          <Navbar></Navbar>
        </div>
      )}

      <Outlet></Outlet>

      {noHeaderfooter || <Footer></Footer>}
    </section>
  );
};

export default MainLayOut;
