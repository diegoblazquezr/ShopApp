import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../../../redux/";

const ProductCard = ({ dataGeneral }) => {
  const dispatch = useDispatch();

  const { name, price, image_urls, id } = dataGeneral;

  const productUrl = `/product?productName=${encodeURIComponent(name)}`;

  return (
    <article className="articleProductCard">
      {image_urls && image_urls.length > 0 && <img src={image_urls[0]} alt={name} />}
      <div>
        <Link to={productUrl}>
          <div><h4>{name}</h4></div>
        </Link>
        <div><span>${price}</span></div>
        <button onClick={() => {
          dispatch(addToCart(dataGeneral))
        }}>Add to cart</button>
      </div>
    </article>
  )
};

export default ProductCard;