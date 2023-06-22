import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import '../../Styles/AdminCarCard.css';
import { CarContextData } from '../../Context/CarContext'


function AdminCarCard() {
    const AdminId = JSON.parse(localStorage.getItem("Admin-Id"));
    console.log(AdminId);
    const Navigater = useNavigate();
    // const AdminToken = JSON.parse(localStorage.getItem("Admin-token"))
    const [Go, setGo] = useState("");
    const [error, setError] = useState("");
    const { car, setCar, setEdit } = useContext(CarContextData);

    useEffect(() => {
        if (!localStorage.getItem("Admin-token")) {
            return Navigater('/')
        }
        fetch("http://localhost:5000/car/", {
            headers: {
                "authorization": JSON.parse(localStorage.getItem("Admin-token"))
            }
        }).then(res => res.json()).then(data => setCar(data.reverse())).catch(err => {
            console.log(err.message)
        })

    }, [])

    // console.log(car)
    return (
        <> {error && <div id="display-message">{error} <span
            onClick={() => {
                setError("");
                setGo("")
            }} className="error-button">{Go}</span></div>}
            <div className="container">
                {
                    car.map((d, i) => {
                        return <>
                            <div key={i} className="main-container">
                                <div className="image">
                                    <img src={`http://localhost:5000/car/${d.image}`} className="car-image" alt="img"
                                        onClick={() => {
                                            if (AdminId !== d.AdminId) {
                                                console.log(d.AdminId)
                                                setError("You Don`t Have Access To Edit This Details");
                                                setGo("OK")
                                            }
                                            else {
                                                console.log(d.AdminId)
                                                setEdit(d);
                                                Navigater("/editcar")
                                            }

                                        }} />
                                </div>
                                <div className="capacity">6 Persons</div>
                                <div className="innova">
                                    <div>{d.name}</div>
                                    <div className="color-of-price">{d.perKm} Rs/KM</div>
                                </div>
                                <div className="price-per-km">
                                    <div className="left-of-the-card">Available Date</div>
                                    <div className="right-of-card">{d.availabelFrom.split("-").reverse().join("/").slice(0, 5)}-{d.availabelUntil.split("-").reverse().join("/").slice(0, 5)}</div>
                                </div>
                            </div>
                        </>
                    }
                    )
                }
            </div>
        </>
    );
}

export default AdminCarCard;