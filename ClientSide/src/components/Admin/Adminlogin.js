import React,{useState} from "react";
import { Link } from "react-router-dom";
import '../../Styles/Adminlogin.css';
const Adminlogin = () => {
  const [email,setemail]=("");
  const [pass,setpass]=("");

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(email);
    console.log(pass);
  }
  return (
    <div className="admin-login-form" id="form">
      <form onSubmit={handlesubmit}>
        <h6 style={{marginTop:'10px',fontSize:'13px',marginBottom:'10px'}}>Sign in Your Admin Acount</h6>
        <input value={email} onChange={(e)=>setemail(e.target.value)}
          type="email"
          name="email"
          className="admin-login-admin"
          placeholder="Email"
        ></input>
        <input value={pass} onChange={(e)=>setpass(e.target.value)}
          type="password"
          name="password"
          className="admin-login-admin"
          placeholder="password"
        ></input>

        <div className="admin-login-page">
            <div className="admin-forget-password"><a href=".">Forget password?</a></div>
          <Link to={'/adminCarDetails'}>
          <button type="submit" className="admin-login-page-btn">
            Sign in
          </button>
          </Link>
        </div>
        <Link to={'/adminregister'}>
        <div class="admin-link-create-account">Create Account</div>
        </Link>
      </form>
    </div>
  );
};
export default Adminlogin;