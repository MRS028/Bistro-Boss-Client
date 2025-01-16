import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/usemenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-10">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular items"}
      ></SectionTitle>
      <div className="grid w-[90%] sm:w-[80%] md:w-[70%] mx-auto mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
