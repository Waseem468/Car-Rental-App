import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import '../Styles/navLogout.css';

function NavLogout() {
    return (
        <nav id="nav-container">
            <div id="logo-of-the-app">
                <img src="data:image/png;base64,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" id="car-logo" />
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