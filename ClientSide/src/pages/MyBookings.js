import React, { useContext, useEffect, useState } from "react";
import "../../src/custom_styles/MyBookings.css";
import { Link } from "react-router-dom";
import { CarContextData } from "../context_file/CarContext";
import Home from "./Home";
import MapComponent from "../components/LeafletMap/MapComponent";
import { getLatLng } from "../clientside_utils/bookingValidation";

function MyBookings() {
  const { setEditBookingDetails, BaseUrl, setIsEditMode } =
    useContext(CarContextData);
  const UserToken = JSON.parse(localStorage.getItem("User-token"));
  const userId = JSON.parse(localStorage.getItem("User-Id"));
  const [bookingsData, setBookingsData] = useState([]);
  const [latLngData, setLatLngData] = useState({}); // Store lat/lng for each booking by id

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

  // Fetch LatLng for each booking's origin and destination
  const fetchLatLongData = async (bookingId, origin, destination) => {
    try {
      const originLatLng = await getLatLng(origin);
      const destinationLatLng = await getLatLng(destination);

      setLatLngData((prevData) => ({
        ...prevData,
        [bookingId]: { originLatLng, destinationLatLng },
      }));
    } catch (error) {
      console.error("Error fetching lat/long:", error);
    }
  };

  // When bookings are fetched, get lat/lng for each booking
  useEffect(() => {
    bookingsData.forEach((booking) => {
      if (booking.origin && booking.destination) {
        fetchLatLongData(booking._id, booking.origin, booking.destination);
      }
    });
  }, [bookingsData]);

  const handleDeleteBooking = (id) => {
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
    setIsEditMode(true);
    setEditBookingDetails(booking);
  };

  if (!UserToken) {
    return <Home />;
  }

  return (
    <div className="booking-main-container">
      <h1 className="my-booking-heading">My Bookings</h1>
      {bookingsData.length ? (
        bookingsData.map((booking) => (
          <div className="booking-container" key={booking._id}>
            <div className="booking-column-image">
              <img src={booking.image} alt="Car" className="car-image" />
            </div>
            <div className="booking-column-details">
                <h4>{booking.carName}</h4>
                <h5>{booking.carNumber}</h5>
                <h6>Car Details: {booking.details}</h6>
            </div>
            <div className="booking-column-info">
              <div className="booking-info-div">
                <span className="booking-heading">Origin</span>{" "}
                {booking.origin}
              </div>
              <div className="booking-info-div">
                <span className="booking-heading">Destination</span>{" "}
                {booking.destination}
              </div>
              <div className="booking-info-div">
                <span className="booking-heading">Start Date</span>{" "}
                {booking.startDate}
              </div>
              <div className="booking-info-div">
                <span className="booking-heading">End Date</span>{" "}
                {booking.endDate}
              </div>
            </div>
            <div className="mybooking-map">
              {/* Conditionally render the map if lat/lng is available */}
              {latLngData[booking._id]?.originLatLng &&
              latLngData[booking._id]?.destinationLatLng ? (
                <MapComponent
                  originLatLng={latLngData[booking._id].originLatLng}
                  destinationLatLng={latLngData[booking._id].destinationLatLng}
                />
              ) : (
                <p>Loading map...</p>
              )}
            </div>
            <div className="booking-column-meta">
              <div className="booking-meta">
                <h6>
                  <span className="booking-heading">Booking ID</span>:{" "}
                  {booking.bookingId}
                </h6>
                <h6>
                  <span className="booking-heading">Booking Date</span>:{" "}
                  {booking.bookingDate}
                </h6>
                <h6>
                  <span className="booking-heading">Booking Time</span>:{" "}
                  {booking.bookingTime}
                </h6>
              </div>
            </div>
            <div className="booking-column-actions">
              <Link to="/bookingdetails">
                <button
                  className="btn-edit-booking"
                  onClick={() => handleEditBooking(booking)}
                >
                  Edit
                </button>
              </Link>
              <button
                className="btn-cancel-booking"
                onClick={() => handleDeleteBooking(booking._id)}
              >
                Cancel
              </button>
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
