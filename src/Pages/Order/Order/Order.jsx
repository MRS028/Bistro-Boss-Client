import React, { useState } from "react";
import orderCover from "../../../assets/assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/usemenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { BiDrink } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  // console.log(category)
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  //   const offered = menu.filter((item) => item.category === "offered");
  const Drinks = menu.filter((item) => item.category === "drinks");
  //   console.log(salad, dessert, pizza, offered);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover img={orderCover} title={"Order Food"} />
      <div className="flex justify-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUP</Tab>
            <Tab>DESSERT</Tab>
            <Tab>DRINKS</Tab>
            {/* <Tab>Offered</Tab> */}
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={Drinks}></OrderTab>
          </TabPanel>
          {/* <TabPanel><OrderTab items={offered}></OrderTab></TabPanel> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
