import React from "react";
import { Link } from "react-router-dom";
import AdminCarCard from "./AdminCarCard";
import "../../styles/AdminCarDetails.css";

const AdminCarDetails = () => {
  const adminName = localStorage.getItem("Admin-name");

  return (
    <div className="admin-container">
      <h1 className="admin-greeting">Hello, {JSON.parse(adminName)}!</h1>
      <div className="admin-header">
        <h2>Cars</h2>
        <Link to="/addcar" className="admin-add-car-link">
          <button className="admin-add-car-btn">Add Car</button>
        </Link>
      </div>
      <div className="admin-cars-list">
        <AdminCarCard />
      </div>
    </div>
  );
};

export default AdminCarDetails;
