import React, { useContext } from "react";
import "../custom_styles/Home.css";
import Userlogin from "../components/User/Userlogin";
import UserRegister from "../components/User/UserRegister";
import AdminLogin from "../components/Admin/Adminlogin";
import AdminRegister from "../components/Admin/AdminRegister";
import { CarContextData } from "../context_file/CarContext";

const Home = () => {
  const {
    view,
    setView,
    isAdmin,
    setIsAdmin,
    showAdminRegister,
    setShowAdminRegister,
  } = useContext(CarContextData);

  const handleUserRegisterClick = () => {
    setView("register");
    setShowAdminRegister(false);
  };

  const handleAdminLoginClick = () => {
    setIsAdmin(true);
    setView("adminLogin");
    setShowAdminRegister(false);
  };

  const handleAdminRegisterClick = () => {
    setShowAdminRegister(true);
    setView("");
  };

  const handleUserSignInClick = () =>{
    setView("login")
  }

  const renderAuthComponent = () => {
    switch(view) {
      case "register":
        return <UserRegister />;
      case "adminLogin":
        return isAdmin ? <AdminLogin /> : <Userlogin />;
      default:
        return showAdminRegister ? <AdminRegister /> : <Userlogin />;
    }
  };

  const renderButtons = () => {
    if (view === "login" && !showAdminRegister) {
      return (
        <div className="user-signinbutton">
          <button onClick={handleUserRegisterClick} className="user-btn-register">
            User Register
          </button>
          <button onClick={handleAdminLoginClick} className="user-admin">
            Admin Login
          </button>
        </div>
      );
    }
    if (view === "adminLogin" && !showAdminRegister) {
      return (
        <div className="user-signinbutton">
          <button onClick={handleUserSignInClick} className="user-admin">
            User Sign in
          </button>
          <button onClick={handleAdminRegisterClick} className="user-btn-register">
            Admin Register
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="home-page-container">
      <div className="user-Home-page">
        <div className="user-Register">
          <p className="user-text-of-the-home-page">
            All you needed was a wheel
            <br />
            in Your hand and four on <br />
            the road
          </p>
        </div>
        {renderButtons()}
      </div>
      <div className="user-login">{renderAuthComponent()}</div>
    </div>
  );
};

export default Home;
