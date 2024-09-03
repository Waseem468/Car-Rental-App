import React, { useContext } from "react";
import Register from "../Register";
import { CarContextData } from "../../context/CarContext";

const UserRegister = () => {
  const { setView } = useContext(CarContextData);

  const handleSignInClick = () => {
    setView("login");
  };

  return (
    <Register
      heading="Register Your User Account"
      apiEndpoint="https://car-rental-app-1-5tgr.onrender.com/user/register"
      onSuccessRedirect="/"
      onSignInClick={handleSignInClick}
    />
  );
};

export default UserRegister;
