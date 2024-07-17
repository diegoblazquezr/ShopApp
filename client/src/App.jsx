import { React, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import { ProductContext } from './context/ProductContext';

function App() {

  const [products, setProducts] = useState([]);

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts }}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
      </ProductContext.Provider>
      <Footer />
    </>
  )
}

export default App
