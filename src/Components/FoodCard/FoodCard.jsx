import React from 'react';

const FoodCard = ({item}) => {
    const { name, recipe, image, category, price } = item;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <p className='bg-black p-1 text-red-500 absolute font-semibold right-0 mr-6 rounded-lg -mt-48'>${price}0</p>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;