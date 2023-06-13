import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Orderpage.css"
import NavLogout from './NavLogout'

const Orderpage = () => {
  return (
<div className='orderpage-main-container'>
    <NavLogout/>
    <div className="order-Home-page">
    <div className="order-login-form" id="form">
      <form>
        <h4 className=''>Main quote for the Website <br/>
        will be Placed here to make<br/>
         understand</h4>
         <input 
          type="text"
          name="origin name"
          className="order-login-admin"
          placeholder="origin name"
        ></input>
         <input 
          type="text"
          name="destination"
          className="order-login-admin"
          placeholder="destination name"
        ></input>
        <input 
          type="date"
          name="date"
          className="order-login-admin"
          placeholder="startdate"
        ></input><br/>
        <input 
          type="date"
          name="date"
          className="order-login-admin"
          placeholder="enddate"
        ></input>

        <div className="admin-login-page">
          <Link to={'/cardetails'}>
          <button type="submit" className="order-login-page-btn">
           Check
          </button>
          </Link>
        </div>
      </form>
    </div>
        </div> 
    </div>
  )
}

export default Orderpage;