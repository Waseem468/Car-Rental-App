import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/AddCarDetails.css'
import Navbar from './Navbar'
const AddCarDetails = () => {
    return (
        <div className='addcar-main-containor'>
            <Navbar/>
            <div className='leftSection'>
                <div className='addcar-heading'>
                    <h4>Add Car Details</h4>

                </div>
                <form className='addcar-form-containor' encType='multipart/form-data'>


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
                                <option value="Ford">Ford</option>
                                <option value="Volvo">Volvo</option>
                                <option value="Fiat">Fiat</option>
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
                            height: '35px', borderRadius: '50px', color: 'blue'
                        }}>Cancel</button>
                    </div>

                </form>
            </div>
            <div className='rightSection'>
                <form className='form-containor2'>
                    <div className='main-field'>
                    <input type='file'/>
                 <p>images:</p>
                        <span>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </span> 
                        <span>
                            <Link to={'/admincardetails'}>
                            <button>Add</button>                          
                            </Link>
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
                                height: '35px', borderRadius: '50px', backgroundColor: 'blue'
                                , color: 'white'
                            }}>ADD</button>
                        <input type='file' className='car-images' id='car-images' hidden />
                        </div>
                </form>

            </div>
        </div>
    )
}

export default AddCarDetails
