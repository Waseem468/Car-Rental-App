import React, { useContext, useEffect } from "react";
import NavLogout from '../NavLogout';
import '../../Styles/myBookings.css';
import MybookingMapImage from '../../images/map.png';
import { Link } from 'react-router-dom';
import { CarContextData } from '../../Context/CarContext'
import Home from '../Home'

function MyBookings() {

    const { Bookdata, setBookData, setEditBookingDetails } = useContext(CarContextData);
    const UserToken = JSON.parse(localStorage.getItem("User-token"))
    const userId = JSON.parse(localStorage.getItem("User-Id"))

    useEffect(() => {

        fetch(`http://localhost:5000/orders/${userId}`)

            .then(res => res.json())
            .then(result => setBookData((result.data).reverse())).catch(err => {
                console.log(err.message)
            })
    }, [])
    console.log(Bookdata)

    function deleteCarData(id) {

        fetch(`https://car-rental-app-1-5tgr.onrender.com/orders/${id}`, {

            method: 'DELETE',
            headers: {
                "authorization": JSON.parse(localStorage.getItem("User-token"))
            },
        }).then(res => {
            if (res.status === 200) {
                return true
            }
            return false
        })

    }
    console.log(Bookdata)
    return (
        <>
            {UserToken ? <>
                <NavLogout />
                <h1>My Bookings </h1>
                {Bookdata.map((d, index) => {
                      
                    return <div key={index}>
                        <div id="outer">
                            <div className="main-div">
                                <div id="myimg" className="smallerDiv" >
                                    <img src={`https://car-rental-app-1-5tgr.onrender.com/car/${d.image}`} alt="img" width="200px" />
                                </div>

                                <div id="toyota" className="section ">
                                    <h4 >{d.name}</h4>
                                    <h5>{d.type}</h5>
                                    <h6>Details: {d.Details}</h6>
                                    <h6>Car Details: {d.carDetails}</h6>
                                </div>

                                <div className="smallerDiv">
                                    <div><span id="name-of-the-booking-hading-page">origin </span>:<span>{d.origin}</span></div>
                                    <div><span id="name-of-the-booking-hading-page">Destination </span>: <span>{d.destination}</span></div>
                                    <div> <span id="name-of-the-booking-hading-page">Start Date</span> :<span>{d.startDate}</span></div>
                                    <div><span id="name-of-the-booking-hading-page">Start Date </span>:<span>{d.endDate}</span></div>
                                </div>
                                <div className="smallerDiv">
                                    <img src={MybookingMapImage} alt="map is unable to render" id="Abcdefghijklmn" />
                                </div>

                                <div className="smallerDiv">
                                    <h6> <span id="name-of-the-booking-hading-page">Booking ID</span>: <span>{d.BookingId}</span></h6>
                                    <h6> <span id="name-of-the-booking-hading-page">Booking Date</span>:<span>{d.date}</span> </h6>
                                    <h6> <span id="name-of-the-booking-hading-page" >Booking Time</span>: <span>{d.time}</span></h6>
                                </div>
                                <div className="smallerDiv" >
                                    <div className="buttons">
                                        <Link to="/editbooking" ><button id="btuunt-concle-in-exsist-Booking-edit" onClick={() => setEditBookingDetails(d)}>Edit</button></Link>
                                        <button id="btuunt-concle-in-exsist-Booking" onClick={() => deleteCarData(d._id)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
                }
            </> : <Home />}

        </>
    );
}

export default MyBookings;