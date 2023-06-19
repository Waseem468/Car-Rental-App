/*import React from 'react';
import NavLogout from '../NavLogout';
import SubHeader from './SubHeader';
import SelectionHeader from './SelectionHeader';
import Card from './Card';
import Home from "../Home";
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { CarContextData } from '../../Context/CarContext';
import { Link } from 'react-router-dom';
import '../../Styles/Cardetails.css';
import '../../Styles/card.css';


function CarDetails() {
  const TokenUser = JSON.parse(localStorage.getItem("token-user"))
  const { CarData, setCarData } = useContext(CarContextData);
  let [data, setdata] = useState([])
  useEffect(() => {

    fetch("http://localhost:5000/cars/", {

      headers: {
        "authorization": JSON.parse(localStorage.getItem("token-user "))
      }
    }).then(res => res.json())
      .then(res => setdata(res));
  }, [])
  const [Type, setType] = useState(false);
  const [seating, setSeating] = useState(false)
  const [milage, setMilage] = useState(false);
  const [filterData, setFilterData] = useState([]);



  function filterTheSelection(e) {
    const type = data.filter(d => d.type === e.target.id)
    const milage = data.filter(d => d.milage === e.target.id)
    if (e.target.id === "All") {
      setFilterData(data)
    } else if (type.length !== 0) {
      setFilterData(type)
    } else if (milage.length !== 0) {
      setFilterData(milage)
    }
  }
  return (<>
    {TokenUser ? <div>
      <NavLogout />
      <SubHeader />
      <div id="select-butn-fileter-container-indiv">
        <div>
          <button onClick={() => setType(false)} onDoubleClick={()=>setType(true)} id="button-of-the-filete-the-data-in-bookin-page">CarType</button>
          {Type ? <div id="car-type-filter-in-booking-page">
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="UV" /><label>UV</label><br />
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="XUV" /><label>XUV</label><br />
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="All" /><label>SVU</label><br />
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="UV" /><label>MUV</label><br />
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="XUV" /><label>Hatch-Back</label><br />
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="All" /><label>All</label><br />
          </div> : null}
        </div>
        <div>
          <button onClick={() => setSeating(false)} onDoubleClick={()=>setSeating(true)} id="button-of-the-filete-the-data-in-bookin-page">Seating</button>
          {seating ? <div id="car-type-filter-in-booking-page">
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="UV" /><label>6 person</label><br />
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="XUV" /><label>9 person</label><br />
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="All" /><label>4 person</label><br />
          </div> : null}
        </div>
        <div>
          <button onClick={() => setMilage(false)} onDoubleClick={()=>setMilage(true)} id="button-of-the-filete-the-data-in-bookin-page">Milage</button>
          {milage ? <div id="car-type-filter-in-booking-page">
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="20Km/L" /><label>20Km/L</label><br />
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="14Km/L" /><label>18Km/L</label><br />
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="14Km/L" /><label>14Km/L</label><br />
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="18Km/L" /><label>15Km/L</label><br />
            <input type="checkbox" className='checkbox-in-filter-in-cartype' onClick={filterTheSelection} id="10Km/L" /><label>10Km/L</label><br />
          </div> : null}
        </div>
      </div>

      {filterData.length > 0 ?
        <div className="usecard-container">
          {filterData.map((d, i) => {
            return <div key={i} className="user-card-container">
              <div className="user-card-main-container">
                <div className="image">
                  <img src={`http://localhost:5000/car/${d.image}`} className="car-image" />
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
        </div> : <div className="usecard-container">
          {data.map((d, i) => {
            return <div key={i} className="user-card-container">
              <div className="user-card-main-container">
                <div className="image">
                  <img src={`http://localhost:5000/car/${d.image}`} className="car-image" />
                </div>
                <div className="capacity">6 Persons</div>
                <div className="innova">
                  <div>{d.name}</div>
                  <div className="color-of-price">{d.milage}</div>
                </div>
                <div className="bottom-section">
                  <button className='ucard-left-button'>Fare Details</button>
                  <Link to="/bookingdetails">
                  <button className='ucard-right-button' onClick={()=>setCarData(d)}>BOOK NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          })
          }
        </div>
      }
    </div> : <Home />}
  </>
  );
}

export default CarDetails;*/
