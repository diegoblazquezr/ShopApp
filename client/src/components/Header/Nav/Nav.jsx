import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Nav = () => {
  const numberCart = useSelector(state => state.numberItems);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart" title='Shopping cart' id='cartIconContainer'>
            <img src="https://i.pinimg.com/originals/15/bb/55/15bb559cdd28f56d7c17b00498b4a946.png" alt="shopping cart" />
            <span>{numberCart}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;