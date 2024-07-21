import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ProductCard from "./ProductCard/ProductCard";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from "../../../../redux";

const ProductList = ({ products, setProducts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const _products = useSelector(state => state._products);
  const numberItems = useSelector(state => state.numberItems);

  const [inputSearch, setInputSearch] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const [selectFilter, setSelectFilter] = useState('dateadded');
  const [selectOrder, setSelectOrder] = useState('asc');
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const timeoutRef = useRef(null);

  const updateURL = (params) => {
    const searchParams = new URLSearchParams(params);
    navigate(`/products?${searchParams.toString()}`);
  };

  async function fetchData(search, category, filter, order, limit, offset) {
    try {
      const res = await axios.get(`http://localhost:3000/api/product?search=${search}&categoryName=${category}&filter=${filter}&order=${order}&limit=${limit}&offset=${offset}`);
      const json = res.data;
      dispatch(getAllProducts(json));
      setProducts(json);
    } catch (e) {
      console.error(e);
      setProducts([]);
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('search') || '';
    const category = searchParams.get('categoryName') || '';
    const filter = searchParams.get('filter') || 'dateadded';
    const order = searchParams.get('order') || 'asc';
    const newLimit = parseInt(searchParams.get('limit') || '10', 10);
    const newOffset = parseInt(searchParams.get('offset') || '0', 10);

    setInputSearch(search);
    setSelectCategory(category);
    setSelectFilter(filter);
    setSelectOrder(order);
    setLimit(newLimit);
    setOffset(newOffset);

    if (!location.search) {
      updateURL({ search, categoryName: category, filter, order, limit: newLimit, offset: newOffset });
    } else {
      fetchData(search, category, filter, order, newLimit, newOffset);
    }
  }, [location.search]);

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      updateURL({ search: value.trim().toLowerCase(), categoryName: selectCategory, filter: selectFilter, order: selectOrder, limit, offset });
    }, 1000);
  }

  const handleCategoryChange = (e) => {
    const value = e.target.value === 'All' ? '' : e.target.value;
    updateURL({ search: inputSearch, categoryName: value, filter: selectFilter, order: selectOrder, limit, offset });
  }

  const handleFilterChange = (e) => {
    const value = e.target.value;
    const [filter, order] = value.split('-');
    updateURL({ search: inputSearch, categoryName: selectCategory, filter, order, limit, offset });
  }

  const resetFilters = () => {
    updateURL({ search: '', categoryName: '', filter: 'dateadded', order: 'asc', limit: 10, offset: 0 });
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
      <h2 className="titlePage">/Products</h2>

      <form className="search-form">
        <input
          type="text"
          name="inputProductsSearch"
          id="inputProductsSearch"
          placeholder="Search for products..."
          value={inputSearch}
          onChange={handleInputChange}
        />

        <select
          name="selectProductsCategory"
          id="selectProductsCategory"
          value={selectCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">All Categories</option>
          <option value="Clothes">Clothes</option>
          <option value="Shoes">Shoes</option>
          <option value="Furniture">Furniture</option>
          <option value="Electronics">Electronics</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>

        <select
          name="selectProductsFilter"
          id="selectProductsFilter"
          value={`${selectFilter}-${selectOrder}`}
          onChange={handleFilterChange}
        >
          <option value="dateadded-asc">Date Added: Newest</option>
          <option value="dateadded-desc">Date Added: Oldest</option>
          <option value="name-asc">Name: A/Z</option>
          <option value="name-desc">Name: Z/A</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>

        <button type="button" onClick={resetFilters}>Reset Filters</button>
      </form>

      <section id="sectionProductList">
        {renderProducts()}
      </section>
    </>
  )
};

export default ProductList;