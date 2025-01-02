import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import slide1 from "../../../assets/assets/home/slide1.jpg";
import slide2 from "../../../assets/assets/home/slide2.jpg";
import slide3 from "../../../assets/assets/home/slide3.jpg";
import slide4 from "../../../assets/assets/home/slide4.jpg";
import slide5 from "../../../assets/assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle 
        
        subHeading={"From 11:00 AM to 10:00 PM "}
        heading={"Order Online"}>
            
        </SectionTitle>
        <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper mb-24 w-[70%] mx-auto"
    >
      <SwiperSlide>
    
        <img src={slide1} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-20 text-white font-semibold">salad</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-20 text-white font-semibold">Pizzas</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-20 text-white font-semibold">Soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-20 text-white font-semibold">Desserts</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-20 text-white font-semibold">salad</h3>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Category;
