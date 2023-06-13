import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminCarDetails from './components/AdminCarDetails';
import EditBooking from './components/Booking/EditBooking';
import MyBookings from './components/Booking/MyBookings';
import BookingDetails from './components/Booking/BookingDetails';
import CarDetails from './components/Booking/CarDetails';
import AddCarDetails from './components/AddCarDetails';
import AdminRegistration from './components/AdminRegistration';
import EditCarDetails from './components/EditCarDetails';
import Home from './components/Home';
import Orderpage from './components/Orderpage';
import Register from './components/Register';

function AppRouter() {
    return (
        <div className='whole' style={{ background: 'White' }}>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/adminlogin' element={<AdminRegistration />} />
                    <Route path='/addcar' element={<AddCarDetails />} />
                    <Route path='/editcar' element={<EditCarDetails />} />
                    <Route path='/adminCarDetails' element={<AdminCarDetails />} />
                    <Route path='/editbooking' element={<EditBooking />} />
                    <Route path='/mybooking' element={<MyBookings />} />
                    <Route path='/cardetails' element={<CarDetails />} />
                    <Route path='/bookingdetails' element={<BookingDetails />} />
                    <Route path='/orderpage' element={<Orderpage />} />
                </Routes>

            </Router>

        </div>
    )
}

export default AppRouter;