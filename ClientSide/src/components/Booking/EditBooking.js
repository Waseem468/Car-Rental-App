import React from 'react';
import '../../Styles/editBooking.css';
import NavLogout from '../NavLogout';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CarContextData } from '../../Context/CarContext';
import mapImage from '../../images/map.png';

export default function EditBookingDetails() {
    const Navigate = useNavigate();
    const { EditBookingDetails, setEditBookingDetails } = useContext(CarContextData);
    const { BookingId, date, time, image, name, perKm } = EditBookingDetails;
    function editBookingSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:5000/orders/:${EditBookingDetails._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(EditBookingDetails),
        }).then(res => res.json())
            .then(data => console.log(data))
        Navigate("/mybooking")
    }
    return <>
        <div className="edit-booking-main-container">
            <NavLogout />
            <form onSubmit={editBookingSubmit}>
                <div className="left-container">
                    <div className="first-section">
                        <div className='left'>
                            <label for="heading"><h5 className="heading-left">Edit Booking Details</h5></label>
                            <label for="cars">Car Name <select className="enter-the-text-cars" name="cars" id="cars">
                                {name}<option value="volvo">Toyato Innova 6 Seater</option>
                                <option value="saab">Audi</option>
                                <option value="opel">Kia</option>
                                <option value="audi">Nano</option>
                                <option value="audi">Fortuner</option>
                                <option value="audi">Ferrari</option>
                                <option value="audi">Mercedes</option>
                            </select></label>
                            <label for="car-number">Car Number <input type="text" className="enter-the-text" placeholder='Enter a car number' id="car-number" onChange={(e) => setEditBookingDetails({ ...EditBookingDetails, model: e.target.value })} value={EditBookingDetails.model}/></label>
                        </div>
                        <div className='right'>
                            <img src={`http://localhost:5000/car/${EditBookingDetails.image}`} id="car-img-of-booking" alt="not available" />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="second-section">
                        <div className='second-left'>
                            <label for="origin-name">Origin <input type="text" className="enter-the-origin" onChange={(e) => setEditBookingDetails({ ...EditBookingDetails, origin: e.target.value })} value={EditBookingDetails.origin} /></label>
                            <label for="destination-name">Destination <input type="text" className="enter-the-desination" onChange={(e) => setEditBookingDetails({ ...EditBookingDetails, destination: e.target.value })} value={EditBookingDetails.destination} />{ }</label>
                            <label for="start-date">Start Date <input type="date" className="enter-the-start-date" onChange={(e) => setEditBookingDetails({ ...EditBookingDetails, startDate: e.target.value })} value={EditBookingDetails.startDate} /></label>
                            <label for="End-date">End Date <input type="date" className="enter-the-end-date" onChange={(e) => setEditBookingDetails({ ...EditBookingDetails, endDate: e.target.value })} value={EditBookingDetails.endDate} /></label>
                        </div>
                        <div className='second-right'>
                            <img src={mapImage} id="map-image" />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="third-section">
                        <div className="booking">
                            <div>Booking Id</div>
                            <div className="booking-value-1">{BookingId}</div>
                        </div>
                        <div className="booking">
                            <div>Booking Date</div>
                            <div className="booking-value">{date}</div>
                        </div>
                        <div className="booking">
                            <div>Booking Time</div>
                            <div className="booking-value">{time}</div>
                        </div>
                    </div>
                    <hr></hr>
                    <button className="cancel-btn" onClick={() => Navigate("/mybooking")}>CANCEL</button>
                </div>
                <div className="right-container">
                    <div className="payment-first-section">
                        <label for="heading"><h5 style={{ marginLeft: '0px' }}>Payment Details</h5></label>
                        <div className="price-per-Km">
                            <div>Price per km</div>
                            <div className="value-of-price">{perKm}RS/KM</div>
                        </div>
                        <div className="price-per-Km">
                            <div>Price</div>
                            <div className="value-of-price-font">1500 RS</div>
                        </div>
                        <div className="price-per-Km-tax">
                            <div>Tax Charges</div>
                            <div className="value-of-price">50 r</div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="payment-second-section">
                        <div className="price-per-Km">
                            <div>Sub Total</div>
                            <div className="value-of-price-font-total">1550 RS</div>
                        </div>
                        <div className="price-per-Km" >
                            <div><input type="checkbox" name="content" id="content" /></div>
                            <div>It is a long established fact that a reader will be distracted by the readable content</div>
                        </div>
                        <button className="proceed-btn" type="submit">PROCEED</button>
                    </div>
                </div >
            </form>
        </div >
    </>
}