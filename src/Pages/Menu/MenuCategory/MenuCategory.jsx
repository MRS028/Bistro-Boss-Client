import React from "react";
import useMenu from "../../../Hooks/usemenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid w-[90%] sm:w-[80%] md:w-[70%] mx-auto mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
      <Link to={`/order/${title}`}>
        <button className="btn  font-bold btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
