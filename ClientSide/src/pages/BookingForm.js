import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookingForm.css";
import Home from "./Home";
import { CarContextData } from "../context/CarContext";

const BookingForm = () => {
  const tokenUser = JSON.parse(localStorage.getItem("User-token"));
  const { headerData, setHeaderData } = useContext(CarContextData);
  const [inputData, setInputData] = useState({
    origin: headerData?.origin || "",
    destination: headerData?.destination || "",
    startDate: headerData?.startDate || "",
    endDate: headerData?.endDate || "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Prefill the form with headerData if available
    if (headerData) {
      setInputData({
        origin: headerData.origin || "",
        destination: headerData.destination || "",
        startDate: headerData.startDate || "",
        endDate: headerData.endDate || "",
      });
    }
  }, [headerData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { origin, destination, startDate, endDate } = inputData;

    if (!origin || !destination || !startDate || !endDate) {
      alert("Please fill in all fields.");
      return;
    }

    // Store the current form data into headerData (context)
    setHeaderData(inputData);
    navigate("/available-cars"); // Navigate to the next step
  };

  if (!tokenUser) {
    return <Home />;
  }

  return (
    <div className="booking-form-container">
      <div className="booking-quotes">
        <p className="user-text-of-the-home-page">
          You can Unlock the Best Deals <br />
          Book Your Dream Ride <br />
          Today!
        </p>
      </div>
      <div className="booking-form">
        <form onSubmit={handleFormSubmit}>
          <h4>Your Next Journey Starts with the Perfect Car.</h4>
          <input
            type="text"
            name="origin"
            className="booking-input"
            placeholder="Origin"
            value={inputData.origin}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="destination"
            className="booking-input"
            placeholder="Destination"
            value={inputData.destination}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="startDate"
            className="booking-input"
            placeholder="Start Date"
            value={inputData.startDate}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="endDate"
            className="booking-input"
            placeholder="End Date"
            value={inputData.endDate}
            onChange={handleInputChange}
            required
          />
          <div className="booking-form-actions">
            <button type="submit" className="booking-submit-btn">
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
