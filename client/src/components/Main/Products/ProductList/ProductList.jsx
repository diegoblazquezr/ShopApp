import React, { useEffect, useState, useRef } from 'react';
import ProductCard from "./ProductCard/ProductCard";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const ProductList = ({ products, setProducts }) => {

  const [inputSearch, setInputSearch] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const [selectFilter, setSelectFilter] = useState('dateadded');
  const [selectOrder, setSelectOrder] = useState('asc');
  const inputSearchRef = useRef(null);
  const timeoutRef = useRef(null);

  async function fetchData() {
    try {
      const res = await axios.get(`http://localhost:3000/api/product?search=${inputSearch}&categoryName=${selectCategory}&filter=${selectFilter}&order=${selectOrder}&limit=10&offset=0`);
      const json = res.data;
      setProducts(json);
    } catch (e) {
      console.error(e);
      setProducts([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [inputSearch, selectCategory, selectFilter, selectOrder]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputProductsSearch = e.target.inputProductsSearch.value.trim().toLowerCase();
    setInputSearch(inputProductsSearch);

    if (inputSearchRef.current) {
      inputSearchRef.current.value = '';
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setInputSearch(value.trim().toLowerCase());
      if (inputSearchRef.current) {
        inputSearchRef.current.value = '';
      }
    }, 1000);
  }

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectCategory(value === 'All' ? '' : value);
  }

  const handleFilterChange = (e) => {
    const value = e.target.value;
    const [filter, order] = value.split('-');
    setSelectFilter(filter);
    setSelectOrder(order);
  }

  const resetFilters = () => {
    setInputSearch('');
    setSelectCategory('');
    setSelectFilter('dateadded');
    setSelectOrder('asc');

    if (inputSearchRef.current) {
      inputSearchRef.current.value = '';
    }

    fetchData();
  }

  const renderProducts = () =>
    products.map((product) => (
      <ProductCard
        key={uuidv4()}
        dataGeneral={product}
      />
    ));

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">

        <input
          type="text"
          name="inputProductsSearch"
          id="inputProductsSearch"
          placeholder="Search for products..."
          ref={inputSearchRef}
          onChange={handleInputChange}
        />

        <select name="selectProductsCategory" id="selectProductsCategory" onChange={handleCategoryChange}>
          <option value="All">All Categories</option>
          <option value="Clothes">Clothes</option>
          <option value="Shoes">Shoes</option>
          <option value="Furniture">Furniture</option>
          <option value="Electronics">Electronics</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>

        <select name="selectProductsFilter" id="selectProductsFilter" onChange={handleFilterChange}>
          <option value="dateadded-asc">Date Added: Newest</option>
          <option value="dateadded-desc">Date Added: Oldest</option>
          <option value="name-asc">Name: A/Z</option>
          <option value="name-desc">Name: Z/A</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>

        <button type="submit">Apply Filters</button>
        <button onClick={resetFilters}>Reset</button>
      </form>
      <section id="sectionProductList">
        {renderProducts()}
      </section>
    </>
  )
};

export default ProductList;
