import React from 'react';
import '../../Styles/BookingDetails.css';
import NavLogout from '../NavLogout';
import { CarContextData } from '../../Context/CarContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import mapImage from '../../images/map.png';


function BookingDetails() {
    const userId = JSON.parse(localStorage.getItem("User-Id"))
    const navigate = useNavigate();

    const { CarData, headerData } = useContext(CarContextData)
    console.log(CarData)
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const BookingId = new Date().getTime();
    const Object = {
        name: CarData.name,
        perKm: CarData.perKm,
        model: CarData.model,
        milage: CarData.milage,
        image: CarData.image,
        type: CarData.type,
        Details: CarData.Details,
        carDetails: CarData.carDetails,
        date: date, time: time, BookingId: BookingId,
        userId: userId,
        distance: headerData.distance,
        destination: headerData.destination,
        origin: headerData.origin,
        startDate: headerData.startDate,
        endDate: headerData.endDate,
    };
    // console.log(headerData)

    let Distance, pricing, Subtotal, Tax, total;
    if (!isNaN(CarData.distance)) {
        Distance = parseInt(headerData.distance);
        pricing = parseInt(CarData.perKm)
        Subtotal = (pricing * Distance);
        Tax = parseInt((Subtotal) * 0.20);
        total = Subtotal + Tax;
    } else {
        Distance = 240
        pricing = parseInt(CarData.perKm)
        Subtotal = (pricing * Distance)
        Tax = parseInt((Subtotal) * 0.20);
        total = Subtotal + Tax;
    }
    // console.log(Object);
    const clickProceed = () => {
        fetch("http://localhost:5000/orders/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(Object)
            
        }).then(res => res.json())
            .then(data => console.log(data)).catch(err => {
                console.log(err.message)
            });


        navigate("/mybooking")

    };
    return (
        <div className="booking-details-main-container">
            <NavLogout />
            <div className="booking-details-left-container">
                <div>
                    <div className="booking-details-first-section">
                        <div className='left'>
                            <span><h4 className="heading-of-mybooking" style={{ marginLeft: '0px' }}>Booking Details</h4></span>
                            <div id="booking-origin"><div>Car Name : </div><div className="enter-the-text-cars-1">{CarData.name}</div></div>
                            <div id="booking-origin"><div>Car Number :</div><div className="enter-the-text-cars-2">{CarData.model}</div></div>
                        </div>
                        <div className='right'>
                            <img src={`http://localhost:5000/car/${CarData.image}`} id="car-img-of-booking" alt="not available" />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="booking-details-second-section">
                        <div className='second-left'>

                            <div id="booking-origin"><div>Origin :</div><div className='booking-value-origin-1'>{headerData.origin}</div></div>
                            <div id="booking-origin"><div>Desination :</div><div className='booking-value-origin-2'>{headerData.destination}</div></div>
                            <div id="booking-origin"><div>Start Date :</div><div className='booking-value-origin-3'>{headerData.startDate}</div></div>
                            <div id="booking-origin"><div>End Date :</div><div className='booking-value-origin-4'>{headerData.endDate}</div></div>

                        </div>

                        <div className='second-right'>
                            <img src={mapImage} id="map-image" alt='map'/>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="booking-details-third-section">
                        <div className="booking">
                            <div>Booking Id :</div>
                            <div className="booking-value-1">{BookingId}</div>
                        </div>
                        <div className="booking">
                            <div>Booking Date :</div>
                            <div className="booking-value">{date}</div>
                        </div>
                        <div className="booking">
                            <div>Booking Time :</div>
                            <div className="booking-value">{time}</div>
                        </div>
                    </div>
                    <hr></hr>
                    <button className="cancel-btn" type="submit" onClick={() => navigate("/cardetails")}>CANCEL</button>
                </div>
            </div>
            <div className="booking-details-right-container">
                <div>
                    <div className="booking-details-payment-first-section">
                        <h5 className='payment-heading'>Payment Details</h5>
                        <div className="price-per-Km">
                            <div>Price per km</div>
                            <div className="value-of-price">{CarData.perKm}/Km</div>
                        </div>
                        <div className="price-per-Km">
                            <div>Sub total</div>
                            <div className="value-of-price-font">{Subtotal} RS</div>
                        </div>
                        <div className="price-per-Km-tax">
                            <div>Tax Charges</div>
                            <div className="value-of-price">{Tax}</div>
                        </div>
                    </div>

                    <hr></hr>
                    <div className="payment-second-section">
                        <div className="price-per-Km">
                            <div>Total</div>
                            <div className="value-of-price-font-total">{total}</div>
                        </div>

                        <div className="price-per-Km" >
                            <div><input type="checkbox" name="content" id="content" /></div>
                            <div>It is a long established fact that a reader will be distracted by the readable content</div>
                        </div>

                        <button className="proceed-btn" type="submit" onClick={clickProceed}>PROCEED</button>

                    </div>
                </div>
            </div >
        </div >
    );
}


export default BookingDetails;