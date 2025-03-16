import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { IconPlus,IconMinus } from '@tabler/icons-react';

// function Cart() {
//   const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm">
//     <h1 className="text-2xl font-bold">Cart</h1>
//     <div className="flex flex-col gap-4">
//       {cartItems.map((item) => (
//         <div className="flex justify-between items-center" key={item.id}>
//           <div className="flex gap-4">
//             <img src={item.image} alt={item.title} className="rounded-md h-24" />
//             <div className="flex flex-col">
//               <h1 className="text-lg font-bold">{item.title}</h1>
//               <p className="text-gray-400">{item.price}</p>
//             </div>
//           </div>
//           <div className="flex gap-4">
//             <button
//               className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
//               onClick={() => {
//                 addToCart(item)
//               }}
//             >
//               +
//             </button>
//             <p>{item.quantity}</p>
//             <button
//               className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
//               onClick={() => {
//                 removeFromCart(item)
//               }}
//             >
//               -
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//     {
//       cartItems.length > 0 ? (
//         <div className="flex flex-col justify-between items-center">
//       <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
//       <button
//         className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
//         onClick={() => {
//           clearCart()
//         }}
//       >
//         Clear cart
//       </button>
//     </div>
//       ) : (
//         <h1 className="text-lg font-bold">Your cart is empty</h1>
//       )
//     }
//   </div>
//   );
// }

// export default Cart;


const Cart = () => {
const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

const totalPrice = cartItems.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Shopping Cart
        </h2>
        {cartItems.map(item => (
          <div key={item.id} className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
            <div className="col-span-12 lg:col-span-2">
              <img src={item.img} alt={item.name} class="w-full lg:w-[180px] h-auto rounded-lg object-contain"/>
            </div>
            <div className="col-span-12 lg:col-span-10 w-full lg:pl-3">
              <div className="flex items-center justify-between w-full mb-4">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">{item.name}</h5>
                <button className="rounded-full group flex items-center justify-center focus:outline-red-500" onClick={() => {clearCart()}}>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="fill-red-50 transition-all duration-500 group-hover:fill-red-400" cx="17" cy="17" r="17" />
                    <path className="stroke-red-500 transition-all duration-500 group-hover:stroke-white" strokeWidth="1.6" strokeLinecap="round" d="M14.167 13.6V12.592C14.167 11.897 14.731 11.333 15.427 11.333H18.575C19.27 11.333 19.834 11.897 19.834 12.592V13.6M19.834 13.6H12.467V18.889C12.467 20.669 12.467 21.56 13.021 22.113C13.574 22.666 14.464 22.666 16.245 22.666H17.756C19.537 22.666 20.428 22.666 20.981 22.113C21.534 21.56 21.534 20.669 21.534 18.889V13.6Z" stroke="#EF4444" />
                  </svg>
                </button>
              </div>
              <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                {item.description} <a href="#" className="text-yellow-400">More....</a>
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <button className="group rounded-full border border-gray-200 p-2.5 bg-white transition-all duration-500 hover:bg-gray-50 hover:border-gray-300" onClick={() => {
                addToCart(item)
              }}>
                  <IconPlus stroke={2} />
                  </button>
                  <p type="text" className="border border-gray-200 rounded-full w-10 text-center text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100" >{item.quantity}</p>
                  <button className="group rounded-full border border-gray-200 p-2.5 bg-white transition-all duration-500 hover:bg-gray-50 hover:border-gray-300" onClick={() => {removeFromCart(item)}}>
                  <IconMinus stroke={2} />
                  </button>
                </div>
                <h6 className="text-yellow-400 font-manrope font-bold text-2xl leading-9 text-right">${item.quantity*item.price}</h6>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
          <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 max-md:text-center max-md:mb-4">Subtotal</h5>
          <div className="flex items-center gap-5">
            <button className="rounded-full py-2.5 px-3 bg-yellow-50 text-yellow-400 font-semibold text-xs transition-all duration-500 hover:bg-yellow-100">Promo Code?</button>
            <h6 className="font-manrope font-bold text-3xl leading-10 text-yellow-400">${getCartTotal()}</h6>
          </div>
        </div>
        <div className="max-lg:max-w-lg max-lg:mx-auto text-center">
          <p className="font-normal text-base leading-7 text-gray-500 mb-5 mt-6">Shipping taxes, and discounts calculated at checkout</p>
          <button className="rounded-full py-4 px-6 bg-yellow-400 text-white font-semibold text-lg w-full transition-all duration-500 hover:bg-yellow-700">Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;

