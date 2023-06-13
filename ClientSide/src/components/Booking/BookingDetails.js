import React from 'react';
import '../../Styles/BookingDetails.css';
import NavLogout from '../NavLogout';
import carImageofBooking from '../../images/bookcar.png';
import mapImage from '../../images/map.png';
import { Link } from 'react-router-dom';


function BookingDetails() {
    return (
        <div className="booking-details-main-container">
            <NavLogout />
            <div className="booking-details-left-container">
                <form>
                    <div className="booking-details-first-section">
                        <div className='left'>
                            <label for="heading"><h5  style={{marginLeft:'0px'}}>Booking Details</h5></label>
                            <label for="cars">Car Name <input className="enter-the-text-cars" value="Toyata Innova 6 Seater" id="cars"/></label> 
                            <label for="car-number">Car Number <input type="text" className="enter-the-text" placeholder="Enter a Car Number" id="car-number" /></label>
                        </div>
                        <div className='right'>
                            <img src={carImageofBooking} id="car-img-of-booking" />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="booking-details-second-section">
                        <div className='second-left'>
                            <label for="origin-name">Origin <input type="text" className="enter-the-origin" placeholder="Enter a Origin place" /></label>

                            <label for="destination-name">Destination <input type="text" className="enter-the-desination" placeholder="Enter a Destination place" /></label>

                            <label for="start-date">Start Date <input type="date" className="enter-the-start-date" /></label>

                            <label for="End-date">End Date <input type="date" className="enter-the-end-date" /></label>

                        </div>
                        <div className='second-right'>
                            <img src={mapImage} id="map-image"/>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="booking-details-third-section">
                        <div className="booking">
                            <div>Booking Id</div>
                            <div className="booking-value-1">GOTSE8</div>
                        </div>
                        <div className="booking">
                            <div>Booking Date</div>
                            <div className="booking-value">16-05-2023</div>
                        </div>
                        <div className="booking">
                            <div>Booking Time</div>
                            <div className="booking-value">08:00 PM</div>
                        </div>
                    </div>
                    <hr></hr>
                    <button className="cancel-btn" type="submit">CANCEL</button>
                </form>
            </div>
            <div className="booking-details-right-container">
                <form>
                    <div className="booking-details-payment-first-section">
                        <h5 className='payment-heading'>Payment Details</h5>
                        <div className="price-per-Km">
                            <div>Price per km</div>
                            <div className="value-of-price">20/Km</div>
                        </div>
                        <div className="price-per-Km">
                            <div>Price</div>
                            <div className="value-of-price-font">1550 r</div>
                        </div>
                        <div className="price-per-Km-tax">
                            <div>Tax Charges</div>
                            <div className="value-of-price">50</div>
                        </div>
                    </div>

                    <hr></hr>
                    <div className="payment-second-section">
                        <div className="price-per-Km">
                            <div>Sub Total</div>
                            <div className="value-of-price-font-total">1550 r</div>
                        </div>

                        <div className="price-per-Km" >
                            <div><input type="checkbox" name="content" id="content" /></div>
                            <div>It is a long established fact that a reader will be distracted by the readable content</div>
                        </div>
                        <Link to={'/mybooking'}>
                        <button className="proceed-btn" type="submit">PROCEED</button>
                        </Link>
                    </div>
                </form>
            </div >
        </div >
    );
}


export default  BookingDetails;