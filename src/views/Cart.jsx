import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // Ensure consistency in cart data by cleaning up itemQuantity and quantity
    const cleanedCart = cartItems.map(item => ({
      ...item,
      quantity: Number(item.quantity) || Number(item.itemQuantity) || 1, // Normalize quantity
      price: Number(item.price) || 0 // Ensure price is a valid number
    }));
    setCart(cleanedCart);
  }, []);

  const handleCheckout = () => {
    // Ensure that all quantities are numbers and prices are recalculated before storing in orders
    const updatedCart = cart.map(item => ({
      ...item,
      quantity: Number(item.quantity) || 1, // Convert string quantity to number
      price: Number(item.price) || 0, // Ensure price is a number
      totalPrice: (Number(item.price) || 0) * (Number(item.quantity) || 1) // Recalculate price based on quantity
    }));

    // Store updated cart as orders
    localStorage.setItem("orders", JSON.stringify(updatedCart));

    // Remove cart from localStorage after checkout
    localStorage.removeItem("cart");

    // Navigate to the order page
    navigate("/order");
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index, change) => {
    const updatedCart = [...cart];
    const newQuantity = (Number(updatedCart[index].quantity) || 1) + change;
    if (newQuantity === 0) {
      updatedCart.splice(index, 1); // Remove item if quantity becomes 0
    } else {
      updatedCart[index].quantity = newQuantity;
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () =>
    cart
      .reduce(
        (total, item) =>
          total + (Number(item.price) || 0) * (Number(item.quantity) || 1),
        0
      )
      .toFixed(2);

  const navigateToShop = () => navigate("/shop");

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛍️ Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart-container">
          <p className="empty-cart">Oops! Your cart is empty. 😟</p>
          <button className="shop-now-button" onClick={navigateToShop}>
            Shop Now 🛒
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-details">
                  <h3 className="item-name">{item.productName}</h3>
                  <p className="item-price">
                    💲 {item.price} x {item.quantity || 1} = 💲{" "}
                    {(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                  <div className="quantity-controls">
                    <button
                      className="quantity-button"
                      onClick={() => handleQuantityChange(index, -1)}
                    >
                      ➖
                    </button>
                    <span className="quantity-display">
                      {item.quantity || 1}
                    </span>
                    <button
                      className="quantity-button"
                      onClick={() => handleQuantityChange(index, 1)}
                    >
                      ➕
                    </button>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>
              Total: 💲 {calculateTotal()} | Items: {cart.length}
            </h3>
            <button className="checkout-button" onClick={handleCheckout}>
              Proceed to Checkout 🚀
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
