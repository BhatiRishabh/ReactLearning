import React from 'react'
import FoodScroll from '../Components/Scroll/Scroll'
import { WetPaintButton } from '../Components/Buttons/wetButton'
import { Link } from 'react-router'

function Home() {
  return (
	<>
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
				
				<Link to="/menu"><WetPaintButton text="Buy Now" light="yellow-400" dark="purple"/></Link>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://pngfile.net/download/bLMviwLsGt1tlBLH3QyZhnF4mDj3P2zxfDMSfs1TPV1Rhq7yvIuCuImglTNcFd9TjH9cbebQzsmvzEdpgZbKZPpAicaKjJhCUvJp6dH11rO8IlriAJ9ZRjNaIB4X9bVg8uBYaSTQPSIaAeshrZSh2DfBQtE88qPGiwilQ3wQQlg0yr57b1CoL60x7jAGN1TaCLAxxAYk/large" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-md " />
		</div>
	</div>

	
	<FoodScroll/>
</section>
<section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Fresh, Fast, and Flavorful</h2>
            <p class="mb-4">At <strong>Burger Point</strong>, we’re passionate about serving mouth-watering burgers made from the freshest ingredients. Whether you're craving a classic cheeseburger or a gourmet specialty, we deliver quality and taste with every bite. </p>
            <p>Our dedicated team ensures fast service without compromising on flavor. From sourcing the finest ingredients to crafting the perfect burger, we aim to satisfy your cravings anytime, anywhere.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://happilyunprocessed.com/wp-content/uploads/2022/11/Juiciest-Burger-Youll-Ever-eat-2.jpg" alt="Delicious burger"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://media.istockphoto.com/id/1355630474/photo/fresh-tasty-burger-french-fries-and-soft-drink-on-dark-background.jpg?s=612x612&w=0&k=20&c=vcNnT0egp_uoQzXCHw_-psq_d2rIyf715Oi98TxmyTI=" alt="Fries and drink combo"/>
        </div>
    </div>
</section>

</>

  )
}

export default Home