import React from 'react'
import FoodScroll from '../Components/Scroll/Scroll'

function Home() {
  return (
	<section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">BurgerPoint 
				<span className="dark:text-violet-600"> Your </span>Delicious Burgers
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Craving for delicious burgers!! 
				<br  className="hidden md:inline lg:hidden" /> Delivered at your doorstep in no time
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Buy Now</a>
				<a rel="noopener noreferrer" href="/menu" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Explore</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://pngfile.net/download/bLMviwLsGt1tlBLH3QyZhnF4mDj3P2zxfDMSfs1TPV1Rhq7yvIuCuImglTNcFd9TjH9cbebQzsmvzEdpgZbKZPpAicaKjJhCUvJp6dH11rO8IlriAJ9ZRjNaIB4X9bVg8uBYaSTQPSIaAeshrZSh2DfBQtE88qPGiwilQ3wQQlg0yr57b1CoL60x7jAGN1TaCLAxxAYk/large" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-md " />
		</div>
	</div>
	<FoodScroll/>
</section>

  )
}

export default Home