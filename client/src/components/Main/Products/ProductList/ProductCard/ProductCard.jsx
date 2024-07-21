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
      <div>
        {image_urls && image_urls.length > 0 && <img src={image_urls[0]} alt={name} />}
      </div>
      <div className="data">
        <Link to={productUrl}>
          <div><h4>{name}</h4></div>
        </Link>
        <div className="priceAndAdd">
          <div className="price" ><span>{price}$</span></div>
          <button className="btnAddtoCart" onClick={() => {
            dispatch(addToCart(dataGeneral))
          }}>Add to Cart<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" /></svg></button>
        </div>
      </div>
    </article>
  )
};

export default ProductCard;