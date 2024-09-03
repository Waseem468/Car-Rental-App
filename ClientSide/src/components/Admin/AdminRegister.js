import React, { useContext } from "react";
import Register from "../Register";
import { CarContextData } from "../../context/CarContext";

const AdminRegister = () => {
  const { setIsAdmin, setView, setShowAdminRegister } = useContext(CarContextData);

  const handleAdminLoginClick = () => {
    setIsAdmin(true);
    setView("adminLogin");
    setShowAdminRegister(false);
  };

  return (
    <Register
      heading="Register Your Admin Account"
      apiEndpoint="https://car-rental-app-1-5tgr.onrender.com/admin/register"
      onSuccessRedirect="/"
      onSignInClick={handleAdminLoginClick}
    />
  );
};

export default AdminRegister;
