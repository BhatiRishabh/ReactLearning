import React from 'react'
import { IconBurger,IconPaperBag,IconToolsKitchen, IconRosetteDiscount } from '@tabler/icons-react';
function Header() {
  return (
	<header className="p-10 dark:bg-gray-100 dark:text-gray-800">
    <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
        
        {/* Left Navigation */}
        <ul className="items-stretch hidden space-x-10 md:flex">
            <li className="flex transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-105 hover:shadow-[0_0_15px_5px_#facc15] dark:hover:shadow-[0_0_15px_5px_#a855f7] rounded-lg">
                <a rel="noopener noreferrer" href="/menu" className="flex-vertical items-center px-4 border-b-2 dark:border- p-3">
                    <IconToolsKitchen className='w-10'/>Menu
                </a>
            </li>
            <li className="flex transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-105 hover:shadow-[0_0_15px_5px_#facc15] dark:hover:shadow-[0_0_15px_5px_#a855f7] rounded-lg">
                <a rel="noopener noreferrer" href="offers" className="flex-vertical items-center px-4 border-b-2 dark:border- p-3">
                    <IconRosetteDiscount className='w-10'/>Offers
                </a>
            </li>
            <li className="flex transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-105 hover:shadow-[0_0_15px_5px_#facc15] dark:hover:shadow-[0_0_15px_5px_#a855f7] rounded-lg">
                <a rel="noopener noreferrer" href="/cart" className="flex-vertical items-center px-4 border-b-2 dark:border- p-3">
                    <IconPaperBag stroke={2} className='w-10' />CART
                </a>
            </li>
        </ul>

        {/* Logo */}
        <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
            <IconBurger stroke={2} className='h-12 w-12'/>
        </a>

        {/* Right Navigation */}
        <ul className="items-stretch hidden space-x-10 md:flex">
            <li className="flex transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-105 hover:shadow-[0_0_15px_5px_#facc15] dark:hover:shadow-[0_0_15px_5px_#a855f7] rounded-lg ">
                <a rel="noopener noreferrer" href="/cart" className="flex-vertical items-center px-4 border-b-2 dark:border- p-3">
                    <IconPaperBag stroke={2} className='w-10' />CART
                </a>
            </li>
            <li className="flex transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-105 hover:shadow-[0_0_15px_5px_#facc15] dark:hover:shadow-[0_0_15px_5px_#a855f7] rounded-lg">
                <a rel="noopener noreferrer" href="offers" className="flex-vertical items-center px-4 border-b-2 dark:border- p-3">
                    <IconRosetteDiscount className='w-10'/>Offers
                </a>
            </li>
            <li className="flex transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-105 hover:shadow-[0_0_15px_5px_#facc15] dark:hover:shadow-[0_0_15px_5px_#a855f7] rounded-lg">
                <a rel="noopener noreferrer" href="/menu" className="flex-vertical items-center px-4 border-b-2 dark:border- p-3">
                    <IconToolsKitchen className='w-10'/>Menu
                </a>
            </li>
        </ul>

    </div>
</header>


  )
}

export default Header