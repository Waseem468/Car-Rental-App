import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminCarCard.css";
import { CarContextData } from "../../context/CarContext";
import { truncate } from "../../utils/truncateWord";

function AdminCarCard() {
  const adminId = JSON.parse(localStorage.getItem("Admin-Id"));
  const adminToken = JSON.parse(localStorage.getItem("Admin-token"));
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { carDetails, setCarDetails, setEdit, BaseUrl } =
    useContext(CarContextData);

  useEffect(() => {
    if (!adminToken) {
      navigate("/");
      return;
    }

    // Fetch admin's cars
    fetch(`${BaseUrl}/car/my-cars/${adminId}`, {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cars");
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setCarDetails(data.cars.reverse());
        } else {
          throw new Error(data.message || "Failed to retrieve cars");
        }
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message);
      });
  }, [adminId, adminToken, BaseUrl, navigate, setCarDetails]);

  return (
    <>
      {errorMessage && (
        <div className="error-message">
          {errorMessage}
          <button
            onClick={() => setErrorMessage("")}
            className="error-dismiss-btn"
          >
            OK
          </button>
        </div>
      )}

      {carDetails.map((car, index) => (
        <div key={index} className="car-card">
          <div className="car-image-container">
            <img
              src={car.image}
              className="car-image"
              alt={car.name}
              onClick={() => {
                if (adminId !== car.adminId) {
                  setErrorMessage("You don't have access to edit this car");
                } else {
                  setEdit(car);
                  navigate("/editcar");
                }
              }}
            />
          </div>
          <div className="car-capacity">{car.capacity} Persons</div>
          <div className="car-details">
            <div>{truncate(car.carName,13)}</div>
            <div className="car-price">{car.pricePerKm} Rs/KM</div>
          </div>
          <div className="car-availability">
            <span>Available Date:</span>
            <span>{/* Add availability logic here if needed */}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default AdminCarCard;
