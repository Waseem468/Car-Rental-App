import React from 'react';
import '../../Styles/selectionHeader.css';
function SelectionHeader() {
    return (
        <>
            <div id="filter-the-car-selection">
                <div id="choose-the-car-type">
                    <select className="select">
                        <option>Car Type</option>
                        <option>XUV</option>
                        <option>UV</option>
                        <option>All</option>
                    </select>

                    <select className="select">
                        <option>Seating</option>
                        <option>10</option>
                        <option>6</option>
                        <option>4</option>
                    </select>

                    <select className="select">
                        <option>Milage</option>
                        <option>10KM/L</option>
                        <option>20KM/L</option>
                        <option>15KM/L</option>
                    </select>

                    <button className='select'>Other</button>
                </div>
            </div>
        </>
    );
}

export default SelectionHeader;