import React, { Component } from 'react'
import { FlipText } from '../FlipText/FlipText';


const foodItems = [
  { name: "Burger", image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
  { name: "Pizza", image: "https://static.vecteezy.com/system/resources/previews/009/521/752/non_2x/colorful-icon-of-pizza-isolated-on-white-background-vector.jpg" },
  { name: "Fries", image: "https://cdn-icons-png.flaticon.com/512/5787/5787018.png" },
  { name: "Hot Dog", image: "https://cdn-icons-png.flaticon.com/512/3480/3480814.png" },
  { name: "Tacos", image: "https://cdn-icons-png.flaticon.com/512/1046/1046759.png" },
  { name: "Sandwich", image: "https://cdn-icons-png.flaticon.com/512/4553/4553331.png" },
  { name: "Noodles", image: "https://cdn-icons-png.flaticon.com/512/4465/4465494.png" },
  { name: "Rolls", image: "https://cdn-icons-png.flaticon.com/512/791/791571.png" },
];

const FoodScroll = () => {
    return (
        <div className="w-full p-4 flex flex-col items-center">
          
          <FlipText className="text-4xl text-black-600 font-serif">Categories</FlipText>
    
          {/* Scrollable Container */}
          <div className="w-full overflow-x-auto">
            <div className="flex gap-6 px-4 py-2 whitespace-nowrap">
              {foodItems.map((item, index) => (
                <div 
                  key={index} 
                  className="min-w-[180px] flex flex-col items-center bg-white rounded-lg shadow-md p-3 hover:cursor-active"
                >
                  {/* Image with Fixed Size */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[150px] h-[150px] object-cover rounded-lg"
                  />
                  {/* Food Name */}
                  <p className="text-center mt-2 font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default FoodScroll;
