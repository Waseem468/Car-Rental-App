import React from 'react';
import NavLogout from '../NavLogout';
import '../../Styles/myBookings.css';
import MybookingCarImage from '../../images/toyata.png';
import MybookingMapImage from '../../images/map.png';
import { Link } from 'react-router-dom';

function MyBookings() {
    return (
        <>
            <NavLogout />
            <div className="mybookings-heading">My Bookings</div>
            <div className='one-card-for-mybooking-details'>
            <nav>
                <div className="main-container-for-mybookings">
                    <div className="card-of-the-mybookings">
                        <div className='first-coloumn-of-the-card'>
                            <img src={MybookingCarImage} id="mybooking-car-image" />
                        </div>
                        {/* <hr></hr> */}
                        <div className='second-coloumn-of-the-card'>
                            <div className="mybooking-car-type">Toyata Innova</div>
                            <div className="mybooking-car-number">KA 37 BB 9999</div>
                            <div className="mybooking-car-details">Car Details </div>
                        </div>
                        {/* <hr></hr> */}
                        <div className='third-coloumn-of-the-card'>
                            <div className='left-origin-destination-start-end'>
                                <div className="mybooking-destination-date">Origin <div className='coloumn-mark-origin'>:</div> <div className="place-the-value-of-destination-origin" id="id-of-car">Bangalore</div></div>
                                <div className="mybooking-destination-date">Destination <div className='coloumn-mark-destination'>:</div> <div className="place-the-value-of-destination">Mysore</div></div>
                                <div className="mybooking-destination-date">Start Date <div className='coloumn-mark-start'>:</div> <div className="place-the-value-of-destination-start">16-June-2023</div></div>
                                <div className="mybooking-destination-date">End Date <div className='coloumn-mark-end'>:</div> <div className="place-the-value-of-destination-end">16-June-2023</div></div>
                            </div>
                            <div className='right-for-map-of-the-distance'>
                                <img src={MybookingMapImage} id="map-of-the-mybooking" />
                            </div>
                        </div>
                        {/* <hr></hr> */}
                        <div className='fourth-coloumn-of-the-card'>
                            <div className="mybooking-id-date-time">Booking Id : <div className="place-the-value" id="id-of-car">GOTSE8</div></div>
                            <div className="mybooking-id-date-time">Booking Date : <div className="place-the-value">16-APRIL-2023</div></div>
                            <div className="mybooking-id-date-time">Booking Time :<div className="place-the-value">8:00 PM</div></div>
                        </div>
                        {/* <hr></hr> */}
                        <div className='fifth-coloumn-of-the-card'>
                            <Link to={'/editbooking'}>
                            <button className='edit-btn-mybooking'>EDIT</button>
                            </Link>
                            <button className='cancel-btn-mybooking'>CANCEL</button>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
            
        </>
    );
}

export default MyBookings;