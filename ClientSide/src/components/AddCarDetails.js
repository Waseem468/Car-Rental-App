
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/AddCarDetails.css'
import Navbar from './Navbar'
const AddCarDetails = () => {
    const [imageurl, setimage] = useState()
    const [data, setData] = useState({
        name: "",
        type: "",
        model: "",
        milage: "",
        image: "",
        availableFrom: "",
        availableTill: "",
        perKm: "",
        description: "",
        carDetails: "",
        Details: ""
    });
    const handleimagechange = (e) => {

        const imagearray = [];
        const images = e.target.files

        for (let i = 0; i < images.length; i++) {
            imagearray.push(URL.createObjectURL(images[i]))
        }
        setimage(imagearray)
        console.log(imagearray);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello")
        const newformData = new FormData(e.target)
        newformData.append("AdminId", localStorage.getItem("Admin-Id"))

        fetch("http://localhost:5000/car/", {
            method: 'POST',
            body: newformData
        }).then(res => res.json()).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err.message)
        })
    }
    return (
        <>
            <Navbar />
            <div className='addcar-main-containor'>
                <div className='addcar-heading'>
                    <h4 className='heading'>Add Car Details</h4>
                </div>
                <form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className='leftSection addcar-form-containor'>

                        <div className='Field-containor'>
                            <label style={{ marginTop: '0px' }}>Car name:</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your Car name"
                            />
                        </div>
                        <div className='main-field'>
                            <div className='Field-containor'>
                                <label>Type</label>
                                <select name="type">
                                    <option value="Ford">Ford</option>
                                    <option value="Volvo">Volvo</option>
                                    <option value="Fiat">Fiat</option>
                                </select>
                            </div>
                            <div className='Field-containor'>
                                <label>Model </label>
                                <select name="model">
                                    <option value="Ford">Ford</option>
                                    <option value="Volvo">Volvo</option>
                                    <option value="Fiat">Fiat</option>
                                </select>
                            </div>
                        </div>
                        <div className='main-field'>
                            <div className='Field-containor'>
                                <label>Milage  </label>
                                <select name="milage">
                                    <option value="Ford">20km/lit</option>
                                    <option value="Volvo">15km/lit</option>
                                    <option value="Fiat">12km/lit</option>
                                </select>
                            </div>
                            <div className='Field-containor'>
                                <label>Per KM:  </label>
                                <input
                                    name="perKm"
                                    type="text"
                                    placeholder="0 0 0 0"
                                />
                            </div>
                        </div>
                        <div className='main-field'><div className='Field-containor'>
                            <label>Available from </label>
                            <input
                                name="availabelFrom"
                                type="date"
                            />
                        </div>
                            <div className='Field-containor'>
                                <label>Available Till </label>
                                <input
                                    name="availabelUntil"
                                    type="date"
                                />
                            </div></div>
                        <div className='Field-containor'>
                            <label>Description:</label>
                            <input
                                name="description"
                                type="text"
                                placeholder="Description"
                            />
                        </div>
                        <div >
                            <button className='cancel-btn' >Cancel</button>
                        </div>
                    </div>
                    <div className='rightSection'>
                        <div className='form-containor2'>
                            <div className='main-field'>
                                <input type='file' accept="image/*" multiple onChange={handleimagechange} name="image" />
                                {imageurl ? imageurl.map((data, index) => (<img key={index} className='image-preview' src={data} alt='error' />)) : null}
                                <span>
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                </span>
                            </div>
                            <div className='Field-containor'>
                                <label>Car Details:   </label>
                                <input
                                    name="carDetails"
                                    type="text"
                                    placeholder="Enter your Car Details"
                                    style={{ height: '70px' }}
                                />
                            </div>
                            <div className='Field-containor'>
                                <label>Details:   </label>
                                <input
                                    name="Details"
                                    type="text"
                                    placeholder="Enter your Details"
                                    style={{ height: '70px' }}
                                />
                            </div>
                            <div className='btn2'>
                                <button type="submit" style={{
                                    width: '150px',
                                    height: '35px', borderRadius: '50px', backgroundColor: 'blue'
                                    , color: 'white'
                                }}>ADD</button>
                                {/* <input type='file' className='car-images' id='car-images' hidden /> */}
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default AddCarDetails