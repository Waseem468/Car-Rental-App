import React, { useContext } from "react";
import Register from "../Register";
import { CarContextData } from "../../context_file/CarContext";

const AdminRegister = () => {
  const { setIsAdmin, setView, setShowAdminRegister, BaseUrl } =
    useContext(CarContextData);

  const handleAdminLoginClick = () => {
    setIsAdmin(true);
    setView("adminLogin");
    setShowAdminRegister(false);
  };

  return (
    <Register
      heading="Register Your Admin Account"
      apiEndpoint={`${BaseUrl}/admin/register`}
      onSuccessRedirect="/"
      onSignInClick={handleAdminLoginClick}
    />
  );
};

export default AdminRegister;
