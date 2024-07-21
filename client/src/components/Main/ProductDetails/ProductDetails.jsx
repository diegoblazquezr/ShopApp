import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../redux";
import axios from 'axios';

const ProductDetails = () => {

  const [product, setProduct] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productName = searchParams.get('productName');

    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:3000/api/product?productName=${encodeURIComponent(productName)}`);
        const json = res.data;
        setProduct(json[0]);
      } catch (e) {
        console.error(e);
        setProduct([]);
      }
    }

    if (productName) {
      fetchData();
    }
  }, [location]);

  if (!product) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product data available</div>;
  }

  return (
    <section className="sectionDetails">
      <div className="detailsImage">
        {product.image_urls && product.image_urls.length > 0 && (
          <img src={product.image_urls[0]} alt={product.name} />
        )}
      </div>
      <div className="productDetails">
        <div>
          <h2 className="h2Name">{product.name}</h2>
          <p className="pID">Product ID: {product.product_id}</p>
        </div>
        <div>
          <p className="pPrice">{product.price}$</p>
          <p className="pStock">Stock: {product.stock}</p>
          <button id="btnAddtoCartDetails" onClick={() => {
            dispatch(addToCart(product))
          }}>
            Add to Cart
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="30px" fill="#000">
              <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
            </svg>
          </button>
        </div>
        <p className="pDescription">{product.description}</p>

      </div>
    </section>
  );
};

export default ProductDetails;