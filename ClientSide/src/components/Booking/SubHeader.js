import React from 'react';
import '../../Styles/subheader.css';
import { Link } from 'react-router-dom';

function SubHeader(){
    return(
      <>
      <div className='sub-header'>
        <div className="subheader-name">Origin Name </div><div className="mark">--</div>
        <div className="subheader-name">Destination Name</div>
        <div className="subheader-name">Start Date </div><div className="mark">--</div>
        <div className="subheader-name" >End Date</div>
        <Link to={'/orderpage'}>
        <button className="modify-btn">MODIFY</button>
        </Link>
      </div>
      </>
    );
}

export default SubHeader;