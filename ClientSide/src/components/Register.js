import React, { useState } from "react";
import "../custom_styles/Register.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = ({
  heading,
  apiEndpoint,
  onSuccessRedirect,
  onSignInClick,
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, contact, password, confirmPassword } = formData;

    if (!name) return "Name cannot be blank";
    if (/\d+/.test(name)) return "Name should only contain letters";
    if (!email) return "Email cannot be blank";
    if (!email.includes("@")) return "Email should contain '@'";
    if (!contact) return "Contact cannot be blank";
    if (!password) return "Password cannot be blank";
    if (!confirmPassword) return "Confirm password cannot be blank";
    if (password !== confirmPassword) return "Passwords do not match";

    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{8,}/;

    if (!uppercaseRegExp.test(password))
      return "Password must contain at least one uppercase letter";
    if (!lowercaseRegExp.test(password))
      return "Password must contain at least one lowercase letter";
    if (!digitsRegExp.test(password))
      return "Password must contain at least one digit";
    if (!specialCharRegExp.test(password))
      return "Password must contain at least one special character";
    if (!minLengthRegExp.test(password))
      return "Password must be at least 8 characters long";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validateForm();

    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data)

      if (data.success === false) {
        toast.error("User already exists");
      } else if (data.success === true) {
        toast.success("Registration successful");
        setFormData({
          name: "",
          email: "",
          contact: "",
          password: "",
          confirmPassword: "",
        });
        navigate(onSuccessRedirect);
      }
    } catch (error) {
      toast.error("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="register-login-form" id="form">
        <form method="POST" className="form-container" onSubmit={handleSubmit}>
          <h6 className="register-heading">{heading}</h6>
          <input
            onChange={handleInputs}
            value={formData.name}
            type="text"
            name="name"
            className="register-login-admin"
            placeholder="Name"
          />
          <input
            onChange={handleInputs}
            value={formData.email}
            type="email"
            name="email"
            className="register-login-admin"
            placeholder="Email"
          />
          <input
            onChange={handleInputs}
            value={formData.contact}
            type="number"
            name="contact"
            className="register-login-admin"
            placeholder="Contact"
          />
          <input
            onChange={handleInputs}
            value={formData.password}
            type="password"
            name="password"
            className="register-login-admin"
            placeholder="Password"
          />
          <input
            onChange={handleInputs}
            value={formData.confirmPassword}
            type="password"
            name="confirmPassword"
            className="register-login-admin"
            placeholder="Confirm Password"
          />
          <div className="register-button">
            <div onClick={onSignInClick} className="signin">
              Signin
            </div>
            <button type="submit" className="register-btn2" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
      />
    </div>
  );
};

export default Register;
