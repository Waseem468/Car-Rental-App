import React from 'react';
import '../../styles/CarFilterBar.css';

function CarFilterBar() {
  return (
    <div className="car-filter-bar">
      <div className="filter-options">
        <select className="filter-select">
          <option>Car Type</option>
          <option>XUV</option>
          <option>UV</option>
          <option>All</option>
        </select>

        <select className="filter-select">
          <option>Seating</option>
          <option>7</option>
          <option>6</option>
          <option>4</option>
        </select>

        <select className="filter-select">
          <option>Mileage</option>
          <option>10 KM/L</option>
          <option>20 KM/L</option>
          <option>15 KM/L</option>
        </select>

        <button className="filter-button">Other</button>
      </div>
    </div>
  );
}

export default CarFilterBar;
