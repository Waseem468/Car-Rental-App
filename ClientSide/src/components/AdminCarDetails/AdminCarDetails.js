import React from "react";
import { Link } from "react-router-dom";
import AdminCarCard from "./AdminCarCard";
import "../../styles/AdminCarDetails.css";

const AdminCarDetails = () => {
  const adminName = JSON.parse(localStorage.getItem("Admin-name"));

  return (
    <div className="admin-container">
      <div className="admin-content">
        <div className="admin-greeting">
          <h1>Hello, {adminName}!</h1>
        </div>
        <div className="admin-header">
          <div className="admin-header-title">Cars</div>
          <Link to={"/addcar"}>
            <button className="admin-add-car-btn">Add Cars</button>
          </Link>
        </div>
        <div className="admin-cars-list">
          <AdminCarCard />
        </div>
      </div>
    </div>
  );
};

export default AdminCarDetails;
