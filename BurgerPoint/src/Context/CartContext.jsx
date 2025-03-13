import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (burger) => {
    // Check if the item already exists
    const existingItem = cartItems.find(item => item.id === burger.id);
    if (existingItem) {
      // Update quantity
      setCartItems(
        cartItems.map(item =>
          item.id === burger.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item
      setCartItems([...cartItems, { ...burger, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
