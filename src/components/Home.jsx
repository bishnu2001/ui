import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="home-title">
          Welcome to <span className="highlight">Your E-Commerce Platform</span>
        </h1>
        <p className="hero-subtitle">
          Discover the best products, seamless shopping, and an experience you'll love!
        </p>
        <button className="cta-button glow">Start Shopping</button>
        <div className="floating-images">
          <img
            src="https://nmgprod.s3.amazonaws.com/media/files/77/79/777972aa95a5599e872d727616925b9d/cover_image_1698325190.jpeg"
            alt="E-commerce Hero"
            className="hero-image"
          />
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2021/11/JU/IF/CF/11337912/e-commerce-product-image-editing-services.jpg"
            alt="Product 1"
            className="floating-item product-1"
          />
          <img
            src="https://lh3.googleusercontent.com/proxy/mSS4NveKNkVMXtQee5bp1xCAOq1chVB7LuJBa-SaiUIrWnKJ-cFP3GAKaON31mXC8lnVfUHqqXlXnfEuCYkWOI5pogh1khitFwAwrg1kUavdr_mwPUyI2JWoovM47WJoZw"
            alt="Product 2"
            className="floating-item product-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
