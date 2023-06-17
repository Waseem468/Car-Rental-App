import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../Styles/Adminlogin.css';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { json, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const Navigater = useNavigate();
  const [errorText, setErrorText] = useState('');
  const [loder, setLoder] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  let name, value
  function handleInputs(e) {
    name = e.target.name;
    value = e.target.value;
    setFormData({ ...formData, [name]: value })
  }
  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = formData;


    if (!email) {
      toast.error('email can not be blank')
    }
    else if (!email.includes('@')) {
      toast.error('email should contain @')
    }
    else if (!password) {
      toast.error('password can not be blank')
    }
    else if (password) {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = password.length;
      const uppercasepassword = uppercaseRegExp.test(password);
      const lowercasepassword = lowercaseRegExp.test(password);
      const digitspassword = digitsRegExp.test(password);
      const specialCharpassword = specialCharRegExp.test(password);
      const minLengthpassword = minLengthRegExp.test(password);

      if (passwordLength === 0) {
        toast.error("password is empty");
      } else if (!uppercasepassword) {
        toast.error("At least one Uppercase");
      } else if (!lowercasepassword) {
        toast.error("At least one Lowercase");
      } else if (!digitspassword) {
        toast.error("At least one digit");
      } else if (!specialCharpassword) {
        toast.error("At least one Special Characters");
      } else if (!minLengthpassword) {
        toast.error("At least minumum 8 characters");
      }

      return ''
    }
    else {
      const res = await fetch('http://localhost:5000/admin/login', {
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email, password
        })
      });
      const data = await res.json();
      if (data.status === "Successfully login") {
        localStorage.setItem("token-admin", JSON.stringify(res.token));
        localStorage.setItem("name-admin", JSON.stringify(res.name));
        localStorage.setItem("Admin-Id", JSON.stringify(res.AdminId));
        toast.success("Successfully login");
        console.log("Successfully login")
        Navigater("/adminCarDetails")
      }
      else if (data.status === "fail") {
        setLoder(false)
        setErrorText("Admin Details Not Match")
        toast.error("Admin Details Not Matchs")

      }
    }
  }


  return (
    <div className="admin-login-form" id="form">
      <form method="POST" onSubmit={PostData}>
        <h6 style={{ marginTop: '10px', fontSize: '13px', marginBottom: '10px' }}>Sign in Your Admin Acount</h6>
        <input onChange={handleInputs}
          value={formData.email}
          type="email"
          name="email"
          className="admin-login-admin"
          placeholder="email"
        />
        <input onChange={handleInputs}
          value={formData.password}
          type="password"
          name="password"
          className="admin-login-admin"
          placeholder="password"
        />

        <div className="admin-login-page">
          <div className="admin-forget-password"><a href=".">Forget password?</a></div>
          <button  className="admin-login-page-btn">
            Sign in
          </button>
        </div>
        <Link to={'/adminregister'}>
          <button class="admin-link-create-account">Create Account</button>
        </Link>
      </form>
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
export default Adminlogin;