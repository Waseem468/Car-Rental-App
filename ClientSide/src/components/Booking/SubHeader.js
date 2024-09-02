import React from 'react';
import '../../styles/subheader.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarContextData } from '../../context/CarContext';

function SubHeader(){
  const { headerData, setheaderData } = useContext(CarContextData);
    return(
      <>
      <div className='sub-header'>
        <div className="subheader-name">Origin Name </div><div className="mark">{headerData.origin}</div>
        <div className="subheader-name">Destination Name</div><div className="mark">{headerData.destination}</div>
        <div className="subheader-name">Start Date</div><div className="mark">{headerData.startDate}</div>
        <div className="subheader-name" >End Date</div><div className="mark">{headerData.endDate}</div>
        <Link to={'/orderpage'}>
        <button onClick={()=>setheaderData(headerData)} className="modify-btn">MODIFY</button>
        </Link>
      </div>
      </>
    );
}

export default SubHeader;