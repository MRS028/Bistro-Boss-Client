import React from "react";
import {
  FaAd,
  FaAddressBook,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaPhone,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaUtensilSpoon,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import useAdmin from "../Hooks/useAdmin";
import { FcSettings } from "react-icons/fc";

const Dashboard = () => {
  const [cart] = useCart();
  // admin
  const [isAdmin] = useAdmin();
  // console.log(isAdmin)
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-orange-400 fixed top-0 left-0">
        <div className="text-black p-5 border-b-2">
          <p className="text-left text-3xl">Bistro Boss</p>
          <p className="text-left text-xl">Restaurant</p>
        </div>
        <ul className="menu p-4 font-semibold">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaCalendar></FaCalendar>
                  Not History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList></FaList>
                  Real Payment History
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
             <FaPhone></FaPhone>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="flex-1 ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
