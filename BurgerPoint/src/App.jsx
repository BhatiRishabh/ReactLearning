import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';
import Header from './Components/Header/Header';
import { MantineProvider } from '@mantine/core';
import { Navbar1 } from './Components/Navbar/Nabvar1';
import Offers from './Pages/Offers';

function App() {
  return (
    
    <Router>
      <Header/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
