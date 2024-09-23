import React, { useState, useEffect, useContext } from "react";
import BookingSummary from "../components/Booking/BookingSummary";
import CarFilterBar from "../components/Booking/CarFilterBar";
import Card from "../components/Booking/Card";
import "../styles/AvailableCars.css";
import { CarContextData } from "../context/CarContext";

const AvailableCars = () => {
  const [carData, setCarData] = useState([]);
  const { BaseUrl } = useContext(CarContextData);
  const tokenUser = JSON.parse(localStorage.getItem("User-token"));

  useEffect(() => {
    if (tokenUser) {
      const fetchCarData = async () => {
        try {
          const response = await fetch(`${BaseUrl}/car/all-cars`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${tokenUser}`,
            },
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          if (data.success) {
            setCarData(data.cars);
          } else {
            console.error("Error fetching car data:", data.message);
          }
        } catch (error) {
          console.error("Error fetching car data:", error);
        }
      };

      fetchCarData();
    }
  }, [tokenUser, BaseUrl]);

  return (
    <div className="available-car-container">
      <BookingSummary className="booking-summary" />
      <CarFilterBar className="car-filter-bar" />
      <div className="card-container">
        {carData.map((car) => (
          <Card key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
