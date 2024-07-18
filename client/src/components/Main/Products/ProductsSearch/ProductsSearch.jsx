import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

const ProductsSearch = ({ setProducts }) => {



  useEffect(() => {
    async function fetchData() {


      try {
        const res = await axios.get(`http://localhost:3000/api/product?search=&categoryName=${inputValue}&filter=date_added&order=desc&limit=10&offset=0`);
        const json = res.data;

        console.log(json);

        setProducts(json);
      } catch (e) {
        console.error(e);
        setProducts([]);
      }
    }

    fetchData();
  }, [inputValue]);



  return (
    <section className="section-search-form">
      <form ref={form} onSubmit={handleSubmit} className="search-form">
        <input type="text" name="inputProductsSearch" id="inputProductsSearch" placeholder="Search for products..." onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default ProductsSearch;
