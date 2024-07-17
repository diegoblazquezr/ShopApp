import React, { useEffect, useState } from 'react';
import ProductCard from "./ProductCard/ProductCard";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const ProductList = ({ products, setProducts }) => {

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:3000/api/product?search=laptop&categoryName=Electronics&filter=price&order=asc&limit=10&offset=0`);
        const json = res.data;
        console.log(json);
        setProducts(json);
      } catch (e) {
        console.error(e);
        setProducts([]);
      }
    }

    fetchData();
  }, []);

  const renderProducts = () =>
    products.map((product, i) => (
      <ProductCard
        key={uuidv4()}
        dataGeneral={product}
      />
    ));

  return <section id="sectionProductList">
    {renderProducts()}
  </section>;
};

export default ProductList;
