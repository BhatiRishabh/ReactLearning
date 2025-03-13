import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../BurgerPoint/src/Components/Navbar/Navbar';
import Footer from '../../BurgerPoint/src/Components/Footer/Footer';
import Home from '../../BurgerPoint/src/Pages/Home';
import Menu from '../../BurgerPoint/src/Pages/Menu';
import Cart from '../../BurgerPoint/src/Pages/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
