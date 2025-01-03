import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li><Link to='menu'>Our menu</Link></li>
      <li><Link to='order/salad'>Order Food</Link></li>
        
        
        
        {/* <details>
          <summary></summary>
          <ul className="p-2 text-black">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details> */}
      
      <li>
        <Link to="/auth/login">Login</Link>
      </li>
    </>
  );
  return (
    <div className="navbar w-11/12 mx-auto  fixed z-10   text-white">
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
        <ul className="menu menu-horizontal  px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn-neutral text-white">Button</button>
      </div>
    </div>
  );
};

export default Navbar;
