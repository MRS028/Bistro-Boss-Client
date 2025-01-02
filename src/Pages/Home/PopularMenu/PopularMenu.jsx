import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/usemenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item => item.category === "popular"));

  return (
    <section>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular items"}
      ></SectionTitle>
      <div className="grid  w-[70%] mx-auto  mb-10 grid-cols-2 gap-2 justify-center">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
