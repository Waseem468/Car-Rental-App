import React from 'react';
import Navbar from '../Navbar';
import Adminlogin from './Adminlogin'
import '../../styles/AdminRegistration.css'
import { Link } from 'react-router-dom';
const AdminRegistration = () => {
  return (
    <>
      <div className='admin-main-container'>
        <Navbar />
        <div className="admin-Home-page">
          <div className="admin-Register">
            <p className='admin-text-of-the-home-page'>
              All you needed was a wheel<br />
              in Your hand and four on <br />
              the road
            </p>
          </div>
          <div className="signinbutton">
            <Link to={'/'}>
            <button className='admin-btn-register'>User Sign in</button> 
            </Link>
            <Link to={'/adminregister'}>
            <button className='admin-btn-register1'>Admin Register</button> 
            </Link>

           
          </div>
          <Adminlogin />
        </div>
      </div>
      </>
      )
}
      export default AdminRegistration