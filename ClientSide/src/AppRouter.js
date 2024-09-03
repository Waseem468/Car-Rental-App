import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminCarDetails from "./components/AdminCarDetails/AdminCarDetails";
import EditBooking from "./components/Booking/EditBooking";
import MyBookings from "./components/Booking/MyBookings";
import BookingDetails from "./components/Booking/BookingDetails";
import CarDetails from "./components/Booking/CarDetails";
import AddCarDetails from "./components/AdminCarDetails/AddCarDetails";
import EditCarDetails from "./components/AdminCarDetails/EditCarDetails";
import Home from "./pages/Home";
import Orderpage from "./components/Booking/Orderpage";
import Navbar from "./components/Navbar";
import BookingForm from "./pages/BookingForm";

function AppRouter() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcar" element={<AddCarDetails />} />
        <Route path="/editcar" element={<EditCarDetails />} />
        <Route path="/adminCarDetails" element={<AdminCarDetails />} />
        <Route path="/editbooking" element={<EditBooking />} />
        <Route path="/mybooking" element={<MyBookings />} />
        <Route path="/cardetails" element={<CarDetails />} />
        <Route path="/bookingdetails" element={<BookingDetails />} />
        <Route path="/orderpage" element={<Orderpage />} />
        <Route path="/booking-form" element={<BookingForm />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
