import React, { useState, useContext } from 'react'
import '../../Styles/AddCarDetails.css'
import NavLogout from '../NavLogout'
import { Link, useNavigate } from 'react-router-dom'
import { CarContextData } from '../../Context/CarContext'
import { deleteCar} from '../../Utils/CarUtils'

const EditCarDetails = () => {
    const { setCar, edit, setEdit, car } = useContext(CarContextData);
    const [imageUrl, setImageUrl] = useState("");
    const Navigater = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const EditformData = new FormData(e.target)

        fetch(`http://localhost:5000/car/${edit._id}`, {
            method: "PUT",
            headers: {
                "authorization": JSON.parse(localStorage.getItem("Admin-token")),

            },
            body: EditformData
        }).then(res => res.json())
            .then(data => setCar(e => {
                return e.map(d => {
                    if (d._id === data._id) {
                        return data
                    }
                    return d;
                })
            }))
        Navigater("/adminCarDetails");

    }
    const AdminToken = JSON.parse(localStorage.getItem("Admin-token"))
    const AdminId = JSON.parse(localStorage.getItem("Admin-Id"));
    return (
        <>
            <NavLogout />
            <div className='addcar-main-containor'>
                <div className='heading'>
                    <h4>Edit Car Details</h4>
                </div>
                <form onSubmit={handleSubmit} encType='multipart/form-data' >
                    <div className='leftSection addcar-form-containor'>

                        <div className='Field-containor'>
                            <label style={{ marginTop: '0px' }}>Car name:</label>
                            <input
                                onChange={(e) => setEdit({ ...edit, name: e.target.value })}
                                value={edit.name}
                                name="name"
                                type="text"
                                placeholder="Enter your Car name"
                            />
                        </div>
                        <div className='main-field'>
                            <div className='Field-containor'>
                                <label>Type</label>
                                <select name="type" onChange={(e) => setEdit({ ...edit, type: e.target.value })} value={edit.type}>
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
                                <select name="model" onChange={(e) => setEdit({ ...edit, model: e.target.value })} value={edit.model}>
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
                                <select name="milage" onChange={(e) => setEdit({ ...edit, milage: e.target.value })} value={edit.milage}>
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
                                    onChange={(e) => setEdit({ ...edit, perKm: e.target.value })}
                                    value={edit.perKm}
                                    name="perKm"
                                    type="text"
                                    placeholder="0 0 0 0"
                                />
                            </div>
                        </div>
                        <div className='main-field'><div className='Field-containor'>
                            <label>Available from </label>
                            <input
                                onChange={(e) => setEdit({ ...edit, availabelFrom: e.target.value })}
                                value={edit.availabelFrom}
                                name="availabelFrom"
                                type="date"
                            />
                        </div>
                            <div className='Field-containor'>
                                <label>Available Till </label>
                                <input
                                    onChange={(e) => setEdit({ ...edit, availabelUntil: e.target.value })}
                                    value={edit.availabelUntil}
                                    name="availabelUntil"
                                    type="date"
                                />
                            </div></div>
                        <div className='Field-containor'>
                            <label>Description:</label>
                            <input
                                onChange={(e) => setEdit({ ...edit, description: e.target.value })}
                                value={edit.description}
                                name="description"
                                type="text"
                                placeholder="Description"
                            />
                        </div>
                        <div >
                            <button className='cancel-btn' onClick={() => Navigater("/adminCarDetails")} >Cancel</button>
                        </div>
                    </div>
                    <div className='rightSection'>
                        <div className='form-containor2'>
                            <div className='main-field'>
                            <input type="file" name="image" onChange={ (e)=>{
                    setImageUrl(URL.createObjectURL(e.target.files[0]));
                    setEdit({...edit,image:e.target.files[0]})}}  
                   ></input>
                               { imageUrl? <div>
                   
                   <div className="image-preview">
                      <img src={imageUrl} className="image-preview" alt='img-preview'></img>
                   </div>
                   
              </div>:<div id="imgs-add-car-container">
                   
                   <div className="img-sort-box">

                      <img src={`http://localhost:5000/car/${edit.image}`} className="image-preview"alt='set-img' ></img>

                   </div>
                   
              </div>}
                            </div>
                            <div className='Field-containor'>
                                <label>Car Details:   </label>
                                <input
                                    onChange={(e) => setEdit({ ...edit, carDetails: e.target.value })}
                                    value={edit.carDetails}
                                    name="carDetails"
                                    type="text"
                                    placeholder="Enter your Car Details"
                                    style={{ height: '70px' }}
                                />
                            </div>
                            <div className='Field-containor'>
                                <label>Details:   </label>
                                <input
                                    onChange={(e) => setEdit({ ...edit, Details: e.target.value })}
                                    value={edit.Details}
                                    name="Details"
                                    type="text"
                                    placeholder="Enter your Details"
                                    style={{ height: '70px' }}
                                />
                            </div>
                            <div className='btn2'>
                                <button onClick={()=>{deleteCar(edit._id)}} style={{
                                    width: '150px',
                                    height: '35px', borderRadius: '50px', backgroundColor: 'red'
                                    , color: 'white', marginRight: '10px'
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
