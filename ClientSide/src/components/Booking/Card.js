import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../custom_styles/card.css";
import { CarContextData } from "../../context_file/CarContext";
import { truncate } from "../../clientside_utils/truncateWord";
const Card = ({ car }) => {
  const { setUserSelectedCar,setIsEditMode } = useContext(CarContextData);

  const handleBooking = (car) => {
    setUserSelectedCar(car);
    setIsEditMode(false)
  };

  return (
    <div className="car-card">
      <div className="car-card-image">
        <img
          src={car.image}
          alt={car.carName}
        />
      </div>
      <div className="car-card-details">
        <div className="car-capacity">Capacity: 6 Persons</div>
        <div className="car-price">
          <div className="car-name">{truncate(car.carName,13)}</div>
          <div className="car-milage">{car.pricePerKm} Rs/KM</div>
        </div>
        <div className="car-actions">
          <button className="fare-details-btn">Fare Details</button>
          <Link to="/bookingdetails">
            <button onClick={()=>handleBooking(car)} className="book-now-btn">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
