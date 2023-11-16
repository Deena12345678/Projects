// Header.js

import React, { useEffect, useState } from 'react';
import './header.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const  auth = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLoginClick = () => {
    // Navigate to the login page when the "Login" button is clicked
    navigate('Projects/login');
  };

  return (
    <div className={`head ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="page-info">
        <h1>Leather Goods Store</h1>
        <p>Contact us at: contact@leatherstore.com</p>
      </div>
      <div className="header">
        <div className="together">
          <div className="logo">
            <a href="/">Home</a>
          </div>
          <div className="nav-links">
            <a href="/shop">Shop</a>
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        
        {!auth.user && (<div className="login">
          <button onClick={handleLoginClick}>Login</button>
        </div>)}
        
      </div>
    </div>
  );
};

export default Header;
