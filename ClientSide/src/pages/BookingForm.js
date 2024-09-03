import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookingForm.css";
import Home from "./Home";
import { CarContextData } from "../context/CarContext";

const BookingForm = () => {
  const tokenUser = JSON.parse(localStorage.getItem("User-token"));
  const { setHeaderData, inputData, setInputData } = useContext(CarContextData);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { origin, destination, startDate, endDate } = inputData;

    if (!origin || !destination || !startDate || !endDate) {
      // Handle validation errors
      alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("origin", origin);
    formData.append("destination", destination);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);

    console.log(inputData,"from booking form page");

    setHeaderData(inputData);
    navigate("/cardetails");
  };

  if (!tokenUser) {
    return <Home />;
  }

  return (
    <div className="booking-form-container">
      <div className="booking-form">
        <form onSubmit={handleFormSubmit}>
          <h4>
            Where Every Drive Becomes an Experience – Find Your Ideal Car with
            Us.
          </h4>
          <input
            type="text"
            name="origin"
            className="booking-input"
            placeholder="Origin"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="destination"
            className="booking-input"
            placeholder="Destination"
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="startDate"
            className="booking-input"
            placeholder="Start Date"
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="endDate"
            className="booking-input"
            placeholder="End Date"
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
