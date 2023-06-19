
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/AddCarDetails.css'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom"
import { CarContextData } from '../Context/CarContext'

const AddCarDetails = () => {
    const navigator = useNavigate();
    const { setCar } = useContext(CarContextData);
    const [imageUrl, setImageUrl] = useState()
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
    const {name,type,model,milage,image,perKm,description,carDetails,Details,availabelUntil,availabelFrom}=data

    const [loder, setLoder] = useState(false);
    const AdminToken = JSON.parse(localStorage.getItem("Admin-token"))

    // const handleimagechange = (e) => {

    //     const imagearray = [];
    //     const images = e.target.files

    //     for (let i = 0; i < images.length; i++) {
    //         imagearray.push(URL.createObjectURL(images[i]))
    //     }
    //     setimage(imagearray)
    //     console.log(imagearray);
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello")
        const newformData = new FormData(e.target)
        // newformData.append("AdminId", localStorage.getItem("Admin-Id"))

        fetch("http://localhost:5000/car/", {
            method: 'POST',
            headers: {
                "authorization": JSON.parse(localStorage.getItem("Admin-token"))
            },
            body: newformData
        }).then(res => res.json()).then(data => {
            setCar(d => {
                return [data, ...d]
            })
        }).catch(err => {
            console.log(err.message)
        })
        setLoder(false)
        setData({
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
        })
        navigator("/adminCarDetails")
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
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                value={name}
                                name="name"
                                type="text"
                                placeholder="Enter your Car name"
                            />
                        </div>
                        <div className='main-field'>
                            <div className='Field-containor'>
                                <label>Type</label>
                                <select name="type" onChange={(e) => setData({ ...data, type: e.target.value })} value={type}>
                                    <option>select</option>
                                    <option>UV</option>
                                    <option>XUV</option>
                                    <option>SUV</option>
                                    <option>MUV</option>
                                    <option>Hatch-Back</option>
                                </select>
                            </div>
                            <div className='Field-containor'>
                                <label>Model </label>
                                <select name="model" onChange={(e) => setData({ ...data, model: e.target.value })} value={model}>
                                    <option>Select</option>
                                    <option value="Ford">I20</option>
                                    <option value="Volvo">Sports10</option>
                                    <option value="Fiat">Grand I20</option>
                                </select>
                            </div>
                        </div>
                        <div className='main-field'>
                            <div className='Field-containor'>
                                <label>Milage  </label>
                                <select name="milage" onChange={(e) => setData({ ...data, milage: e.target.value })} value={milage}>
                                    <option>Select</option>
                                    <option>20Km/L</option>
                                    <option>14Km/L</option>
                                    <option>15Km/L</option>
                                    <option>18Km/L</option>
                                    <option>10Km/L</option>
                                </select>
                            </div>
                            <div className='Field-containor'>
                                <label>Per KM:  </label>
                                <input
                                    onChange={(e) => setData({ ...data, perKm: e.target.value })}
                                    value={perKm}
                                    name="perKm"
                                    type="text"
                                    placeholder="0 0 0 0"
                                />
                            </div>
                        </div>
                        <div className='main-field'><div className='Field-containor'>
                            <label>Available from </label>
                            <input
                                onChange={(e) => setData({ ...data, availabelFrom: e.target.value })}
                                value={availabelFrom}
                                name="availabelFrom"
                                type="date"
                            />
                        </div>
                            <div className='Field-containor'>
                                <label>Available Till </label>
                                <input
                                    onChange={(e) => setData({ ...data, availabelUntil: e.target.value })}
                                    value={availabelUntil}
                                    name="availabelUntil"
                                    type="date"
                                />
                            </div></div>
                        <div className='Field-containor'>
                            <label>Description:</label>
                            <input
                                onChange={(e) => setData({ ...data, description: e.target.value })}
                                value={description}
                                name="description"
                                type="text"
                                placeholder="Description"
                            />
                        </div>
                        <div >
                            <button className='cancel-btn' onClick={() => navigator("/adminCarDetails")} >Cancel</button>
                        </div>
                    </div>
                    <div className='rightSection'>
                        <div className='form-containor2'>
                            <div className='main-field'>
                            <input type="file" name="image" onChange={ (e)=>{
                    setImageUrl(URL.createObjectURL(e.target.files[0]));
                    setData({...data,image:e.target.files[0]})}}  
                   ></input>
                               { imageUrl? <div>
                   
                   <div className="image-preview">
                      <img src={imageUrl} className="image-preview" alt='img-preview'></img>
                   </div>
                   
              </div>:null}
                                
                            </div>
                            <div className='Field-containor'>
                                <label>Car Details:   </label>
                                <input
                                    onChange={(e) => setData({ ...data, carDetails: e.target.value })}
                                    value={carDetails}
                                    name="carDetails"
                                    type="text"
                                    placeholder="Enter your Car Details"
                                    style={{ height: '70px' }}
                                />
                            </div>
                            <div className='Field-containor'>
                                <label>Details:   </label>
                                <input
                                    onChange={(e) => setData({ ...data, Details: e.target.value })}
                                    value={Details}
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
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default AddCarDetails