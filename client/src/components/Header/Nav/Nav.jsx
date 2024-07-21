import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Nav = () => {
  const numberCart = useSelector(state => state.numberItems);

  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }

  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  return (
    <nav>
      <ul className="sidebar">
        <li onClick={hideSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30">
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          </a>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart" title='Shopping cart' id='cartIconContainer'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
            <span>{numberCart}</span>
          </Link>
        </li>
      </ul>
      <ul>
        <li className="hideOnMobile">
          <Link to="/">Home</Link>
        </li>
        <li className="hideOnMobile">
          <Link to="/products">Products</Link>
        </li>
        <li className="hideOnMobile">
          <Link to="/cart" title='Shopping cart' id='cartIconContainer'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
            <span>{numberCart}</span>
          </Link>
        </li>
        <li className="menu-button">
          <a onClick={showSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;