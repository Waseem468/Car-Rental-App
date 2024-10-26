import React, { useContext } from "react";
import Register from "../Register";
import { CarContextData } from "../../context_file/CarContext";

const UserRegister = () => {
  const { setView, BaseUrl } = useContext(CarContextData);

  const handleSignInClick = () => {
    setView("login");
  };

  return (
    <Register
      heading="Register Your User Account"
      apiEndpoint={`${BaseUrl}/user/register`}
      onSuccessRedirect="/"
      onSignInClick={handleSignInClick}
    />
  );
};

export default UserRegister;
