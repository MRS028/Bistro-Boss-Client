import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  // console.log(cart)

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
        >
          Order Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/secret"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
        >
          Secret
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart">
          <button className="mr-5 ">
            <FaShoppingCart
              className=" inline-block"
              size={18}
            ></FaShoppingCart>
            <div className="badge badge-secondary top-1 absolute">+{cart?.length}</div>
          </button>
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <button onClick={handleLogOut} className="font-semibold">
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/auth/login"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar lg:px-10 mx-auto fixed z-10 bg-orange-300 rounded-b-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">Bistro BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 font-semibold">{links}</div>
        </div>
        <div className="navbar-end">
          <button className="btn-neutral text-2xl text-black font-semibold">
            Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
