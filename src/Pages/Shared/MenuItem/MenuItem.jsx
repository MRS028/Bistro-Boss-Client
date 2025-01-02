import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, category, price } = item;

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-md">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt={name}
        className="w-[120px]  object-cover rounded-lg"
      />

      <div className="">
        <div className="flex justify-between">
        <h3 className="font-semibold uppercase text-gray-800">
          {name}------------
        </h3>
        <p className=" font-bold text-orange-500">${price}</p>
        </div>
        <p className="text-sm text-gray-600">{recipe}</p>
        {/* <p className="text-xs text-gray-500 italic">Category: {category}</p> */}
      </div>
      
      
    </div>
  );
};

export default MenuItem;
