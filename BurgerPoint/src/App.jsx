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
import offers from './Pages/Offers';
import Contact from './Pages/Contact';

function App() {
  return (
    
    <Router>
      <Header/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/offer" element={<Offers />} />
        <Route path="/contact" element={<Contact />}
         />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
