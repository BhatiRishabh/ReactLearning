import React from 'react'
import { IconBurger,IconPaperBag,IconToolsKitchen, IconRosetteDiscount } from '@tabler/icons-react';
function Header() {
  return (
    <header className="p-10 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
		<ul className="items-stretch hidden space-x-10 md:flex">
			<li className="flex hover:-mb-1">
            <a rel="noopener noreferrer" href="/menu" className="flex-vertical items-center px-4  border-b-2 dark:border-"><IconToolsKitchen className='hover:h-10 w-10'/>Menu</a>
			</li>
			<li className="flex hover:-mb-1">
				<a rel="noopener noreferrer" href="offers" className="flex-vertical items-center px-4  border-b-2 dark:border-"><IconRosetteDiscount className='hover:h-10 w-10'/>Offers</a>
			</li>
			<li className="flex hover:-mb-1">
				<a rel="noopener noreferrer" href="/cart" className="flex-vertical items-center px-1 border-b-2 dark:border- "><IconPaperBag stroke={2} className='hover:h-10 w-10' />CART</a>
			</li>
		</ul>
		<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
        <IconBurger stroke={2} className='h-12 w-12'/>
        </a>

		<ul className="items-stretch hidden space-x-10 md:flex">
			<li className="flex hover:-mb-1">
				<a rel="noopener noreferrer" href="/cart" className="flex-vertical items-center px-1 border-b-2 dark:border- "><IconPaperBag stroke={2} className='hover:h-10 w-10' />CART</a>
			</li>
            <li className="flex hover:-mb-1">
				<a rel="noopener noreferrer" href="offers" className="flex-vertical items-center px-4  border-b-2 dark:border-"><IconRosetteDiscount className='hover:h-10 w-10 bg-yellow'/>Offers</a>
			</li>
			<li className="flex hover:-mb-1">
				<a rel="noopener noreferrer" href="/menu" className="flex-vertical items-center px-4  border-b-2 dark:border-"><IconToolsKitchen className='hover:h-10 w-10'/>Menu</a>
			</li>
			
		</ul>
		
	</div>
</header>
  )
}

export default Header