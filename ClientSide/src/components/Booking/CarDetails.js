import React from 'react';
import NavLogout from '../NavLogout';
import SubHeader from './SubHeader';
import SelectionHeader from './SelectionHeader';
import Card from './Card';


function CarDetails(){
    return(
      <>
      <NavLogout/>
      <SubHeader/>
      <SelectionHeader/>
      <Card/>
      </>
    );
}

export default CarDetails;