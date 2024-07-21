import React, { useContext } from "react";
import ProductList from "./ProductList/ProductList";
import { ProductContext } from "../../../context/ProductContext";
import { useLocation } from 'react-router-dom';

const Products = () => {
  const { products, setProducts } = useContext(ProductContext);
  const location = useLocation();

  return (
    <ProductList products={products} setProducts={setProducts} location={location} />
  );
};

export default Products;