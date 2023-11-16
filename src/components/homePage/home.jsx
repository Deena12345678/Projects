// HomePage.js

import React from 'react';
import './homePage.css'; // Import your CSS file for styling
import leather from './leather.jpg';
import leath from './leath.jpg';

const HomePage = () => {
  return (
    <div className="home-page">

      <div className="big-banner">
        <img src={leath} alt="Big Banner" />
      </div>
      <h2 className="news-ticker">Latest News: This is a sample news that runs from left to right at 15s speed.</h2>
    
      <div className="recommended-products">
    

        <h2>Recommended Products</h2>

        <div className="product">
          <img src={leather} alt="Product 1" />
          <div className="product-info">
            <h3>Product 1</h3>
            <p>Shop now for just $19.99</p>
            <a href="/shop">Shop</a>
          </div>
        </div>

        <div className="product">
          <img src={leather} alt="Product 2" />
          <div className="product-info">
            <h3>Product 2</h3>
            <p>Shop now for just $29.99</p>
            <a href="/shop">Shop</a>
          </div>
        </div>

        {/* Add more product items as needed */}
      </div>
    </div>
  );
};

export default HomePage;
