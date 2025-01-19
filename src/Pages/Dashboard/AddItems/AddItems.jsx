import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensilSpoon } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Category from "../../Home/Category/Category";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    //image upload
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data?.data?.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log("With image", menuRes);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          title: "Item Added Successfully",
          icon: "success",
          draggable: true,
          timer: 2000,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Add an items"}
        subHeading={"What's new?"}
      ></SectionTitle>

      <div className="m-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <div className="label">
              <span className="label-text">Recipe Name</span>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-24">
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                defaultValue={"default"}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value={"default"}>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="drinks">Drinks</option>
                <option value="dessert">Dessert</option>
                <option value="soup">Soup</option>
              </select>
            </div>
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs input-bordered"
            />
          </div>

          <button className="btn bg-orange-400">
            {" "}
            Add item <FaUtensilSpoon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
