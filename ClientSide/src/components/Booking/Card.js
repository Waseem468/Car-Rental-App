import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/card.css';
import { CarContextData } from '../../Context/CarContext';
import { useContext } from 'react';
import Home from '../Home'

function Card() {
    const { CarData, setCarData } = useContext(CarContextData);
    const [data, setData] = useState([]);
    const tokenUser = JSON.parse(localStorage.getItem("User-token"))

    useEffect(() => {
        fetch("https://car-rental-app-1-5tgr.onrender.com/car/", {
            method: "GET",
            headers: {
                "authorization": JSON.parse(localStorage.getItem("User-token"))
            }
        }).then(res => res.json())
            .then(res => setData(res));
    }, []);
    return (<>
        {tokenUser ? <div className='main-car-card-container'>
            <div className='user-parent-container'>
                {data.map((d, i) => {
                    return <div key={i} className="user-card-container">
                        <div className="user-card-main-container">
                            <div className="image">
                                <img src={`https://car-rental-app-1-5tgr.onrender.com/car/${d.image}`} className="car-image" alt='usercar' />
                            </div>
                            <div className="capacity">6 Persons</div>
                            <div className="innova">
                                <div>{d.name}</div>
                                <div className="color-of-price">{d.milage}</div>
                            </div>
                            <div className="bottom-section">
                                <button className='ucard-left-button'>Fare Details</button>
                                <Link to="/bookingdetails">
                                    <button className='ucard-right-button' onClick={() => setCarData(d)}>BOOK NOW</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                })
                }
            </div>
        </div> : <Home />}

    </>
    );
}

export default Card;