import React, { useContext } from "react";
import { CarContextData } from "../../context_file/CarContext";
import LoginForm from "../LoginForm";

const Adminlogin = () => {
  const { setView, setShowAdminRegister, BaseUrl } = useContext(CarContextData);

  const handleSuccess = (res) => {
    localStorage.setItem("Admin-token", JSON.stringify(res.token));
    localStorage.setItem("Admin-name", JSON.stringify(res.admin.name));
    localStorage.setItem("Admin-Id", JSON.stringify(res.admin.adminId));
  };

  return (
    <LoginForm
      heading="Sign in to Your Admin Account"
      apiUrl={`${BaseUrl}/admin/login`}
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
