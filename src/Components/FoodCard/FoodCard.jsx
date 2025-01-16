import React, { useContext } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, category, price,_id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [ , refetch] = useCart()

  const handleAddcart = (food) => {
   
    if (user && user.email) {
      // console.log(food, user?.email);
      const cartitem = {
        menuId: _id,
        email : user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartitem)
      .then(res=>{
        // console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            title: "Added into cart successfully",
            icon: "success",
            draggable: true,
            timer:1500
          });
          //refetc cart to update the cart item
          refetch();

        }
      })
      

    } else {
      Swal.fire({
        title: "You Are not Logegd In.",
        text: "Please Login to add the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/auth/login", {state:{from: location}});
        }
      });
    }
  };
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <p className="bg-black p-1 text-red-500 absolute font-semibold right-0 mr-6 rounded-lg -mt-48">
          ${price}0
        </p>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddcart(item)}
            className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
