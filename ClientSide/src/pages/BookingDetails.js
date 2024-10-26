import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/custom_styles/BookingDetails.css";
import { v4 as uuidv4 } from "uuid";
import { CarContextData } from "../context_file/CarContext";
import { getLatLng, validateLocationsInIndia } from "../clientside_utils/bookingValidation";
import { calculateDistance } from "../clientside_utils/calculateDistance";
import MapComponent from "../components/LeafletMap/MapComponent";
import { formatDate, formatTime } from "../clientside_utils/formatDateTime";
import { ToastContainer } from "react-toastify";

function BookingDetails() {
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("User-Id"));
  const {
    headerData,
    userSelectedCar,
    BaseUrl,
    isEditMode,
    editBookingDetails,
  } = useContext(CarContextData);

  const [latLngData, setLatLngData] = useState({
    originLatLng: null,
    destinationLatLng: null,
  });

  const [bookingDetails, setBookingDetails] = useState({
    carName: userSelectedCar?.carName || editBookingDetails?.carName || "",
    pricePerKm:
      userSelectedCar?.pricePerKm || editBookingDetails?.pricePerKm || "",
    details:
      userSelectedCar?.carDetails || editBookingDetails?.carDetails || "",
    carNumber:
      userSelectedCar?.carNumber || editBookingDetails?.carNumber || "",
    image: userSelectedCar?.image || editBookingDetails?.image || "",
    origin: headerData?.origin || editBookingDetails?.origin || "",
    destination:
      headerData?.destination || editBookingDetails?.destination || "",
    startDate: headerData?.startDate || editBookingDetails?.startDate || "",
    endDate: headerData?.endDate || editBookingDetails?.endDate || "",
  });

  const bookingId = isEditMode ? editBookingDetails?.bookingId : uuidv4();
  const bookingDate = new Date().toISOString();
  const bookingTime = new Date().toISOString();

  const [debouncedOrigin, setDebouncedOrigin] = useState(bookingDetails.origin);
  const [debouncedDestination, setDebouncedDestination] = useState(
    bookingDetails.destination
  );

  const fetchLatLongData = async (origin, destination) => {
    try {
      const originLatLng = await getLatLng(origin);
      const destinationLatLng = await getLatLng(destination);
      setLatLngData({ originLatLng, destinationLatLng });

      if (originLatLng && destinationLatLng) {
        const distance = calculateDistance(
          originLatLng.latitude,
          originLatLng.longitude,
          destinationLatLng.latitude,
          destinationLatLng.longitude
        );
        setBookingDetails((prevDetails) => ({
          ...prevDetails,
          distance,
        }));
      }
    } catch (error) {
      console.error("Error fetching lat/long:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLatLongData(debouncedOrigin, debouncedDestination);
    }, 1000); // 1000ms debounce delay

    return () => clearTimeout(timer);
  }, [debouncedOrigin, debouncedDestination]);

  const calculatePrice = () => {
    const distance = parseInt(bookingDetails.distance) || 0;
    const perKm = parseInt(bookingDetails.pricePerKm) || 0;
    const subtotal = distance * perKm;
    const tax = parseInt(subtotal * 0.2);
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const { subtotal, tax, total } = calculatePrice();

  const handleBookingSubmit = async () => {
    // Validate origin and destination before submission
    const isValid = await validateLocationsInIndia(
      bookingDetails.origin,
      bookingDetails.destination
    );

    if (!isValid) {
      // If validation fails, do not proceed with the submission
      return;
    }
    const endpoint = isEditMode
      ? `${BaseUrl}/booking/${bookingId}`
      : `${BaseUrl}/booking/`;

    fetch(endpoint, {
      method: isEditMode ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...bookingDetails,
        userId,
        bookingId,
        bookingDate,
        bookingTime,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        navigate("/mybooking", { replace: true });
      })
      .catch((err) => console.error(err.message));

  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    if (name === "origin" || name === "destination") {
      if (name === "origin") {
        setDebouncedOrigin(value);
      } else if (name === "destination") {
        setDebouncedDestination(value);
      }
    }
  };

  return (
    <div className="booking-details-main-container">
      <ToastContainer />
      {/* Left container for Car and Booking Details */}
      <div className="booking-details-left-container">
        <h4 className="heading-of-mybooking">
          {isEditMode ? "Edit Booking" : "Booking Details"}
        </h4>

        <div className="booking-details-first-section">
          <div className="car-details-section">
            <div className="car-info-name">
              Car Name:{" "}
              <span className="car-name">{bookingDetails.carName}</span>
            </div>
            <div className="car-info-model">
              Car Number:{" "}
              <span className="car-model">{bookingDetails.carNumber}</span>
            </div>
          </div>

          <div className="booked-car-image">
            <img src={bookingDetails.image} alt="Car" />
          </div>
        </div>
        <hr />

        <div className="booking-details-second-section">
          {/* Editable Booking Fields, only show inputs in Edit Mode */}
          <div className="editable-section">
            {isEditMode ? (
              <>
                <div className="edit-row">
                  <label>Origin:</label>
                  <input
                    type="text"
                    name="origin"
                    value={bookingDetails.origin}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="edit-row">
                  <label>Destination:</label>
                  <input
                    type="text"
                    name="destination"
                    value={bookingDetails.destination}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="edit-row">
                  <label>Start Date:</label>
                  <input
                    type="date"
                    name="startDate"
                    value={bookingDetails.startDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="edit-row">
                  <label>End Date:</label>
                  <input
                    type="date"
                    name="endDate"
                    value={bookingDetails.endDate}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="edit-row">
                  <label>Origin:</label>
                  <div>{bookingDetails.origin}</div>
                </div>
                <div className="edit-row">
                  <label>Destination:</label>
                  <div>{bookingDetails.destination}</div>
                </div>
                <div className="edit-row">
                  <label>Start Date:</label>
                  <div>{formatDate(bookingDetails.startDate)}</div>
                </div>
                <div className="edit-row">
                  <label>End Date:</label>
                  <div>{formatDate(bookingDetails.endDate)}</div>
                </div>
              </>
            )}
          </div>

          {/* Map Component */}
          <div className="map-container">
            {latLngData.originLatLng && latLngData.destinationLatLng ? (
              <MapComponent
                originLatLng={latLngData.originLatLng}
                destinationLatLng={latLngData.destinationLatLng}
              />
            ) : (
              <p>Loading map...</p>
            )}
          </div>
        </div>
        <hr />

        {/* Booking ID and Time */}
        <div className="booking-details-third-section">
          <div className="booking-info-time">
            Booking Id: <span className="booking-info-value">{bookingId}</span>
          </div>
          <div className="booking-info-time">
            Booking Date:{" "}
            <span className="booking-info-value">
              {formatDate(bookingDate)}
            </span>
          </div>
          <div className="booking-info-time">
            Booking Time:{" "}
            <span className="booking-info-value">
              {formatTime(bookingTime)}
            </span>
          </div>
        </div>
        <hr />
        <button
          className="booking-cancel-btn"
          onClick={() => navigate("/available-cars")}
        >
          CANCEL
        </button>
      </div>

      {/* Right container for Payment Section */}
      <div className="booking-details-right-container">
        <div className="booking-details-payment-first-section">
          <h5 className="payment-heading">Payment Details</h5>
          <div className="price-per-Km">
            <div>Price per km</div>
            <div className="value-of-price">{bookingDetails.pricePerKm}/Km</div>
          </div>
          <div className="price-per-Km">
            <div>Sub total</div>
            <div className="value-of-price-font">{subtotal} RS</div>
          </div>
          <div className="price-per-Km">
            <div className="tax-value">Tax Charges</div>
            <div className="tex-value-of-price">{tax} RS</div>
          </div>
        </div>
        <hr />
        <div className="payment-second-section">
          <div className="price-per-Km">
            <div>Total</div>
            <div className="value-of-price-font-total">{total} RS</div>
          </div>
          <button className="booking-proceed-btn" onClick={handleBookingSubmit}>
            {isEditMode ? "Update Booking" : "Proceed"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
