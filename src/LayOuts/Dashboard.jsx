import React from "react";
import { FaAd, FaAddressBook, FaCalendarAlt, FaDollarSign, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex ">
      <div className="w-64 min-h-screen  bg-orange-400">
        <ul className="menu p-4 lg:fixed">
          <li>
            
            <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My cart  ({cart.length})</NavLink>
          </li>
          <li>
           
            <NavLink to="/"> <FaHome></FaHome> User Home</NavLink>
          </li>
          <li>
           
            <NavLink to="/dashboard/review"> <FaAd></FaAd> Review</NavLink>
          </li>
          <li>
           
            <NavLink to="/dashboard/reservation"> <FaCalendarAlt></FaCalendarAlt> Reservation</NavLink>
          </li>
          <li>
           
            <NavLink to="/dashboard/payment"> <FaDollarSign></FaDollarSign>Payment History </NavLink>
          </li>
          <li>
           
            <NavLink to="/dashboard/bookings"> <FaBookBookmark></FaBookBookmark>My Bookings</NavLink>
          </li>
          <div className="divider"></div>
          <li>
           
           <NavLink to="/order/salad"> <FaShoppingCart></FaShoppingCart> SHOP</NavLink>
         </li>
          <li>
           
           <NavLink to="/order/salad"> <FaShoppingCart></FaShoppingCart>Order Food</NavLink>
         </li>
          <li>
           
           <NavLink to="/menu"> <FaList></FaList>Menu</NavLink>
         </li>
          <li>
           
           <NavLink to="/"> <FaAddressBook></FaAddressBook> Contact</NavLink>
         </li>
         

        </ul>
      </div>
      <div className="flex-1 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
