import React, { createContext, useState } from "react";

export const CarContextData = createContext();

export default function CarContext({ children }) {
  const [carDetails, setCarDetails] = useState([]);
  const [edit, setEdit] = useState({});
  const [headerData, setHeaderData] = useState({});
  const [carData, setCarData] = useState({});
  const [bookingDetails, setBookingDetails] = useState([]);
  const [editBookingDetails, setEditBookingDetails] = useState({});
  const [view, setView] = useState("login");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminRegister, setShowAdminRegister] = useState(false);
  const [userSelectedCar,setUserSelectedCar]=useState({});
  const [isEditMode,setIsEditMode]=useState(false)

  const BaseUrl="http://localhost:5000"
  // const BaseUrl="https://car-rental-app-1-5tgr.onrender.com"

  return (
    <CarContextData.Provider
      value={{
        carDetails,
        setCarDetails,
        edit,
        setEdit,
        headerData,
        setHeaderData,
        carData,
        setCarData,
        bookingDetails,
        setBookingDetails,
        editBookingDetails,
        setEditBookingDetails,
        view,
        setView,
        isAdmin,
        setIsAdmin,
        showAdminRegister,
        setShowAdminRegister,
        userSelectedCar,
        setUserSelectedCar,
        BaseUrl,
        isEditMode,
        setIsEditMode
      }}
    >
      {children}
    </CarContextData.Provider>
  );
}
