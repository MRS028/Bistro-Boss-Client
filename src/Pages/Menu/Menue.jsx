import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/assets/menu/banner3.jpg";
import dessertImg from "../../assets/assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/assets/menu/salad-bg.jpg";
import soupImg from "../../assets/assets/menu/soup-bg.jpg";
import offeredImg from "../../assets/assets/menu/menu-bg.png";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../Hooks/usemenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menue = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div className="pt-20  mx-auto">
      <Helmet>
        <title>Bistro Boss | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <SectionTitle subHeading={"Don't Miss"} heading={"Todays's Offer"}></SectionTitle>
      {/* Offered */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert */}
      <MenuCategory coverImg={dessertImg} items={dessert} title={"desert"}></MenuCategory>
      <MenuCategory coverImg={pizzaImg} items={pizza} title={"pizza"}></MenuCategory>
      <MenuCategory coverImg={saladImg} items={salad} title={"salad"}></MenuCategory>
      <MenuCategory coverImg={soupImg} items={soup} title={"soup"}></MenuCategory>
      <MenuCategory coverImg={offeredImg} items={offered} title={"offered"}></MenuCategory>
    </div>
    
  );
};

export default Menue;
