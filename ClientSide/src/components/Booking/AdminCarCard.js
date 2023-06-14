import React from 'react';
import { Link } from 'react-router-dom';
import carImage from '../../images/car.png';
import '../../Styles/AdminCarCard.css';

function AdminCarCard(){
    return(
     <>
     <div className="container">
     <div className="main-container">
        <div className="image">
            <Link to={'/editcar'}>
            <img src={carImage} className="car-image"/>
            </Link>
        </div>
        <div className="capacity">6 Persons</div>
        <div className="innova">
            <div>Innova Cryta</div>
            <div className="color-of-price">200 Rs/KM</div>
        </div>
        <div className="price-per-km">
            <div className="left-of-the-card">Available Date</div>
            <div className="right-of-card">16Dec-20Dec</div>
        </div>
     </div>
     </div>
     </>
    );
}

export default AdminCarCard;