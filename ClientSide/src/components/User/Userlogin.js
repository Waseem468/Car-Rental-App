import React, { useContext } from "react";
import { CarContextData } from "../../context/CarContext";
import LoginForm from "../LoginForm";

const Userlogin = () => {
  const { setView } = useContext(CarContextData);

  const handleSuccess = (res) => {
    localStorage.setItem("User-token", JSON.stringify(res.token));
    localStorage.setItem("User-Id", JSON.stringify(res.userId));
  };

  return (
    <LoginForm
      heading="Sign in to Your Account"
      apiUrl="https://car-rental-app-1-5tgr.onrender.com/user/login"
      onSuccess={{
        message: "Hello User, Welcome! Choose Your Dream Car",
        action: handleSuccess,
        redirect: "/booking-form",
      }}
      createAccountView={() => setView("register")}
    />
  );
};

export default Userlogin;
