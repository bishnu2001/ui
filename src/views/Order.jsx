import React, { useEffect, useState } from "react";
import "../styles/Order.css";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  // Correctly calculate total price for a single order object

  return (
    <div className="orders-container">
      <h2 className="orders-title">Your Orders</h2>
      {orders.length === 0 ? (
        <p className="no-orders">
          You have no orders. Start shopping to place your first order! 🛒
        </p>
      ) : (
        <div className="orders-list">
          {orders.map((order, index) => (
            <div key={index} className="order-item">
              <div className="order-details">
                <h3 className="order-name">Order #{index + 1}</h3>
                <p className="order-estimate">🕒 Estimated Arrival: 3-5 Business Days</p>
                {/* Calculate and display total price for the order */}
                <p className="order-price">💲 Total: ${order.totalPrice}</p>
                {/* <div className="order-items-list">
                  {order.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="order-item-details">
                      <p className="order-item-name">
                        {item.productName} x {item.quantity || 1}
                      </p>
                      <p className="order-item-price">💲 {item.price} each</p>
                      <p className="order-item-total">
                        Total: 💲 {(item.price * (item.quantity || 1)).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
