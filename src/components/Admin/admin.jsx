// AdminDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/admin/users">Manage Users</Link>
          </li>
          <li>
            <Link to="/admin/products">Manage Products</Link>
          </li>
          
        </ul>
      </nav>
      <div>
       
        <h3>User Management</h3>
      
      </div>
      <div>

   
      </div>
    </div>
  );
};

export default Admin;
