import React from "react";
import "./index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminCarDetails from "./components/AdminCarDetails/AdminCarDetails";
import EditBooking from "./components/Booking/EditBooking";
import MyBookings from "./components/Booking/MyBookings";
import BookingDetails from "./components/Booking/BookingDetails";
import CarDetails from "./components/Booking/CarDetails";
import AddCarDetails from "./components/AdminCarDetails/AddCarDetails";
import AdminRegistration from "./components/Admin/AdminRegistration";
import EditCarDetails from "./components/AdminCarDetails/EditCarDetails";
import Home from "./pages/Home";
import Orderpage from "./components/Booking/Orderpage";
// import Register from './components/Register';
import AdminRegister from "./components/Admin/AdminRegister";
import UserRegister from "./components/User/UserRegister";
import Navbar from "./components/Navbar";

function AppRouter() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/register' element={<Register />} /> */}
        <Route path="/adminlogin" element={<AdminRegistration />} />
        <Route path="/addcar" element={<AddCarDetails />} />
        <Route path="/editcar" element={<EditCarDetails />} />
        <Route path="/adminCarDetails" element={<AdminCarDetails />} />
        <Route path="/editbooking" element={<EditBooking />} />
        <Route path="/mybooking" element={<MyBookings />} />
        <Route path="/cardetails" element={<CarDetails />} />
        <Route path="/bookingdetails" element={<BookingDetails />} />
        <Route path="/orderpage" element={<Orderpage />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/userRegister" element={<UserRegister />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
