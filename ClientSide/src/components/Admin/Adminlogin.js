
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../Styles/Adminlogin.css';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const Navigater = useNavigate();
  const [loder, setLoder] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("")

  const PostData = async (e) => {
    e.preventDefault();
    console.log("hello")
    if (!email) {
      toast.error('Email can not be blank')
    }
    else if (!email.includes("@")) {
      toast.error("Enter Valid Email !")
    }
    else if (password === "") {
      toast.error("Password is required")
    }
    else if (password.length < 8) {
      toast.error("password is too short atleast 8 charecter")
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
        return toast.error("password is empty");
      } else if (!uppercasepassword) {
        return toast.error("At least one Uppercase");
      } else if (!lowercasepassword) {
        return toast.error("At least one Lowercase");
      } else if (!digitspassword) {
        return toast.error("At least one digit");
      } else if (!specialCharpassword) {
        return toast.error("At least one Special Characters");
      } else if (!minLengthpassword) {
        return toast.error("At least minumum 8 characters");
      }

      // return ''
    }
    // else {
      setLoder(true)

      fetch("https://car-rental-app-1-5tgr.onrender.com/admin/login", {

        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
      }).then(res => res.json()).then(res => {
        if (res.status === "Successfully login") {
          localStorage.setItem("Admin-token", JSON.stringify(res.token));
          localStorage.setItem("Admin-name", JSON.stringify(res.name));
          localStorage.setItem("Admin-Id", JSON.stringify(res.AdminId))
          // toast.success("Hello Admin WelCome To live Your Dream")
          toast.success( "Hello Admin WelCome To live Your Dream", {
            position: "bottom-right"
        })

          Navigater("/adminCarDetails")
        } else if (res.status === "fail") {
          setLoder(false)
          toast.error("Please Enter Correct Details")
          setError("Admin Details Not Match")
        }
      })

    // }
  }

  return (
    <div className="admin-login-form" id="form">
      <form method="POST" onSubmit={PostData} >
        <h6 style={{ marginTop: '10px', fontSize: '13px', marginBottom: '10px' }}>Sign in Your Admin Acount</h6>
        <input onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          className="admin-login-admin"
          placeholder="email"
        />
        <input onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          className="admin-login-admin"
          placeholder="password"
        />

        <div className="admin-login-page">
          <div className="admin-forget-password"><a href=".">Forget password?</a></div>
          <button className="admin-login-page-btn" >
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

