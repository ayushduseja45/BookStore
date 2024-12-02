// Cards.jsx
import React from "react";

const Cards = ({ item }) => {
  return (
    <div className=" min-w-[300px] w-[300px] h-[350px] p-4 border rounded-lg p-4 shadow-md">
      <img src={item.image} alt={item.title} className="h-40 w-full object-cover rounded-md" />
      <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
      <p className="text-gray-700">{item.name}</p>
    </div>
  );
};

export default Cards;
