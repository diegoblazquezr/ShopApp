import React from 'react';
import { Link, NavLink } from "react-router-dom";

const ProductCard = ({
  dataGeneral: {
    name,
    price
  }
}) => {

  return (
    <article className="articleProductCard">
      <h4>{name}</h4>
      <span>{price}</span>
    </article>
  )
};

export default ProductCard;
