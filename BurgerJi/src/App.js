import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../BurgerPoint/src/Components/Navbar/Navbar';
import Footer from '../../BurgerPoint/src/Components/Footer/Footer';
import Home from '../../BurgerPoint/src/Pages/Home';
import Menu from '../../BurgerPoint/src/Pages/Menu';
import Cart from '../../BurgerPoint/src/Pages/Cart';

function App() {
  return (
    <div class="p-10 sm:p-10 m-5 rounded-3xl bg-gray-900 dark:bg-gray-900 dark:text-white bg-white text-black flex items-center justify-center overflow-hidden shadow-2xl">
  <div class="w-full max-w-6xl px-4 sm:px-6">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="flex flex-col justify-center text-center md:text-left z-10">
        <h1 class="text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold uppercase leading-tight tracking-tight">
          Design with <span class="text-yellow-500">Impact</span>
        </h1>
        <p class="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-400 dark:text-gray-400 text-gray-700 text-balance">
          Brutal aesthetics for a bold web presence. Build without compromise.
        </p>
        <div class="mt-6 sm:mt-8 flex flex-wrap gap-4">
          <a href="#get-started" class="rounded-sm p-3 grow text-center bg-yellow-500 text-black font-bold uppercase text-sm tracking-widest hover:bg-yellow-600 transition">
            Get Started
          </a>
          <a href="#learn-more" class="rounded-sm p-3 grow border text-center border-yellow-500 text-yellow-500 font-bold uppercase text-sm tracking-widest hover:bg-yellow-500 hover:text-black transition">
            Learn More
          </a>
        </div>
      </div>

      {/* <!-- Right Section: Visual Block --> */}
      <div class="relative flex items-center sm:m-10">
        <div
          class="absolute -top-10 md:-top-20 -left-10 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-yellow-500 rotate-12 rounded-lg border-yellow-700 border-b-4 border-r-8 max-sm:hidden">
        </div>
        <div class="relative z-10 bg-gray-800 dark:bg-gray-800 p-4 sm:p-6 -right-1/2 -translate-x-1/2 grow text-center shadow-2xl -rotate-2 rounded-xl text-nowrap border-slate-950 border-b-4 border-r-8">
          <h2 class="text-2xl sm:text-3xl font-bold uppercase text-gray-50 dark:text-gray-50">
            Bold. Strong. Raw.
          </h2>
          <p class="mt-1 text-sm sm:text-base font-light text-gray-400 dark:text-gray-400">
            Embrace minimalism with maximal impact.
          </p>
        </div>
        <div class="absolute -bottom-10 md:-bottom-20 -right-16 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-yellow-500 -rotate-12 rounded-lg border-yellow-700 border-r-4 border-b-8 max-sm:hidden"></div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
