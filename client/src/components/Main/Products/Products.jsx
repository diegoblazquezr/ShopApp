import React, { useState, useContext } from "react";
import ProductList from "./ProductList/ProductList";
// import Search from "./Search/Search";
import { ProductContext } from "../../../context/ProductContext";

const Products = () => {

  const { products, setProducts } = useContext(ProductContext);

  return (
    <>
      {/* <Search setProducts={setProducts} /> */}
      <ProductList products={products} setProducts={setProducts} />
    </>
  )
};

export default Products;
