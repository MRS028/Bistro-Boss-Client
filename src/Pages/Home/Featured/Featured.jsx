import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="flex flex-col md:flex-row justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-6 md:px-12 lg:px-36">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img src={featuredImg} alt="Featured Item" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 md:ml-10 text-center md:text-left">
          <p className="text-sm text-gray-200">Aug 20, 2025</p>
          <p className="uppercase text-xl font-bold text-white mb-4">
            Where can I get some?
          </p>
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            expedita hic dolorem, iusto vel suscipit nam excepturi debitis
            magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
            consectetur blanditiis laboriosam fugiat ea quia similique quam nisi
            reprehenderit numquam magnam nemo vitae cupiditate, atque maiores
            dicta minus pariatur. Perspiciatis nobis vero quas?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
