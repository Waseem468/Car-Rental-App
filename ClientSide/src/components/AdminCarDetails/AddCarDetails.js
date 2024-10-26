import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CarContextData } from "../../context/CarContext";
import "../../styles/AddCarDetails.css";

const AddCarDetails = () => {
  const navigate = useNavigate();
  const { setCarDetails, BaseUrl } = useContext(CarContextData);
  const AdminToken = JSON.parse(localStorage.getItem("Admin-token"));

  // Updated state to match the controller's required fields
  const [formData, setFormData] = useState({
    carName: "",
    carType: "",
    carModel: "",
    mileage: "",
    carNumber: "",
    availableFrom: "",
    availableUntil: "",
    pricePerKm: "",
    description: "",
    carDetails: "",
    details: "",
    capacity: "",
    image: "",
  });

  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle image input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageUrl(URL.createObjectURL(file)); // Preview image
    setFormData((prevData) => ({ ...prevData, image: file })); // Store the file in state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Create FormData object for sending files and text data
    const newFormData = new FormData();
    for (let key in formData) {
      newFormData.append(key, formData[key]);
    }

    // Perform the fetch request
    fetch(`${BaseUrl}/car/add-car`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${AdminToken}`,
      },
      body: newFormData, 
    })
      .then((res) => res.json())
      .then((data) => {
        setCarDetails((prevCars) => [data, ...prevCars]);
        navigate("/adminCarDetails");
      })
      .catch((err) => console.error(err.message))
      .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    navigate("/adminCarDetails");
  };

  return (
    <div className="addcar-container">
      <h4 className="addcar-heading">Add Car Details</h4>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="addcar-section">
          <div className="addcar-section-left">
            <div className="field-group">
              <label>Car Name:</label>
              <input
                name="carName"
                type="text"
                placeholder="Enter your Car name"
                value={formData.carName}
                onChange={handleChange}
              />
            </div>
            <div className="field-row">
              <div className="field-group">
                <label>Type</label>
                <select
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="MPV">MPV</option>
                  <option value="Crossover">Crossover</option>
                  <option value="Convertible">Convertible</option>
                </select>
              </div>
              <div className="field-group">
                <label>Model</label>
                <select
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {formData.carType === "Hatchback" && (
                    <>
                      <option value="Maruti Suzuki Swift">Maruti Suzuki Swift</option>
                      <option value="Hyundai i20">Hyundai i20</option>
                      <option value="Tata Altroz">Tata Altroz</option>
                    </>
                  )}
                  {formData.carType === "Sedan" && (
                    <>
                      <option value="Honda City">Honda City</option>
                      <option value="Hyundai Verna">Hyundai Verna</option>
                      <option value="Maruti Suzuki Ciaz">Maruti Suzuki Ciaz</option>
                    </>
                  )}
                  {formData.carType === "SUV" && (
                    <>
                      <option value="Hyundai Creta">Hyundai Creta</option>
                      <option value="Tata Harrier">Tata Harrier</option>
                      <option value="Toyota Fortuner">Toyota Fortuner</option>
                    </>
                  )}
                  {formData.carType === "MPV" && (
                    <>
                      <option value="Toyota Innova Crysta">Toyota Innova Crysta</option>
                      <option value="Maruti Suzuki Ertiga">Maruti Suzuki Ertiga</option>
                      <option value="Mahindra Marazzo">Mahindra Marazzo</option>
                    </>
                  )}
                  {formData.carType === "Crossover" && (
                    <>
                      <option value="Tata Nexon">Tata Nexon</option>
                      <option value="Renault Kiger">Renault Kiger</option>
                      <option value="Hyundai Venue">Hyundai Venue</option>
                    </>
                  )}
                  {formData.carType === "Convertible" && (
                    <>
                      <option value="Mini Cooper Convertible">Mini Cooper Convertible</option>
                      <option value="BMW Z4">BMW Z4</option>
                      <option value="Porsche 718 Boxster">Porsche 718 Boxster</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="field-row">
              <div className="field-group">
                <label>Mileage</label>
                <select
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="20Km/L">20Km/L</option>
                  <option value="14Km/L">14Km/L</option>
                  <option value="15Km/L">15Km/L</option>
                  <option value="18Km/L">18Km/L</option>
                  <option value="10Km/L">10Km/L</option>
                </select>
              </div>
              <div className="field-group">
                <label>Price Per KM</label>
                <input
                  name="pricePerKm"
                  type="text"
                  placeholder="0000"
                  value={formData.pricePerKm}
                  onChange={handleChange}
                  style={{ width: "90%" }}
                />
              </div>
            </div>

            <div className="field-row">
              <div className="field-group">
                <label>Available From</label>
                <input
                  name="availableFrom"
                  type="date"
                  value={formData.availableFrom}
                  onChange={handleChange}
                  style={{ width: "90%" }}
                />
              </div>
              <div className="field-group">
                <label>Available Until</label>
                <input
                  name="availableUntil"
                  type="date"
                  value={formData.availableUntil}
                  onChange={handleChange}
                  style={{ width: "90%" }}
                />
              </div>
            </div>

            <div className="field-group">
              <label>Capacity</label>
              <input
                name="capacity"
                type="number"
                placeholder="Enter car capacity"
                value={formData.capacity}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label>Car Number</label>
              <input
                name="carNumber"
                type="text"
                placeholder="Enter car number"
                value={formData.carNumber}
                onChange={handleChange}
              />
            </div>

            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>

          <div className="addcar-section-right">
            <div className="field-group">
              <label>Car Image</label>
              <input type="file" name="image" onChange={handleImageChange} />
              {imageUrl && (
                <div className="image-preview">
                  <img src={imageUrl} alt="Preview" />
                </div>
              )}
            </div>

            <div className="field-group">
              <label>Car Details</label>
              <textarea
                name="carDetails"
                placeholder="Enter car details"
                value={formData.carDetails}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label>Description</label>
              <textarea
                name="description"
                type="text"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label>Details</label>
              <textarea
                name="details"
                placeholder="Enter additional details"
                value={formData.details}
                onChange={handleChange}
              />
            </div>

            <div className="btn-submit">
              <button type="submit" disabled={loading}>
                {loading ? "Adding..." : "Add"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCarDetails;
