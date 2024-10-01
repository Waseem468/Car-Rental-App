import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminCarCard.css";
import { CarContextData } from "../../context/CarContext";

function AdminCarCard() {
  const AdminId = JSON.parse(localStorage.getItem("Admin-Id"));
  const AdminToken = JSON.parse(localStorage.getItem("Admin-token"));
  const navigate = useNavigate();
  const [Go, setGo] = useState("");
  const [error, setError] = useState("");
  const { carDetails, setCarDetails, setEdit, BaseUrl } = useContext(CarContextData);

  useEffect(() => {
    if (!localStorage.getItem("Admin-token")) {
      return navigate("/");
    }

    fetch(`${BaseUrl}/car/my-cars/${AdminId}`, {
      headers: {
        authorization: `Bearer ${AdminToken}`, // Add Bearer token
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch cars");
        }
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
        setError(err.message);
      });
  }, [AdminId, AdminToken, BaseUrl, navigate, setCarDetails]);

  console.log(carDetails);
  return (
    <>
      {error && (
        <div id="display-message">
          {error}
          <span
            onClick={() => {
              setError("");
              setGo("");
            }}
            className="error-button"
          >
            {Go}
          </span>
        </div>
      )}
      <div className="container">
        {carDetails.map((d, i) => {
          return (
            <div key={i} className="main-container">
              <div className="image">
                <img
                  src={d.image}
                  className="car-image"
                  alt="img"
                  onClick={() => {
                    if (AdminId !== d.adminId) {
                      // Use correct key from API response
                      setError("You Don't Have Access To Edit This Details");
                      setGo("OK");
                    } else {
                      setEdit(d);
                      navigate("/editcar");
                    }
                  }}
                />
              </div>
              <div className="capacity">6 Persons</div>
              <div className="innova">
                <div>{d.name}</div>
                <div className="color-of-price">{d.perKm} Rs/KM</div>
              </div>
              <div className="price-per-km">
                <div className="left-of-the-card">Available Date</div>
                <div className="right-of-card">
                  {/* {d.availabelFrom.split("-").reverse().join("/").slice(0, 5)} - */}
                  {/* {d.availabelUntil.split("-").reverse().join("/").slice(0, 5)} */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AdminCarCard;
