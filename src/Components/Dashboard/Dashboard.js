import React from 'react';
import './Dashboard.css'; // Optional: Create a CSS file for styling

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to Unstop</h1>
      <div className="user-card">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="profile-pic"
        />
        <h2>Michael Dam</h2>
        <p>example@gmail.com</p>
        <p>Female</p>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};
