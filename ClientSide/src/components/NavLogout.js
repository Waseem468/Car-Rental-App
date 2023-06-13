import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import '../Styles/navLogout.css';

function NavLogout() {
    return (
        <nav id="nav-container">
            <div id="logo-of-the-app">
                <img src="https://media.istockphoto.com/id/1290071290/vector/rental-car-icon.jpg?s=612x612&w=0&k=20&c=q4EsvU3jJJYbcZTJ1EzKh6c-Dvy39HagvAUgTCRK9bE=" id="car-logo" />
            </div>
            <div id="bookings-logout-btns">
                <Link to={'/mybooking'}>
                    <button id="btn-1">My Bookings</button>
                </Link>
                <Link to={'/'}>
                    <button id="btn-2">Logout</button>
                </Link>
            </div>
        </nav>
    );
}

export default NavLogout;