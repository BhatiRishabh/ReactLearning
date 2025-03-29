import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Item from '../Components/Items/Items';

function Menu() {
  const location = useLocation();
  const [Burgers] = useState([
    { id: 1, name: 'Classic Burger', price: 5.99, description: 'A classic delight.', img: 'https://cdn.pixabay.com/photo/2022/07/15/18/18/burger-7323697_1280.jpg' },
    { id: 2, name: 'Cheese Burger', price: 6.99, description: 'Extra cheese goodness.' , img: 'https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_1280.jpg'},
    { id: 3, name: 'Spicy Burger', price: 7.49, description: 'A bit of extra kick!', img:'https://cdn.pixabay.com/photo/2022/07/15/18/17/spicy-burger-7323694_1280.jpg'},
    { id: 4, name: 'Paneer Burger', price: 5.49, description: 'A bit of Paneer in here!', img:'https://media.vanityfair.com/photos/5ec7a6e0b81b18cef540f0bd/master/w_2240,c_limit/Burgers-for-healing-b.jpg'},
    { id: 5, name: 'Veggie Burger', price: 6.49, description: 'Full of healthy veggies!', img:'https://cdn.pixabay.com/photo/2022/08/29/17/44/burger-7419420_1280.jpg'},
    
  ])
  const [Pizzas] = useState([
    { id: 1, name: 'Margherita Pizza', price: 8.99, description: 'Classic cheese & tomato.', img: 'https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1737104576&width=800' },
    { id: 2, name: 'Pepperoni Pizza', price: 9.99, description: 'Loaded with pepperoni.', img: 'https://www.hunts.com/sites/g/files/qyyrlu211/files/uploadedImages/img_6934_48664.jpg' },
    { id: 3, name: 'BBQ paneer Pizza', price: 10.49, description: 'Topped with BBQ paneer.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSBY5SWIFI-pofr5vHT8_kxd1XimTHB52TA&s' },
    { id: 4, name: 'Veggie Pizza', price: 8.49, description: 'Packed with fresh veggies.', img: 'https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5-e1691215701129.jpg' },
    { id: 5, name: 'Cheese Burst Pizza', price: 11.49, description: 'Loaded with extra cheese!', img: 'https://cdn.dotpe.in/longtail/store-items/7885519/AX0Cb4c6.jpeg' }
]);

const [Fries] = useState([
    { id: 1, name: 'Classic Fries', price: 3.99, description: 'Crispy and salty.', img: 'https://jamiegeller.com/.image/t_share/MTY1NTI0ODcxNTEzODQzMjM4/crispy-classic-french-friesjpg.jpg' },
    { id: 2, name: 'Cheese Fries', price: 4.99, description: 'Topped with melted cheese.', img: 'https://static.toiimg.com/thumb/55332663.cms?imgsize=317188&width=800&height=800' },
    { id: 3, name: 'Spicy Fries', price: 4.49, description: 'Seasoned with special spices.', img: 'https://diethood.com/wp-content/uploads/2023/11/cajun-fries-4.jpg' },
    { id: 4, name: 'Garlic Parmesan Fries', price: 5.49, description: 'A rich garlic flavor.', img: 'https://mediavine-res.cloudinary.com/image/upload/s--bsA2Sm0e--/ar_1:1,c_fill,f_auto,fl_lossy,q_auto/v1659631740/eu6qrcubxnrm7lyqek4w.jpg' },
    { id: 5, name: 'Sweet Potato Fries', price: 5.99, description: 'A healthier crispy delight.', img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Baked-Sweet-Potato-Fries-Recipe.jpg' }
]);

const [Hotdogs] = useState([
    { id: 1, name: 'Classic Hot Dog', price: 4.99, description: 'Simple and delicious.', img: 'https://stpierrebakery-co-uk.s3.eu-west-1.amazonaws.com/app/uploads/2022/05/Classic-Hot-Dog-Rolls-1440x960.jpg' },
    { id: 2, name: 'Cheese Hot Dog', price: 5.99, description: 'Cheesy goodness.', img: 'https://www.simplyrecipes.com/thmb/PcSmQ7D3w_0acCdEiEIrslvtVak=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__10__EYF-Baked-Cheesy-Hot-METHOD-4-555a8033f8704211ab5307aa930c8807.jpg' },
    { id: 3, name: 'Chili Hot Dog', price: 6.49, description: 'Spicy and flavorful.', img: 'https://www.theendlessmeal.com/wp-content/uploads/2021/06/Chili-Dogs.jpg' },
    { id: 4, name: 'BBQ Bacon Hot Dog', price: 7.49, description: 'Smoky BBQ twist.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_XehSMT5bTl0pW-R2PFND2rE8kVrejrgPg&s' },
    { id: 5, name: 'Jalapeño Hot Dog', price: 6.99, description: 'For the spice lovers!', img: 'https://domesticate-me.com/wp-content/uploads/2018/07/Grilled-Hot-Dogs-with-Peach-Jalapen%CC%83o-Salsa-2-500x500.jpg' }
]);

const [Tacos] = useState([
    { id: 1, name: 'Paneer Taco', price: 3.99, description: 'Loaded with Paneer.', img: 'https://profusioncurry.com/wp-content/uploads/2019/10/Paneer-tacos-with-spicy-cilantro-sauce-Indian-style-taco-fusion-recipe.jpg' },
    { id: 2, name: 'Soya Taco', price: 4.49, description: 'Savory soya filling.', img: 'https://myquietkitchen.com/wp-content/uploads/2020/05/vegan-taco-meat-healthy.jpg' },
    { id: 3, name: 'Fish Taco', price: 5.49, description: 'Crispy fish & fresh veggies.', img: 'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg' },
    { id: 4, name: 'Veggie Taco', price: 3.49, description: 'Packed with fresh veggies.', img: 'https://www.veganosity.com/wp-content/uploads/2020/03/Balsamic-Tacos-5.jpg' },
    { id: 5, name: 'Spicy Taco', price: 4.99, description: 'Extra spice for heat lovers.', img: 'https://thenovicechefblog.com/wp-content/uploads/2023/08/Spicy-Taco-Meat-500x500.jpg' }
]);

const [Sandwiches] = useState([
    { id: 1, name: 'Grilled Cheese Sandwich', price: 4.99, description: 'Cheesy and crispy.', img: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese.jpg' },
    { id: 2, name: 'Chicken Sandwich', price: 5.99, description: 'Juicy grilled chicken.', img: 'https://www.eatingwell.com/thmb/lWAiwknQ9yapq6UuXAYrUdrcKbk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Rotisserie-Chicken-Sandwich-202-2000-485b673fe411460e95b512fbf805a5d9.jpg' },
    { id: 3, name: 'Club Sandwich', price: 6.49, description: 'Multi-layered delight.', img: 'https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/club_sandwich_16496_16x9.jpg.webp' },
    { id: 4, name: 'Egg Sandwich', price: 4.49, description: 'Egg & cheese combo.', img: 'https://www.simplyrecipes.com/thmb/5KEzbHplXxqFntM-jqrI0QdExR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Egg-Salad-Sandwich-LEAD-22-8ecbb89abda34a84b649ff4c44bab525.JPG' },
    { id: 5, name: 'Veggie Sandwich', price: 5.49, description: 'Full of fresh greens.', img: 'https://hips.hearstapps.com/hmg-prod/images/delish-20210423-ultimate-veggie-sandwich-001-ab-1622826517.jpg?crop=1xw:0.8431740614334471xh;center,top&resize=1200:*' }
]);

const [Noodles] = useState([
    { id: 1, name: 'Hakka Noodles', price: 6.99, description: 'Classic Indo-Chinese.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDKmyYeGoiXe4mN_XJpQS72bOA2ixCayuWjQ&s' },
    { id: 2, name: 'Chow Mein', price: 7.49, description: 'Stir-fried perfection.', img: 'https://rookiewithacookie.com/wp-content/uploads/2024/08/Chowmein-3-scaled.jpg' },
    { id: 3, name: 'Schezwan Noodles', price: 7.99, description: 'Spicy and flavorful.', img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/schezwan-noodles-recipe-1.jpg' },
    { id: 4, name: 'Ramen', price: 8.99, description: 'Japanese noodle bowl.', img: 'https://dishingouthealth.com/wp-content/uploads/2022/01/SpicyMisoRamen_Square.jpg' },
    { id: 5, name: 'Veg Noodles', price: 6.49, description: 'Healthy and delicious.', img: 'https://www.whiskaffair.com/wp-content/uploads/2020/10/Veg-Hakka-Noodles-2-3-500x500.jpg' }
]);

const [Rolls] = useState([
    { id: 1, name: 'Paneer Roll', price: 5.99, description: 'Stuffed with paneer.', img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2017/01/paneer-kathi-roll-recipe-1.jpg' },
    { id: 2, name: 'Spring Roll', price: 6.99, description: 'Loaded with noodles.', img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg' }
]);
useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}, [location]);
  
  ;

  return (
    <div className="max-w mx-auto p-10">
      <div id="Burger">
      <img src='https://cdn-icons-png.flaticon.com/512/1046/1046784.png' alt='burger' className='w-20 h-20 mx-auto'/>
    <h1 className="text-2xl font-bold text-center stroke:color-yellow">Burger Menu</h1>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 '>
        {Burgers.map((burger) => (
          <Item key={burger.id} item={burger} />
        ))}
    </div>
    </div>
    <div id="Pizza">
    <img src='https://static.vecteezy.com/system/resources/previews/009/521/752/non_2x/colorful-icon-of-pizza-isolated-on-white-background-vector.jpg' alt='Pizza' className='w-20 h-20 mx-auto'/>
    <h1 className="text-2xl font-bold text-center stroke:color-yellow">Pizza Menu</h1>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 '>
         {Pizzas.map((pizza)=>(
          <Item key={pizza.id} item={pizza} />
        ))}
    </div>
    </div>
    <div id="Fries">
    <img src='https://cdn-icons-png.flaticon.com/512/5787/5787018.png' alt='Fries' className='w-20 h-20 mx-auto'/>
    <h1 className="text-2xl font-bold text-center stroke:color-yellow">Fries Menu</h1>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 '>
        {Fries.map((fries) =>(
          <Item key={fries.id} item={fries} />
        ))}
    </div>
    </div>
    <div id="Hotdogs">
    <img src='https://cdn-icons-png.flaticon.com/512/3480/3480814.png' alt='Hotdogs' className='w-20 h-20 mx-auto'/>
    <h1 className="text-2xl font-bold text-center stroke:color-yellow">HotDogs Menu</h1>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 '>
        {Hotdogs.map((hotDog) =>(
          <Item key={hotDog.id} item={hotDog} />
        ))}
    </div>
    </div>
    <div id="Tacos">
    <img src='https://cdn-icons-png.flaticon.com/512/1046/1046759.png' alt='Tacos' className='w-20 h-20 mx-auto'/>
    <h1 className="text-2xl font-bold text-center stroke:color-yellow">Tacos Menu</h1>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 '>
        {Tacos.map((taco) =>(

            <Item key={taco.id} item={taco} />
        ))}
    </div>
    </div>
    <div id="Sandwich">
    <img src='https://cdn-icons-png.flaticon.com/512/4553/4553331.png' alt='Sandwiches' className='w-20 h-20 mx-auto'/>
    <h1 className="text-2xl font-bold text-center stroke:color-yellow">sandwiches Menu</h1>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 '>
        {Sandwiches.map((sandwiche) => (
          <Item key={sandwiche.id} item={sandwiche} />
        ))}
    </div>
    </div>
    <div id="Noodles">
    <img src='https://cdn-icons-png.flaticon.com/512/4465/4465494.png' alt='Noodles' className='w-20 h-20 mx-auto'/>
    <h1 className="text-2xl font-bold text-center stroke:color-yellow">Noodles Menu</h1>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 '>
        {Noodles.map((noodle) => (
              <Item key={noodle.id} item={noodle} />
        ))}
    </div>
    </div>
    <div id="Rolls">
    <img src='https://cdn-icons-png.flaticon.com/512/791/791571.png' alt='Rolls' className='w-20 h-20 mx-auto'/>
    <h1 className="text-2xl font-bold text-center stroke:color-yellow">Rolls Menu</h1>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 '>
          {Rolls.map((roll) => (
              <Item key={roll.id} item={roll} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Menu;
