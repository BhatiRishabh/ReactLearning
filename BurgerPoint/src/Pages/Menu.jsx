import React, { useState } from 'react';
import BurgerItem from '../Components/BurgerItems/BurgerItem';

function Menu() {
  const [burgers] = useState([
    { id: 1, name: 'Classic Burger', price: 5.99, description: 'A classic delight.', img: 'https://cdn.pixabay.com/photo/2022/07/15/18/18/burger-7323697_1280.jpg' },
    { id: 2, name: 'Cheese Burger', price: 6.99, description: 'Extra cheese goodness.' , img: 'https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_1280.jpg'},
    { id: 3, name: 'Spicy Burger', price: 7.49, description: 'A bit of extra kick!', img:'https://cdn.pixabay.com/photo/2022/07/15/18/17/spicy-burger-7323694_1280.jpg'},
    { id: 4, name: 'Paneer Burger', price: 5.49, description: 'A bit of Paneer in here!', img:'https://media.vanityfair.com/photos/5ec7a6e0b81b18cef540f0bd/master/w_2240,c_limit/burgers-for-healing-b.jpg'},
    { id: 5, name: 'Veggie Burger', price: 6.49, description: 'Full of healthy veggies!', img:'https://cdn.pixabay.com/photo/2022/08/29/17/44/burger-7419420_1280.jpg'},
    
  ]);

  // For now, just display them
  return (
    <div className="max-w mx-auto p-10">
    <h1 className="text-3xl font-bold text-center stroke:color-yellow">Burger Menu</h1>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 '>
        {burgers.map((burger) => (
          <BurgerItem key={burger.id} burger={burger} />
        ))}
    </div>
    </div>
  );
}

export default Menu;
