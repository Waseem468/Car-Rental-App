import React from 'react'
import "../Styles/Home.css"
import Navbar from './Navbar'
import Userlogin from './User/Userlogin'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className='Home-container'>
    <Navbar/>
    <div className="user-Home-page">
        <div className="user-Register">
            <p className='user-text-of-the-home-page'>
                All you needed was a wheel<br/>
                 in Your hand and four on <br/>
                 the road 
            </p>
        </div>
        <div className="user-signinbutton">
          <Link to={`/userregister`}>
            <button className='user-btn-register'>User Register</button>
            </Link>
            <Link to={`/adminlogin`}>
            <button className='user-admin'>Admin Login</button>
            </Link>
            </div>
            <Userlogin/>
        </div> 
    </div>
  )
}

export default Home
