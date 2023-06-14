import React from 'react';
import { Link } from 'react-router-dom';
import carImage from '../../images/car.png';
import '../../Styles/card.css';

function Card(){
    return(
     <>
     <div className="user-card-container">
     <div className="user-card-main-container">
        <div className="image">
            <img src={carImage} className="car-image"/>
        </div>
        <div className="capacity">6 Persons</div>
        <div className="innova">
            <div>Innova Cryta</div>
            <div className="color-of-price">200 Rs/KM</div>
        </div>
        <div className="bottom-section">
            <button className='ucard-left-button'>Fare Details</button>
            <Link to={'/bookingdetails'}>
            <button className='ucard-right-button'>BOOK NOW</button>
            </Link>
        </div>
     </div>
     </div>
     </>
    );
}

export default Card;