import React from "react";
import useMenu from "../../../Hooks/usemenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items,title,coverImg }) => {
  return (
    <div className="pt-8">
        {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid  w-[70%] mx-auto  mb-10 grid-cols-2 gap-2 mt-16 justify-center">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
