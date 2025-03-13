import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function Cart() {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
