import React, { useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../images/logo1.webp";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const navContainer = document.getElementById("nav-container");
      if (e.clientY < 50) {
        navContainer.classList.add("show-nav");
      } else {
        navContainer.classList.remove("show-nav");
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
      <div id="bookings-logout-btns">
        <Link to={"/mybooking"}>
          <button id="btn-1">My Bookings</button>
        </Link>
        <Link to={"/"}>
          <button id="btn-2">Logout</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
