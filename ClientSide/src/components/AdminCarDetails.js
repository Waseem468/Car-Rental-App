import React from 'react'
import NavLogout from './NavLogout'
import AdminCarCard from './Booking/AdminCarCard'
import '../Styles/AdminCarDetails.css'
import { Link } from 'react-router-dom'

const AdminCarDetails = () => {
    return (
        <>
            <div className='main-Admin-container'>
                <NavLogout />
                <div className='sub-main'>
                    <div className='Admin'>
                       <h1>Hello Admin...</h1> 
                    </div>
                    <div className='admin-sub-header'>
                        <div style={{marginTop:'30px',fontWeight:'bold',marginLeft:'20px'}}>Cars</div>
                        <Link to={'/addcar'}>
                        <button className='addcarbtn'>Add Cars</button>
                        </Link>
                    </div>
                    <div style={{display:"flex",flexDirection:'row'}}>
                    <AdminCarCard />
                    <AdminCarCard />
                    <AdminCarCard />
                    </div>
                    <div style={{display:"flex",flexDirection:'row'}}>
                    <AdminCarCard />
                    <AdminCarCard />
                    <AdminCarCard />
                    </div>
                    
                </div>
                

            </div>


        </>
    )
}

export default AdminCarDetails
