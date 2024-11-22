import React, { useState } from 'react';
import "../styles/Product.css";

const Product = () => {
  const [productName, setProductName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newProduct = {
      productName,
      itemQuantity: Number(itemQuantity), // Convert to number
      price: Number(price) // Convert to number
    };
  
    // Get existing products from localStorage or initialize an empty array
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
  
    // Add new product to the list
    existingProducts.push(newProduct);
  
    // Store updated list in localStorage
    localStorage.setItem('products', JSON.stringify(existingProducts));
  
    // Clear input fields
    setProductName('');
    setItemQuantity('');
    setPrice('');
  };
  

  return (
    <div className="product-container">
      <div className="product-form-container">
        <h2 className="form-title">Post a New Product</h2>
        <form className="product-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="form-input"
          />
          <input
            type="number"
            placeholder="Item Quantity"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-input"
          />
          <button type="submit" className="submit-button">Post</button>
        </form>
      </div>
    </div>
  );
};

export default Product;
