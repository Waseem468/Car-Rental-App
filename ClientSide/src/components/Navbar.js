import React, { useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../images/logo1.webp";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ setShowNav }) {
  const User = localStorage.getItem("User-token");
  const Admin = localStorage.getItem("Admin-token");
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    if (User) {
      localStorage.removeItem("User-token");
    } else if (Admin) {
      localStorage.removeItem("Admin-token");
    }
    navigate("/"); // Redirect to home after logout
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const navContainer = document.getElementById("nav-container");
      if (e.clientY < 50) {
        setShowNav(true);
        navContainer.classList.add("show-nav");
      } else {
        navContainer.classList.remove("show-nav");
        setShowNav(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <nav id="nav-container">
      <div id="logo-of-the-app">
        <img src={logo} id="car-logo" alt="img" />
      </div>

      {User || Admin ? (
        <div id="bookings-logout-btns">
          <Link to={"/mybooking"}>
            <button id="btn-1">My Bookings</button>
          </Link>
          <button id="btn-2" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navbar;
