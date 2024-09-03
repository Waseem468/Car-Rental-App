import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/LoginForm.css"

const LoginForm = ({ heading, apiUrl, onSuccess, createAccountView }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateInput = () => {
    if (!email) {
      toast.error("Email cannot be blank");
      return false;
    }
    if (!email.includes("@")) {
      toast.error("Enter a valid email!");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    }
    if (password.length < 8) {
      toast.error("Password is too short, at least 8 characters");
      return false;
    }

    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;

    if (!uppercaseRegExp.test(password)) {
      toast.error("Password must include at least one uppercase letter");
      return false;
    }
    if (!lowercaseRegExp.test(password)) {
      toast.error("Password must include at least one lowercase letter");
      return false;
    }
    if (!digitsRegExp.test(password)) {
      toast.error("Password must include at least one digit");
      return false;
    }
    if (!specialCharRegExp.test(password)) {
      toast.error("Password must include at least one special character");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    setLoader(true);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const res = await response.json();

      if (res.status === "Successfully login") {
        toast.success(onSuccess.message);
        onSuccess.action(res);
        navigate(onSuccess.redirect);
      } else if (res.status === "fail") {
        setLoader(false);
        toast.error("Please enter correct details");
        setError("Details do not match");
      }
    } catch (error) {
      setLoader(false);
      toast.error("An error occurred while logging in");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="user-login-form" id="form">
      <form method="POST" onSubmit={handleSubmit}>
        <h6 className="user-login-heading">{heading}</h6>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          className="user-login-input"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          className="user-login-input"
          placeholder="Password"
        />

        <div className="login-actions">
          <a href="." className="user-forget-password">
            Forgot password?
          </a>
          <button
            type="submit"
            className="user-login-page-btn"
            disabled={loader}
          >
            {loader ? "Signing in..." : "Sign in"}
          </button>
        </div>
        <div onClick={() => createAccountView()} className="user-link-create-account">
          Create Account
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        theme="dark"
      />
    </div>
  );
};

export default LoginForm;
