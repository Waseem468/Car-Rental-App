import React from "react";
import "../../styles/Orderpage.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CarContextData } from "../../context/CarContext";
import Home from "../../pages/Home";

const Orderpage = () => {
  const tokenUser = JSON.parse(localStorage.getItem("User-token"));
  const { setHeaderData, inputdata, setInputData } = useContext(CarContextData);

  const navigate = useNavigate();
  const handleTheInputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputdata, [name]: value });
  };
  const saveTheData = (e) => {
    e.preventDefault();
    const { origin, destination, startDate, endDate } = inputdata;
    const formData = new FormData();
    formData.append("origin", origin);
    formData.append("destination", destination);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);

    console.log(inputdata);
    navigate("/cardetails");
  };
  setHeaderData(inputdata);
  return (
    <>
      {tokenUser ? (
        <>
          <div className="orderpage-main-container">
            <div className="order-Home-page">
              <div className="order-login-form" id="form">
                <form onSubmit={saveTheData}>
                  <h4 className="">
                    Main quote for the Website <br />
                    will be Placed here to make
                    <br />
                    understand
                  </h4>
                  <input
                    type="text"
                    name="origin"
                    className="order-login-admin"
                    placeholder="origin name"
                    onChange={handleTheInputData}
                    required
                  ></input>
                  <input
                    type="text"
                    name="destination"
                    className="order-login-admin"
                    placeholder="destination name"
                    onChange={handleTheInputData}
                    required
                  ></input>
                  <input
                    type="date"
                    name="startDate"
                    className="order-login-admin"
                    placeholder="startdate"
                    onChange={handleTheInputData}
                    required
                  ></input>
                  <br />
                  <input
                    type="date"
                    name="endDate"
                    className="order-login-admin"
                    placeholder="enddate"
                    onChange={handleTheInputData}
                    required
                  ></input>

                  <div className="admin-login-page">
                    <button type="submit" className="order-login-page-btn">
                      Check
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Orderpage;
