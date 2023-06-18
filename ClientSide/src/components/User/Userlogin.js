import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Userlogin.css';

const Userlogin = () => {
  const Navigater = useNavigate();
  const [loder, setLoder] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("")

  const PostData = async (e) => {
    e.preventDefault();
    console.log('hello')
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

    }
    setLoder(true)

    fetch("http://localhost:5000/user/login", {

      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }).then(res => res.json()).then(res => {
      if (res.status === "Successfully login") {
        toast.success("Hello User WelCome Choose Your Dream Car")

        localStorage.setItem("User-token", JSON.stringify(res.token));
        localStorage.setItem("User-Id", JSON.stringify(res.userId))
        // window.alert("Hello User WelCome Choose Your Dream Car")
        Navigater("/orderpage")
      } else if (res.status === "fail") {
        setLoder(false)
        toast.error("Please Enter Correct Details")
        setError("User Details Not Match")
      }
    })
  }

  return (
    <div className="user-login-form" id="form">
      <form method="POST" onSubmit={PostData}>
        <h6 className="user-login-heading">Sign in Your User Acount</h6>
        <input onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          className="user-login-admin"
          placeholder="Email"
        />
        <input onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          className="user-login-admin"
          placeholder="password"
        />

        <div className="admin-login-page">
          <div className="user-forget-password"><a href=".">Forget password?</a></div>
          {/* <Link to={'/orderpage'}> */}
          <button type="submit" className="user-login-page-btn">
            Sign in
          </button>
          {/* </Link> */}
        </div>
        <Link to={'/userRegister'}>
          <div class="user-link-create-account">Create Account</div>
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
export default Userlogin;
