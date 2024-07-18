import React from 'react';
import { Link, NavLink } from "react-router-dom";

const ProductCard = ({
  dataGeneral: {
    name,
    price,
    image_urls
  }
}) => {

  return (
    <article className="articleProductCard">
      {/* {image_urls.map((element, index) => (
        <img key={index} src={element} alt={`Product Image ${index + 1}`} />
      ))} */}
      {<img src={image_urls[0]} />}
      <div>
        <div><h4>{name}</h4></div>
        <div><span>{price}</span></div>
      </div>
    </article>
  )
};

export default ProductCard;
