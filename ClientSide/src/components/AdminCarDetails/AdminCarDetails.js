import React from "react"
import { Link } from "react-router-dom";
import AdminCarCard from './AdminCarCard'
import '../../styles/AdminCarDetails.css'

const AdminCarDetails = () => {
    const AdminName = JSON.parse(localStorage.getItem("Admin-name"))

    return (
        <>
            <div className='main-Admin-container'>
                <div className='sub-main'>
                    <div className='Admin'>
                        <h1>Hello {AdminName}...</h1>
                    </div>
                    <div className='admin-sub-header'>
                        <div style={{ marginTop: '30px', fontWeight: 'bold', marginLeft: '20px' }}>Cars</div>
                        <Link to={'/addcar'}>
                            <button className='addcarbtn'>Add Cars</button>
                        </Link>
                    </div>
                    <div className="Admin-card">
                        <AdminCarCard />
                   
                    </div>


                </div>


            </div>


        </>
    )
}

export default AdminCarDetails
