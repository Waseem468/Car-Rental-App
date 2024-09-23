import React, { useContext } from "react";
import { CarContextData } from "../../context/CarContext";
import LoginForm from "../LoginForm";

const Userlogin = () => {
  const { setView, BaseUrl } = useContext(CarContextData);

  const handleSuccess = (res) => {
    console.log(res,"from user")
    localStorage.setItem("User-token", JSON.stringify(res.token));
    localStorage.setItem("User-Id", JSON.stringify(res.user.userId));
  };

  return (
    <LoginForm
      heading="Sign in to Your User Account"
      apiUrl={`${BaseUrl}/user/login`}
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
