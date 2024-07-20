import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { ProductContext } from './context/ProductContext';

function App() {
  const [products, setProducts] = useState([]);

  return (
    <Provider store={store}>
      <ProductContext.Provider value={{ products, setProducts }}>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </ProductContext.Provider>
    </Provider>
  );
}

export default App;