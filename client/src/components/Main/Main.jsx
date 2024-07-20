import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import 'normalize.css';
import Home from './Home/Home';
import Products from './Products/Products';
import Cart from '../Header/Cart/Cart';

const Main = () => {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </main>
  )
};

export default Main;
