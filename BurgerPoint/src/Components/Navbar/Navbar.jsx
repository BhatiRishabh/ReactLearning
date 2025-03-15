import React from 'react';
import { Link } from 'react-router';
import { IconBurger,IconPaperBag,IconToolsKitchen, IconRosetteDiscount,IconUserCircle } from '@tabler/icons-react';
function Navbar() {
  return (
    // <nav>
    //   <Link to="/">BurgerJi</Link>
    //   <Link to="/menu">Menu</Link>
    //   <Link to="/cart">Cart</Link>
    //   <Link to="/Checkout">Checkout</Link>
    //   <Link to="/Login">Login</Link>
    //   <Link to="/Profile">Ptofile</Link>
    // </nav>
    <div className="fixed z-50 w-full h-20 max-w-lg -translate-x-1/2 bg-white border border-yellow-400 rounded-full bottom-4 left-1/2 dark:bg-white-700 dark:border-purple-600 shadow-md">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        
        {/* Menu Page */}
        <Link to="/menu" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <IconToolsKitchen className='h-8 w-8'/>
          <span className="text-xs">Menu</span>
        </Link>

        {/* Cart Page */}
        <Link to="/cart" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <IconPaperBag className='h-8 w-8 hover:yellow-400'/>
          <span className="text-xs">Cart</span>
        </Link>

        {/* Add New Item Button (Optional) */}
        <Link to="/" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        
        <IconBurger stroke={2} className='h-12 w-12'/>
        <span className="text-xs">Home</span>
        </Link>

        {/* Offers Page */}
        <Link to="/offers" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <IconRosetteDiscount className='w-8 h-8'/>
          <span className="text-xs">Offers</span>
        </Link>
        

        {/* Profile Page */}
        <Link to="/profile" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <IconUserCircle className="h-8 w-8"/>
          <span className="text-xs">Profile</span>
        </Link>

      </div>
    </div>

  );
}

export default Navbar;
