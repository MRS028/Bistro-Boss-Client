import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import { Helmet } from "react-helmet-async";
import Featured from "../Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <div className="">
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonials></Testimonials>
        
      </div>
    </div>
  );
};

export default Home;
