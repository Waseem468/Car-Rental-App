import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/BookingSummary.css";
import { CarContextData } from "../../context/CarContext";

function BookingSummary() {
  const { headerData } = useContext(CarContextData);

  return (
    <div className="booking-summary">
      <div className="booking-item">
        <span className="booking-label">Origin:</span>
        <span className="booking-value">{headerData.origin}</span>
      </div>
      <div className="booking-item">
        <span className="booking-label">Destination:</span>
        <span className="booking-value">{headerData.destination}</span>
      </div>
      <div className="booking-item">
        <span className="booking-label">Start Date:</span>
        <span className="booking-value">{headerData.startDate}</span>
      </div>
      <div className="booking-item">
        <span className="booking-label">End Date:</span>
        <span className="booking-value">{headerData.endDate}</span>
      </div>
      <Link to="/booking-form">
        <button className="modify-btn">Modify</button>
      </Link>
    </div>
  );
}

export default BookingSummary;
