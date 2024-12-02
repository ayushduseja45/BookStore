
import React from "react";

function Cards({ item }) {
  return (
    <div className="min-w-[300px] w-[300px] h-[350px] p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
        <div className="h-[150px] flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="object-cover w-full h-full" // Cover the full height and width of the wrapper
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">By {item.author}</p>
          <p className="text-sm text-gray-500 mt-2 truncate">{item.description}</p>
          <span className="block mt-4 font-bold text-green-500">{item.price}</span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
