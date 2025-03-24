import React, { createContext, useState, useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import SlideInNotifications from '../Notification/Notification';

function Items({item}) {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart(item);
	<SlideInNotifications/>
  };
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mb-5 mt-5 hover:scale-[1.015] hover:shadow-xl hover:shadow-[0_0_15px_5px_#facc15] dark:hover:shadow-[0_0_10px_5px_#a855f7]">
	<img src={item.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{item.name}</h2>
			<h3 className="text-3xl font-semibold tracking-wide">{item.price}</h3>
			<p className="dark:text-gray-800">{item.description}</p>
		</div>
		<button onClick={() => handleAddToCart(item)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-700 bg-yellow-400 text-gray-50 hover:bg-yellow-500 hover:text-white cursor-pointer">Add to Cart</button>
	</div>
</div>
  )
}

export default Items

