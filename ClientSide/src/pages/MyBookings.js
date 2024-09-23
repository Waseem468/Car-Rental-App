import React, { useContext, useEffect, useState } from "react";
import "../../src/styles/MyBookings.css";
import MybookingMapImage from "../../src/images/map.png";
import { Link } from "react-router-dom";
import { CarContextData } from "../context/CarContext";
import Home from "./Home";

function MyBookings() {
  const { setEditBookingDetails, BaseUrl, setIsEditMode } =
    useContext(CarContextData);
  const UserToken = JSON.parse(localStorage.getItem("User-token"));
  const userId = JSON.parse(localStorage.getItem("User-Id"));
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    const fetchBookings = () => {
      if (userId) {
        fetch(`${BaseUrl}/booking/user/${userId}`, {
          headers: {
            authorization: UserToken,
          },
        })
          .then((res) => res.json())
          .then((result) =>
            setBookingsData(result.bookings ? result.bookings.reverse() : [])
          )
          .catch((err) => console.log(err.message));
      }
    };

    fetchBookings();
  }, [userId, BaseUrl, UserToken]);

  console.log(bookingsData, "bookingsData");

  const deleteCarData = (id) => {
    fetch(`${BaseUrl}/booking/${id}`, {
      method: "DELETE",
      headers: {
        authorization: UserToken,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setBookingsData((prevBookData) =>
            prevBookData.filter((booking) => booking._id !== id)
          );
        }
      })
      .catch((err) => console.log(err.message));
  };

  const handleEditBooking = (booking) => {
    setIsEditMode(true); // Set isEditMode to true
    setEditBookingDetails(booking); // Pass the booking details to be edited
  };

  if (!UserToken) {
    return <Home />;
  }

  return (
    <div className="booking-main-container">
      <h1 className="my-booking-heading">My Bookings</h1>
      {bookingsData.length ? (
        bookingsData.map((booking) => (
          <div key={booking._id} className="booking-container">
            {" "}
            {/* Use unique booking id as key */}
            <div className="booking-item">
              <img
                src={booking.image} // Placeholder image for cars
                alt="Car"
                className="car-image"
              />
            </div>
            <div className="booking-item">
              <div className="car-details">
                <h4>{booking.carName}</h4>
                <h5>{booking.carNumber}</h5>
                <h6>Car Details: {booking.details}</h6>
              </div>
            </div>
            <div className="booking-item">
              <div className="booking-info">
                <div>
                  <span className="booking-heading">Origin</span>:{" "}
                  <span>{booking.origin}</span>
                </div>
                <div>
                  <span className="booking-heading">Destination</span>:{" "}
                  <span>{booking.destination}</span>
                </div>
                <div>
                  <span className="booking-heading">Start Date</span>:{" "}
                  <span>{booking.startDate}</span>
                </div>
                <div>
                  <span className="booking-heading">End Date</span>:{" "}
                  <span>{booking.endDate}</span>
                </div>
              </div>
              <div className="map-image">
                <img src={MybookingMapImage} alt="Map" />
              </div>
            </div>
            <div className="booking-item">
              <div className="booking-meta">
                <h6>
                  <span className="booking-heading">Booking ID</span>:{" "}
                  <span>{booking.bookingId}</span>
                </h6>
                <h6>
                  <span className="booking-heading">Booking Date</span>:{" "}
                  <span>{booking.bookingDate}</span>
                </h6>
                <h6>
                  <span className="booking-heading">Booking Time</span>:{" "}
                  <span>{booking.bookingTime}</span>
                </h6>
              </div>
            </div>
            <div className="booking-item">
              <div className="booking-actions">
                <Link to="/bookingdetails">
                  <button
                    className="btn-edit-booking"
                    onClick={() => handleEditBooking(booking)} // Call the handleEditBooking function
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className="btn-cancel-booking"
                  onClick={() => deleteCarData(booking._id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
}

export default MyBookings;
