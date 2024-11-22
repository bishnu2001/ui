import React, { useEffect, useState } from 'react';
import "../styles/AllProduct.css";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleAddToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    currentCart.push(product);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  };

  return (
    <div className="all-product-container">
      <h2 className="product-title">All Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-image">
              <img src={product.imageUrl} alt={product.productName} className="product-img" />
            </div>
            <div className="product-details">
              <h3>{product.productName}</h3>
              <p>Quantity: {product.itemQuantity}</p>
              <div className="product-price">
                {product.discount && (
                  <span className="original-price">${product.price}</span>
                )}
                <span className={`price ${product.discount ? 'discounted' : ''}`}>
                  ${product.discount ? (product.price - (product.price * (product.discount / 100))).toFixed(2) : product.price}
                </span>
              </div>
              <div className="product-rating">
                <span>{'⭐'.repeat(product.rating)}</span>
                <p>({product.reviewCount} reviews)</p>
              </div>
              {product.discount && <span className="discount-tag">-{product.discount}%</span>}
            </div>
            <div className="product-back">
              <p>{product.description}</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
