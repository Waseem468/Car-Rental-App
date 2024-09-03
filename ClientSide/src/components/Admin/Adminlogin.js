import React, { useContext } from "react";
import { CarContextData } from "../../context/CarContext";
import LoginForm from "../LoginForm";

const Adminlogin = () => {
  const { setView, setShowAdminRegister } = useContext(CarContextData);

  const handleSuccess = (res) => {
    localStorage.setItem("Admin-token", JSON.stringify(res.token));
    localStorage.setItem("Admin-name", JSON.stringify(res.name));
    localStorage.setItem("Admin-Id", JSON.stringify(res.AdminId));
  };

  return (
    <LoginForm
      heading="Sign in to Your Admin Account"
      apiUrl="https://car-rental-app-1-5tgr.onrender.com/admin/login"
      onSuccess={{
        message: "Hello Admin, Welcome to manage your cars!",
        action: handleSuccess,
        redirect: "/adminCarDetails",
      }}
      createAccountView={() => {
        setShowAdminRegister(true);
        setView("");
      }}
    />
  );
};

export default Adminlogin;
