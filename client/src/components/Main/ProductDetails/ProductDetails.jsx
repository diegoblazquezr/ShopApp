import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {

  const [product, setProduct] = useState([]);
  const location = useLocation();

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
      <div>
        {product.image_urls && product.image_urls.length > 0 && (
          <img src={product.image_urls[0]} alt={product.name} />
        )}
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>Product ID: {product.product_id}</p>
        <p>Stock: {product.stock}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </section>
  );
};

export default ProductDetails;