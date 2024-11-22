import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaShoppingCart } from 'react-icons/fa'; // Cart icon

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Check the cart items in localStorage and set the initial cart count
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartItems.length); // Set cart count to the length of cartItems
  }, []); // This will run only once when the component mounts

  return (
    <div>
      <div className="nav-container">
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/allproducts" className="nav-link">
          All Products
        </Link>
        <Link to="/cart" className="nav-link">
          <div className="cart-icon-container">
            <FaShoppingCart className="cart-icon" />
            {cartCount >= 0 && <span className="cart-count">{cartCount}</span>} {/* Cart count */}
            <span>
            Cart
            </span>  
          </div>
        </Link>
        <Link to="/order" className="nav-link">
          Order
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
