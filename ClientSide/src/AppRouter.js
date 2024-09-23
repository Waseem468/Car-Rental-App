import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, useParams, useLocation } from "react-router-dom";
import AdminCarDetails from "./components/AdminCarDetails/AdminCarDetails";
import AddCarDetails from "./components/AdminCarDetails/AddCarDetails";
import EditCarDetails from "./components/AdminCarDetails/EditCarDetails";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BookingForm from "./pages/BookingForm";
import AvailableCars from "./pages/AvailableCars";
import MyBookings from "./pages/MyBookings";
import BookingDetails from "./pages/BookingDetails";

function AppRouter() {
  const path = useLocation().pathname
  const [showNav , setShowNav] = useState(false)

  useEffect(()=>{

  },[showNav])
  return (
    <div className="app-container" >
      <Navbar setShowNav={setShowNav}/>
      <div style={{
        marginTop:`${showNav ? path==='/'  || path === '/booking-form' ? 0 :'11vh' :0}`,
         transition: 'margin-top 0.8s ease-in-out'
      }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcar" element={<AddCarDetails />} />
        <Route path="/editcar" element={<EditCarDetails />} />
        <Route path="/adminCarDetails" element={<AdminCarDetails />} />
        <Route path="/mybooking" element={<MyBookings />} />
        <Route path="/bookingdetails" element={<BookingDetails />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/available-cars" element={<AvailableCars />} />
      </Routes>
      </div>
    </div>
  );
}

export default AppRouter;
