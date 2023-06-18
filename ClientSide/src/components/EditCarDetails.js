import React from 'react'
import '../Styles/AddCarDetails.css'
import NavLogout from './NavLogout'
const EditCarDetails = () => {
    return (
        <>
       <NavLogout/>
        <div className='addcar-main-containor'>
            <div className='heading'>
                    <h4>Edit Car Details</h4>
                </div>
                <form >
            <div className='leftSection addcar-form-containor'>
                
                    <div className='Field-containor'>
                        <label style={{ marginTop: '0px' }}>Car name:   </label>
                        <input
                            type="text"
                            placeholder="Enter your Car name"
                        />
                    </div>
                    <div className='main-field'>
                        <div className='Field-containor'>
                            <label>Type</label>
                            <select placeholder='name'>
                                <option value="Ford">Ford</option>
                                <option value="Volvo">Volvo</option>
                                <option value="Fiat">Fiat</option>
                            </select>
                        </div>
                        <div className='Field-containor'>
                            <label>Model </label>
                            <select placeholder='name'>
                                <option value="Ford">Ford</option>
                                <option value="Volvo">Volvo</option>
                                <option value="Fiat">Fiat</option>
                            </select>
                        </div>
                    </div>
                    <div className='main-field'>
                        <div className='Field-containor'>
                            <label>Milage  </label>
                            <select placeholder='name'>
                                <option value="Ford">20 km/lit</option>
                                <option value="Volvo">18 km/lit</option>
                                <option value="Fiat">12km/lit</option>
                            </select>
                        </div>
                        <div className='Field-containor'>
                            <label>Per KM:  </label>
                            <input
                                type="text"
                                placeholder="0 0 0 0"
                            />
                        </div>
                    </div>
                    <div className='main-field'><div className='Field-containor'>
                        <label>Available from </label>
                        <input
                            type="date"
                        />
                    </div>
                        <div className='Field-containor'>
                            <label>Available Till </label>
                            <input
                                type="date"
                            />
                        </div></div>
                    <div className='Field-containor'>
                        <label>Description:</label>
                        <input
                            type="text"
                            placeholder="Description"
                        />
                    </div>
                    <div className='btn'>
                        <button style={{
                            width: '150px',
                            height: '35px', borderRadius: '50px', color: 'white',background:"hotpink",
                            marginTop:'20px'
                        }}>Cancel</button>
                    </div>
            </div>
            <div className='rightSection'>
                <div className='form-containor2'>
                    <div className='main-field'>
                        <p>images:</p>
                        <span>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </span>
                        <span>
                            <button>Add</button>
                        </span>
                    </div>
                    <div className='Field-containor'>
                        <label>Car Details:   </label>
                        <input
                            type="text"
                            placeholder="Enter your Car Details"
                            style={{ height: '70px' }}
                        />
                    </div>
                    <div className='Field-containor'>
                        <label>Details:   </label>
                        <input
                            type="text"
                            placeholder="Enter your Details"
                            style={{ height: '70px' }}
                            />
                    </div>
                    <div className='btn2'>
                    <button style={{
                            width: '150px',
                            height: '35px', borderRadius: '50px', backgroundColor: 'red'
                            , color: 'white',marginRight:'10px'
                        }}>Delete</button>
                        <button style={{
                            width: '150px',
                            height: '35px', borderRadius: '50px', backgroundColor: 'blue'
                            , color: 'white'
                        }}>Save</button>
                    </div>
                </div>
            </div>
                            </form>
        </div>
        </>
    )
}
export default EditCarDetails
