import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from "./ProductCard/ProductCard";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from "../../../../redux"; // Ensure this is the correct import path

const ProductList = ({ products, setProducts }) => {
  const dispatch = useDispatch();
  const _products = useSelector(state => state._products);
  const numberItems = useSelector(state => state.numberItems);

  const [inputSearch, setInputSearch] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const [selectFilter, setSelectFilter] = useState('dateadded');
  const [selectOrder, setSelectOrder] = useState('asc');
  const [scroll, setScroll] = useState(0);
  const inputSearchRef = useRef(null);
  const timeoutRef = useRef(null);

  const detectScroll = () => {
    setScroll(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', detectScroll);
    return () => {
      window.removeEventListener('scroll', detectScroll);
    }
  }, []);

  useEffect(() => {
    const cart = document.getElementById("cartFixed");
    if (cart) {
      cart.style.position = scroll > 100 ? "fixed" : "inherit";
    }
  }, [scroll]);

  async function fetchData() {
    try {
      const res = await axios.get(`http://localhost:3000/api/product?search=${inputSearch}&categoryName=${selectCategory}&filter=${selectFilter}&order=${selectOrder}&limit=10&offset=0`);
      const json = res.data;
      dispatch(getAllProducts(json));
      setProducts(json);
    } catch (e) {
      console.error(e);
      setProducts([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, [inputSearch, selectCategory, selectFilter, selectOrder, dispatch]);

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
    _products.map((product) => (
      <ProductCard
        key={uuidv4()}
        dataGeneral={product}
      />
    ));

  return (
    <>
      {_products.length !== 0 ? (
        <div id='productCardContainer'>
          <Link id='cartFixed' to="/cart" title='Shopping cart'>
            <img src="https://i.pinimg.com/originals/15/bb/55/15bb559cdd28f56d7c17b00498b4a946.png" alt="shopping cart" />
            <span>{numberItems}</span>
          </Link>
        </div>
      ) : (
        <span className="loader"></span>
      )}

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
        <button type="button" onClick={resetFilters}>Reset</button>
      </form>
      
      <section id="sectionProductList">
        {renderProducts()}
      </section>
    </>
  )
};

export default ProductList;