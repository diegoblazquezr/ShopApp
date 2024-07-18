import React, { useState, useContext } from "react";
import ProductList from "./ProductList/ProductList";
import { ProductContext } from "../../../context/ProductContext";

const Products = () => {

  const { products, setProducts } = useContext(ProductContext);

  return (
    <>
      <ProductList products={products} setProducts={setProducts} />
    </>
  )
};

export default Products;
